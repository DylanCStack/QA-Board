import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewQualification:false,
    addQualificationShow(){
      this.set("addNewQualification", true);
    }
  }
});
