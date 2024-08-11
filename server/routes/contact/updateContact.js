const axios = require("axios");

const updateContact = async (contactId, properties) => {
  const config = {
    method: "patch",
    url: `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
    headers: {
      Authorization: "Bearer pat-eu1-a5293894-cd97-47dd-b590-6f46f09de1cc",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ properties }),
  };

  return axios(config);
};

module.exports = updateContact;
