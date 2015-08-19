/**
 * Created by sgrushai on 8/19/2015.
 */
Template.messages.helpers({
    messages: function() {

        if(Meteor.user()==null){
            return Messages.find({messageLocation:null}, { sort: { time: -1}});
        }

        return Messages.find({messageLocation:Meteor.user().profile.location}, { sort: { time: -1}});
    },
    userLocation: function(){
        return Meteor.user().profile.location;
    }
})

Template.input.events = {
    'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
            if (Meteor.user()) {
                var name = Meteor.user().username;
                var location = Meteor.user().profile.location;
            }
            else
                var name = 'Anonymous';
            var message = document.getElementById('message');

            if (message.value != '') {
                Messages.insert({
                    name: name,
                    message: message.value,
                    time: Date.now(),
                    messageLocation: location
                });

                document.getElementById('message').value = '';
                message.value = '';
            }
        }

    }
}
