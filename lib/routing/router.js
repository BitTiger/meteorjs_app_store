Router.configure({
    layoutTemplate: "masterLayout"
});

Router.route('/', {
    name: 'topChart',
    waitOn: function() {
        Meteor.subscribe('apps', {sort: {avgRating: -1, app_id: -1}, limit: 50});
    },
    data: function () {
        return {
            apps: Apps.find({}, {sort: {avgRating: -1, app_id: -1}, limit: 50})
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
