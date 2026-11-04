var pesrsonPhotoInput = document.getElementById('contactPersonPhoto');
var fullNameInput = document.getElementById('contactName');
var phoneNumberInput = document.getElementById('contactNumber');
var emailInput = document.getElementById('contactEmail');
var addressInput = document.getElementById('contactAddress');
var groupList = document.getElementById('contactGroup');
var notesInput = document.getElementById('contactNotes');
var emergencytCheckBox = document.getElementById('emergencyCheck')
var favCheckBox = document.getElementById('favCheck');
var addBtn = document.getElementById('addBtn')

var contactList = [];

function addContact() {
    var contact = {
        fullName: fullNameInput.value,
        phoneNumber: phoneNumberInput.value,
        email: emailInput.value,
        address: addressInput.value,
        group: groupList.value,
        notes: notesInput.value,
        favourite : favCheckBox.checked,
        emergency: emergencytCheckBox.checked
    }

    contactList.push(contact);
    localStorage.setItem('contactList', JSON.stringify(contactList));
    
    clearInputs()
}

function clearInputs() {
    fullNameInput.value = "";
    phoneNumberInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    groupList.value = "";
    notesInput.value = "";
    favCheckBox.checked = false;
    emergencytCheckBox.checked = false;
}

