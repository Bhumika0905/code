const btnOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelectorAll('.close-modal');
const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');


// Add event listeners to open buttons
btnOpen.forEach(button => {
    button.addEventListener('click', function() {
        const modalClass = this.getAttribute('data-modal');
        const modal = document.querySelector(`.${modalClass}`);
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');;
    });
});

// Add event listeners to close buttons
btnClose.forEach(button => {
    button.addEventListener('click', function(){;
    modals.forEach(modal => modal.classList.add('hidden'));
    overlay.classList.add('hidden');
})
});

// Add event listener to overlay to close modal
overlay.addEventListener('click', function(){
    modals.forEach(modal => modal.classList.add('hidden'));
    overlay.classList.add('hidden');
});

// Optional: Close modal on pressing the 'Escape' key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
        modals.forEach(modal => modal.classList.add('hidden'));
        overlay.classList.add('hidden');;
    }
});

