/*Let’s imagine a bustling restaurant, “The JavaScript Diner,” where every array operation is like a task handled by the restaurant staff. Each array method corresponds to how the restaurant operates—from managing ingredients in the kitchen to serving dishes to customers.

Chapter 1: Setting Up the Kitchen – Creating Arrays
The restaurant needs to keep track of various ingredients. The chef starts by setting up the kitchen, arranging different items in storage boxes (arrays).*/

// The chef sets up the kitchen with various ingredients
let pantry = ["flour", "sugar", "salt"]; 
let fridge = new Array("milk", "eggs", "butter");

console.log(pantry); // Output: ["flour", "sugar", "salt"]
console.log(fridge); // Output: ["milk", "eggs", "butter"]

/*
Chapter 2: Reaching for Ingredients – Accessing Elements
The chef needs to grab specific ingredients. Just like reaching into the right box, they use the correct index to get what they need.
*/

let spices = ["pepper", "cinnamon", "nutmeg"];

// The chef grabs the second spice from the array
console.log(spices[1]); // Output: "cinnamon"

/*
Chapter 3: Adding Ingredients – Pushing and Unshifting
The kitchen is always restocking. When new supplies arrive, the chef adds them to the pantry. They can either place new items at the end of the shelf or right at the front.
*/
let fruits = ["apple", "banana"];

// Adding at the end of the shelf
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]

// Adding at the front of the shelf
fruits.unshift("grape");
console.log(fruits); // Output: ["grape", "apple", "banana", "orange"]

/*
Chapter 4: Taking Away Spoiled Goods – Popping and Shifting
Sometimes, ingredients spoil or are used up. The chef removes items from the shelves—either the oldest stock or the most recent.
*/
let vegetables = ["carrot", "potato", "onion"];

// Removing the latest vegetable from the shelf
vegetables.pop();
console.log(vegetables); // Output: ["carrot", "potato"]

// Removing the oldest vegetable from the shelf
vegetables.shift();
console.log(vegetables); // Output: ["potato"]

/*
Chapter 5: Rearranging the Menu – Splice, Slice, and Concat
The menu constantly changes based on customer preferences and seasonal ingredients.
-----------------------------------------------------------------------------
Splice modifies the menu by adding or removing dishes in the middle.*/

let menu = ["Pasta", "Burger", "Salad"];

// Replacing "Burger" with "Pizza"
menu.splice(1, 1, "Pizza");
console.log(menu); // Output: ["Pasta", "Pizza", "Salad"]

/*
Slice creates a smaller, specialized menu for the day without altering the main menu.
*/

let allDishes = ["Soup", "Steak", "Fish", "Dessert"];

// Creating a special menu with selected dishes
let specialMenu = allDishes.slice(1, 3);
console.log(specialMenu); // Output: ["Steak", "Fish"]

/*
Concat combines seasonal specials with the main menu to offer more variety.
*/
let breakfast = ["Pancakes", "Omelette"];
let lunch = ["Sandwich", "Salad"];

// Combining breakfast and lunch menus
let combinedMenu = breakfast.concat(lunch);
console.log(combinedMenu); // Output: ["Pancakes", "Omelette", "Sandwich", "Salad"]

/*
Chapter 6: Finding the Right Dish – IndexOf, Includes, and Find
---------------------------------------------------------------------------
Sometimes, the chef needs to check if a dish is on the menu or find the perfect dish for a customer.

IndexOf locates a specific dish on the menu.
*/
let beverages = ["Tea", "Coffee", "Juice"];
console.log(beverages.indexOf("Coffee")); // Output: 1

/*
Includes checks if a dish is available.
*/
console.log(beverages.includes("Water")); // Output: false

/*
Find helps identify a dish that meets specific customer needs.
*/
let desserts = [{ name: "Cake", sugarFree: false }, { name: "Fruit Salad", sugarFree: true }];

// Finding a sugar-free dessert
let healthyOption = desserts.find((dessert) => dessert.sugarFree);
console.log(healthyOption); // Output: { name: "Fruit Salad", sugarFree: true }

/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Chapter 7: Modifying Ingredients – Map, Filter, and Reduce
------------------
Map is used when each dish on the menu needs a slight change—like updating prices.
*/
let prices = [10, 20, 30];

// Increasing prices by 10%
let updatedPrices = prices.map((price) => price * 1.1);
console.log(updatedPrices); // Output: [11, 22, 33]

//Filter helps the chef pick only the vegetarian options for a customer.//

let allMeals = ["Chicken Curry", "Veggie Burger", "Salmon"];

// Selecting only vegetarian meals
let vegetarianMeals = allMeals.filter((meal) => meal.includes("Veggie"));
console.log(vegetarianMeals); // Output: ["Veggie Burger"]

//Reduce is like tallying up the bill at the end of a meal.

let orders = [15, 25, 10];

// Calculating the total bill
let totalBill = orders.reduce((total, amount) => total + amount, 0);
console.log(totalBill); // Output: 50

/*

  ***** Chapter 8: Organizing the Kitchen – Sort and Reverse**********

*/

//      Sort is like arranging dishes in a particular order on the menu.//
let dishNames = ["Soup", "Burger", "Steak"];
dishNames.sort();
console.log(dishNames); // Output: ["Burger", "Soup", "Steak"]

//      Reverse changes the order to present the latest specials first.//
let orderQueue = [1, 2, 3];
orderQueue.reverse();
console.log(orderQueue); // Output: [3, 2, 1]


/*
----------------------------------------------------------------------------------
|        Chapter 9: Flattening the Storage – Flat and FlatMap
        The kitchen has nested storage containers, and sometimes the chef needs everything in one place.
--------------------------------------------------------------------------------*/let storage = ["Pantry", ["Freezer", ["Fridge"]]];

// Flattening the storage areas
let allStorage = storage.flat(2);
console.log(allStorage); // Output: ["Pantry", "Freezer", "Fridge"]
        
/*
----------------------------------------------------------------------------------
|      Chapter 10: Serving in Style – Join
       To serve dishes with a nice presentation, the chef arranges items in a string.  
        

--------------------------------------------------------------------------------*/
let toppings = ["cheese", "tomato", "basil"];

// Joining toppings into a description
let pizzaDescription = toppings.join(", ");
console.log(pizzaDescription); // Output: "cheese, tomato, basil"

/*
----------------------------------------------------------------------------------
|   Chapter 11: Doing the Calculations – Math Operations
In the restaurant, math is essential—whether calculating the cost of dishes, determining discounts, or managing inventory.
    

--------------------------------------------------------------------------------*/

//Math.floor and Math.ceil are used to round numbers down or up.

let totalBill = 45.67;

// Rounding the bill down and up
let roundedDown = Math.floor(totalBill); // Output: 45
let roundedUp = Math.ceil(totalBill);    // Output: 46

console.log(`Rounded Down: ${roundedDown}, Rounded Up: ${roundedUp}`);

//Math.random helps generate random orders or pick a dish of the day.

let specials = ["Pasta", "Burger", "Salad"];

// Choosing a random special
let randomSpecial = specials[Math.floor(Math.random() * specials.length)];
console.log(`Today's Special: ${randomSpecial}`);


/*
----------------------------------------------------------------------------------
|      Chapter 12: Looping Through the Orders – For...of Loop

****** The for...of loop is like the chef inspecting each dish in a long line of orders, one at a time.*********


--------------------------------------------------------------------------------*/

let orders = ["Steak", "Salmon", "Pasta"];

// The chef checks each order before serving
for (let order of orders) {
  console.log(`Preparing ${order}`);
}
// Output:
// Preparing Steak
// Preparing Salmon
// Preparing Pasta

/*
----------------------------------------------------------------------------------
|       Chapter 13: Managing the Seating Chart – Multidimensional Arrays
The restaurant also manages tables, where each table has a different set of customers. Multidimensional arrays help keep track of who is sitting where.
         

--------------------------------------------------------------------------------*/

// Tables with customers
let tables = [
    ["Alice", "Bob"],        // Table 1
    ["Charlie"],             // Table 2
    ["David", "Eve", "Frank"] // Table 3
  ];
  
  // Checking each table's customers
  console.log(tables[0][1]); // Output: "Bob" (2nd customer at Table 1)
  console.log(tables[2][0]); // Output: "David" (1st customer at Table 3)

  /*
----------------------------------------------------------------------------------
Chapter 14: Nested Loops – For...Loop in Multidimensional Arrays
Sometimes, the chef needs to greet every guest at every table. This task can be done using nested loops.

--------------------------------------------------------------------------------*/

// Visiting every customer at each table
for (let table of tables) {
    for (let customer of table) {
      console.log(`Hello, ${customer}!`);
    }
  }
  // Output:
  // Hello, Alice!
  // Hello, Bob!
  // Hello, Charlie!
  // Hello, David!
  // Hello, Eve!
  // Hello, Frank!

    /*
----------------------------------------------------------------------------------
Chapter 15: Special Orders – Objects Inside Arrays
The restaurant also handles special orders, where each order has multiple details like the dish name, price, and special instructions. Each special order is represented as an object inside an array.



--------------------------------------------------------------------------------*/
// Orders with details
let specialOrders = [
    { dish: "Pizza", price: 15, instructions: "Extra cheese" },
    { dish: "Salad", price: 10, instructions: "No dressing" },
    { dish: "Burger", price: 12, instructions: "No onions" }
  ];
  
  // Accessing order details
  specialOrders.forEach(order => {
    console.log(`Dish: ${order.dish}, Price: $${order.price}, Instructions: ${order.instructions}`);
  });
  // Output:
  // Dish: Pizza, Price: $15, Instructions: Extra cheese
  // Dish: Salad, Price: $10, Instructions: No dressing
  // Dish: Burger, Price: $12, Instructions: No onions

    /*
----------------------------------------------------------------------------------

Chapter 16: Checking the Ingredients Box – Array.isArray
The chef often needs to confirm whether something is an array (like a box of ingredients) or a single item. Array.isArray helps with this.


--------------------------------------------------------------------------------*/

let ingredients = ["lettuce", "tomato", "cucumber"];
let singleItem = "salt";

// Checking if the items are arrays
console.log(Array.isArray(ingredients)); // Output: true
console.log(Array.isArray(singleItem));  // Output: false

