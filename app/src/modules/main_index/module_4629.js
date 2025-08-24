! function(e) {
                  "use strict";

                  function t() {
                      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                      if (t.length > 1) {
                          t[0] = t[0].slice(0, -1);
                          for (var n = t.length - 1, i = 1; i < n; ++i) t[i] = t[i].slice(1, -1);
                          return t[n] = t[n].slice(1), t.join("")