const phones = [
    { name: 'Nolia - 8.1', price: 8000, ram: 4, rom: 32, camera: 12 },
    { name: 'Samsung - a30', price: 23000, ram: 8, rom: 64, camera: 48 },
    { name: 'Symphony - y96', price: 6000, ram: 4, rom: 16, camera: 8 },
    { name: 'Walton - x13', price: 10000, ram: 8, rom: 64, camera: 16 },
    { name: 'Oppo - A20', price: 14000, ram: 4, rom: 64, camera: 48 },
    { name: 'Vivo-y20', price: 13000, ram: 4, rom: 64, camera: 32 }
]

function cheapestPhone(allPhones) {
    let cheapest = allPhones[0];
    for (const phone of allPhones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest
}

const myPhone= cheapestPhone(phones)
console.log(myPhone);