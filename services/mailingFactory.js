mailer.factory('MailerFactory', function MailerFactory() {
  var factory = {};
  factory.mailer = [];
  factory.addMailing = function() {
    factory.mailer.push(
      {
        senderName: factory.senderName,
        senderAddress: factory.senderAddress,
        senderCity: factory.senderCity,
        recipientName: factory.recipientName,
        recipientAddress: factory.recipientAddress,
        recipientCity: factory.recipientCity,
      }
    );

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
