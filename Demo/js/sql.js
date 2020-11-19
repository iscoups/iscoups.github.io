//全局变量
var yPosition;
function get() {

    //1. 创建xmlhttprequest 对象
    var request = ajaxFunction();

    //2. 发送请求  用false是因为需要同步(true为异步)
    request.open("GET", "PlaneServlet?method=getPlanePosition", false);

    //3. 获取响应数据 注册监听的意思。  一会准备的状态发生了改变，那么就执行 = 号右边的方法
    request.onreadystatechange = function () {

        //前半段表示 已经能够正常处理。  再判断状态码是否是200
        if (request.readyState == 4 && request.status == 200) {
            //弹出响应的信息,测试用
            // alert(request.responseText);
            //转为json对象
            var obj = JSON.parse(request.responseText);
            //把服务器响应的json对象赋值给yPosition
            yPosition = obj.yPosition;
            // alert(yPosition);
        }
    };

    request.send();
}