function showContent(id) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra a seção selecionada
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }
}

// Mostra a primeira seção por padrão (opcional)
document.addEventListener('DOMContentLoaded', () => {
    showContent('conteudo1');
});
