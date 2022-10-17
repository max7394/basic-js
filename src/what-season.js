const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!"
  }
  if (isNaN(Date.parse(date)) || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!')
  }
  try {
    const monthSeason = date.getMonth()
    if (monthSeason < 2 || monthSeason === 11) return "winter"
    if (monthSeason < 5 && monthSeason > 1) return "spring"
    if (monthSeason < 8 && monthSeason > 4) return "summer"
    if (monthSeason < 11 && monthSeason > 7) return "autumn"
  }
  catch(e) {throw new Error('Invalid date!')}
}

module.exports = {
  getSeason
};
