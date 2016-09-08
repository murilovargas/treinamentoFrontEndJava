angular.module("prototipoTelas").controller("pesquisaPessoasPfCtrl", function ($scope, pessoas){
	$scope.pessoas = pessoas.data;
});