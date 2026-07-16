// Essa é a função que simula o tempo de preparo (não precisa alterar)
function prepararPizza(sabor) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sabor === "abacaxi") {
        reject(new Error("Aqui nós não fazemos pizza de abacaxi! 😡"));
      } else {
        resolve(`Sua pizza de ${sabor} está quentinha e pronta! 🍕`);
      }
    }, 2000); 
  });
}

// === SUA MISSÃO COMEÇA AQUI === //

// 1. Transforme essa função em assíncrona
async function pedirPizza(sabor) {
  try{
      console.log("Pedido recebido, estamos preparando...")
      const preparandoPedido = await prepararPizza();
      console.log("Pedido pronto, pode retirar no balcão!!")
      
  }catch{
      console.log("Algo de errado com seu Pedido!")
  }finally{}
   console.log("Atendimento encerrado!")
   
   pedirPizza("calabesa")
  // 2. Crie o bloco try/catch/finally
  
  // 3. No try:
  // - Avise no console: "Pedido recebido, preparando..."
  // - Use o await para chamar a prepararPizza(sabor)
  // - Mostre no console o resultado do sucesso
  
  // 4. No catch:
  // - Mostre no console o erro que o pizzaiolo mandou
  
  // 5. No finally:
  // - Mostre no console: "Atendimento encerrado."
}

// Testes para você rodar depois:
// pedirPizza("calabresa");
// pedirPizza("abacaxi");