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
    `var cidade = "Brasília";\nlet estado = "Distrito Federal";\nconsole.log("Cidade:", cidade, \n"Estado:", estado);`,
    `let idade = 18;\nif (idade < 18) {\nconsole.log("Menor de idade");\n} else {\n console.log("Maior de idade");\n}
`
];

let currentIndex = 0;
const codeBox = document.getElementById('codeBox');

function updateCode() {
    codeBox.textContent = codes[currentIndex];
    Prism.highlightElement(codeBox); // Destaque de sintaxe
    currentIndex = (currentIndex + 1) % codes.length;
}

setInterval(updateCode, 1500); // Troca o código a cada 3 segundos

// Inicializa com o primeiro código
updateCode();