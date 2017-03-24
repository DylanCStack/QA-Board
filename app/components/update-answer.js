import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAnswerForm: false,
    updateAnswerFormShow(){
      this.set("updateAnswerForm", true);
    },
    updateAnswerFormHide(){
      this.set("updateAnswerForm",false);
    },
    updateAnswer(){
      
    }
  }
});
