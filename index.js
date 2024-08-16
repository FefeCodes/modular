import sayMyColor from "./color.js";
import sayMyFavFood from "./food.js"
import { sayMyFavFood, sayMyPet } from "./food.js";

let result = sayMyColor()
let newResult = sayMyFavFood()
let food = sayMyFavFood()
let pet = sayMyPet()

console.log(result, newResult, food, pet);