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
    updateAnswer(answer, question){
      var params = {
        author: this.get("author"),
        content: this.get("content")
      };
      this.set("updateAnswerForm", false);
      this.sendAction("updateAnswer", params, answer, question);
    }
  }
});
