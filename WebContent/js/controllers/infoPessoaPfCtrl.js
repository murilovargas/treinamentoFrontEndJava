angular.module("prototipoTelas").controller("infoPessoaPfCtrl", function ($scope, pessoa, tiposDeRenda, tiposDePeriodicidade, moedas){	
	$scope.infoPessoa = true;
	$scope.infoRenda = false;
	$scope.showIncluir = true;
	
	$scope.tabs = [{
        title: 'Pessoa Física'
    }, {
        title: 'Renda'
    }];
    
    $scope.currentTab = 'Pessoa Física';

    $scope.onClickTab = function (tab) {
    	$scope.currentTab = tab.title;
    	if ($scope.currentTab == "Pessoa Física"){
    		$scope.infoPessoa = true;
    		$scope.infoRenda = false;
    	}
    	else
    	{
    		$scope.infoPessoa = false;
    		$scope.infoRenda = true;
    	}
    };

    $scope.isActiveTab = function(tabUrl) {
    	return tabUrl == $scope.currentTab;
    };
	
	$scope.pessoa = pessoa.data;
	$scope.somaRenda = {};
	
	var somarRenda = function(){
		$scope.somaRenda = [{valorTotalRenda: 0,
				moeda: {},
				periodicidade: {}
			}];
		$scope.pessoa.infoRenda.forEach(function(item){
			$scope.somaRenda[0].valorTotalRenda += parseInt(item.valorRenda);
		});
		$scope.somaRenda[0].moeda = $scope.pessoa.infoRenda[0].moeda;
		$scope.somaRenda[0].periodicidade = $scope.pessoa.infoRenda[0].periodicidade;
		return true;
	};
	
	somarRenda();
	
	$scope.cbTiposDeRenda = tiposDeRenda.data;
	$scope.cbTiposDePeriodicidade = tiposDePeriodicidade.data;
	$scope.cbMoedas = moedas.data;
	
	$scope.adicionarRenda = function(iRenda){
		iRenda.id = novoIdRenda($scope.pessoa.infoRenda);
		$scope.pessoa.infoRenda.push(angular.copy(iRenda));
		delete $scope.iRenda;
		$scope.infoRendaForm.$setPristine();
		somarRenda();
	};
	
	var novoIdRenda = function(infoRenda){
		return (Math.max.apply(Math,infoRenda.map(function(o){return o.id;})) + 1)
	};
	
	$scope.editarRenda = function(id){
		$scope.showIncluir = false;
		$scope.iRenda = angular.copy(acharRenda(id))
		
		var index = 0;
		
		$scope.cbTiposDeRenda.forEach(function(item){
			if (item.tipoRenda == $scope.iRenda.tipoRenda.tipoRenda){
				index = $scope.cbTiposDeRenda.indexOf(item);
			}
		});
		
		$scope.iRenda.tipoRenda = $scope.cbTiposDeRenda[index];
		
		index = 0;
		
		$scope.cbTiposDePeriodicidade.forEach(function(item){
			if (item.tipoPeriodicidade == $scope.iRenda.periodicidade.tipoPeriodicidade){
				index = $scope.cbTiposDePeriodicidade.indexOf(item);
			}
		});
		
		$scope.iRenda.periodicidade = $scope.cbTiposDePeriodicidade[index];
		
		index = 0;
		
		$scope.cbMoedas.forEach(function(item){
			if (item.moeda == $scope.iRenda.moeda.moeda){
				index = $scope.cbMoedas.indexOf(item);
			}
		});
		
		$scope.iRenda.moeda = $scope.cbMoedas[index];
	};
	
	var acharRenda = function(id){		
		var item = $scope.pessoa.infoRenda.some(function(item){
			if (parseInt(id) == parseInt(item.id)){
				index = $scope.pessoa.infoRenda.indexOf(item);
			}
		});
		return $scope.pessoa.infoRenda[index];
	};
	
	$scope.excluirRenda = function(id){
		
	};
	
	
});