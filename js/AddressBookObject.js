const save = (event) => {
    try {
        let addressBookData = createJsonObject();
        createAndUpdateStorage(addressBookData);
        resetForm();
        window.location.replace(site_properties.home_page);
    } catch (e) {
        console.log(e);
    }
}
const createJsonObject = () => {
    let addressBook = new AddressBook();
    addressBook.id = createNewId();
    try {
        addressBook.name = document.getElementById('name').value;
    } catch (e) {
        nameError = document.querySelector('.name-error');
        nameError.textContent = e;
    }
    try {
        addressBook.phoneNo = document.getElementById('phoneNo').value;
    } catch (e) {
        phoneError = document.querySelector('.phone-error');
        phoneError.textContent = e;
    }
    try {
        addressBook.address = document.getElementById('address').value;
    } catch (e) {
        addressError = document.querySelector('.address-error');
        addressError.textContent = e;
    }
    addressBook.state = document.getElementById("state").value;
    addressBook.city = document.getElementById("city").value;
    try {
        addressBook.zip = document.getElementById('zip').value;
    } catch (e) {
        zipError = document.querySelector('.zip-error');
        zipError.textContent = e;
    }
    // alert(JSON.stringify(addressBook));
    return addressBook;
}
const createNewId = () => {
    let addrBookId = localStorage.getItem('AddressBookId');
    addrBookId = !addrBookId ? 1 : (parseInt(addrBookId)+1);
    localStorage.setItem('AddressBookId', addrBookId);
    return addrBookId;
}
//-------------- local storage ---------------------
const createAndUpdateStorage = (addressBookData) => {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBookData);
    } else {
        addressBookList = [addressBookData];
    }
    // alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}
//-------------- cancel form ---------------------
const cancelForm = () => {
    window.location.replace(site_properties.home_page);
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