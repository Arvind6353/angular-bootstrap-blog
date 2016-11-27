'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ProjectsCtrl', function($scope) {

  	var me=this;

  	me.projects= [

			  		{
			  			theme:"primary",
			  			title:"Policy Portal",	
			  			desc:"A portal application to display various policy / procedure documents using rich UI along with reporting and document publishing.",
			  			tech:"Java / J2EE , Spring , Hibernate , Can JS , jQuery , Javascript , HTML , CSS, Oracle ",
			  			roles:[
			  					{theme:"success", name:"UI Development "},
			  					{theme:"danger", name:" Rest API Development  "},
			  					{theme:"warning", name:"Backend Integration "}

			  				  ]



			  		} ,


					
			  		{
			  			theme:"warning",	
			  			title:"Contractor Management",
			  			desc:"An application to handle contractor information using CRUD operations with reporting",
			  			tech:"Java / J2EE , Spring , Hibernate , Can JS , jQuery , Javascript , HTML , CSS, MySql ",
			  			roles:[
			  					{theme:"success", name:"UI Design "},
			  					{theme:"info", name:"UI Development "},
			  					{theme:"danger", name:" Rest API Development  "},
			  					{theme:"warning", name:"Backend Integration "}

			  				  ]



			  		} ,


			  		{
			  			theme:"info",	
			  			title:"Admin Operations",
			  			desc:"An application to allow Admin perform CRUD operations on users , add / remove roles and view DB table content on the grid ",
			  			tech:"Java / J2EE , Spring , Hibernate , Can JS , jQuery , Javascript , HTML , CSS, MySql ",
			  			roles:[
			  					{theme:"success", name:"UI Design"},
			  					{theme:"info", name:"UI Development "},
			  					{theme:"danger", name:" Rest API Development  "},
			  					{theme:"warning", name:"Backend Integration "}

			  				  ]



			  		} ,


			  		{
			  			theme:"success",	
			  			title:"Issue Logger",
			  			desc:"An application to track / monitor , issues / defects found in various applications. Users can update the status of the defects as appropriate",
			  			tech:"Java / J2EE , Spring , Hibernate , Can JS , jQuery , Javascript , HTML , CSS, MySql ",
			  			roles:[
			  					{theme:"success", name:"UI Design"},
			  					{theme:"info", name:"UI Development "},
			  					{theme:"danger", name:" Rest API Development  "},
			  					{theme:"warning", name:"Backend Integration "}

			  				  ]



			  		} ,


			  		{
			  			theme:"danger",	
			  			title:"MOBAPP",
			  			desc:"An one stop solution to allow users to select property based on their needs . It provides various graphical and analytical information such as graphs , twitter feeds to help users to select property in a better way. Rules Engine is used to calculate the credit and appraisal score of the user to determine if the user is prequalified for the loan process and if prequalified the loan process is triggered by asking users to fill in details and submit various docs. Published this app in Android and Apple store ." ,
			  			tech:"Java / J2EE , Bluemix , jQuery , jqueryMobile , Bootstrap , Javascript , HTML , CSS , MySql , MongoDB , IBM Rules Engine , D3.js , Twitter API",
			  			roles:[
			  					{theme:"success", name:"UI Design"},
			  					{theme:"info", name:"UI Development "},
			  					{theme:"danger", name:" Rest API Development  "},
			  					{theme:"warning", name:"Backend Integration "},
			  					{theme:"success", name:"Application Deployment "}

			  				  ]



			  		} ,

			  		{
			  			theme:"primary",	
			  			title:"GSCC Church Family",
			  			desc:"A hybrid mobile application for the GSCC community . Sends Bible verses as notification every day. Display various events and celebrations schedule of the church. Allows admin to post notification to those users registered to a specific group. Users can post a request to the church and admin has the ability to accept or deny the requests." ,
			  			tech:"Java / J2EE , jqueryMobile , Phonegap , Bootstrap , Javascript , HTML , CSS , MySql" ,
			  			roles:[
			  					{theme:"success", name:"UI Design"},
			  					{theme:"info", name:"UI Development "},
			  					{theme:"danger", name:" Rest API Development  "},
			  					{theme:"warning", name:"Backend Developement "},
			  					{theme:"success", name:"App Publishing "}

			  				  ]



			  		} ,
					
					{
			  			theme:"success",	
			  			title:"Workflow management",
			  			desc:"An application that allows users to submit any maintanenance related activities to the system. It has a search system to display various user info displayed using a custom grid . Provides various warning / error messages as an immediate feedback to the user filling out the form" ,
			  			tech:"Angular JS , Java / J2EE , Spring  , Mybatis , Bootstrap , Javascript , HTML , CSS , Oracle" ,
			  			roles:[
			  					{theme:"success", name:"UI Design"},
			  					{theme:"info", name:"UI Development "},
			  					{theme:"danger", name:" Rest API Development  "}
			  				  ]



			  		} ,


			  		{
			  			theme:"danger",	
			  			title:"Reminder Application",
			  			desc:"A hybrid mobile application that allows the users to set the reminder for the tasks which can be repeated once or several times . It allows the user to delete and reorder the reminders." ,
			  			tech:"Angular JS , Ionic Framework , HTML" ,
			  			roles:[
			  					{theme:"success", name:"UI Design"},
			  					{theme:"danger", name:"UI Development "}
			  				  ]



			  		} ,
		
			


  	]
    
});