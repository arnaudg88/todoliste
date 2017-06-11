import { Meteor } from 'meteor/meteor';
import { Notes } from '../notes.js';

Meteor.publish('Notes.all', function () {
    return Notes.find();
});