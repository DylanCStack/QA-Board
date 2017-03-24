import Ember from 'ember';

export default Ember.Component.extend({

  actions:{
    addNewAnswer: false,
    newAnswerFormShow(){
      this.set("addNewAnswer", true);
    },
    newAnswerFormHide(){
      this.set("addNewAnswer", false);
    }
  }
});
