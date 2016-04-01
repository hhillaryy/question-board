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
    return answers;
  }
});
