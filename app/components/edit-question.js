import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion: false,
    updateQuestionFormShow(){
      this.set("updateQuestion",true);
    },
    updateQuestionFormHide(){
      this.set("updateQuestion",false);
    }

  }
});
