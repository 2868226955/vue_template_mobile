module.export = {
  "prompts": {
    "isCustomName": {
      "type"   : "confirm",
      "message": "是否自定义系统名称？",
    },
    "sysName": {
      "type"    : "input",
      "when"    : "isCustomName",
      "default" : "默认系统名称",
      "message" : "请输入系统名称:",
      "required": true,
      "validate": function (val) {
        if (!val) return '(✘) 请输入系统名称，该名称将设为 index.html 的 title';
        return true;
      },
    },
    // ...
  },
  "helpers": {
    "neither": function (k, v1, v2, options) {
      if (k !== v1 && k !== v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
  },
  "filters": {
    "project/config/test.env.js": "unit || e2e",
    "project/src/router/**/*": "router"
  },
  "metalsmith": function(metalsmith, opts, helpers) {
    metalsmith.use(renamer({
      index: {
        pattern: 'project/**/+(Mobile|Admin)Index.vue',
        rename: function(fileName) {
          return 'Index.vue';
        }
      },
      config: {
        pattern: 'project/src/+(mobile|admin)Config.js',
        rename: 'config.js'
      },
      //...
    }))
  }
}