Meteor.publish("apps", function (options) {
    return Apps.find({}, options);
});

Meteor.publish("singleApp", function (id) {
    return Apps.find({_id:id});
});

Meteor.publish("singleAppByAppId", function (appId) {
    return Apps.find({app_id:appId});
});


if(Apps.find({}).count() < 11){

    var fs = Npm.require('fs');

    fs.readFile('/users/stevenkehoe/documents/meteordev/app_store_class/app_store/server/data.json', 'utf8', Meteor.bindEnvironment(function(err, data) {
            if (err) throw err;
            var newAppData = data.split("\n");

            for (var i = 0; i < newAppData.length - 1; i++) {
                var rawAppData = JSON.parse(newAppData[i]);
                var newApp = {};

                newApp.name = rawAppData.title;
                newApp.app_id = rawAppData.app_id;
                newApp.developer = rawAppData.developer;
                newApp.description = rawAppData.intro;
                newApp.avgRating = parseInt(rawAppData.score) / 2;
                newApp.iconUrl = rawAppData.thumbnail_url;
                newApp.reccomendedApps = rawAppData.top_5_app;
                Apps.insert(newApp);
            }

    }, function(err){
        throw err;
    }));
}