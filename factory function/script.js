const celular = {
  marcaCelular: 'ASUS',
  tamanhoTela: {
    vertical: 155,
    horizontal: 75
  },
  capacidadeBateria: 5000,
  ligar: function() {
    console.log("Fazendo ligação...")
  }
}
//Factory Functions (Função de Fábrica)
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
const celular1= criarCelular('Zenfone', 5.5, 5000)
console.log(celular1);