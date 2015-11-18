angular.module('mean').controller('ContatosController', function($scope) {
	$scope.total = 0;
	$scope.incrementa = function() {
		$scope.total++;
	};
	
	$scope.contatos = [
		{
			"_id": 1,
			"nome": "Contato Angular de 1º Grau",
			"email": "cont1@empresa.com.br"
		},
		{
			"_id": 2,
			"nome": "Contato Angular de 2º Grau",
			"email": "cont2@empresa.com.br"
		},
		{
			"_id": 3,
			"nome": "Contato Angular de 3º Grau",
			"email": "cont3@empresa.com.br"
		}
	];

	$scope.filtro = '';
});