const newPromise = new Promise( resolve => resolve('berhasil'));

newPromise
    .then(data => console.log(data)) //berhasil
    .catch(err => console.log(err)) //error