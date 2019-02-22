const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ?
    //     '/production-sub-path/' :
    //     '/',
    baseUrl: './',
    chainWebpack(config) {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('common', resolve('src/common'))
        config.plugin('context')
            .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/])
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
    productionSourceMap: false,
    /**
     * 下面的这段代码是删除console.log插件
     */
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true, //console
                            drop_debugger: false,
                            pure_funcs: ['console.log'] //移除console
                        }
                    }
                })
            ]
        }
    },
    // configureWebpack:(config)=>{
    //     //入口文件
    //     config.entry.app = ['babel-polyfill', './src/main.js'];
    //     //删除console插件
    //     let plugins = [
    //       new UglifyJsPlugin({
    //         uglifyOptions: {
    //           compress: {
    //             warnings: false,
    //             drop_console:true,
    //             drop_debugger:true
    //           },
    //           output:{
    //             // 去掉注释内容
    //             comments: false,
    //           }
    //         },
    //         sourceMap: false,
    //         parallel: true,
    //       })
    //     ];
    //     //只有打包生产环境才需要将console删除
    //     if(process.env.VUE_APP_build_type=='production'){
    //       config.plugins = [...config.plugins, ...plugins];
    //     }
    // },
}