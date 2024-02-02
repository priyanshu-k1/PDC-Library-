document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function switchSlide(nextSlide) {
      if (slides.length > 0) { // Ensure slides exist before accessing them
        slides[currentSlide].classList.remove('active');
        slides[nextSlide].classList.add('active');
        currentSlide = nextSlide;
      } else {
        console.error('Slides not found in the DOM.'); // Log an error if slides are missing
      }
    }
  
    setInterval(() => {
      switchSlide((currentSlide + 1) % slides.length);
    }, 3000); // Change 3000 to desired interval in milliseconds
  });