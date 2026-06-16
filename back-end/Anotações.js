function escrevaMeuNome(nome) {
    console.log("Meu nome é " + nome);
}

function escrevaMeuSobrenome(sobrenome) {
    console.log("Meu sobrenome é " + sobrenome);
}

//Antigamente usava-se assim
// module.exports = {escrevaMeuNome}

//Agora é possível exportar direto a função
export { escrevaMeuNome, escrevaMeuSobrenome}



//Antes do ES6, usava-se o CommonJS para exportar e importar módulos
//const {escrevaMeuNome} = require('./auxiliar');

//Com o ES6, é possível usar a sintaxe de módulos nativa do JavaScript
import { escrevaMeuNome, escrevaMeuSobrenome} from './auxiliar.js';
escrevaMeuNome("Vanderson");
escrevaMeuSobrenome("Silva");