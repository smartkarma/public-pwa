import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['mainClass'],
  mainClass: 'sk-insights-page',
  store: Ember.inject.service(),

  insights: Ember.computed(function() {
    return this.get('store').query('insight', {
      'page[size]': 10,
      'page[number]': 1,
    });
  })
});
