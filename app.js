//app.js
App({
  //小程序加载完成之后调用,全局只触发一次
  onLaunch: function () {
    console.log('App Launch')
  },
  //小程序启动，或者从后台到前台会触发一次
  onShow: function () {
    console.log('App Show')
  },
  //小程序从前台到后台会触发一次
  onHide: function () {
    console.log('App Hide')
  },
  //错误处理
  onError: function(msg) {
    console.log(msg)
  },
  globalData:{
    userInfo:null,
    cardCommoditys:[]
  }
})