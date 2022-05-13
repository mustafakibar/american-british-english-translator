'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  app.route('/api/translate').post((req, res) => {
    let { text, locale } = req.body;

    return res.json({
      text,
      translation: Translator.translate(text, locale),
    });
  });
};
