document.getElementById("btn-vb").addEventListener("click", () => {
  document.getElementById("mark-vb").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
document.getElementById("btn-coding").addEventListener("click", () => {
  document.getElementById("mark-coding").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
document.getElementById("btn-engineering").addEventListener("click", () => {
  document.getElementById("mark-engineering").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

/* Slideshow Logic */
const slidesData = {
  volleyball: [
    { src: 'assets/placeholder.jpeg', caption: 'Me On The Volleyball Court' },
    { src: 'assets/placeholder.jpeg', caption: 'Team Huddle' } // Placeholder for demo
  ],
  coding: [
    { src: 'assets/projectimg1.png', caption: "Gameplay The Mario Fangame I Coded, 'Mario Maker 404'" },
    { src: 'assets/projectimg2.png', caption: "My Python program turns images into mosiacs made up of car images" }
  ],
  engineering: [
    { src: 'assets/engineering.jpg', caption: 'My Mini Laptop Creation In Development' },
    { src: 'assets/placeholder.jpeg', caption: '3D Printing The Case' } // Placeholder for demo
  ]
};

const slideIndices = {
  volleyball: 0,
  coding: 0,
  engineering: 0
};

document.querySelectorAll('.slideshow-wrapper').forEach(wrapper => {
  const category = wrapper.getAttribute('data-category');
  const leftBtn = wrapper.querySelector('.left-arrow');
  const rightBtn = wrapper.querySelector('.right-arrow');

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => changeSlide(category, -1));
    rightBtn.addEventListener('click', () => changeSlide(category, 1));
  }
});

function changeSlide(category, direction) {
  if (!slidesData[category]) return;

  const wrapper = document.querySelector(`.slideshow-wrapper[data-category="${category}"]`);
  if (!wrapper) return;

  const imgElement = wrapper.querySelector('.active-slide-img');
  const captionElement = wrapper.querySelector('.active-slide-caption');

  // Calculate new index
  let currentIndex = slideIndices[category];
  const slides = slidesData[category];

  currentIndex += direction;

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  slideIndices[category] = currentIndex;

  // Update UI with transition
  imgElement.style.opacity = '0';

  setTimeout(() => {
    imgElement.src = slides[currentIndex].src;
    captionElement.textContent = slides[currentIndex].caption;
    imgElement.style.opacity = '1';
  }, 200); // Matches the CCS transition speed roughly
}
