import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v2',
  host: '',

  urlForQueryRecord: function(query, modelName) {
    if (query && query._overrideURL) {
      let url = query._overrideURL;
      delete query._overrideURL;

      if (url.charAt(0) !== '/') {
        url = (this.get('host') ? '' : '/') + this.urlPrefix() + '/' + url;
      }
      return url;
    }

    if (query.id || query.slug) {
      let idOrSlug = query.id || query.slug;
      let url = this.urlForFindRecord(idOrSlug, modelName);
      delete query.id;
      delete query.slug;
      return url;
    }

    return this._buildURL(modelName);
  },
});
