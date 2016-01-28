/**
 *
 * Created by jsinai on 1/28/16.
 */
'use strict';

bsApp.directive('ticker', function (bsTicker) {

    return {
        restrict: 'E',
        scope: {
            x: '=',
            y: '=',
            width: '=',
            height: '=',
            color: '=',
            backgroundColor: '=',
            rotation: '=',
            text: '='
        },
        link: function (scope, element, attrs) {
            bsTicker.init(scope.x, scope.y, scope.width, scope.height, scope.rotation);
            if (scope.color) {
                bsTicker.setForegroundColor(scope.color);
            }
            if (scope.backgroundColor) {
                bsTicker.setBackgroundColor(scope.backgroundColor);
            }
            if (scope.text) {
                bsTicker.setText(scope.text);
            }
            scope.$watch('text', function (newValue, oldValue) {
                if (newValue && newValue.length > 0) {
                    bsTicker.setText(newValue);
                }
            });
        }
    }
});
