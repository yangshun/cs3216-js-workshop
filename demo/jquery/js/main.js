Parse.initialize('tmJGkH3IcDmlqgPqZTeYczsB2A8N7fcvEbBvFawC', 'OLqORpsYWasNMAZOhoiT9SPs3ThkzOAQX0kMd9e4');
var MessageObject = Parse.Object.extend('MessageObject');

function submitMessage() {
  var messageObject = new MessageObject();
  var $nameInput = $('#name');
  var $messageInput = $('#message');

  messageObject.save({
    name: $nameInput.val(),
    message: $messageInput.val()
  }, {
    success: function(gameScore) {
      // Execute any logic that should take place after the object is saved.
      $messageInput.val('');
      fetchMessages();
    },
    error: function(gameScore, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and description.
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });
}

function fetchMessages() {
  var query = new Parse.Query(MessageObject);
  query.find({
    success: function(results) {
      var $messages = $('.messages');
      $messages.html('');

      for (var i = 0; i < results.length; i++) { 
        var object = results[i];
        var $messageContainer = $('<div></div>');
        var $name = $('<h4>' + object.get('name') + '</h4>');
        var $message = $('<p>' + object.get('message') + '</p>');
        var $line = $('<hr>');
        $messageContainer.append($name).append($message).append($line);
        $messages.append($messageContainer);
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

fetchMessages();

