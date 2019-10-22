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
                appcan.locStorage.setVal('registerObj',111);
                appcan.window.open("index2",'https://1729176996.github.io/testzfb/index2.html');
            }
        }
    })
})($);