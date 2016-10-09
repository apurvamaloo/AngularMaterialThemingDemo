angular
   .module('themeLearningApp', ['ngMaterial'])
   .controller('themeLearningController', themeLearningController)


.config(function($mdThemingProvider) {
$mdThemingProvider.theme('default')
  .primaryPalette('indigo')
  .backgroundPalette("grey")
  .accentPalette('pink')
  .warnPalette('red');
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
  $scope.message="Hello";
}
