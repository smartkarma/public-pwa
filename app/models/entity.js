import DS from 'ember-data';

export default DS.Model.extend({
  shortName:  DS.attr('string'),
  bbgid:      DS.attr('string'),
  country:    DS.attr('string'),
  sector:     DS.attr('string'),
  security:   DS.attr('string'),
  slug:       DS.attr('string'),
  googleFinanceTicker: DS.attr('string'),
});
