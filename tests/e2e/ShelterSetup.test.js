// import { Selector } from 'testcafe';
// // A fixture must be created for each group of tests.
// fixture(`Shelter setup page`)
//     // Load the URL your development server runs on.
//     .page('http://localhost:8080/setup-shelter');

// // Create a new test(description, function(testController): <Promise>)

// const btnQuestionPage1 = Selector('#btn-question-page-1');
// const btnQuestionPage2 = Selector('#btn-question-page-2');
// const btnQuestionPage3 = Selector('#btn-question-page-3');
// // const btnSave = Selector('#btn-save');
// const shelterName = Selector('#name');
// const shelterBio = Selector('#bio');
// const shelterFacebook = Selector('#facebook');
// const shelterTwitter = Selector('#twitter');
// const shelterInstagram = Selector('#instagram');
// const shelterLinkedin = Selector('#linkedin');
// const shelterWebsite = Selector('#website');
// const shelterEmail = Selector('#website');
// const shelterPostcode = Selector('#postcode');
// const shelterPhoneNumber = Selector('#phonenumber');
// const shelterStreetAndNumber = Selector('#street-and-number');
// const emailInput = Selector('#email');
// const passwordInput = Selector('#password')
// const btnLogin = Selector('#btnLogin');



// // Create a new test(description, function(testController): <Promise>)

// test('Shelter Setup Page input field test', async t => {
//     await t
//         .typeText(emailInput, 'test@shelter.com')
//         .typeText(passwordInput, 'password1')
//         .click(btnLogin)
//         .navigateTo('http://localhost:8080/setup-shelter')
//         .wait(5000)
//         .typeText(shelterName, 'ShelterName')
//         .typeText(shelterBio, 'Doggo ipsum what a nice floof. Fat boi most angery pupper I have ever seen woofer floofs heckin, shibe smol shoober. Wow very biscit corgo big ol pupper heckin good boys, blep he made many woofs. Very good spot heckin angery woofer doggo extremely cuuuuuute very jealous pupper he made many woofs heck, maximum borkdrive puggorino heckin angery woofer h*ck. Very jealous pupper doge heckin good boys, such treat. You are doin me a concern extremely cuuuuuute wow very biscit mlem doggo adorable doggo, maximum borkdrive pupper very taste wow heckin. Wow very biscit puggo heck shoob long woofer, puggorino you are doing me a frighten smol borking doggo with a long snoot for pats pupper, heckin good boys and girls noodle horse super chub.')
//         .click(btnQuestionPage1).wait(1000)
//         .typeText(shelterFacebook, 'https://www.facebook.com/memes')
//         .typeText(shelterTwitter, 'https://twitter.com/hashtag/memes')
//         .typeText(shelterInstagram, 'https://www.instagram.com/memes/?hl=en')
//         .typeText(shelterLinkedin, 'https://www.linkedin.com/company/memes')
//         .click(btnQuestionPage2).wait(1000)
//         .typeText(shelterWebsite, 'https://www.coolpetsplace.nl')
//         .typeText(shelterEmail, "shelter@email.nl")
//         .typeText(shelterPhoneNumber, '0679532874')
//         .click(btnQuestionPage3).wait(1000)
//         .typeText(shelterPostcode, '7987KS')
//         .typeText(shelterStreetAndNumber, 'doggostreet 64')
// });