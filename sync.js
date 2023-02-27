const fs = require('fs')

// fs.readFile('text.txt', {encoding: 'utf-8'},(err,data) =>{

//     if(!err){
//         console.log('kedua');
//         console.log(data);
//     }
// });

let students = [
    {
        'name' : 'Jony'
    },
    {
        'name' : 'Ali'
    }
];

fs.writeFile('test-tulis.json',JSON.stringify(students), {encoding:'utf-8'}, ()=>{
    console.log('berhasil');
});

let data = fs.readFileSync('test.txt',{encoding:'utf-8'});
console.log('pertama');
console.log(data);
console.log('kedua');