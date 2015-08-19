/**
 * Created by sgrushai on 8/19/2015.
 */

Template.profile.helpers({

        currentUserEmail: function () {
            var userId = Meteor.userId();
            if(Meteor.users.findOne({_id: userId})) {
                return Meteor.users.findOne({_id: userId}).profile.email;
            }
        },
        currentUserfName: function () {
            var userId = Meteor.userId();
            if(Meteor.users.findOne({_id: userId})) {
                return Meteor.users.findOne({_id: userId}).profile.fName;
            }
        },
        currentUserlName: function () {
            var userId = Meteor.userId();
            if(Meteor.users.findOne({_id: userId})) {
                return Meteor.users.findOne({_id: userId}).profile.lName;
            }
        },
        currentLocation: function () {
            var userId = Meteor.userId();
            if(Meteor.users.findOne({_id: userId})) {
                return Meteor.users.findOne({_id: userId}).profile.location;
            }
        }

});

Template.profile.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var user;
        var fNameVar = event.target.profilefName.value;
        var lNameVar = event.target.profilelName.value;
        var locationVar = event.target.location.value;
        var emailVar = event.target.profileEmail.value;

        user = {
            profile: {
                fName: fNameVar,
                lName: lNameVar,
                email: emailVar,
                location: locationVar
            }
        }
        Meteor.users.update({_id:Meteor.user()._id},{$set:user});

    }
});