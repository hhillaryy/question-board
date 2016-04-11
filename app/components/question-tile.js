import Ember from 'ember';

export default Ember.Component.extend({
  // updateQuestionForm: false,
  actions: {
    update(question,params) {
      this.sendAction('update', question, params);
    }
  }
});

// Or Do I need this somehow? So confused:
//
// update(question) {
//   var params = {
//     title: this.get('title'),
//     author: this.get('author'),
//     post: this.get('post'),
//   };
//   this.set('updateQuestionForm', false);
//   this.sendAction('update', question, params);
