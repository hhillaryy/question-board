import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  post: DS.attr(),
  answers: DS.hasmany('answer', {async: true})
});
