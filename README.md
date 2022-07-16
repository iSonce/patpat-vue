<div align='center'>
    <img src='./src/assets/patpat.png' width='200'/>
    <h1>patpat-vue</h1>
</div>

<p align='center'>
<a href="https://www.oscs1024.com/project/oscs/iSonce/patpat-vue?ref=badge_small">
    <img src="https://www.oscs1024.com/platform/badge/iSonce/patpat-vue.svg?size=small" alt="OSCS Status"/>
</a>
<a href="https://app.travis-ci.com/iSonce/patpat-vue.svg?branch=master">
    <img src='https://app.travis-ci.com/iSonce/patpat-vue.svg?branch=master' alt='Build Status'/>
</a>
<a href="./LICENSE.md" >
    <img src='https://img.shields.io/badge/license-MIT-blue' alt='MIT license'/>
</a>
<br/>
The front end of a game community app named patpat power by <a href='https://vuejs.org/'>Vue.js</a>
</p>

## Background
This project is just part of the application of patpat, there are the other parts of the patpat project.

* [patpatAndroid](https://gitee.com/lin_po_sheng/patpat-android) made by [kudou-lbs](https://gitee.com/lin_po_sheng) and [Anomaly_Ruby](https://gitee.com/Anomaly_Ruby)
* [patpatBackend](https://gitee.com/lin_po_sheng/patpat-backend) made by [光海](https://gitee.com/hide_and_see) and [“](mailto:994097470@qq.com)
* [patpatDesign](https://gitee.com/lin_po_sheng/patpat-design) made by [LeoVincent](https://gitee.com/leovincent)

The GUI style of patpat is learned from [TapTap](https://taptap.com).

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed. (My current version of node is 16.15.1)

```sh
$ git clone https://github.com/iSonce/patpat-vue.git
$ cd patpat-vue
$ npm install
```

## Usage

***This project depend on the android application, so the usage is just for development***

### Start

After install the dependencies, start the project.

```sh
$ npm run serve
```

It will run at port 8080 by default.

### Build

Create a production build.

```sh
$ npm run build
```
The project root directory will generate a folder named dist, open ```dist/index.html``` in your browser.

### Router

You can check the ```src/routes/config.js``` to know more about the correspondence between paths and pages

## license

[MIT License](./LICENSE.md) © 2022-PRESENT iSonce
