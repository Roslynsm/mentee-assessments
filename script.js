// Add your code here! Good Luck!


let sum = (number1,number2) => {result=number1+number2;
  return result;
  
  // hint: dont forget to return your answer in this function
}

let counter = () => {return ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
}

let oddCounter = () => {
  return ([1, 3, 5, 7, 9])
}

let calculateSum = () => {
  result=1+ 2+ 3+ 4+ 5+ 6+ 7+ 8+ 9+ 10;
  return result;
}


let average = (arr) => {
  var total=0 
  for (var i = 0; i < arr.length; i+=1) {
    total = arr[i]+total
  console.log(total);
}
return (total/arr.length )
}

let findMax= (arr) => {
  var maxsofar=arr[0]
  for (var i = 0; i < arr.length; i+=1) {
   if(arr[i]>maxsofar){
 maxsofar=arr[i]
   }
   
  console.log(maxsofar);
 }
return (maxsofar)

 }

let reverseArr = (arr) => {
  //return JSON.stringify(reverseArr([2, 5, 7, 3])) == JSON.stringify([3, 7, 5, 2])
}

