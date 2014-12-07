var app = angular.module('companyApp', []);

phonecatApp.controller('Personal', function($scope) {
  $scope.phones = [
    {'name': 'Google',
     'snippet': 'A search engine company',
     'age': 1},
    {'name': 'Apple',
     'snippet': 'A maker of cool toys.',
     'age': 2}
  ];

  $scope.orderProp = 'age';
});
