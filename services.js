'use strict';

bsApp.service('bsTicker',
    function () {
        var ticker = null;
        this.init = function (x, y, w, h, r) {
            var dx = 0, dy = 0, dw = 1920, dh = 40, dr = 0;
            if (x) {
                dx = x;
            }
            if (y) {
                dy = y;
            }
            if (w) {
                dw = w;
            }
            if (h) {
                dh = h;
            }
            if (r) {
                dr = r;
            }
            ticker = new BSTicker(dx, dy, dw, dh, dr);
        };
        this.setForegroundColor=function(argb){
           if (ticker){
               ticker.SetForegroundColor(argb);
           }
        };
        this.setBackgroundColor=function(argb){
            if (ticker){
                ticker.SetBackgroundColor(argb);
            }
        },
        this.setText=function(text){
            if (ticker){
                ticker.PopStrings(1);
                ticker.AddString(text);
            }
        }
    });
