mailer.factory('MailerFactory', function MailerFactory() {
  var factory = {};
  factory.mailers = [];

  factory.addLabel = function() {
    factory.mailers.push(
      {
        senderName: factory.senderName,
        senderAddress: factory.senderAddress,
        senderCity: factory.senderCity,
        recipientName: factory.recipientName,
        recipientAddress: factory.recipientAddress,
        recipientCity: factory.recipientCity,
        id: factory.mailers.length + 1,
      });
    // Reset text box
    factory.senderName = null;
    factory.senderAddress = null;
    factory.senderCity = null;
    factory.recipientName = null;
    factory.recipientAddress = null;
    factory.recipientCity = null;
  };

  return factory;
})
