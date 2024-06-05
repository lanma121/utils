module.exports = function (api) {
    api.cache(true);
  
    const presets = [ "@babel/preset-env" ];
    // "@babel/plugin-transform-runtime",
    const plugins = [ "@babel/plugin-transform-modules-umd" ];
  
    if (process.env["ENV"] === "prod") {
    //   plugins.push(...);
    }
  
    return {
      presets,
      plugins
    };
  }