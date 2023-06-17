function dizerOi(nome){
    console.log(this);
    console.log("Oi, " + nome);
}

dizerOi("Rafael");
dizerOi.call({}, "Rodrigo");
dizerOi.apply({},["Israel"]);