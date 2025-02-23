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




// Função para verificar a interseção
function verificarInterseccao() {
    const semiLuaRect = semiLua.getBoundingClientRect();
    const otherInfoRect = otherInfoContainer.getBoundingClientRect();

    // Verifica se a semi-lua está dentro da div de baixo
    if (
        semiLuaRect.bottom <= otherInfoRect.top || // Semi-lua acima da div
        semiLuaRect.top >= otherInfoRect.bottom || // Semi-lua abaixo da div
        semiLuaRect.right <= otherInfoRect.left || // Semi-lua à esquerda da div
        semiLuaRect.left >= otherInfoRect.right    // Semi-lua à direita da div
    ) {
        semiLua.style.display = 'none'; // Oculta a semi-lua
    } else {
        semiLua.style.display = 'block'; // Exibe a semi-lua
    }
}

// Verifica a interseção ao carregar a página e ao rolar
window.addEventListener('load', verificarInterseccao);
window.addEventListener('scroll', verificarInterseccao);