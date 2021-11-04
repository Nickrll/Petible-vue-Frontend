import { Selector, ClientFunction } from 'testcafe';
// A fixture must be created for each group of tests.
fixture(`Login page`)
    // Load the URL your development server runs on.
    .page('http://localhost:8080/login');

    const getUrl = ClientFunction(() => document.location.href.toString());
    const emailInput = Selector('#email');
    const passwordInput = Selector('#password')
    

// Create a new test(description, function(testController): <Promise>)

test('Register Page redirect from login page if user has no account', async t =>{
    await t
    .click(Selector('#redirectRegister'))
    .expect(getUrl()).contains('/register')
});

test('Register Page input field work', async t => {
    await t
    .typeText(emailInput, 'random@email.com')
    .typeText(passwordInput, 'Password&1')
    .expect(emailInput.value).eql('random@email.com', 'email input does not work')
    .expect(passwordInput.value).eql('Password&1', 'password input does not work')
});