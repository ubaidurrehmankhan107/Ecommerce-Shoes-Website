const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Perform the desired action when the button is clicked (e.g., add item to cart)
    console.log('Item added to cart');
  });
});



// Hero Section 

const canvas = document.getElementById('hero-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(0, 2, 2);
scene.add(directionalLight);

// Load 3D models (watches and bags)
const loader = new THREE.GLTFLoader();

// Load watches.glb
// Load bags.glb
loader.load('bags.glb', function(gltf) {
  const bags = gltf.scene;
  bags.position.y = -1;
  bags.rotation.y = Math.PI;
  scene.add(bags);
}, undefined, function(error) {
  console.error(error);
});



// Load bags.glb
loader.load('bags.glb', function(gltf) {
  const bags = gltf.scene;
  bags.position.y = -1;
  bags.rotation.y = Math.PI;
  scene.add(bags);
}, undefined, function(error) {
  console.error(error);
});




function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();






// const scrollerInner = document.querySelector('.scroller-inner');
// const scrollDistance = 340; // Adjust scroll distance as needed
// let scrollPosition = 0;

// document.querySelector('.scroll-right').addEventListener('click', function() {
//   scrollPosition += scrollDistance;
//   scrollerInner.style.transform = `translateX(-${scrollPosition}px)`;
// });

// document.querySelector('.scroll-left').addEventListener('click', function() {
//   if (scrollPosition > 0) {
//     scrollPosition -= scrollDistance;
//     scrollerInner.style.transform = `translateX(-${scrollPosition}px)`;
//   }



// // Get the carousel elements
// const scrollerInner = document.querySelector('.scroller-inner');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');

// // Calculate the scroll distance based on the width of the product cards
// const scrollDistance = document.querySelector('.project-card').offsetWidth + 20;

// // Event listeners for the previous and next buttons
// prevButton.addEventListener('click', scrollPrevious);
// nextButton.addEventListener('click', scrollNext);

// function scrollPrevious() {
//   const currentPosition = scrollerInner.scrollLeft;
//   const targetPosition = currentPosition - scrollDistance;

//   scrollerInner.scrollTo({
//     left: targetPosition,
//     behavior: 'smooth'
//   });
// }

// function scrollNext() {
//   const currentPosition = scrollerInner.scrollLeft;
//   const targetPosition = currentPosition + scrollDistance;

//   scrollerInner.scrollTo({
//     left: targetPosition,
//     behavior: 'smooth'
//   });
// }



// Pop Product section

const popProducts = document.querySelectorAll('.pop-product');
const popModal = document.getElementById('pop-modal');
const popModalImage = document.getElementById('pop-modal-image');
const popModalDetails = document.querySelector('#pop-modal .product-details');
const popCloseBtn = document.querySelector('.pop-close');

popProducts.forEach((product) => {
  const img = product.querySelector('img');
  const details = product.querySelector('.product-details');
  const title = details.querySelector('h3');
  const description = details.querySelector('p');

  img.addEventListener('click', () => {
    popModal.style.display = 'flex';
    popModalImage.src = img.src;
    popModalDetails.innerHTML = details.innerHTML;
    popModalDetails.querySelector('h3').innerText = title.innerText;
    popModalDetails.querySelector('p').innerText = description.innerText;

    setTimeout(() => {
      popModalDetails.classList.add('visible');
    }, 100);
  });
});

popCloseBtn.addEventListener('click', () => {
  popModal.style.display = 'none';
  popModalDetails.classList.remove('visible');
});

window.addEventListener('click', (event) => {
  if (event.target === popModal) {
    popModal.style.display = 'none';
    popModalDetails.classList.remove('visible');
  }
});


// Gallery Images


$(document).ready(function() {
  $('.item').hover(
      function() {
          $(this).find('.overlay').animate({ opacity: 1 }, 300);
      },
      function() {
          $(this).find('.overlay').animate({ opacity: 0 }, 300);
      }
  );
});







