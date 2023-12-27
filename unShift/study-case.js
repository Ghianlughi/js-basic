let animal = ["Bebek", "Ayam", "Mentok", "Harimau"];

function AddAnimal() {
    return animal.unshift("Jerapah", "Gajah");
}
AddAnimal();
console.log(animal);