const coffeeShop = {
    name: "Heika Kopi",
    menus: {
        kopi_heika: 4,
        milk_orange: 3,
        Batagor: 10,
        French_Fries: 5,
    },
    orderA() {
        this.menus.kopi_heika -= 1
        this.menus.Batagor -= 3
        this.menus.French_Fries -= 3
        return {
            "Sisa Stok Kopi Heika : ": this.menus.kopi_heika,
            "Sisa Stok Milk Orange : ": this.menus.milk_orange,
            "Sisa Stok Batagor : ": this.menus.Batagor,
            "Sisa Stok French_Fries : ": this.menus.French_Fries,
        }
    }
}
const SisaStok = coffeeShop.orderA()
console.log(SisaStok)