(function(){
  'use strict';

  angular.module('ingredients')
         .service('allIngredientService', ['$q', AllIngredientService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function AllIngredientService($q){
    var styles = [
     { background: "background:#F0FFF0;", foreground: " color:black;"},
     { background: "background:#F08080;", foreground: " color:white;"},
     { background: "background:#00FA9A;", foreground: " color:black;"},
     { background: "background:#BA55D3;", foreground: " color:white;"},
     { background: "background:#FFFF00;", foreground: " color:black;"},
     { background: "background:#C71585;", foreground: " color:white;"},
     { background: "background:#FFFAF0;", foreground: " color:black;"},
     { background: "background:#20B2AA;", foreground: " color:white;"},
     { background: "background:#FFC0CB;", foreground: " color:black;"},
     { background: "background:#483D8B;", foreground: " color:white;"},
     { background: "background:#FF0000;", foreground: " color:white;"},
     { background: "background:#ADFF2F;", foreground: " color:black;"},
     { background: "background:#1E90FF;", foreground: " color:white;"},
     { background: "background:#DEB887;", foreground: " color:black;"},
     { background: "background:#800080;", foreground: " color:white;"},
     { background: "background:#E9967A;", foreground: " color:black;"},
     { background: "background:#FFD700;", foreground: " color:black;"},
     { background: "background:#E0FFFF;", foreground: " color:black;"},
     { background: "background:#FF8C00;", foreground: " color:white;"},
     { background: "background:#F5DEB3;", foreground: " color:black;"},
     { background: "background:#6D8E23;", foreground: " color:white;"},
     { background: "background:#90EE90;", foreground: " color:black;"},
     { background: "background:#778899;", foreground: " color:white;"},
      { background: "background:#3CB371;", foreground: " color:white;"},
      { background: "background:#A52A2A;", foreground: " color:white;"},
      { background: "background:#FF1493;", foreground: " color:white;"},
      { background: "background:#F0E68C;", foreground: " color:black;"},
      { background: "background:#DDA0DD;", foreground: " color:black;"},
      { background: "background:#DDA0DD;", foreground: " color:black;"},
      { background: "background:#EE82EE;", foreground: " color:white;"},
      { background: "background:#F5FFFA;", foreground: " color:black;"},
      { background: "background:#0000FF;", foreground: " color:white;"},
      { background: "background:#D8BFD8;", foreground: " color:black;"},
      { background: "background:#DC143C;", foreground: " color:white;"},
      { background: "background:#C0C0C0;", foreground: " color:black;"}
    ];


    var ingredients = [
      {
        name: 'Сыр',
        code: '9801',
      },
      {
        name: 'Колбаса',
        code: '9802'
      },
      {
        name: 'Ветчина',
        code: '9803'
      },
      {
        name: 'Помидор',
        code: '9804'
      },
      {
        name: 'Сметана',
        code: '9805'
      },
      {
        name: 'ШампиньоныОче Очень',
        code: '9806'
      },
      {
        name: 'Белые',
        code: '9807'
      },
      {
        name: 'Соус розе',
        code: '9808'
      },
      {
        name: 'Колбаса',
        code: '9802'
      },
      {
        name: 'Ветчина',
        code: '9803'
      },
      {
        name: 'Помидор',
        code: '9804'
      },
      {
        name: 'Сметана',
        code: '9805'
      },
      {
        name: 'Шампиньоны',
        code: '9806'
      },
      {
        name: 'Белые',
        code: '9807'
      },
      {
        name: 'Соус розе',
        code: '9808'
      },
      {
        name: 'Колбаса',
        code: '9802'
      },
      {
        name: 'Ветчина',
        code: '9803'
      },
      {
        name: 'Помидор',
        code: '9804'
      },
      {
        name: 'Сметана',
        code: '9805'
      },
      {
        name: 'Шампиньоны',
        code: '9806'
      },
      {
        name: 'Белые',
        code: '9807'
      },
      {
        name: 'Соус розе',
        code: '9808'
      },
      {
        name: 'Колбаса',
        code: '9802'
      },
      {
        name: 'Ветчина',
        code: '9803'
      },
      {
        name: 'Помидор',
        code: '9804'
      },
      {
        name: 'Сметана',
        code: '9805'
      },
      {
        name: 'Шампиньоны',
        code: '9806'
      },
      {
        name: 'Белые',
        code: '9807'
      },
      {
        name: 'Соус розе',
        code: '9808'
      },
      {
        name: 'Колбаса',
        code: '9802'
      },
      {
        name: 'Ветчина',
        code: '9803'
      },
      {
        name: 'Помидор',
        code: '9804'
      },
      {
        name: 'Сметана',
        code: '9805'
      },
      {
        name: 'Шампиньоны',
        code: '9806'
      },
      {
        name: 'Белые',
        code: '9807'
      },
      {
        name: 'Соус розе',
        code: '9808'
      },
      {
        name: 'Колбаса',
        code: '9802'
      },
      {
        name: 'Ветчина',
        code: '9803'
      },
      {
        name: 'Помидор',
        code: '9804'
      },
      {
        name: 'Сметана',
        code: '9805'
      },
      {
        name: 'Шампиньоны',
        code: '9806'
      },
      {
        name: 'Белые',
        code: '9807'
      },
      {
        name: 'Соус розе',
        code: '9808'
      }
    ];
    var colorCount = 0;
    for(var i=0; i < ingredients.length; i++){
      //add color
      ingredients[i].style = styles[colorCount];
      colorCount++;
      if(colorCount >= styles.length)
        colorCount = 0;
      //add short name
      ingredients[i].shortName = getShortName(ingredients[i].name);
    }

    // Promise-based API
    return {
      loadAllIngredients : function() {
        // Simulate async nature of real remote calls
        return $q.when(ingredients);
      }
    };
  }


  function getShortName(name){
    if(name.length > 13){
      return name.substring(0,13)+" ...";
    }else
      return name;

  };

})();