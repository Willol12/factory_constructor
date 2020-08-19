
//Factory Functions (Função de Fábrica)

//camelCase = umDoisTresQuatro
//O factory faz a criação através da própria função
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular,
    tamanhoTela,  
    capacidadeBateria,
    ligar() {
      console.log("Fazendo ligação...")
    }
  }  
}

//Pascal Case = UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
  this.marcaCelular = marcaCelular,
  this.tamanhoTela = tamanhoTela,
  this.capacidadeBateria = capacidadeBateria,
  this.ligar = function () {
    console.log("Fazendo ligação...");
  }
}

//constructor faz a criação através do new
//cria um objeto novo quando vai instanciar
const celular = new Celular('Rog', 6, 50000);
console.log(celular)