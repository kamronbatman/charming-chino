angular.module("steps", ['ngMaterial'])
  // .config(function($mdIconProvider) {
  //  $mdIconProvider
  //    .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
  //    .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
  //    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
  //    .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  // })
  .controller("ListCtrl", function ($scope) {
    $scope.toppings = [
      { name: 'Pepperoni', wanted: true },
      { name: 'Sausage', wanted: false },
      { name: 'Black Olives', wanted: true },
      { name: 'Green Peppers', wanted: false }
    ];
    $scope.settings = [
      { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
      { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false },
    ];
    $scope.messages = [
      {id: 1, title: "Message A", selected: false},
      {id: 2, title: "Message B", selected: true},
      {id: 3, title: "Message C", selected: true},
    ];
    $scope.people = [
      { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
      { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
      { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
    ];
  })
  .directive('steps', function () {
    return {
      restrict: 'EA',
      templateUrl: 'app/event/steps/steps.html'
    };
  });