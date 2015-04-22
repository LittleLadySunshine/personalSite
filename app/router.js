import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('home');
  this.route('about');
  this.route('projects');
  this.route('contact');
  this.route('resume');
});
