// for, for in, while, do while

var x = 0;

while(x < 10) {
    console.log("Valor de X e : " + x );
    x++;
}

do{
    console.log("Valor de X e :" + x);
    x++;
}while(x < 12);

for(y = 0;y < 10;y++){
    console.log(y);
}

var pessoa = {
    nome: 'Rafael',
    sobrenome: 'Lucio',
    idade: 32
}

for(var prop in pessoa){
    console.log(pessoa[prop]);
}