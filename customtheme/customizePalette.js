angular
   .module('themeLearningApp', ['ngMaterial'])
   .controller('themeLearningController', themeLearningController)


.config(function($mdThemingProvider) {
$mdThemingProvider.theme('default')
  // .primaryPalette('indigo')
  .backgroundPalette("grey")
 .accentPalette('orange')
   .warnPalette('green');
   $mdThemingProvider.theme('defaultDark')
     // .primaryPalette('indigo')
     .backgroundPalette("grey")
    .accentPalette('orange')
      .warnPalette('green');


  $mdThemingProvider.definePalette('amazingPaletteName', {
   '50': 'ffebee',
   '100': 'ffcdd2',
   '200': 'ef9a9a',
   '300': 'e57373',
   '400': 'ef5350',
   '500': 'f44336',
   '600': 'e53935',
   '700': 'd32f2f',
   '800': 'c62828',
   '900': 'b71c1c',
   'A100': 'ff8a80',
   'A200': 'ff5252',
   'A400': 'ff1744',
   'A700': 'd50000',
   'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                       // on this palette should be dark or light
   'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
    '200', '400', 'A100'],
   'contrastLightColors': undefined    // could also specify this if default was 'dark'
 });
 $mdThemingProvider.alwaysWatchTheme(true);
 $mdThemingProvider.theme('default')
   .primaryPalette('amazingPaletteName')

   $mdThemingProvider.theme('defaultDark')
     .primaryPalette('amazingPaletteName')

     $mdThemingProvider.theme('defaultDark')
     .dark();

   $mdThemingProvider.theme('altTheme')
    .primaryPalette('blue')
    .backgroundPalette("cyan")
    .accentPalette('amber')
     .warnPalette('lime');

     $mdThemingProvider.theme('altDarkTheme')
      .primaryPalette('blue')
      .backgroundPalette("cyan")
      .accentPalette('amber')
       .warnPalette('lime');

       $mdThemingProvider.theme('altDarkTheme')
       .dark();


});


// var background = $mdThemingProvider.extendPalette('grey', {
//   'A100': 'f2f2f2'
// });
// $mdThemingProvider.definePalette('background', background);
// $mdThemingProvider.theme('default')
//
// ...

//  .backgroundPalette('background');
function themeLearningController ($scope) {
  console.log(" inside of themeLearningController");
  $scope.message="Hello";
  $scope.dynamicTheme;
  //  $scope.setDarkTheme=function()
  //  {
  //    console.log("set is");
  //    console.log(set);
  //    $mdThemingProvider.theme('default')
  //   .dark();
   //
  //  }
  //  $scope.setLightTheme=function()
  //  {
  //    console.log("set is");
  //    console.log(set);
  //    $mdThemingProvider.theme('default')
  //   .light();
   //
  //  }
}
