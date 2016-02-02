import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('account', function() {
    this.route('signin');
    this.route('signout');
    this.route('register');
  });
});

export default Router;
