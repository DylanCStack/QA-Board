import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestionForm: false,
    updateQuestionFormShow(){
      this.set("updateQuestionForm",true);
    },
    updateQuestionFormHide(){
      this.set("updateQuestionForm",false);
    },
    updateQuestion(question){
      var params = {
        author: this.get("author"),
        subject: this.get("subject"),
        inquiry: this.get("inquiry"),
        body: this.get("body")
      };
      this.set("updateQuestionForm", false);
      this.sendAction("updateQuestion", question, params);
    }

  }
});
