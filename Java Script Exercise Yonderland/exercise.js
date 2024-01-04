
function findLargestNumber(arr) {
    if (arr.length === 0) {
        console.log("The array is empty");
        return;
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    console.log("The largest number is: " + largest);
}

let numbers = [2, 43, 5, 76, 7];
findLargestNumber(numbers);

let empty = [];
findLargestNumber(empty);