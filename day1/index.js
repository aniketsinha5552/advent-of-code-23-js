const fs = require('fs')

function getTwoDigit(str){
      let first;
      let second;
	for(let i=0;i<str.length;i++){
            if(str[i]>='0' && str[i]<='9'){
                  first= str[i];
                  break;
            }
      }
      for(let i=str.length-1;i>=0;i--){
            if(str[i]>='0' && str[i]<='9'){
                  second= str[i];
                  break;
            }
      }
      return first+second
	
}

fs.readFile('./input.txt','utf-8',(err,data)=>{
      let arr = data.split(/\r?\n/)
      let sum= 0;
      for(let i=0;i<arr.length-1;i++){
           sum= sum+ Number(getTwoDigit(arr[i]))
      //     console.log(getTwoDigit(arr[i]))
      }
      console.log(sum)

})
