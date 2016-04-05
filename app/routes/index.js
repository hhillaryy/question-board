import Ember from 'ember';

var answers = [{
  id: 1,
  user: "Your mom",
  text: "You should do X, Y, or Z"
}, {
  d: 1,
  user: "cat",
  text: "meow meow"
}];

export default Ember.Route.extend({
  model() {
    return answer;
  }
});

// export default Ember.Route.extend({
//   model() {
//     return Ember.RSVP.hash({
//     questions: this.store.findAll('question'),
//     answers: this.store.findAll('answer')
//   });
//   },
//   actions: {
//     save(params) {
//       var newQuestion = this.store.createRecord('question', params);
//       newQuestion.save();
//       this.transitionTo('index');
//     }
//   }
// });
