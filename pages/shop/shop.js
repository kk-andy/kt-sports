const order = ['demo1', 'demo2', 'demo3']

Page({
  data:{
    screenHeight:'500px',
    topArr:[],
    isPullDown:true,
    headNavSel:0,
    headNavData:['男子','女子','儿童','流行潮品'],
  },
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },
  //滑动
  showspe:function(e){
    let arr = this.data.topArr
    arr.push(e.detail.scrollTop);
    arr.length>=10?arr.splice(0,arr.length-4):arr
    if(arr[arr.length-1]-arr[0]>=5){
      if(!this.data.isPullDown){
        return false
      }else{
        this.setData({
          isPullDown:false
        })
      }
    }else if(arr[0]-arr[arr.length-1]>=5){
      if(this.data.isPullDown){
        return false
      }else{
          this.setData({
            isPullDown:true
          })
        }
      }
    if(this.data.isPullDown){
      this.headNav(this,(that,animation)=>{
        animation.opacity(1).translateY(0).step()
        that.setData({
          animationData: animation.export()
        })
      })
    }else{
      this.headNav(this,(that,animation)=>{
        animation.opacity(1).translateY('-50px').step()
        that.setData({
          animationData: animation.export()
        })
      })
    }
    },
  //导航动画
  headNav:function (that,cb) {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'linear',
      })
      animation.opacity(1).step()
      that.setData({
        sendMsg: '',
        animationData: animation.export()
      })
      cb(that,animation)
    },
  //导航点击改变选中
  headNavClick:function(e){
    switch(e.target.offsetLeft){
      case 20:
        this.setData({
          headNavSel:0
        });
        break;
      case 70:
      this.setData({
        headNavSel:1
      });
      break;
      case 120:
      this.setData({
        headNavSel:2
      });
      break;
      case 170:
      this.setData({
        headNavSel:3
      });
      break;
    }
    
  },


  onLoad:function(){
    this.setData({
      screenHeight:wx.getSystemInfoSync().windowHeight+"px"
    })
  }
})