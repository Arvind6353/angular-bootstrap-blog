'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('TechSkillCtrl', function($scope,$position) {

    var vm = this;

    vm.skills = {};

    //development stack
    vm.skills.development = [
        {
            Software: "Mongo DB",
            Percentage: "70",
            theme: "yellow",
            image: "mongodb"
        },
        {
            Software: "Express JS",
            Percentage: "85",
            theme: "aqua",
            image: "express"
        },
        {
            Software: "Angular JS",
            Percentage: "85",
            theme: "green",
            image: "angular"
        },
        {
            Software: "Node JS",
            Percentage: "80",
            theme: "purple",
            image: "node"
        },
        {
            Software: "Javascript",
            Percentage: "88",
            theme: "maroon",
            image: "javascript"
        },
        {
            Software: "jQuery & AJAX",
            Percentage: "90",
            theme: "yellow",
            image: "jquery"
        },
        
        {
            Software: "Jquery Mobile",
            Percentage: "83",
            theme: "aqua",
            image: "jqueryMobile"
        },


        {
            Software: "Ionic",
            Percentage: "83",
            theme: "green",
            image: "ionic"
        },


        {
            Software: "Can JS",
            Percentage: "83",
            theme: "purple",
            image: "canjs"
        },

        {
            Software: "Underscore Js",
            Percentage: "83",
            theme: "maroon",
            image: "underscore"
        },
 



        

    ];

    //Design Stack
    vm.skills.design = [
        {
            Software: "HTML 5",
            Percentage: "85",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3" ,
            Percentage: "80",
            theme: "aqua",
            image: "css3"
        },
        {
            Software: "SAAS",
            Percentage: "70",
            theme: "green",
            image: "saas-css"
        },
        {
            Software: "Bootstrap",
            Percentage: "88",
            theme: "purple",
            image: "bootstrap"
        },

        {
            Software: "Mustache",
            Percentage: "90",
            theme: "yellow",
            image: "mustache"
        },

      ];

    //Other Stack
    vm.skills.others = [
        {
            Software: "Java",
            Percentage: "80",
            theme: "aqua",
            image: "java",
        },

        {
            Software: "Spring",
            Percentage: "80",
            theme: "yellow",
            image: "spring",

        },

        {
            Software: "SQL",
            Percentage: "70",
            theme: "blue",
            image: "sql"
        },
        {
            Software: "Hardware",
            Percentage: "75",
            theme: "green",
            image: "hardware"
        },
        {
            Software: "Cloud Computing",
            Percentage: "73",
            theme: "yellow",
            image: "cloud"
        },

        {
            Software: "Bluemix",
            Percentage: "78",
            theme: "purple",
            image: "bluemix"
        },

        {
            Software: "Phonegap",
            Percentage: "83",
            theme: "maroon",
            image: "phonegap"
        },
 



    ];
});

