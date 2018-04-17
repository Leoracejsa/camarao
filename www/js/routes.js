angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('pH', {
    url: '/ph',
    templateUrl: 'templates/pH.html',
    controller: 'pHCtrl'
  })

  .state('sALINIDADE', {
    url: '/salinidade',
    templateUrl: 'templates/sALINIDADE.html',
    controller: 'sALINIDADECtrl'
  })

  .state('tEMPERATURA', {
    url: '/temperatura',
    templateUrl: 'templates/tEMPERATURA.html',
    controller: 'tEMPERATURACtrl'
  })

$urlRouterProvider.otherwise('/page2')


});