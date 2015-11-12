function Sender(name, address, city) {
  this.name = name;
  this.address = address;
  this.city = city;
}

Sender.prototype.fullLabel = function() {
  return this.name + /n + this.address + /n + this.city;
}

function Recipient(name, address, city) {
  this.name = name;
  this.address = address;
  this.city = city;
}

Recipient.prototype.fullLabel = function() {
  return this.name + /n + this.address + /n + this.city;
}

function resetFields() {
  $("input#sender_name").val("");
  $("input#sender_address").val("");
  $("input#sender_city").val("");
  $("input#recipient_name").val("");
  $("input#recipient_address").val("");
  $("input#recipient_city").val("");
}

$(document).ready(function() {
  $("#add-label").click(function() {
    $("#new-labels").append('<fieldset class="new-label">' +
                              '<form>' +
                                '<div id="sender">'+
                                  '<input type="text" id="sender_name" placeholder="Enter sender\'s name (optional)">' +
                                  '<input type="text" id="sender_address" placeholder="Enter sender\'s street address (optional)">' +
                                  '<input type="text" id="sender_city" placeholder="Enter sender\'s city, state and zip code (optional)">' +
                                '</div>' +
                                '<div id="empty"></div>' +
                                '<div id="stamp"></div>' +
                                '<div id="recipient" align="center">' +
                                  '<input type="text" id="recipient_name" placeholder="Enter recipient\'s id" required>' +
                                  '<input type="text" id="recipient_address" placeholder="Enter recipient\'s street address" required>' +
                                  '<input type="text" id="recipient_city" placeholder="Enter recipient\'s city, state and zip code" required>' +
                                  '<br>' +
                                  '<input type="submit" value="Generate">' +
                                '</div>' +
                              '</form>' +
                              '<form>' +
                              '<button name="button">Add another address</button>' +
                              '<button name="button">Delete</button>' +
                            '</form>' +
                            '</fieldset>');
  });

  $("form#new-label").submit(function(event) {
        event.preventDefault();


  });

})
