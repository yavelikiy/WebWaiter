(function(){

  angular
       .module('ingredients')
       .controller('CodePadController', [
          '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          CodePadController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function CodePadController( $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;
    self.currentCode        = '';
    self.name = '';
    self.error = '';

    /**
    ** Perform pad click
    **/
    self.padClick = function (code) {
      if(code < 10 && code >-1){
        self.currentCode += code; 
      }else if(code == 10){ // on ok
        addIngredient(self.currentCode);
        self.currentCode = '';        
      }else if(code == 11){ // on cancel
        self.currentCode = '';
      }
      return true;
    }

    function addIngredient(code){     
      alert('addIngredient '+code);
    }

  }

})();