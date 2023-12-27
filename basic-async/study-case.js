// Contoh analogi wedang Jahe

function SiapkanBahanBahan() {
    setTimeout(function () {
        console.log("Menyiapkan bahan membuat wedang jahe...")
    }, 1000)
}

function MembuatTeh() {
    setTimeout(function () {
        console.log("Memasukan Teh kedalam cangkir...")
    }, 2000)
}

function GeprekJahe() {
    setTimeout(function () {
        console.log("Menggeprek Jahe")
    }, 3000)
}

function MemasukanJahe() {
    setTimeout(function () {
        console.log("Memasukan Jahe ke dalam cangkir berisi teh...")
    }, 4000)
}

function siap() {
    setTimeout(function () {
        console.log("Wedang Jahe Siap Untuk Di Sajikan...")
    }, 5000)
}

SiapkanBahanBahan()
MembuatTeh()
GeprekJahe()
MemasukanJahe()
siap()
