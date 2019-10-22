var vm,loading;
(function($) {
    vm = new Vue({
        el : "#Page",
        data : {
            app_id:'',
            auth_code:''
        },
        mounted : function() {
            var _this = this;
            if(location.href.indexOf('app_id')){
                _this.app_id = GetQueryString('app_id');
                _this.auth_code = GetQueryString('auth_code');
            }
        },
        methods : {
            test : function() {
                var appid = '2019102268531811';
                var url = 'https://1729176996.github.io/testzfb/index2.html';
                var href = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id='+appid+'&scope=auth_user&redirect_uri='+url+'&state=init';
                location.href = href;
            },
            back:function(){
                appcan.window.open("index",'https://1729176996.github.io/testzfb/index.html');
            }
        }
    })
})($);

function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
     if(r!=null)return  unescape(r[2]); return null;
}