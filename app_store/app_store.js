if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    process.env.MONGO_URL = 'mongodb://localhost:27017';
    Apps = new Meteor.Collection('apps');
    if(Apps.find({}).count() < 1)
    {
      for(var i = 0; i < 10; i++){
        Apps.insert({
          appName: "Test " + i
        })
      }
    }
    /*
    while(true){
      Apps.find({}).fetch();
    }
    */

  });
}
