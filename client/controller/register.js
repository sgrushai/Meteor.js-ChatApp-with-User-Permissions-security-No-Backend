/**
 * Created by sgrushai on 8/19/2015.
 */
Template.register.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var user;


        var fNameVar = event.target.registerfName.value;
        var lNameVar = event.target.registerlName.value;
        var locationVar = event.target.location.value;
        var emailVar = event.target.registerEmail.value;
        var usernameVar = event.target.registerUsername.value;
        var passwordVar = event.target.registerPassword.value;

        user = {
            username: usernameVar,
            password: passwordVar,
            profile: {
                fName: fNameVar,
                lName: lNameVar,
                email: emailVar,
                location: locationVar,
            }
        }
        Accounts.createUser(user);

    }
});