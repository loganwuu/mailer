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
    $("#new-labels").append(


      
    );
  });
})
