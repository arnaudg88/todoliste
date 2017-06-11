import { Meteor } from 'meteor/meteor';
import { Notes } from './notes.js';

Meteor.methods({
    'notes.insert'(titre, user, content, hashtag) {
        return Notes.insert({
            titre: titre,
            user: user,
            content: content,
            hashtag: hashtag,
            createAt: new Date(),
        });
    },
    'notes.update'(id, titre, user, content, hashtag) {
        return Notes.update(
            {_id: id},
            {
                $set: {
                    titre: titre,
                    user: user,
                    content: content,
                    hashtag: hashtag,
                    createAt: new Date(),
                }
            });
    },
    'notes.delete'(id) {
        return Notes.remove({_id: id});
    },
    'notes.get'(id) {
        return Notes.find({_id:id});
    }
});