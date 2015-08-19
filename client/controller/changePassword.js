/**
 * Created by sgrushai on 8/19/2015.
 */
Template.ChangePassword.events({
    'submit #change-password': function(event, template) {
        var currentPassword,
            newPassword,
            newPasswordRepeated;
        console.dir(event);
        console.dir(template);
        currentPassword =event.target.currentPassword.value;
        newPassword = event.target.newPassword.value;
        newPasswordRepeated = event.target.newPasswordRepeated.value;
        console.log(newPassword);
        console.log(newPasswordRepeated);
        if (newPassword !== newPasswordRepeated) {
            console.log("The new passwords don't match!");

            return false;
        }

        Accounts.changePassword(currentPassword, newPassword, function(error) {
            if (error) {
                message = 'There was an issue: ' + error.reason;
            } else {
                message = 'You reset your password!'
            }
        });

        // Inform the user.
        console.log(message);

        return false;
    }
});