var vm,loading;
(function($) {
    appcan.ready(function(){
        vm = new Vue({
            el : "#Page",
            data : {
                
            },
            mounted : function() {
                
            },
            methods : {
                test : function() {
                    appcan.locStorage.setVal('registerObj',111);
                    appcan.window.open("index2",'http://1729176996.github.io/testzfb/index2.html',10);
                    //location.href = 'https://1729176996.github.io/testzfb/index2.html';
                }
            }
        })
    })
})($);