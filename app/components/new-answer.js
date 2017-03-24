import Ember from 'ember';

export default Ember.Component.extend({

  actions:{
    addNewAnswer: false,
    newAnswerFormShow(){
      this.set("addNewAnswer", true);
    },
    newAnswerFormHide(){
      this.set("addNewAnswer", false);
    },
    saveAnswer(question){
      var params = {
        author: this.get("author"),
        content: this.get("content")
      };
      this.set("addNewAnswer", false);
      this.sendAction("saveAnswer", params, question);
    }
  }
});
