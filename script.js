const fs = require('fs');

fs.writeFile("hey.txt" , "Han Ayan" , (err)=>{
    if(err) console.log("Error");
    else console.log("done");
    
    
})
