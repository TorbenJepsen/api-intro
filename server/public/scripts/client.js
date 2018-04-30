var app = angular.module('StarWarsApp', []);
console.log('client.js loaded');

app.controller('StarWarsController', ['$http', function ($http) {
    console.log('StarWarsController loaded');

    var self = this;

    self.message = 'Coding we are';

    $http({
        method: 'GET',
        url: 'https://swapi.co/api/people',
        params: {
            search: 'Skywalker',
        }
    })
    .then(function(response) {
        console.log('response from SWAPI people', response);
    })
    .catch(function(error) {
        console.log('The force was not with us', error);
    })

}]);