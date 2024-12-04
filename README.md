# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Objective:
Develop a Contact Search feature using any front end technology ( html; angular; react) to search for contacts from the given json data. The functionality should include multiple search filters and display results in a table format. Upon selecting a contact, the given record should be updated with the selected contact’s data.

### Technologies Used:
React.js (Frontend)
JSON (Data Storage)
JavaScript (for logic and interactivity)

### Steps to Deploy and Configure the Project:
Clone the Repository:

git clone <repository-url>

Install Dependencies:

Using npm: npm install

Configure Data:
Ensure data.json in the public folder is properly formatted with required contact data.

Set Up Components:
Check mainpage.jsx for the search functionality.
Ensure contactlist.jsx displays contacts in a table.

Run the Application:
npm start

### How the Application Works:
Search Filters:

The mainpage.jsx component includes search fields (e.g., name, date of birth, city) that allow users to filter through the contact data.
As the user types into the search fields, the contact list updates in real-time.
Displaying Contacts:

The filtered contacts are displayed in a table format in the contactlist.jsx component.
Each row in the table represents a contact, with columns for Name, Date of Birth, Address, City, State, Zip Code, Email Address, and Phone Number.
Contact Selection:

Users can click on any contact from the list, and upon selection, the contact’s details are shown below the table.
The contact's details (like Name, Address, etc.) are displayed for the selected contact.


![image](https://github.com/user-attachments/assets/36365d7d-77be-48f6-ac1e-41786cb8ce9c)

### Test Case and Validation Criteria:

Test Scenarios: Search by First Name, Search by Last Name

Search Filters: Ensure that each search filter (First Name, Last Name, City, Date of Birth) works as expected and returns the correct filtered results.

Selection of Contact: Ensure that clicking on a contact row updates the details below the table with the correct data.

Table Display: Ensure the contact list is displayed correctly in a table format with columns for Name, Date of Birth, Address, City, State, Zip Code, Email, and Phone.

