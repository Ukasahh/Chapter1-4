function isPasswordCorrect(password){
    return new Promise((resolve, reject) => {
        if(password == 'password123'){
            resolve('password cocok');
        }
        else{
            reject('password salah');
        }  
    }); 
}

isPasswordCorrect('password123')
    .then(data => console.log(data))
    .catch(err => console.log(err));