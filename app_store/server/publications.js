/**
 * Created by Steve Kehoe on 9/21/2015.
 */

Meteor.publish("apps", function () {
    return Apps.find({});
});

Meteor.publish("singleApp", function (appId) {
    return Apps.find({_id:appId});
});