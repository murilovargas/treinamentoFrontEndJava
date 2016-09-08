angular.module("prototipoTelas").config(function ($routeProvider) {	
	$routeProvider.when("/", {
		templateUrl: "view/pesquisaPessoa.html",
		controller: "pesquisaPessoasPfCtrl",
			resolve: {
				pessoas: function (pessoasAPI) {
					return pessoasAPI.getPessoasAll();
				}
			}
	});
	
	$routeProvider.when("/infoPessoaFisica/:id", {
		templateUrl: "view/infoPessoaFisica.html",
		controller: "infoPessoaPfCtrl",
		resolve: {
			pessoa: function(pessoasAPI, $route){
				return pessoasAPI.getPessoa($route.current.params.id);
			},
			tiposDeRenda: function(pessoasAPI){
				return pessoasAPI.getTiposDeRenda();
			},
			tiposDePeriodicidade: function(pessoasAPI){
				return pessoasAPI.getTiposDePeriodicidade();
			},
			moedas: function(pessoasAPI){
				return pessoasAPI.getMoedas();
			}
		}
	});
	
	$routeProvider.otherwise({
		redirectTo: "/"
	});
});