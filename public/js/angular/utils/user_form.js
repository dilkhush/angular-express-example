app.directive('userForm', function() {
  var directive = {};
  directive.restrict = 'E';
  directive.templateUrl = "angular/views/_form.html";
  return directive;
});