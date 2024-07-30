//第一大題程式基本元素
console.log("第一大題")
let Value ="Value type:boolen number string array undefined null"
let Reference = "Reference type:Set,Object,Array,Function"
console.log("1:"+Value)
console.log("1:"+Reference)
//印出10個你知道的關鍵字
console.log("a:  getElementByName, getEleMentById,null,undefined,undefined,alert,prompt,math,object,random,add()")
// 宣告一圓周率常數，值為3.14，並取一個適當的常數名稱
const Pi = 3.14
console.log("b:"+Pi)
// 宣告兩個變數: 1.用來存你的名字，2.用來存你的年紀，並印出。 請使用適當的變數名
let Name = "Bob"
let Age = "26"
console.log("C:Hello  "+Name+" 你 "+Age+" 歐 ")
//第二大題運算子
console.log("第二大題")
//a.請用程式算出 1 天又 10 小時又 17 分又 36 秒，共等於幾秒
function DayCauculate(){
     let Day = 1
let Hour = 10
let Minutes =17 
let Seconds = 36
let Finishs = Day*24*60*60+Hour*60*60+Minutes*60+Seconds
console.log(`A:${Finishs}秒`)
}
// 請用程式算出 93784 秒，是幾天又幾小時又幾分又幾秒
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
//請用變數及運算式表示: 如果有筆電且有網路，就可以在家工作
function WorkInHouse(){
    let computer = true;
    let Internet = true;
    if(computer&&Internet){
        console.log("C:在家工作")
    } 
}

WorkInHouse();
// Reds 在寫 JavaScript 作業，電腦開機需要 1 分鐘，打開 VS Code 需要 2 分鐘，寫 1 題作業需要 3 分鐘，且 Reds 每天都會將電腦關機。Reds 分 2 天寫，第一
// 天連續寫 3 題目，第二天連續寫 2 題，請用程式算出 Reds 共花多少時間?
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
//請設計一程式，含有 1 個正整數變數 n，可隨機印出一個介於 1~n 的整數
let Random =Math.random()
let n = Math.trunc(Math.random()*10)
console.log(Math.trunc((Random*n+1)))
//第三大題流程控制
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
//有1個正整數n，並印出1~n之內，3的倍數和4的倍數的總和
thirdfourpt(15);
console.log("b");
//請用迴圈印出以下內容
//18 27 36 45 54 63 72 81
//16 24 32 40 48 56 64
//14 21 28 35 42 49
//12 18 24 30 36
//10 15 20 25
//8 12 16
//6  9
//4
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
//請用迴圈印出以下內容..
//2 5 8 11 14 17 20 23 26 29 32
console.log("c");
let ca = -1
let asca=" "
for(let i = 0; i <=10;i++){
ca += 3
asca = asca + ca.toString()+"  "

}
console.log(asca)
//請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
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
//請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天
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
//第四大題陣列
console.log("第四大題")
//請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的整數值給每個元素，且每個值不可重複
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
//(續上題) 請印出陣列所有元素的總和、平均值
console.log("總和")
for(let i = 0;i<5;i++){
    sum+= arr[i]
}
console.log(sum)
console.log("平均值")
console.log(sum/5)
//請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引
//否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引
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
// 有一字串陣列內容如下，請統計並印出陣列內每個字母各有幾個，EX: a: 4c: 2
console.log("d")
 const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
let arr = mySkills.join('');

function Count(input) {
    let Count ={}
    for(let i in input){
        if(input[i] in Count)
            { 
            Count[input[i]]++}
        else{
            let object ={}
            object[input[i]]=1
            result = Object.assign(Count,object)

        }
    }
    return result
}
console.log(Count(arr))
//請宣告一個二維陣列，並用巢狀for迴圈將值放入陣列內。結果如下:
[
    [ 18, 27, 36, 45, 54, 63, 72, 81 ],
    [ 16, 24, 32, 40, 48, 56, 64 ],
    [ 14, 21, 28, 35, 42, 49 ],
    [ 12, 18, 24, 30, 36 ],
    [ 10, 15, 20, 25 ],
    [ 8, 12, 16 ],
    [ 6, 9 ],
    [ 4 ]
]

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


