const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 200);
    });
}