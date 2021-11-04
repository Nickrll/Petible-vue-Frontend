import { Selector } from 'testcafe';
// A fixture must be created for each group of tests.
fixture(`Register setup page`)
    // Load the URL your development server runs on.
    .page('http://localhost:8080/setup');

// Create a new test(description, function(testController): <Promise>)

const btnQuestionPage1 = Selector('#btn-question-page-1');
const btnQuestionPage2 = Selector('#btn-question-page-2');
// const btnSave = Selector('#btn-save');
const name = Selector('#name');
const bio = Selector('#bio');
const maxTime4 = Selector('#max-time-4');
const maxTime9 = Selector('#max-time-9');
const maxTime10 = Selector('#max-time-10');
const locationYes = Selector('#location-yes');
const locationNo = Selector('#location-no');
const childrenYes = Selector('#children-yes');
const childrenNo = Selector('#children-no');
const petsYes = Selector('#pets-yes');
const petsNo = Selector('#pets-no');
const emailInput = Selector('#email');
const passwordInput = Selector('#password')
const btnLogin = Selector('#btnLogin');



// Create a new test(description, function(testController): <Promise>)

test('Profile Setup Page input field test', async t => {
    await t
        .typeText(emailInput, 'test@adopter.com')
        .typeText(passwordInput, 'password1')
        .click(btnLogin)
        .navigateTo('http://localhost:8080/setup')
        .typeText(name, 'Pieter')
        .typeText(bio, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste sequi officia molestiae excepturi error, sapiente voluptatum obcaecati ratione natus neque? Ipsum ullam aperiam inventore iste saepe enim nobis dolores nisi.')
        .click(btnQuestionPage1).wait(1000)
        .click(maxTime4)
        .click(locationYes)
        .click(btnQuestionPage2).wait(1000)
        .click(childrenYes).click(childrenNo)
        .click(petsYes).click(petsNo)
});

test('Profile Setup Page input field test 2', async t => {
    await t
        .typeText(emailInput, 'test@adopter.com')
        .typeText(passwordInput, 'password1')
        .click(btnLogin)
        .navigateTo('http://localhost:8080/setup')
        .typeText(name, 'Jan')
        .typeText(bio, 'Doggo ipsum doggorino ruff thicc. Corgo boof aqua doggo lotsa pats fat boi, long bois borkdrive pupper. Such treat heckin good boys and girls smol borking doggo with a long snoot for pats many pats, pupperino maximum borkdrive. Smol borking doggo with a long snoot for pats wow very biscit shoober stop it fren bork, smol pupper shoober porgo what a nice floof, very taste wow very jealous pupper shibe. Big ol shooberino many pats boof very hand that feed shibe, corgo he made many woofs. Thicc dat tungg tho blop borkf bork stop it fren ur givin me a spook, heckin corgo borkdrive very taste wow borkf. Long doggo sub woofer shooberino puggo doge, long bois blep vvv, puggorino pupperino such treat.')
        .click(btnQuestionPage1).wait(1000)
        .click(maxTime9)
        .click(locationNo)
        .click(btnQuestionPage2).wait(1000)
        .click(childrenYes)
        .click(petsYes)
});

test('Profile Setup Page input field test 3', async t => {
    await t
        .typeText(emailInput, 'test@adopter.com')
        .typeText(passwordInput, 'password1')
        .click(btnLogin)
        .navigateTo('http://localhost:8080/setup')
        .typeText(name, 'Nick')
        .typeText(bio, "Scratch sit and stare scratch my tummy actually i hate you now fight me kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff i rule on my back you rub my tummy i bite you hard go into a room to decide you didn't want to be in there anyway or scratch the postman wake up lick paw wake up owner meow meow. See brother cat receive pets, attack out of jealousy sleep on my human's head but ignore the human until she needs to get up, then climb on her lap and sprawl sit on human, for hiss and stare at nothing then run suddenly away.")
        .click(btnQuestionPage1).wait(1000)
        .click(maxTime10)
        .click(locationYes)
        .click(btnQuestionPage2).wait(1000)
        .click(childrenNo)
        .click(petsNo)
});