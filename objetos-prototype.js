function Lucio(nome,idade,corCabelo) {
    this.nome = nome;
    this.idade = idade;
    this.corCabelo = corCabelo;

    this.sobrenome = "Lucio";
    this.apresentar = function (){
        console.log("Ola meu nome e " + this.nome);
    }
}

var rafael =  new Lucio("Rafael",32,"Preto");
var rodrigo = new Lucio("Rodrigo", 25, "Loiro");

console.log(rafael);
console.log(rodrigo);

rafael.apresentar();
rodrigo.apresentar();

Lucio.prototype.darTchau = function (){
    console.log("Tchau!");
};

rafael.darTchau();
rodrigo.darTchau();