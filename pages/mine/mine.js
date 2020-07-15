// pages/mine/mine.js
const app = getApp()
Page({
  data: {
    userInfo:null,
  },
  login:function(e){
   this.verifyLogin().then(()=>{
      let userInfo = e.detail.userInfo
      if (userInfo){
          app.globalData.UserInfo = userInfo;
          this.setData({
            userInfo:userInfo
          })
      } 
   })
  },
  getUserInfo:function(){
    wx.getUserInfo({
      success: (res) => {
        let userInfo = res.userInfo
        if (userInfo){
            app.globalData.UserInfo = userInfo;
            this.setData({
              userInfo:userInfo
            })
        } 
      },

    })
  },
  verifyLogin:function(){
    return new Promise((resolve,reject)=>{
      wx.login({
        success(res){
          if(res.errMsg.split(":")[1] == 'ok'){
            resolve(res.code)
          }else{
            reject()
          }
        }
      })
    })
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.checkSession({
      success: (res) => {
        this.getUserInfo()
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})