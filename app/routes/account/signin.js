import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        checkAuth: function() {
            this.controller.set('errors', []);

            var email = this.controller.get('email');
            var password = this.controller.get('password');

            // Some quick and dirty form validation... see how to do this
            // better with ember...
            var errors = [];
            if (!email || email.indexOf('@') < 0 || email.indexOf('.') < 0) {
                errors.push('Please enter your email address.');
            }
            if (!password) {
                errors.push('Please enter your password.');
            }

            // no need to bother our server if we have errors to fix
            if (errors.length > 0) {
                this.controller.set('errors', errors);
                return;
            }

            // Check the email/password combo at the server
            console.log('Checking ' + email + ' and ' + password);

        }
    }

});
