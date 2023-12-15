const fs = require('fs');


function getNums(row,rowIdx,arr){
    let nums=[]
    let word=[]
    for(let i=0;i<row.length;i++){
        if(row[i]>='0' && row[i]<='9'){
            word.push({
                idx:[rowIdx,i],
                digit:row[i]
            })
            
        }else{
            if(word.length>0){
                console.log(word.length)
                nums.push(word)
            }  
            word=[]
        }
    }
    console.log(nums)
}

function getValidParts(arr){
    for(let i=0;i<arr.length;i++){
        getNums(arr[i],i,arr)
    }
    return 0
}

fs.readFile('./input.txt','utf-8',(err,data)=>{
    let arr = data.split(/\r?\n/)
    arr.pop();
    arr= ['...*...*....................426........*..408.........................*............659...............250.........&.......*.....767...403....']
    let ans = getValidParts(arr);
    console.log(ans)
})