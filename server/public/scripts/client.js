var app = angular.module('myApp', []);
console.log('client.js loaded');

app.controller('MyController', function(){
    console.log('MyController loaded');

    var self = this;

    self.message = 'Hi There!'

});