console.log("Desafio de Lógica 03 - DIO");
console.log("Escrevendo Classes de um Jogo");

class Heroi{
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;

    if(this.tipo === "mago"){
      this.ataque = "magia";
    } else if(this.tipo === "guerreiro"){
      this.ataque = "espada";
    } else if(this.tipo === "monge"){
      this.ataque = "artes marciais";
    } else if(this.tipo === "ninja"){
      this.ataque = "shuriken";
    }else {
      this.ataque = "";
    }
  }

  atacar() {
    console.log("");
    console.log(`O ${this.tipo} atacou usando ${this.ataque}.`);
    console.log(`O ${this.tipo} ${this.nome}, com ${this.idade} anos, atacou usando ${this.ataque}.`);
    console.log("");
  }
}
const heroi1 = new Heroi("Hender", 49, "monge");
heroi1.atacar();
const heroi2 = new Heroi("Laila", 40, "ninja");
heroi2.atacar();