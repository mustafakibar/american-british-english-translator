const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  suite('American to British English', () => {
    test('Mangoes are my favorite fruit', (done) => {
      done();
    });

    test('I ate yogurt for breakfast.', (done) => {
      done();
    });

    test("We had a party at my friend's condo.", (done) => {
      done();
    });

    test('Can you toss this in the trashcan for me?', (done) => {
      done();
    });

    test('The parking lot was full.', (done) => {
      done();
    });

    test('Like a high tech Rube Goldberg machine.', (done) => {
      done();
    });

    test('To play hooky means to skip class or work.', (done) => {
      done();
    });

    test('No Mr. Bond, I expect you to die.', (done) => {
      done();
    });

    test('Dr. Grosh will see you now.', (done) => {
      done();
    });

    test('Lunch is at 12:15 today.', (done) => {
      done();
    });
  });

  suite('British to American English', () => {
    test('We watched the footie match for a while.', (done) => {
      done();
    });

    test('Paracetamol takes up to an hour to work.', (done) => {
      done();
    });

    test('First, caramelise the onions.', (done) => {
      done();
    });

    test('I spent the bank holiday at the funfair.', (done) => {
      done();
    });

    test('I had a bicky then went to the chippy.', (done) => {
      done();
    });

    test("I've just got bits and bobs in my bum bag.", (done) => {
      done();
    });

    test('The car boot sale at Boxted Airfield was called off.', (done) => {
      done();
    });
  });

  suite('Highlight translation', () => {
    test('Mangoes are my favorite fruit.', (done) => {
      done();
    });

    test('I ate yogurt for breakfast.', (done) => {
      done();
    });

    test('We watched the footie match for a while.', (done) => {
      done();
    });

    test('Paracetamol takes up to an hour to work.', (done) => {
      done();
    });
  });
});
