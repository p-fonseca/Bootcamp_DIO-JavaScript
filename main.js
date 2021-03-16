var nome  = "Patricia Fonseca";
var idade = 41;

/*Popup na tela*/
alert("Bem vindo " + nome);
alert(nome + " tem " + idade);

/*Substitui dado*/
console.log ("1 Troca sobrenome" + nome.replace("Fonseca" , "Sá"));

/*Transforma em Maiuscula*/
console.log("2 Maiuscula: " + nome.toLowerCase());

/*Transforma em Maiuscula*/
console.log("3 Minuscula: " + nome.toUpperCase());


/*LISTA - Array*/
var listafrutas = ["maca", "pera", "laranja", "pessego"];

/*exibe lista*/
console.log(listafrutas);

/*exibe elemento 1 da lista*/       
console.log("1 Elemento 1: " + listafrutas[1])

/*exibe elemento 0 da lista*/
console.log("2 Elemento 0: " + listafrutas[0])

/*Add novo elemento*/
listafrutas.push("uva");
console.log("3 Add: " + listafrutas);

/*Remove ultimo elemento da lista*/
listafrutas.pop();
console.log("4 Remove: " + listafrutas);

/*Tamanho da lista*/
console.log("5 Tamanho: " + listafrutas.length);

/*Lista ordem reversa*/
console.log("6 Ordem reversa: " + listafrutas.reverse());

/*Transforma em string*/
console.log("7 to String " + listafrutas.toString());

/*Transforma em string + simbolo definido*/
console.log("8 Join --: " + listafrutas.join("--"));

/*Exibe elementos do dicionario*/
var fruta = {nome:"maca" , cor:"vermelha"};
console.log(fruta);
console.log("9 Fruta/Cor " + fruta.nome + " " + fruta.cor);

/*Exibe elementos lista do dicionario*/
var frutas = [{nome:"maca" , cor:"vermelha"}, {nome:"pera", cor:"amarela"}, {nome:"laranja" , cor:"laranja"}];
console.log(frutas);
console.log("10 Fruta/Cor " + frutas[1].nome + " " + frutas[1].cor);

var idade = 18;

if(idade >= 18) {
    console.log(idade + ": Maior de idade");
} else {
    console.log(idade + ": Menor de idade");
}

var minhaidade = prompt("Qual sua idade?");
if(minhaidade >= 18) {
    console.log(minhaidade + ": Maior de idade");
} else {
    console.log(minhaidade + ": Menor de idade");
}

var count1 = 0;
while (count1 <= 5) {
    console.log("count1: " + count1);
    count1++
}

var count2;
for (count2=0; count2 <=6; count2 ++) {
console.log("count2: " + count2);
}

var d = new Date();
alert("Timezone " + d);
alert("Mes " + (d.getMonth()+1));      /*+1 para nao iniciar de mes 0*/
alert("Dia semana " + (d.getDay()));
alert("Hora " + d.getHours());
alert("Minutos " + d.getMinutes());

function soma(n1, n2) {
    return n1 + n2;
}
alert("soma 5+10= " + (soma(5, 10)));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Patricia Fonseca", "Fonseca", "Sá"));

function validaIdade(idade) {
    
    var validar = true;
}

function clicou() {
    document.getElementById("gratidao").innerHTML = "Obrigado por clicar";
    alert("Obrigado");
}

function newPage() {
    window.open("https://google.com.br")
}

function mouse() {
    alert("fonseca.paty@gmail.com");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}