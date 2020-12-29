var models = require('./server.js').models;

var toSave = [
    {name: 'test1', email: 'mail1@mail.com'},
    {name: 'test2', email: 'mail2@mail.com'},
    {name: 'test3', email: 'mail3@mail.com'},
    {name: 'test4', email: 'mail4@mail.com'},
    {name: 'test5', email: 'mail5@mail.com'},
    {name: 'test6', email: 'mail6@mail.com'},
];

toSave.map(obj => {
    models.Profile.create(obj, (err, created) => {
        console.log("Created?", created);
    })
})

// var filter = {
//     where: {
//         email: {like: 'mail'}
//     },
//     order: 'id ASC',
//     limit: 10,
//     skip: 0,
//     fields: {
//         email: true
//     }
// }

// models.Profile.find("5fea0d4426f6af09a49f26df", {include: 'Posts'}, (err, found) => {
//     console.log("Found?", err, found);
// })