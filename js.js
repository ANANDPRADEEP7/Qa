// Factroial

function fact(n){
  let result=1;
  for(let i=2;i<=n;i++){
      result *=i
  }
  return result
}
console.log(fact(5))

// Array missing numbers

let arr = [1, 3, 7, 9, 10];

let min=arr[0]
let max=arr[0]

for(let i=1;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
    if(arr[i]>max){
        max=arr[i]
    }
}

let complet=[]
for(let i=min;i<=max;i++){
    complet[complet.length]=i
}
console.log(complet)


// Prime number

let arr=[1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<arr.length;i++){
    let flag=0

    if(arr[i]<2){
        continue
    }
    for(let j=2;j*j<=arr[i];j++){
        if(arr[i]%j===0){
            flag=1;
            break;
        }
    }
    if(flag===0){
        console.log(arr[i])
    }
}

// Frequency of string 


let str=["NAVYA"]
let arr=str[0]
let freq={}

for(let i=0;i<arr.length;i++){
    let char=arr[i]
    
    if(freq[char]===undefined){
        freq[char]=1;
    }else{
        freq[char]=freq[char]+1
    }
}
for(let key in freq){
    console.log(key,"-",freq[key])
}


// Remove odd numbers

let arr=[1,2,3,4,5,6,7,8,9,10]
let even=[]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evrn[evrn.length]=arr[i]
    }
}
console.log(even);

// Largest string in an array using function

function largStr(arr){
    let maxs=arr[0]
    
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>maxs.length){
            maxs=arr[i]
        }
    }
    return maxs
}
let arr = ["apple", "banana", "cherry", "blueberry", "kiwi"];
console.log(largStr(arr));


// largest even number

let arr=[1,2,5,6,4,7]
let largest=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
}
console.log(largest)


// repeated number count-

let arr=[1,2,4,3,2,5,3,6,1,7,8]
let count=0
for(let i=0;i<arr.length;i++){
    let flag=0
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            flag=1
        }
    }
    if(flag!=0){
        count++
    }
}
console.log(count);


// non repeated count

let arr=[1,4,3,8,2,5,3,6,7,8]
let count=0
for(let i=0;i<arr.length;i++){
    let flag=0;
    for(let j=0;j<arr.length;j++){
        if(i!==j&&arr[i]===arr[j]){
            flag=1
        }
    }
    if(flag===0){
        count++
    }
    
}
console.log(count)

// object values inte sum

let obj={
    a:10,
    b:"anand",
    c:39,
    d:"abcd",
    e:98
}

let sum=0;
let value=Object.values(obj)
for(let i=0;i<value.length;i++){
    if(typeof(value[i])=='number'){
        sum=sum+value[i]
    }
}
console.log(sum)


