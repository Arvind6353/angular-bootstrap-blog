'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ContactCtrl', function($scope,$state) {
    

    var me=this;
    me.form={

    	name:"",
    	email:"",
    	phone:"",
    	message:""

    }

    me.clear=function(){

    	 me.form={
	    	name:"",
	    	email:"",
	    	phone:"",
	    	message:""

	    }
    }

    me.send=function(){

    	$state.go("dashboard.home");

    }

});