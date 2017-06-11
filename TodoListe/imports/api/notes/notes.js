import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Notes = new Mongo.Collection('notes');

Notes.allow({
    insert: function () {
        return true
    },
    update: function () {
        return true
    },
    remove: function () {
        return true
    }
});

/**
 * permet de mettre un schéma pour la collection afficheNote
 * package aldeed:collection2-core
 */
Notes.attachSchema(new SimpleSchema({
    titre: {
        type: String,
        max: 240
    },
    user: {
        type: String,
        max: 240
    },
    content: {
        type: String,
        max: 2000
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if(this.isInsert) { //insert
                return new Date();
            }else if(this.isUpsert) { //insert et update si afficheNote existe deja elle sera mis a jour
                return {$setOnInsert: new Date};
            }else {
                this.unset(); //évite que l'utilisateur choisisse ce qu'il veut
            }
        }
    },
    hashtag: {
        type: Array
    },
    'hashtag.$': {
        type: String
    }
}));