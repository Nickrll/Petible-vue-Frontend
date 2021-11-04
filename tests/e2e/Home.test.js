import {Selector, ClientFunction} from 'testcafe'
// A fixture must be created for each group of tests.
fixture(`Home Page`)
    // Load the URL your development server runs on.
    .page('http://localhost:8080');

    const getUrl = ClientFunction(() => document.location.href.toString());
    const registerBtn = Selector('#register-btn')
    const loginBtn = Selector('#login-btn')

// Create a new test(description, function(testController): <Promise>)
test('Redirect to Register Page', async t =>{
    await t
    .click(registerBtn)
    .expect(getUrl()).contains('/register')
});

test('Redirect to Login Page', async t =>{
    await t
    .click(loginBtn)
    .expect(getUrl()).contains('/login')
});

test('Page contains correct text in important places', async t =>{
    await t
    .expect(loginBtn.innerText).contains('Sign in', 'The login button does not contain Sign in')
    .expect(registerBtn.innerText).contains('Sign up', 'The login button does not contain Sign up')
    .expect(Selector('.title').innerText).contains('Petible', 'Title of the home page should be Petible')
});