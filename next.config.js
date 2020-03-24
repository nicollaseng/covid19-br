 const { parsed: localEnv } = require('dotenv').config();
 const webpack = require('webpack');

 module.exports = {
  webpack(config){
     config.module.rules.push({
       test: /\.svg$/,
       issuer: {
         test: /\.(js|ts)x?$/,
       },
       use: ['@svgr/webpack'],
     });
    return config;
  }
 }
