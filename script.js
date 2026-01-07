
const steps = document.querySelectorAll('.form-step');
const nextBtn = document.getElementById('nextBtn');
const popup = document.getElementById('successPopup');

let currentStep = 0;

nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
    } else {
        popup.style.display = 'flex';
    }
});

function closePopup() {
    popup.style.display = 'none';
}



