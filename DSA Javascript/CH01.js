//Binary Search to check a number present in a array or not

let numberArray =  [12,11,10,9,3,2,1,8,7];
const numberArrayLength = numberArray.length;
console.log(numberArrayLength);
console.log(numberArray[0]);
console.log(numberArray[numberArray.length - 1]);
const sortedNumberArray = numberArray.sort((a,b) => a - b)
console.log(sortedNumberArray);


function binarySerach(arr,target) {
   let low = 0;
   let high = arr.length-1;
   while (low <= high) {
    let mid = Math.floor((low + high)/2);

    if (arr[mid] === target) {
        console.log("Found at indice: ",mid);
        return arr [mid];
      
    }

    if (arr[mid] > target) {
         high = mid - 1;

    }

    if(arr[mid] < target){
        low = mid + 1;
    }

   
   } 

   console.log("Element Not Present in Array");
   return -1 ;
        
}

binarySerach(sortedNumberArray,11);