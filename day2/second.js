const fs = require('fs');


function getMinPower(arr,minVal){
    for(let i=0;i<arr.length;i++){
        arr[i]= arr[i].trim();
        let num= arr[i].split(' ')[0]
        let key= arr[i].split(' ')[1]
        if(minVal[key]<Number(num)){
            minVal[key]= Number(num)
       }
    }
}

function getPower(str){
    let minVal={
        red:0,
        green:0,
        blue:0
    }
    let rounds= str.split(';')
    for(let i=0;i<rounds.length;i++){
        let roundData= rounds[i].split(",")
        if(i==0){
            roundData[0]= roundData[0].split(':')[1]
        }
        getMinPower(roundData,minVal);
    }
    let ans=1
    for(let val in minVal){
        if(minVal[val]==0) continue
        ans = ans*minVal[val]
    }
    return ans;
}

fs.readFile('./input.txt','utf-8',(err,data)=>{
    let arr = data.split(/\r?\n/)
    arr.pop();
    // arr= ['Game 1: 4 green, 3 blue, 11 red; 7 red, 5 green, 10 blue; 3 green, 8 blue, 8 red; 4 red, 12 blue; 15 red, 3 green, 10 blue']
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum+ getPower(arr[i])
    }
    console.log(sum)
})