// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//push name
var nameArray = [];
nameArray.push("Ernest", " Tsang");
//all the missing numbers up to and including 10 to genericNumberArray.

genericNumberArray.push(6, 7, 8, 9, 10);

//Remove charlie with pop method

var popResult = colors.pop();
console.log(popResult);

//the array named `scrambledWords` reverse it
scrambledWords.reverse();

//reverse() the array named `phoneNumber`:
phoneNumber.reverse();

//shift() removes the first element of an array:
nextOrder = orderQueue.shift();

//sort mixnumbers
mixedNums.sort();

//sort mixedWords
mixedWords.sort();

//splice fruits
var notFruit = fruitCollection.splice(1, 3);

//gem
gemBox.splice(5,2);
gemBox.splice(6,4);

//splice in the middle
upToTen.splice(2,0,3,4,5,6,7,8);

//splice
brownOnly.splice(1,5,"brown","brown","brown");

//unshift
var orderedValuesNewLength = orderedValues.unshift(1,2,3);

//concat
var randomThingsArray = genericNumberArray.concat(colors);

var updatedOrders = orderQueue.concat({ takeOut: 'fish'},{ takeOut: 'pizza'});

//join
var sentence= scrambledWords.join(" ");

var myFruits = fruitCollection.join(" + ");

//slice
var favoriteFriends = friends.slice(1,3);

var owesMoney = friends.slice(3,6);

//toString
var monthNameString = monthNames.toString();

//indexOf
var favoriteColor = colors.indexOf('Red');

var favoriteEvenNumber = mixedNums.indexOf(76);

//lastIndexOf
var lastNine = bulkNumbers.lastIndexOf(9);
var lastFive = bulkNumbers.lastIndexOf(5);
//var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];