(() => {
  "use strict";
  var e,
    t,
    r,
    s,
    n = function (e, t, r) {
      if (!t.has(e))
        throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, r), r;
    },
    i = function (e, t) {
      if (!t.has(e))
        throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    };
  class a {
    constructor(t) {
      e.set(this, void 0);
      try {
        const r = new Date().toString();
        t.setItem(r, r);
        const s = t.getItem(r) == r;
        t.removeItem(r), s && n(this, e, t);
      } catch (e) {}
    }
    isAvailable() {
      return Boolean(i(this, e));
    }
    get(t) {
      try {
        const { value: r, expires: s } = JSON.parse(
          i(this, e)?.getItem(t) ?? ""
        );
        return s && new Date() > new Date(s) ? (this.remove(t), null) : r;
      } catch (e) {
        return null;
      }
    }
    set(t, r, s) {
      return i(this, e)?.setItem(t, JSON.stringify({ value: r, expires: s }));
    }
    remove(t) {
      return i(this, e)?.removeItem(t);
    }
    clear() {
      return i(this, e)?.clear();
    }
    getRaw(t) {
      return i(this, e)?.getItem(t) ?? null;
    }
    setRaw(t, r) {
      return i(this, e)?.setItem(t, r);
    }
  }
  (e = new WeakMap()),
    new ((s = class {
      constructor() {
        t.set(this, void 0), r.set(this, void 0);
      }
      get local() {
        return n(this, t, i(this, t) || new a(localStorage));
      }
      get session() {
        return n(this, r, i(this, r) || new a(sessionStorage));
      }
    }),
    (t = new WeakMap()),
    (r = new WeakMap()),
    s)().local.set("key", "value");
})();
