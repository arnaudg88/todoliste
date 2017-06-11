import { Notes } from '/imports/api/notes/notes.js';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tracker } from 'meteor/tracker';

import './listeNotes.html';
import '../../components/search/search.html';

var dep = new Tracker.Dependency;
var searchCrit = {user: Meteor.userId()};

Template.listeNotes.onCreated(function () {
    Meteor.subscribe('Notes.all');
});

Template.listeNotes.helpers({
    notes() {
        dep.depend();
        return Notes.find(searchCrit);
    },
});

Template.registerHelper('formatDate', function (date) {
    return moment(date).format('DD/MM/YYYY H:mm:ss');
});

Template.listeNotes.events({
    'click .btn-pen'(event) {
        event.preventDefault();

        const target = event.target;
        var titre = $(target).parent().parent().find('.titreNote').text();
        FlowRouter.go('/afficheNote/'+this._id);
    },

    'click .btn-trash'(event) {
        event.preventDefault();
        Meteor.call('notes.delete', this._id);
    }
});

Template.search.events({
    'click #searchBtn'(event) {
        searchCrit = {user: Meteor.userId()};
        titre = $('#searchTitre').val();
        content = $('#searchContent').val();
        hashtag = $('#searchHashtag').val().split('-');
        dateDebut = $('#searchDB').val();
        dateFin = $('#searchDF').val();

        if(titre!='')
            searchCrit.titre= {$regex: '.*'+titre+'.*'};
        if(content!='')
            searchCrit.content= {$regex: '.*'+content+'.*'};
        if(hashtag!='')
            searchCrit.hashtag= {'$in': hashtag};
        if(dateDebut!='')
            searchCrit.createdAt = {'$gte': new Date(dateDebut+'T00:00:00.000Z')};
        if(dateFin!='')
            searchCrit.createdAt = {'$lt': new Date(dateFin+'T23:59:59.999Z')};
        console.log(searchCrit);
        dep.changed();
    }
});

Template.search.rendered = function () {
    $('.input-daterange input').datepicker({
        format: "yyyy-mm-dd",
        clearBtn: true,
        language: "fr",
        autoclose: true
    });
};