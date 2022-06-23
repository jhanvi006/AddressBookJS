window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th>Fullname</th><th>Address</th><th>City</th><th>State</th>"+
                        "<th>Zip Code</th><th>Phone Number</th><th></th>";
    let innerHtml = `${headerHtml}`;
    let contactList = createContactsJson();
    for(const contact of contactList){
        innerHtml = `${innerHtml}
            <tr>
                <td>${contact._name}</td>
                <td>${contact._address}</td>
                <td>${contact._city}</td>
                <td>${contact._state}</td>
                <td>${contact._zip}</td>
                <td>${contact._phone}</td>
                <td>
                    <img src="../assets/icons/delete-black-18dp.svg" alt="">
                    <img src="../assets/icons/create-black-18dp.svg" alt="">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createContactsJson = () => {
    let contactListLocal = [
        {
            _name: 'Jhanvi Kankhara',
            _address: 'Vinayak Residency, B/h Sunshine School, Valakeshwari Nagari',
            _city: 'Jamnagar',
            _state: 'Gujarat',
            _zip: '369369',
            _phone: '7878709090'
        }
    ];
    return contactListLocal;
}