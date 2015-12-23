/**
 * Created by Steve Kehoe on 9/21/2015.
 */

Meteor.publish("apps", function () {
    return Apps.find({});
});