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
                appcan.window.open("index","index2.html",10);
            }
        }
    })
})($);