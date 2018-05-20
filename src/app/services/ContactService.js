import contacts from './Contacts.json';
import './ContactsImages.js';

export default class ContactsService {
    static getCurrentContacts() {
        if (localStorage.getItem('app-contacts')) return JSON.parse(localStorage.getItem('app-contacts'));
        else return contacts;
    }
    static addContact(contact) {
        var cts = getCurrentContacts();
        cts.push(contact);

        localStorage.removeItem('app-contacts');
        localStorage.setItem('app-contacts', cts);
    }
    static deleteContact(contactId) {
        if (getCurrentContacts()) {

            var cts = getCurrentContacts().filter(c => c.id !== contactId);

            localStorage.removeItem('app-contacts');
            localStorage.setItem('app-contacts', cts);
        }
    }
}