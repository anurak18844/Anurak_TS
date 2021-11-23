let employee;
employee = [
    [1001, "Kongpop", 5, 20000, 0, ""],
    [1002, "Anurak", 2, 30000, 0, ""],
    [1003, "Wasok", 7, 50000, 0, ""],
    [1004, "Tanad", 1, 15000, 0, ""],
    [1005, "Wisarut", 3, 35000, 0, ""],
];
employee.forEach(e => {
    e[4] = e[3] * calBonus(e[2]);
    e[5] = calGift(e[2]);
    console.log('============================');
    console.log(`Id: ${e[0]}\nName: ${e[1]}\nworkYears: ${e[2]}\nSalary: ${formatToCurrency(e[3])}\nBonus: ${formatToCurrency(e[4])}\nGift: ${e[5]}
    `);
});
console.log('============================');
function calBonus(years) {
    if (years <= 1)
        return 0;
    else if (years <= 3)
        return 1;
    else if (years <= 5)
        return 2;
    else
        return 3;
}
function calGift(years) {
    if (years <= 3)
        return "Rice Cooker";
    else
        return "Microwave Oven";
}
function formatToCurrency(salary) {
    return salary.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
;
