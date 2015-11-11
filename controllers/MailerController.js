mailer.controller('MailerCtrl', function MailerCtrl($scope, $stateParams, ReviewsFactory) {
  $scope.mailer = MailerFactory.mailer;
});
