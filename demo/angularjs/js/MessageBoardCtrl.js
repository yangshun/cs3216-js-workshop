function MessageBoardCtrl ($scope) {
  $scope.messages = [];

  $scope.submitMessage = function () {
    var messageObject = new MessageObject();
    messageObject.save({
      name: $scope.name,
      message: $scope.message
    }, {
      success: function(gameScore) {
        // Execute any logic that should take place after the object is saved.
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
        $scope.messages = results;
        $scope.$apply();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  fetchMessages();
}
