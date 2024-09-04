const { response } = require("..");

function numPrimo(primo){
  if (primo <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (primo <= 3) return true;  // 2 e 3 são primos

    // Se o número é divisível por 2 ou 3, não é primo
    if (primo % 2 === 0 || primo % 3 === 0) return false;

    // Verifica os números a partir de 5 até a raiz quadrada do número
    for (let i = 5; i * i <= primo; i += 6) {
        if (primo % i === 0 || primo % (i + 2) === 0) return false;
    }

    return true;
}//FIM DA FUNÇÃO PRIMO

function numPar(par){
  return par % 2 === 0;
}//FIM DA FUNÇÃO PAR


module.exports = class controllerNumbers {
    //Cadastro de professor
  static async postPar(req, res) {
    const { number } = req.body;
    if (typeof number !== "number") {
      res.status(400).json({ message: "Digite um número" });
    }
    else{
      if(numPar(number)){
        res.status(200).json({message: "Número par!!"});
      }
      else{
        res.status(200).json({message: "Dado inválido"});
      }
    } 
  }//FIM DOS PAR

  static async postPrimo(req, res) {
    const { number } = req.body;
    if (typeof number !== "number") {
      res.status(400).json({ message: "Digite um número" });
    }
    else{
      if(numPrimo(number)){
        res.status(200).json({message: "Número primo!!"});
      }
      else{
        res.status(200).json({message: "Dado inválido"});
      }
    } 
  }//FIM DOS PRMOS


  //listar Professor
  static async getNumbers(req, res){
    res.status(200).json({nome:"number"})
  }
};