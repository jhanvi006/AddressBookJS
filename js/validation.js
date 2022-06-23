window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validatePhoneNo();
    validateAddress();
    validateZip();
});
const validateName = () => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            nameError.textContent = "Name can't be empty";
            return;
        }
        try{
            (new AddressBook()).name = name.value;
            nameError.textContent = "";
        }
        catch(e){
            nameError.textContent = e;
        }
    });
}
const validatePhoneNo = () => {
    const phoneNo = document.querySelector('#phoneNo');
    const phoneError = document.querySelector('.phone-error');
    phoneNo.addEventListener('input', function(){
        if(phoneNo.value.length == 0){
            phoneError.textContent = "Phone No. can't be empty";
            return;
        }
        try{
            (new AddressBook()).phoneNo = phoneNo.value;
            phoneError.textContent = "";
        }
        catch(e){
            phoneError.textContent = e;
        }
    });
}
const validateAddress = () => {
    const address = document.querySelector("#address");
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function(){
        if(address.value.length == 0){
            addressError.textContent = "Address can't be empty";
            return;
        }
        try{
            (new AddressBook()).address = address.value;
            addressError.textContent = "";
        }
        catch(e){
            addressError.textContent = e;
        }
    });
}
const validateZip = () => {
    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function(){
        if(zip.value.length == 0){
            zipError.textContent = "Zip can't be empty";
            return;
        }
        try{
            (new AddressBook()).zip = zip.value;
            zipError.textContent = "";
        }
        catch(e){
            zipError.textContent = e;
        }
    });
}
//-------------- reset form ---------------------
const resetForm = () => {
    setValue('#name', '');
    setValue('#phoneNo', '');
    setValue('#address', '');
    setSelectedIndex('#city', 0);
    setSelectedIndex('#state', 0);
    setValue('#zip', '');
    setTextValue('.name-error', '');
    setTextValue('.phone-error', '');
    setTextValue('.address-error', '');
    setTextValue('.zip-error', '');
}
const setValue = (selector, value) => {
    const element = document.querySelector(selector);
    element.value = value;
}
const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;
}
const setTextValue = (selector, value) => {
    const element = document.querySelector(selector);
    element.textContent = value;
}