Component({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    img:[
      {
       color:'gold',
        index:1
      },
      {
        color:'orange',
        index:2
      },
      {
        color:'deepskyblue',
        index:3
      },
      {
       color:'orangered',
        index:4
      },
    ]
  },
  pageLifetimes:{
    show(){
      console.log('show')
    }
  },
  lifetimes:{
    
  }
 
})