const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');
require('dotenv').config();

const IS_TRACE_ENABLED = process.env.NODE_ENV === 'trace';

String.prototype.capitalize = function () {
  return this && this[0].toUpperCase() + this.slice(1);
};

String.prototype.wrapHighlightEl = function () {
  return `<span class="highlight">${this}</span>`;
};

String.prototype.replaceBase = function (search, replace, highlight) {
  const replaced = this.replace(
    new RegExp(search, 'gi'),
    highlight ? replace.wrapHighlightEl() : replace
  );

  if (IS_TRACE_ENABLED && this != replaced) {
    console.log('>>-------------->');
    console.log(`Original: '${this}'`);
    console.log(`Replaced: '${replaced}'`);
    console.log(
      `Search text: ${search}, Replace text: ${replace}, Highlight flag?: ${
        highlight || false
      }`
    );
    console.log('<<--------------<');
  }

  return replaced;
};

class Translator {
  static LOCALE_BRITISH_TO_AMERICAN = 'british-to-american';
  static LOCALE_AMERICAN_TO_BRITISH = 'american-to-british';

  americanToBritish = (text, highlight) => {
    let american, british;

    for ([american, british] of Object.entries(americanOnly)) {
      text = text.replaceBase(`(?<!-)\\b${american}\\b`, british, highlight);
    }

    for ([american, british] of Object.entries(americanToBritishSpelling)) {
      text = text.replaceBase(`(?<!-)\\b${american}\\b`, british, highlight);
    }

    for ([american, british] of Object.entries(americanToBritishTitles)) {
      text = text.replaceBase(`${american}`, british.capitalize(), highlight);
    }

    return this.finalize(
      text.replaceBase(/(\d{1,2}):(\d{1,2})/gi, '$1.$2', highlight)
    );
  };

  britishToAmerican = (text, highlight) => {
    let british, american;

    for ([british, american] of Object.entries(britishOnly)) {
      text = text.replaceBase(`(?<!-)\\b${british}\\b`, american, highlight);
    }

    for ([american, british] of Object.entries(americanToBritishSpelling)) {
      text = text.replaceBase(`(?<!-)\\b${british}\\b`, american, highlight);
    }

    for ([american, british] of Object.entries(americanToBritishTitles)) {
      text = text.replaceBase(
        `\\b${british}\\b`,
        american.capitalize(),
        highlight
      );
    }

    return this.finalize(
      text.replaceBase(/(\d{1,2}).(\d{1,2})/gi, '$1:$2', highlight)
    );
  };

  finalize = (text) => text.capitalize();

  translate = (text, locale, highlight) => {
    text = text
      .replace(/\s+/g, ' ')
      .replace(/^\s+|\s+$/, '')
      .replace(/(\r\n|\n|\r)/gm, '');

    let translated;

    if (locale === Translator.LOCALE_AMERICAN_TO_BRITISH) {
      translated = this.americanToBritish(text, highlight);
    } else if (locale === Translator.LOCALE_BRITISH_TO_AMERICAN) {
      translated = this.britishToAmerican(text, highlight);
    }

    return translated || text;
  };
}

module.exports = Translator;
