const axios = require('axios');

const { API_URL, username, password } = require('../config/constants');

const fetchSuggestions = async ({ query: { filter } }, res) => {
  try {
    const header = {
      auth: {
        username,
        password,
      },
    };
    const response = await axios.get(`${API_URL}?filter=${filter}`, header);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(error.response.status).json({
      message: error.response.data.errors.title,
    });
  }
};

module.exports = {
  fetchSuggestions,
};
