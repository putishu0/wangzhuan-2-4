$(function(){
    function shuaxin(){
        var msg=['qingfengfoxm',' tang6142016'];
        var arrimg = ['11.png','12.png']
        var index = Math.floor((Math.random()*msg.length)); 
        $('.shuaxin').text(msg[index]);
        $('.fixed1').attr('src','img/'+ arrimg[index] +'')
    }
    shuaxin();
})