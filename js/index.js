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

var defaltImage = '../img/phone-book.png'

var contactList = [];
    
if(localStorage.getItem('contactList') && JSON.parse(localStorage.getItem('contactList')).length > 0) {
    contactList = JSON.parse(localStorage.getItem('contactList'));
    displayContacts(contactList);
    contactsCounter();
} else {
    document.getElementById('contactCardContainer').innerHTML = `
    <div class="col-12 text-center py-5">
                            <div class="d-flex align-items-center justify-content-center mx-auto mb-4 bg-secondary-subtle
                                     rounded-4" style="width: 80px; height: 80px;">
                                <i class="fas fa-address-book text-secondary fs-4"></i>
                            </div>
                            <p class="text-muted fw-semibold mb-1">No contacts found</p>
                            <p class="text-secondary small">
                                Click <strong>"Add Contact"</strong> to get started
                            </p>
                        </div>
    `
}

function addContact() {
    var contact = {
        pesrsonPhoto: pesrsonPhotoInput.files[0] ? `../img/${pesrsonPhotoInput.files[0].name}` : defaltImage,
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
    contactsCounter(contactList.length);
    localStorage.setItem('contactList', JSON.stringify(contactList));
    
    displayContacts(contactList);
    clearInputs();
}

function clearInputs() {
    pesrsonPhotoInput.value = "";
    fullNameInput.value = "";
    phoneNumberInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    groupList.value = "";
    notesInput.value = "";
    favCheckBox.checked = false;
    emergencytCheckBox.checked = false;
}

function contactsCounter(counter) {
    if(counter > 0) {
        document.getElementById('totalContacts').innerText = contactList.length;
    }
}

function displayContacts(list) {
    var blackBox = "";

    for (var i = 0; i < list.length; i++) {
        blackBox += `
         <div  class="col-md-6 col-lg-12 col-xl-6 mb-4">
                            <div class="contact-card">
                               
                                <div class="contact-card-header">
                                    <div class="d-flex align-items-start justify-content-start gap-3">
                                        <div class="position-relative flex-shrink-0  ">
                                            <img src="${list[i].pesrsonPhoto}" alt="sssss"
                                                class="contact-card-avatar object-fit-cover">
                                            <div
                                                class="badge-icon badge-heart d-flex justify-content-center align-items-center rounded-circle">
                                                <i class="fas fa-heart-pulse"></i>
                                            </div>
                                            <div
                                                class="badge-icon badge-star d-flex justify-content-center align-items-center rounded-circle">
                                                <i class="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="flex-1 min-w-0 pt-1">
                                            <h3 class="contact-card-name truncate m-0 ">${list[i].fullName}</h3>
                                            <div class="d-flex align-items-center gap-2 mt-1">
                                                <div class="contact-card-phone-container flex-shrink-0">
                                                    <i class="contact-card-phone-icon fas fa-phone"></i>
                                                </div>
                                                <span class="contact-card-phone truncate">${list[i].phoneNumber}</span>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    <div class="contact-details">
                                        <div class="contact-detail-item">
                                            <div
                                                class="contact-detail-icon-container d-flex align-items-center justify-content-center violet">
                                                <i class="contact-detail-icon violet fas fa-envelope"></i>
                                            </div>
                                            <span class="contact-detail-text truncate">${list[i].email}</span>
                                        </div>

                                        <div class="contact-detail-item">
                                            <div
                                                class="contact-detail-icon-container d-flex align-items-center justify-content-center emerald">
                                                <i class="contact-detail-icon emerald fas fa-location-dot"></i>
                                            </div>
                                            <span class="contact-detail-text truncate">${list[i].notes}</span>
                                        </div>
                                    </div>

                               
                                    <div class="contact-tags">
                                        <span class="contact-tag d-inline-flex align-items-center">${list[i].group}</span>
                                    </div>
                                </div>

                             
                                <div class="contact-card-actions">
                                    <div class="action-buttons-left">
                                        <a href="tel:01161615618" id="callBtn" class="action-button call" title="Call">
                                            <i class="fas fa-phone"></i>
                                        </a>

                                        <a class="action-button email" id="emailBtn" title="Email">
                                            <i class="fas fa-envelope"></i>
                                        </a>
                                    </div>
                                    <div class="action-buttons-right">
                                        <button class="action-button favorite" id="favBtn" title="Favorite">
                                            <i class="far fa-star"></i>
                                        </button>
                                        <button class="action-button emergency"id="emergncyBtn" title="Emergency">
                                            <i class="far fa-heart"></i>
                                        </button>
                                        <button class="action-button edit" id="editBtn" title="Edit">
                                            <i class="fas fa-pen"></i>
                                        </button>
                                        <button class="action-button delete"id="deleteBtn" title="Delete" onclick="removeContact(${i})">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
        ` 
    }
    document.getElementById('contactCardContainer').innerHTML = blackBox;
    contactsCounter(contactList.length);
}

function removeContact(idx) {
    contactList.splice(idx, 1);
    localStorage.setItem('contactList', JSON.stringify(contactList));
    displayContacts(contactList);
}
