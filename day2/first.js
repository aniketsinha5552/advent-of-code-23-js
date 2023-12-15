const fs = require('fs');

const data={
    red:12,
    green:13,
    blue:14
}

function validateRound(arr){
    let valid = true
    for(let i=0;i<arr.length;i++){
        arr[i]= arr[i].trim()
        let num= arr[i].split(' ')[0]
        let key= arr[i].split(' ')[1]
        if(data[key]<Number(num)){
             return false
        }
    }
    return true
}

function validateGame(str){
    let rounds= str.split(';')
    for(let i=0;i<rounds.length;i++){
        let roundData= rounds[i].split(",")
        if(i==0){
            roundData[0]= roundData[0].split(':')[1]
        }
        const isValidRound= validateRound(roundData);
        if(!isValidRound) return false
    }
    return true
}

function getGameId(str){
    let game = str.split(':')[0];
    let id = game.split(' ')[1];
    return Number(id)
}

fs.readFile('./input.txt','utf-8',(err,data)=>{
    let arr = data.split(/\r?\n/)
    arr.pop();
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(validateGame(arr[i])){
            sum= sum+ getGameId(arr[i])
        }
    }
    console.log(sum)
})