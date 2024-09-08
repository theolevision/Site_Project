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


const codes = [
    `let nome = "Maria";\nlet idade = 25;\nconsole.log(nome, idade);\n// Saída: Maria 25`,
    `const pi = 3.14159;\nconsole.log(pi);\n// Saída: 3.1415`,
    `let contador = 0;\ncontador = contador + 1;\nconsole.log(contador);\n// Saída: 1`,
    `let arr = [1, 2, 3, 4];\narr.forEach(num => console.log(num));`
];

let currentIndex = 0;
const codeBox = document.getElementById('codeBox');

function updateCode() {
    codeBox.textContent = codes[currentIndex];
    Prism.highlightElement(codeBox); // Destaque de sintaxe
    currentIndex = (currentIndex + 1) % codes.length;
}

setInterval(updateCode, 2000); // Troca o código a cada 3 segundos

// Inicializa com o primeiro código
updateCode();