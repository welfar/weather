function cities(city) {
  switch (city) {
    case 'bogota': {
      return {
        LAT: 4.60971,
        LONG: -74.08175,
      }
    }
    case 'medellin': {
      return {
        LAT: 6.25184,
        LONG: -75.56359,
      }
    }
    case 'cali': {
      return {
        LAT: 3.43722,
        LONG: -76.5225,
      }
    }
    case 'armenia': {
      return {
        LAT: 4.53389,
        LONG: -75.68111,
      }
    }
    case 'leticia': {
      return {
        LAT: -4.21528,
        LONG: -69.94056,
      }
    }
    case 'riohacha': {
      return {
        LAT: 11.54444,
        LONG: -72.90722,
      }
    }
    default:
      break;
  }
}

export default cities