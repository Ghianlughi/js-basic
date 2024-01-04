function f1() {
    setTimeout(function () {
        console.log("Aku asynchronous!")
    }, 3000)
}

// setTimeout(callback | closure, waktu)
// 1000 = 1 detik

function f2() {
    setTimeout(function () {
        console.log("Panggil aku...")
    }, 3000)
}

function f3() {
    console.log("Aku ketiga...")
}

f1()
f2()
f3()