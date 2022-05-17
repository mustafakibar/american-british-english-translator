const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
const HIGHLIGHT_ENABLED = true;

suite('Unit Tests', () => {
  suite('American to British English', () => {
    test('Translate > Mangoes are my favorite fruit', (done) => {
      const actual = translator.translate(
        'Mangoes are my favorite fruit.',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'Mangoes are my favourite fruit.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > I ate yogurt for breakfast.', (done) => {
      const actual = translator.translate(
        'I ate yogurt for breakfast.',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'I ate yoghurt for breakfast.';

      assert.equal(actual, expected);
      done();
    });

    test("Translate > We had a party at my friend's condo.", (done) => {
      const actual = translator.translate(
        "We had a party at my friend's condo.",
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = "We had a party at my friend's flat.";

      assert.equal(actual, expected);
      done();
    });

    test('Translate > Can you toss this in the trashcan for me?', (done) => {
      const actual = translator.translate(
        'Can you toss this in the trashcan for me?',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'Can you toss this in the bin for me?';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > The parking lot was full.', (done) => {
      const actual = translator.translate(
        'The parking lot was full.',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'The car park was full.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > Like a high tech Rube Goldberg machine.', (done) => {
      const actual = translator.translate(
        'Like a high tech Rube Goldberg machine.',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'Like a high tech Heath Robinson device.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > To play hooky means to skip class or work.', (done) => {
      const actual = translator.translate(
        'To play hooky means to skip class or work.',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'To bunk off means to skip class or work.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > No Mr. Bond, I expect you to die.', (done) => {
      const actual = translator.translate(
        'No Mr. Bond, I expect you to die.',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'No Mr Bond, I expect you to die.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > Dr. Grosh will see you now.', (done) => {
      const actual = translator.translate(
        'Dr. Grosh will see you now.',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'Dr Grosh will see you now.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > Lunch is at 12:15 today.', (done) => {
      const actual = translator.translate(
        'Lunch is at 12:15 today.',
        Translator.LOCALE_AMERICAN_TO_BRITISH
      );
      const expected = 'Lunch is at 12.15 today.';

      assert.equal(actual, expected);
      done();
    });
  });

  suite('British to American English', () => {
    test('Translate > We watched the footie match for a while.', (done) => {
      const actual = translator.translate(
        'We watched the footie match for a while.',
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = 'We watched the soccer match for a while.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > Paracetamol takes up to an hour to work.', (done) => {
      const actual = translator.translate(
        'Paracetamol takes up to an hour to work.',
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = 'Tylenol takes up to an hour to work.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > First, caramelise the onions.', (done) => {
      const actual = translator.translate(
        'First, caramelise the onions.',
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = 'First, caramelize the onions.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > I spent the bank holiday at the funfair.', (done) => {
      const actual = translator.translate(
        'I spent the bank holiday at the funfair.',
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = 'I spent the public holiday at the carnival.';

      assert.equal(actual, expected);
      done();
    });

    test('Translate > I had a bicky then went to the chippy.', (done) => {
      const actual = translator.translate(
        'I had a bicky then went to the chippy.',
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = 'I had a cookie then went to the fish-and-chip shop.';

      assert.equal(actual, expected);
      done();
    });

    test("Translate > I've just got bits and bobs in my bum bag.", (done) => {
      const actual = translator.translate(
        "I've just got bits and bobs in my bum bag.",
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = "I've just got odds and ends in my fanny pack.";

      assert.equal(actual, expected);
      done();
    });

    test('Translate > Have you met Mrs Kalyani?', (done) => {
      const actual = translator.translate(
        'Have you met Mrs Kalyani?',
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = 'Have you met Mrs. Kalyani?';

      assert.equal(actual, expected);
      done();
    });

    test("Translate > Prof Joyner of King's College, London.", (done) => {
      const actual = translator.translate(
        "Prof Joyner of King's College, London.",
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = "Prof. Joyner of King's College, London.";

      assert.equal(actual, expected);
      done();
    });

    test('Translate > Tea time is usually around 4 or 4.30 today.', (done) => {
      const actual = translator.translate(
        'Tea time is usually around 4 or 4.30 today.',
        Translator.LOCALE_BRITISH_TO_AMERICAN
      );
      const expected = 'Tea time is usually around 4 or 4:30 today.';

      assert.equal(actual, expected);
      done();
    });
  });

  suite('Highlight translation', () => {
    test('Translate > Mangoes are my favorite fruit.', (done) => {
      const actual = translator.translate(
        'Mangoes are my favorite fruit.',
        Translator.LOCALE_AMERICAN_TO_BRITISH,
        HIGHLIGHT_ENABLED
      );
      const expected = `Mangoes are my ${'favourite'.wrapHighlightEl()} fruit.`;

      assert.equal(actual, expected);
      done();
    });

    test('Translate > I ate yogurt for breakfast.', (done) => {
      const actual = translator.translate(
        'I ate yogurt for breakfast.',
        Translator.LOCALE_AMERICAN_TO_BRITISH,
        HIGHLIGHT_ENABLED
      );
      const expected = `I ate ${'yoghurt'.wrapHighlightEl()} for breakfast.`;

      assert.equal(actual, expected);
      done();
    });

    test('Translate > We watched the footie match for a while.', (done) => {
      const actual = translator.translate(
        'We watched the footie match for a while.',
        Translator.LOCALE_BRITISH_TO_AMERICAN,
        HIGHLIGHT_ENABLED
      );
      const expected = `We watched the ${'soccer'.wrapHighlightEl()} match for a while.`;

      assert.equal(actual, expected);
      done();
    });

    test('Translate > Paracetamol takes up to an hour to work.', (done) => {
      const actual = translator.translate(
        'Paracetamol takes up to an hour to work.',
        Translator.LOCALE_BRITISH_TO_AMERICAN,
        HIGHLIGHT_ENABLED
      );
      const expected = `${'Tylenol'.wrapHighlightEl()} takes up to an hour to work.`;

      assert.equal(actual, expected);
      done();
    });
  });
});
