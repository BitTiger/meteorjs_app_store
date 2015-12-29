Meteor.publish("apps", function () {
    return Apps.find({});
});

Meteor.publish("singleApp", function (appId) {
    return Apps.find({_id:appId});
});