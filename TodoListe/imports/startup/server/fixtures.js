// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Notes } from '../../api/notes/notes.js';

Meteor.startup(() => {
  // if the Links collection is empty
  /*if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));*/
    if(this.userId) {
        var email = Meteor.user().emails[0].address;
    }else {
        var email = 'truc@machin.com';
    }

    if(Notes.find().count() === 0) {
        const data = [
            {
                titre: 'première afficheNote',
                content: 'je suis une afficheNote',
                createdAt : new Date(),
                hashtag: ['note', 'important'],
                user : email
            }
        ];

        data.forEach(note => Notes.insert(note));
    }
});
