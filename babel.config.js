module.exports = function (api) {
    api.cache(true);
  
    const presets = [ "@babel/preset-env" ];
    const plugins = [ "@babel/plugin-transform-runtime", "@babel/plugin-transform-modules-umd" ];
  
    if (process.env["ENV"] === "prod") {
    //   plugins.push(...);
    }
  
    return {
      presets,
      plugins
    };
  }