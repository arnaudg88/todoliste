import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/addNote/addNote.js';
import '../../ui/pages/listeNotes/listeNotes.js';
import '../../ui/pages/afficheNote/afficheNote.js';
import '../../ui/components/formNote/formNote.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/components/search/search.html';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/addNote', {
    name: 'App.addNote',
    action() {
        BlazeLayout.render('App_body', { main: 'addNote' });
    },
});

FlowRouter.route('/listeNotes', {
    name: 'App.listeNotes',
    action() {
        BlazeLayout.render('App_body', { main: 'listeNotes' });
    },
});

FlowRouter.route('/afficheNote/:id', {
    action: function (params, queryParams) {
        //console.log('id du post:', params.id);
        BlazeLayout.render('App_body', { main: 'afficheNote', data: params.id });
    }
});

FlowRouter.notFound = {
    action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
    },
};