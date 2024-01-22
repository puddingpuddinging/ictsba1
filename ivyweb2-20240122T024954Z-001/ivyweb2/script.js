
const thumbnails = document.querySelectorAll('.video-thumbnails img');
const video = document.querySelector('.video-youtube iframe');
const videoInfo = document.querySelector('.video-info');

thumbnails.forEach(function(thumbnail) {
 thumbnail.addEventListener('click', function() {
   const videoId = this.getAttribute('data-video-id');
   const thumbnailSrc = this.getAttribute('src');
   const videoTitle = this.getAttribute('alt');
   const videoDescription = this.getAttribute('data-description');
   video.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
   videoInfo.querySelector('h2').textContent = videoTitle;
   videoInfo.querySelector('p').textContent = videoDescription;
   thumbnails.forEach(function(thumbnail) {
     thumbnail.classList.remove('active');
   });
   this.classList.add('active');
 });
});



document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.know-more-link');
  var closeButtons = document.querySelectorAll('.close-btn');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Close all popups first
      document.querySelectorAll('.popup-box').forEach(function(popup) {
        popup.style.display = 'none';
      });
      // Show the clicked button's popup
      // Find the parent container of the clicked button, then the popup within that container
      var popup = btn.closest('.know-more-container').querySelector('.popup-box');
      if (popup) {
        popup.style.display = 'block';
      }
    });
  });

  closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Find the parent container of the clicked close button, then the popup within that container
      var popup = btn.closest('.know-more-container').querySelector('.popup-box');
      if (popup) {
        popup.style.display = 'none';
      }
    });
  });

  // Optional: Close the pop-up box when clicking outside of it
  window.addEventListener('click', function(event) {
    document.querySelectorAll('.popup-box').forEach(function(popup) {
      if (!popup.contains(event.target) && !event.target.matches('.know-more-link') && !event.target.matches('.close-btn')) {
        popup.style.display = 'none';
      }
    });
  });
});
