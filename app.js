var mailer = angular.module('mailer', ['ui.router']);

mailer.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html"
      },
      'body': {
        templateUrl: "partials/main.html"
      },
      'footer': {
        templateUrl: "partials/footer.html"
      }
    }
  });
});