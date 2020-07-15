const order = ['demo1', 'demo2', 'demo3']

Page({
  data:{
    screenHeight:'500px',
    topArr:[],
    isPullDown:true
  },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  hidd:function(){
   
  },
  showspe:function(e){
    let arr = this.data.topArr
    arr.push(e.detail.scrollTop);
    arr.length>=5?arr.splice(0,arr.length-4):arr
    console.log(this.data.isPullDown,333)
    if(arr[arr.length-1]>arr[arr.length-2]){

      if(!this.data.isPullDown){
        return false
      }else{
        this.setData({
          isPullDown:false
        })
      }
    }else{
      if(this.data.isPullDown){
        return false
      }else{
          this.setData({
            isPullDown:true
          })
        }
      }
    },
    // if(arr[arr.length-1]<arr[arr.length-2]){
    //   if(this.data.isPullDown){
    //     return false
    //   }else{
    //     this.setData({
    //       isPullDown:false
    //     })
    //   }
    // }
    
   
  
  
  onLoad:function(){
    this.setData({
      screenHeight:wx.getSystemInfoSync().windowHeight+"px"
    })
  }
})