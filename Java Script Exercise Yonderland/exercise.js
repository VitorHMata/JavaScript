
function findLargestNumber(arr) {
    if (arr.length === 0) {
        console.log("The array is empty");
        return; //for the case of an empty array
    }

    let largest = arr[0]; //assuming the first element is the largest

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; //testing element by element
        }
    }

    console.log("The largest number in the Array is: " + largest);
}

//First Test
let numbers = [2, 43, 5, 76, 7];
findLargestNumber(numbers);

//Second Test (empty array)
let empty = [];
findLargestNumber(empty);