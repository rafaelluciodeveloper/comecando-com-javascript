var obj = {
    nome : "Rafael",
    sobrenome:"Lucio",
    idade:32,
    apresentar: function (){
        console.log("Ola, meu nome e " + this.nome + " " + this.sobrenome);
    }
};

console.log(obj)
console.log(obj.sobrenome)
obj.apresentar();