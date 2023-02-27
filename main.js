const fs = require('fs')

// fs.readFile('text.txt', {encoding: 'utf-8'},(err,data) =>{

//     if(!err){
//         console.log('kedua');
//         console.log(data);
//     }
// });

let students = [
    {
        'name' : 'Sabrina'
    },
    {
        'name' : 'Sabrina'
    }
];

//async
fs.writeFile('test-tulis.json',JSON.stringify(students), {encoding:'utf-8'}, ()=>{
    console.log('berhasil');
});

console.log('pertama');