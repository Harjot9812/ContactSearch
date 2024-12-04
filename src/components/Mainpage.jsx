import React from 'react'
import { useState } from 'react';
import searchcontracts from '../APILogic/searching';
import ContactsList from './ContactsList';

export default function Mainpage() {

    
    const Lasttext = "";
    const [field_e, sete] = useState("");
    const [FirstName, setFirstName] = useState(''); 
    const [SecondName, setSecondName] = useState(''); 
    const [Phone,setPhone] = useState(undefined);
    const [Email, setEmail]= useState("");
    const [searchResults, setSearchResults] = useState([]); 

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
      };
      const handleSecondNameChange = (e) => {
        setSecondName(e.target.value);
      };
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const handlePhoneChange = (e) => {
        setPhone(e.target.value);
      };

      const submitfun = async (e) => {
        e.preventDefault();  
        const data={FirstName,SecondName,Phone,Email};

        try {
          const result = await searchcontracts(data); 
          if (Array.isArray(result)) {
            setSearchResults(result); 
          } 
        } catch (error) {
          console.error("Error fetching contacts:", error);
          setSearchResults([]); 
        }

        setFirstName('');
        setSecondName('');
        setPhone('');
        setEmail('');
       
      };

  return (
    <>
   
    <div><h1>Search for a Contact</h1></div>
    <label for="first-name">First Name: </label>
    <input type="text" value={FirstName} onChange={handleFirstNameChange}></input>   
    <br/>
    <label for="Last-name">Last Name: </label>
    <input type="text" value={SecondName} onChange={handleSecondNameChange}></input>
    <br/>
    <label for="Email">Email: </label> 
    <input type="text" value={Email} onChange={handleEmailChange}></input>
  
    <br/>
    <label for="Phone">Phone: </label>
    <input type="text" value={Phone} onChange={handlePhoneChange} style={{ marginBottom: '10px' }}></input>
    <br/>
    <div>
        <button onClick={submitfun}>Search</button>
    </div>
    <br/>
    <div>
    
    <ContactsList contacts={searchResults}/>
    </div>
    
    </>
  )
}

