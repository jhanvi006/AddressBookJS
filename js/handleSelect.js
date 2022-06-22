var citiesByState = {
    Gujarat: ["Ahmedabad", "Jamnagar", "Rajkot", "Vadodara"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Rajasthan: ["Jaipur", "Udaipur", "Bikaner", "Kota"],
    Karnataka: ["Banglore", "Hubli", "Mysore"]
}
function makeCitySubmenu(value) {
    if (value.length == 0) document.getElementById("city").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (cityId in citiesByState[value]) {
            citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
        }
        document.getElementById("city").innerHTML = citiesOptions;
    }
}
function resetSelection() {
    document.getElementById("state").selectedIndex = 0;
    document.getElementById("city").selectedIndex = 0;
}