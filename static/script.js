function process(){
const year_coeff = 1810.9600171829554
const mileage_coeff = -0.11504015734748521
const tax_coeff = -5.670243603911945
const mpg_coeff = -34.94111554971267
const engine_coeff = 10735.52518828144
const diesel_coeff = -8494.98843170352
const electric_coeff = 25240.867269859336
const hybrid_coeff = -5065.6725575057835
const other_fuel_coeff = -4633.609264399448
const petrol_coeff = -7046.597016250239
const automatic_coeff = -3724.6960328871887
const manual_coeff = -5592.489031686568
const other_transmission_coeff = 12568.569405174057
const semi_automatic_coeff = -3251.3843406004494
const audi_coeff = 2825.89073849386
const bmw_coeff = 205.4420997501338
const hyundai_coeff = -2325.261928680483
const mercedes_coeff = 2125.2439635322235
const toyota_coeff = -2831.314873095562

var year = parseInt(document.getElementById("year").value);
var mileage = parseInt(document.getElementById("mileage").value);
var tax = parseInt(document.getElementById("tax").value);
var mpg = parseInt(document.getElementById("mpg").value);
var engine = parseInt(document.getElementById("engine").value);
var fuel_type = document.getElementById("fuel_type").value;
var transmission = document.getElementById("transmission").value;
var brand = document.getElementById("brand").value;

var diesel = 0;
var electric = 0;
var hybrid = 0;
var other_fuel = 0;
var petrol = 0;

var automatic = 0;
var manual = 0;
var other_transmission = 0;
var semi_automatic = 0;

var audi = 0;
var bmw = 0;
var hyundai = 0;
var mercedes = 0;
var toyota = 0;

if(fuel_type == "Diesel"){
    diesel = 1;
}
else if(fuel_type == "Electric"){
    electric = 1;
}
else if(fuel_type == "Hybrid"){
    hybrid = 1;
}
else if(fuel_type == "Other"){
    other_fuel = 1;
}
else if(fuel_type == "Petrol"){
    petrol = 1;
}

if(transmission == "Automatic"){
    automatic = 1;
}
else if(transmission == "Manual"){
    manual = 1;
}
else if(transmission == "Other"){
    other_transmission = 1;
}
else if(transmission == "Semi-Automatic"){
    semi_automatic = 1;
}

if(brand == "Audi"){
    audi = 1;
}
else if(brand == "BMW"){
    bmw = 1;
}
else if(brand == "Hyundai"){
    hyundai = 1;
}
else if(brand == "Mercedes"){
    mercedes = 1;
}
else if(brand == "Toyota"){
    toyota = 1;
}
    console.log(brand)

    var price = year_coeff * year + mileage_coeff * mileage + tax_coeff * tax + mpg_coeff * mpg + engine_coeff * engine + diesel_coeff * diesel + electric_coeff * electric + hybrid_coeff * hybrid + other_fuel_coeff * other_fuel + petrol_coeff * petrol + automatic_coeff * automatic + manual_coeff * manual + other_transmission_coeff * other_transmission + semi_automatic_coeff * semi_automatic + audi_coeff * audi + bmw_coeff * bmw + hyundai_coeff * hyundai + mercedes_coeff * mercedes + toyota_coeff * toyota;
    console.log(price)
}

