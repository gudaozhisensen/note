/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.onload=function(){
    
    var arr=[
    'weekend in London ',
    'A major aviation mystery in 2015 differed ',
    ' Deaths by Police Officers',
    'Amtrak Train Crash',
    'Prison Escape in New York',
    'Charleston Church Shooting',
    'On-Air Shooting in Virginia',
    'Major Murder Trials',
    'European Refugee Crisis',
    'Same-Sex Marriage Debate',
    'Pope Francis Visits the US',
    'Another Terror Attack in Paris'
  ]
    
   var oDiv1=document.getElementById('div1');
   var oText=document.getElementById('text');
   var  aLi=oDiv1.getElementsByTagName('li');
    for (var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        //给每一个导航添加一下索引
        aLi[i].onmouseover=function(){   //给每一个导航添加鼠标经过事件
            for (var i=0;i<aLi.length;i++){
                aLi[i].className='';//取消高亮
            };
            //给鼠标所在的导航添加激活样式  实现有高亮
             this.className='active';
        oText.innerHTML='<h2>'+(this.index+1)+'</h2>'+'<p>'+arr[this.index]+'</p>';
        }
        
      
    }
    
}
