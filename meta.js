module.exports = {
  "helpers": {
    "neither": function (k, v1, v2, options) {
      if (k !== v1 && k !== v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
  },
  "prompts": {
    "projectName": {
      "type"   : "input",
      "message": "项目名称：",
    },
    "description": {
      "type"   : "input",
      "message": "项目描述：",
    },
    "router": {
      "type"   : "confirm",
      "message": "是否安装 vue-router?",
    },
    "vuex": {
      "type"   : "confirm",
      "message": "是否使用 Vuex进行状态管理?",
    }
  },
  "filters": {
    "src/router/**/*": "router"
  },
  // "metalsmith": function(metalsmith, opts, helpers) {
  //   metalsmith.use(renamer({
  //     index: {
  //       pattern: 'project/**/+(Mobile|Admin)Index.vue',
  //       rename: function(fileName) {
  //         return 'Index.vue';
  //       }
  //     },
  //     config: {
  //       pattern: 'project/src/+(mobile|admin)Config.js',
  //       rename: 'config.js'
  //     },
  //     //...
  //   }))
  // },
}