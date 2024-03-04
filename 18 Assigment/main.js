var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array Countries and its Orignal Order
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesTovisit);
// Print the Array in Alphabetical order without modiffying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
// Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesTovisit);
// Print the Array in Reverse Order without modifying the actual Array List
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
// Show that the array is still in its Orignal order
console.log("Still in Orignal Order:", countriesTovisit);
// We have Changed the Orignal Array order Now
console.log("Orignal array Reversed:", countriesTovisit.reverse());
// Print the Array  to show that it's back to its orignal order
console.log("Back to orignal order:", countriesTovisit.reverse());
// print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());
// We have Changed the Orignal Array order Now in reverse order again
console.log("Orignal array Reversed Again:", countriesTovisit.reverse());
