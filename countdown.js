// set  the target date
const targetDate = new Date("2023-12-25T00:00:00");

function updateCountdown() {
    // bring the current time
    const now = new Date(new Date());

    // calculate the remaining time
    const timeRemaining = targetDate - now;

    // calculate remaining  hr, min, sec
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // update the result to HTML
    const countdownElement = document.getElementById('countdown');
    countdownElement.style.color = '#FF9EA9'
    countdownElement.innerHTML = `
      <span>D-${days}  ${hours}hr ${minutes}min ${seconds}sec</span>`;
}
// call the function when the page gets loaded
updateCountdown();

// update every second
setInterval(updateCountdown, 1000);


// allow to open the card based on the date
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    //bring current time
    const now = new Date(new Date());

    // calculate the open date
    const openDate = new Date(2023, 11, index + 1); // starts from 2023-12-1, months are zero-indexed so 11 is December

    // check if current date is after the open date
    if (now.getTime() > openDate.getTime()) {
      // open or do certain action to the modal

      // in the index to call the correct image url
      const imageUrl = `image/card/card-${index + 1}.png`;

      // select the elment with the class 'back' and apply the style
      const doorDiv = document.querySelector(`.day-${index + 1}`)
      const backDiv = doorDiv.querySelector(`.back`);

      const style = window.getComputedStyle(backDiv);
      const pTag = backDiv.querySelector('p')
      const text = modalMessageList[index]['message']

      // call the function showModal to show the modal
      showModal(imageUrl, text);
      //it opens the event calender

    } else {
      // it it is not the open date yet, then show that you can open after x days
      const daysRemaining = Math.ceil((openDate - now) / (1000 * 60 * 60 * 24));
      console.log(openDate, now, daysRemaining)
      alert(`You can read the message after ${daysRemaining}days!`);
    }
  });
});