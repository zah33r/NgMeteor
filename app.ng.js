Parties = new Mongo.Collection("parties");  //on both client and server side (Mongo and moniMongo)

if (Meteor.isClient) {
  angular.module('socially', ['angular-meteor']);

  angular.module('socially').controller('PartiesListCtrl',function ($scope, $meteor) {
    $scope.parties = $meteor.collection(Parties);

    $scope.remove = function(party){
      // $scope.parties.splice($scope.parties.indexOf(party), 1);
      $scope.parties.remove(party);
    };
  });
}
