const fs = require('fs')

function getTwoDigit(str){
    let first;
    let second;
    let words= ['one','two','three','four','five','six','seven','eight','nine']
	for(let i=0;i<str.length;i++){
            if(str[i]>='0' && str[i]<='9'){
                  first= str[i];
                  break;
            }
            let word = str.slice(0,i+1)
            let isWord=false
            for(let j=0;j<words.length;j++){
                if(word.includes(words[j])){
                    first= String(j+1);
                    isWord=true
                    break;
                }
            }
            if(isWord) break
      }
      for(let i=str.length-1;i>=0;i--){
            if(str[i]>='0' && str[i]<='9'){
                  second= str[i];
                  break;
            }
            let word = str.slice(i,str.length)
            let isWord=false
            for(let j=0;j<words.length;j++){
                if(word.includes(words[j])){
                    second= String(j+1);
                    isWord=true
                    break;
                }
            }
            if(isWord) break
      }
      return first+second
	
}

fs.readFile('./input.txt','utf-8',(err,data)=>{
      let arr = data.split(/\r?\n/)
      let sum= 0;
    //   console.log(getTwoDigit('two1nine'))
      for(let i=0;i<arr.length-1;i++){
           sum= sum+ Number(getTwoDigit(arr[i]))
      //     console.log(getTwoDigit(arr[i]))
      }
      console.log(sum)

})
