'use strict';

bsApp.controller('bsController', function ($scope, $timeout) {

    $scope.tickerText = 'Hello Ticker!';
    $timeout(function () {
        $scope.tickerText = 'Ticker after 5 seconds!';
    }, 5000)
});