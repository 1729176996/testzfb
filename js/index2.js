var vm,loading;
(function($) {
    vm = new Vue({
        el : "#Page",
        data : {
            
        },
        mounted : function() {
            
        },
        methods : {
            test : function() {
                location.href = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=2019102268526806&scope=auth_user&redirect_uri=https://1729176996.github.io/signs/index.html&state=init';
            },
            back:function(){
                appcan.window.close(-1);
            }
        }
    })
})($);