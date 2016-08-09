(function(){
  'use strict';

  angular.module('ingredients')
         .service('ingredientService', ['$q', IngredientService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function IngredientService($q){
    var ingredients = [
      {
        name: 'Сыр',
        code: '9801',
        count : '1',
        status: 'default-ingredient'
      },
      {
        name: 'Колбаса',
        code: '9802',
        count : '1',
        status: ''
      },
      {
        name: 'Ветчина',
        code: '9803',
        count : '1',
        status: 'default-ingredient'        
      },
      {
        name: 'Помидор',
        code: '9804',
        count : '0',
        status: 'deleted-ingredient'
      },
      {
        name: 'Сметана',
        code: '9805',
        count : '0',
        status: 'deleted-ingredient'
      },
      {
        name: 'Шампиньоны',
        code: '9806',
        count : '1',
        status: ''
      },
      {
        name: 'Белые',
        code: '9807',
        count : '1',
        status: ''
      },
      {
        name: 'Соус розе',
        code: '9808',
        count : '1',
        status: ''
      }
    ];

    // Promise-based API
    return {
      loadAllIngredients : function() {
        // Simulate async nature of real remote calls
        return $q.when(ingredients);
      }
    };
  }

})();