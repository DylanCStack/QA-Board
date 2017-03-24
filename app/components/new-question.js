import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewQuestion: false,
    questionFormShow() {
      this.set("addNewQuestion", true);
    },
    questionFormHide() {
      this.set("addNewQuestion", false);
    },
    saveQuestion() {
      var params = {
        author: this.get("author"),
        subject: this.get("subject"),
        inquiry: this.get("inquiry"),
        body: this.get("body")
      };
      this.set("addNewQuestion", false);
      this.sendAction("saveQuestion", params);
    }
  }
});
