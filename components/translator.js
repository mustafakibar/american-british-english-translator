const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  static LOCALE_BRITISH_TO_AMERICAN = 'british-to-american';
  static LOCALE_AMERICAN_TO_BRITISH = 'american-to-british';

  static translate(text, locale) {}
}

module.exports = Translator;
