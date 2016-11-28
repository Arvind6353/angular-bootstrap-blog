'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('EducationCtrl', function($scope,$modal) {

    $('.knob').knob();

    var me=this;

    me.animationsEnabled = true;
	me.viewSSCMarks=function(type){

		var modalInstance = $modal.open({
      animation: me.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/chart.html',
      controller: 'ChartCtrl',
     	
      size: 'md',
      resolve: {
        items: function () {
          return type;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      
    }, function () {
      
    });
  };


});


angular.module('sbAdminApp').controller('ModalInstanceCtrl', function ($scope, $http, $modalInstance,items) {


});

