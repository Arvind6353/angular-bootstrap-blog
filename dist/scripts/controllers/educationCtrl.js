"use strict";angular.module("sbAdminApp").controller("EducationCtrl",function($scope,$modal){$(".knob").knob();var me=this;me.animationsEnabled=!0,me.viewSSCMarks=function(type){var modalInstance=$modal.open({animation:me.animationsEnabled,ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"views/chart.html",controller:"ChartCtrl",size:"md",resolve:{items:function(){return type}}});modalInstance.result.then(function(selectedItem){},function(){})}}),angular.module("sbAdminApp").controller("ModalInstanceCtrl",function($scope,$http,$modalInstance,items){});