console.log('asd');
//the angular part
var ppdMod = angular.module('ppdAng', []);
ppdMod.controller('ppdControler', ['$scope', function($scope) {

    $scope.grid = [
        ['Empty']
    ];
    $scope.sideColumn = [];
    $scope.rowIndex = -1;

    $scope.addRow = function() {
        var newGenArr = $scope.grid;
        newGenArr.forEach(function(value, index) {
            value.push('Empty');
            value.push('Empty');
        });
        $scope.sideColumn.push('Empty Row Description');
        $scope.sideColumn.push('Empty Row Description');
        $scope.grid = newGenArr;
    };
    $scope.deleteRow = function(key) {
        var newGenArr = $scope.grid;
        newGenArr.forEach(function(value, index) {
            value.splice(key, 1);
        });
        $scope.sideColumn.splice(key, 1);
        $scope.grid = newGenArr;
    };
    $scope.addColumn = function() {
        var newGenArr = $scope.grid;
        if (newGenArr[0]) {
            newGenArr.push(returnArrLen(newGenArr[0].length));
        } else {
            newGenArr.push(['Empty']);
        }
    };
    $scope.changeRowIndex = function(ind) {
        $scope.rowIndex = ind;
    };

    $scope.highlughtIfIndex = function(ind) {
      console.log(ind);
        if (ind === $scope.rowIndex) {
            return true;
        }
        return false;


    };
    $scope.removeColumn = function(index) {
        $scope.grid.splice(index, 1);
    };
    var returnArrLen = function(size) {
        var arr = [];
        while (arr.length < size) {
            arr.push('Empty');
        }
        return arr;
    };
}]);
//the jquery part
jQuery(document).ready(function($) {



});
