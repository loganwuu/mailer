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
<<<<<<< HEAD
    },
    controller: "MailerCtrl"
  });

  $stateProvider.state('home.label', {
    url: "/:mailerId",
    templateUrl: "partials/mailer.label.html",
    controller: "MailerCtrl"
=======
    }
>>>>>>> 5fda312abb31cb8434b99960fc16b678d50a2b85
  });
});
