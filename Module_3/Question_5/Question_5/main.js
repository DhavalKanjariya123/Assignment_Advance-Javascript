// Get the modal element
const modal = document.getElementById('myModal');

// Get the buttons that open the modal
const modalBtns = document.querySelectorAll('.modal-btn');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Add click event listeners to the buttons
modalBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});
