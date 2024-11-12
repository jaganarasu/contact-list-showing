import React from 'react';
import '../App.css';
 

const ContactCard = ({ contact }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="card shadow-sm">
        <img src={contact.avatar} alt={`${contact.first_name} ${contact.last_name}`} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{contact.first_name} {contact.last_name}</h5>
          <p className="card-text text-muted">{contact.job_title} at {contact.company}</p>
          <p className="card-text">Phone: {contact.phone}</p>
          <p className="card-text">Email: {contact.email}</p>
        </div>
      </div>
    </div>

    
  );
};

export default ContactCard;
