import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  user: DS.attr(),
  text: DS.belongsTo('question', {async:true})
});
