const save = (event) => {
    try {
        createJsonObject();
        resetForm();
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
    alert(JSON.stringify(addressBook));
}
const createNewId = () => {
    let addrBookId = localStorage.getItem('AddressBookId');
    addrBookId = !addrBookId ? 1 : (parseInt(addrBookId)+1);
    localStorage.setItem('AddressBookId', addrBookId);
    return addrBookId;
}