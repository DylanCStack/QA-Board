import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  subject: DS.attr(),
  question: DS.attr(),
  body: DS.attr()
});
