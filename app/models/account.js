import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr('string'),
  title:        DS.attr('string'),
  slug:         DS.attr('string'),
  avatarUrl:    DS.attr(),
  companyName:  DS.attr('string'),
});
