// function to create and set modal
function showModal(imageUrl, text) {
  // remove the existing modal
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // create modal
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // create container that holds modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // create element to show imgage
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // create element to show text
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // add image and text to modal content
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  //add modal content to modal
  modal.appendChild(modalContent);

  // add click event listener to close the modal
  modal.addEventListener('click', () => {
    modal.remove(); // remove the dodal from the document
  });

  // add modal to the document
  document.body.appendChild(modal);
  // show modal
  setTimeout(() => modal.classList.remove('hidden'), 0);
}
// function to handle click on door
const modalMessageList = [
  { "number": 1, "message": "The season of happiness, a day for everyone on the 24th!" },
  { "number": 2, "message": "This December, happy moments embrace us." },
  { "number": 3, "message": "A fun 24th day for everyone, filled with happiness!" },
  { "number": 4, "message": "Share the specialness of December with everyone." },
  { "number": 5, "message": "A special 24th day made up of everyone's small happiness!" },
  { "number": 6, "message": "A calendar named happiness, open to everyone." },
  { "number": 7, "message": "The joy of being together, may it continue for 24 days." },
  { "number": 8, "message": "December is a month full of happy moments." },
  { "number": 9, "message": "A special season of happiness that has come to us all!" },
  { "number": 10, "message": "Hoping that every day is filled with happiness on the 24th." },
  { "number": 11, "message": "December, a precious time shared with you, full of happiness." },
  { "number": 12, "message": "The 24th day we all share, happiness will come in many forms." },
  { "number": 13, "message": "A special 24th day when the waves of happiness reach everyone!" },
  { "number": 14, "message": "In December, may small happiness come together to create great joy." },
  { "number": 15, "message": "Looking forward to a 24th day overflowing with happiness for everyone." },
  { "number": 16, "message": "Special moments in December, may happiness spread." },
  { "number": 17, "message": "Looking forward to a happy 24th day for everyone!" },
  { "number": 18, "message": "December, a time filled with happiness in our hearts." },
  { "number": 19, "message": "The 24th day when various happiness comes together as one!" },
  { "number": 20, "message": "December, special moments of happiness shared with you." },
  { "number": 21, "message": "Hoping for happiness to accompany everyone on the 24th day!" },
  { "number": 22, "message": "December's happy aura envelops us all." },
  { "number": 23, "message": "A 24th day full of happy feelings for everyone to share." },
  { "number": 24, "message": "December, a month overflowing with joy and happiness for everyone." }
];

