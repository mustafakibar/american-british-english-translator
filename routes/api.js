'use strict';

const Translator = require('../components/translator.js');

const translator = new Translator();
const HIGHLIGHT_ENABLED = true;

module.exports = (app) => {
  app.route('/api/translate').post((req, res) => {
    let { text, locale } = req.body;

    if (text === '') {
      return res.json({ error: 'No text to translate' });
    }

    if (!locale || !text) {
      return res.json({ error: 'Required field(s) missing' });
    }

    if (
      locale !== Translator.LOCALE_AMERICAN_TO_BRITISH &&
      locale !== Translator.LOCALE_BRITISH_TO_AMERICAN
    ) {
      return res.send({ error: 'Invalid value for locale field' });
    }

    const translation = translator.translate(text, locale, HIGHLIGHT_ENABLED);

    return res.json({
      text,
      translation:
        text == translation ? 'Everything looks good to me!' : translation,
    });
  });
};
