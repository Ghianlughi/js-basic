function perkalian(a, b) {
    return a * b 
}

function luasPersegi(sisi) {
    const luas = perkalian(sisi, sisi)
    return luas
}

console.log(luasPersegi(4))

function pertambahan(a, b) {
    return a + b 
}

function kelilingPersegiPanjang(panjang, lebar, callbackPerkalian, callbackPertambahan) {
    let k = 2 * panjang + lebar 
    let keliling =  pertambahan(panjang, lebar)

    return perkalian(keliling, 2)
}

console.log('Hasil keliling persegi:'+ kelilingPersegiPanjang(10, 5, perkalian, pertambahan))

function greeting() {
    return "hello, good morning"
}
function tampilkan(callbackGrerting){
    let greeting = callbackGrerting()
    console.log('tampil pesan:' + greeting)
}
tampilkan(greeting)

