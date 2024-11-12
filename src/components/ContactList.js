// src/components/ContactList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';
import ContactTable from './ContactTable';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('cards'); // 'cards' or 'table' view state

  useEffect(() => {
    axios.get('https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts')
      .then(response => {
        setContacts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching contacts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center my-4">Loading contacts...</div>;
  }

  return (
    <div className="container">
      <div className="text-center mb-3">
      <button className="btn btn-secondary me-2" onClick={() => setView('table')}>Table View</button>
        <button className="btn btn-primary me-2" onClick={() => setView('cards')}>Card View</button>
       
      </div>
      <div className="row">
        {view === 'cards' && contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      {view === 'table' && <ContactTable contacts={contacts} />}
    </div>
  );
};

export default ContactList;
