angular.module("prototipoTelas").factory("pessoasAPI", function($http){
	var _getPessoa = function(id){
		return $http.get("http://localhost:3412/pessoas/" + id);
	};
	
	var _savePessoa = function(pessoa){
		return $http.post("http://localhost:3412/pessoas/", pessoa);
	};
	
	var _getPessoasAll = function(){
		return $http.get("http://localhost:3412/pessoas");
	};
	
	var _getTiposDeRenda = function(){
		return $http.get("http://localhost:3412/tiposDeRenda");
	}
	
	var _getEstadosCivis = function(){
		return $http.get("http://localhost:3412/estadosCivis");
	}
	
	var _getProfissoes = function(){
		return $http.get("http://localhost:3412/profissoes");
	}
	
	var _getTiposDePeriodicidade = function(){
		return $http.get("http://localhost:3412/tiposDePeriodicidade");
	}
	
	var _getMoedas = function(){
		return $http.get("http://localhost:3412/moedas");
	}
	return{
		getPessoa: _getPessoa,
		getPessoasAll: _getPessoasAll,
		getTiposDeRenda: _getTiposDeRenda,
		getTiposDePeriodicidade: _getTiposDePeriodicidade,
		getMoedas: _getMoedas,
		savePessoa: _savePessoa,
		getEstadosCivis: _getEstadosCivis,
		getProfissoes: _getProfissoes
	}
})