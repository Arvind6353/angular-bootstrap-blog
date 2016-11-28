'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout','items', function ($scope, $timeout,items) {


    $scope.type=items;

    if($scope.type=="SSC")
        $scope.isSSC=true;


    if($scope.type=="HSC")
        $scope.isHSC=true;


    if($scope.type=="BE")
        $scope.isBE=true;


    if($scope.isSSC){

                    $scope.pie = {
                                    labels : ["English", "Tamil", "Science","Maths","Social Studies"],
                                    data : [81, 95, 94,96,95]
                                 }
                    $scope.options = {legend: {display: true}};

    };



    if($scope.isHSC){

                    $scope.pie = {
                                    labels : ["English", "Physics", "Chemistry","Maths","Computer Science"],
                                    data : [86, 94, 95,95,89]
                                 }
                    $scope.options = {legend: {display: true}};

    };





    if($scope.isBE){

                    $scope.line = {
                        labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4', 'Sem5', 'Sem6', 'Sem7','Sem8'],
                        series: ['Semester Results'],
                        data: [
                          [8.84, 8.53, 8.59, 8.37, 7.39, 8.11, 7.82,9.00]
                        ],
                        //8.29
                        onClick: function (points, evt) {
                          console.log(points, evt);
                        }
                    };

                    $scope.options = {legend: {display: true}};

    };




    $scope.bar = {
	    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
		series: ['Series A', 'Series B'],

		data: [
		   [65, 59, 80, 81, 56, 55, 40],
		   [28, 48, 40, 19, 86, 27, 90]
		]
    	
    };

    $scope.donut = {
    	labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data: [300, 500, 100]
    };

    $scope.radar = {
    	labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

    	data:[
    	    [65, 59, 90, 81, 56, 55, 40],
    	    [28, 48, 40, 19, 96, 27, 100]
    	]
    };


    $scope.polar = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120]
    };

    $scope.dynamic = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120],
    	type : 'PolarArea',

    	toggle : function () 
    	{
    		this.type = this.type === 'PolarArea' ?
    	    'Pie' : 'PolarArea';
		}
    };
}]);