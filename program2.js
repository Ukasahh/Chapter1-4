//fungsi promise untuk cek harga
function cekHarga(price){
    return new Promise((resolve, reject) => {
        if(price <= 100000){
            resolve('Beli'); //output: beli
        }
        else{
            reject('Jangan dibeli'); //output: jangan dibeli
        }  
    }); 
}

// cekHarga(500000)
//     .then(data => console.log('Barang dibawah 100rb ' + data))
//     .catch(err => console.log('Barang diatas 100rb ' + err));

async function main() {
    try{
        let hasil = await cekHarga(100000);
        console.log(hasil);

        let hasil2 = await cekHarga2(50000);

    } catch (err){
        console.log(err);
    }
}
main();