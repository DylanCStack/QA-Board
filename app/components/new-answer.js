import Ember from 'ember';

function tooObject(array) {
  var obj = {};
  for (var i = 0; i < array.length; ++i)
    obj[array[i]] = array[i];
  return obj;
}

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
        content: this.get("content"),
        qualifications: tooObject(Ember.$(".newQualifications").map(function(){
          return $(this).val()
        }))
      };
      console.log(params.qualifications);
      this.set("addNewAnswer", false);
      this.sendAction("saveAnswer", params, question);
    }
  }
});
