
AFRAME.registerComponent('a-framebox', {  
    schema: {
      interval: { type: 'number', default: 5000 },
      defaultColor: { type: 'color', default: '#fff' }
    },
    
    init: function() {
      var el = this.el 
      var interval = this.data.interval 
      
      var colors = ["#F11111", "#FCDB04", "#2DB1EA", "#52E822", "#EF800A"] 
      
      var i = 0
       
      el.setAttribute('color', colors[0]) 
      
      this.colorInterval = setInterval(function(){ 
        i = (i + 1) % colors.length 
        el.setAttribute('color', colors[i])
      }, interval) 
    },
    
    update: function() {},
  
    remove: function() {
      var el = this.el
      var defaultColor = this.data.defaultColor
      
      clearInterval(this.colorInterval)
      el.setAttribute('color', defaultColor)
    }
  })
     
 