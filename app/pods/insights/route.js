import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').query('insight', {
      'page[size]': 10,
      'page[number]': 1,
      include: 'content-verticals,primary-entity,account',
    });
  },
});
