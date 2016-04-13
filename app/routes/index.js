import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    questions: this.store.findAll('question')
  });
  },
  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    // Do I need to send action up here?
  }
});

    // answers: this.store.findAll('answer')
