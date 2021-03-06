var commandMapping = [{
  "createDomain": "createDomainExtension"
}];

class HexonetExtension {
  constructor() {
  }

  createDomainExtension(data) {
    var config = this.config;
    var namespace = config.namespaces.keyvalue.xmlns;
    var keyValueSet = [];
    for (var key in data) {
      var value = data[key];
      keyValueSet.push({
        "_attr": {
          "key": key,
          "value": value
        },
        "_value": null
      });
    }
    if (keyValueSet.length < 1) return undefined;
    var processedKeyValues = {
      "_attr": {
        "xmlns:keyvalue": namespace
      },
      "keyvalue:kv": keyValueSet
    };
    var processedExtension = {
      "keyvalue:extension": processedKeyValues
    };
    return processedExtension;
  }

  static mixinMapper(destObj) {
    return commandMapping
  }
}

module.exports = HexonetExtension;

