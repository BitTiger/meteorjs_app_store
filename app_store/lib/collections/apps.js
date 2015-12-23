/**
 * Created by Steve Kehoe on 11/24/2015.
 */

Apps = new Meteor.Collection('apps');

Schemas.Apps = new SimpleSchema({
    'name': {
        type: String
    },
    'developer': {
        type: String
    },
    'description': {
        type: String
    },
    'rank': {
        type: Number
    },
    'avgRating': {
        type: Number,
        decimal: true
    },
    'numberOfRatings': {
        type: Number
    },
    'iconUrl': {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    'reccomendedApps': {
        type: [Object]
    },
    "reccomendedApps.$.name": {
        type: String
    },
    "reccomendedApps.$.iconUrl": {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    }
});

Apps.attachSchema(Schemas.Apps);

