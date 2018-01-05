# vue-mobileapp-boilerplate

> A Vue.js project

### 执行脚本

``` bash
npm install

npm run dev

npm run build
```

###  目录说明

1. ```build```: 编译与打包的脚本
2. ```config```: 生产/测试环境变量配置文件
3. ```static```: 全局静态文件, 多页应用专属的图片资源文件应放到 ```src/assets``` 中
4. ```src/components```: 放置可以复用的功能组件, 若存在可进一步抽象的基础组件, 则放置到其子目录 ```commons``` 下
5. ```src/containers```: 放置以页面为单位的容器组件, 负责与 ```vuex``` 管理功能组件的状态
6. ```src/mixins```: 放置容器组件所需的共同方法等
    