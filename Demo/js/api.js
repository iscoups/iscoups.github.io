// jquery调用接口
 
//  这个就是在你的页面加载完成后再去调用接口
 $(function(){
 
          $.ajax({
 
            //使用jsonp请求数据
            async : true,
            url : "https://127.0.0.1:8080/camera/1/vehicle",
            data:{},
            type : "GET",
            dataType : "json", // 返回的数据类型，设置为JSONP方式
              success: function(data){//成功
                        console.log(data);
                        var div=document.querySelector('.img');
                        for(var i=0;i<data.length;i++){
                            var img=document.createElement('img');
                            img.src=data.src;
                            div.appendChild(img);
                        }
                    
                       },
              error:function(msg){
                  console.log(msg);
              }
 
          });
     
          let sendWsMessage = function () {
            setInterval(function () {
                searchLandContacts();
            },15000)
        };
         
        sendWsMessage();

 }); 
