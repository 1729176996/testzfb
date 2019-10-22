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
                appcan.window.open("index","index2.html",10);
            }
        }
    })
})($);