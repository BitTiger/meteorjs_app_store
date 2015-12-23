/**
 * Created by Steve Kehoe on 9/21/2015.
 */

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
    'category': {
        type: String
    },
    'avgRating': {
        type: Number
    },
    'numberOfRatings': {
        type: Number
    },
    'numberOfDownloads': {
        type: Number
    },
    'iconUrl': {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    'reccomendedApps': {
        type: [Object]
    },
    "reccomendedApps.name": {
        type: String
    },
    "reccomendedApps.iconUrl": {
        type: String,
        regEx: SimpleSchema.RegEx.Url
    },
    "reccomendedApps.category": {
        type: String
    }
});

if(Apps.find({}).count() < 1)
{
    for(var i = 0; i < 10; i++){
        Apps.insert({
            name: "Test " + i,
            developer: "Facebook",
            avgRating: 4.5,
            numberOfRatings: 21876696,
            description: `Instantly reach the people in your life—for free. Messenger is just like texting, but you don't have to pay for every message (it works with your data plan).
                                Not just for Facebook friends: Message people in your phone book and just enter a phone number to add a new contact.

                                Group chats: Create groups for the people you message most. Name them, set group photos and keep them all in one place.

                                Photos and videos: Shoot videos and snap selfies or other photos right from the app and send them with one tap.

                                Chat heads: Keep the conversation going while you use other apps.

                                Free calls: Talk as long as you want, even with people in other countries. (Calls are free over Wi-Fi. Otherwise, standard data charges apply.)

                            Even more ways to message:
                                Bring your conversations to life with stickers.
                                Preview your gallery photos and videos without leaving the conversation--then choose the perfect ones to send.
                                Record voice messages when you have more to say.

                                Extra features:
                                Know when people have seen your messages.
                                Forward messages or photos to people who weren't in the conversation.
                            Search for people and groups to quickly get back to them.
                                Turn on location to let people know when you're nearby.
                            See who's available on Messenger and who's active on Facebook.
                                Create shortcuts to get to any conversation right from your home screen.
                                Turn off notifications when you're working, sleeping or just need a break.
                            Stay logged in so you never miss a message.`,

            category: "Communication",
            iconUrl: "https://lh5.ggpht.com/0VYAvZLR9YhosF-thqm8xl8EWsCfrEY_uk2og2f59K8IOx5TfPsXjFVwxaHVnUbuEjc=w300-rw",
            'reccomendedApps': [
                {
                    name: "WhatsApp",
                    category: "Communication",
                    iconUrl: "https://lh6.ggpht.com/mp86vbELnqLi2FzvhiKdPX31_oiTRLNyeK8x4IIrbF5eD1D5RdnVwjQP0hwMNR_JdA=w300-rw"
                },
                {
                    name: "Facebook",
                    category: "Social",
                    iconUrl: "https://lh3.googleusercontent.com/ZZPdzvlpK9r_Df9C3M7j1rNRi7hhHRvPhlklJ3lfi5jk86Jd1s0Y5wcQ1QgbVaAP5Q=w300-rw"
                },
                {
                    name: "Viber",
                    category: "Communication",
                    iconUrl: "https://lh5.ggpht.com/jWKeAZUzPtUqgZdcLDSa7vd3iwdan8QX4nlYlHBMkJHcxwr-uZU40vDmrMKczCmiCBRf=w300-rw"
                }
            ]
        })
    }
}