module.exports = {
  // Database settings
  db: {
    // Database connection
    connection: 'mysql://username:password@localhost/touristinfo?reconnect=true',
    mongoUri: 'mongodb://localhost:27017/touristinfo',

    // Database collections
    collections: {
      users: 'users',
      places: 'places'
    }
  },

  // OpenWeatherMap settings
  openweathermap: {
    appid: ''
  },

  // Disqus settings
  disqus: {
    shortname: ''
  }
};
