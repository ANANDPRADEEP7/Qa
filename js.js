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

// dlt

let arr=[1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<arr.length;i++){
    let flag=0
    
    if(arr[i]<2){
        continue;
    }
    for(let j=2;j*j<=arr[i];j++){
        if(arr[i]%j==0){
            flag=1;
            break;
        }
    }
    if(flag===0){
        for(let k=i;k<arr.length;k++){
            arr[k]=arr[k+1]
        }
        i--
        arr.length--
       
    }
}
 console.log(arr)

// prime

let num=10;

for(let i=2;i<num;i++){
    let prime=true;
    
    for(let j=2;j<i;j++){
        if(i%j==0){
            prime=false;
            break;
        }
    }
    if(prime===true){
        console.log(i)
    }
}


// true or false

let num = 10;  
let prime = true;

if (num <= 1) {
    prime = false; 
} else {
    for (let i = 2; i < num; i++) {  
        if (num % i === 0) {
            prime = false;  
            break;
        }
    }
}

console.log(prime);


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

// remove odd
let arr=[1,2,3,4,5,6,7,8,9,10]
let index=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        arr[index]=arr[i]
        index++
    }
}
arr.length=index
console.log(arr)


// while
let i=1;
let num=7;

do{
    console.log(num*i)
    i++
}while(i<=10)


    // zero back
    let arr = [0, 1, 2, 0, 3, 4, 0, 5, 6];

let index=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[index]=arr[i]
        index++
    }
}
for(let i=index;i<arr.length;i++){
    arr[i]=0
}
console.log(arr)


// zero front

let arr = [0, 1, 2, 0, 3, 4, 0, 5, 6];

let index=arr.length-1

for(let i=arr.length-1;i>=0;i--){
    if(arr[i]!==0){
        arr[index]=arr[i]
        index--
    }
}
for(let i=0;i<=index;i++){
    arr[i]=0
}
console.log(arr)



// arr reverse

let arr=[1,2,3,4,5,7,8,9,10]
let n=arr.length;

for(let i=0;i<n/2;i++){
    let temp=arr[i]
    arr[i]=arr[n-1-i]
    arr[n-1-i]=temp;
}
console.log(arr)

// remove duplicate

let arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 5];

let n=arr.length;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]===arr[j]){
            for(let k=j;k<n-1;k++){
                arr[k]=arr[k+1];
            }
            n--
            j--
        }
    }
}
arr.length=n;

console.log(arr)


// reverse string

let str='anand'
let reverse=''

for(let i=str.length-1;i>=0;i--){
    reverse+=str[i]
}
console.log(reverse)


// wov count

let word="hello"
let wov="aeiouAEIOU"
let count=0;
for(let i=0;i<word.length;i++){
    for(let j=0;j<wov.length;j++){
        if(word[i]==wov[j]){
            count++
        }
    }
}
console.log(count)

// avg of even

let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        sum+=arr[i]
        count++
    }
}
let avg=count>0?sum/count:0
console.log(avg)

// Sum of the number(n=34  ans: 3+4 =7 )

let num=34;
let sum=0;
let str=num+''
for(let i=0;i<str.length;i++){
    sum+=str[i]-''
}
console.log(sum)


// largest

let a=1;
let b=2;
let c=3
if(a>b&&a>c){
    console.log(a)
}else if(b>a&&b>c){
    console.log(b)
}else{
    console.log(c)
}


// factoriel do while/

let i=5
let result=1;
let num=i
do{
    result *=num;
    num--
}while(num>0)
console.log(result)


// palindrome

let arr='anand'
let result=''
for(let i=arr.length-1;i>=0;i--){
    result+=arr[i]
}
console.log((result===arr)?'palindrome':'Not Palindrome')


// arr rev while

let arr=[1,2,3,4,5]
let start=0;
let end=arr.length-1

while(start<end){
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp;
    
    start++
    end--
    
}
console.log(arr)

// sec large

let large=0;
let sec=0

for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        sec=large;
        large=arr[i]
    }else if(arr[i]>sec&&arr[i]!==large){
        sec=arr[i]
    }
}
console.log(sec)



// if number divisible by 3 replace it with 'Fizz'
// if number divisible by 5 replace it with 'Buzz'
// if number divisible by 5 and 3 replace it with 'FizzBuzz'

let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for(let i=0;i<a.length;i++){
    if(a[i]%3==0&&a[i]%5==0){
        a[i]='FizzBuzz'
    }else if(a[i]%3==0){
        a[i]='Fizz'
    }else if(a[i]%5==0){
        a[i]='Buzz'
    }
}
console.log(a)


// function

function num(){
    a=10;
    b=20;
    c=30;
    
    return nums(a,b,c)
}
function nums(a,b,c){
    console.log(a+b+c)
}
num()

// sum of 3%

let arr=[]
let sum=0;
for(let i=1;i<=15;i++){
    arr[arr.length]=i;
}
console.log(arr)

for(let i=0;i<arr.length;i++){
    if(arr[i]%3===0){
        sum+=arr[i]
        console.log(arr[i])
    }
}

console.log(sum)






