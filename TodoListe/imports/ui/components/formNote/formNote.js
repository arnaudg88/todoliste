import { Template } from 'meteor/templating';
import { Notes } from '/imports/api/notes/notes.js';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './formNote.html';

Template.formNote.onCreated(function () {
    Meteor.subscribe('Notes.all');
});

Template.formNote.helpers({
    note() {
        return Notes.findOne({_id: $('#data').val()});
    },
});

Template.formNote.events({
    'submit #addNoteForm'(event) { //event lorsque l'on valide le formulaire
        event.preventDefault();

        const target = event.target;
        arrayTag = [];
        $('.tag').each(function () {
            arrayTag.push($(this).text());
        });

        var titre = target.titre.value;
        var content = $('#contentNote').text();
        var user = Meteor.userId();
        var hashtag = arrayTag;

        if($('#data').val() !== undefined) {
            Meteor.call('notes.update', $('#data').val(), titre, user, content, hashtag, (error) => {
                if(error) {
                    alert(error.error);
                    console.log(error);
                }else {
                    alert('success update');
                }
            });
        }else {
            Meteor.call('notes.insert', titre, user, content, hashtag, (error) => {
                if (error) {
                    alert(error.error);
                    console.log(error);
                } else {
                    alert('success insert');
                }
            });
        }

        FlowRouter.go('/listeNotes');
    },

    'focus #contentNote'(event) { //event lorsque l'on click pour la première fois sur la afficheNote
        event.preventDefault();

        if($('#contentNote').text() === 'note...') {
            $('#contentNote').text('');
        }
    },

    'click #addTag'(event) { //event lors de l'appuie du bouton d'ajout d'un tag
        $('<input id="inputTag" type="text"/>').insertBefore($('#addTag'));
        $('#inputTag').focus();
    },

    'change #inputTag'(event) { //event lors de la validation du tag
        event.preventDefault();
        var text = $('#inputTag').val();
        $('#inputTag').replaceWith('<span class="well-sm tag">#'+text+'</span>');
    },

    'blur #inputTag'(event) {
        event.preventDefault();

        var text = $('#inputTag').val();
        if(text == '') {
            $('#inputTag').remove();
        }
    }
});