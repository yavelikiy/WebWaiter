(function(){

  angular
       .module('ingredients')
       .controller('IngredientController', [
          'ingredientService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          IngredientController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function IngredientController( ingredientService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    self.selected           = null;
    self.ingredients        = [ ];
    self.fixedIngredients   = [ 'Ветчина'];
    self.selectIngredient   = selectIngredient;
    self.toggleList         = toggleIngredientsList;
    self.makeIngredient     = makeIngredient;
    self.lable              = 'Пицца Маргарита';
    self.isIngredientList   = true;
    self.addIngredient      = addIngredient;
    self.inc                = inc;
    self.dec                = dec;

    // Load all registered ingredients

    ingredientService
          .loadAllIngredients()
          .then( function( ingredients ) {
            self.ingredients    = [].concat(ingredients);
            for(var i=0; i< self.ingredients.length; i++){
              self.ingredients[i].id=i;
            }
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

    function addIngredient(vCode, vName){
      for(var i=0; i<self.ingredients.length; i++){
        if(vCode === self.ingredients[i].code){
          self.inc(i);
          return;
        }
      }
      var vId = self.ingredients.length;
      self.ingredients = self.ingredients.concat([{id: vId, code:vCode,name:vName,status:'', count:1}]);
    }

    function inc(pos){
      if(self.ingredients[pos].count == 0)
        self.status = 'default-ingredient';
      self.ingredients[pos].count++;
    }

    function dec(pos, name){
      if(self.ingredients[pos].count == 1){
        if(isFixed(name)){
          self.ingredients[pos].count--;
          self.status = 'deleted-ingredient';
        }else{

        }
      }else{
          self.ingredients[pos].count--;
      }
    }

    function isFixed(name){
      for(var i=0; i< self.fixedIngredients.length; i++){
        if(self.fixedIngredients[i] === name)
          return true;
      }
      return false;
    }

    

  }

})();