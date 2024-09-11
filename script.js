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
    `let idade = 18;\nif (idade < 18) {\nconsole.log("Menor de idade");\n} else {\n console.log("Maior de idade");\n}`,
    `let idade = 25;
let faixaEtaria;
switch (true) {
    case (idade < 13):
        faixaEtaria = "Criança";
        break;
    case (idade >= 13 && idade < 20):
        faixaEtaria = "Adolescente";
        break;
    case (idade >= 20 && idade < 60):
        faixaEtaria = "Adulto";
        break;
    default:
        faixaEtaria = "Idoso";
        break;
}
console.log(faixaEtaria);`,
`let idade = 25;

if (idade < 13) {
    console.log("Criança");
} else if (idade >= 13 && idade < 20) {
    console.log("Adolescente");
} else if (idade >= 20 && idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}`,
`Display properties: // Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};`
];

let currentIndex = 0;
const codeBox = document.getElementById('codeBox');

function updateCode() {
    codeBox.textContent = codes[currentIndex];
    Prism.highlightElement(codeBox); // Destaque de sintaxe
    currentIndex = (currentIndex + 1) % codes.length;
}

setInterval(updateCode, 900); // Troca o código a cada 3 segundos

// Inicializa com o primeiro código
updateCode();

