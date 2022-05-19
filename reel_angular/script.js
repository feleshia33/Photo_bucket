var app = angular.module("reelDb", []);

app.controller("MoviesController", function ($scope, $http) {
    $scope.movies = [];
    $http.get('./film.json').then(function(data){
        $scope.movies = data.data;
    })
});