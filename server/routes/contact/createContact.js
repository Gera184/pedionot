const axios = require("axios");

const createContact = async (contactData) => {
  const config = {
    method: "post",
    url: "https://api.hubapi.com/crm/v3/objects/contacts",
    headers: {
      Authorization: "Bearer pat-eu1-a5293894-cd97-47dd-b590-6f46f09de1cc",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(contactData),
  };

  return axios(config);
};

module.exports = createContact;
