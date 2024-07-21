console.log("第一大題")
let Value ="Value type:boolen number string array undefined null"
let Reference = "Reference type:Set,Object,Array,Function"
console.log("1:"+Value)
console.log("1:"+Reference)
console.log("a:  getElementByName, getEleMentById,null,undefined,undefined,alert,prompt,math,object,random,add()")
const Pi = 3.14
console.log("b:"+Pi)
let Name = "Bob"
let Age = "26"
console.log("C:Hello  "+Name+" 你 "+Age+" 歐 ")
//第二大題
console.log("第二大題")

function DayCauculate(){
     let Day = 1
let Hour = 10
let Minutes =17 
let Seconds = 36
let Finishs = Day*24*60*60+Hour*60*60+Minutes*60+Seconds
console.log(`A:${Finishs}秒`)
}

function SecondsCauculate(){
    let SecondSwitch = 93784
    let Day =Math.trunc( SecondSwitch /(24*60*60))
    let Hour = Math.trunc( (SecondSwitch /3600)%24)
    let Minutes = Math.trunc( (SecondSwitch /60)%60)
    let Seconds = SecondSwitch % 60

    console.log(`B:${Day} 天 ${Hour}時${Minutes}分${Seconds}秒
    `)
    }
DayCauculate();
SecondsCauculate();
function WorkInHouse(){
    let computer = true;
    let Internet = true;
    if(computer&&Internet){
        console.log("C:在家工作")
    } 
}
WorkInHouse();
function RedsDoHomework(){
    let Open = 1//打開電腦花的時間
    let Ovs = 2
    let Dowork =3//做作業花的時間
    let D1works = Open + Ovs +3*Dowork
    let D2works = Open + Ovs +2*Dowork
    FinishTime = D1works + D2works
    console.log(`Reds花${FinishTime}分`)
}
RedsDoHomework();
let Random =Math.random()
let n = Math.trunc(Math.random()*10)
console.log(Math.trunc((Random*n+1)))
//第三大題
console.log("第三大題")
function thirdfourpt(n = Number){
    let i = 1
    let sum = 0
    for(i=1;i <= (n/3) ;i++){
        sum += 3*i
    }
    for(i=1;i <= (n/4) ;i++){
        sum += 4*i
    }
    for(i=1; i <= (n/12);i++){
        sum -= 12*i

    }
    console.log("a.答案"+sum)
}
thirdfourpt(15);
console.log("b");
function numpt(){
    let num = 10
    for(let i = 1 ; i < 10 ; i++){
        let num2 = 1
        num -=1
        let ans = " ";
        let fn = " "
       for(let j = i ; j < 9 ; j++){
        num2 += 1
        let temp = num2*num
        ans += (" " + temp.toString());
        
    }
    console.log(ans)


}}
numpt();
console.log("c");
let ca = -1
let asca=" "
for(let i = 0; i <=10;i++){
ca += 3
asca = asca + ca.toString()+"  "

}
console.log(asca)
console.log("d")
function isPrime(num) {
    if (num <= 1) return false; // 小於等於1的數不是質數
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // 存在其他整數因數則不是質數
    }
    return true; // 沒有其他整數因數則是質數
}

function sumOfPrimes(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfPrimes(7))
console.log("e")
function yearMonth(x = Number,y = Number){
let leapyear = false;
let day = 0
    if (x%4==0 && x%100!=0){
        leapyear = true
}
switch(y){
    case 1 :day =31
    break
    case 2 :day =28
    break
    case 3 :day =31
    break
    case 4 :day =30
    break
    case 5 :day =31
    break
    case 6 :day =30
    break
    case 7 :day =31
    break
    case 8 :day =31
    break
    case 9 :day =30
    break
    case 10 :day =31
    break
    case 11:day =30
    break
    case 12:day =31
    break
}
if(leapyear){
    switch(y){
        case 1 :day =31
        break
        case 2 :day =29
        break
        case 3 :day =31
        break
        case 4 :day =30
        break
        case 5 :day =31
        break
        case 6 :day =30
        break
        case 7 :day =31
        break
        case 8 :day =31
        break
        case 9 :day =30
        break
        case 10 :day =31
        break
        case 11:day =30
        break
        case 12:day =31
        break
    }
}
console.log(day)

}
yearMonth(2024,7)
console.log("第四大題")
function RandomPrint() {
    let arr =[]
let sum =0
for(let i= 0 ;i<5;i++){
    let random1 = Math.floor(Math.random()*10)
    if(!arr.includes(random1)){
        arr.push(random1)
    }//使用include 當找到有一樣的匯回傳true

}
console.log("a")
console.log(arr)
console.log("總和")
for(let i = 0;i<5;i++){
    sum+= arr[i]
}
console.log(sum)
console.log("平均值")
console.log(sum/5)

console.log(arr.sort())
let avg =sum/5
let arr1 = []
for(i=0;i<5;i++){
    if(arr[i]==avg){
        arr1.push(i)
    }
    else if (arr[i]>avg)
        {
            arr1.push(i-1)
            arr1.push(i)
            break
        }
}
console.log(arr1)
    
}
RandomPrint();
console.log("d")
 const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
 const letterCount = {};

 // 遍歷 mySkills 陣列中的每個字串
 mySkills.forEach(skill => {
     // 將每個技能字串轉換為小寫，並遍歷其中的每個字母
     skill.toLowerCase().split('').forEach(letter => {
         // 如果這個字母已經在 letterCount 對象中，則將其計數加 1；否則初始化計數為 1
         letterCount[letter] = (letterCount[letter] || 0) + 1;
     });
 });
 
 // 輸出結果
 for (let letter in letterCount) {
     console.log(`${letter}: ${letterCount[letter]}`);
 }

console.log("e")
function numpt2(){
    let num = 10
    let twoArray=[]
    for(let i = 1 ; i < 10 ; i++){
        let num2 = 1
        num -=1
        const row =[]
       for(let j = i ; j < 9 ; j++){
        num2 += 1
        let temp = num2*num
        row.push(temp)
    }
    twoArray.push(row)
}
console.log(twoArray)}
numpt2()


