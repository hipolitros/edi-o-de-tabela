let idade = prompt('Qual a sua idade?');
const anoBase = 1980;
const anoCorrente = (new Date()).getFullYear();
let = anoNascimento = anoCorrente - idade;

if (anoCorrente < anoBase) {
		console.log('Ela nasceu antes de 1980');
}	else {
	console.log('Ela nasceu em/ou pós 1980');
}


// O usuário tem 18 ou 60 anos e se chama joão ou Maria

const nome = prompt('Qual o seu nome?');
const anoNascimento = prompt('Qual o seu ano de nascimento?');
const anoBase = (new Date()).getFullYear();
const idade = anoCorente - anoNascimento;

if (idade >= 18 && idade <= 60) {
        console.log('Usuario tem entre 18e 60 anos.')
        console.log(idade);
}