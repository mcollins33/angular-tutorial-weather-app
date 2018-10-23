//DIRECTIVES

weatherApp.directive("tempPanel", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/panel.html',
        replace: true,
        scope: {
            tempObject: "=",
            roundTem: "&",
            convertDate: "&",
            dateFormat: "@"
        }
    }
});