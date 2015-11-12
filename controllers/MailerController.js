mailer.controller('MailerCtrl', function MailerCtrl($scope, $stateParams, MailerFactory, UtilitiesFactory) {
  $scope.mailers = MailerFactory.mailers;
  $scope.currentLabel = UtilitiesFactory.findById($scope.mailers, $stateParams.mailerId);
  $scope.MailerFactory = MailerFactory;
});
