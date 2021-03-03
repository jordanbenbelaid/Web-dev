let rat = new Object();
rat["teeth"] = 8;
rat["tail"] = true;

console.log(rat);
console.log(rat.teeth);
console.log(rat.tail);


let jsonObj = {
    "tesco":[
        {prodName:"fanta", price: 1.00},
        {prodName:"lilt", price: 1.50},
        {prodName:"water", price: 1.75},
    ],
    "asda":[
        {prodName:"OJ", price: 2.00},
        {prodName:"coke", price: 2.50},
    ]
}

console.log(jsonObj.asda);