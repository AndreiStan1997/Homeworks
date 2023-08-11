console.log("It is working !");

async function fetchIngredientR() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const jsonData = await response.json();
    console.log(jsonData);
  }

var x = document.getElementById("search");
var x2 = document.getElementById("Results")
  async function fetchIngredient() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + x.value);
    const jsonData = await response.json();
    console.log(jsonData);
    x2.innerHTML=jsonData;
  }


var y = document.getElementById("search2")
  async function fetchIngredient2() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + y.value);
    const jsonData = await response.json();
    console.log(jsonData);
  }