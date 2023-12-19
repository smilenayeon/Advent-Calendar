// sharing
document.getElementById('shareButton').addEventListener('click', async () => {
  try {
    // Check if the Web Share API is available
    if (!navigator.share) {
      alert('Web Share API is not available on your browser.');
      return;
    }

    // Your share data 
    const shareData = {
      title: "Na Yeon(Diana)'s Advent Calendar",
      text: "Check out Na Yeon(Diana)'s Advent Calendar!",
      url: window.location.href
    };

    // Invoke the share dialog
    await navigator.share(shareData); //using web brower API
    console.log('Data was shared successfully');
  } catch (err) {
    console.error('Share failed:', err.message);
  }
});