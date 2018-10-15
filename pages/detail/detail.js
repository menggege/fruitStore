// pages/detail/detail.js

var app = getApp(),
    _commoditys =require('../../data'),
    currCommodity; 

Page({
  data:{
    commodity:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _id= options.id;
    for(var i=0;i<_commoditys.length;i++){
      if(_commoditys[i].id == _id){
        currCommodity=_commoditys[i];
        break;
      }
    }
    this.setData({
      commodity:currCommodity
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  addTap:function(){

    app.globalData.cardCommoditys.push(currCommodity);
     wx.switchTab({
      url: '../trolley/trolley'
     });
  }
})