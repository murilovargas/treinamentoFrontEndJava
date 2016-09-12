var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//teste

app.use(bodyParser.json());

var estadosCivis = [
	{id: 1, estadoCivil: "Solteiro(a)"},
	{id: 2, estadoCivil: "Casado(a)"},
	{id: 3, estadoCivil: "Divorciado(a)"},
	{id: 4, estadoCivil: "Viúvo(a)"},
	{id: 5, estadoCivil: "Separado(a)"},
	{id: 6, estadoCivil: "Companheiro(a)"}
];

var profissoes = [
	{CBO: 1, profissao: "Administrador"},
	{CBO: 2, profissao: "Contabilista"},
	{CBO: 3, profissao: "Corretor de Seguros"},
	{CBO: 4, profissao: "Analista de Sistemas"},
	{CBO: 5, profissao: "Pescador Profissional"},
	{CBO: 6, profissao: "Zootecnista"},
	{CBO: 7, profissao: "Sommelier"},
	{CBO: 8, profissao: "Taxista"}
];

var tiposDeRenda = 
	[{tipoRenda:"Salario"},
	 {tipoRenda:"Dividendos"},
	 {tipoRenda:"Informal"}
];

var tiposDePeriodicidade = 
	[{tipoPeriodicidade:"Anual"},
	 {tipoPeriodicidade:"Mensal"},
	 {tipoPeriodicidade:"Semanal"}
];

var moedas = 
	[{moeda:"Real"},
	 {moeda:"Euro"},
	 {moeda:"Dollar"}
];

var pessoas = [
  {	id: 1, 
	cpf: "33966177182", 
	nome: "Joao da Silva", 
	dataNascimento: new Date(), 
	genero: "Masculino", 
	estadoCivil: estadosCivis[1], 
	profissao: profissoes[3],
	infoRenda:
		[
			{
				id: 1,
				valorRenda: 8000, 
				tipoRenda: tiposDeRenda[0],
				porcentRenda: 80,
				moeda: moedas[0],
				periodicidade: tiposDePeriodicidade[0],
				fonte: "Empresa X",
				dataBase: new Date()
			},
			{
				id: 2,
				valorRenda: 2000, 
				tipoRenda: tiposDeRenda[2],
				porcentRenda: 20,
				moeda: moedas[0],
				periodicidade: tiposDePeriodicidade[0],
				fonte: "Empresa X",
				dataBase: new Date()
			}
		]
	},
	{id: 2, 
	cpf: "34466477398", 
	nome: "Marcos Antonio Silva", 
	dataNascimento: new Date(), 
	genero: "Masculino", 
	estadoCivil: estadosCivis[0], 
	profissao: profissoes[0],
	infoRenda:
		[
			{
				id: 1,
				valorRenda: 5000, 
				tipoRenda: tiposDeRenda[0],
				porcentRenda: 80,
				moeda: moedas[0],
				periodicidade: tiposDePeriodicidade[0],
				fonte: "Empresa ZZ",
				dataBase: new Date()
			}
		]
	}
];


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/pessoas', function(req, res) {
  res.json(pessoas);
});

app.get('/pessoas/:id', function(req, res) {
  pessoas.forEach(function (pessoa) {
  	if (pessoa.id == req.params.id) {
  		res.json(pessoa);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/pessoa', function(req, res) {
  var index = -1;
  pessoas.forEach(function (pessoa){
	  if (pessoa.id == req.body.id){
		  index = pessoas.indexOf(pessoa);
	  }
  });

  if (index == -1)
  {
	pessoas.push(req.body);
  }
  else{
	pessoas.splice(index, 1,req.body);
  };
  
  res.json(true);
});

app.get('/estadoCivil', function(req, res) {
  res.json(estadosCivis);
});

app.get('/profissoes', function(req, res) {
  res.json(profissoes);
});

app.get('/tiposDeRenda', function(req, res) {
  res.json(tiposDeRenda);
});

app.get('/tiposDePeriodicidade', function(req, res) {
  res.json(tiposDePeriodicidade);
});

app.get('/moedas', function(req, res) {
  res.json(moedas);
});


app.listen(process.env.PORT || 3412);