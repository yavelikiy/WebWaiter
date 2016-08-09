(function(){

  angular
       .module('ingredients')
       .controller('AllIngredientController', [
          'allIngredientService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          AllIngredientController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function AllIngredientController( allIngredientService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    self.selected           = null;
    self.ingredients        = [ ];
    self.selectIngredient   = selectIngredient;
    self.toggleList         = toggleIngredientsList;
    self.makeIngredient     = makeIngredient;

    // Load all registered ingredients

    allIngredientService
          .loadAllIngredients()
          .then( function( ingredients ) {
            self.ingredients    = [].concat(ingredients);
            self.selected = ingredients[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleIngredientsList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectIngredient ( ingredient ) {
      self.selected = angular.isNumber(ingredient) ? $scope.ingredients[ingredient] : ingredient;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeIngredient() {

    }

  }

})();