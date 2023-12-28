// #1 Lengkapilah kode di bawah ini.
const tiger = {
    name: "Daniel",
    fur: "pink",
    food: ["Raw Chicken Meat", "Beef"],
    getname() {
        return "Dia Bernama " + this.name
    },
    getfur() {
        return "Dia mengenakan baju berwarna " + this.fur
    },
    getfood() {
        return this.name + " " + "Sangat suka dengan makanan " + this.food
    },

}
const nama = tiger.getname()
const color = tiger.getfur()
const foodies = tiger.getfood()
console.log(nama)
console.log(color)
console.log(foodies)

// #2 Buatlah object sebuah burung Elang / Eagle
const eagle = {
    name: "perwira",
    fur: "coklat",
    food: ['roti'],
    voice() {
        return this.name + " " + "Bersuara rawr "

    },
    getFur() {
        return "Dan dia memiliki bulu coklat " + this.fur
    },
    getfood() {
        return "Makanan " + this.name + " " + "adalah " + this.food
    }

}
const suaraElang = eagle.voice()
const warnabulu = eagle.getFur()
const makananElang = eagle.getfood()
console.log(suaraElang)
console.log(warnabulu)
console.log(makananElang)