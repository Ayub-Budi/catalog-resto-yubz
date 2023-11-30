/* eslint-disable no-undef */
Feature('Liking Resto');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#restos');
  I.see('tidak ada restaurant yang disukai', '#restos');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('tidak ada restaurant yang disukai', '#restos');
  I.amOnPage('/');
  I.seeElement('.card a');
  const firstResto = locate('.name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstRestoTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.content');

  const likedRestoTitle = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see('tidak ada restaurant yang disukai', '#restos');
  I.amOnPage('/');
  I.seeElement('.card a');
  const firstResto = locate('.name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstRestoTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.content');

  const likedRestoTitle = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.seeElement('.card a');
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.content');
  I.see('tidak ada restaurant yang disukai', '#restos');
});

Scenario('Customer review', async ({ I }) => {
  I.see('tidak ada restaurant yang disukai', '#restos');
  I.amOnPage('/');
  I.seeElement('.card a');
  const firstResto = locate('.name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstRestoTitle);

  I.seeElement('.input-Review');

  const textReview = 'restorang bagus';
  I.fillField('.name-review', 'yubz');
  I.fillField('.review', textReview);

  I.click('#submit');
});
