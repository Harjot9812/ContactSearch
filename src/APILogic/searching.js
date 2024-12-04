const searchcontracts = (searchData) => {
  const Firstname = searchData.FirstName;
  const Lastname = searchData.SecondName;
  const Phone = searchData.Phone;
  const Email = searchData.Email;

  return new Promise((resolve, reject) => {
    fetch("./Contacts.json")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("Fetched JSON Data:", jsonData);

        if (!Array.isArray(jsonData)) {
          return reject("Invalid JSON format: expected an array");
        }

        const regexParts = [];

        if (Firstname) {
          regexParts.push(new RegExp(Firstname, "i"));
        }

        if (Lastname) {
          regexParts.push(new RegExp(Lastname, "i"));
        }

        if (Phone) {
          regexParts.push(new RegExp(Phone, "i"));
        }

        if (Email) {
          regexParts.push(new RegExp(Email, "i"));
        }

        const results = jsonData.filter((person) => {
          return regexParts.every((regex) => {
            return (
              (person.FirstName && regex.test(person.FirstName)) ||
              (person.LastName && regex.test(person.LastName)) ||
              (person["Phone Number"] && regex.test(person["Phone Number"])) ||
              (person["Email Address"] && regex.test(person["Email Address"]))
            );
          });
        });

        console.log("Filtered Results:", results);
        resolve(results);
      })
      .catch((error) => {
        console.error("Error loading the JSON file:", error);
        reject(error);
      });
  });
};

export default searchcontracts;
