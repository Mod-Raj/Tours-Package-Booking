// Nav-Bar 
document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
  
    toggler.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      collapse.classList.toggle('show');
    });
  });

  // customers-Section-JS

  document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const avatars = document.querySelectorAll('.avatar');
    const totalAvatars = avatars.length;

    function updateAvatars() {
        avatars.forEach((avatar, index) => {
            avatar.style.display = (index >= currentIndex && index < currentIndex + 5) ? 'block' : 'none';
        });
    }

    document.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < totalAvatars - 5) {
            currentIndex++;
            updateAvatars();
        }
    });

    document.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateAvatars();
        }
    });

    updateAvatars();
});

// -----------

function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}

//=======================Top-Destination===================-->


// Menu.
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-item').forEach(button => button.classList.remove('active'));
        this.classList.add('active');
    });
});

// 
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselWrapper = document.querySelector('.carousel-wrapper');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselWrapper.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const cardWidth = carouselWrapper.children[0].offsetWidth;
    const newTransformValue = -currentIndex * (cardWidth + 20); // 20px margin
    carouselWrapper.style.transform = `translateX(${newTransformValue}px)`;
}
