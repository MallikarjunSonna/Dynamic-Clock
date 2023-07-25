function clock()
{
    var dy=new Date()
    var roju=dy.getDay()
    switch(roju)
    {
        case 0:roju="sunday";
        document.getElementById('bd').style.backgroundImage="url(./jnd.jpg)"
        document.getElementById('bd').style.backgroundSize="100% 800px"
        document.getElementById('bd').style.backgroundRepeat="no-repeat"
        break;
        case 1:roju="monday";
        document.getElementById('bd').style.backgroundImage="url(./nature.jpg)"
        document.getElementById('bd').style.backgrounddSize="100% 800px"
        document.getElementById('bd').style.backgroundRepeat="no-repeat"
        break;
        case 2:roju="tuesday";
        document.getElementById('bd').style.backgroundImage="url(./nature6.jpg)"
        document.getElementById('bd').style.backgroundSize="100% 800px"
        document.getElementById('bd').style.backgroundRepeat="no-repeat"
        break;
        case 3:roju="wednesaday";
        document.getElementById('bd').style.backgroundImage="url(./nature2.jpg)"
        document.getElementById('bd').style.backgroundSize="100% 800px"
        document.getElementById('bd').style.backgroundRepeat="no-repeat"
        break;
        case 4:roju="THURSDAY";
        document.getElementById('bd').style.backgroundImage="url(./nature3.jpg)"
        document.getElementById('bd').style.backgroundSize="100% 800px"
        document.getElementById('bd').style.backgroundRepeat="no-repeat"
        break;
        case 5:roju="friday";
        document.getElementById('bd').style.backgroundImage="url(./nature4.jpg)"
        document.getElementById('bd').style.backgroundSize="100% 800px"
        document.getElementById('bd').style.backgroundRepeat="no-repeat"
        break;
        case 6:roju="saturday";
        document.getElementById('bd').style.backgroundImage="url(./nature5.jpg)"
        document.getElementById('bd').style.backgroundSize="100% 800px"
        document.getElementById('bd').style.backgroundRepeat="no-repeat"
        break;
        }
        document.getElementById('day').innerHTML=roju;
        var dd=dy.getDate()
        var mon=dy.getMonth()
        var yyyy=dy.getFullYear()
        switch(mon)
        {
            case 0:mon="jan";
            break;
            case 1:mon="feb";
            break;
            case 2:mon="mar";
            break;
            case 3:mon="apr";
            break;
            case 4:mon="may";
            break;
            case 5:mon="june";
            break;
            case 6:mon="july";
            break;
            case 7:mon="aug";
            break;
            case 8:mon="sept";
            break;
            case 9:mon="oct";
            break;
            case 10:mon="nov";
            break;
            case 11:mon="dec";
            break;
        }
        if(dd>0 && dd<10)
    {
        dd="0"+dd
    }
      else
      {
        dd=dd 
      }
      document.getElementById('date').innerHTML=dd + "/" + mon + "/" +yyyy 
      var hh=dy.getHours()
      var mm=dy.getMinutes()
      var sec=dy.getSeconds()
      var ampm=""
      if(hh>=12)
      {
        ampm="PM"
      }
      else
      {
        ampm="AM"
      }
      if(hh>12)
      {
        hh-=12
      }
     document.getElementById('time').innerHTML=hh + ":" + mm + ":" + sec  + ":" + ampm
     setTimeout(function() {clock(), 100})
}
