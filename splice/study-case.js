let animal = ["Singa","Harimau","Macan Tutul"];

function deleteElement(index, totalElement) {
    return animal.splice(index,totalElement);
}

deleteElement(1, 1);
console.log(animal);

