import DS from 'ember-data';

export default DS.Model.extend({
  tagline:            DS.attr('string'),
  executiveSummary:   DS.attr('string'),
  imperative:         DS.attr('string'),
  slug:               DS.attr('string'),
  publishedAt:        DS.attr('date'),
  formatType:         DS.attr('string'),
  totalCombinedRead:  DS.attr('number'),
  countries:          DS.attr(),
  sectors:            DS.attr(),

  contentVerticals:   DS.hasMany('content-vertical', {aync: true}),
  account:            DS.belongsTo('account', {async: true}),
  primaryEntity:      DS.belongsTo('entity', {aync: true}),
});
