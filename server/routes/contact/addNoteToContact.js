const axios = require("axios");

const addNoteToContact = async (contactId, note) => {
  console.log({contactId})
  console.log({note})
  const noteBody = Object.entries(note)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");

  const noteData = {
    engagement: {
      type: "NOTE",
    },
    associations: {
      contactIds: [contactId],
    },
    metadata: {
      body: noteBody,
    },
  };

  const noteConfig = {
    method: "post",
    url: "https://api.hubapi.com/engagements/v1/engagements",
    headers: {
      Authorization: "Bearer pat-eu1-a5293894-cd97-47dd-b590-6f46f09de1cc",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(noteData),
  };

  return axios(noteConfig);
};

module.exports = addNoteToContact;
