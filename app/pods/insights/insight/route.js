import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').queryRecord('insight', {
      slug: params.slug,
      include: 'content-verticals,primary-entity,account',
    });
  },
});
