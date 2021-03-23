const I = actor();

module.exports = {
  address(data, includeAddress2, namePrefix = "") {
    I.fillField(`${namePrefix}address1`, data.address1);
    if (includeAddress2) {
      I.fillField(`${namePrefix}address2`, data.address2);
    }
    I.fillField(`${namePrefix}postalCode`, data.postalCode);
    I.wait(1);
  },

  identification(data, peopleID, namePrefix = "") {
    I.selectOption("ID Type", peopleID);
    I.wait(1);
    I.selectOption(`${namePrefix}issuedBy`, "Alaska");
    I.fillField(`${namePrefix}idValue`, "DFfkjs88");
    I.fillField(`${namePrefix}issueDate`, "12192019");
    I.fillField(`${namePrefix}expireDate`, "12222299");
  },

  verification(data, peopleID, namePrefix = "") {
    I.fillField(`${namePrefix}birthDate`, data.birthDate);
    I.fillField(`${namePrefix}socialSecurityNumber`, data.socialSecurityNumber);
  },
};