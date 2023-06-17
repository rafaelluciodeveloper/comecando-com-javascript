function dizerOi(nome){
    console.log('Oi, ' + nome);
}

var dizerOla = function (nome) {
    console.log('Ola, ' + nome);
};

var dizerTchau = new Function("nome", "console.log('Tchau! ' + nome);");

dizerOi("Rafael");
dizerOla("Rodrigo");
dizerTchau("Israel");