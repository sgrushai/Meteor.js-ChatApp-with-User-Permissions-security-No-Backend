/**
 * Created by sgrushai on 8/19/2015.
 */
Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
    //'click .editProfile': function(){
    //    event.preventDefault();
    //
    //}
});
Template.dashboard.helpers({
    currentUserEmail: function() {
        var userId = Meteor.userId();
        return Meteor.users.findOne({_id:userId}).username;
    }
});