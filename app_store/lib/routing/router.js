/**
 * Created by Steve Kehoe on 9/14/2015.
 */
Router.configure({
    layoutTemplate: "masterLayout"
});

Router.route('/', {
    name: 'topChart',
    waitOn: function() {
        Meteor.subscribe('apps');
    },
    data: function () {
        return {
            apps: Apps.find({})
        };
    }
});

Router.route('/app/:_id', {
    name: 'appPage',
    waitOn: function() {
        Meteor.subscribe('singleApp', this.params._id);
    },
    data: function () {
        return Apps.findOne(this.params._id);
    }
});
