const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

const PATH_TRANSLATE = process.env.PATH_TRANSLATE || '/api/translate';

const Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  test(`Translation with text and locale fields: POST request to ${PATH_TRANSLATE}`, (done) => {
    chai
      .request(server)
      .post(PATH_TRANSLATE)
      .send({
        text: 'Mangoes are my favorite fruit.',
        locale: Translator.LOCALE_AMERICAN_TO_BRITISH,
      })
      .end((err, res) => {
        if (err) return console.error(err);

        assert.equal(res.status, 200);
        assert.equal(
          res.body.translation,
          `Mangoes are my ${'favourite'.wrapHighlightEl()} fruit.`
        );
        done();
      });
  });

  test(`Translation with text and invalid locale field: POST request to ${PATH_TRANSLATE}`, (done) => {
    chai
      .request(server)
      .post(PATH_TRANSLATE)
      .send({
        text: 'Mangoes are my favorite fruit.',
        locale: 'american-to-turkish',
      })
      .end((err, res) => {
        if (err) return console.error(err);

        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });

  test(`Translation with missing text field: POST request to ${PATH_TRANSLATE}`, (done) => {
    chai
      .request(server)
      .post(PATH_TRANSLATE)
      .send({ locale: Translator.LOCALE_BRITISH_TO_AMERICAN })
      .end((err, res) => {
        if (err) return console.error(err);

        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  test(`Translation with missing locale field: POST request to ${PATH_TRANSLATE}`, (done) => {
    chai
      .request(server)
      .post(PATH_TRANSLATE)
      .send({ text: 'Mangoes are my favorite fruit.' })
      .end((err, res) => {
        if (err) return console.error(err);

        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });

  test(`Translation with empty text: POST request to ${PATH_TRANSLATE}`, (done) => {
    chai
      .request(server)
      .post(PATH_TRANSLATE)
      .send({ text: '', locale: Translator.LOCALE_BRITISH_TO_AMERICAN })
      .end((err, res) => {
        if (err) return console.error(err);

        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });

  test(`Translation with text that needs no translation: POST request to ${PATH_TRANSLATE}`, (done) => {
    const text = 'Hi, I am a human.';
    chai
      .request(server)
      .post(PATH_TRANSLATE)
      .send({
        text,
        locale: Translator.LOCALE_BRITISH_TO_AMERICAN,
      })
      .end((err, res) => {
        if (err) return console.error(err);

        assert.equal(res.status, 200);
        assert.equal(res.body.text, text);
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });
});
