import Ember from 'ember';

export function answerPopularity(params/*, hash*/) {
  var answer = params[0];

  if(question.get('answer').get('length') >= 4)
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
}

export default Ember.Helper.helper(answerPopularity);

// Dont completely understand how ember string works
