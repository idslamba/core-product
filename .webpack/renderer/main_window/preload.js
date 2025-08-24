(() => {
    "use strict";
    var e = {
            298: e => {
                e.exports = require("electron")
            }
        },
        r = {};

    function n(o) {
        var i = r[o];
        if (void 0 !== i) return i.exports;
        var t = r[o] = {
            exports: {}
        };
        return e[o](t, t.exports, n), t.exports
    }(() => {
        const e = n(298),
            r = {
                on: (r, n) => (e.ipcRenderer.on(r, n), () => e.ipcRenderer.removeListener(r, n)),
                invoke: (r, ...n) => e.ipcRenderer.invoke(r, ...n),
                removeAllListeners: r => e.ipcRenderer.removeAllListeners(r)
            };
        e.contextBridge.exposeInMainWorld("ipc", r)
    })()
})();
//# sourceMappingURL=preload.js.map