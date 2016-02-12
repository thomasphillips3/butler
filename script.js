(function(){
  if (!localStorage.getItem("userDrink")){
    var drink = prompt("What's your favorite cocktail?");
    localStorage.setItem('userDrink', drink);
    var cookie = prompt("What kinda cookies u like?");
    localStorage.setItem('userCookie', cookie);
  }
  else {
    alert("You said you like to drink " + localStorage.getItem("userDrink") + " and eat " + localStorage.getItem("userCookie"));
    var clearStuff = prompt("Would you like to clear local your selections?");
    if (clearStuff === "yes"){
      localStorage.clear();
      console.log("local storage cleared");
    }
  }
}());
