 
import React from 'react';
import '../App.css';

const ContactTable = ({ contacts }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <img src={contact.avatar} alt={`${contact.first_name} ${contact.last_name}`} width="50" height="50" style={{ borderRadius: '50%' }} />
              </td>
              <td>{contact.first_name} {contact.last_name}</td>
              <td>{contact.job_title}</td>
              <td>{contact.company}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
