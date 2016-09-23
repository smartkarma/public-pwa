import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('insights', {path: ''});
  this.route('profile', {path: 'profiles/:slug'});
  this.route('entity', {path: 'entities/:slug'});
});

export default Router;
