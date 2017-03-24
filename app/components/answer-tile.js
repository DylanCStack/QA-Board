import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer, question){
      this.sendAction("deleteAnswer",answer, question);
    },
    updateAnswer(params, answer, question){
      this.sendAction("updateAnswer", params, answer, question);
    }
  }
});
