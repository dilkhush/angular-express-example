app.directive('logoutHeader', function() {
  var directive = {};
  directive.restrict = 'E';
  directive.templateUrl = "angular/views/_logout.html";
  return directive;
});
