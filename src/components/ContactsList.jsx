import React, { useState } from "react";


const paginate = (contacts, pageSize, currentPage) => {
  const offset = (currentPage - 1) * pageSize;
  return contacts.slice(offset, offset + pageSize);
};

const ContactsList = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState(null); 
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; 

  
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const paginatedContacts = paginate(contacts, pageSize, currentPage);


  const totalPages = Math.ceil(contacts.length / pageSize);

  return (
    <div>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Email Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {paginatedContacts.map((contact) => (
            <tr key={contact["Email Address"]}>
              <td>
                <input
                  type="radio"
                  name="contactSelect"
                  onChange={() => handleContactSelect(contact)}
                  checked={
                    selectedContact &&
                    selectedContact["Email Address"] === contact["Email Address"]
                  }
                />
              </td>
              <td>{contact.FirstName} {contact.LastName}</td>
              <td>{contact["Date of Birth"]}</td>
              <td>{contact.Address}</td>
              <td>{contact.City}</td>
              <td>{contact.State}</td>
              <td>{contact["Zip Code"]}</td>
              <td>{contact["Email Address"]}</td>
              <td>{contact["Phone Number"]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Display the selected contact's details */}
      {selectedContact && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Selected Contact Details</h3>
          <p><strong>Name:</strong> {selectedContact.FirstName} {selectedContact.LastName}</p>
          <p><strong>Date of Birth:</strong> {selectedContact["Date of Birth"]}</p>
          <p><strong>Address:</strong> {selectedContact.Address}</p>
          <p><strong>City:</strong> {selectedContact.City}</p>
          <p><strong>State:</strong> {selectedContact.State}</p>
          <p><strong>Zip Code:</strong> {selectedContact["Zip Code"]}</p>
          <p><strong>Email Address:</strong> {selectedContact["Email Address"]}</p>
          <p><strong>Phone Number:</strong> {selectedContact["Phone Number"]}</p>
        </div>
      )}
    </div>
  );
};

export default ContactsList;
