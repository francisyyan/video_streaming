!function(e) {
    function o(r) {
        if (t[r])
            return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    var t = {};
    o.m = e,
    o.c = t,
    o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }
    ,
    o.p = "",
    o(o.s = 0)
}([function(e, o, t) {
    "use strict";
    function r(e, o) {
        var t = new XMLHttpRequest;
        t.open("GET", e),
        t.responseType = "arraybuffer",
        t.onerror = function(e) {
            o(e)
        }
        ,
        t.onload = function() {
            o(null, t.response)
        }
        ,
        t.send()
    }
    function n(e, o) {
        var t = document.querySelector("#" + e + " .console")
          , r = document.createElement("li");
        r.textContent = o,
        t.appendChild(r)
    }
    function u(e, o, t, u) {
        var a = e.split(/\//)[1] + "-" + o.toLowerCase();
        MediaSource.isTypeSupported(u) ? n(a, 'Audio of type "' + e + '" with ' + o + " as a codec seems to be supported.") : n(a, 'Audio of type "' + e + '" with ' + o + " as a codec seems to be NOT supported.");
        var d = document.querySelector("#" + a + " audio")
          , i = new MediaSource;
        d.src = URL.createObjectURL(i),
        i.addEventListener("error", function() {
            n(a, 'An "error" event was fired by the MediaSource.')
        }),
        i.addEventListener("sourceclose", function() {
            n(a, 'The "sourceclose" event of the MediaSource was fired.')
        }),
        i.addEventListener("sourceended", function() {
            n(a, 'The "sourceended" event of the MediaSource was fired.')
        }),
        i.addEventListener("sourceopen", function() {
            n(a, 'The "sourceopen" event of the MediaSource was fired.');
            try {
                var d = i.addSourceBuffer(u);
                d.addEventListener("abort", function() {
                    n(a, 'The "abort" event of the SourceBuffer was fired.')
                }),
                d.addEventListener("error", function() {
                    n(a, 'The "error" event of the SourceBuffer was fired.')
                }),
                d.addEventListener("updateend", function() {
                    n(a, 'The "updateend" event of the SourceBuffer was fired.'),
                    n(a, 'Calling "endOfStream()" on the MediaSource.'),
                    i.endOfStream()
                }),
                r(t, function(e, o) {
                    null === e ? (n(a, 'The buffer of the file "' + t + '" was loaded successfully.'),
                    d.appendBuffer(o)) : n(a, 'The file "' + t + '" could not be loaded.')
                })
            } catch (t) {
                throw n(a, 'Creating a SourceBuffer of type "' + e + '" with ' + o + " as a codec failed. The original error was logged to the console."),
                t
            }
        })
    }

    u("audio/mpeg", "MP3", audio_mp3, "audio/mpeg"),
    u("audio/mp2t", "MP3", audio_mp3_ts, "audio/mp2t"),
    u("audio/mp4", "AAC", audio_aac_mp4, 'audio/mp4; codecs="mp4a.40.2"'),
    u("audio/mp4", "MP3", audio_mp3_mp4, "audio/mp4"),
    u("audio/webm", "Opus", audio_opus_webm, 'audio/webm; codecs="opus"')
    u("audio/mp4", "Opus", audio_opus_mp4, 'audio/mp4; codecs="opus"')
}
]);

