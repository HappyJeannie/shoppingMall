# shop

> shopping mall

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 此处记录每天更新细节
### 2017-12-06
#### 一、增加商品列表数据渲染实现
	1、在项目更根目录新建mock文件夹，文件夹下面新建goods.json文件
	2、通过express路由框架来定义数据的加载。以前的方式是在./build/dev-server.js文件中进行express路由配置，但是最近的vue-cli生成的模板将此文件合并到了./build/weback.base.config.js中,在此文件中引入mock数据
#### 二、实现图片懒加载
	1、首先修改了下左侧价格筛选和手机端适配问题
	2、使用vue-lazyload实现懒加载,具体如何引用可参考npm官网并搜索vue-lazyload查询使用
#### 三、[Linux下安装node环境(划重点)]()以下以node v6.10.3版本为例
	1、去根目录： cd /
	2、下载安装包：wget https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-linux-x64.tar.xz
	3、解压文件：xz -d node-v6.10.3-linux-x64.tar.xz / tar -xzvf node-v6.10.3-linux-x64.tar.gz
	4、生成tar包后继续解压： tar -xvf node-v6.10.3-linux-x64.tar
	5、建立一个软链接，将node指向****（***是没听清的地方）：In -s /node-v6.10.3-linux-x64/bin/node /user/local/bin/node
	6、将npm也指向过去：In -s /node-v6.10.3-linux-x64/bin/npm /user/local/bin/npm
#### 四、Node变成基础
	1、Common规范
	2、创建一个Http Server
	3、创建一个Web容器，可以访问到Html内容
	4、Http模块客户端演示









