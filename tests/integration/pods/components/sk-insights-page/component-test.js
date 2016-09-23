import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sk-insights-page', 'Integration | Component | sk insights page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sk-insights-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sk-insights-page}}
      template block text
    {{/sk-insights-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
