// pages/trolley/trolley.js

var app = getApp();

Page({
  data:{
    commoditys:[],
    hasCommoditys:false
  },
  onLoad:function(options){
   
  },
  onReady:function(){
    // 页面渲染完成
     
  },
  onShow:function(){
    // 页面显示

    var _tempCarts = app.globalData.cardCommoditys;
    if(_tempCarts.length > 0){
      this.setData({
        commoditys:_tempCarts,
        hasCommoditys:true
      });
    }else{
      this.setData({
        hasCommoditys:false
      });
    }

  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  //继续购物
  shoppingTap:function(){
    wx.switchTab({
      url: '../index/index'
     });
  },
  //结算
  accountTap:function(){
    
    wx.showToast({
      title: '结算成功',
      icon: 'success',
      duration: 2000
    });
    this.setData({
      commoditys:[],
      hasCommoditys:false
    });
    app.globalData.cardCommoditys=[];
  }
})