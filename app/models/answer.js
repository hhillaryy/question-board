import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  text: DS.belongsTo('question', {async:true})
});
