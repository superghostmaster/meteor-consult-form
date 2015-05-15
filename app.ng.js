if(Meteor.isClient) {
	angular.module('socially',['angular-meteor']);
    //dependency injection handled by .ng.js via ng-annotate
	angular.module("socially").controller("PartiesListCtrl",
      function($scope, $meteor){

        $scope.remove = function(party){
          $scope.parties.remove(party);
        };
        
        $scope.removeAll = function(){
          $scope.parties.remove();
        }
        $scope.parties = $meteor.collection(Parties);
      
  });  
}

if(Meteor.isServer){
  Meteor.startup(function(){
    if(Parties.find().count() === 0) {

    var parties = [
        {'name': 'Dubstep-Free Zone',
          'description': 'Can we please just for an evening not listen to dubstep.'},
        {'name': 'All dubstep all the time',
          'description': 'Get it on!'},
        {'name': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];

      for (var i = 0; i < parties.length; i++)
          Parties.insert(parties[i]);
      }
  });

}