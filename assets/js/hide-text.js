const toggleHeaders = document.querySelectorAll('.toggle-header');

toggleHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const icon = header.querySelector('.toggle-icon');
        const toggleText = header.closest('.faq-card-content').querySelector('.toggle-text');
        toggleText.classList.toggle('visible');

        if (icon.src.includes('Icon-plus.svg')) {
            icon.src = icon.dataset.iconMinus; 
        } else {
            icon.src = icon.dataset.iconPlus;
        }
    });
});