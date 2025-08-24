var t, r, n;
                          if (42 !== (n = e.input.charCodeAt(e.position))) return !1;
                          for (n = e.input.charCodeAt(++e.position), t = e.position; 0 !== n && !g(n) && !v(n);) n = e.input.charCodeAt(++e.position);
                          return e.position === t && C(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), s.call(e.anchorMap, r) || C(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], I(e, !0, -1), !0