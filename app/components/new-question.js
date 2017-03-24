import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewQuestion: false,
    questionFormShow(){
      this.set("addNewQuestion", true);
    },
    questionFormHide(){
      this.set("addNewQuestion", false);
    }
  }
});
