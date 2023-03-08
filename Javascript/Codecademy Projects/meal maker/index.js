const menu = {
    _meal: '',
    _price: 0,
    set price(priceOfMeal){
        this._price = priceOfMeal;
    },
    set meal(mealToCheck){
        this._meal = mealToCheck;
    },
    get todaysSpecial(){
        if(this._meal && this._price){
            return `Today\'s Special is ${this._meal} for ${this._price} dollars!`;
        }else{
            return 'Meal or price was not set correctly!';
        }
    }
}

menu.meal = "Hamburger";
menu.price = 3;
console.log(menu.todaysSpecial);