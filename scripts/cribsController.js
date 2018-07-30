//refering module that is created in app.js
angular
	.module('ngCribs')
	//first argument is name of the controller,
	//second argument is a function to define the controller body
	.controller('cribsController', function ($scope, $http) {
		/* body... */
		//$scope.hello='Hello'; //property of $scope is hello whose value is the string Hello
		
		//=cribsFactory.getCribs(); //we can do this because we have given a second arg as cribsFactory here
		// and have referenced the getCribs in the cribsFactory.js
		//below is the success and error method provided by http service
		
//This is the kind of http service which works well with latest version of angular

$scope.priceInfo = {
	min: 0,
	max: 6000
}

$scope.newListing={}; //empty object
$scope.addCrib = function (newListing) {
	/* body... */
	newListing.image='crib-1';
	$scope.cribs.push(newListing);  //pushing in cribs data
	$scope.newListing={};
}
//ng-model allows us two way data binding and therefore when we have 
//an input we can see real time change in the cards
$scope.editCrib = function (crib) {
	/* body... */
	$scope.editListing =true;
	$scope.existingListing=crib;
}
$scope.saveCribEdit = function () {
	/* body... */
	$scope.existingListing={};
	$scope.editListing=false;
}
$scope.deleteCrib = function (listing) {
	/* body... */
var index= $scope.cribs.indexOf(listing);
$scope.cribs.splice(index,1); //pass index and let it know we have to remove just one spot
$scope.existingListing={};
$scope.editListing=false;
}

		$http({
    method: 'get', 
    url: 'data/data.json'
}).then(function (response) {
    console.log(response, 'res');
    $scope.cribs = response.data;
},function (error){
    console.log(error, 'can not get data.');
});

	
	});    														