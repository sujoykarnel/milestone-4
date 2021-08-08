function getWoodCalculation(chairQty, tableQty, bedQty) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // Wood calculation
    const totalChairWood = perChairWood * chairQty;
    const totalTableWood = perTableWood * tableQty;
    const totalBedWood = perBedWood * bedQty;

    // total wood
    let totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
}

const myQty = getWoodCalculation(6, 1, 3);
console.log(myQty);