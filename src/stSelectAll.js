ng.module('smart-table')
  .directive('stSelectAll', ['stConfig', '$timeout', function (stConfig, $timeout) {
      return {
          restrict: 'E',
          require: '^stTable',
          scope: {              
              stGetSelected: '='
          },
          template: '<input type="checkbox" ng-model="isAllSelected" />',
          link: function (scope, element, attrs, ctrl) {
                                         
              function toggleSelectAll(state) {
                  if (state == true) {
                      var items = ctrl.getFilteredCollection();
                      for (var i = 0; i < items.length; i++)
                      {
                          items[i].isSelected = true;                          
                      }                      
                      scope.stGetSelected = items;
                  } else {
                      var items = ctrl.getFilteredCollection();
                      for (var i = 0; i < items.length; i++) {
                          items[i].isSelected = null;
                      }
                      scope.stGetSelected = null;
                  }
              }

              scope.$watch('isAllSelected', function (newValue, oldValue) {
                  toggleSelectAll(newValue);
              });
          }
      };
  }]);
