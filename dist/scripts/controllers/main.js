"use strict";angular.module("sbAdminApp").controller("MainCtrl",function($scope,$position){var main=this;main.skills=[{name:"Design & Development",percent:85,theme:"success"},{name:"Problem Solving",percent:83,theme:"info"},{name:"Planning",percent:82,theme:"warning"},{name:"Communication",percent:88,theme:"danger"}],$("#owl-demo").owlCarousel({items:8,itemsDesktop:[1e3,5],itemsDesktopSmall:[900,3],itemsTablet:[600,2],itemsMobile:!1}),$("#owl-demo").trigger("owl.play",2e3),$(".next").click(function(){$("#owl-demo").trigger("owl.next")}),$(".prev").click(function(){$("#owl-demo").trigger("owl.prev")}),$(".play").click(function(){$("#owl-demo").trigger("owl.play",1e3)}),$(".stop").click(function(){$("#owl-demo").trigger("owl.stop")})});