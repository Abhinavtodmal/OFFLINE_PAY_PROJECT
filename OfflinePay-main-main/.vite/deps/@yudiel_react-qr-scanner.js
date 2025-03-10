import {
  require_react
} from "./chunk-67VSMACU.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// client/node_modules/@yudiel/react-qr-scanner/dist/esm/index.js
var import_react = __toESM(require_react());
var a = function(t2, e2) {
  return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
    t3.__proto__ = e3;
  } || function(t3, e3) {
    for (var r2 in e3) Object.prototype.hasOwnProperty.call(e3, r2) && (t3[r2] = e3[r2]);
  }, a(t2, e2);
};
function s(t2, e2) {
  if ("function" != typeof e2 && null !== e2) throw new TypeError("Class extends value " + String(e2) + " is not a constructor or null");
  function r2() {
    this.constructor = t2;
  }
  a(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
}
var u = function() {
  return u = Object.assign || function(t2) {
    for (var e2, r2 = 1, n2 = arguments.length; r2 < n2; r2++) for (var o2 in e2 = arguments[r2]) Object.prototype.hasOwnProperty.call(e2, o2) && (t2[o2] = e2[o2]);
    return t2;
  }, u.apply(this, arguments);
};
function c(t2, e2, r2, n2) {
  return new (r2 || (r2 = Promise))(function(o2, i2) {
    function a2(t3) {
      try {
        u2(n2.next(t3));
      } catch (t4) {
        i2(t4);
      }
    }
    function s2(t3) {
      try {
        u2(n2.throw(t3));
      } catch (t4) {
        i2(t4);
      }
    }
    function u2(t3) {
      var e3;
      t3.done ? o2(t3.value) : (e3 = t3.value, e3 instanceof r2 ? e3 : new r2(function(t4) {
        t4(e3);
      })).then(a2, s2);
    }
    u2((n2 = n2.apply(t2, e2 || [])).next());
  });
}
function f(t2, e2) {
  var r2, n2, o2, i2, a2 = { label: 0, sent: function() {
    if (1 & o2[0]) throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
    return this;
  }), i2;
  function s2(s3) {
    return function(u2) {
      return function(s4) {
        if (r2) throw new TypeError("Generator is already executing.");
        for (; i2 && (i2 = 0, s4[0] && (a2 = 0)), a2; ) try {
          if (r2 = 1, n2 && (o2 = 2 & s4[0] ? n2.return : s4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, s4[1])).done) return o2;
          switch (n2 = 0, o2 && (s4 = [2 & s4[0], o2.value]), s4[0]) {
            case 0:
            case 1:
              o2 = s4;
              break;
            case 4:
              return a2.label++, { value: s4[1], done: false };
            case 5:
              a2.label++, n2 = s4[1], s4 = [0];
              continue;
            case 7:
              s4 = a2.ops.pop(), a2.trys.pop();
              continue;
            default:
              if (!(o2 = a2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== s4[0] && 2 !== s4[0])) {
                a2 = 0;
                continue;
              }
              if (3 === s4[0] && (!o2 || s4[1] > o2[0] && s4[1] < o2[3])) {
                a2.label = s4[1];
                break;
              }
              if (6 === s4[0] && a2.label < o2[1]) {
                a2.label = o2[1], o2 = s4;
                break;
              }
              if (o2 && a2.label < o2[2]) {
                a2.label = o2[2], a2.ops.push(s4);
                break;
              }
              o2[2] && a2.ops.pop(), a2.trys.pop();
              continue;
          }
          s4 = e2.call(t2, a2);
        } catch (t3) {
          s4 = [6, t3], n2 = 0;
        } finally {
          r2 = o2 = 0;
        }
        if (5 & s4[0]) throw s4[1];
        return { value: s4[0] ? s4[1] : void 0, done: true };
      }([s3, u2]);
    };
  }
}
function h(n2) {
  var o2, i2, a2 = n2.result, s2 = n2.video, u2 = n2.delay, c2 = n2.getSettings, f2 = (0, import_react.useRef)(null);
  return (0, import_react.useEffect)(function() {
    var t2;
    if (void 0 !== a2 && null !== f2.current && null !== s2 && 11 === a2.getBarcodeFormat()) {
      var e2 = null !== (t2 = null == c2 ? void 0 : c2()) && void 0 !== t2 ? t2 : {};
      if (void 0 !== e2 && void 0 !== e2.width) {
        var r2 = e2.width / s2.clientWidth, n3 = f2.current, o3 = n3.getContext("2d", { willReadFrequently: true });
        if (null !== o3) {
          var i3 = setTimeout(function() {
            o3.clearRect(0, 0, n3.width, n3.height);
          }, u2);
          o3.strokeStyle = "rgba(0, 255, 0, 0.5)", o3.lineWidth = 4;
          var h2 = a2.getResultPoints()[0];
          o3.beginPath(), o3.arc(h2.getX() / r2, h2.getY() / r2, h2.estimatedModuleSize, 0, 2 * Math.PI), o3.stroke(), o3.closePath();
          var l2 = a2.getResultPoints()[1];
          o3.beginPath(), o3.arc(l2.getX() / r2, l2.getY() / r2, l2.estimatedModuleSize, 0, 2 * Math.PI), o3.stroke(), o3.closePath();
          var d2 = a2.getResultPoints()[2];
          if (o3.beginPath(), o3.arc(d2.getX() / r2, d2.getY() / r2, d2.estimatedModuleSize, 0, 2 * Math.PI), o3.stroke(), o3.closePath(), a2.getResultPoints().length >= 4) {
            var p2 = a2.getResultPoints()[3];
            o3.beginPath(), o3.arc(p2.getX() / r2, p2.getY() / r2, p2.estimatedModuleSize, 0, 2 * Math.PI), o3.stroke(), o3.closePath();
          }
          return function() {
            return clearTimeout(i3);
          };
        }
      }
    }
  }), import_react.default.createElement("canvas", { ref: f2, width: null !== (o2 = null == s2 ? void 0 : s2.clientWidth) && void 0 !== o2 ? o2 : 0, height: null !== (i2 = null == s2 ? void 0 : s2.clientHeight) && void 0 !== i2 ? i2 : 0, style: { position: "absolute", top: 0, zIndex: 2 } });
}
function l(e2) {
  var o2 = e2.result, i2 = (0, import_react.useState)(0), a2 = i2[0], s2 = i2[1];
  return (0, import_react.useEffect)(function() {
    void 0 !== o2 && s2(function(t2) {
      return t2 + 1;
    });
  }, [o2]), import_react.default.createElement("div", { style: { top: 0, right: 5, fontSize: 28, color: "#FFFFFF", position: "absolute", zIndex: 1 } }, a2);
}
function d(e2) {
  var r2 = e2.onClick, n2 = e2.className, o2 = e2.style;
  return import_react.default.createElement("svg", { onClick: r2, width: "30px", height: "30px", viewBox: "0 0 24 24", className: n2, style: o2, xmlns: "http://www.w3.org/2000/svg" }, import_react.default.createElement("path", { strokeWidth: 0.2, stroke: "yellow", fill: "yellow", d: "M13.225 9l5.025-7h-7.972l-3.3 11h5.359l-2.452 8.648.75.364L20.374 9zm.438 3H8.322l2.7-9H16.3l-5.025 7h7.101l-6.7 8.953z" }));
}
function p(e2) {
  var r2 = e2.onClick, n2 = e2.className, o2 = e2.style;
  return import_react.default.createElement("svg", { onClick: r2, width: "30px", height: "30px", viewBox: "0 0 24 24", className: n2, style: o2, xmlns: "http://www.w3.org/2000/svg" }, import_react.default.createElement("path", { strokeWidth: 0.2, stroke: "yellow", fill: "yellow", d: "M14.516 15.158l.714.714-4.595 6.14-.75-.364L12.337 13H6.978L8.22 8.861l.803.803L8.322 12h3.036l1.793 1.792-1.475 5.16zm5.984 4.05L4.793 3.5l.707-.707 3.492 3.492L10.278 2h7.972l-5.025 7h7.149l-3.71 4.957 4.543 4.543zM12.707 10l3.243 3.243L18.376 10zM9.795 7.088l2.079 2.079L16.3 3h-5.278z" }));
}
function g(e2) {
  var o2 = e2.scanning, i2 = e2.switchTorch, a2 = (0, import_react.useState)(false), s2 = a2[0], u2 = a2[1];
  function c2() {
    null == i2 || i2(!s2), u2(!s2);
  }
  return (0, import_react.useEffect)(function() {
    o2 || u2(false);
  }, [o2]), o2 && i2 ? import_react.default.createElement("div", { style: { bottom: 0, right: 3, position: "absolute", zIndex: 2, cursor: "pointer" } }, s2 ? import_react.default.createElement(p, { onClick: c2 }) : import_react.default.createElement(d, { onClick: c2 })) : null;
}
function w(e2) {
  var r2 = e2.onClick, n2 = e2.disabled, o2 = e2.className, i2 = u({ cursor: n2 ? "default" : "pointer", stroke: n2 ? "grey" : "yellow", strokeLineJoin: "round", strokeLineCap: "round", strokeWidth: 1.5 }, e2.style);
  return import_react.default.createElement("svg", { onClick: n2 ? void 0 : r2, className: o2, style: i2, width: "28px", height: "28px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, import_react.default.createElement("path", { d: "M3 3L6.00007 6.00007M21 21L19.8455 19.8221M9.74194 4.06811C9.83646 4.04279 9.93334 4.02428 10.0319 4.01299C10.1453 4 10.2683 4 10.5141 4H13.5327C13.7786 4 13.9015 4 14.015 4.01299C14.6068 4.08078 15.1375 4.40882 15.4628 4.90782C15.5252 5.00345 15.5802 5.11345 15.6901 5.33333C15.7451 5.44329 15.7726 5.49827 15.8037 5.54609C15.9664 5.79559 16.2318 5.95961 16.5277 5.9935C16.5844 6 16.6459 6 16.7688 6H17.8234C18.9435 6 19.5036 6 19.9314 6.21799C20.3077 6.40973 20.6137 6.71569 20.8055 7.09202C21.0234 7.51984 21.0234 8.0799 21.0234 9.2V15.3496M19.8455 19.8221C19.4278 20 18.8702 20 17.8234 20H6.22344C5.10333 20 4.54328 20 4.11546 19.782C3.73913 19.5903 3.43317 19.2843 3.24142 18.908C3.02344 18.4802 3.02344 17.9201 3.02344 16.8V9.2C3.02344 8.0799 3.02344 7.51984 3.24142 7.09202C3.43317 6.71569 3.73913 6.40973 4.11546 6.21799C4.51385 6.015 5.0269 6.00103 6.00007 6.00007M19.8455 19.8221L14.5619 14.5619M14.5619 14.5619C14.0349 15.4243 13.0847 16 12 16C10.3431 16 9 14.6569 9 13C9 11.9153 9.57566 10.9651 10.4381 10.4381M14.5619 14.5619L10.4381 10.4381M10.4381 10.4381L6.00007 6.00007" }));
}
function A(e2) {
  var r2 = e2.onClick, n2 = e2.disabled, o2 = e2.className, i2 = u({ cursor: n2 ? "default" : "pointer", stroke: n2 ? "grey" : "yellow", strokeLineJoin: "round", strokeLineCap: "round", strokeWidth: 1.5 }, e2.style);
  return import_react.default.createElement("svg", { onClick: n2 ? void 0 : r2, className: o2, style: i2, width: "28px", height: "28px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, import_react.default.createElement("path", { d: "M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" }), import_react.default.createElement("path", { d: "M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" }));
}
function y(e2) {
  var r2 = e2.scanning, o2 = e2.startScanning, i2 = e2.stopScanning, a2 = (0, import_react.useState)(false), s2 = a2[0], u2 = a2[1];
  function c2() {
    u2(true), r2 ? null == i2 || i2() : o2(), setTimeout(function() {
      return u2(false);
    }, 3e3);
  }
  return import_react.default.createElement("div", { style: { bottom: 50, right: 3, position: "absolute", zIndex: 2, cursor: s2 ? "default" : "pointer" } }, r2 ? import_react.default.createElement(w, { disabled: s2, onClick: c2 }) : import_react.default.createElement(A, { disabled: s2, onClick: c2 }));
}
function C(e2) {
  var r2, n2 = e2.scanning, i2 = e2.loading, a2 = e2.video, s2 = e2.border, u2 = void 0 === s2 ? 35 : s2, c2 = e2.result, f2 = e2.options, d2 = e2.count, p2 = e2.onOff, w2 = e2.tracker, A2 = void 0 !== w2 && w2, C2 = e2.switchTorch, E2 = e2.startScanning, v2 = e2.stopScanning, m2 = e2.getSettings, I2 = "rgba(255, 0, 0, 0.5)";
  return import_react.default.createElement(import_react.Fragment, null, d2 && import_react.default.createElement(l, { result: c2 }), A2 && import_react.default.createElement(h, { video: a2, result: c2, getSettings: m2, delay: null !== (r2 = f2.delayBetweenScanAttempts) && void 0 !== r2 ? r2 : 0 }), p2 && import_react.default.createElement(y, { scanning: n2, startScanning: E2, stopScanning: v2 }), import_react.default.createElement(g, { scanning: n2, switchTorch: C2 }), import_react.default.createElement("svg", { viewBox: "0 0 100 100", style: { top: 0, left: 0, zIndex: 1, boxSizing: "border-box", border: "".concat(u2 >= 35 ? u2 : 35, "px solid rgba(0, 0, 0, 0.2)"), position: "absolute", width: "100%", height: "100%" } }, i2 && import_react.default.createElement("text", { x: "50", y: "50", textAnchor: "middle", fill: "black", fontSize: "8", fontFamily: "Arial", fontWeight: "bold" }, "Loading ...", import_react.default.createElement("animate", { attributeName: "opacity", values: "0;1;0", dur: "2s", repeatCount: "indefinite" })), import_react.default.createElement("path", { fill: "none", d: "M23,0 L0,0 L0,23", stroke: I2, strokeWidth: 3 }), import_react.default.createElement("path", { fill: "none", d: "M0,77 L0,100 L23,100", stroke: I2, strokeWidth: 3 }), import_react.default.createElement("path", { fill: "none", d: "M77,100 L100,100 L100,77", stroke: I2, strokeWidth: 3 }), import_react.default.createElement("path", { fill: "none", d: "M100,23 L100,0 77,0", stroke: I2, strokeWidth: 3 })));
}
var E;
var v;
var m = (E = function(t2, e2) {
  return E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
    t3.__proto__ = e3;
  } || function(t3, e3) {
    for (var r2 in e3) Object.prototype.hasOwnProperty.call(e3, r2) && (t3[r2] = e3[r2]);
  }, E(t2, e2);
}, function(t2, e2) {
  if ("function" != typeof e2 && null !== e2) throw new TypeError("Class extends value " + String(e2) + " is not a constructor or null");
  function r2() {
    this.constructor = t2;
  }
  E(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (r2.prototype = e2.prototype, new r2());
});
var I = function(t2) {
  function e2(e3, r2) {
    var n2, o2, i2, a2 = this.constructor, s2 = t2.call(this, e3, r2) || this;
    return Object.defineProperty(s2, "name", { value: a2.name, enumerable: false, configurable: true }), n2 = s2, o2 = a2.prototype, (i2 = Object.setPrototypeOf) ? i2(n2, o2) : n2.__proto__ = o2, function(t3, e4) {
      void 0 === e4 && (e4 = t3.constructor);
      var r3 = Error.captureStackTrace;
      r3 && r3(t3, e4);
    }(s2), s2;
  }
  return m(e2, t2), e2;
}(Error);
var _ = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var T = function(t2) {
  function e2(e3) {
    void 0 === e3 && (e3 = void 0);
    var r2 = t2.call(this, e3) || this;
    return r2.message = e3, r2;
  }
  return _(e2, t2), e2.prototype.getKind = function() {
    return this.constructor.kind;
  }, e2.kind = "Exception", e2;
}(I);
var S = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var B = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return S(e2, t2), e2.kind = "ArgumentException", e2;
}(T);
var R = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var D = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return R(e2, t2), e2.kind = "IllegalArgumentException", e2;
}(T);
var N = function() {
  function t2(t3) {
    if (this.binarizer = t3, null === t3) throw new D("Binarizer must be non-null.");
  }
  return t2.prototype.getWidth = function() {
    return this.binarizer.getWidth();
  }, t2.prototype.getHeight = function() {
    return this.binarizer.getHeight();
  }, t2.prototype.getBlackRow = function(t3, e2) {
    return this.binarizer.getBlackRow(t3, e2);
  }, t2.prototype.getBlackMatrix = function() {
    return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
  }, t2.prototype.isCropSupported = function() {
    return this.binarizer.getLuminanceSource().isCropSupported();
  }, t2.prototype.crop = function(e2, r2, n2, o2) {
    var i2 = this.binarizer.getLuminanceSource().crop(e2, r2, n2, o2);
    return new t2(this.binarizer.createBinarizer(i2));
  }, t2.prototype.isRotateSupported = function() {
    return this.binarizer.getLuminanceSource().isRotateSupported();
  }, t2.prototype.rotateCounterClockwise = function() {
    var e2 = this.binarizer.getLuminanceSource().rotateCounterClockwise();
    return new t2(this.binarizer.createBinarizer(e2));
  }, t2.prototype.rotateCounterClockwise45 = function() {
    var e2 = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
    return new t2(this.binarizer.createBinarizer(e2));
  }, t2.prototype.toString = function() {
    try {
      return this.getBlackMatrix().toString();
    } catch (t3) {
      return "";
    }
  }, t2;
}();
var O = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var M = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return O(e2, t2), e2.getChecksumInstance = function() {
    return new e2();
  }, e2.kind = "ChecksumException", e2;
}(T);
var b = function() {
  function t2(t3) {
    this.source = t3;
  }
  return t2.prototype.getLuminanceSource = function() {
    return this.source;
  }, t2.prototype.getWidth = function() {
    return this.source.getWidth();
  }, t2.prototype.getHeight = function() {
    return this.source.getHeight();
  }, t2;
}();
var P = function() {
  function t2() {
  }
  return t2.arraycopy = function(t3, e2, r2, n2, o2) {
    for (; o2--; ) r2[n2++] = t3[e2++];
  }, t2.currentTimeMillis = function() {
    return Date.now();
  }, t2;
}();
var F = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var L = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return F(e2, t2), e2.kind = "IndexOutOfBoundsException", e2;
}(T);
var k = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var V = function(t2) {
  function e2(e3, r2) {
    void 0 === e3 && (e3 = void 0), void 0 === r2 && (r2 = void 0);
    var n2 = t2.call(this, r2) || this;
    return n2.index = e3, n2.message = r2, n2;
  }
  return k(e2, t2), e2.kind = "ArrayIndexOutOfBoundsException", e2;
}(L);
var x = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var G = function() {
  function t2() {
  }
  return t2.fill = function(t3, e2) {
    for (var r2 = 0, n2 = t3.length; r2 < n2; r2++) t3[r2] = e2;
  }, t2.fillWithin = function(e2, r2, n2, o2) {
    t2.rangeCheck(e2.length, r2, n2);
    for (var i2 = r2; i2 < n2; i2++) e2[i2] = o2;
  }, t2.rangeCheck = function(t3, e2, r2) {
    if (e2 > r2) throw new D("fromIndex(" + e2 + ") > toIndex(" + r2 + ")");
    if (e2 < 0) throw new V(e2);
    if (r2 > t3) throw new V(r2);
  }, t2.asList = function() {
    for (var t3 = [], e2 = 0; e2 < arguments.length; e2++) t3[e2] = arguments[e2];
    return t3;
  }, t2.create = function(t3, e2, r2) {
    return Array.from({ length: t3 }).map(function(t4) {
      return Array.from({ length: e2 }).fill(r2);
    });
  }, t2.createInt32Array = function(t3, e2, r2) {
    return Array.from({ length: t3 }).map(function(t4) {
      return Int32Array.from({ length: e2 }).fill(r2);
    });
  }, t2.equals = function(t3, e2) {
    if (!t3) return false;
    if (!e2) return false;
    if (!t3.length) return false;
    if (!e2.length) return false;
    if (t3.length !== e2.length) return false;
    for (var r2 = 0, n2 = t3.length; r2 < n2; r2++) if (t3[r2] !== e2[r2]) return false;
    return true;
  }, t2.hashCode = function(t3) {
    var e2, r2;
    if (null === t3) return 0;
    var n2 = 1;
    try {
      for (var o2 = x(t3), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        n2 = 31 * n2 + i2.value;
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return n2;
  }, t2.fillUint8Array = function(t3, e2) {
    for (var r2 = 0; r2 !== t3.length; r2++) t3[r2] = e2;
  }, t2.copyOf = function(t3, e2) {
    return t3.slice(0, e2);
  }, t2.copyOfUint8Array = function(t3, e2) {
    if (t3.length <= e2) {
      var r2 = new Uint8Array(e2);
      return r2.set(t3), r2;
    }
    return t3.slice(0, e2);
  }, t2.copyOfRange = function(t3, e2, r2) {
    var n2 = r2 - e2, o2 = new Int32Array(n2);
    return P.arraycopy(t3, e2, o2, 0, n2), o2;
  }, t2.binarySearch = function(e2, r2, n2) {
    void 0 === n2 && (n2 = t2.numberComparator);
    for (var o2 = 0, i2 = e2.length - 1; o2 <= i2; ) {
      var a2 = i2 + o2 >> 1, s2 = n2(r2, e2[a2]);
      if (s2 > 0) o2 = a2 + 1;
      else {
        if (!(s2 < 0)) return a2;
        i2 = a2 - 1;
      }
    }
    return -o2 - 1;
  }, t2.numberComparator = function(t3, e2) {
    return t3 - e2;
  }, t2;
}();
var Y = function() {
  function t2() {
  }
  return t2.numberOfTrailingZeros = function(t3) {
    var e2;
    if (0 === t3) return 32;
    var r2 = 31;
    return 0 !== (e2 = t3 << 16) && (r2 -= 16, t3 = e2), 0 !== (e2 = t3 << 8) && (r2 -= 8, t3 = e2), 0 !== (e2 = t3 << 4) && (r2 -= 4, t3 = e2), 0 !== (e2 = t3 << 2) && (r2 -= 2, t3 = e2), r2 - (t3 << 1 >>> 31);
  }, t2.numberOfLeadingZeros = function(t3) {
    if (0 === t3) return 32;
    var e2 = 1;
    return t3 >>> 16 == 0 && (e2 += 16, t3 <<= 16), t3 >>> 24 == 0 && (e2 += 8, t3 <<= 8), t3 >>> 28 == 0 && (e2 += 4, t3 <<= 4), t3 >>> 30 == 0 && (e2 += 2, t3 <<= 2), e2 -= t3 >>> 31;
  }, t2.toHexString = function(t3) {
    return t3.toString(16);
  }, t2.toBinaryString = function(t3) {
    return String(parseInt(String(t3), 2));
  }, t2.bitCount = function(t3) {
    return t3 = (t3 = (858993459 & (t3 -= t3 >>> 1 & 1431655765)) + (t3 >>> 2 & 858993459)) + (t3 >>> 4) & 252645135, t3 += t3 >>> 8, 63 & (t3 += t3 >>> 16);
  }, t2.truncDivision = function(t3, e2) {
    return Math.trunc(t3 / e2);
  }, t2.parseInt = function(t3, e2) {
    return void 0 === e2 && (e2 = void 0), parseInt(t3, e2);
  }, t2.MIN_VALUE_32_BITS = -2147483648, t2.MAX_VALUE = Number.MAX_SAFE_INTEGER, t2;
}();
var q = function() {
  function t2(e2, r2) {
    void 0 === e2 ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = e2, this.bits = null == r2 ? t2.makeArray(e2) : r2);
  }
  return t2.prototype.getSize = function() {
    return this.size;
  }, t2.prototype.getSizeInBytes = function() {
    return Math.floor((this.size + 7) / 8);
  }, t2.prototype.ensureCapacity = function(e2) {
    if (e2 > 32 * this.bits.length) {
      var r2 = t2.makeArray(e2);
      P.arraycopy(this.bits, 0, r2, 0, this.bits.length), this.bits = r2;
    }
  }, t2.prototype.get = function(t3) {
    return 0 != (this.bits[Math.floor(t3 / 32)] & 1 << (31 & t3));
  }, t2.prototype.set = function(t3) {
    this.bits[Math.floor(t3 / 32)] |= 1 << (31 & t3);
  }, t2.prototype.flip = function(t3) {
    this.bits[Math.floor(t3 / 32)] ^= 1 << (31 & t3);
  }, t2.prototype.getNextSet = function(t3) {
    var e2 = this.size;
    if (t3 >= e2) return e2;
    var r2 = this.bits, n2 = Math.floor(t3 / 32), o2 = r2[n2];
    o2 &= ~((1 << (31 & t3)) - 1);
    for (var i2 = r2.length; 0 === o2; ) {
      if (++n2 === i2) return e2;
      o2 = r2[n2];
    }
    var a2 = 32 * n2 + Y.numberOfTrailingZeros(o2);
    return a2 > e2 ? e2 : a2;
  }, t2.prototype.getNextUnset = function(t3) {
    var e2 = this.size;
    if (t3 >= e2) return e2;
    var r2 = this.bits, n2 = Math.floor(t3 / 32), o2 = ~r2[n2];
    o2 &= ~((1 << (31 & t3)) - 1);
    for (var i2 = r2.length; 0 === o2; ) {
      if (++n2 === i2) return e2;
      o2 = ~r2[n2];
    }
    var a2 = 32 * n2 + Y.numberOfTrailingZeros(o2);
    return a2 > e2 ? e2 : a2;
  }, t2.prototype.setBulk = function(t3, e2) {
    this.bits[Math.floor(t3 / 32)] = e2;
  }, t2.prototype.setRange = function(t3, e2) {
    if (e2 < t3 || t3 < 0 || e2 > this.size) throw new D();
    if (e2 !== t3) {
      e2--;
      for (var r2 = Math.floor(t3 / 32), n2 = Math.floor(e2 / 32), o2 = this.bits, i2 = r2; i2 <= n2; i2++) {
        var a2 = (2 << (i2 < n2 ? 31 : 31 & e2)) - (1 << (i2 > r2 ? 0 : 31 & t3));
        o2[i2] |= a2;
      }
    }
  }, t2.prototype.clear = function() {
    for (var t3 = this.bits.length, e2 = this.bits, r2 = 0; r2 < t3; r2++) e2[r2] = 0;
  }, t2.prototype.isRange = function(t3, e2, r2) {
    if (e2 < t3 || t3 < 0 || e2 > this.size) throw new D();
    if (e2 === t3) return true;
    e2--;
    for (var n2 = Math.floor(t3 / 32), o2 = Math.floor(e2 / 32), i2 = this.bits, a2 = n2; a2 <= o2; a2++) {
      var s2 = (2 << (a2 < o2 ? 31 : 31 & e2)) - (1 << (a2 > n2 ? 0 : 31 & t3)) & 4294967295;
      if ((i2[a2] & s2) !== (r2 ? s2 : 0)) return false;
    }
    return true;
  }, t2.prototype.appendBit = function(t3) {
    this.ensureCapacity(this.size + 1), t3 && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++;
  }, t2.prototype.appendBits = function(t3, e2) {
    if (e2 < 0 || e2 > 32) throw new D("Num bits must be between 0 and 32");
    this.ensureCapacity(this.size + e2);
    for (var r2 = e2; r2 > 0; r2--) this.appendBit(1 == (t3 >> r2 - 1 & 1));
  }, t2.prototype.appendBitArray = function(t3) {
    var e2 = t3.size;
    this.ensureCapacity(this.size + e2);
    for (var r2 = 0; r2 < e2; r2++) this.appendBit(t3.get(r2));
  }, t2.prototype.xor = function(t3) {
    if (this.size !== t3.size) throw new D("Sizes don't match");
    for (var e2 = this.bits, r2 = 0, n2 = e2.length; r2 < n2; r2++) e2[r2] ^= t3.bits[r2];
  }, t2.prototype.toBytes = function(t3, e2, r2, n2) {
    for (var o2 = 0; o2 < n2; o2++) {
      for (var i2 = 0, a2 = 0; a2 < 8; a2++) this.get(t3) && (i2 |= 1 << 7 - a2), t3++;
      e2[r2 + o2] = i2;
    }
  }, t2.prototype.getBitArray = function() {
    return this.bits;
  }, t2.prototype.reverse = function() {
    for (var t3 = new Int32Array(this.bits.length), e2 = Math.floor((this.size - 1) / 32), r2 = e2 + 1, n2 = this.bits, o2 = 0; o2 < r2; o2++) {
      var i2 = n2[o2];
      i2 = (i2 = (i2 = (i2 = (i2 = i2 >> 1 & 1431655765 | (1431655765 & i2) << 1) >> 2 & 858993459 | (858993459 & i2) << 2) >> 4 & 252645135 | (252645135 & i2) << 4) >> 8 & 16711935 | (16711935 & i2) << 8) >> 16 & 65535 | (65535 & i2) << 16, t3[e2 - o2] = i2;
    }
    if (this.size !== 32 * r2) {
      var a2 = 32 * r2 - this.size, s2 = t3[0] >>> a2;
      for (o2 = 1; o2 < r2; o2++) {
        var u2 = t3[o2];
        s2 |= u2 << 32 - a2, t3[o2 - 1] = s2, s2 = u2 >>> a2;
      }
      t3[r2 - 1] = s2;
    }
    this.bits = t3;
  }, t2.makeArray = function(t3) {
    return new Int32Array(Math.floor((t3 + 31) / 32));
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    return this.size === r2.size && G.equals(this.bits, r2.bits);
  }, t2.prototype.hashCode = function() {
    return 31 * this.size + G.hashCode(this.bits);
  }, t2.prototype.toString = function() {
    for (var t3 = "", e2 = 0, r2 = this.size; e2 < r2; e2++) 0 == (7 & e2) && (t3 += " "), t3 += this.get(e2) ? "X" : ".";
    return t3;
  }, t2.prototype.clone = function() {
    return new t2(this.size, this.bits.slice());
  }, t2.prototype.toArray = function() {
    for (var t3 = [], e2 = 0, r2 = this.size; e2 < r2; e2++) t3.push(this.get(e2));
    return t3;
  }, t2;
}();
!function(t2) {
  t2[t2.OTHER = 0] = "OTHER", t2[t2.PURE_BARCODE = 1] = "PURE_BARCODE", t2[t2.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", t2[t2.TRY_HARDER = 3] = "TRY_HARDER", t2[t2.CHARACTER_SET = 4] = "CHARACTER_SET", t2[t2.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", t2[t2.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", t2[t2.ASSUME_GS1 = 7] = "ASSUME_GS1", t2[t2.RETURN_CODABAR_START_END = 8] = "RETURN_CODABAR_START_END", t2[t2.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", t2[t2.ALLOWED_EAN_EXTENSIONS = 10] = "ALLOWED_EAN_EXTENSIONS";
}(v || (v = {}));
var U;
var H = v;
var W = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Q = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return W(e2, t2), e2.getFormatInstance = function() {
    return new e2();
  }, e2.kind = "FormatException", e2;
}(T);
var K = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
!function(t2) {
  t2[t2.Cp437 = 0] = "Cp437", t2[t2.ISO8859_1 = 1] = "ISO8859_1", t2[t2.ISO8859_2 = 2] = "ISO8859_2", t2[t2.ISO8859_3 = 3] = "ISO8859_3", t2[t2.ISO8859_4 = 4] = "ISO8859_4", t2[t2.ISO8859_5 = 5] = "ISO8859_5", t2[t2.ISO8859_6 = 6] = "ISO8859_6", t2[t2.ISO8859_7 = 7] = "ISO8859_7", t2[t2.ISO8859_8 = 8] = "ISO8859_8", t2[t2.ISO8859_9 = 9] = "ISO8859_9", t2[t2.ISO8859_10 = 10] = "ISO8859_10", t2[t2.ISO8859_11 = 11] = "ISO8859_11", t2[t2.ISO8859_13 = 12] = "ISO8859_13", t2[t2.ISO8859_14 = 13] = "ISO8859_14", t2[t2.ISO8859_15 = 14] = "ISO8859_15", t2[t2.ISO8859_16 = 15] = "ISO8859_16", t2[t2.SJIS = 16] = "SJIS", t2[t2.Cp1250 = 17] = "Cp1250", t2[t2.Cp1251 = 18] = "Cp1251", t2[t2.Cp1252 = 19] = "Cp1252", t2[t2.Cp1256 = 20] = "Cp1256", t2[t2.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", t2[t2.UTF8 = 22] = "UTF8", t2[t2.ASCII = 23] = "ASCII", t2[t2.Big5 = 24] = "Big5", t2[t2.GB18030 = 25] = "GB18030", t2[t2.EUC_KR = 26] = "EUC_KR";
}(U || (U = {}));
var X;
var Z = function() {
  function t2(e2, r2, n2) {
    for (var o2, i2, a2 = [], s2 = 3; s2 < arguments.length; s2++) a2[s2 - 3] = arguments[s2];
    this.valueIdentifier = e2, this.name = n2, this.values = "number" == typeof r2 ? Int32Array.from([r2]) : r2, this.otherEncodingNames = a2, t2.VALUE_IDENTIFIER_TO_ECI.set(e2, this), t2.NAME_TO_ECI.set(n2, this);
    for (var u2 = this.values, c2 = 0, f2 = u2.length; c2 !== f2; c2++) {
      var h2 = u2[c2];
      t2.VALUES_TO_ECI.set(h2, this);
    }
    try {
      for (var l2 = K(a2), d2 = l2.next(); !d2.done; d2 = l2.next()) {
        var p2 = d2.value;
        t2.NAME_TO_ECI.set(p2, this);
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
      } finally {
        if (o2) throw o2.error;
      }
    }
  }
  return t2.prototype.getValueIdentifier = function() {
    return this.valueIdentifier;
  }, t2.prototype.getName = function() {
    return this.name;
  }, t2.prototype.getValue = function() {
    return this.values[0];
  }, t2.getCharacterSetECIByValue = function(e2) {
    if (e2 < 0 || e2 >= 900) throw new Q("incorect value");
    var r2 = t2.VALUES_TO_ECI.get(e2);
    if (void 0 === r2) throw new Q("incorect value");
    return r2;
  }, t2.getCharacterSetECIByName = function(e2) {
    var r2 = t2.NAME_TO_ECI.get(e2);
    if (void 0 === r2) throw new Q("incorect value");
    return r2;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    return this.getName() === r2.getName();
  }, t2.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map(), t2.VALUES_TO_ECI = /* @__PURE__ */ new Map(), t2.NAME_TO_ECI = /* @__PURE__ */ new Map(), t2.Cp437 = new t2(U.Cp437, Int32Array.from([0, 2]), "Cp437"), t2.ISO8859_1 = new t2(U.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), t2.ISO8859_2 = new t2(U.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), t2.ISO8859_3 = new t2(U.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), t2.ISO8859_4 = new t2(U.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), t2.ISO8859_5 = new t2(U.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), t2.ISO8859_6 = new t2(U.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), t2.ISO8859_7 = new t2(U.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), t2.ISO8859_8 = new t2(U.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), t2.ISO8859_9 = new t2(U.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), t2.ISO8859_10 = new t2(U.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), t2.ISO8859_11 = new t2(U.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), t2.ISO8859_13 = new t2(U.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), t2.ISO8859_14 = new t2(U.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), t2.ISO8859_15 = new t2(U.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), t2.ISO8859_16 = new t2(U.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), t2.SJIS = new t2(U.SJIS, 20, "SJIS", "Shift_JIS"), t2.Cp1250 = new t2(U.Cp1250, 21, "Cp1250", "windows-1250"), t2.Cp1251 = new t2(U.Cp1251, 22, "Cp1251", "windows-1251"), t2.Cp1252 = new t2(U.Cp1252, 23, "Cp1252", "windows-1252"), t2.Cp1256 = new t2(U.Cp1256, 24, "Cp1256", "windows-1256"), t2.UnicodeBigUnmarked = new t2(U.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), t2.UTF8 = new t2(U.UTF8, 26, "UTF8", "UTF-8"), t2.ASCII = new t2(U.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), t2.Big5 = new t2(U.Big5, 28, "Big5"), t2.GB18030 = new t2(U.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), t2.EUC_KR = new t2(U.EUC_KR, 30, "EUC_KR", "EUC-KR"), t2;
}();
var j = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var z = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return j(e2, t2), e2.kind = "UnsupportedOperationException", e2;
}(T);
var J = function() {
  function t2() {
  }
  return t2.decode = function(t3, e2) {
    var r2 = this.encodingName(e2);
    return this.customDecoder ? this.customDecoder(t3, r2) : "undefined" == typeof TextDecoder || this.shouldDecodeOnFallback(r2) ? this.decodeFallback(t3, r2) : new TextDecoder(r2).decode(t3);
  }, t2.shouldDecodeOnFallback = function(e2) {
    return !t2.isBrowser() && "ISO-8859-1" === e2;
  }, t2.encode = function(t3, e2) {
    var r2 = this.encodingName(e2);
    return this.customEncoder ? this.customEncoder(t3, r2) : "undefined" == typeof TextEncoder ? this.encodeFallback(t3) : new TextEncoder().encode(t3);
  }, t2.isBrowser = function() {
    return "undefined" != typeof window && "[object Window]" === {}.toString.call(window);
  }, t2.encodingName = function(t3) {
    return "string" == typeof t3 ? t3 : t3.getName();
  }, t2.encodingCharacterSet = function(t3) {
    return t3 instanceof Z ? t3 : Z.getCharacterSetECIByName(t3);
  }, t2.decodeFallback = function(e2, r2) {
    var n2 = this.encodingCharacterSet(r2);
    if (t2.isDecodeFallbackSupported(n2)) {
      for (var o2 = "", i2 = 0, a2 = e2.length; i2 < a2; i2++) {
        var s2 = e2[i2].toString(16);
        s2.length < 2 && (s2 = "0" + s2), o2 += "%" + s2;
      }
      return decodeURIComponent(o2);
    }
    if (n2.equals(Z.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(e2.buffer));
    throw new z("Encoding " + this.encodingName(r2) + " not supported by fallback.");
  }, t2.isDecodeFallbackSupported = function(t3) {
    return t3.equals(Z.UTF8) || t3.equals(Z.ISO8859_1) || t3.equals(Z.ASCII);
  }, t2.encodeFallback = function(t3) {
    for (var e2 = btoa(unescape(encodeURIComponent(t3))).split(""), r2 = [], n2 = 0; n2 < e2.length; n2++) r2.push(e2[n2].charCodeAt(0));
    return new Uint8Array(r2);
  }, t2;
}();
var $ = function() {
  function t2() {
  }
  return t2.castAsNonUtf8Char = function(t3, e2) {
    void 0 === e2 && (e2 = null);
    var r2 = e2 ? e2.getName() : this.ISO88591;
    return J.decode(new Uint8Array([t3]), r2);
  }, t2.guessEncoding = function(e2, r2) {
    if (null != r2 && void 0 !== r2.get(H.CHARACTER_SET)) return r2.get(H.CHARACTER_SET).toString();
    for (var n2 = e2.length, o2 = true, i2 = true, a2 = true, s2 = 0, u2 = 0, c2 = 0, f2 = 0, h2 = 0, l2 = 0, d2 = 0, p2 = 0, g2 = 0, w2 = 0, A2 = 0, y2 = e2.length > 3 && 239 === e2[0] && 187 === e2[1] && 191 === e2[2], C2 = 0; C2 < n2 && (o2 || i2 || a2); C2++) {
      var E2 = 255 & e2[C2];
      a2 && (s2 > 0 ? 0 == (128 & E2) ? a2 = false : s2-- : 0 != (128 & E2) && (0 == (64 & E2) ? a2 = false : (s2++, 0 == (32 & E2) ? u2++ : (s2++, 0 == (16 & E2) ? c2++ : (s2++, 0 == (8 & E2) ? f2++ : a2 = false))))), o2 && (E2 > 127 && E2 < 160 ? o2 = false : E2 > 159 && (E2 < 192 || 215 === E2 || 247 === E2) && A2++), i2 && (h2 > 0 ? E2 < 64 || 127 === E2 || E2 > 252 ? i2 = false : h2-- : 128 === E2 || 160 === E2 || E2 > 239 ? i2 = false : E2 > 160 && E2 < 224 ? (l2++, p2 = 0, ++d2 > g2 && (g2 = d2)) : E2 > 127 ? (h2++, d2 = 0, ++p2 > w2 && (w2 = p2)) : (d2 = 0, p2 = 0));
    }
    return a2 && s2 > 0 && (a2 = false), i2 && h2 > 0 && (i2 = false), a2 && (y2 || u2 + c2 + f2 > 0) ? t2.UTF8 : i2 && (t2.ASSUME_SHIFT_JIS || g2 >= 3 || w2 >= 3) ? t2.SHIFT_JIS : o2 && i2 ? 2 === g2 && 2 === l2 || 10 * A2 >= n2 ? t2.SHIFT_JIS : t2.ISO88591 : o2 ? t2.ISO88591 : i2 ? t2.SHIFT_JIS : a2 ? t2.UTF8 : t2.PLATFORM_DEFAULT_ENCODING;
  }, t2.format = function(t3) {
    for (var e2 = [], r2 = 1; r2 < arguments.length; r2++) e2[r2 - 1] = arguments[r2];
    var n2 = -1;
    return t3.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function(t4, r3, o2, i2, a2, s2) {
      if ("%%" === t4) return "%";
      if (void 0 !== e2[++n2]) {
        t4 = i2 ? parseInt(i2.substr(1)) : void 0;
        var u2, c2 = a2 ? parseInt(a2.substr(1)) : void 0;
        switch (s2) {
          case "s":
            u2 = e2[n2];
            break;
          case "c":
            u2 = e2[n2][0];
            break;
          case "f":
            u2 = parseFloat(e2[n2]).toFixed(t4);
            break;
          case "p":
            u2 = parseFloat(e2[n2]).toPrecision(t4);
            break;
          case "e":
            u2 = parseFloat(e2[n2]).toExponential(t4);
            break;
          case "x":
            u2 = parseInt(e2[n2]).toString(c2 || 16);
            break;
          case "d":
            u2 = parseFloat(parseInt(e2[n2], c2 || 10).toPrecision(t4)).toFixed(0);
        }
        u2 = "object" == typeof u2 ? JSON.stringify(u2) : (+u2).toString(c2);
        for (var f2 = parseInt(o2), h2 = o2 && o2[0] + "" == "0" ? "0" : " "; u2.length < f2; ) u2 = void 0 !== r3 ? u2 + h2 : h2 + u2;
        return u2;
      }
    });
  }, t2.getBytes = function(t3, e2) {
    return J.encode(t3, e2);
  }, t2.getCharCode = function(t3, e2) {
    return void 0 === e2 && (e2 = 0), t3.charCodeAt(e2);
  }, t2.getCharAt = function(t3) {
    return String.fromCharCode(t3);
  }, t2.SHIFT_JIS = Z.SJIS.getName(), t2.GB2312 = "GB2312", t2.ISO88591 = Z.ISO8859_1.getName(), t2.EUC_JP = "EUC_JP", t2.UTF8 = Z.UTF8.getName(), t2.PLATFORM_DEFAULT_ENCODING = t2.UTF8, t2.ASSUME_SHIFT_JIS = false, t2;
}();
var tt = function() {
  function t2(t3) {
    void 0 === t3 && (t3 = ""), this.value = t3;
  }
  return t2.prototype.enableDecoding = function(t3) {
    return this.encoding = t3, this;
  }, t2.prototype.append = function(t3) {
    return "string" == typeof t3 ? this.value += t3.toString() : this.encoding ? this.value += $.castAsNonUtf8Char(t3, this.encoding) : this.value += String.fromCharCode(t3), this;
  }, t2.prototype.appendChars = function(t3, e2, r2) {
    for (var n2 = e2; e2 < e2 + r2; n2++) this.append(t3[n2]);
    return this;
  }, t2.prototype.length = function() {
    return this.value.length;
  }, t2.prototype.charAt = function(t3) {
    return this.value.charAt(t3);
  }, t2.prototype.deleteCharAt = function(t3) {
    this.value = this.value.substr(0, t3) + this.value.substring(t3 + 1);
  }, t2.prototype.setCharAt = function(t3, e2) {
    this.value = this.value.substr(0, t3) + e2 + this.value.substr(t3 + 1);
  }, t2.prototype.substring = function(t3, e2) {
    return this.value.substring(t3, e2);
  }, t2.prototype.setLengthToZero = function() {
    this.value = "";
  }, t2.prototype.toString = function() {
    return this.value;
  }, t2.prototype.insert = function(t3, e2) {
    this.value = this.value.substring(0, t3) + e2 + this.value.substring(t3);
  }, t2;
}();
var et = function() {
  function t2(t3, e2, r2, n2) {
    if (this.width = t3, this.height = e2, this.rowSize = r2, this.bits = n2, null == e2 && (e2 = t3), this.height = e2, t3 < 1 || e2 < 1) throw new D("Both dimensions must be greater than 0");
    null == r2 && (r2 = Math.floor((t3 + 31) / 32)), this.rowSize = r2, null == n2 && (this.bits = new Int32Array(this.rowSize * this.height));
  }
  return t2.parseFromBooleanArray = function(e2) {
    for (var r2 = e2.length, n2 = e2[0].length, o2 = new t2(n2, r2), i2 = 0; i2 < r2; i2++) for (var a2 = e2[i2], s2 = 0; s2 < n2; s2++) a2[s2] && o2.set(s2, i2);
    return o2;
  }, t2.parseFromString = function(e2, r2, n2) {
    if (null === e2) throw new D("stringRepresentation cannot be null");
    for (var o2 = new Array(e2.length), i2 = 0, a2 = 0, s2 = -1, u2 = 0, c2 = 0; c2 < e2.length; ) if ("\n" === e2.charAt(c2) || "\r" === e2.charAt(c2)) {
      if (i2 > a2) {
        if (-1 === s2) s2 = i2 - a2;
        else if (i2 - a2 !== s2) throw new D("row lengths do not match");
        a2 = i2, u2++;
      }
      c2++;
    } else if (e2.substring(c2, c2 + r2.length) === r2) c2 += r2.length, o2[i2] = true, i2++;
    else {
      if (e2.substring(c2, c2 + n2.length) !== n2) throw new D("illegal character encountered: " + e2.substring(c2));
      c2 += n2.length, o2[i2] = false, i2++;
    }
    if (i2 > a2) {
      if (-1 === s2) s2 = i2 - a2;
      else if (i2 - a2 !== s2) throw new D("row lengths do not match");
      u2++;
    }
    for (var f2 = new t2(s2, u2), h2 = 0; h2 < i2; h2++) o2[h2] && f2.set(Math.floor(h2 % s2), Math.floor(h2 / s2));
    return f2;
  }, t2.prototype.get = function(t3, e2) {
    var r2 = e2 * this.rowSize + Math.floor(t3 / 32);
    return 0 != (this.bits[r2] >>> (31 & t3) & 1);
  }, t2.prototype.set = function(t3, e2) {
    var r2 = e2 * this.rowSize + Math.floor(t3 / 32);
    this.bits[r2] |= 1 << (31 & t3) & 4294967295;
  }, t2.prototype.unset = function(t3, e2) {
    var r2 = e2 * this.rowSize + Math.floor(t3 / 32);
    this.bits[r2] &= ~(1 << (31 & t3) & 4294967295);
  }, t2.prototype.flip = function(t3, e2) {
    var r2 = e2 * this.rowSize + Math.floor(t3 / 32);
    this.bits[r2] ^= 1 << (31 & t3) & 4294967295;
  }, t2.prototype.xor = function(t3) {
    if (this.width !== t3.getWidth() || this.height !== t3.getHeight() || this.rowSize !== t3.getRowSize()) throw new D("input matrix dimensions do not match");
    for (var e2 = new q(Math.floor(this.width / 32) + 1), r2 = this.rowSize, n2 = this.bits, o2 = 0, i2 = this.height; o2 < i2; o2++) for (var a2 = o2 * r2, s2 = t3.getRow(o2, e2).getBitArray(), u2 = 0; u2 < r2; u2++) n2[a2 + u2] ^= s2[u2];
  }, t2.prototype.clear = function() {
    for (var t3 = this.bits, e2 = t3.length, r2 = 0; r2 < e2; r2++) t3[r2] = 0;
  }, t2.prototype.setRegion = function(t3, e2, r2, n2) {
    if (e2 < 0 || t3 < 0) throw new D("Left and top must be nonnegative");
    if (n2 < 1 || r2 < 1) throw new D("Height and width must be at least 1");
    var o2 = t3 + r2, i2 = e2 + n2;
    if (i2 > this.height || o2 > this.width) throw new D("The region must fit inside the matrix");
    for (var a2 = this.rowSize, s2 = this.bits, u2 = e2; u2 < i2; u2++) for (var c2 = u2 * a2, f2 = t3; f2 < o2; f2++) s2[c2 + Math.floor(f2 / 32)] |= 1 << (31 & f2) & 4294967295;
  }, t2.prototype.getRow = function(t3, e2) {
    null == e2 || e2.getSize() < this.width ? e2 = new q(this.width) : e2.clear();
    for (var r2 = this.rowSize, n2 = this.bits, o2 = t3 * r2, i2 = 0; i2 < r2; i2++) e2.setBulk(32 * i2, n2[o2 + i2]);
    return e2;
  }, t2.prototype.setRow = function(t3, e2) {
    P.arraycopy(e2.getBitArray(), 0, this.bits, t3 * this.rowSize, this.rowSize);
  }, t2.prototype.rotate180 = function() {
    for (var t3 = this.getWidth(), e2 = this.getHeight(), r2 = new q(t3), n2 = new q(t3), o2 = 0, i2 = Math.floor((e2 + 1) / 2); o2 < i2; o2++) r2 = this.getRow(o2, r2), n2 = this.getRow(e2 - 1 - o2, n2), r2.reverse(), n2.reverse(), this.setRow(o2, n2), this.setRow(e2 - 1 - o2, r2);
  }, t2.prototype.getEnclosingRectangle = function() {
    for (var t3 = this.width, e2 = this.height, r2 = this.rowSize, n2 = this.bits, o2 = t3, i2 = e2, a2 = -1, s2 = -1, u2 = 0; u2 < e2; u2++) for (var c2 = 0; c2 < r2; c2++) {
      var f2 = n2[u2 * r2 + c2];
      if (0 !== f2) {
        if (u2 < i2 && (i2 = u2), u2 > s2 && (s2 = u2), 32 * c2 < o2) {
          for (var h2 = 0; 0 == (f2 << 31 - h2 & 4294967295); ) h2++;
          32 * c2 + h2 < o2 && (o2 = 32 * c2 + h2);
        }
        if (32 * c2 + 31 > a2) {
          for (h2 = 31; f2 >>> h2 == 0; ) h2--;
          32 * c2 + h2 > a2 && (a2 = 32 * c2 + h2);
        }
      }
    }
    return a2 < o2 || s2 < i2 ? null : Int32Array.from([o2, i2, a2 - o2 + 1, s2 - i2 + 1]);
  }, t2.prototype.getTopLeftOnBit = function() {
    for (var t3 = this.rowSize, e2 = this.bits, r2 = 0; r2 < e2.length && 0 === e2[r2]; ) r2++;
    if (r2 === e2.length) return null;
    for (var n2 = r2 / t3, o2 = r2 % t3 * 32, i2 = e2[r2], a2 = 0; 0 == (i2 << 31 - a2 & 4294967295); ) a2++;
    return o2 += a2, Int32Array.from([o2, n2]);
  }, t2.prototype.getBottomRightOnBit = function() {
    for (var t3 = this.rowSize, e2 = this.bits, r2 = e2.length - 1; r2 >= 0 && 0 === e2[r2]; ) r2--;
    if (r2 < 0) return null;
    for (var n2 = Math.floor(r2 / t3), o2 = 32 * Math.floor(r2 % t3), i2 = e2[r2], a2 = 31; i2 >>> a2 == 0; ) a2--;
    return o2 += a2, Int32Array.from([o2, n2]);
  }, t2.prototype.getWidth = function() {
    return this.width;
  }, t2.prototype.getHeight = function() {
    return this.height;
  }, t2.prototype.getRowSize = function() {
    return this.rowSize;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    return this.width === r2.width && this.height === r2.height && this.rowSize === r2.rowSize && G.equals(this.bits, r2.bits);
  }, t2.prototype.hashCode = function() {
    var t3 = this.width;
    return t3 = 31 * (t3 = 31 * (t3 = 31 * (t3 = 31 * t3 + this.width) + this.height) + this.rowSize) + G.hashCode(this.bits);
  }, t2.prototype.toString = function(t3, e2, r2) {
    return void 0 === t3 && (t3 = "X "), void 0 === e2 && (e2 = "  "), void 0 === r2 && (r2 = "\n"), this.buildToString(t3, e2, r2);
  }, t2.prototype.buildToString = function(t3, e2, r2) {
    for (var n2 = new tt(), o2 = 0, i2 = this.height; o2 < i2; o2++) {
      for (var a2 = 0, s2 = this.width; a2 < s2; a2++) n2.append(this.get(a2, o2) ? t3 : e2);
      n2.append(r2);
    }
    return n2.toString();
  }, t2.prototype.clone = function() {
    return new t2(this.width, this.height, this.rowSize, this.bits.slice());
  }, t2;
}();
var rt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var nt = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return rt(e2, t2), e2.getNotFoundInstance = function() {
    return new e2();
  }, e2.kind = "NotFoundException", e2;
}(T);
var ot = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var it = function(t2) {
  function e2(r2) {
    var n2 = t2.call(this, r2) || this;
    return n2.luminances = e2.EMPTY, n2.buckets = new Int32Array(e2.LUMINANCE_BUCKETS), n2;
  }
  return ot(e2, t2), e2.prototype.getBlackRow = function(t3, r2) {
    var n2 = this.getLuminanceSource(), o2 = n2.getWidth();
    null == r2 || r2.getSize() < o2 ? r2 = new q(o2) : r2.clear(), this.initArrays(o2);
    for (var i2 = n2.getRow(t3, this.luminances), a2 = this.buckets, s2 = 0; s2 < o2; s2++) a2[(255 & i2[s2]) >> e2.LUMINANCE_SHIFT]++;
    var u2 = e2.estimateBlackPoint(a2);
    if (o2 < 3) for (s2 = 0; s2 < o2; s2++) (255 & i2[s2]) < u2 && r2.set(s2);
    else {
      var c2 = 255 & i2[0], f2 = 255 & i2[1];
      for (s2 = 1; s2 < o2 - 1; s2++) {
        var h2 = 255 & i2[s2 + 1];
        (4 * f2 - c2 - h2) / 2 < u2 && r2.set(s2), c2 = f2, f2 = h2;
      }
    }
    return r2;
  }, e2.prototype.getBlackMatrix = function() {
    var t3 = this.getLuminanceSource(), r2 = t3.getWidth(), n2 = t3.getHeight(), o2 = new et(r2, n2);
    this.initArrays(r2);
    for (var i2 = this.buckets, a2 = 1; a2 < 5; a2++) for (var s2 = Math.floor(n2 * a2 / 5), u2 = t3.getRow(s2, this.luminances), c2 = Math.floor(4 * r2 / 5), f2 = Math.floor(r2 / 5); f2 < c2; f2++) {
      i2[(255 & u2[f2]) >> e2.LUMINANCE_SHIFT]++;
    }
    var h2 = e2.estimateBlackPoint(i2), l2 = t3.getMatrix();
    for (a2 = 0; a2 < n2; a2++) {
      var d2 = a2 * r2;
      for (f2 = 0; f2 < r2; f2++) {
        (255 & l2[d2 + f2]) < h2 && o2.set(f2, a2);
      }
    }
    return o2;
  }, e2.prototype.createBinarizer = function(t3) {
    return new e2(t3);
  }, e2.prototype.initArrays = function(t3) {
    this.luminances.length < t3 && (this.luminances = new Uint8ClampedArray(t3));
    for (var r2 = this.buckets, n2 = 0; n2 < e2.LUMINANCE_BUCKETS; n2++) r2[n2] = 0;
  }, e2.estimateBlackPoint = function(t3) {
    for (var r2 = t3.length, n2 = 0, o2 = 0, i2 = 0, a2 = 0; a2 < r2; a2++) t3[a2] > i2 && (o2 = a2, i2 = t3[a2]), t3[a2] > n2 && (n2 = t3[a2]);
    var s2 = 0, u2 = 0;
    for (a2 = 0; a2 < r2; a2++) {
      var c2 = a2 - o2;
      (d2 = t3[a2] * c2 * c2) > u2 && (s2 = a2, u2 = d2);
    }
    if (o2 > s2) {
      var f2 = o2;
      o2 = s2, s2 = f2;
    }
    if (s2 - o2 <= r2 / 16) throw new nt();
    var h2 = s2 - 1, l2 = -1;
    for (a2 = s2 - 1; a2 > o2; a2--) {
      var d2, p2 = a2 - o2;
      (d2 = p2 * p2 * (s2 - a2) * (n2 - t3[a2])) > l2 && (h2 = a2, l2 = d2);
    }
    return h2 << e2.LUMINANCE_SHIFT;
  }, e2.LUMINANCE_BITS = 5, e2.LUMINANCE_SHIFT = 8 - e2.LUMINANCE_BITS, e2.LUMINANCE_BUCKETS = 1 << e2.LUMINANCE_BITS, e2.EMPTY = Uint8ClampedArray.from([0]), e2;
}(b);
var at = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var st = function(t2) {
  function e2(e3) {
    var r2 = t2.call(this, e3) || this;
    return r2.matrix = null, r2;
  }
  return at(e2, t2), e2.prototype.getBlackMatrix = function() {
    if (null !== this.matrix) return this.matrix;
    var r2 = this.getLuminanceSource(), n2 = r2.getWidth(), o2 = r2.getHeight();
    if (n2 >= e2.MINIMUM_DIMENSION && o2 >= e2.MINIMUM_DIMENSION) {
      var i2 = r2.getMatrix(), a2 = n2 >> e2.BLOCK_SIZE_POWER;
      0 != (n2 & e2.BLOCK_SIZE_MASK) && a2++;
      var s2 = o2 >> e2.BLOCK_SIZE_POWER;
      0 != (o2 & e2.BLOCK_SIZE_MASK) && s2++;
      var u2 = e2.calculateBlackPoints(i2, a2, s2, n2, o2), c2 = new et(n2, o2);
      e2.calculateThresholdForBlock(i2, a2, s2, n2, o2, u2, c2), this.matrix = c2;
    } else this.matrix = t2.prototype.getBlackMatrix.call(this);
    return this.matrix;
  }, e2.prototype.createBinarizer = function(t3) {
    return new e2(t3);
  }, e2.calculateThresholdForBlock = function(t3, r2, n2, o2, i2, a2, s2) {
    for (var u2 = i2 - e2.BLOCK_SIZE, c2 = o2 - e2.BLOCK_SIZE, f2 = 0; f2 < n2; f2++) {
      var h2 = f2 << e2.BLOCK_SIZE_POWER;
      h2 > u2 && (h2 = u2);
      for (var l2 = e2.cap(f2, 2, n2 - 3), d2 = 0; d2 < r2; d2++) {
        var p2 = d2 << e2.BLOCK_SIZE_POWER;
        p2 > c2 && (p2 = c2);
        for (var g2 = e2.cap(d2, 2, r2 - 3), w2 = 0, A2 = -2; A2 <= 2; A2++) {
          var y2 = a2[l2 + A2];
          w2 += y2[g2 - 2] + y2[g2 - 1] + y2[g2] + y2[g2 + 1] + y2[g2 + 2];
        }
        var C2 = w2 / 25;
        e2.thresholdBlock(t3, p2, h2, C2, o2, s2);
      }
    }
  }, e2.cap = function(t3, e3, r2) {
    return t3 < e3 ? e3 : t3 > r2 ? r2 : t3;
  }, e2.thresholdBlock = function(t3, r2, n2, o2, i2, a2) {
    for (var s2 = 0, u2 = n2 * i2 + r2; s2 < e2.BLOCK_SIZE; s2++, u2 += i2) for (var c2 = 0; c2 < e2.BLOCK_SIZE; c2++) (255 & t3[u2 + c2]) <= o2 && a2.set(r2 + c2, n2 + s2);
  }, e2.calculateBlackPoints = function(t3, r2, n2, o2, i2) {
    for (var a2 = i2 - e2.BLOCK_SIZE, s2 = o2 - e2.BLOCK_SIZE, u2 = new Array(n2), c2 = 0; c2 < n2; c2++) {
      u2[c2] = new Int32Array(r2);
      var f2 = c2 << e2.BLOCK_SIZE_POWER;
      f2 > a2 && (f2 = a2);
      for (var h2 = 0; h2 < r2; h2++) {
        var l2 = h2 << e2.BLOCK_SIZE_POWER;
        l2 > s2 && (l2 = s2);
        for (var d2 = 0, p2 = 255, g2 = 0, w2 = 0, A2 = f2 * o2 + l2; w2 < e2.BLOCK_SIZE; w2++, A2 += o2) {
          for (var y2 = 0; y2 < e2.BLOCK_SIZE; y2++) {
            var C2 = 255 & t3[A2 + y2];
            d2 += C2, C2 < p2 && (p2 = C2), C2 > g2 && (g2 = C2);
          }
          if (g2 - p2 > e2.MIN_DYNAMIC_RANGE) for (w2++, A2 += o2; w2 < e2.BLOCK_SIZE; w2++, A2 += o2) for (y2 = 0; y2 < e2.BLOCK_SIZE; y2++) d2 += 255 & t3[A2 + y2];
        }
        var E2 = d2 >> 2 * e2.BLOCK_SIZE_POWER;
        if (g2 - p2 <= e2.MIN_DYNAMIC_RANGE && (E2 = p2 / 2, c2 > 0 && h2 > 0)) {
          var v2 = (u2[c2 - 1][h2] + 2 * u2[c2][h2 - 1] + u2[c2 - 1][h2 - 1]) / 4;
          p2 < v2 && (E2 = v2);
        }
        u2[c2][h2] = E2;
      }
    }
    return u2;
  }, e2.BLOCK_SIZE_POWER = 3, e2.BLOCK_SIZE = 1 << e2.BLOCK_SIZE_POWER, e2.BLOCK_SIZE_MASK = e2.BLOCK_SIZE - 1, e2.MINIMUM_DIMENSION = 5 * e2.BLOCK_SIZE, e2.MIN_DYNAMIC_RANGE = 24, e2;
}(it);
var ut = function() {
  function t2(t3, e2) {
    this.width = t3, this.height = e2;
  }
  return t2.prototype.getWidth = function() {
    return this.width;
  }, t2.prototype.getHeight = function() {
    return this.height;
  }, t2.prototype.isCropSupported = function() {
    return false;
  }, t2.prototype.crop = function(t3, e2, r2, n2) {
    throw new z("This luminance source does not support cropping.");
  }, t2.prototype.isRotateSupported = function() {
    return false;
  }, t2.prototype.rotateCounterClockwise = function() {
    throw new z("This luminance source does not support rotation by 90 degrees.");
  }, t2.prototype.rotateCounterClockwise45 = function() {
    throw new z("This luminance source does not support rotation by 45 degrees.");
  }, t2.prototype.toString = function() {
    for (var t3 = new Uint8ClampedArray(this.width), e2 = new tt(), r2 = 0; r2 < this.height; r2++) {
      for (var n2 = this.getRow(r2, t3), o2 = 0; o2 < this.width; o2++) {
        var i2 = 255 & n2[o2], a2 = void 0;
        a2 = i2 < 64 ? "#" : i2 < 128 ? "+" : i2 < 192 ? "." : " ", e2.append(a2);
      }
      e2.append("\n");
    }
    return e2.toString();
  }, t2;
}();
var ct = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ft = function(t2) {
  function e2(e3) {
    var r2 = t2.call(this, e3.getWidth(), e3.getHeight()) || this;
    return r2.delegate = e3, r2;
  }
  return ct(e2, t2), e2.prototype.getRow = function(t3, e3) {
    for (var r2 = this.delegate.getRow(t3, e3), n2 = this.getWidth(), o2 = 0; o2 < n2; o2++) r2[o2] = 255 - (255 & r2[o2]);
    return r2;
  }, e2.prototype.getMatrix = function() {
    for (var t3 = this.delegate.getMatrix(), e3 = this.getWidth() * this.getHeight(), r2 = new Uint8ClampedArray(e3), n2 = 0; n2 < e3; n2++) r2[n2] = 255 - (255 & t3[n2]);
    return r2;
  }, e2.prototype.isCropSupported = function() {
    return this.delegate.isCropSupported();
  }, e2.prototype.crop = function(t3, r2, n2, o2) {
    return new e2(this.delegate.crop(t3, r2, n2, o2));
  }, e2.prototype.isRotateSupported = function() {
    return this.delegate.isRotateSupported();
  }, e2.prototype.invert = function() {
    return this.delegate;
  }, e2.prototype.rotateCounterClockwise = function() {
    return new e2(this.delegate.rotateCounterClockwise());
  }, e2.prototype.rotateCounterClockwise45 = function() {
    return new e2(this.delegate.rotateCounterClockwise45());
  }, e2;
}(ut);
var ht = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var lt = function(t2) {
  function e2(r2) {
    var n2 = t2.call(this, r2.width, r2.height) || this;
    return n2.canvas = r2, n2.tempCanvasElement = null, n2.buffer = e2.makeBufferFromCanvasImageData(r2), n2;
  }
  return ht(e2, t2), e2.makeBufferFromCanvasImageData = function(t3) {
    var r2 = t3.getContext("2d").getImageData(0, 0, t3.width, t3.height);
    return e2.toGrayscaleBuffer(r2.data, t3.width, t3.height);
  }, e2.toGrayscaleBuffer = function(t3, r2, n2) {
    var o2 = new Uint8ClampedArray(r2 * n2);
    if (e2.FRAME_INDEX = !e2.FRAME_INDEX, e2.FRAME_INDEX) for (var i2 = 0, a2 = 0, s2 = t3.length; i2 < s2; i2 += 4, a2++) {
      var u2 = void 0;
      if (0 === t3[i2 + 3]) u2 = 255;
      else u2 = 306 * t3[i2] + 601 * t3[i2 + 1] + 117 * t3[i2 + 2] + 512 >> 10;
      o2[a2] = u2;
    }
    else {
      i2 = 0, a2 = 0;
      for (var c2 = t3.length; i2 < c2; i2 += 4, a2++) {
        u2 = void 0;
        if (0 === t3[i2 + 3]) u2 = 255;
        else u2 = 306 * t3[i2] + 601 * t3[i2 + 1] + 117 * t3[i2 + 2] + 512 >> 10;
        o2[a2] = 255 - u2;
      }
    }
    return o2;
  }, e2.prototype.getRow = function(t3, e3) {
    if (t3 < 0 || t3 >= this.getHeight()) throw new D("Requested row is outside the image: " + t3);
    var r2 = this.getWidth(), n2 = t3 * r2;
    return null === e3 ? e3 = this.buffer.slice(n2, n2 + r2) : (e3.length < r2 && (e3 = new Uint8ClampedArray(r2)), e3.set(this.buffer.slice(n2, n2 + r2))), e3;
  }, e2.prototype.getMatrix = function() {
    return this.buffer;
  }, e2.prototype.isCropSupported = function() {
    return true;
  }, e2.prototype.crop = function(e3, r2, n2, o2) {
    return t2.prototype.crop.call(this, e3, r2, n2, o2), this;
  }, e2.prototype.isRotateSupported = function() {
    return true;
  }, e2.prototype.rotateCounterClockwise = function() {
    return this.rotate(-90), this;
  }, e2.prototype.rotateCounterClockwise45 = function() {
    return this.rotate(-45), this;
  }, e2.prototype.getTempCanvasElement = function() {
    if (null === this.tempCanvasElement) {
      var t3 = this.canvas.ownerDocument.createElement("canvas");
      t3.width = this.canvas.width, t3.height = this.canvas.height, this.tempCanvasElement = t3;
    }
    return this.tempCanvasElement;
  }, e2.prototype.rotate = function(t3) {
    var r2 = this.getTempCanvasElement(), n2 = r2.getContext("2d"), o2 = t3 * e2.DEGREE_TO_RADIANS, i2 = this.canvas.width, a2 = this.canvas.height, s2 = Math.ceil(Math.abs(Math.cos(o2)) * i2 + Math.abs(Math.sin(o2)) * a2), u2 = Math.ceil(Math.abs(Math.sin(o2)) * i2 + Math.abs(Math.cos(o2)) * a2);
    return r2.width = s2, r2.height = u2, n2.translate(s2 / 2, u2 / 2), n2.rotate(o2), n2.drawImage(this.canvas, i2 / -2, a2 / -2), this.buffer = e2.makeBufferFromCanvasImageData(r2), this;
  }, e2.prototype.invert = function() {
    return new ft(this);
  }, e2.DEGREE_TO_RADIANS = Math.PI / 180, e2.FRAME_INDEX = true, e2;
}(ut);
var dt = function() {
  function t2(t3, e2, r2) {
    this.deviceId = t3, this.label = e2, this.kind = "videoinput", this.groupId = r2 || void 0;
  }
  return t2.prototype.toJSON = function() {
    return { kind: this.kind, groupId: this.groupId, deviceId: this.deviceId, label: this.label };
  }, t2;
}();
var pt = function(t2, e2, r2, n2) {
  return new (r2 || (r2 = Promise))(function(o2, i2) {
    function a2(t3) {
      try {
        u2(n2.next(t3));
      } catch (t4) {
        i2(t4);
      }
    }
    function s2(t3) {
      try {
        u2(n2.throw(t3));
      } catch (t4) {
        i2(t4);
      }
    }
    function u2(t3) {
      var e3;
      t3.done ? o2(t3.value) : (e3 = t3.value, e3 instanceof r2 ? e3 : new r2(function(t4) {
        t4(e3);
      })).then(a2, s2);
    }
    u2((n2 = n2.apply(t2, e2 || [])).next());
  });
};
var gt = function(t2, e2) {
  var r2, n2, o2, i2, a2 = { label: 0, sent: function() {
    if (1 & o2[0]) throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
    return this;
  }), i2;
  function s2(i3) {
    return function(s3) {
      return function(i4) {
        if (r2) throw new TypeError("Generator is already executing.");
        for (; a2; ) try {
          if (r2 = 1, n2 && (o2 = 2 & i4[0] ? n2.return : i4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, i4[1])).done) return o2;
          switch (n2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
            case 0:
            case 1:
              o2 = i4;
              break;
            case 4:
              return a2.label++, { value: i4[1], done: false };
            case 5:
              a2.label++, n2 = i4[1], i4 = [0];
              continue;
            case 7:
              i4 = a2.ops.pop(), a2.trys.pop();
              continue;
            default:
              if (!(o2 = a2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                a2 = 0;
                continue;
              }
              if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                a2.label = i4[1];
                break;
              }
              if (6 === i4[0] && a2.label < o2[1]) {
                a2.label = o2[1], o2 = i4;
                break;
              }
              if (o2 && a2.label < o2[2]) {
                a2.label = o2[2], a2.ops.push(i4);
                break;
              }
              o2[2] && a2.ops.pop(), a2.trys.pop();
              continue;
          }
          i4 = e2.call(t2, a2);
        } catch (t3) {
          i4 = [6, t3], n2 = 0;
        } finally {
          r2 = o2 = 0;
        }
        if (5 & i4[0]) throw i4[1];
        return { value: i4[0] ? i4[1] : void 0, done: true };
      }([i3, s3]);
    };
  }
};
var wt = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var At = function() {
  function t2(t3, e2, r2) {
    void 0 === e2 && (e2 = 500), this.reader = t3, this.timeBetweenScansMillis = e2, this._hints = r2, this._stopContinuousDecode = false, this._stopAsyncDecode = false, this._timeBetweenDecodingAttempts = 0;
  }
  return Object.defineProperty(t2.prototype, "hasNavigator", { get: function() {
    return "undefined" != typeof navigator;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "isMediaDevicesSuported", { get: function() {
    return this.hasNavigator && !!navigator.mediaDevices;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "canEnumerateDevices", { get: function() {
    return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices);
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "timeBetweenDecodingAttempts", { get: function() {
    return this._timeBetweenDecodingAttempts;
  }, set: function(t3) {
    this._timeBetweenDecodingAttempts = t3 < 0 ? 0 : t3;
  }, enumerable: false, configurable: true }), Object.defineProperty(t2.prototype, "hints", { get: function() {
    return this._hints;
  }, set: function(t3) {
    this._hints = t3 || null;
  }, enumerable: false, configurable: true }), t2.prototype.listVideoInputDevices = function() {
    return pt(this, void 0, void 0, function() {
      var t3, e2, r2, n2, o2, i2, a2, s2, u2, c2, f2, h2;
      return gt(this, function(l2) {
        switch (l2.label) {
          case 0:
            if (!this.hasNavigator) throw new Error("Can't enumerate devices, navigator is not present.");
            if (!this.canEnumerateDevices) throw new Error("Can't enumerate devices, method not supported.");
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 1:
            t3 = l2.sent(), e2 = [];
            try {
              for (r2 = wt(t3), n2 = r2.next(); !n2.done; n2 = r2.next()) o2 = n2.value, "videoinput" === (i2 = "video" === o2.kind ? "videoinput" : o2.kind) && (a2 = o2.deviceId || o2.id, s2 = o2.label || "Video device " + (e2.length + 1), u2 = o2.groupId, c2 = { deviceId: a2, label: s2, kind: i2, groupId: u2 }, e2.push(c2));
            } catch (t4) {
              f2 = { error: t4 };
            } finally {
              try {
                n2 && !n2.done && (h2 = r2.return) && h2.call(r2);
              } finally {
                if (f2) throw f2.error;
              }
            }
            return [2, e2];
        }
      });
    });
  }, t2.prototype.getVideoInputDevices = function() {
    return pt(this, void 0, void 0, function() {
      return gt(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            return [2, t3.sent().map(function(t4) {
              return new dt(t4.deviceId, t4.label);
            })];
        }
      });
    });
  }, t2.prototype.findDeviceById = function(t3) {
    return pt(this, void 0, void 0, function() {
      var e2;
      return gt(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            return (e2 = r2.sent()) ? [2, e2.find(function(e3) {
              return e3.deviceId === t3;
            })] : [2, null];
        }
      });
    });
  }, t2.prototype.decodeFromInputVideoDevice = function(t3, e2) {
    return pt(this, void 0, void 0, function() {
      return gt(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.decodeOnceFromVideoDevice(t3, e2)];
          case 1:
            return [2, r2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromVideoDevice = function(t3, e2) {
    return pt(this, void 0, void 0, function() {
      var r2;
      return gt(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.reset(), r2 = { video: t3 ? { deviceId: { exact: t3 } } : { facingMode: "environment" } }, [4, this.decodeOnceFromConstraints(r2, e2)];
          case 1:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromConstraints = function(t3, e2) {
    return pt(this, void 0, void 0, function() {
      var r2;
      return gt(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t3)];
          case 1:
            return r2 = n2.sent(), [4, this.decodeOnceFromStream(r2, e2)];
          case 2:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeOnceFromStream = function(t3, e2) {
    return pt(this, void 0, void 0, function() {
      var r2;
      return gt(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.reset(), [4, this.attachStreamToVideo(t3, e2)];
          case 1:
            return r2 = n2.sent(), [4, this.decodeOnce(r2)];
          case 2:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromInputVideoDeviceContinuously = function(t3, e2, r2) {
    return pt(this, void 0, void 0, function() {
      return gt(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, this.decodeFromVideoDevice(t3, e2, r2)];
          case 1:
            return [2, n2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromVideoDevice = function(t3, e2, r2) {
    return pt(this, void 0, void 0, function() {
      var n2;
      return gt(this, function(o2) {
        switch (o2.label) {
          case 0:
            return n2 = { video: t3 ? { deviceId: { exact: t3 } } : { facingMode: "environment" } }, [4, this.decodeFromConstraints(n2, e2, r2)];
          case 1:
            return [2, o2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromConstraints = function(t3, e2, r2) {
    return pt(this, void 0, void 0, function() {
      var n2;
      return gt(this, function(o2) {
        switch (o2.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t3)];
          case 1:
            return n2 = o2.sent(), [4, this.decodeFromStream(n2, e2, r2)];
          case 2:
            return [2, o2.sent()];
        }
      });
    });
  }, t2.prototype.decodeFromStream = function(t3, e2, r2) {
    return pt(this, void 0, void 0, function() {
      var n2;
      return gt(this, function(o2) {
        switch (o2.label) {
          case 0:
            return this.reset(), [4, this.attachStreamToVideo(t3, e2)];
          case 1:
            return n2 = o2.sent(), [4, this.decodeContinuously(n2, r2)];
          case 2:
            return [2, o2.sent()];
        }
      });
    });
  }, t2.prototype.stopAsyncDecode = function() {
    this._stopAsyncDecode = true;
  }, t2.prototype.stopContinuousDecode = function() {
    this._stopContinuousDecode = true;
  }, t2.prototype.attachStreamToVideo = function(t3, e2) {
    return pt(this, void 0, void 0, function() {
      var r2;
      return gt(this, function(n2) {
        switch (n2.label) {
          case 0:
            return r2 = this.prepareVideoElement(e2), this.addVideoSource(r2, t3), this.videoElement = r2, this.stream = t3, [4, this.playVideoOnLoadAsync(r2)];
          case 1:
            return n2.sent(), [2, r2];
        }
      });
    });
  }, t2.prototype.playVideoOnLoadAsync = function(t3) {
    var e2 = this;
    return new Promise(function(r2, n2) {
      return e2.playVideoOnLoad(t3, function() {
        return r2();
      });
    });
  }, t2.prototype.playVideoOnLoad = function(t3, e2) {
    var r2 = this;
    this.videoEndedListener = function() {
      return r2.stopStreams();
    }, this.videoCanPlayListener = function() {
      return r2.tryPlayVideo(t3);
    }, t3.addEventListener("ended", this.videoEndedListener), t3.addEventListener("canplay", this.videoCanPlayListener), t3.addEventListener("playing", e2), this.tryPlayVideo(t3);
  }, t2.prototype.isVideoPlaying = function(t3) {
    return t3.currentTime > 0 && !t3.paused && !t3.ended && t3.readyState > 2;
  }, t2.prototype.tryPlayVideo = function(t3) {
    return pt(this, void 0, void 0, function() {
      return gt(this, function(e2) {
        switch (e2.label) {
          case 0:
            if (this.isVideoPlaying(t3)) return console.warn("Trying to play video that is already playing."), [2];
            e2.label = 1;
          case 1:
            return e2.trys.push([1, 3, , 4]), [4, t3.play()];
          case 2:
            return e2.sent(), [3, 4];
          case 3:
            return e2.sent(), console.warn("It was not possible to play the video."), [3, 4];
          case 4:
            return [2];
        }
      });
    });
  }, t2.prototype.getMediaElement = function(t3, e2) {
    var r2 = document.getElementById(t3);
    if (!r2) throw new B("element with id '" + t3 + "' not found");
    if (r2.nodeName.toLowerCase() !== e2.toLowerCase()) throw new B("element with id '" + t3 + "' must be an " + e2 + " element");
    return r2;
  }, t2.prototype.decodeFromImage = function(t3, e2) {
    if (!t3 && !e2) throw new B("either imageElement with a src set or an url must be provided");
    return e2 && !t3 ? this.decodeFromImageUrl(e2) : this.decodeFromImageElement(t3);
  }, t2.prototype.decodeFromVideo = function(t3, e2) {
    if (!t3 && !e2) throw new B("Either an element with a src set or an URL must be provided");
    return e2 && !t3 ? this.decodeFromVideoUrl(e2) : this.decodeFromVideoElement(t3);
  }, t2.prototype.decodeFromVideoContinuously = function(t3, e2, r2) {
    if (void 0 === t3 && void 0 === e2) throw new B("Either an element with a src set or an URL must be provided");
    return e2 && !t3 ? this.decodeFromVideoUrlContinuously(e2, r2) : this.decodeFromVideoElementContinuously(t3, r2);
  }, t2.prototype.decodeFromImageElement = function(t3) {
    if (!t3) throw new B("An image element must be provided.");
    this.reset();
    var e2 = this.prepareImageElement(t3);
    return this.imageElement = e2, this.isImageLoaded(e2) ? this.decodeOnce(e2, false, true) : this._decodeOnLoadImage(e2);
  }, t2.prototype.decodeFromVideoElement = function(t3) {
    var e2 = this._decodeFromVideoElementSetup(t3);
    return this._decodeOnLoadVideo(e2);
  }, t2.prototype.decodeFromVideoElementContinuously = function(t3, e2) {
    var r2 = this._decodeFromVideoElementSetup(t3);
    return this._decodeOnLoadVideoContinuously(r2, e2);
  }, t2.prototype._decodeFromVideoElementSetup = function(t3) {
    if (!t3) throw new B("A video element must be provided.");
    this.reset();
    var e2 = this.prepareVideoElement(t3);
    return this.videoElement = e2, e2;
  }, t2.prototype.decodeFromImageUrl = function(t3) {
    if (!t3) throw new B("An URL must be provided.");
    this.reset();
    var e2 = this.prepareImageElement();
    this.imageElement = e2;
    var r2 = this._decodeOnLoadImage(e2);
    return e2.src = t3, r2;
  }, t2.prototype.decodeFromVideoUrl = function(t3) {
    if (!t3) throw new B("An URL must be provided.");
    this.reset();
    var e2 = this.prepareVideoElement(), r2 = this.decodeFromVideoElement(e2);
    return e2.src = t3, r2;
  }, t2.prototype.decodeFromVideoUrlContinuously = function(t3, e2) {
    if (!t3) throw new B("An URL must be provided.");
    this.reset();
    var r2 = this.prepareVideoElement(), n2 = this.decodeFromVideoElementContinuously(r2, e2);
    return r2.src = t3, n2;
  }, t2.prototype._decodeOnLoadImage = function(t3) {
    var e2 = this;
    return new Promise(function(r2, n2) {
      e2.imageLoadedListener = function() {
        return e2.decodeOnce(t3, false, true).then(r2, n2);
      }, t3.addEventListener("load", e2.imageLoadedListener);
    });
  }, t2.prototype._decodeOnLoadVideo = function(t3) {
    return pt(this, void 0, void 0, function() {
      return gt(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(t3)];
          case 1:
            return e2.sent(), [4, this.decodeOnce(t3)];
          case 2:
            return [2, e2.sent()];
        }
      });
    });
  }, t2.prototype._decodeOnLoadVideoContinuously = function(t3, e2) {
    return pt(this, void 0, void 0, function() {
      return gt(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(t3)];
          case 1:
            return r2.sent(), this.decodeContinuously(t3, e2), [2];
        }
      });
    });
  }, t2.prototype.isImageLoaded = function(t3) {
    return !!t3.complete && 0 !== t3.naturalWidth;
  }, t2.prototype.prepareImageElement = function(t3) {
    var e2;
    return void 0 === t3 && ((e2 = document.createElement("img")).width = 200, e2.height = 200), "string" == typeof t3 && (e2 = this.getMediaElement(t3, "img")), t3 instanceof HTMLImageElement && (e2 = t3), e2;
  }, t2.prototype.prepareVideoElement = function(t3) {
    var e2;
    return t3 || "undefined" == typeof document || ((e2 = document.createElement("video")).width = 200, e2.height = 200), "string" == typeof t3 && (e2 = this.getMediaElement(t3, "video")), t3 instanceof HTMLVideoElement && (e2 = t3), e2.setAttribute("autoplay", "true"), e2.setAttribute("muted", "true"), e2.setAttribute("playsinline", "true"), e2;
  }, t2.prototype.decodeOnce = function(t3, e2, r2) {
    var n2 = this;
    void 0 === e2 && (e2 = true), void 0 === r2 && (r2 = true), this._stopAsyncDecode = false;
    var o2 = function(i2, a2) {
      if (n2._stopAsyncDecode) return a2(new nt("Video stream has ended before any code could be detected.")), void (n2._stopAsyncDecode = void 0);
      try {
        i2(n2.decode(t3));
      } catch (t4) {
        if (e2 && t4 instanceof nt || (t4 instanceof M || t4 instanceof Q) && r2) return setTimeout(o2, n2._timeBetweenDecodingAttempts, i2, a2);
        a2(t4);
      }
    };
    return new Promise(function(t4, e3) {
      return o2(t4, e3);
    });
  }, t2.prototype.decodeContinuously = function(t3, e2) {
    var r2 = this;
    this._stopContinuousDecode = false;
    var n2 = function() {
      if (r2._stopContinuousDecode) r2._stopContinuousDecode = void 0;
      else try {
        var o2 = r2.decode(t3);
        e2(o2, null), setTimeout(n2, r2.timeBetweenScansMillis);
      } catch (t4) {
        e2(null, t4), (t4 instanceof M || t4 instanceof Q || t4 instanceof nt) && setTimeout(n2, r2._timeBetweenDecodingAttempts);
      }
    };
    n2();
  }, t2.prototype.decode = function(t3) {
    var e2 = this.createBinaryBitmap(t3);
    return this.decodeBitmap(e2);
  }, t2.prototype.createBinaryBitmap = function(t3) {
    this.getCaptureCanvasContext(t3), t3 instanceof HTMLVideoElement ? this.drawFrameOnCanvas(t3) : this.drawImageOnCanvas(t3);
    var e2 = this.getCaptureCanvas(t3), r2 = new lt(e2), n2 = new st(r2);
    return new N(n2);
  }, t2.prototype.getCaptureCanvasContext = function(t3) {
    if (!this.captureCanvasContext) {
      var e2 = this.getCaptureCanvas(t3), r2 = void 0;
      try {
        r2 = e2.getContext("2d", { willReadFrequently: true });
      } catch (t4) {
        r2 = e2.getContext("2d");
      }
      this.captureCanvasContext = r2;
    }
    return this.captureCanvasContext;
  }, t2.prototype.getCaptureCanvas = function(t3) {
    if (!this.captureCanvas) {
      var e2 = this.createCaptureCanvas(t3);
      this.captureCanvas = e2;
    }
    return this.captureCanvas;
  }, t2.prototype.drawFrameOnCanvas = function(t3, e2, r2) {
    void 0 === e2 && (e2 = { sx: 0, sy: 0, sWidth: t3.videoWidth, sHeight: t3.videoHeight, dx: 0, dy: 0, dWidth: t3.videoWidth, dHeight: t3.videoHeight }), void 0 === r2 && (r2 = this.captureCanvasContext), r2.drawImage(t3, e2.sx, e2.sy, e2.sWidth, e2.sHeight, e2.dx, e2.dy, e2.dWidth, e2.dHeight);
  }, t2.prototype.drawImageOnCanvas = function(t3, e2, r2) {
    void 0 === e2 && (e2 = { sx: 0, sy: 0, sWidth: t3.naturalWidth, sHeight: t3.naturalHeight, dx: 0, dy: 0, dWidth: t3.naturalWidth, dHeight: t3.naturalHeight }), void 0 === r2 && (r2 = this.captureCanvasContext), r2.drawImage(t3, e2.sx, e2.sy, e2.sWidth, e2.sHeight, e2.dx, e2.dy, e2.dWidth, e2.dHeight);
  }, t2.prototype.decodeBitmap = function(t3) {
    return this.reader.decode(t3, this._hints);
  }, t2.prototype.createCaptureCanvas = function(t3) {
    if ("undefined" == typeof document) return this._destroyCaptureCanvas(), null;
    var e2, r2, n2 = document.createElement("canvas");
    return void 0 !== t3 && (t3 instanceof HTMLVideoElement ? (e2 = t3.videoWidth, r2 = t3.videoHeight) : t3 instanceof HTMLImageElement && (e2 = t3.naturalWidth || t3.width, r2 = t3.naturalHeight || t3.height)), n2.style.width = e2 + "px", n2.style.height = r2 + "px", n2.width = e2, n2.height = r2, n2;
  }, t2.prototype.stopStreams = function() {
    this.stream && (this.stream.getVideoTracks().forEach(function(t3) {
      return t3.stop();
    }), this.stream = void 0), false === this._stopAsyncDecode && this.stopAsyncDecode(), false === this._stopContinuousDecode && this.stopContinuousDecode();
  }, t2.prototype.reset = function() {
    this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
  }, t2.prototype._destroyVideoElement = function() {
    this.videoElement && (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener("ended", this.videoEndedListener), void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0);
  }, t2.prototype._destroyImageElement = function() {
    this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0);
  }, t2.prototype._destroyCaptureCanvas = function() {
    this.captureCanvasContext = void 0, this.captureCanvas = void 0;
  }, t2.prototype.addVideoSource = function(t3, e2) {
    try {
      t3.srcObject = e2;
    } catch (r2) {
      t3.src = URL.createObjectURL(e2);
    }
  }, t2.prototype.cleanVideoSource = function(t3) {
    try {
      t3.srcObject = null;
    } catch (e2) {
      t3.src = "";
    }
    this.videoElement.removeAttribute("src");
  }, t2;
}();
var yt = function() {
  function t2(t3, e2, r2, n2, o2, i2) {
    void 0 === r2 && (r2 = null == e2 ? 0 : 8 * e2.length), void 0 === i2 && (i2 = P.currentTimeMillis()), this.text = t3, this.rawBytes = e2, this.numBits = r2, this.resultPoints = n2, this.format = o2, this.timestamp = i2, this.text = t3, this.rawBytes = e2, this.numBits = null == r2 ? null == e2 ? 0 : 8 * e2.length : r2, this.resultPoints = n2, this.format = o2, this.resultMetadata = null, this.timestamp = null == i2 ? P.currentTimeMillis() : i2;
  }
  return t2.prototype.getText = function() {
    return this.text;
  }, t2.prototype.getRawBytes = function() {
    return this.rawBytes;
  }, t2.prototype.getNumBits = function() {
    return this.numBits;
  }, t2.prototype.getResultPoints = function() {
    return this.resultPoints;
  }, t2.prototype.getBarcodeFormat = function() {
    return this.format;
  }, t2.prototype.getResultMetadata = function() {
    return this.resultMetadata;
  }, t2.prototype.putMetadata = function(t3, e2) {
    null === this.resultMetadata && (this.resultMetadata = /* @__PURE__ */ new Map()), this.resultMetadata.set(t3, e2);
  }, t2.prototype.putAllMetadata = function(t3) {
    null !== t3 && (null === this.resultMetadata ? this.resultMetadata = t3 : this.resultMetadata = new Map(t3));
  }, t2.prototype.addResultPoints = function(t3) {
    var e2 = this.resultPoints;
    if (null === e2) this.resultPoints = t3;
    else if (null !== t3 && t3.length > 0) {
      var r2 = new Array(e2.length + t3.length);
      P.arraycopy(e2, 0, r2, 0, e2.length), P.arraycopy(t3, 0, r2, e2.length, t3.length), this.resultPoints = r2;
    }
  }, t2.prototype.getTimestamp = function() {
    return this.timestamp;
  }, t2.prototype.toString = function() {
    return this.text;
  }, t2;
}();
!function(t2) {
  t2[t2.AZTEC = 0] = "AZTEC", t2[t2.CODABAR = 1] = "CODABAR", t2[t2.CODE_39 = 2] = "CODE_39", t2[t2.CODE_93 = 3] = "CODE_93", t2[t2.CODE_128 = 4] = "CODE_128", t2[t2.DATA_MATRIX = 5] = "DATA_MATRIX", t2[t2.EAN_8 = 6] = "EAN_8", t2[t2.EAN_13 = 7] = "EAN_13", t2[t2.ITF = 8] = "ITF", t2[t2.MAXICODE = 9] = "MAXICODE", t2[t2.PDF_417 = 10] = "PDF_417", t2[t2.QR_CODE = 11] = "QR_CODE", t2[t2.RSS_14 = 12] = "RSS_14", t2[t2.RSS_EXPANDED = 13] = "RSS_EXPANDED", t2[t2.UPC_A = 14] = "UPC_A", t2[t2.UPC_E = 15] = "UPC_E", t2[t2.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
}(X || (X = {}));
var Ct;
var Et = X;
!function(t2) {
  t2[t2.OTHER = 0] = "OTHER", t2[t2.ORIENTATION = 1] = "ORIENTATION", t2[t2.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", t2[t2.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", t2[t2.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", t2[t2.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", t2[t2.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", t2[t2.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", t2[t2.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", t2[t2.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", t2[t2.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY";
}(Ct || (Ct = {}));
var vt;
var mt = Ct;
var It = function() {
  function t2(t3, e2, r2, n2, o2, i2) {
    void 0 === o2 && (o2 = -1), void 0 === i2 && (i2 = -1), this.rawBytes = t3, this.text = e2, this.byteSegments = r2, this.ecLevel = n2, this.structuredAppendSequenceNumber = o2, this.structuredAppendParity = i2, this.numBits = null == t3 ? 0 : 8 * t3.length;
  }
  return t2.prototype.getRawBytes = function() {
    return this.rawBytes;
  }, t2.prototype.getNumBits = function() {
    return this.numBits;
  }, t2.prototype.setNumBits = function(t3) {
    this.numBits = t3;
  }, t2.prototype.getText = function() {
    return this.text;
  }, t2.prototype.getByteSegments = function() {
    return this.byteSegments;
  }, t2.prototype.getECLevel = function() {
    return this.ecLevel;
  }, t2.prototype.getErrorsCorrected = function() {
    return this.errorsCorrected;
  }, t2.prototype.setErrorsCorrected = function(t3) {
    this.errorsCorrected = t3;
  }, t2.prototype.getErasures = function() {
    return this.erasures;
  }, t2.prototype.setErasures = function(t3) {
    this.erasures = t3;
  }, t2.prototype.getOther = function() {
    return this.other;
  }, t2.prototype.setOther = function(t3) {
    this.other = t3;
  }, t2.prototype.hasStructuredAppend = function() {
    return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
  }, t2.prototype.getStructuredAppendParity = function() {
    return this.structuredAppendParity;
  }, t2.prototype.getStructuredAppendSequenceNumber = function() {
    return this.structuredAppendSequenceNumber;
  }, t2;
}();
var _t = function() {
  function t2() {
  }
  return t2.prototype.exp = function(t3) {
    return this.expTable[t3];
  }, t2.prototype.log = function(t3) {
    if (0 === t3) throw new D();
    return this.logTable[t3];
  }, t2.addOrSubtract = function(t3, e2) {
    return t3 ^ e2;
  }, t2;
}();
var Tt = function() {
  function t2(t3, e2) {
    if (0 === e2.length) throw new D();
    this.field = t3;
    var r2 = e2.length;
    if (r2 > 1 && 0 === e2[0]) {
      for (var n2 = 1; n2 < r2 && 0 === e2[n2]; ) n2++;
      n2 === r2 ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r2 - n2), P.arraycopy(e2, n2, this.coefficients, 0, this.coefficients.length));
    } else this.coefficients = e2;
  }
  return t2.prototype.getCoefficients = function() {
    return this.coefficients;
  }, t2.prototype.getDegree = function() {
    return this.coefficients.length - 1;
  }, t2.prototype.isZero = function() {
    return 0 === this.coefficients[0];
  }, t2.prototype.getCoefficient = function(t3) {
    return this.coefficients[this.coefficients.length - 1 - t3];
  }, t2.prototype.evaluateAt = function(t3) {
    if (0 === t3) return this.getCoefficient(0);
    var e2, r2 = this.coefficients;
    if (1 === t3) {
      e2 = 0;
      for (var n2 = 0, o2 = r2.length; n2 !== o2; n2++) {
        var i2 = r2[n2];
        e2 = _t.addOrSubtract(e2, i2);
      }
      return e2;
    }
    e2 = r2[0];
    var a2 = r2.length, s2 = this.field;
    for (n2 = 1; n2 < a2; n2++) e2 = _t.addOrSubtract(s2.multiply(t3, e2), r2[n2]);
    return e2;
  }, t2.prototype.addOrSubtract = function(e2) {
    if (!this.field.equals(e2.field)) throw new D("GenericGFPolys do not have same GenericGF field");
    if (this.isZero()) return e2;
    if (e2.isZero()) return this;
    var r2 = this.coefficients, n2 = e2.coefficients;
    if (r2.length > n2.length) {
      var o2 = r2;
      r2 = n2, n2 = o2;
    }
    var i2 = new Int32Array(n2.length), a2 = n2.length - r2.length;
    P.arraycopy(n2, 0, i2, 0, a2);
    for (var s2 = a2; s2 < n2.length; s2++) i2[s2] = _t.addOrSubtract(r2[s2 - a2], n2[s2]);
    return new t2(this.field, i2);
  }, t2.prototype.multiply = function(e2) {
    if (!this.field.equals(e2.field)) throw new D("GenericGFPolys do not have same GenericGF field");
    if (this.isZero() || e2.isZero()) return this.field.getZero();
    for (var r2 = this.coefficients, n2 = r2.length, o2 = e2.coefficients, i2 = o2.length, a2 = new Int32Array(n2 + i2 - 1), s2 = this.field, u2 = 0; u2 < n2; u2++) for (var c2 = r2[u2], f2 = 0; f2 < i2; f2++) a2[u2 + f2] = _t.addOrSubtract(a2[u2 + f2], s2.multiply(c2, o2[f2]));
    return new t2(s2, a2);
  }, t2.prototype.multiplyScalar = function(e2) {
    if (0 === e2) return this.field.getZero();
    if (1 === e2) return this;
    for (var r2 = this.coefficients.length, n2 = this.field, o2 = new Int32Array(r2), i2 = this.coefficients, a2 = 0; a2 < r2; a2++) o2[a2] = n2.multiply(i2[a2], e2);
    return new t2(n2, o2);
  }, t2.prototype.multiplyByMonomial = function(e2, r2) {
    if (e2 < 0) throw new D();
    if (0 === r2) return this.field.getZero();
    for (var n2 = this.coefficients, o2 = n2.length, i2 = new Int32Array(o2 + e2), a2 = this.field, s2 = 0; s2 < o2; s2++) i2[s2] = a2.multiply(n2[s2], r2);
    return new t2(a2, i2);
  }, t2.prototype.divide = function(t3) {
    if (!this.field.equals(t3.field)) throw new D("GenericGFPolys do not have same GenericGF field");
    if (t3.isZero()) throw new D("Divide by 0");
    for (var e2 = this.field, r2 = e2.getZero(), n2 = this, o2 = t3.getCoefficient(t3.getDegree()), i2 = e2.inverse(o2); n2.getDegree() >= t3.getDegree() && !n2.isZero(); ) {
      var a2 = n2.getDegree() - t3.getDegree(), s2 = e2.multiply(n2.getCoefficient(n2.getDegree()), i2), u2 = t3.multiplyByMonomial(a2, s2), c2 = e2.buildMonomial(a2, s2);
      r2 = r2.addOrSubtract(c2), n2 = n2.addOrSubtract(u2);
    }
    return [r2, n2];
  }, t2.prototype.toString = function() {
    for (var t3 = "", e2 = this.getDegree(); e2 >= 0; e2--) {
      var r2 = this.getCoefficient(e2);
      if (0 !== r2) {
        if (r2 < 0 ? (t3 += " - ", r2 = -r2) : t3.length > 0 && (t3 += " + "), 0 === e2 || 1 !== r2) {
          var n2 = this.field.log(r2);
          0 === n2 ? t3 += "1" : 1 === n2 ? t3 += "a" : (t3 += "a^", t3 += n2);
        }
        0 !== e2 && (1 === e2 ? t3 += "x" : (t3 += "x^", t3 += e2));
      }
    }
    return t3;
  }, t2;
}();
var St = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Bt = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return St(e2, t2), e2.kind = "ArithmeticException", e2;
}(T);
var Rt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Dt = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this) || this;
    o2.primitive = e3, o2.size = r2, o2.generatorBase = n2;
    for (var i2 = new Int32Array(r2), a2 = 1, s2 = 0; s2 < r2; s2++) i2[s2] = a2, (a2 *= 2) >= r2 && (a2 ^= e3, a2 &= r2 - 1);
    o2.expTable = i2;
    var u2 = new Int32Array(r2);
    for (s2 = 0; s2 < r2 - 1; s2++) u2[i2[s2]] = s2;
    return o2.logTable = u2, o2.zero = new Tt(o2, Int32Array.from([0])), o2.one = new Tt(o2, Int32Array.from([1])), o2;
  }
  return Rt(e2, t2), e2.prototype.getZero = function() {
    return this.zero;
  }, e2.prototype.getOne = function() {
    return this.one;
  }, e2.prototype.buildMonomial = function(t3, e3) {
    if (t3 < 0) throw new D();
    if (0 === e3) return this.zero;
    var r2 = new Int32Array(t3 + 1);
    return r2[0] = e3, new Tt(this, r2);
  }, e2.prototype.inverse = function(t3) {
    if (0 === t3) throw new Bt();
    return this.expTable[this.size - this.logTable[t3] - 1];
  }, e2.prototype.multiply = function(t3, e3) {
    return 0 === t3 || 0 === e3 ? 0 : this.expTable[(this.logTable[t3] + this.logTable[e3]) % (this.size - 1)];
  }, e2.prototype.getSize = function() {
    return this.size;
  }, e2.prototype.getGeneratorBase = function() {
    return this.generatorBase;
  }, e2.prototype.toString = function() {
    return "GF(0x" + Y.toHexString(this.primitive) + "," + this.size + ")";
  }, e2.prototype.equals = function(t3) {
    return t3 === this;
  }, e2.AZTEC_DATA_12 = new e2(4201, 4096, 1), e2.AZTEC_DATA_10 = new e2(1033, 1024, 1), e2.AZTEC_DATA_6 = new e2(67, 64, 1), e2.AZTEC_PARAM = new e2(19, 16, 1), e2.QR_CODE_FIELD_256 = new e2(285, 256, 0), e2.DATA_MATRIX_FIELD_256 = new e2(301, 256, 1), e2.AZTEC_DATA_8 = e2.DATA_MATRIX_FIELD_256, e2.MAXICODE_FIELD_64 = e2.AZTEC_DATA_6, e2;
}(_t);
var Nt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ot = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Nt(e2, t2), e2.kind = "ReedSolomonException", e2;
}(T);
var Mt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var bt = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Mt(e2, t2), e2.kind = "IllegalStateException", e2;
}(T);
var Pt = function() {
  function t2(t3) {
    this.field = t3;
  }
  return t2.prototype.decode = function(t3, e2) {
    for (var r2 = this.field, n2 = new Tt(r2, t3), o2 = new Int32Array(e2), i2 = true, a2 = 0; a2 < e2; a2++) {
      var s2 = n2.evaluateAt(r2.exp(a2 + r2.getGeneratorBase()));
      o2[o2.length - 1 - a2] = s2, 0 !== s2 && (i2 = false);
    }
    if (!i2) {
      var u2 = new Tt(r2, o2), c2 = this.runEuclideanAlgorithm(r2.buildMonomial(e2, 1), u2, e2), f2 = c2[0], h2 = c2[1], l2 = this.findErrorLocations(f2), d2 = this.findErrorMagnitudes(h2, l2);
      for (a2 = 0; a2 < l2.length; a2++) {
        var p2 = t3.length - 1 - r2.log(l2[a2]);
        if (p2 < 0) throw new Ot("Bad error location");
        t3[p2] = Dt.addOrSubtract(t3[p2], d2[a2]);
      }
    }
  }, t2.prototype.runEuclideanAlgorithm = function(t3, e2, r2) {
    if (t3.getDegree() < e2.getDegree()) {
      var n2 = t3;
      t3 = e2, e2 = n2;
    }
    for (var o2 = this.field, i2 = t3, a2 = e2, s2 = o2.getZero(), u2 = o2.getOne(); a2.getDegree() >= (r2 / 2 | 0); ) {
      var c2 = i2, f2 = s2;
      if (s2 = u2, (i2 = a2).isZero()) throw new Ot("r_{i-1} was zero");
      a2 = c2;
      for (var h2 = o2.getZero(), l2 = i2.getCoefficient(i2.getDegree()), d2 = o2.inverse(l2); a2.getDegree() >= i2.getDegree() && !a2.isZero(); ) {
        var p2 = a2.getDegree() - i2.getDegree(), g2 = o2.multiply(a2.getCoefficient(a2.getDegree()), d2);
        h2 = h2.addOrSubtract(o2.buildMonomial(p2, g2)), a2 = a2.addOrSubtract(i2.multiplyByMonomial(p2, g2));
      }
      if (u2 = h2.multiply(s2).addOrSubtract(f2), a2.getDegree() >= i2.getDegree()) throw new bt("Division algorithm failed to reduce polynomial?");
    }
    var w2 = u2.getCoefficient(0);
    if (0 === w2) throw new Ot("sigmaTilde(0) was zero");
    var A2 = o2.inverse(w2);
    return [u2.multiplyScalar(A2), a2.multiplyScalar(A2)];
  }, t2.prototype.findErrorLocations = function(t3) {
    var e2 = t3.getDegree();
    if (1 === e2) return Int32Array.from([t3.getCoefficient(1)]);
    for (var r2 = new Int32Array(e2), n2 = 0, o2 = this.field, i2 = 1; i2 < o2.getSize() && n2 < e2; i2++) 0 === t3.evaluateAt(i2) && (r2[n2] = o2.inverse(i2), n2++);
    if (n2 !== e2) throw new Ot("Error locator degree does not match number of roots");
    return r2;
  }, t2.prototype.findErrorMagnitudes = function(t3, e2) {
    for (var r2 = e2.length, n2 = new Int32Array(r2), o2 = this.field, i2 = 0; i2 < r2; i2++) {
      for (var a2 = o2.inverse(e2[i2]), s2 = 1, u2 = 0; u2 < r2; u2++) if (i2 !== u2) {
        var c2 = o2.multiply(e2[u2], a2), f2 = 0 == (1 & c2) ? 1 | c2 : -2 & c2;
        s2 = o2.multiply(s2, f2);
      }
      n2[i2] = o2.multiply(t3.evaluateAt(a2), o2.inverse(s2)), 0 !== o2.getGeneratorBase() && (n2[i2] = o2.multiply(n2[i2], a2));
    }
    return n2;
  }, t2;
}();
!function(t2) {
  t2[t2.UPPER = 0] = "UPPER", t2[t2.LOWER = 1] = "LOWER", t2[t2.MIXED = 2] = "MIXED", t2[t2.DIGIT = 3] = "DIGIT", t2[t2.PUNCT = 4] = "PUNCT", t2[t2.BINARY = 5] = "BINARY";
}(vt || (vt = {}));
var Ft = function() {
  function t2() {
  }
  return t2.prototype.decode = function(e2) {
    this.ddata = e2;
    var r2 = e2.getBits(), n2 = this.extractBits(r2), o2 = this.correctBits(n2), i2 = t2.convertBoolArrayToByteArray(o2), a2 = t2.getEncodedData(o2), s2 = new It(i2, a2, null, null);
    return s2.setNumBits(o2.length), s2;
  }, t2.highLevelDecode = function(t3) {
    return this.getEncodedData(t3);
  }, t2.getEncodedData = function(e2) {
    for (var r2 = e2.length, n2 = vt.UPPER, o2 = vt.UPPER, i2 = "", a2 = 0; a2 < r2; ) if (o2 === vt.BINARY) {
      if (r2 - a2 < 5) break;
      var s2 = t2.readCode(e2, a2, 5);
      if (a2 += 5, 0 === s2) {
        if (r2 - a2 < 11) break;
        s2 = t2.readCode(e2, a2, 11) + 31, a2 += 11;
      }
      for (var u2 = 0; u2 < s2; u2++) {
        if (r2 - a2 < 8) {
          a2 = r2;
          break;
        }
        var c2 = t2.readCode(e2, a2, 8);
        i2 += $.castAsNonUtf8Char(c2), a2 += 8;
      }
      o2 = n2;
    } else {
      var f2 = o2 === vt.DIGIT ? 4 : 5;
      if (r2 - a2 < f2) break;
      c2 = t2.readCode(e2, a2, f2);
      a2 += f2;
      var h2 = t2.getCharacter(o2, c2);
      h2.startsWith("CTRL_") ? (n2 = o2, o2 = t2.getTable(h2.charAt(5)), "L" === h2.charAt(6) && (n2 = o2)) : (i2 += h2, o2 = n2);
    }
    return i2;
  }, t2.getTable = function(t3) {
    switch (t3) {
      case "L":
        return vt.LOWER;
      case "P":
        return vt.PUNCT;
      case "M":
        return vt.MIXED;
      case "D":
        return vt.DIGIT;
      case "B":
        return vt.BINARY;
      default:
        return vt.UPPER;
    }
  }, t2.getCharacter = function(e2, r2) {
    switch (e2) {
      case vt.UPPER:
        return t2.UPPER_TABLE[r2];
      case vt.LOWER:
        return t2.LOWER_TABLE[r2];
      case vt.MIXED:
        return t2.MIXED_TABLE[r2];
      case vt.PUNCT:
        return t2.PUNCT_TABLE[r2];
      case vt.DIGIT:
        return t2.DIGIT_TABLE[r2];
      default:
        throw new bt("Bad table");
    }
  }, t2.prototype.correctBits = function(e2) {
    var r2, n2;
    this.ddata.getNbLayers() <= 2 ? (n2 = 6, r2 = Dt.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (n2 = 8, r2 = Dt.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (n2 = 10, r2 = Dt.AZTEC_DATA_10) : (n2 = 12, r2 = Dt.AZTEC_DATA_12);
    var o2 = this.ddata.getNbDatablocks(), i2 = e2.length / n2;
    if (i2 < o2) throw new Q();
    for (var a2 = e2.length % n2, s2 = new Int32Array(i2), u2 = 0; u2 < i2; u2++, a2 += n2) s2[u2] = t2.readCode(e2, a2, n2);
    try {
      new Pt(r2).decode(s2, i2 - o2);
    } catch (t3) {
      throw new Q(t3);
    }
    var c2 = (1 << n2) - 1, f2 = 0;
    for (u2 = 0; u2 < o2; u2++) {
      if (0 === (d2 = s2[u2]) || d2 === c2) throw new Q();
      1 !== d2 && d2 !== c2 - 1 || f2++;
    }
    var h2 = new Array(o2 * n2 - f2), l2 = 0;
    for (u2 = 0; u2 < o2; u2++) {
      var d2;
      if (1 === (d2 = s2[u2]) || d2 === c2 - 1) h2.fill(d2 > 1, l2, l2 + n2 - 1), l2 += n2 - 1;
      else for (var p2 = n2 - 1; p2 >= 0; --p2) h2[l2++] = 0 != (d2 & 1 << p2);
    }
    return h2;
  }, t2.prototype.extractBits = function(t3) {
    var e2 = this.ddata.isCompact(), r2 = this.ddata.getNbLayers(), n2 = (e2 ? 11 : 14) + 4 * r2, o2 = new Int32Array(n2), i2 = new Array(this.totalBitsInLayer(r2, e2));
    if (e2) for (var a2 = 0; a2 < o2.length; a2++) o2[a2] = a2;
    else {
      var s2 = n2 + 1 + 2 * Y.truncDivision(Y.truncDivision(n2, 2) - 1, 15), u2 = n2 / 2, c2 = Y.truncDivision(s2, 2);
      for (a2 = 0; a2 < u2; a2++) {
        var f2 = a2 + Y.truncDivision(a2, 15);
        o2[u2 - a2 - 1] = c2 - f2 - 1, o2[u2 + a2] = c2 + f2 + 1;
      }
    }
    a2 = 0;
    for (var h2 = 0; a2 < r2; a2++) {
      for (var l2 = 4 * (r2 - a2) + (e2 ? 9 : 12), d2 = 2 * a2, p2 = n2 - 1 - d2, g2 = 0; g2 < l2; g2++) for (var w2 = 2 * g2, A2 = 0; A2 < 2; A2++) i2[h2 + w2 + A2] = t3.get(o2[d2 + A2], o2[d2 + g2]), i2[h2 + 2 * l2 + w2 + A2] = t3.get(o2[d2 + g2], o2[p2 - A2]), i2[h2 + 4 * l2 + w2 + A2] = t3.get(o2[p2 - A2], o2[p2 - g2]), i2[h2 + 6 * l2 + w2 + A2] = t3.get(o2[p2 - g2], o2[d2 + A2]);
      h2 += 8 * l2;
    }
    return i2;
  }, t2.readCode = function(t3, e2, r2) {
    for (var n2 = 0, o2 = e2; o2 < e2 + r2; o2++) n2 <<= 1, t3[o2] && (n2 |= 1);
    return n2;
  }, t2.readByte = function(e2, r2) {
    var n2 = e2.length - r2;
    return n2 >= 8 ? t2.readCode(e2, r2, 8) : t2.readCode(e2, r2, n2) << 8 - n2;
  }, t2.convertBoolArrayToByteArray = function(e2) {
    for (var r2 = new Uint8Array((e2.length + 7) / 8), n2 = 0; n2 < r2.length; n2++) r2[n2] = t2.readByte(e2, 8 * n2);
    return r2;
  }, t2.prototype.totalBitsInLayer = function(t3, e2) {
    return ((e2 ? 88 : 112) + 16 * t3) * t3;
  }, t2.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"], t2.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"], t2.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "	", "\n", "\\13", "\f", "\r", "\\33", "\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"], t2.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"], t2.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"], t2;
}();
var Lt = function() {
  function t2() {
  }
  return t2.round = function(t3) {
    return isNaN(t3) ? 0 : t3 <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t3 >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t3 + (t3 < 0 ? -0.5 : 0.5) | 0;
  }, t2.distance = function(t3, e2, r2, n2) {
    var o2 = t3 - r2, i2 = e2 - n2;
    return Math.sqrt(o2 * o2 + i2 * i2);
  }, t2.sum = function(t3) {
    for (var e2 = 0, r2 = 0, n2 = t3.length; r2 !== n2; r2++) {
      e2 += t3[r2];
    }
    return e2;
  }, t2;
}();
var kt = function() {
  function t2() {
  }
  return t2.floatToIntBits = function(t3) {
    return t3;
  }, t2.MAX_VALUE = Number.MAX_SAFE_INTEGER, t2;
}();
var Vt = function() {
  function t2(t3, e2) {
    this.x = t3, this.y = e2;
  }
  return t2.prototype.getX = function() {
    return this.x;
  }, t2.prototype.getY = function() {
    return this.y;
  }, t2.prototype.equals = function(e2) {
    if (e2 instanceof t2) {
      var r2 = e2;
      return this.x === r2.x && this.y === r2.y;
    }
    return false;
  }, t2.prototype.hashCode = function() {
    return 31 * kt.floatToIntBits(this.x) + kt.floatToIntBits(this.y);
  }, t2.prototype.toString = function() {
    return "(" + this.x + "," + this.y + ")";
  }, t2.orderBestPatterns = function(t3) {
    var e2, r2, n2, o2 = this.distance(t3[0], t3[1]), i2 = this.distance(t3[1], t3[2]), a2 = this.distance(t3[0], t3[2]);
    if (i2 >= o2 && i2 >= a2 ? (r2 = t3[0], e2 = t3[1], n2 = t3[2]) : a2 >= i2 && a2 >= o2 ? (r2 = t3[1], e2 = t3[0], n2 = t3[2]) : (r2 = t3[2], e2 = t3[0], n2 = t3[1]), this.crossProductZ(e2, r2, n2) < 0) {
      var s2 = e2;
      e2 = n2, n2 = s2;
    }
    t3[0] = e2, t3[1] = r2, t3[2] = n2;
  }, t2.distance = function(t3, e2) {
    return Lt.distance(t3.x, t3.y, e2.x, e2.y);
  }, t2.crossProductZ = function(t3, e2, r2) {
    var n2 = e2.x, o2 = e2.y;
    return (r2.x - n2) * (t3.y - o2) - (r2.y - o2) * (t3.x - n2);
  }, t2;
}();
var xt = function() {
  function t2(t3, e2) {
    this.bits = t3, this.points = e2;
  }
  return t2.prototype.getBits = function() {
    return this.bits;
  }, t2.prototype.getPoints = function() {
    return this.points;
  }, t2;
}();
var Gt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Yt = function(t2) {
  function e2(e3, r2, n2, o2, i2) {
    var a2 = t2.call(this, e3, r2) || this;
    return a2.compact = n2, a2.nbDatablocks = o2, a2.nbLayers = i2, a2;
  }
  return Gt(e2, t2), e2.prototype.getNbLayers = function() {
    return this.nbLayers;
  }, e2.prototype.getNbDatablocks = function() {
    return this.nbDatablocks;
  }, e2.prototype.isCompact = function() {
    return this.compact;
  }, e2;
}(xt);
var qt = function() {
  function t2(e2, r2, n2, o2) {
    this.image = e2, this.height = e2.getHeight(), this.width = e2.getWidth(), null == r2 && (r2 = t2.INIT_SIZE), null == n2 && (n2 = e2.getWidth() / 2 | 0), null == o2 && (o2 = e2.getHeight() / 2 | 0);
    var i2 = r2 / 2 | 0;
    if (this.leftInit = n2 - i2, this.rightInit = n2 + i2, this.upInit = o2 - i2, this.downInit = o2 + i2, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width) throw new nt();
  }
  return t2.prototype.detect = function() {
    for (var t3 = this.leftInit, e2 = this.rightInit, r2 = this.upInit, n2 = this.downInit, o2 = false, i2 = true, a2 = false, s2 = false, u2 = false, c2 = false, f2 = false, h2 = this.width, l2 = this.height; i2; ) {
      i2 = false;
      for (var d2 = true; (d2 || !s2) && e2 < h2; ) (d2 = this.containsBlackPoint(r2, n2, e2, false)) ? (e2++, i2 = true, s2 = true) : s2 || e2++;
      if (e2 >= h2) {
        o2 = true;
        break;
      }
      for (var p2 = true; (p2 || !u2) && n2 < l2; ) (p2 = this.containsBlackPoint(t3, e2, n2, true)) ? (n2++, i2 = true, u2 = true) : u2 || n2++;
      if (n2 >= l2) {
        o2 = true;
        break;
      }
      for (var g2 = true; (g2 || !c2) && t3 >= 0; ) (g2 = this.containsBlackPoint(r2, n2, t3, false)) ? (t3--, i2 = true, c2 = true) : c2 || t3--;
      if (t3 < 0) {
        o2 = true;
        break;
      }
      for (var w2 = true; (w2 || !f2) && r2 >= 0; ) (w2 = this.containsBlackPoint(t3, e2, r2, true)) ? (r2--, i2 = true, f2 = true) : f2 || r2--;
      if (r2 < 0) {
        o2 = true;
        break;
      }
      i2 && (a2 = true);
    }
    if (!o2 && a2) {
      for (var A2 = e2 - t3, y2 = null, C2 = 1; null === y2 && C2 < A2; C2++) y2 = this.getBlackPointOnSegment(t3, n2 - C2, t3 + C2, n2);
      if (null == y2) throw new nt();
      var E2 = null;
      for (C2 = 1; null === E2 && C2 < A2; C2++) E2 = this.getBlackPointOnSegment(t3, r2 + C2, t3 + C2, r2);
      if (null == E2) throw new nt();
      var v2 = null;
      for (C2 = 1; null === v2 && C2 < A2; C2++) v2 = this.getBlackPointOnSegment(e2, r2 + C2, e2 - C2, r2);
      if (null == v2) throw new nt();
      var m2 = null;
      for (C2 = 1; null === m2 && C2 < A2; C2++) m2 = this.getBlackPointOnSegment(e2, n2 - C2, e2 - C2, n2);
      if (null == m2) throw new nt();
      return this.centerEdges(m2, y2, v2, E2);
    }
    throw new nt();
  }, t2.prototype.getBlackPointOnSegment = function(t3, e2, r2, n2) {
    for (var o2 = Lt.round(Lt.distance(t3, e2, r2, n2)), i2 = (r2 - t3) / o2, a2 = (n2 - e2) / o2, s2 = this.image, u2 = 0; u2 < o2; u2++) {
      var c2 = Lt.round(t3 + u2 * i2), f2 = Lt.round(e2 + u2 * a2);
      if (s2.get(c2, f2)) return new Vt(c2, f2);
    }
    return null;
  }, t2.prototype.centerEdges = function(e2, r2, n2, o2) {
    var i2 = e2.getX(), a2 = e2.getY(), s2 = r2.getX(), u2 = r2.getY(), c2 = n2.getX(), f2 = n2.getY(), h2 = o2.getX(), l2 = o2.getY(), d2 = t2.CORR;
    return i2 < this.width / 2 ? [new Vt(h2 - d2, l2 + d2), new Vt(s2 + d2, u2 + d2), new Vt(c2 - d2, f2 - d2), new Vt(i2 + d2, a2 - d2)] : [new Vt(h2 + d2, l2 + d2), new Vt(s2 + d2, u2 - d2), new Vt(c2 - d2, f2 + d2), new Vt(i2 - d2, a2 - d2)];
  }, t2.prototype.containsBlackPoint = function(t3, e2, r2, n2) {
    var o2 = this.image;
    if (n2) {
      for (var i2 = t3; i2 <= e2; i2++) if (o2.get(i2, r2)) return true;
    } else for (var a2 = t3; a2 <= e2; a2++) if (o2.get(r2, a2)) return true;
    return false;
  }, t2.INIT_SIZE = 10, t2.CORR = 1, t2;
}();
var Ut = function() {
  function t2() {
  }
  return t2.checkAndNudgePoints = function(t3, e2) {
    for (var r2 = t3.getWidth(), n2 = t3.getHeight(), o2 = true, i2 = 0; i2 < e2.length && o2; i2 += 2) {
      var a2 = Math.floor(e2[i2]), s2 = Math.floor(e2[i2 + 1]);
      if (a2 < -1 || a2 > r2 || s2 < -1 || s2 > n2) throw new nt();
      o2 = false, -1 === a2 ? (e2[i2] = 0, o2 = true) : a2 === r2 && (e2[i2] = r2 - 1, o2 = true), -1 === s2 ? (e2[i2 + 1] = 0, o2 = true) : s2 === n2 && (e2[i2 + 1] = n2 - 1, o2 = true);
    }
    o2 = true;
    for (i2 = e2.length - 2; i2 >= 0 && o2; i2 -= 2) {
      a2 = Math.floor(e2[i2]), s2 = Math.floor(e2[i2 + 1]);
      if (a2 < -1 || a2 > r2 || s2 < -1 || s2 > n2) throw new nt();
      o2 = false, -1 === a2 ? (e2[i2] = 0, o2 = true) : a2 === r2 && (e2[i2] = r2 - 1, o2 = true), -1 === s2 ? (e2[i2 + 1] = 0, o2 = true) : s2 === n2 && (e2[i2 + 1] = n2 - 1, o2 = true);
    }
  }, t2;
}();
var Ht = function() {
  function t2(t3, e2, r2, n2, o2, i2, a2, s2, u2) {
    this.a11 = t3, this.a21 = e2, this.a31 = r2, this.a12 = n2, this.a22 = o2, this.a32 = i2, this.a13 = a2, this.a23 = s2, this.a33 = u2;
  }
  return t2.quadrilateralToQuadrilateral = function(e2, r2, n2, o2, i2, a2, s2, u2, c2, f2, h2, l2, d2, p2, g2, w2) {
    var A2 = t2.quadrilateralToSquare(e2, r2, n2, o2, i2, a2, s2, u2);
    return t2.squareToQuadrilateral(c2, f2, h2, l2, d2, p2, g2, w2).times(A2);
  }, t2.prototype.transformPoints = function(t3) {
    for (var e2 = t3.length, r2 = this.a11, n2 = this.a12, o2 = this.a13, i2 = this.a21, a2 = this.a22, s2 = this.a23, u2 = this.a31, c2 = this.a32, f2 = this.a33, h2 = 0; h2 < e2; h2 += 2) {
      var l2 = t3[h2], d2 = t3[h2 + 1], p2 = o2 * l2 + s2 * d2 + f2;
      t3[h2] = (r2 * l2 + i2 * d2 + u2) / p2, t3[h2 + 1] = (n2 * l2 + a2 * d2 + c2) / p2;
    }
  }, t2.prototype.transformPointsWithValues = function(t3, e2) {
    for (var r2 = this.a11, n2 = this.a12, o2 = this.a13, i2 = this.a21, a2 = this.a22, s2 = this.a23, u2 = this.a31, c2 = this.a32, f2 = this.a33, h2 = t3.length, l2 = 0; l2 < h2; l2++) {
      var d2 = t3[l2], p2 = e2[l2], g2 = o2 * d2 + s2 * p2 + f2;
      t3[l2] = (r2 * d2 + i2 * p2 + u2) / g2, e2[l2] = (n2 * d2 + a2 * p2 + c2) / g2;
    }
  }, t2.squareToQuadrilateral = function(e2, r2, n2, o2, i2, a2, s2, u2) {
    var c2 = e2 - n2 + i2 - s2, f2 = r2 - o2 + a2 - u2;
    if (0 === c2 && 0 === f2) return new t2(n2 - e2, i2 - n2, e2, o2 - r2, a2 - o2, r2, 0, 0, 1);
    var h2 = n2 - i2, l2 = s2 - i2, d2 = o2 - a2, p2 = u2 - a2, g2 = h2 * p2 - l2 * d2, w2 = (c2 * p2 - l2 * f2) / g2, A2 = (h2 * f2 - c2 * d2) / g2;
    return new t2(n2 - e2 + w2 * n2, s2 - e2 + A2 * s2, e2, o2 - r2 + w2 * o2, u2 - r2 + A2 * u2, r2, w2, A2, 1);
  }, t2.quadrilateralToSquare = function(e2, r2, n2, o2, i2, a2, s2, u2) {
    return t2.squareToQuadrilateral(e2, r2, n2, o2, i2, a2, s2, u2).buildAdjoint();
  }, t2.prototype.buildAdjoint = function() {
    return new t2(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
  }, t2.prototype.times = function(e2) {
    return new t2(this.a11 * e2.a11 + this.a21 * e2.a12 + this.a31 * e2.a13, this.a11 * e2.a21 + this.a21 * e2.a22 + this.a31 * e2.a23, this.a11 * e2.a31 + this.a21 * e2.a32 + this.a31 * e2.a33, this.a12 * e2.a11 + this.a22 * e2.a12 + this.a32 * e2.a13, this.a12 * e2.a21 + this.a22 * e2.a22 + this.a32 * e2.a23, this.a12 * e2.a31 + this.a22 * e2.a32 + this.a32 * e2.a33, this.a13 * e2.a11 + this.a23 * e2.a12 + this.a33 * e2.a13, this.a13 * e2.a21 + this.a23 * e2.a22 + this.a33 * e2.a23, this.a13 * e2.a31 + this.a23 * e2.a32 + this.a33 * e2.a33);
  }, t2;
}();
var Wt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Qt = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Wt(e2, t2), e2.prototype.sampleGrid = function(t3, e3, r2, n2, o2, i2, a2, s2, u2, c2, f2, h2, l2, d2, p2, g2, w2, A2, y2) {
    var C2 = Ht.quadrilateralToQuadrilateral(n2, o2, i2, a2, s2, u2, c2, f2, h2, l2, d2, p2, g2, w2, A2, y2);
    return this.sampleGridWithTransform(t3, e3, r2, C2);
  }, e2.prototype.sampleGridWithTransform = function(t3, e3, r2, n2) {
    if (e3 <= 0 || r2 <= 0) throw new nt();
    for (var o2 = new et(e3, r2), i2 = new Float32Array(2 * e3), a2 = 0; a2 < r2; a2++) {
      for (var s2 = i2.length, u2 = a2 + 0.5, c2 = 0; c2 < s2; c2 += 2) i2[c2] = c2 / 2 + 0.5, i2[c2 + 1] = u2;
      n2.transformPoints(i2), Ut.checkAndNudgePoints(t3, i2);
      try {
        for (c2 = 0; c2 < s2; c2 += 2) t3.get(Math.floor(i2[c2]), Math.floor(i2[c2 + 1])) && o2.set(c2 / 2, a2);
      } catch (t4) {
        throw new nt();
      }
    }
    return o2;
  }, e2;
}(Ut);
var Kt = function() {
  function t2() {
  }
  return t2.setGridSampler = function(e2) {
    t2.gridSampler = e2;
  }, t2.getInstance = function() {
    return t2.gridSampler;
  }, t2.gridSampler = new Qt(), t2;
}();
var Xt = function() {
  function t2(t3, e2) {
    this.x = t3, this.y = e2;
  }
  return t2.prototype.toResultPoint = function() {
    return new Vt(this.getX(), this.getY());
  }, t2.prototype.getX = function() {
    return this.x;
  }, t2.prototype.getY = function() {
    return this.y;
  }, t2;
}();
var Zt = function() {
  function t2(t3) {
    this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]), this.image = t3;
  }
  return t2.prototype.detect = function() {
    return this.detectMirror(false);
  }, t2.prototype.detectMirror = function(t3) {
    var e2 = this.getMatrixCenter(), r2 = this.getBullsEyeCorners(e2);
    if (t3) {
      var n2 = r2[0];
      r2[0] = r2[2], r2[2] = n2;
    }
    this.extractParameters(r2);
    var o2 = this.sampleGrid(this.image, r2[this.shift % 4], r2[(this.shift + 1) % 4], r2[(this.shift + 2) % 4], r2[(this.shift + 3) % 4]), i2 = this.getMatrixCornerPoints(r2);
    return new Yt(o2, i2, this.compact, this.nbDataBlocks, this.nbLayers);
  }, t2.prototype.extractParameters = function(t3) {
    if (!(this.isValidPoint(t3[0]) && this.isValidPoint(t3[1]) && this.isValidPoint(t3[2]) && this.isValidPoint(t3[3]))) throw new nt();
    var e2 = 2 * this.nbCenterLayers, r2 = new Int32Array([this.sampleLine(t3[0], t3[1], e2), this.sampleLine(t3[1], t3[2], e2), this.sampleLine(t3[2], t3[3], e2), this.sampleLine(t3[3], t3[0], e2)]);
    this.shift = this.getRotation(r2, e2);
    for (var n2 = 0, o2 = 0; o2 < 4; o2++) {
      var i2 = r2[(this.shift + o2) % 4];
      this.compact ? (n2 <<= 7, n2 += i2 >> 1 & 127) : (n2 <<= 10, n2 += (i2 >> 2 & 992) + (i2 >> 1 & 31));
    }
    var a2 = this.getCorrectedParameterData(n2, this.compact);
    this.compact ? (this.nbLayers = 1 + (a2 >> 6), this.nbDataBlocks = 1 + (63 & a2)) : (this.nbLayers = 1 + (a2 >> 11), this.nbDataBlocks = 1 + (2047 & a2));
  }, t2.prototype.getRotation = function(t3, e2) {
    var r2 = 0;
    t3.forEach(function(t4, n3, o2) {
      r2 = (r2 << 3) + ((t4 >> e2 - 2 << 1) + (1 & t4));
    }), r2 = ((1 & r2) << 11) + (r2 >> 1);
    for (var n2 = 0; n2 < 4; n2++) if (Y.bitCount(r2 ^ this.EXPECTED_CORNER_BITS[n2]) <= 2) return n2;
    throw new nt();
  }, t2.prototype.getCorrectedParameterData = function(t3, e2) {
    var r2, n2;
    e2 ? (r2 = 7, n2 = 2) : (r2 = 10, n2 = 4);
    for (var o2 = r2 - n2, i2 = new Int32Array(r2), a2 = r2 - 1; a2 >= 0; --a2) i2[a2] = 15 & t3, t3 >>= 4;
    try {
      new Pt(Dt.AZTEC_PARAM).decode(i2, o2);
    } catch (t4) {
      throw new nt();
    }
    var s2 = 0;
    for (a2 = 0; a2 < n2; a2++) s2 = (s2 << 4) + i2[a2];
    return s2;
  }, t2.prototype.getBullsEyeCorners = function(t3) {
    var e2 = t3, r2 = t3, n2 = t3, o2 = t3, i2 = true;
    for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
      var a2 = this.getFirstDifferent(e2, i2, 1, -1), s2 = this.getFirstDifferent(r2, i2, 1, 1), u2 = this.getFirstDifferent(n2, i2, -1, 1), c2 = this.getFirstDifferent(o2, i2, -1, -1);
      if (this.nbCenterLayers > 2) {
        var f2 = this.distancePoint(c2, a2) * this.nbCenterLayers / (this.distancePoint(o2, e2) * (this.nbCenterLayers + 2));
        if (f2 < 0.75 || f2 > 1.25 || !this.isWhiteOrBlackRectangle(a2, s2, u2, c2)) break;
      }
      e2 = a2, r2 = s2, n2 = u2, o2 = c2, i2 = !i2;
    }
    if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new nt();
    this.compact = 5 === this.nbCenterLayers;
    var h2 = new Vt(e2.getX() + 0.5, e2.getY() - 0.5), l2 = new Vt(r2.getX() + 0.5, r2.getY() + 0.5), d2 = new Vt(n2.getX() - 0.5, n2.getY() + 0.5), p2 = new Vt(o2.getX() - 0.5, o2.getY() - 0.5);
    return this.expandSquare([h2, l2, d2, p2], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
  }, t2.prototype.getMatrixCenter = function() {
    var t3, e2, r2, n2;
    try {
      t3 = (u2 = new qt(this.image).detect())[0], e2 = u2[1], r2 = u2[2], n2 = u2[3];
    } catch (a3) {
      var o2 = this.image.getWidth() / 2, i2 = this.image.getHeight() / 2;
      t3 = this.getFirstDifferent(new Xt(o2 + 7, i2 - 7), false, 1, -1).toResultPoint(), e2 = this.getFirstDifferent(new Xt(o2 + 7, i2 + 7), false, 1, 1).toResultPoint(), r2 = this.getFirstDifferent(new Xt(o2 - 7, i2 + 7), false, -1, 1).toResultPoint(), n2 = this.getFirstDifferent(new Xt(o2 - 7, i2 - 7), false, -1, -1).toResultPoint();
    }
    var a2 = Lt.round((t3.getX() + n2.getX() + e2.getX() + r2.getX()) / 4), s2 = Lt.round((t3.getY() + n2.getY() + e2.getY() + r2.getY()) / 4);
    try {
      var u2;
      t3 = (u2 = new qt(this.image, 15, a2, s2).detect())[0], e2 = u2[1], r2 = u2[2], n2 = u2[3];
    } catch (o3) {
      t3 = this.getFirstDifferent(new Xt(a2 + 7, s2 - 7), false, 1, -1).toResultPoint(), e2 = this.getFirstDifferent(new Xt(a2 + 7, s2 + 7), false, 1, 1).toResultPoint(), r2 = this.getFirstDifferent(new Xt(a2 - 7, s2 + 7), false, -1, 1).toResultPoint(), n2 = this.getFirstDifferent(new Xt(a2 - 7, s2 - 7), false, -1, -1).toResultPoint();
    }
    return a2 = Lt.round((t3.getX() + n2.getX() + e2.getX() + r2.getX()) / 4), s2 = Lt.round((t3.getY() + n2.getY() + e2.getY() + r2.getY()) / 4), new Xt(a2, s2);
  }, t2.prototype.getMatrixCornerPoints = function(t3) {
    return this.expandSquare(t3, 2 * this.nbCenterLayers, this.getDimension());
  }, t2.prototype.sampleGrid = function(t3, e2, r2, n2, o2) {
    var i2 = Kt.getInstance(), a2 = this.getDimension(), s2 = a2 / 2 - this.nbCenterLayers, u2 = a2 / 2 + this.nbCenterLayers;
    return i2.sampleGrid(t3, a2, a2, s2, s2, u2, s2, u2, u2, s2, u2, e2.getX(), e2.getY(), r2.getX(), r2.getY(), n2.getX(), n2.getY(), o2.getX(), o2.getY());
  }, t2.prototype.sampleLine = function(t3, e2, r2) {
    for (var n2 = 0, o2 = this.distanceResultPoint(t3, e2), i2 = o2 / r2, a2 = t3.getX(), s2 = t3.getY(), u2 = i2 * (e2.getX() - t3.getX()) / o2, c2 = i2 * (e2.getY() - t3.getY()) / o2, f2 = 0; f2 < r2; f2++) this.image.get(Lt.round(a2 + f2 * u2), Lt.round(s2 + f2 * c2)) && (n2 |= 1 << r2 - f2 - 1);
    return n2;
  }, t2.prototype.isWhiteOrBlackRectangle = function(t3, e2, r2, n2) {
    t3 = new Xt(t3.getX() - 3, t3.getY() + 3), e2 = new Xt(e2.getX() - 3, e2.getY() - 3), r2 = new Xt(r2.getX() + 3, r2.getY() - 3), n2 = new Xt(n2.getX() + 3, n2.getY() + 3);
    var o2 = this.getColor(n2, t3);
    if (0 === o2) return false;
    var i2 = this.getColor(t3, e2);
    return i2 === o2 && ((i2 = this.getColor(e2, r2)) === o2 && (i2 = this.getColor(r2, n2)) === o2);
  }, t2.prototype.getColor = function(t3, e2) {
    for (var r2 = this.distancePoint(t3, e2), n2 = (e2.getX() - t3.getX()) / r2, o2 = (e2.getY() - t3.getY()) / r2, i2 = 0, a2 = t3.getX(), s2 = t3.getY(), u2 = this.image.get(t3.getX(), t3.getY()), c2 = Math.ceil(r2), f2 = 0; f2 < c2; f2++) a2 += n2, s2 += o2, this.image.get(Lt.round(a2), Lt.round(s2)) !== u2 && i2++;
    var h2 = i2 / r2;
    return h2 > 0.1 && h2 < 0.9 ? 0 : h2 <= 0.1 === u2 ? 1 : -1;
  }, t2.prototype.getFirstDifferent = function(t3, e2, r2, n2) {
    for (var o2 = t3.getX() + r2, i2 = t3.getY() + n2; this.isValid(o2, i2) && this.image.get(o2, i2) === e2; ) o2 += r2, i2 += n2;
    for (o2 -= r2, i2 -= n2; this.isValid(o2, i2) && this.image.get(o2, i2) === e2; ) o2 += r2;
    for (o2 -= r2; this.isValid(o2, i2) && this.image.get(o2, i2) === e2; ) i2 += n2;
    return new Xt(o2, i2 -= n2);
  }, t2.prototype.expandSquare = function(t3, e2, r2) {
    var n2 = r2 / (2 * e2), o2 = t3[0].getX() - t3[2].getX(), i2 = t3[0].getY() - t3[2].getY(), a2 = (t3[0].getX() + t3[2].getX()) / 2, s2 = (t3[0].getY() + t3[2].getY()) / 2, u2 = new Vt(a2 + n2 * o2, s2 + n2 * i2), c2 = new Vt(a2 - n2 * o2, s2 - n2 * i2);
    return o2 = t3[1].getX() - t3[3].getX(), i2 = t3[1].getY() - t3[3].getY(), a2 = (t3[1].getX() + t3[3].getX()) / 2, s2 = (t3[1].getY() + t3[3].getY()) / 2, [u2, new Vt(a2 + n2 * o2, s2 + n2 * i2), c2, new Vt(a2 - n2 * o2, s2 - n2 * i2)];
  }, t2.prototype.isValid = function(t3, e2) {
    return t3 >= 0 && t3 < this.image.getWidth() && e2 > 0 && e2 < this.image.getHeight();
  }, t2.prototype.isValidPoint = function(t3) {
    var e2 = Lt.round(t3.getX()), r2 = Lt.round(t3.getY());
    return this.isValid(e2, r2);
  }, t2.prototype.distancePoint = function(t3, e2) {
    return Lt.distance(t3.getX(), t3.getY(), e2.getX(), e2.getY());
  }, t2.prototype.distanceResultPoint = function(t3, e2) {
    return Lt.distance(t3.getX(), t3.getY(), e2.getX(), e2.getY());
  }, t2.prototype.getDimension = function() {
    return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (Y.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
  }, t2;
}();
var jt = function() {
  function t2() {
  }
  return t2.prototype.decode = function(t3, e2) {
    void 0 === e2 && (e2 = null);
    var r2 = null, n2 = new Zt(t3.getBlackMatrix()), o2 = null, i2 = null;
    try {
      o2 = (a2 = n2.detectMirror(false)).getPoints(), this.reportFoundResultPoints(e2, o2), i2 = new Ft().decode(a2);
    } catch (t4) {
      r2 = t4;
    }
    if (null == i2) try {
      var a2;
      o2 = (a2 = n2.detectMirror(true)).getPoints(), this.reportFoundResultPoints(e2, o2), i2 = new Ft().decode(a2);
    } catch (t4) {
      if (null != r2) throw r2;
      throw t4;
    }
    var s2 = new yt(i2.getText(), i2.getRawBytes(), i2.getNumBits(), o2, Et.AZTEC, P.currentTimeMillis()), u2 = i2.getByteSegments();
    null != u2 && s2.putMetadata(mt.BYTE_SEGMENTS, u2);
    var c2 = i2.getECLevel();
    return null != c2 && s2.putMetadata(mt.ERROR_CORRECTION_LEVEL, c2), s2;
  }, t2.prototype.reportFoundResultPoints = function(t3, e2) {
    if (null != t3) {
      var r2 = t3.get(H.NEED_RESULT_POINT_CALLBACK);
      null != r2 && e2.forEach(function(t4, e3, n2) {
        r2.foundPossibleResultPoint(t4);
      });
    }
  }, t2.prototype.reset = function() {
  }, t2;
}();
var zt = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new jt(), e3) || this;
  }
  zt(e2, t2);
}(At);
var Jt = function() {
  function t2() {
  }
  return t2.prototype.decode = function(t3, e2) {
    try {
      return this.doDecode(t3, e2);
    } catch (c2) {
      if (e2 && true === e2.get(H.TRY_HARDER) && t3.isRotateSupported()) {
        var r2 = t3.rotateCounterClockwise(), n2 = this.doDecode(r2, e2), o2 = n2.getResultMetadata(), i2 = 270;
        null !== o2 && true === o2.get(mt.ORIENTATION) && (i2 += o2.get(mt.ORIENTATION) % 360), n2.putMetadata(mt.ORIENTATION, i2);
        var a2 = n2.getResultPoints();
        if (null !== a2) for (var s2 = r2.getHeight(), u2 = 0; u2 < a2.length; u2++) a2[u2] = new Vt(s2 - a2[u2].getY() - 1, a2[u2].getX());
        return n2;
      }
      throw new nt();
    }
  }, t2.prototype.reset = function() {
  }, t2.prototype.doDecode = function(t3, e2) {
    var r2, n2 = t3.getWidth(), o2 = t3.getHeight(), i2 = new q(n2), a2 = e2 && true === e2.get(H.TRY_HARDER), s2 = Math.max(1, o2 >> (a2 ? 8 : 5));
    r2 = a2 ? o2 : 15;
    for (var u2 = Math.trunc(o2 / 2), c2 = 0; c2 < r2; c2++) {
      var f2 = Math.trunc((c2 + 1) / 2), h2 = u2 + s2 * (0 == (1 & c2) ? f2 : -f2);
      if (h2 < 0 || h2 >= o2) break;
      try {
        i2 = t3.getBlackRow(h2, i2);
      } catch (t4) {
        continue;
      }
      for (var l2 = function(t4) {
        if (1 === t4 && (i2.reverse(), e2 && true === e2.get(H.NEED_RESULT_POINT_CALLBACK))) {
          var r3 = /* @__PURE__ */ new Map();
          e2.forEach(function(t5, e3) {
            return r3.set(e3, t5);
          }), r3.delete(H.NEED_RESULT_POINT_CALLBACK), e2 = r3;
        }
        try {
          var o3 = d2.decodeRow(h2, i2, e2);
          if (1 === t4) {
            o3.putMetadata(mt.ORIENTATION, 180);
            var a3 = o3.getResultPoints();
            null !== a3 && (a3[0] = new Vt(n2 - a3[0].getX() - 1, a3[0].getY()), a3[1] = new Vt(n2 - a3[1].getX() - 1, a3[1].getY()));
          }
          return { value: o3 };
        } catch (t5) {
        }
      }, d2 = this, p2 = 0; p2 < 2; p2++) {
        var g2 = l2(p2);
        if ("object" == typeof g2) return g2.value;
      }
    }
    throw new nt();
  }, t2.recordPattern = function(t3, e2, r2) {
    for (var n2 = r2.length, o2 = 0; o2 < n2; o2++) r2[o2] = 0;
    var i2 = t3.getSize();
    if (e2 >= i2) throw new nt();
    for (var a2 = !t3.get(e2), s2 = 0, u2 = e2; u2 < i2; ) {
      if (t3.get(u2) !== a2) r2[s2]++;
      else {
        if (++s2 === n2) break;
        r2[s2] = 1, a2 = !a2;
      }
      u2++;
    }
    if (s2 !== n2 && (s2 !== n2 - 1 || u2 !== i2)) throw new nt();
  }, t2.recordPatternInReverse = function(e2, r2, n2) {
    for (var o2 = n2.length, i2 = e2.get(r2); r2 > 0 && o2 >= 0; ) e2.get(--r2) !== i2 && (o2--, i2 = !i2);
    if (o2 >= 0) throw new nt();
    t2.recordPattern(e2, r2 + 1, n2);
  }, t2.patternMatchVariance = function(t3, e2, r2) {
    for (var n2 = t3.length, o2 = 0, i2 = 0, a2 = 0; a2 < n2; a2++) o2 += t3[a2], i2 += e2[a2];
    if (o2 < i2) return Number.POSITIVE_INFINITY;
    var s2 = o2 / i2;
    r2 *= s2;
    for (var u2 = 0, c2 = 0; c2 < n2; c2++) {
      var f2 = t3[c2], h2 = e2[c2] * s2, l2 = f2 > h2 ? f2 - h2 : h2 - f2;
      if (l2 > r2) return Number.POSITIVE_INFINITY;
      u2 += l2;
    }
    return u2 / o2;
  }, t2;
}();
var $t = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var te = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return $t(e2, t2), e2.findStartPattern = function(t3) {
    for (var r2 = t3.getSize(), n2 = t3.getNextSet(0), o2 = 0, i2 = Int32Array.from([0, 0, 0, 0, 0, 0]), a2 = n2, s2 = false, u2 = n2; u2 < r2; u2++) if (t3.get(u2) !== s2) i2[o2]++;
    else {
      if (5 === o2) {
        for (var c2 = e2.MAX_AVG_VARIANCE, f2 = -1, h2 = e2.CODE_START_A; h2 <= e2.CODE_START_C; h2++) {
          var l2 = Jt.patternMatchVariance(i2, e2.CODE_PATTERNS[h2], e2.MAX_INDIVIDUAL_VARIANCE);
          l2 < c2 && (c2 = l2, f2 = h2);
        }
        if (f2 >= 0 && t3.isRange(Math.max(0, a2 - (u2 - a2) / 2), a2, false)) return Int32Array.from([a2, u2, f2]);
        a2 += i2[0] + i2[1], (i2 = i2.slice(2, i2.length - 1))[o2 - 1] = 0, i2[o2] = 0, o2--;
      } else o2++;
      i2[o2] = 1, s2 = !s2;
    }
    throw new nt();
  }, e2.decodeCode = function(t3, r2, n2) {
    Jt.recordPattern(t3, n2, r2);
    for (var o2 = e2.MAX_AVG_VARIANCE, i2 = -1, a2 = 0; a2 < e2.CODE_PATTERNS.length; a2++) {
      var s2 = e2.CODE_PATTERNS[a2], u2 = this.patternMatchVariance(r2, s2, e2.MAX_INDIVIDUAL_VARIANCE);
      u2 < o2 && (o2 = u2, i2 = a2);
    }
    if (i2 >= 0) return i2;
    throw new nt();
  }, e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2 = n2 && true === n2.get(H.ASSUME_GS1), a2 = e2.findStartPattern(r2), s2 = a2[2], u2 = 0, c2 = new Uint8Array(20);
    switch (c2[u2++] = s2, s2) {
      case e2.CODE_START_A:
        o2 = e2.CODE_CODE_A;
        break;
      case e2.CODE_START_B:
        o2 = e2.CODE_CODE_B;
        break;
      case e2.CODE_START_C:
        o2 = e2.CODE_CODE_C;
        break;
      default:
        throw new Q();
    }
    for (var f2 = false, h2 = false, l2 = "", d2 = a2[0], p2 = a2[1], g2 = Int32Array.from([0, 0, 0, 0, 0, 0]), w2 = 0, A2 = 0, y2 = s2, C2 = 0, E2 = true, v2 = false, m2 = false; !f2; ) {
      var I2 = h2;
      switch (h2 = false, w2 = A2, A2 = e2.decodeCode(r2, g2, p2), c2[u2++] = A2, A2 !== e2.CODE_STOP && (E2 = true), A2 !== e2.CODE_STOP && (y2 += ++C2 * A2), d2 = p2, p2 += g2.reduce(function(t4, e3) {
        return t4 + e3;
      }, 0), A2) {
        case e2.CODE_START_A:
        case e2.CODE_START_B:
        case e2.CODE_START_C:
          throw new Q();
      }
      switch (o2) {
        case e2.CODE_CODE_A:
          if (A2 < 64) l2 += m2 === v2 ? String.fromCharCode(" ".charCodeAt(0) + A2) : String.fromCharCode(" ".charCodeAt(0) + A2 + 128), m2 = false;
          else if (A2 < 96) l2 += m2 === v2 ? String.fromCharCode(A2 - 64) : String.fromCharCode(A2 + 64), m2 = false;
          else switch (A2 !== e2.CODE_STOP && (E2 = false), A2) {
            case e2.CODE_FNC_1:
              i2 && (0 === l2.length ? l2 += "]C1" : l2 += String.fromCharCode(29));
              break;
            case e2.CODE_FNC_2:
            case e2.CODE_FNC_3:
              break;
            case e2.CODE_FNC_4_A:
              !v2 && m2 ? (v2 = true, m2 = false) : v2 && m2 ? (v2 = false, m2 = false) : m2 = true;
              break;
            case e2.CODE_SHIFT:
              h2 = true, o2 = e2.CODE_CODE_B;
              break;
            case e2.CODE_CODE_B:
              o2 = e2.CODE_CODE_B;
              break;
            case e2.CODE_CODE_C:
              o2 = e2.CODE_CODE_C;
              break;
            case e2.CODE_STOP:
              f2 = true;
          }
          break;
        case e2.CODE_CODE_B:
          if (A2 < 96) l2 += m2 === v2 ? String.fromCharCode(" ".charCodeAt(0) + A2) : String.fromCharCode(" ".charCodeAt(0) + A2 + 128), m2 = false;
          else switch (A2 !== e2.CODE_STOP && (E2 = false), A2) {
            case e2.CODE_FNC_1:
              i2 && (0 === l2.length ? l2 += "]C1" : l2 += String.fromCharCode(29));
              break;
            case e2.CODE_FNC_2:
            case e2.CODE_FNC_3:
              break;
            case e2.CODE_FNC_4_B:
              !v2 && m2 ? (v2 = true, m2 = false) : v2 && m2 ? (v2 = false, m2 = false) : m2 = true;
              break;
            case e2.CODE_SHIFT:
              h2 = true, o2 = e2.CODE_CODE_A;
              break;
            case e2.CODE_CODE_A:
              o2 = e2.CODE_CODE_A;
              break;
            case e2.CODE_CODE_C:
              o2 = e2.CODE_CODE_C;
              break;
            case e2.CODE_STOP:
              f2 = true;
          }
          break;
        case e2.CODE_CODE_C:
          if (A2 < 100) A2 < 10 && (l2 += "0"), l2 += A2;
          else switch (A2 !== e2.CODE_STOP && (E2 = false), A2) {
            case e2.CODE_FNC_1:
              i2 && (0 === l2.length ? l2 += "]C1" : l2 += String.fromCharCode(29));
              break;
            case e2.CODE_CODE_A:
              o2 = e2.CODE_CODE_A;
              break;
            case e2.CODE_CODE_B:
              o2 = e2.CODE_CODE_B;
              break;
            case e2.CODE_STOP:
              f2 = true;
          }
      }
      I2 && (o2 = o2 === e2.CODE_CODE_A ? e2.CODE_CODE_B : e2.CODE_CODE_A);
    }
    var _2 = p2 - d2;
    if (p2 = r2.getNextUnset(p2), !r2.isRange(p2, Math.min(r2.getSize(), p2 + (p2 - d2) / 2), false)) throw new nt();
    if ((y2 -= C2 * w2) % 103 !== w2) throw new M();
    var T2 = l2.length;
    if (0 === T2) throw new nt();
    T2 > 0 && E2 && (l2 = o2 === e2.CODE_CODE_C ? l2.substring(0, T2 - 2) : l2.substring(0, T2 - 1));
    for (var S2 = (a2[1] + a2[0]) / 2, B2 = d2 + _2 / 2, R2 = c2.length, D2 = new Uint8Array(R2), N2 = 0; N2 < R2; N2++) D2[N2] = c2[N2];
    var O2 = [new Vt(S2, t3), new Vt(B2, t3)];
    return new yt(l2, D2, 0, O2, Et.CODE_128, (/* @__PURE__ */ new Date()).getTime());
  }, e2.CODE_PATTERNS = [Int32Array.from([2, 1, 2, 2, 2, 2]), Int32Array.from([2, 2, 2, 1, 2, 2]), Int32Array.from([2, 2, 2, 2, 2, 1]), Int32Array.from([1, 2, 1, 2, 2, 3]), Int32Array.from([1, 2, 1, 3, 2, 2]), Int32Array.from([1, 3, 1, 2, 2, 2]), Int32Array.from([1, 2, 2, 2, 1, 3]), Int32Array.from([1, 2, 2, 3, 1, 2]), Int32Array.from([1, 3, 2, 2, 1, 2]), Int32Array.from([2, 2, 1, 2, 1, 3]), Int32Array.from([2, 2, 1, 3, 1, 2]), Int32Array.from([2, 3, 1, 2, 1, 2]), Int32Array.from([1, 1, 2, 2, 3, 2]), Int32Array.from([1, 2, 2, 1, 3, 2]), Int32Array.from([1, 2, 2, 2, 3, 1]), Int32Array.from([1, 1, 3, 2, 2, 2]), Int32Array.from([1, 2, 3, 1, 2, 2]), Int32Array.from([1, 2, 3, 2, 2, 1]), Int32Array.from([2, 2, 3, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 3, 2]), Int32Array.from([2, 2, 1, 2, 3, 1]), Int32Array.from([2, 1, 3, 2, 1, 2]), Int32Array.from([2, 2, 3, 1, 1, 2]), Int32Array.from([3, 1, 2, 1, 3, 1]), Int32Array.from([3, 1, 1, 2, 2, 2]), Int32Array.from([3, 2, 1, 1, 2, 2]), Int32Array.from([3, 2, 1, 2, 2, 1]), Int32Array.from([3, 1, 2, 2, 1, 2]), Int32Array.from([3, 2, 2, 1, 1, 2]), Int32Array.from([3, 2, 2, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 2, 3]), Int32Array.from([2, 1, 2, 3, 2, 1]), Int32Array.from([2, 3, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 3, 2, 3]), Int32Array.from([1, 3, 1, 1, 2, 3]), Int32Array.from([1, 3, 1, 3, 2, 1]), Int32Array.from([1, 1, 2, 3, 1, 3]), Int32Array.from([1, 3, 2, 1, 1, 3]), Int32Array.from([1, 3, 2, 3, 1, 1]), Int32Array.from([2, 1, 1, 3, 1, 3]), Int32Array.from([2, 3, 1, 1, 1, 3]), Int32Array.from([2, 3, 1, 3, 1, 1]), Int32Array.from([1, 1, 2, 1, 3, 3]), Int32Array.from([1, 1, 2, 3, 3, 1]), Int32Array.from([1, 3, 2, 1, 3, 1]), Int32Array.from([1, 1, 3, 1, 2, 3]), Int32Array.from([1, 1, 3, 3, 2, 1]), Int32Array.from([1, 3, 3, 1, 2, 1]), Int32Array.from([3, 1, 3, 1, 2, 1]), Int32Array.from([2, 1, 1, 3, 3, 1]), Int32Array.from([2, 3, 1, 1, 3, 1]), Int32Array.from([2, 1, 3, 1, 1, 3]), Int32Array.from([2, 1, 3, 3, 1, 1]), Int32Array.from([2, 1, 3, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 2, 3]), Int32Array.from([3, 1, 1, 3, 2, 1]), Int32Array.from([3, 3, 1, 1, 2, 1]), Int32Array.from([3, 1, 2, 1, 1, 3]), Int32Array.from([3, 1, 2, 3, 1, 1]), Int32Array.from([3, 3, 2, 1, 1, 1]), Int32Array.from([3, 1, 4, 1, 1, 1]), Int32Array.from([2, 2, 1, 4, 1, 1]), Int32Array.from([4, 3, 1, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 2, 4]), Int32Array.from([1, 1, 1, 4, 2, 2]), Int32Array.from([1, 2, 1, 1, 2, 4]), Int32Array.from([1, 2, 1, 4, 2, 1]), Int32Array.from([1, 4, 1, 1, 2, 2]), Int32Array.from([1, 4, 1, 2, 2, 1]), Int32Array.from([1, 1, 2, 2, 1, 4]), Int32Array.from([1, 1, 2, 4, 1, 2]), Int32Array.from([1, 2, 2, 1, 1, 4]), Int32Array.from([1, 2, 2, 4, 1, 1]), Int32Array.from([1, 4, 2, 1, 1, 2]), Int32Array.from([1, 4, 2, 2, 1, 1]), Int32Array.from([2, 4, 1, 2, 1, 1]), Int32Array.from([2, 2, 1, 1, 1, 4]), Int32Array.from([4, 1, 3, 1, 1, 1]), Int32Array.from([2, 4, 1, 1, 1, 2]), Int32Array.from([1, 3, 4, 1, 1, 1]), Int32Array.from([1, 1, 1, 2, 4, 2]), Int32Array.from([1, 2, 1, 1, 4, 2]), Int32Array.from([1, 2, 1, 2, 4, 1]), Int32Array.from([1, 1, 4, 2, 1, 2]), Int32Array.from([1, 2, 4, 1, 1, 2]), Int32Array.from([1, 2, 4, 2, 1, 1]), Int32Array.from([4, 1, 1, 2, 1, 2]), Int32Array.from([4, 2, 1, 1, 1, 2]), Int32Array.from([4, 2, 1, 2, 1, 1]), Int32Array.from([2, 1, 2, 1, 4, 1]), Int32Array.from([2, 1, 4, 1, 2, 1]), Int32Array.from([4, 1, 2, 1, 2, 1]), Int32Array.from([1, 1, 1, 1, 4, 3]), Int32Array.from([1, 1, 1, 3, 4, 1]), Int32Array.from([1, 3, 1, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 1, 3]), Int32Array.from([1, 1, 4, 3, 1, 1]), Int32Array.from([4, 1, 1, 1, 1, 3]), Int32Array.from([4, 1, 1, 3, 1, 1]), Int32Array.from([1, 1, 3, 1, 4, 1]), Int32Array.from([1, 1, 4, 1, 3, 1]), Int32Array.from([3, 1, 1, 1, 4, 1]), Int32Array.from([4, 1, 1, 1, 3, 1]), Int32Array.from([2, 1, 1, 4, 1, 2]), Int32Array.from([2, 1, 1, 2, 1, 4]), Int32Array.from([2, 1, 1, 2, 3, 2]), Int32Array.from([2, 3, 3, 1, 1, 1, 2])], e2.MAX_AVG_VARIANCE = 0.25, e2.MAX_INDIVIDUAL_VARIANCE = 0.7, e2.CODE_SHIFT = 98, e2.CODE_CODE_C = 99, e2.CODE_CODE_B = 100, e2.CODE_CODE_A = 101, e2.CODE_FNC_1 = 102, e2.CODE_FNC_2 = 97, e2.CODE_FNC_3 = 96, e2.CODE_FNC_4_A = 101, e2.CODE_FNC_4_B = 100, e2.CODE_START_A = 103, e2.CODE_START_B = 104, e2.CODE_START_C = 105, e2.CODE_STOP = 106, e2;
}(Jt);
var ee = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var re = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ne = function(t2) {
  function e2(e3, r2) {
    void 0 === e3 && (e3 = false), void 0 === r2 && (r2 = false);
    var n2 = t2.call(this) || this;
    return n2.usingCheckDigit = e3, n2.extendedMode = r2, n2.decodeRowResult = "", n2.counters = new Int32Array(9), n2;
  }
  return ee(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2, a2, s2, u2 = this.counters;
    u2.fill(0), this.decodeRowResult = "";
    var c2, f2, h2 = e2.findAsteriskPattern(r2, u2), l2 = r2.getNextSet(h2[1]), d2 = r2.getSize();
    do {
      e2.recordPattern(r2, l2, u2);
      var p2 = e2.toNarrowWidePattern(u2);
      if (p2 < 0) throw new nt();
      c2 = e2.patternToChar(p2), this.decodeRowResult += c2, f2 = l2;
      try {
        for (var g2 = (o2 = void 0, re(u2)), w2 = g2.next(); !w2.done; w2 = g2.next()) {
          l2 += w2.value;
        }
      } catch (t4) {
        o2 = { error: t4 };
      } finally {
        try {
          w2 && !w2.done && (i2 = g2.return) && i2.call(g2);
        } finally {
          if (o2) throw o2.error;
        }
      }
      l2 = r2.getNextSet(l2);
    } while ("*" !== c2);
    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
    var A2, y2 = 0;
    try {
      for (var C2 = re(u2), E2 = C2.next(); !E2.done; E2 = C2.next()) {
        y2 += E2.value;
      }
    } catch (t4) {
      a2 = { error: t4 };
    } finally {
      try {
        E2 && !E2.done && (s2 = C2.return) && s2.call(C2);
      } finally {
        if (a2) throw a2.error;
      }
    }
    if (l2 !== d2 && 2 * (l2 - f2 - y2) < y2) throw new nt();
    if (this.usingCheckDigit) {
      for (var v2 = this.decodeRowResult.length - 1, m2 = 0, I2 = 0; I2 < v2; I2++) m2 += e2.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(I2));
      if (this.decodeRowResult.charAt(v2) !== e2.ALPHABET_STRING.charAt(m2 % 43)) throw new M();
      this.decodeRowResult = this.decodeRowResult.substring(0, v2);
    }
    if (0 === this.decodeRowResult.length) throw new nt();
    A2 = this.extendedMode ? e2.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
    var _2 = (h2[1] + h2[0]) / 2, T2 = f2 + y2 / 2;
    return new yt(A2, null, 0, [new Vt(_2, t3), new Vt(T2, t3)], Et.CODE_39, (/* @__PURE__ */ new Date()).getTime());
  }, e2.findAsteriskPattern = function(t3, r2) {
    for (var n2 = t3.getSize(), o2 = t3.getNextSet(0), i2 = 0, a2 = o2, s2 = false, u2 = r2.length, c2 = o2; c2 < n2; c2++) if (t3.get(c2) !== s2) r2[i2]++;
    else {
      if (i2 === u2 - 1) {
        if (this.toNarrowWidePattern(r2) === e2.ASTERISK_ENCODING && t3.isRange(Math.max(0, a2 - Math.floor((c2 - a2) / 2)), a2, false)) return [a2, c2];
        a2 += r2[0] + r2[1], r2.copyWithin(0, 2, 2 + i2 - 1), r2[i2 - 1] = 0, r2[i2] = 0, i2--;
      } else i2++;
      r2[i2] = 1, s2 = !s2;
    }
    throw new nt();
  }, e2.toNarrowWidePattern = function(t3) {
    var e3, r2, n2, o2 = t3.length, i2 = 0;
    do {
      var a2 = 2147483647;
      try {
        for (var s2 = (e3 = void 0, re(t3)), u2 = s2.next(); !u2.done; u2 = s2.next()) {
          (l2 = u2.value) < a2 && l2 > i2 && (a2 = l2);
        }
      } catch (t4) {
        e3 = { error: t4 };
      } finally {
        try {
          u2 && !u2.done && (r2 = s2.return) && r2.call(s2);
        } finally {
          if (e3) throw e3.error;
        }
      }
      i2 = a2, n2 = 0;
      for (var c2 = 0, f2 = 0, h2 = 0; h2 < o2; h2++) {
        (l2 = t3[h2]) > i2 && (f2 |= 1 << o2 - 1 - h2, n2++, c2 += l2);
      }
      if (3 === n2) {
        for (h2 = 0; h2 < o2 && n2 > 0; h2++) {
          var l2;
          if ((l2 = t3[h2]) > i2 && (n2--, 2 * l2 >= c2)) return -1;
        }
        return f2;
      }
    } while (n2 > 3);
    return -1;
  }, e2.patternToChar = function(t3) {
    for (var r2 = 0; r2 < e2.CHARACTER_ENCODINGS.length; r2++) if (e2.CHARACTER_ENCODINGS[r2] === t3) return e2.ALPHABET_STRING.charAt(r2);
    if (t3 === e2.ASTERISK_ENCODING) return "*";
    throw new nt();
  }, e2.decodeExtended = function(t3) {
    for (var e3 = t3.length, r2 = "", n2 = 0; n2 < e3; n2++) {
      var o2 = t3.charAt(n2);
      if ("+" === o2 || "$" === o2 || "%" === o2 || "/" === o2) {
        var i2 = t3.charAt(n2 + 1), a2 = "\0";
        switch (o2) {
          case "+":
            if (!(i2 >= "A" && i2 <= "Z")) throw new Q();
            a2 = String.fromCharCode(i2.charCodeAt(0) + 32);
            break;
          case "$":
            if (!(i2 >= "A" && i2 <= "Z")) throw new Q();
            a2 = String.fromCharCode(i2.charCodeAt(0) - 64);
            break;
          case "%":
            if (i2 >= "A" && i2 <= "E") a2 = String.fromCharCode(i2.charCodeAt(0) - 38);
            else if (i2 >= "F" && i2 <= "J") a2 = String.fromCharCode(i2.charCodeAt(0) - 11);
            else if (i2 >= "K" && i2 <= "O") a2 = String.fromCharCode(i2.charCodeAt(0) + 16);
            else if (i2 >= "P" && i2 <= "T") a2 = String.fromCharCode(i2.charCodeAt(0) + 43);
            else if ("U" === i2) a2 = "\0";
            else if ("V" === i2) a2 = "@";
            else if ("W" === i2) a2 = "`";
            else {
              if ("X" !== i2 && "Y" !== i2 && "Z" !== i2) throw new Q();
              a2 = "";
            }
            break;
          case "/":
            if (i2 >= "A" && i2 <= "O") a2 = String.fromCharCode(i2.charCodeAt(0) - 32);
            else {
              if ("Z" !== i2) throw new Q();
              a2 = ":";
            }
        }
        r2 += a2, n2++;
      } else r2 += o2;
    }
    return r2;
  }, e2.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", e2.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42], e2.ASTERISK_ENCODING = 148, e2;
}(Jt);
var oe = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ie = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ae = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeRowResult = "", e3.counters = new Int32Array(6), e3;
  }
  return oe(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2, a2, s2, u2, c2, f2 = this.findAsteriskPattern(r2), h2 = r2.getNextSet(f2[1]), l2 = r2.getSize(), d2 = this.counters;
    d2.fill(0), this.decodeRowResult = "";
    do {
      e2.recordPattern(r2, h2, d2);
      var p2 = this.toPattern(d2);
      if (p2 < 0) throw new nt();
      u2 = this.patternToChar(p2), this.decodeRowResult += u2, c2 = h2;
      try {
        for (var g2 = (o2 = void 0, ie(d2)), w2 = g2.next(); !w2.done; w2 = g2.next()) {
          h2 += w2.value;
        }
      } catch (t4) {
        o2 = { error: t4 };
      } finally {
        try {
          w2 && !w2.done && (i2 = g2.return) && i2.call(g2);
        } finally {
          if (o2) throw o2.error;
        }
      }
      h2 = r2.getNextSet(h2);
    } while ("*" !== u2);
    this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
    var A2 = 0;
    try {
      for (var y2 = ie(d2), C2 = y2.next(); !C2.done; C2 = y2.next()) {
        A2 += C2.value;
      }
    } catch (t4) {
      a2 = { error: t4 };
    } finally {
      try {
        C2 && !C2.done && (s2 = y2.return) && s2.call(y2);
      } finally {
        if (a2) throw a2.error;
      }
    }
    if (h2 === l2 || !r2.get(h2)) throw new nt();
    if (this.decodeRowResult.length < 2) throw new nt();
    this.checkChecksums(this.decodeRowResult), this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 2);
    var E2 = this.decodeExtended(this.decodeRowResult), v2 = (f2[1] + f2[0]) / 2, m2 = c2 + A2 / 2;
    return new yt(E2, null, 0, [new Vt(v2, t3), new Vt(m2, t3)], Et.CODE_93, (/* @__PURE__ */ new Date()).getTime());
  }, e2.prototype.findAsteriskPattern = function(t3) {
    var r2 = t3.getSize(), n2 = t3.getNextSet(0);
    this.counters.fill(0);
    for (var o2 = this.counters, i2 = n2, a2 = false, s2 = o2.length, u2 = 0, c2 = n2; c2 < r2; c2++) if (t3.get(c2) !== a2) o2[u2]++;
    else {
      if (u2 === s2 - 1) {
        if (this.toPattern(o2) === e2.ASTERISK_ENCODING) return new Int32Array([i2, c2]);
        i2 += o2[0] + o2[1], o2.copyWithin(0, 2, 2 + u2 - 1), o2[u2 - 1] = 0, o2[u2] = 0, u2--;
      } else u2++;
      o2[u2] = 1, a2 = !a2;
    }
    throw new nt();
  }, e2.prototype.toPattern = function(t3) {
    var e3, r2, n2 = 0;
    try {
      for (var o2 = ie(t3), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        n2 += i2.value;
      }
    } catch (t4) {
      e3 = { error: t4 };
    } finally {
      try {
        i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
      } finally {
        if (e3) throw e3.error;
      }
    }
    for (var a2 = 0, s2 = t3.length, u2 = 0; u2 < s2; u2++) {
      var c2 = Math.round(9 * t3[u2] / n2);
      if (c2 < 1 || c2 > 4) return -1;
      if (0 == (1 & u2)) for (var f2 = 0; f2 < c2; f2++) a2 = a2 << 1 | 1;
      else a2 <<= c2;
    }
    return a2;
  }, e2.prototype.patternToChar = function(t3) {
    for (var r2 = 0; r2 < e2.CHARACTER_ENCODINGS.length; r2++) if (e2.CHARACTER_ENCODINGS[r2] === t3) return e2.ALPHABET_STRING.charAt(r2);
    throw new nt();
  }, e2.prototype.decodeExtended = function(t3) {
    for (var e3 = t3.length, r2 = "", n2 = 0; n2 < e3; n2++) {
      var o2 = t3.charAt(n2);
      if (o2 >= "a" && o2 <= "d") {
        if (n2 >= e3 - 1) throw new Q();
        var i2 = t3.charAt(n2 + 1), a2 = "\0";
        switch (o2) {
          case "d":
            if (!(i2 >= "A" && i2 <= "Z")) throw new Q();
            a2 = String.fromCharCode(i2.charCodeAt(0) + 32);
            break;
          case "a":
            if (!(i2 >= "A" && i2 <= "Z")) throw new Q();
            a2 = String.fromCharCode(i2.charCodeAt(0) - 64);
            break;
          case "b":
            if (i2 >= "A" && i2 <= "E") a2 = String.fromCharCode(i2.charCodeAt(0) - 38);
            else if (i2 >= "F" && i2 <= "J") a2 = String.fromCharCode(i2.charCodeAt(0) - 11);
            else if (i2 >= "K" && i2 <= "O") a2 = String.fromCharCode(i2.charCodeAt(0) + 16);
            else if (i2 >= "P" && i2 <= "T") a2 = String.fromCharCode(i2.charCodeAt(0) + 43);
            else if ("U" === i2) a2 = "\0";
            else if ("V" === i2) a2 = "@";
            else if ("W" === i2) a2 = "`";
            else {
              if (!(i2 >= "X" && i2 <= "Z")) throw new Q();
              a2 = String.fromCharCode(127);
            }
            break;
          case "c":
            if (i2 >= "A" && i2 <= "O") a2 = String.fromCharCode(i2.charCodeAt(0) - 32);
            else {
              if ("Z" !== i2) throw new Q();
              a2 = ":";
            }
        }
        r2 += a2, n2++;
      } else r2 += o2;
    }
    return r2;
  }, e2.prototype.checkChecksums = function(t3) {
    var e3 = t3.length;
    this.checkOneChecksum(t3, e3 - 2, 20), this.checkOneChecksum(t3, e3 - 1, 15);
  }, e2.prototype.checkOneChecksum = function(t3, r2, n2) {
    for (var o2 = 1, i2 = 0, a2 = r2 - 1; a2 >= 0; a2--) i2 += o2 * e2.ALPHABET_STRING.indexOf(t3.charAt(a2)), ++o2 > n2 && (o2 = 1);
    if (t3.charAt(r2) !== e2.ALPHABET_STRING[i2 % 47]) throw new M();
  }, e2.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*", e2.CHARACTER_ENCODINGS = [276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350], e2.ASTERISK_ENCODING = e2.CHARACTER_ENCODINGS[47], e2;
}(Jt);
var se = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ue = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ce = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.narrowLineWidth = -1, e3;
  }
  return se(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2, a2 = this.decodeStart(r2), s2 = this.decodeEnd(r2), u2 = new tt();
    e2.decodeMiddle(r2, a2[1], s2[0], u2);
    var c2 = u2.toString(), f2 = null;
    null != n2 && (f2 = n2.get(H.ALLOWED_LENGTHS)), null == f2 && (f2 = e2.DEFAULT_ALLOWED_LENGTHS);
    var h2 = c2.length, l2 = false, d2 = 0;
    try {
      for (var p2 = ue(f2), g2 = p2.next(); !g2.done; g2 = p2.next()) {
        var w2 = g2.value;
        if (h2 === w2) {
          l2 = true;
          break;
        }
        w2 > d2 && (d2 = w2);
      }
    } catch (t4) {
      o2 = { error: t4 };
    } finally {
      try {
        g2 && !g2.done && (i2 = p2.return) && i2.call(p2);
      } finally {
        if (o2) throw o2.error;
      }
    }
    if (!l2 && h2 > d2 && (l2 = true), !l2) throw new Q();
    var A2 = [new Vt(a2[1], t3), new Vt(s2[0], t3)];
    return new yt(c2, null, 0, A2, Et.ITF, (/* @__PURE__ */ new Date()).getTime());
  }, e2.decodeMiddle = function(t3, r2, n2, o2) {
    var i2 = new Int32Array(10), a2 = new Int32Array(5), s2 = new Int32Array(5);
    for (i2.fill(0), a2.fill(0), s2.fill(0); r2 < n2; ) {
      Jt.recordPattern(t3, r2, i2);
      for (var u2 = 0; u2 < 5; u2++) {
        var c2 = 2 * u2;
        a2[u2] = i2[c2], s2[u2] = i2[c2 + 1];
      }
      var f2 = e2.decodeDigit(a2);
      o2.append(f2.toString()), f2 = this.decodeDigit(s2), o2.append(f2.toString()), i2.forEach(function(t4) {
        r2 += t4;
      });
    }
  }, e2.prototype.decodeStart = function(t3) {
    var r2 = e2.skipWhiteSpace(t3), n2 = e2.findGuardPattern(t3, r2, e2.START_PATTERN);
    return this.narrowLineWidth = (n2[1] - n2[0]) / 4, this.validateQuietZone(t3, n2[0]), n2;
  }, e2.prototype.validateQuietZone = function(t3, e3) {
    var r2 = 10 * this.narrowLineWidth;
    r2 = r2 < e3 ? r2 : e3;
    for (var n2 = e3 - 1; r2 > 0 && n2 >= 0 && !t3.get(n2); n2--) r2--;
    if (0 !== r2) throw new nt();
  }, e2.skipWhiteSpace = function(t3) {
    var e3 = t3.getSize(), r2 = t3.getNextSet(0);
    if (r2 === e3) throw new nt();
    return r2;
  }, e2.prototype.decodeEnd = function(t3) {
    t3.reverse();
    try {
      var r2 = e2.skipWhiteSpace(t3), n2 = void 0;
      try {
        n2 = e2.findGuardPattern(t3, r2, e2.END_PATTERN_REVERSED[0]);
      } catch (o3) {
        o3 instanceof nt && (n2 = e2.findGuardPattern(t3, r2, e2.END_PATTERN_REVERSED[1]));
      }
      this.validateQuietZone(t3, n2[0]);
      var o2 = n2[0];
      return n2[0] = t3.getSize() - n2[1], n2[1] = t3.getSize() - o2, n2;
    } finally {
      t3.reverse();
    }
  }, e2.findGuardPattern = function(t3, r2, n2) {
    var o2 = n2.length, i2 = new Int32Array(o2), a2 = t3.getSize(), s2 = false, u2 = 0, c2 = r2;
    i2.fill(0);
    for (var f2 = r2; f2 < a2; f2++) if (t3.get(f2) !== s2) i2[u2]++;
    else {
      if (u2 === o2 - 1) {
        if (Jt.patternMatchVariance(i2, n2, e2.MAX_INDIVIDUAL_VARIANCE) < e2.MAX_AVG_VARIANCE) return [c2, f2];
        c2 += i2[0] + i2[1], P.arraycopy(i2, 2, i2, 0, u2 - 1), i2[u2 - 1] = 0, i2[u2] = 0, u2--;
      } else u2++;
      i2[u2] = 1, s2 = !s2;
    }
    throw new nt();
  }, e2.decodeDigit = function(t3) {
    for (var r2 = e2.MAX_AVG_VARIANCE, n2 = -1, o2 = e2.PATTERNS.length, i2 = 0; i2 < o2; i2++) {
      var a2 = e2.PATTERNS[i2], s2 = Jt.patternMatchVariance(t3, a2, e2.MAX_INDIVIDUAL_VARIANCE);
      s2 < r2 ? (r2 = s2, n2 = i2) : s2 === r2 && (n2 = -1);
    }
    if (n2 >= 0) return n2 % 10;
    throw new nt();
  }, e2.PATTERNS = [Int32Array.from([1, 1, 2, 2, 1]), Int32Array.from([2, 1, 1, 1, 2]), Int32Array.from([1, 2, 1, 1, 2]), Int32Array.from([2, 2, 1, 1, 1]), Int32Array.from([1, 1, 2, 1, 2]), Int32Array.from([2, 1, 2, 1, 1]), Int32Array.from([1, 2, 2, 1, 1]), Int32Array.from([1, 1, 1, 2, 2]), Int32Array.from([2, 1, 1, 2, 1]), Int32Array.from([1, 2, 1, 2, 1]), Int32Array.from([1, 1, 3, 3, 1]), Int32Array.from([3, 1, 1, 1, 3]), Int32Array.from([1, 3, 1, 1, 3]), Int32Array.from([3, 3, 1, 1, 1]), Int32Array.from([1, 1, 3, 1, 3]), Int32Array.from([3, 1, 3, 1, 1]), Int32Array.from([1, 3, 3, 1, 1]), Int32Array.from([1, 1, 1, 3, 3]), Int32Array.from([3, 1, 1, 3, 1]), Int32Array.from([1, 3, 1, 3, 1])], e2.MAX_AVG_VARIANCE = 0.38, e2.MAX_INDIVIDUAL_VARIANCE = 0.5, e2.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], e2.START_PATTERN = Int32Array.from([1, 1, 1, 1]), e2.END_PATTERN_REVERSED = [Int32Array.from([1, 1, 2]), Int32Array.from([1, 1, 3])], e2;
}(Jt);
var fe = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var he = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.decodeRowStringBuffer = "", e3;
  }
  return fe(e2, t2), e2.findStartGuardPattern = function(t3) {
    for (var r2, n2 = false, o2 = 0, i2 = Int32Array.from([0, 0, 0]); !n2; ) {
      i2 = Int32Array.from([0, 0, 0]);
      var a2 = (r2 = e2.findGuardPattern(t3, o2, false, this.START_END_PATTERN, i2))[0], s2 = a2 - ((o2 = r2[1]) - a2);
      s2 >= 0 && (n2 = t3.isRange(s2, a2, false));
    }
    return r2;
  }, e2.checkChecksum = function(t3) {
    return e2.checkStandardUPCEANChecksum(t3);
  }, e2.checkStandardUPCEANChecksum = function(t3) {
    var r2 = t3.length;
    if (0 === r2) return false;
    var n2 = parseInt(t3.charAt(r2 - 1), 10);
    return e2.getStandardUPCEANChecksum(t3.substring(0, r2 - 1)) === n2;
  }, e2.getStandardUPCEANChecksum = function(t3) {
    for (var e3 = t3.length, r2 = 0, n2 = e3 - 1; n2 >= 0; n2 -= 2) {
      if ((o2 = t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o2 > 9) throw new Q();
      r2 += o2;
    }
    r2 *= 3;
    for (n2 = e3 - 2; n2 >= 0; n2 -= 2) {
      var o2;
      if ((o2 = t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o2 > 9) throw new Q();
      r2 += o2;
    }
    return (1e3 - r2) % 10;
  }, e2.decodeEnd = function(t3, r2) {
    return e2.findGuardPattern(t3, r2, false, e2.START_END_PATTERN, new Int32Array(e2.START_END_PATTERN.length).fill(0));
  }, e2.findGuardPatternWithoutCounters = function(t3, e3, r2, n2) {
    return this.findGuardPattern(t3, e3, r2, n2, new Int32Array(n2.length));
  }, e2.findGuardPattern = function(t3, r2, n2, o2, i2) {
    for (var a2 = t3.getSize(), s2 = 0, u2 = r2 = n2 ? t3.getNextUnset(r2) : t3.getNextSet(r2), c2 = o2.length, f2 = n2, h2 = r2; h2 < a2; h2++) if (t3.get(h2) !== f2) i2[s2]++;
    else {
      if (s2 === c2 - 1) {
        if (Jt.patternMatchVariance(i2, o2, e2.MAX_INDIVIDUAL_VARIANCE) < e2.MAX_AVG_VARIANCE) return Int32Array.from([u2, h2]);
        u2 += i2[0] + i2[1];
        for (var l2 = i2.slice(2, i2.length), d2 = 0; d2 < s2 - 1; d2++) i2[d2] = l2[d2];
        i2[s2 - 1] = 0, i2[s2] = 0, s2--;
      } else s2++;
      i2[s2] = 1, f2 = !f2;
    }
    throw new nt();
  }, e2.decodeDigit = function(t3, r2, n2, o2) {
    this.recordPattern(t3, n2, r2);
    for (var i2 = this.MAX_AVG_VARIANCE, a2 = -1, s2 = o2.length, u2 = 0; u2 < s2; u2++) {
      var c2 = o2[u2], f2 = Jt.patternMatchVariance(r2, c2, e2.MAX_INDIVIDUAL_VARIANCE);
      f2 < i2 && (i2 = f2, a2 = u2);
    }
    if (a2 >= 0) return a2;
    throw new nt();
  }, e2.MAX_AVG_VARIANCE = 0.48, e2.MAX_INDIVIDUAL_VARIANCE = 0.7, e2.START_END_PATTERN = Int32Array.from([1, 1, 1]), e2.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), e2.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), e2.L_PATTERNS = [Int32Array.from([3, 2, 1, 1]), Int32Array.from([2, 2, 2, 1]), Int32Array.from([2, 1, 2, 2]), Int32Array.from([1, 4, 1, 1]), Int32Array.from([1, 1, 3, 2]), Int32Array.from([1, 2, 3, 1]), Int32Array.from([1, 1, 1, 4]), Int32Array.from([1, 3, 1, 2]), Int32Array.from([1, 2, 1, 3]), Int32Array.from([3, 1, 1, 2])], e2;
}(Jt);
var le = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var de = function() {
  function t2() {
    this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
  }
  return t2.prototype.decodeRow = function(e2, r2, n2) {
    var o2 = this.decodeRowStringBuffer, i2 = this.decodeMiddle(r2, n2, o2), a2 = o2.toString(), s2 = t2.parseExtensionString(a2), u2 = [new Vt((n2[0] + n2[1]) / 2, e2), new Vt(i2, e2)], c2 = new yt(a2, null, 0, u2, Et.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
    return null != s2 && c2.putAllMetadata(s2), c2;
  }, t2.prototype.decodeMiddle = function(e2, r2, n2) {
    var o2, i2, a2 = this.decodeMiddleCounters;
    a2[0] = 0, a2[1] = 0, a2[2] = 0, a2[3] = 0;
    for (var s2 = e2.getSize(), u2 = r2[1], c2 = 0, f2 = 0; f2 < 5 && u2 < s2; f2++) {
      var h2 = he.decodeDigit(e2, a2, u2, he.L_AND_G_PATTERNS);
      n2 += String.fromCharCode("0".charCodeAt(0) + h2 % 10);
      try {
        for (var l2 = (o2 = void 0, le(a2)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
          u2 += d2.value;
        }
      } catch (t3) {
        o2 = { error: t3 };
      } finally {
        try {
          d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
        } finally {
          if (o2) throw o2.error;
        }
      }
      h2 >= 10 && (c2 |= 1 << 4 - f2), 4 !== f2 && (u2 = e2.getNextSet(u2), u2 = e2.getNextUnset(u2));
    }
    if (5 !== n2.length) throw new nt();
    var p2 = this.determineCheckDigit(c2);
    if (t2.extensionChecksum(n2.toString()) !== p2) throw new nt();
    return u2;
  }, t2.extensionChecksum = function(t3) {
    for (var e2 = t3.length, r2 = 0, n2 = e2 - 2; n2 >= 0; n2 -= 2) r2 += t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0);
    r2 *= 3;
    for (n2 = e2 - 1; n2 >= 0; n2 -= 2) r2 += t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0);
    return (r2 *= 3) % 10;
  }, t2.prototype.determineCheckDigit = function(t3) {
    for (var e2 = 0; e2 < 10; e2++) if (t3 === this.CHECK_DIGIT_ENCODINGS[e2]) return e2;
    throw new nt();
  }, t2.parseExtensionString = function(e2) {
    if (5 !== e2.length) return null;
    var r2 = t2.parseExtension5String(e2);
    return null == r2 ? null : /* @__PURE__ */ new Map([[mt.SUGGESTED_PRICE, r2]]);
  }, t2.parseExtension5String = function(t3) {
    var e2;
    switch (t3.charAt(0)) {
      case "0":
        e2 = "£";
        break;
      case "5":
        e2 = "$";
        break;
      case "9":
        switch (t3) {
          case "90000":
            return null;
          case "99991":
            return "0.00";
          case "99990":
            return "Used";
        }
        e2 = "";
        break;
      default:
        e2 = "";
    }
    var r2 = parseInt(t3.substring(1)), n2 = r2 % 100;
    return e2 + (r2 / 100).toString() + "." + (n2 < 10 ? "0" + n2 : n2.toString());
  }, t2;
}();
var pe = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ge = function() {
  function t2() {
    this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
  }
  return t2.prototype.decodeRow = function(e2, r2, n2) {
    var o2 = this.decodeRowStringBuffer, i2 = this.decodeMiddle(r2, n2, o2), a2 = o2.toString(), s2 = t2.parseExtensionString(a2), u2 = [new Vt((n2[0] + n2[1]) / 2, e2), new Vt(i2, e2)], c2 = new yt(a2, null, 0, u2, Et.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
    return null != s2 && c2.putAllMetadata(s2), c2;
  }, t2.prototype.decodeMiddle = function(t3, e2, r2) {
    var n2, o2, i2 = this.decodeMiddleCounters;
    i2[0] = 0, i2[1] = 0, i2[2] = 0, i2[3] = 0;
    for (var a2 = t3.getSize(), s2 = e2[1], u2 = 0, c2 = 0; c2 < 2 && s2 < a2; c2++) {
      var f2 = he.decodeDigit(t3, i2, s2, he.L_AND_G_PATTERNS);
      r2 += String.fromCharCode("0".charCodeAt(0) + f2 % 10);
      try {
        for (var h2 = (n2 = void 0, pe(i2)), l2 = h2.next(); !l2.done; l2 = h2.next()) {
          s2 += l2.value;
        }
      } catch (t4) {
        n2 = { error: t4 };
      } finally {
        try {
          l2 && !l2.done && (o2 = h2.return) && o2.call(h2);
        } finally {
          if (n2) throw n2.error;
        }
      }
      f2 >= 10 && (u2 |= 1 << 1 - c2), 1 !== c2 && (s2 = t3.getNextSet(s2), s2 = t3.getNextUnset(s2));
    }
    if (2 !== r2.length) throw new nt();
    if (parseInt(r2.toString()) % 4 !== u2) throw new nt();
    return s2;
  }, t2.parseExtensionString = function(t3) {
    return 2 !== t3.length ? null : /* @__PURE__ */ new Map([[mt.ISSUE_NUMBER, parseInt(t3)]]);
  }, t2;
}();
var we = function() {
  function t2() {
  }
  return t2.decodeRow = function(t3, e2, r2) {
    var n2 = he.findGuardPattern(e2, r2, false, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
    try {
      return new de().decodeRow(t3, e2, n2);
    } catch (r3) {
      return new ge().decodeRow(t3, e2, n2);
    }
  }, t2.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]), t2;
}();
var Ae = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ye = function(t2) {
  function e2() {
    var r2 = t2.call(this) || this;
    r2.decodeRowStringBuffer = "", e2.L_AND_G_PATTERNS = e2.L_PATTERNS.map(function(t3) {
      return Int32Array.from(t3);
    });
    for (var n2 = 10; n2 < 20; n2++) {
      for (var o2 = e2.L_PATTERNS[n2 - 10], i2 = new Int32Array(o2.length), a2 = 0; a2 < o2.length; a2++) i2[a2] = o2[o2.length - a2 - 1];
      e2.L_AND_G_PATTERNS[n2] = i2;
    }
    return r2;
  }
  return Ae(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2 = e2.findStartGuardPattern(r2), i2 = null == n2 ? null : n2.get(H.NEED_RESULT_POINT_CALLBACK);
    if (null != i2) {
      var a2 = new Vt((o2[0] + o2[1]) / 2, t3);
      i2.foundPossibleResultPoint(a2);
    }
    var s2 = this.decodeMiddle(r2, o2, this.decodeRowStringBuffer), u2 = s2.rowOffset, c2 = s2.resultString;
    if (null != i2) {
      var f2 = new Vt(u2, t3);
      i2.foundPossibleResultPoint(f2);
    }
    var h2 = e2.decodeEnd(r2, u2);
    if (null != i2) {
      var l2 = new Vt((h2[0] + h2[1]) / 2, t3);
      i2.foundPossibleResultPoint(l2);
    }
    var d2 = h2[1], p2 = d2 + (d2 - h2[0]);
    if (p2 >= r2.getSize() || !r2.isRange(d2, p2, false)) throw new nt();
    var g2 = c2.toString();
    if (g2.length < 8) throw new Q();
    if (!e2.checkChecksum(g2)) throw new M();
    var w2 = (o2[1] + o2[0]) / 2, A2 = (h2[1] + h2[0]) / 2, y2 = this.getBarcodeFormat(), C2 = [new Vt(w2, t3), new Vt(A2, t3)], E2 = new yt(g2, null, 0, C2, y2, (/* @__PURE__ */ new Date()).getTime()), v2 = 0;
    try {
      var m2 = we.decodeRow(t3, r2, h2[1]);
      E2.putMetadata(mt.UPC_EAN_EXTENSION, m2.getText()), E2.putAllMetadata(m2.getResultMetadata()), E2.addResultPoints(m2.getResultPoints()), v2 = m2.getText().length;
    } catch (t4) {
    }
    var I2 = null == n2 ? null : n2.get(H.ALLOWED_EAN_EXTENSIONS);
    if (null != I2) {
      var _2 = false;
      for (var T2 in I2) if (v2.toString() === T2) {
        _2 = true;
        break;
      }
      if (!_2) throw new nt();
    }
    return y2 === Et.EAN_13 || Et.UPC_A, E2;
  }, e2.checkChecksum = function(t3) {
    return e2.checkStandardUPCEANChecksum(t3);
  }, e2.checkStandardUPCEANChecksum = function(t3) {
    var r2 = t3.length;
    if (0 === r2) return false;
    var n2 = parseInt(t3.charAt(r2 - 1), 10);
    return e2.getStandardUPCEANChecksum(t3.substring(0, r2 - 1)) === n2;
  }, e2.getStandardUPCEANChecksum = function(t3) {
    for (var e3 = t3.length, r2 = 0, n2 = e3 - 1; n2 >= 0; n2 -= 2) {
      if ((o2 = t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o2 > 9) throw new Q();
      r2 += o2;
    }
    r2 *= 3;
    for (n2 = e3 - 2; n2 >= 0; n2 -= 2) {
      var o2;
      if ((o2 = t3.charAt(n2).charCodeAt(0) - "0".charCodeAt(0)) < 0 || o2 > 9) throw new Q();
      r2 += o2;
    }
    return (1e3 - r2) % 10;
  }, e2.decodeEnd = function(t3, r2) {
    return e2.findGuardPattern(t3, r2, false, e2.START_END_PATTERN, new Int32Array(e2.START_END_PATTERN.length).fill(0));
  }, e2;
}(he);
var Ce = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ee = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ve = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), e3;
  }
  return Ce(e2, t2), e2.prototype.decodeMiddle = function(t3, r2, n2) {
    var o2, i2, a2, s2, u2 = this.decodeMiddleCounters;
    u2[0] = 0, u2[1] = 0, u2[2] = 0, u2[3] = 0;
    for (var c2 = t3.getSize(), f2 = r2[1], h2 = 0, l2 = 0; l2 < 6 && f2 < c2; l2++) {
      var d2 = ye.decodeDigit(t3, u2, f2, ye.L_AND_G_PATTERNS);
      n2 += String.fromCharCode("0".charCodeAt(0) + d2 % 10);
      try {
        for (var p2 = (o2 = void 0, Ee(u2)), g2 = p2.next(); !g2.done; g2 = p2.next()) {
          f2 += g2.value;
        }
      } catch (t4) {
        o2 = { error: t4 };
      } finally {
        try {
          g2 && !g2.done && (i2 = p2.return) && i2.call(p2);
        } finally {
          if (o2) throw o2.error;
        }
      }
      d2 >= 10 && (h2 |= 1 << 5 - l2);
    }
    n2 = e2.determineFirstDigit(n2, h2), f2 = ye.findGuardPattern(t3, f2, true, ye.MIDDLE_PATTERN, new Int32Array(ye.MIDDLE_PATTERN.length).fill(0))[1];
    for (l2 = 0; l2 < 6 && f2 < c2; l2++) {
      d2 = ye.decodeDigit(t3, u2, f2, ye.L_PATTERNS);
      n2 += String.fromCharCode("0".charCodeAt(0) + d2);
      try {
        for (var w2 = (a2 = void 0, Ee(u2)), A2 = w2.next(); !A2.done; A2 = w2.next()) {
          f2 += A2.value;
        }
      } catch (t4) {
        a2 = { error: t4 };
      } finally {
        try {
          A2 && !A2.done && (s2 = w2.return) && s2.call(w2);
        } finally {
          if (a2) throw a2.error;
        }
      }
    }
    return { rowOffset: f2, resultString: n2 };
  }, e2.prototype.getBarcodeFormat = function() {
    return Et.EAN_13;
  }, e2.determineFirstDigit = function(t3, e3) {
    for (var r2 = 0; r2 < 10; r2++) if (e3 === this.FIRST_DIGIT_ENCODINGS[r2]) return t3 = String.fromCharCode("0".charCodeAt(0) + r2) + t3;
    throw new nt();
  }, e2.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], e2;
}(ye);
var me = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ie = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _e = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), e3;
  }
  return me(e2, t2), e2.prototype.decodeMiddle = function(t3, e3, r2) {
    var n2, o2, i2, a2, s2 = this.decodeMiddleCounters;
    s2[0] = 0, s2[1] = 0, s2[2] = 0, s2[3] = 0;
    for (var u2 = t3.getSize(), c2 = e3[1], f2 = 0; f2 < 4 && c2 < u2; f2++) {
      var h2 = ye.decodeDigit(t3, s2, c2, ye.L_PATTERNS);
      r2 += String.fromCharCode("0".charCodeAt(0) + h2);
      try {
        for (var l2 = (n2 = void 0, Ie(s2)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
          c2 += d2.value;
        }
      } catch (t4) {
        n2 = { error: t4 };
      } finally {
        try {
          d2 && !d2.done && (o2 = l2.return) && o2.call(l2);
        } finally {
          if (n2) throw n2.error;
        }
      }
    }
    c2 = ye.findGuardPattern(t3, c2, true, ye.MIDDLE_PATTERN, new Int32Array(ye.MIDDLE_PATTERN.length).fill(0))[1];
    for (f2 = 0; f2 < 4 && c2 < u2; f2++) {
      h2 = ye.decodeDigit(t3, s2, c2, ye.L_PATTERNS);
      r2 += String.fromCharCode("0".charCodeAt(0) + h2);
      try {
        for (var p2 = (i2 = void 0, Ie(s2)), g2 = p2.next(); !g2.done; g2 = p2.next()) {
          c2 += g2.value;
        }
      } catch (t4) {
        i2 = { error: t4 };
      } finally {
        try {
          g2 && !g2.done && (a2 = p2.return) && a2.call(p2);
        } finally {
          if (i2) throw i2.error;
        }
      }
    }
    return { rowOffset: c2, resultString: r2 };
  }, e2.prototype.getBarcodeFormat = function() {
    return Et.EAN_8;
  }, e2;
}(ye);
var Te = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Se = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.ean13Reader = new ve(), e3;
  }
  return Te(e2, t2), e2.prototype.getBarcodeFormat = function() {
    return Et.UPC_A;
  }, e2.prototype.decode = function(t3, e3) {
    return this.maybeReturnResult(this.ean13Reader.decode(t3));
  }, e2.prototype.decodeRow = function(t3, e3, r2) {
    return this.maybeReturnResult(this.ean13Reader.decodeRow(t3, e3, r2));
  }, e2.prototype.decodeMiddle = function(t3, e3, r2) {
    return this.ean13Reader.decodeMiddle(t3, e3, r2);
  }, e2.prototype.maybeReturnResult = function(t3) {
    var e3 = t3.getText();
    if ("0" === e3.charAt(0)) {
      var r2 = new yt(e3.substring(1), null, null, t3.getResultPoints(), Et.UPC_A);
      return null != t3.getResultMetadata() && r2.putAllMetadata(t3.getResultMetadata()), r2;
    }
    throw new nt();
  }, e2.prototype.reset = function() {
    this.ean13Reader.reset();
  }, e2;
}(ye);
var Be = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Re = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var De = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeMiddleCounters = new Int32Array(4), e3;
  }
  return Be(e2, t2), e2.prototype.decodeMiddle = function(t3, r2, n2) {
    var o2, i2, a2 = this.decodeMiddleCounters.map(function(t4) {
      return t4;
    });
    a2[0] = 0, a2[1] = 0, a2[2] = 0, a2[3] = 0;
    for (var s2 = t3.getSize(), u2 = r2[1], c2 = 0, f2 = 0; f2 < 6 && u2 < s2; f2++) {
      var h2 = e2.decodeDigit(t3, a2, u2, e2.L_AND_G_PATTERNS);
      n2 += String.fromCharCode("0".charCodeAt(0) + h2 % 10);
      try {
        for (var l2 = (o2 = void 0, Re(a2)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
          u2 += d2.value;
        }
      } catch (t4) {
        o2 = { error: t4 };
      } finally {
        try {
          d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
        } finally {
          if (o2) throw o2.error;
        }
      }
      h2 >= 10 && (c2 |= 1 << 5 - f2);
    }
    return e2.determineNumSysAndCheckDigit(new tt(n2), c2), u2;
  }, e2.prototype.decodeEnd = function(t3, r2) {
    return e2.findGuardPatternWithoutCounters(t3, r2, true, e2.MIDDLE_END_PATTERN);
  }, e2.prototype.checkChecksum = function(t3) {
    return ye.checkChecksum(e2.convertUPCEtoUPCA(t3));
  }, e2.determineNumSysAndCheckDigit = function(t3, e3) {
    for (var r2 = 0; r2 <= 1; r2++) for (var n2 = 0; n2 < 10; n2++) if (e3 === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[r2][n2]) return t3.insert(0, "0" + r2), void t3.append("0" + n2);
    throw nt.getNotFoundInstance();
  }, e2.prototype.getBarcodeFormat = function() {
    return Et.UPC_E;
  }, e2.convertUPCEtoUPCA = function(t3) {
    var e3 = t3.slice(1, 7).split("").map(function(t4) {
      return t4.charCodeAt(0);
    }), r2 = new tt();
    r2.append(t3.charAt(0));
    var n2 = e3[5];
    switch (n2) {
      case 0:
      case 1:
      case 2:
        r2.appendChars(e3, 0, 2), r2.append(n2), r2.append("0000"), r2.appendChars(e3, 2, 3);
        break;
      case 3:
        r2.appendChars(e3, 0, 3), r2.append("00000"), r2.appendChars(e3, 3, 2);
        break;
      case 4:
        r2.appendChars(e3, 0, 4), r2.append("00000"), r2.append(e3[4]);
        break;
      default:
        r2.appendChars(e3, 0, 5), r2.append("0000"), r2.append(n2);
    }
    return t3.length >= 8 && r2.append(t3.charAt(7)), r2.toString();
  }, e2.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), e2.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]), Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])], e2;
}(ye);
var Ne = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Oe = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Me = function(t2) {
  function e2(e3) {
    var r2 = t2.call(this) || this, n2 = null == e3 ? null : e3.get(H.POSSIBLE_FORMATS), o2 = [];
    return null != n2 && (n2.indexOf(Et.EAN_13) > -1 && o2.push(new ve()), n2.indexOf(Et.UPC_A) > -1 && o2.push(new Se()), n2.indexOf(Et.EAN_8) > -1 && o2.push(new _e()), n2.indexOf(Et.UPC_E) > -1 && o2.push(new De())), 0 === o2.length && (o2.push(new ve()), o2.push(new Se()), o2.push(new _e()), o2.push(new De())), r2.readers = o2, r2;
  }
  return Ne(e2, t2), e2.prototype.decodeRow = function(t3, e3, r2) {
    var n2, o2;
    try {
      for (var i2 = Oe(this.readers), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        var s2 = a2.value;
        try {
          var u2 = s2.decodeRow(t3, e3, r2), c2 = u2.getBarcodeFormat() === Et.EAN_13 && "0" === u2.getText().charAt(0), f2 = null == r2 ? null : r2.get(H.POSSIBLE_FORMATS), h2 = null == f2 || f2.includes(Et.UPC_A);
          if (c2 && h2) {
            var l2 = u2.getRawBytes(), d2 = new yt(u2.getText().substring(1), l2, l2 ? l2.length : null, u2.getResultPoints(), Et.UPC_A);
            return d2.putAllMetadata(u2.getResultMetadata()), d2;
          }
          return u2;
        } catch (t4) {
        }
      }
    } catch (t4) {
      n2 = { error: t4 };
    } finally {
      try {
        a2 && !a2.done && (o2 = i2.return) && o2.call(i2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    throw new nt();
  }, e2.prototype.reset = function() {
    var t3, e3;
    try {
      for (var r2 = Oe(this.readers), n2 = r2.next(); !n2.done; n2 = r2.next()) {
        n2.value.reset();
      }
    } catch (e4) {
      t3 = { error: e4 };
    } finally {
      try {
        n2 && !n2.done && (e3 = r2.return) && e3.call(r2);
      } finally {
        if (t3) throw t3.error;
      }
    }
  }, e2;
}(Jt);
var be = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Pe = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.CODA_BAR_CHAR_SET = { nnnnnww: "0", nnnnwwn: "1", nnnwnnw: "2", wwnnnnn: "3", nnwnnwn: "4", wnnnnwn: "5", nwnnnnw: "6", nwnnwnn: "7", nwwnnnn: "8", wnnwnnn: "9", nnnwwnn: "-", nnwwnnn: "$", wnnnwnw: ":", wnwnnnw: "/", wnwnwnn: ".", nnwwwww: "+", nnwwnwn: "A", nwnwnnw: "B", nnnwnww: "C", nnnwwwn: "D" }, e3;
  }
  return be(e2, t2), e2.prototype.decodeRow = function(t3, e3, r2) {
    var n2 = this.getValidRowData(e3);
    if (!n2) throw new nt();
    var o2 = this.codaBarDecodeRow(n2.row);
    if (!o2) throw new nt();
    return new yt(o2, null, 0, [new Vt(n2.left, t3), new Vt(n2.right, t3)], Et.CODABAR, (/* @__PURE__ */ new Date()).getTime());
  }, e2.prototype.getValidRowData = function(t3) {
    var e3 = t3.toArray(), r2 = e3.indexOf(true);
    if (-1 === r2) return null;
    var n2 = e3.lastIndexOf(true);
    if (n2 <= r2) return null;
    for (var o2 = [], i2 = (e3 = e3.slice(r2, n2 + 1))[0], a2 = 1, s2 = 1; s2 < e3.length; s2++) e3[s2] === i2 ? a2++ : (i2 = e3[s2], o2.push(a2), a2 = 1);
    return o2.push(a2), o2.length < 23 && (o2.length + 1) % 8 != 0 ? null : { row: o2, left: r2, right: n2 };
  }, e2.prototype.codaBarDecodeRow = function(t3) {
    for (var e3 = [], r2 = Math.ceil(t3.reduce(function(t4, e4) {
      return (t4 + e4) / 2;
    }, 0)); t3.length > 0; ) {
      var n2 = t3.splice(0, 8).splice(0, 7).map(function(t4) {
        return t4 < r2 ? "n" : "w";
      }).join("");
      if (void 0 === this.CODA_BAR_CHAR_SET[n2]) return null;
      e3.push(this.CODA_BAR_CHAR_SET[n2]);
    }
    var o2 = e3.join("");
    return this.validCodaBarString(o2) ? o2 : null;
  }, e2.prototype.validCodaBarString = function(t3) {
    return /^[A-D].{1,}[A-D]$/.test(t3);
  }, e2;
}(Jt);
var Fe = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Le = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ke = function(t2) {
  function e2() {
    var e3 = t2.call(this) || this;
    return e3.decodeFinderCounters = new Int32Array(4), e3.dataCharacterCounters = new Int32Array(8), e3.oddRoundingErrors = new Array(4), e3.evenRoundingErrors = new Array(4), e3.oddCounts = new Array(e3.dataCharacterCounters.length / 2), e3.evenCounts = new Array(e3.dataCharacterCounters.length / 2), e3;
  }
  return Fe(e2, t2), e2.prototype.getDecodeFinderCounters = function() {
    return this.decodeFinderCounters;
  }, e2.prototype.getDataCharacterCounters = function() {
    return this.dataCharacterCounters;
  }, e2.prototype.getOddRoundingErrors = function() {
    return this.oddRoundingErrors;
  }, e2.prototype.getEvenRoundingErrors = function() {
    return this.evenRoundingErrors;
  }, e2.prototype.getOddCounts = function() {
    return this.oddCounts;
  }, e2.prototype.getEvenCounts = function() {
    return this.evenCounts;
  }, e2.prototype.parseFinderValue = function(t3, r2) {
    for (var n2 = 0; n2 < r2.length; n2++) if (Jt.patternMatchVariance(t3, r2[n2], e2.MAX_INDIVIDUAL_VARIANCE) < e2.MAX_AVG_VARIANCE) return n2;
    throw new nt();
  }, e2.count = function(t3) {
    return Lt.sum(new Int32Array(t3));
  }, e2.increment = function(t3, e3) {
    for (var r2 = 0, n2 = e3[0], o2 = 1; o2 < t3.length; o2++) e3[o2] > n2 && (n2 = e3[o2], r2 = o2);
    t3[r2]++;
  }, e2.decrement = function(t3, e3) {
    for (var r2 = 0, n2 = e3[0], o2 = 1; o2 < t3.length; o2++) e3[o2] < n2 && (n2 = e3[o2], r2 = o2);
    t3[r2]--;
  }, e2.isFinderPattern = function(t3) {
    var r2, n2, o2 = t3[0] + t3[1], i2 = o2 / (o2 + t3[2] + t3[3]);
    if (i2 >= e2.MIN_FINDER_PATTERN_RATIO && i2 <= e2.MAX_FINDER_PATTERN_RATIO) {
      var a2 = Number.MAX_SAFE_INTEGER, s2 = Number.MIN_SAFE_INTEGER;
      try {
        for (var u2 = Le(t3), c2 = u2.next(); !c2.done; c2 = u2.next()) {
          var f2 = c2.value;
          f2 > s2 && (s2 = f2), f2 < a2 && (a2 = f2);
        }
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          c2 && !c2.done && (n2 = u2.return) && n2.call(u2);
        } finally {
          if (r2) throw r2.error;
        }
      }
      return s2 < 10 * a2;
    }
    return false;
  }, e2.MAX_AVG_VARIANCE = 0.2, e2.MAX_INDIVIDUAL_VARIANCE = 0.45, e2.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, e2.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, e2;
}(Jt);
var Ve = function() {
  function t2(t3, e2) {
    this.value = t3, this.checksumPortion = e2;
  }
  return t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getChecksumPortion = function() {
    return this.checksumPortion;
  }, t2.prototype.toString = function() {
    return this.value + "(" + this.checksumPortion + ")";
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    return this.value === r2.value && this.checksumPortion === r2.checksumPortion;
  }, t2.prototype.hashCode = function() {
    return this.value ^ this.checksumPortion;
  }, t2;
}();
var xe = function() {
  function t2(t3, e2, r2, n2, o2) {
    this.value = t3, this.startEnd = e2, this.value = t3, this.startEnd = e2, this.resultPoints = new Array(), this.resultPoints.push(new Vt(r2, o2)), this.resultPoints.push(new Vt(n2, o2));
  }
  return t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getStartEnd = function() {
    return this.startEnd;
  }, t2.prototype.getResultPoints = function() {
    return this.resultPoints;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    return this.value === r2.value;
  }, t2.prototype.hashCode = function() {
    return this.value;
  }, t2;
}();
var Ge = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Ye = function() {
  function t2() {
  }
  return t2.getRSSvalue = function(e2, r2, n2) {
    var o2, i2, a2 = 0;
    try {
      for (var s2 = Ge(e2), u2 = s2.next(); !u2.done; u2 = s2.next()) {
        a2 += u2.value;
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        u2 && !u2.done && (i2 = s2.return) && i2.call(s2);
      } finally {
        if (o2) throw o2.error;
      }
    }
    for (var c2 = 0, f2 = 0, h2 = e2.length, l2 = 0; l2 < h2 - 1; l2++) {
      var d2 = void 0;
      for (d2 = 1, f2 |= 1 << l2; d2 < e2[l2]; d2++, f2 &= ~(1 << l2)) {
        var p2 = t2.combins(a2 - d2 - 1, h2 - l2 - 2);
        if (n2 && 0 === f2 && a2 - d2 - (h2 - l2 - 1) >= h2 - l2 - 1 && (p2 -= t2.combins(a2 - d2 - (h2 - l2), h2 - l2 - 2)), h2 - l2 - 1 > 1) {
          for (var g2 = 0, w2 = a2 - d2 - (h2 - l2 - 2); w2 > r2; w2--) g2 += t2.combins(a2 - d2 - w2 - 1, h2 - l2 - 3);
          p2 -= g2 * (h2 - 1 - l2);
        } else a2 - d2 > r2 && p2--;
        c2 += p2;
      }
      a2 -= d2;
    }
    return c2;
  }, t2.combins = function(t3, e2) {
    var r2, n2;
    t3 - e2 > e2 ? (n2 = e2, r2 = t3 - e2) : (n2 = t3 - e2, r2 = e2);
    for (var o2 = 1, i2 = 1, a2 = t3; a2 > r2; a2--) o2 *= a2, i2 <= n2 && (o2 /= i2, i2++);
    for (; i2 <= n2; ) o2 /= i2, i2++;
    return o2;
  }, t2;
}();
var qe = function() {
  function t2() {
  }
  return t2.buildBitArray = function(t3) {
    var e2 = 2 * t3.length - 1;
    null == t3[t3.length - 1].getRightChar() && (e2 -= 1);
    for (var r2 = new q(12 * e2), n2 = 0, o2 = t3[0].getRightChar().getValue(), i2 = 11; i2 >= 0; --i2) 0 != (o2 & 1 << i2) && r2.set(n2), n2++;
    for (i2 = 1; i2 < t3.length; ++i2) {
      for (var a2 = t3[i2], s2 = a2.getLeftChar().getValue(), u2 = 11; u2 >= 0; --u2) 0 != (s2 & 1 << u2) && r2.set(n2), n2++;
      if (null !== a2.getRightChar()) {
        var c2 = a2.getRightChar().getValue();
        for (u2 = 11; u2 >= 0; --u2) 0 != (c2 & 1 << u2) && r2.set(n2), n2++;
      }
    }
    return r2;
  }, t2;
}();
var Ue = function() {
  function t2(t3, e2) {
    e2 ? this.decodedInformation = null : (this.finished = t3, this.decodedInformation = e2);
  }
  return t2.prototype.getDecodedInformation = function() {
    return this.decodedInformation;
  }, t2.prototype.isFinished = function() {
    return this.finished;
  }, t2;
}();
var He = function() {
  function t2(t3) {
    this.newPosition = t3;
  }
  return t2.prototype.getNewPosition = function() {
    return this.newPosition;
  }, t2;
}();
var We = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Qe = function(t2) {
  function e2(e3, r2) {
    var n2 = t2.call(this, e3) || this;
    return n2.value = r2, n2;
  }
  return We(e2, t2), e2.prototype.getValue = function() {
    return this.value;
  }, e2.prototype.isFNC1 = function() {
    return this.value === e2.FNC1;
  }, e2.FNC1 = "$", e2;
}(He);
var Ke = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Xe = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3) || this;
    return n2 ? (o2.remaining = true, o2.remainingValue = o2.remainingValue) : (o2.remaining = false, o2.remainingValue = 0), o2.newString = r2, o2;
  }
  return Ke(e2, t2), e2.prototype.getNewString = function() {
    return this.newString;
  }, e2.prototype.isRemaining = function() {
    return this.remaining;
  }, e2.prototype.getRemainingValue = function() {
    return this.remainingValue;
  }, e2;
}(He);
var Ze = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var je = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3) || this;
    if (r2 < 0 || r2 > 10 || n2 < 0 || n2 > 10) throw new Q();
    return o2.firstDigit = r2, o2.secondDigit = n2, o2;
  }
  return Ze(e2, t2), e2.prototype.getFirstDigit = function() {
    return this.firstDigit;
  }, e2.prototype.getSecondDigit = function() {
    return this.secondDigit;
  }, e2.prototype.getValue = function() {
    return 10 * this.firstDigit + this.secondDigit;
  }, e2.prototype.isFirstDigitFNC1 = function() {
    return this.firstDigit === e2.FNC1;
  }, e2.prototype.isSecondDigitFNC1 = function() {
    return this.secondDigit === e2.FNC1;
  }, e2.prototype.isAnyFNC1 = function() {
    return this.firstDigit === e2.FNC1 || this.secondDigit === e2.FNC1;
  }, e2.FNC1 = 10, e2;
}(He);
var ze = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Je = function() {
  function t2() {
  }
  return t2.parseFieldsInGeneralPurpose = function(e2) {
    var r2, n2, o2, i2, a2, s2, u2, c2;
    if (!e2) return null;
    if (e2.length < 2) throw new nt();
    var f2 = e2.substring(0, 2);
    try {
      for (var h2 = ze(t2.TWO_DIGIT_DATA_LENGTH), l2 = h2.next(); !l2.done; l2 = h2.next()) {
        if ((v2 = l2.value)[0] === f2) return v2[1] === t2.VARIABLE_LENGTH ? t2.processVariableAI(2, v2[2], e2) : t2.processFixedAI(2, v2[1], e2);
      }
    } catch (t3) {
      r2 = { error: t3 };
    } finally {
      try {
        l2 && !l2.done && (n2 = h2.return) && n2.call(h2);
      } finally {
        if (r2) throw r2.error;
      }
    }
    if (e2.length < 3) throw new nt();
    var d2 = e2.substring(0, 3);
    try {
      for (var p2 = ze(t2.THREE_DIGIT_DATA_LENGTH), g2 = p2.next(); !g2.done; g2 = p2.next()) {
        if ((v2 = g2.value)[0] === d2) return v2[1] === t2.VARIABLE_LENGTH ? t2.processVariableAI(3, v2[2], e2) : t2.processFixedAI(3, v2[1], e2);
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        g2 && !g2.done && (i2 = p2.return) && i2.call(p2);
      } finally {
        if (o2) throw o2.error;
      }
    }
    try {
      for (var w2 = ze(t2.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), A2 = w2.next(); !A2.done; A2 = w2.next()) {
        if ((v2 = A2.value)[0] === d2) return v2[1] === t2.VARIABLE_LENGTH ? t2.processVariableAI(4, v2[2], e2) : t2.processFixedAI(4, v2[1], e2);
      }
    } catch (t3) {
      a2 = { error: t3 };
    } finally {
      try {
        A2 && !A2.done && (s2 = w2.return) && s2.call(w2);
      } finally {
        if (a2) throw a2.error;
      }
    }
    if (e2.length < 4) throw new nt();
    var y2 = e2.substring(0, 4);
    try {
      for (var C2 = ze(t2.FOUR_DIGIT_DATA_LENGTH), E2 = C2.next(); !E2.done; E2 = C2.next()) {
        var v2;
        if ((v2 = E2.value)[0] === y2) return v2[1] === t2.VARIABLE_LENGTH ? t2.processVariableAI(4, v2[2], e2) : t2.processFixedAI(4, v2[1], e2);
      }
    } catch (t3) {
      u2 = { error: t3 };
    } finally {
      try {
        E2 && !E2.done && (c2 = C2.return) && c2.call(C2);
      } finally {
        if (u2) throw u2.error;
      }
    }
    throw new nt();
  }, t2.processFixedAI = function(e2, r2, n2) {
    if (n2.length < e2) throw new nt();
    var o2 = n2.substring(0, e2);
    if (n2.length < e2 + r2) throw new nt();
    var i2 = n2.substring(e2, e2 + r2), a2 = n2.substring(e2 + r2), s2 = "(" + o2 + ")" + i2, u2 = t2.parseFieldsInGeneralPurpose(a2);
    return null == u2 ? s2 : s2 + u2;
  }, t2.processVariableAI = function(e2, r2, n2) {
    var o2, i2 = n2.substring(0, e2);
    o2 = n2.length < e2 + r2 ? n2.length : e2 + r2;
    var a2 = n2.substring(e2, o2), s2 = n2.substring(o2), u2 = "(" + i2 + ")" + a2, c2 = t2.parseFieldsInGeneralPurpose(s2);
    return null == c2 ? u2 : u2 + c2;
  }, t2.VARIABLE_LENGTH = [], t2.TWO_DIGIT_DATA_LENGTH = [["00", 18], ["01", 14], ["02", 14], ["10", t2.VARIABLE_LENGTH, 20], ["11", 6], ["12", 6], ["13", 6], ["15", 6], ["17", 6], ["20", 2], ["21", t2.VARIABLE_LENGTH, 20], ["22", t2.VARIABLE_LENGTH, 29], ["30", t2.VARIABLE_LENGTH, 8], ["37", t2.VARIABLE_LENGTH, 8], ["90", t2.VARIABLE_LENGTH, 30], ["91", t2.VARIABLE_LENGTH, 30], ["92", t2.VARIABLE_LENGTH, 30], ["93", t2.VARIABLE_LENGTH, 30], ["94", t2.VARIABLE_LENGTH, 30], ["95", t2.VARIABLE_LENGTH, 30], ["96", t2.VARIABLE_LENGTH, 30], ["97", t2.VARIABLE_LENGTH, 3], ["98", t2.VARIABLE_LENGTH, 30], ["99", t2.VARIABLE_LENGTH, 30]], t2.THREE_DIGIT_DATA_LENGTH = [["240", t2.VARIABLE_LENGTH, 30], ["241", t2.VARIABLE_LENGTH, 30], ["242", t2.VARIABLE_LENGTH, 6], ["250", t2.VARIABLE_LENGTH, 30], ["251", t2.VARIABLE_LENGTH, 30], ["253", t2.VARIABLE_LENGTH, 17], ["254", t2.VARIABLE_LENGTH, 20], ["400", t2.VARIABLE_LENGTH, 30], ["401", t2.VARIABLE_LENGTH, 30], ["402", 17], ["403", t2.VARIABLE_LENGTH, 30], ["410", 13], ["411", 13], ["412", 13], ["413", 13], ["414", 13], ["420", t2.VARIABLE_LENGTH, 20], ["421", t2.VARIABLE_LENGTH, 15], ["422", 3], ["423", t2.VARIABLE_LENGTH, 15], ["424", 3], ["425", 3], ["426", 3]], t2.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [["310", 6], ["311", 6], ["312", 6], ["313", 6], ["314", 6], ["315", 6], ["316", 6], ["320", 6], ["321", 6], ["322", 6], ["323", 6], ["324", 6], ["325", 6], ["326", 6], ["327", 6], ["328", 6], ["329", 6], ["330", 6], ["331", 6], ["332", 6], ["333", 6], ["334", 6], ["335", 6], ["336", 6], ["340", 6], ["341", 6], ["342", 6], ["343", 6], ["344", 6], ["345", 6], ["346", 6], ["347", 6], ["348", 6], ["349", 6], ["350", 6], ["351", 6], ["352", 6], ["353", 6], ["354", 6], ["355", 6], ["356", 6], ["357", 6], ["360", 6], ["361", 6], ["362", 6], ["363", 6], ["364", 6], ["365", 6], ["366", 6], ["367", 6], ["368", 6], ["369", 6], ["390", t2.VARIABLE_LENGTH, 15], ["391", t2.VARIABLE_LENGTH, 18], ["392", t2.VARIABLE_LENGTH, 15], ["393", t2.VARIABLE_LENGTH, 18], ["703", t2.VARIABLE_LENGTH, 30]], t2.FOUR_DIGIT_DATA_LENGTH = [["7001", 13], ["7002", t2.VARIABLE_LENGTH, 30], ["7003", 10], ["8001", 14], ["8002", t2.VARIABLE_LENGTH, 20], ["8003", t2.VARIABLE_LENGTH, 30], ["8004", t2.VARIABLE_LENGTH, 30], ["8005", 6], ["8006", 18], ["8007", t2.VARIABLE_LENGTH, 30], ["8008", t2.VARIABLE_LENGTH, 12], ["8018", 18], ["8020", t2.VARIABLE_LENGTH, 25], ["8100", 6], ["8101", 10], ["8102", 2], ["8110", t2.VARIABLE_LENGTH, 70], ["8200", t2.VARIABLE_LENGTH, 70]], t2;
}();
var $e = function() {
  function t2(t3) {
    this.buffer = new tt(), this.information = t3;
  }
  return t2.prototype.decodeAllCodes = function(t3, e2) {
    for (var r2 = e2, n2 = null; ; ) {
      var o2 = this.decodeGeneralPurposeField(r2, n2), i2 = Je.parseFieldsInGeneralPurpose(o2.getNewString());
      if (null != i2 && t3.append(i2), n2 = o2.isRemaining() ? "" + o2.getRemainingValue() : null, r2 === o2.getNewPosition()) break;
      r2 = o2.getNewPosition();
    }
    return t3.toString();
  }, t2.prototype.isStillNumeric = function(t3) {
    if (t3 + 7 > this.information.getSize()) return t3 + 4 <= this.information.getSize();
    for (var e2 = t3; e2 < t3 + 3; ++e2) if (this.information.get(e2)) return true;
    return this.information.get(t3 + 3);
  }, t2.prototype.decodeNumeric = function(t3) {
    if (t3 + 7 > this.information.getSize()) {
      var e2 = this.extractNumericValueFromBitArray(t3, 4);
      return new je(this.information.getSize(), 0 === e2 ? je.FNC1 : e2 - 1, je.FNC1);
    }
    var r2 = this.extractNumericValueFromBitArray(t3, 7);
    return new je(t3 + 7, (r2 - 8) / 11, (r2 - 8) % 11);
  }, t2.prototype.extractNumericValueFromBitArray = function(e2, r2) {
    return t2.extractNumericValueFromBitArray(this.information, e2, r2);
  }, t2.extractNumericValueFromBitArray = function(t3, e2, r2) {
    for (var n2 = 0, o2 = 0; o2 < r2; ++o2) t3.get(e2 + o2) && (n2 |= 1 << r2 - o2 - 1);
    return n2;
  }, t2.prototype.decodeGeneralPurposeField = function(t3, e2) {
    this.buffer.setLengthToZero(), null != e2 && this.buffer.append(e2), this.current.setPosition(t3);
    var r2 = this.parseBlocks();
    return null != r2 && r2.isRemaining() ? new Xe(this.current.getPosition(), this.buffer.toString(), r2.getRemainingValue()) : new Xe(this.current.getPosition(), this.buffer.toString());
  }, t2.prototype.parseBlocks = function() {
    var t3, e2;
    do {
      var r2 = this.current.getPosition();
      if (t3 = this.current.isAlpha() ? (e2 = this.parseAlphaBlock()).isFinished() : this.current.isIsoIec646() ? (e2 = this.parseIsoIec646Block()).isFinished() : (e2 = this.parseNumericBlock()).isFinished(), !(r2 !== this.current.getPosition()) && !t3) break;
    } while (!t3);
    return e2.getDecodedInformation();
  }, t2.prototype.parseNumericBlock = function() {
    for (; this.isStillNumeric(this.current.getPosition()); ) {
      var t3 = this.decodeNumeric(this.current.getPosition());
      if (this.current.setPosition(t3.getNewPosition()), t3.isFirstDigitFNC1()) {
        var e2 = void 0;
        return e2 = t3.isSecondDigitFNC1() ? new Xe(this.current.getPosition(), this.buffer.toString()) : new Xe(this.current.getPosition(), this.buffer.toString(), t3.getSecondDigit()), new Ue(true, e2);
      }
      if (this.buffer.append(t3.getFirstDigit()), t3.isSecondDigitFNC1()) {
        e2 = new Xe(this.current.getPosition(), this.buffer.toString());
        return new Ue(true, e2);
      }
      this.buffer.append(t3.getSecondDigit());
    }
    return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Ue(false);
  }, t2.prototype.parseIsoIec646Block = function() {
    for (; this.isStillIsoIec646(this.current.getPosition()); ) {
      var t3 = this.decodeIsoIec646(this.current.getPosition());
      if (this.current.setPosition(t3.getNewPosition()), t3.isFNC1()) {
        var e2 = new Xe(this.current.getPosition(), this.buffer.toString());
        return new Ue(true, e2);
      }
      this.buffer.append(t3.getValue());
    }
    return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Ue(false);
  }, t2.prototype.parseAlphaBlock = function() {
    for (; this.isStillAlpha(this.current.getPosition()); ) {
      var t3 = this.decodeAlphanumeric(this.current.getPosition());
      if (this.current.setPosition(t3.getNewPosition()), t3.isFNC1()) {
        var e2 = new Xe(this.current.getPosition(), this.buffer.toString());
        return new Ue(true, e2);
      }
      this.buffer.append(t3.getValue());
    }
    return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Ue(false);
  }, t2.prototype.isStillIsoIec646 = function(t3) {
    if (t3 + 5 > this.information.getSize()) return false;
    var e2 = this.extractNumericValueFromBitArray(t3, 5);
    if (e2 >= 5 && e2 < 16) return true;
    if (t3 + 7 > this.information.getSize()) return false;
    var r2 = this.extractNumericValueFromBitArray(t3, 7);
    if (r2 >= 64 && r2 < 116) return true;
    if (t3 + 8 > this.information.getSize()) return false;
    var n2 = this.extractNumericValueFromBitArray(t3, 8);
    return n2 >= 232 && n2 < 253;
  }, t2.prototype.decodeIsoIec646 = function(t3) {
    var e2 = this.extractNumericValueFromBitArray(t3, 5);
    if (15 === e2) return new Qe(t3 + 5, Qe.FNC1);
    if (e2 >= 5 && e2 < 15) return new Qe(t3 + 5, "0" + (e2 - 5));
    var r2, n2 = this.extractNumericValueFromBitArray(t3, 7);
    if (n2 >= 64 && n2 < 90) return new Qe(t3 + 7, "" + (n2 + 1));
    if (n2 >= 90 && n2 < 116) return new Qe(t3 + 7, "" + (n2 + 7));
    switch (this.extractNumericValueFromBitArray(t3, 8)) {
      case 232:
        r2 = "!";
        break;
      case 233:
        r2 = '"';
        break;
      case 234:
        r2 = "%";
        break;
      case 235:
        r2 = "&";
        break;
      case 236:
        r2 = "'";
        break;
      case 237:
        r2 = "(";
        break;
      case 238:
        r2 = ")";
        break;
      case 239:
        r2 = "*";
        break;
      case 240:
        r2 = "+";
        break;
      case 241:
        r2 = ",";
        break;
      case 242:
        r2 = "-";
        break;
      case 243:
        r2 = ".";
        break;
      case 244:
        r2 = "/";
        break;
      case 245:
        r2 = ":";
        break;
      case 246:
        r2 = ";";
        break;
      case 247:
        r2 = "<";
        break;
      case 248:
        r2 = "=";
        break;
      case 249:
        r2 = ">";
        break;
      case 250:
        r2 = "?";
        break;
      case 251:
        r2 = "_";
        break;
      case 252:
        r2 = " ";
        break;
      default:
        throw new Q();
    }
    return new Qe(t3 + 8, r2);
  }, t2.prototype.isStillAlpha = function(t3) {
    if (t3 + 5 > this.information.getSize()) return false;
    var e2 = this.extractNumericValueFromBitArray(t3, 5);
    if (e2 >= 5 && e2 < 16) return true;
    if (t3 + 6 > this.information.getSize()) return false;
    var r2 = this.extractNumericValueFromBitArray(t3, 6);
    return r2 >= 16 && r2 < 63;
  }, t2.prototype.decodeAlphanumeric = function(t3) {
    var e2 = this.extractNumericValueFromBitArray(t3, 5);
    if (15 === e2) return new Qe(t3 + 5, Qe.FNC1);
    if (e2 >= 5 && e2 < 15) return new Qe(t3 + 5, "0" + (e2 - 5));
    var r2, n2 = this.extractNumericValueFromBitArray(t3, 6);
    if (n2 >= 32 && n2 < 58) return new Qe(t3 + 6, "" + (n2 + 33));
    switch (n2) {
      case 58:
        r2 = "*";
        break;
      case 59:
        r2 = ",";
        break;
      case 60:
        r2 = "-";
        break;
      case 61:
        r2 = ".";
        break;
      case 62:
        r2 = "/";
        break;
      default:
        throw new bt("Decoding invalid alphanumeric value: " + n2);
    }
    return new Qe(t3 + 6, r2);
  }, t2.prototype.isAlphaTo646ToAlphaLatch = function(t3) {
    if (t3 + 1 > this.information.getSize()) return false;
    for (var e2 = 0; e2 < 5 && e2 + t3 < this.information.getSize(); ++e2) if (2 === e2) {
      if (!this.information.get(t3 + 2)) return false;
    } else if (this.information.get(t3 + e2)) return false;
    return true;
  }, t2.prototype.isAlphaOr646ToNumericLatch = function(t3) {
    if (t3 + 3 > this.information.getSize()) return false;
    for (var e2 = t3; e2 < t3 + 3; ++e2) if (this.information.get(e2)) return false;
    return true;
  }, t2.prototype.isNumericToAlphaNumericLatch = function(t3) {
    if (t3 + 1 > this.information.getSize()) return false;
    for (var e2 = 0; e2 < 4 && e2 + t3 < this.information.getSize(); ++e2) if (this.information.get(t3 + e2)) return false;
    return true;
  }, t2;
}();
var tr = function() {
  function t2(t3) {
    this.information = t3, this.generalDecoder = new $e(t3);
  }
  return t2.prototype.getInformation = function() {
    return this.information;
  }, t2.prototype.getGeneralDecoder = function() {
    return this.generalDecoder;
  }, t2;
}();
var er = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var rr = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return er(e2, t2), e2.prototype.encodeCompressedGtin = function(t3, e3) {
    t3.append("(01)");
    var r2 = t3.length();
    t3.append("9"), this.encodeCompressedGtinWithoutAI(t3, e3, r2);
  }, e2.prototype.encodeCompressedGtinWithoutAI = function(t3, r2, n2) {
    for (var o2 = 0; o2 < 4; ++o2) {
      var i2 = this.getGeneralDecoder().extractNumericValueFromBitArray(r2 + 10 * o2, 10);
      i2 / 100 == 0 && t3.append("0"), i2 / 10 == 0 && t3.append("0"), t3.append(i2);
    }
    e2.appendCheckDigit(t3, n2);
  }, e2.appendCheckDigit = function(t3, e3) {
    for (var r2 = 0, n2 = 0; n2 < 13; n2++) {
      var o2 = t3.charAt(n2 + e3).charCodeAt(0) - "0".charCodeAt(0);
      r2 += 0 == (1 & n2) ? 3 * o2 : o2;
    }
    10 === (r2 = 10 - r2 % 10) && (r2 = 0), t3.append(r2);
  }, e2.GTIN_SIZE = 40, e2;
}(tr);
var nr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var or = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return nr(e2, t2), e2.prototype.parseInformation = function() {
    var t3 = new tt();
    t3.append("(01)");
    var r2 = t3.length(), n2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e2.HEADER_SIZE, 4);
    return t3.append(n2), this.encodeCompressedGtinWithoutAI(t3, e2.HEADER_SIZE + 4, r2), this.getGeneralDecoder().decodeAllCodes(t3, e2.HEADER_SIZE + 44);
  }, e2.HEADER_SIZE = 4, e2;
}(rr);
var ir = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ar = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return ir(e2, t2), e2.prototype.parseInformation = function() {
    var t3 = new tt();
    return this.getGeneralDecoder().decodeAllCodes(t3, e2.HEADER_SIZE);
  }, e2.HEADER_SIZE = 5, e2;
}(tr);
var sr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ur = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return sr(e2, t2), e2.prototype.encodeCompressedWeight = function(t3, e3, r2) {
    var n2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e3, r2);
    this.addWeightCode(t3, n2);
    for (var o2 = this.checkWeight(n2), i2 = 1e5, a2 = 0; a2 < 5; ++a2) o2 / i2 == 0 && t3.append("0"), i2 /= 10;
    t3.append(o2);
  }, e2;
}(rr);
var cr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var fr = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return cr(e2, t2), e2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() !== e2.HEADER_SIZE + ur.GTIN_SIZE + e2.WEIGHT_SIZE) throw new nt();
    var t3 = new tt();
    return this.encodeCompressedGtin(t3, e2.HEADER_SIZE), this.encodeCompressedWeight(t3, e2.HEADER_SIZE + ur.GTIN_SIZE, e2.WEIGHT_SIZE), t3.toString();
  }, e2.HEADER_SIZE = 5, e2.WEIGHT_SIZE = 15, e2;
}(ur);
var hr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var lr = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return hr(e2, t2), e2.prototype.addWeightCode = function(t3, e3) {
    t3.append("(3103)");
  }, e2.prototype.checkWeight = function(t3) {
    return t3;
  }, e2;
}(fr);
var dr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var pr = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return dr(e2, t2), e2.prototype.addWeightCode = function(t3, e3) {
    e3 < 1e4 ? t3.append("(3202)") : t3.append("(3203)");
  }, e2.prototype.checkWeight = function(t3) {
    return t3 < 1e4 ? t3 : t3 - 1e4;
  }, e2;
}(fr);
var gr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var wr = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return gr(e2, t2), e2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() < e2.HEADER_SIZE + rr.GTIN_SIZE) throw new nt();
    var t3 = new tt();
    this.encodeCompressedGtin(t3, e2.HEADER_SIZE);
    var r2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e2.HEADER_SIZE + rr.GTIN_SIZE, e2.LAST_DIGIT_SIZE);
    t3.append("(392"), t3.append(r2), t3.append(")");
    var n2 = this.getGeneralDecoder().decodeGeneralPurposeField(e2.HEADER_SIZE + rr.GTIN_SIZE + e2.LAST_DIGIT_SIZE, null);
    return t3.append(n2.getNewString()), t3.toString();
  }, e2.HEADER_SIZE = 8, e2.LAST_DIGIT_SIZE = 2, e2;
}(rr);
var Ar = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var yr = function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return Ar(e2, t2), e2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() < e2.HEADER_SIZE + rr.GTIN_SIZE) throw new nt();
    var t3 = new tt();
    this.encodeCompressedGtin(t3, e2.HEADER_SIZE);
    var r2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e2.HEADER_SIZE + rr.GTIN_SIZE, e2.LAST_DIGIT_SIZE);
    t3.append("(393"), t3.append(r2), t3.append(")");
    var n2 = this.getGeneralDecoder().extractNumericValueFromBitArray(e2.HEADER_SIZE + rr.GTIN_SIZE + e2.LAST_DIGIT_SIZE, e2.FIRST_THREE_DIGITS_SIZE);
    n2 / 100 == 0 && t3.append("0"), n2 / 10 == 0 && t3.append("0"), t3.append(n2);
    var o2 = this.getGeneralDecoder().decodeGeneralPurposeField(e2.HEADER_SIZE + rr.GTIN_SIZE + e2.LAST_DIGIT_SIZE + e2.FIRST_THREE_DIGITS_SIZE, null);
    return t3.append(o2.getNewString()), t3.toString();
  }, e2.HEADER_SIZE = 8, e2.LAST_DIGIT_SIZE = 2, e2.FIRST_THREE_DIGITS_SIZE = 10, e2;
}(rr);
var Cr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Er = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3) || this;
    return o2.dateCode = n2, o2.firstAIdigits = r2, o2;
  }
  return Cr(e2, t2), e2.prototype.parseInformation = function() {
    if (this.getInformation().getSize() !== e2.HEADER_SIZE + e2.GTIN_SIZE + e2.WEIGHT_SIZE + e2.DATE_SIZE) throw new nt();
    var t3 = new tt();
    return this.encodeCompressedGtin(t3, e2.HEADER_SIZE), this.encodeCompressedWeight(t3, e2.HEADER_SIZE + e2.GTIN_SIZE, e2.WEIGHT_SIZE), this.encodeCompressedDate(t3, e2.HEADER_SIZE + e2.GTIN_SIZE + e2.WEIGHT_SIZE), t3.toString();
  }, e2.prototype.encodeCompressedDate = function(t3, r2) {
    var n2 = this.getGeneralDecoder().extractNumericValueFromBitArray(r2, e2.DATE_SIZE);
    if (38400 !== n2) {
      t3.append("("), t3.append(this.dateCode), t3.append(")");
      var o2 = n2 % 32, i2 = (n2 /= 32) % 12 + 1, a2 = n2 /= 12;
      a2 / 10 == 0 && t3.append("0"), t3.append(a2), i2 / 10 == 0 && t3.append("0"), t3.append(i2), o2 / 10 == 0 && t3.append("0"), t3.append(o2);
    }
  }, e2.prototype.addWeightCode = function(t3, e3) {
    t3.append("("), t3.append(this.firstAIdigits), t3.append(e3 / 1e5), t3.append(")");
  }, e2.prototype.checkWeight = function(t3) {
    return t3 % 1e5;
  }, e2.HEADER_SIZE = 8, e2.WEIGHT_SIZE = 20, e2.DATE_SIZE = 16, e2;
}(ur);
var vr = function() {
  function t2(t3, e2, r2, n2) {
    this.leftchar = t3, this.rightchar = e2, this.finderpattern = r2, this.maybeLast = n2;
  }
  return t2.prototype.mayBeLast = function() {
    return this.maybeLast;
  }, t2.prototype.getLeftChar = function() {
    return this.leftchar;
  }, t2.prototype.getRightChar = function() {
    return this.rightchar;
  }, t2.prototype.getFinderPattern = function() {
    return this.finderpattern;
  }, t2.prototype.mustBeLast = function() {
    return null == this.rightchar;
  }, t2.prototype.toString = function() {
    return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) + " ]";
  }, t2.equals = function(e2, r2) {
    return e2 instanceof t2 && (t2.equalsOrNull(e2.leftchar, r2.leftchar) && t2.equalsOrNull(e2.rightchar, r2.rightchar) && t2.equalsOrNull(e2.finderpattern, r2.finderpattern));
  }, t2.equalsOrNull = function(e2, r2) {
    return null === e2 ? null === r2 : t2.equals(e2, r2);
  }, t2.prototype.hashCode = function() {
    return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
  }, t2;
}();
var mr = function() {
  function t2(t3, e2, r2) {
    this.pairs = t3, this.rowNumber = e2, this.wasReversed = r2;
  }
  return t2.prototype.getPairs = function() {
    return this.pairs;
  }, t2.prototype.getRowNumber = function() {
    return this.rowNumber;
  }, t2.prototype.isReversed = function() {
    return this.wasReversed;
  }, t2.prototype.isEquivalent = function(t3) {
    return this.checkEqualitity(this, t3);
  }, t2.prototype.toString = function() {
    return "{ " + this.pairs + " }";
  }, t2.prototype.equals = function(e2, r2) {
    return e2 instanceof t2 && (this.checkEqualitity(e2, r2) && e2.wasReversed === r2.wasReversed);
  }, t2.prototype.checkEqualitity = function(t3, e2) {
    var r2;
    if (t3 && e2) return t3.forEach(function(t4, n2) {
      e2.forEach(function(e3) {
        t4.getLeftChar().getValue() === e3.getLeftChar().getValue() && t4.getRightChar().getValue() === e3.getRightChar().getValue() && t4.getFinderPatter().getValue() === e3.getFinderPatter().getValue() && (r2 = true);
      });
    }), r2;
  }, t2;
}();
var Ir = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var _r = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Tr = function(t2) {
  function e2() {
    var r2 = null !== t2 && t2.apply(this, arguments) || this;
    return r2.pairs = new Array(e2.MAX_PAIRS), r2.rows = new Array(), r2.startEnd = [2], r2;
  }
  return Ir(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    this.pairs.length = 0, this.startFromEven = false;
    try {
      return e2.constructResult(this.decodeRow2pairs(t3, r2));
    } catch (t4) {
    }
    return this.pairs.length = 0, this.startFromEven = true, e2.constructResult(this.decodeRow2pairs(t3, r2));
  }, e2.prototype.reset = function() {
    this.pairs.length = 0, this.rows.length = 0;
  }, e2.prototype.decodeRow2pairs = function(t3, e3) {
    for (var r2, n2 = false; !n2; ) try {
      this.pairs.push(this.retrieveNextPair(e3, this.pairs, t3));
    } catch (t4) {
      if (t4 instanceof nt) {
        if (!this.pairs.length) throw new nt();
        n2 = true;
      }
    }
    if (this.checkChecksum()) return this.pairs;
    if (r2 = !!this.rows.length, this.storeRow(t3, false), r2) {
      var o2 = this.checkRowsBoolean(false);
      if (null != o2) return o2;
      if (null != (o2 = this.checkRowsBoolean(true))) return o2;
    }
    throw new nt();
  }, e2.prototype.checkRowsBoolean = function(t3) {
    if (this.rows.length > 25) return this.rows.length = 0, null;
    this.pairs.length = 0, t3 && (this.rows = this.rows.reverse());
    var e3 = null;
    try {
      e3 = this.checkRows(new Array(), 0);
    } catch (t4) {
      console.log(t4);
    }
    return t3 && (this.rows = this.rows.reverse()), e3;
  }, e2.prototype.checkRows = function(t3, r2) {
    for (var n2, o2, i2 = r2; i2 < this.rows.length; i2++) {
      var a2 = this.rows[i2];
      this.pairs.length = 0;
      try {
        for (var s2 = (n2 = void 0, _r(t3)), u2 = s2.next(); !u2.done; u2 = s2.next()) {
          var c2 = u2.value;
          this.pairs.push(c2.getPairs());
        }
      } catch (t4) {
        n2 = { error: t4 };
      } finally {
        try {
          u2 && !u2.done && (o2 = s2.return) && o2.call(s2);
        } finally {
          if (n2) throw n2.error;
        }
      }
      if (this.pairs.push(a2.getPairs()), e2.isValidSequence(this.pairs)) {
        if (this.checkChecksum()) return this.pairs;
        var f2 = new Array(t3);
        f2.push(a2);
        try {
          return this.checkRows(f2, i2 + 1);
        } catch (t4) {
          console.log(t4);
        }
      }
    }
    throw new nt();
  }, e2.isValidSequence = function(t3) {
    var r2, n2;
    try {
      for (var o2 = _r(e2.FINDER_PATTERN_SEQUENCES), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        if (!(t3.length > a2.length)) {
          for (var s2 = true, u2 = 0; u2 < t3.length; u2++) if (t3[u2].getFinderPattern().getValue() !== a2[u2]) {
            s2 = false;
            break;
          }
          if (s2) return true;
        }
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        i2 && !i2.done && (n2 = o2.return) && n2.call(o2);
      } finally {
        if (r2) throw r2.error;
      }
    }
    return false;
  }, e2.prototype.storeRow = function(t3, r2) {
    for (var n2 = 0, o2 = false, i2 = false; n2 < this.rows.length; ) {
      var a2 = this.rows[n2];
      if (a2.getRowNumber() > t3) {
        i2 = a2.isEquivalent(this.pairs);
        break;
      }
      o2 = a2.isEquivalent(this.pairs), n2++;
    }
    i2 || o2 || e2.isPartialRow(this.pairs, this.rows) || (this.rows.push(n2, new mr(this.pairs, t3, r2)), this.removePartialRows(this.pairs, this.rows));
  }, e2.prototype.removePartialRows = function(t3, e3) {
    var r2, n2, o2, i2, a2, s2;
    try {
      for (var u2 = _r(e3), c2 = u2.next(); !c2.done; c2 = u2.next()) {
        var f2 = c2.value;
        if (f2.getPairs().length !== t3.length) {
          try {
            for (var h2 = (o2 = void 0, _r(f2.getPairs())), l2 = h2.next(); !l2.done; l2 = h2.next()) {
              var d2 = l2.value, p2 = false;
              try {
                for (var g2 = (a2 = void 0, _r(t3)), w2 = g2.next(); !w2.done; w2 = g2.next()) {
                  var A2 = w2.value;
                  if (vr.equals(d2, A2)) {
                    p2 = true;
                    break;
                  }
                }
              } catch (t4) {
                a2 = { error: t4 };
              } finally {
                try {
                  w2 && !w2.done && (s2 = g2.return) && s2.call(g2);
                } finally {
                  if (a2) throw a2.error;
                }
              }
              p2 || false;
            }
          } catch (t4) {
            o2 = { error: t4 };
          } finally {
            try {
              l2 && !l2.done && (i2 = h2.return) && i2.call(h2);
            } finally {
              if (o2) throw o2.error;
            }
          }
        }
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        c2 && !c2.done && (n2 = u2.return) && n2.call(u2);
      } finally {
        if (r2) throw r2.error;
      }
    }
  }, e2.isPartialRow = function(t3, e3) {
    var r2, n2, o2, i2, a2, s2;
    try {
      for (var u2 = _r(e3), c2 = u2.next(); !c2.done; c2 = u2.next()) {
        var f2 = c2.value, h2 = true;
        try {
          for (var l2 = (o2 = void 0, _r(t3)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
            var p2 = d2.value, g2 = false;
            try {
              for (var w2 = (a2 = void 0, _r(f2.getPairs())), A2 = w2.next(); !A2.done; A2 = w2.next()) {
                var y2 = A2.value;
                if (p2.equals(y2)) {
                  g2 = true;
                  break;
                }
              }
            } catch (t4) {
              a2 = { error: t4 };
            } finally {
              try {
                A2 && !A2.done && (s2 = w2.return) && s2.call(w2);
              } finally {
                if (a2) throw a2.error;
              }
            }
            if (!g2) {
              h2 = false;
              break;
            }
          }
        } catch (t4) {
          o2 = { error: t4 };
        } finally {
          try {
            d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
          } finally {
            if (o2) throw o2.error;
          }
        }
        if (h2) return true;
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        c2 && !c2.done && (n2 = u2.return) && n2.call(u2);
      } finally {
        if (r2) throw r2.error;
      }
    }
    return false;
  }, e2.prototype.getRows = function() {
    return this.rows;
  }, e2.constructResult = function(t3) {
    var e3 = function(t4) {
      try {
        if (t4.get(1)) return new or(t4);
        if (!t4.get(2)) return new ar(t4);
        switch ($e.extractNumericValueFromBitArray(t4, 1, 4)) {
          case 4:
            return new lr(t4);
          case 5:
            return new pr(t4);
        }
        switch ($e.extractNumericValueFromBitArray(t4, 1, 5)) {
          case 12:
            return new wr(t4);
          case 13:
            return new yr(t4);
        }
        switch ($e.extractNumericValueFromBitArray(t4, 1, 7)) {
          case 56:
            return new Er(t4, "310", "11");
          case 57:
            return new Er(t4, "320", "11");
          case 58:
            return new Er(t4, "310", "13");
          case 59:
            return new Er(t4, "320", "13");
          case 60:
            return new Er(t4, "310", "15");
          case 61:
            return new Er(t4, "320", "15");
          case 62:
            return new Er(t4, "310", "17");
          case 63:
            return new Er(t4, "320", "17");
        }
      } catch (e4) {
        throw console.log(e4), new bt("unknown decoder: " + t4);
      }
    }(qe.buildBitArray(t3)).parseInformation(), r2 = t3[0].getFinderPattern().getResultPoints(), n2 = t3[t3.length - 1].getFinderPattern().getResultPoints(), o2 = [r2[0], r2[1], n2[0], n2[1]];
    return new yt(e3, null, null, o2, Et.RSS_EXPANDED, null);
  }, e2.prototype.checkChecksum = function() {
    var t3 = this.pairs.get(0), e3 = t3.getLeftChar(), r2 = t3.getRightChar();
    if (null === r2) return false;
    for (var n2 = r2.getChecksumPortion(), o2 = 2, i2 = 1; i2 < this.pairs.size(); ++i2) {
      var a2 = this.pairs.get(i2);
      n2 += a2.getLeftChar().getChecksumPortion(), o2++;
      var s2 = a2.getRightChar();
      null != s2 && (n2 += s2.getChecksumPortion(), o2++);
    }
    return 211 * (o2 - 4) + (n2 %= 211) === e3.getValue();
  }, e2.getNextSecondBar = function(t3, e3) {
    var r2;
    return t3.get(e3) ? (r2 = t3.getNextUnset(e3), r2 = t3.getNextSet(r2)) : (r2 = t3.getNextSet(e3), r2 = t3.getNextUnset(r2)), r2;
  }, e2.prototype.retrieveNextPair = function(t3, r2, n2) {
    var o2, i2 = r2.length % 2 == 0;
    this.startFromEven && (i2 = !i2);
    var a2 = true, s2 = -1;
    do {
      this.findNextPair(t3, r2, s2), null === (o2 = this.parseFoundFinderPattern(t3, n2, i2)) ? s2 = e2.getNextSecondBar(t3, this.startEnd[0]) : a2 = false;
    } while (a2);
    var u2, c2 = this.decodeDataCharacter(t3, o2, i2, true);
    if (!this.isEmptyPair(r2) && r2[r2.length - 1].mustBeLast()) throw new nt();
    try {
      u2 = this.decodeDataCharacter(t3, o2, i2, false);
    } catch (t4) {
      u2 = null, console.log(t4);
    }
    return new vr(c2, u2, o2, true);
  }, e2.prototype.isEmptyPair = function(t3) {
    return 0 === t3.length;
  }, e2.prototype.findNextPair = function(t3, r2, n2) {
    var o2 = this.getDecodeFinderCounters();
    o2[0] = 0, o2[1] = 0, o2[2] = 0, o2[3] = 0;
    var i2, a2 = t3.getSize();
    if (n2 >= 0) i2 = n2;
    else if (this.isEmptyPair(r2)) i2 = 0;
    else {
      i2 = r2[r2.length - 1].getFinderPattern().getStartEnd()[1];
    }
    var s2 = r2.length % 2 != 0;
    this.startFromEven && (s2 = !s2);
    for (var u2 = false; i2 < a2 && (u2 = !t3.get(i2)); ) i2++;
    for (var c2 = 0, f2 = i2, h2 = i2; h2 < a2; h2++) if (t3.get(h2) !== u2) o2[c2]++;
    else {
      if (3 === c2) {
        if (s2 && e2.reverseCounters(o2), e2.isFinderPattern(o2)) return this.startEnd[0] = f2, void (this.startEnd[1] = h2);
        s2 && e2.reverseCounters(o2), f2 += o2[0] + o2[1], o2[0] = o2[2], o2[1] = o2[3], o2[2] = 0, o2[3] = 0, c2--;
      } else c2++;
      o2[c2] = 1, u2 = !u2;
    }
    throw new nt();
  }, e2.reverseCounters = function(t3) {
    for (var e3 = t3.length, r2 = 0; r2 < e3 / 2; ++r2) {
      var n2 = t3[r2];
      t3[r2] = t3[e3 - r2 - 1], t3[e3 - r2 - 1] = n2;
    }
  }, e2.prototype.parseFoundFinderPattern = function(t3, r2, n2) {
    var o2, i2, a2;
    if (n2) {
      for (var s2 = this.startEnd[0] - 1; s2 >= 0 && !t3.get(s2); ) s2--;
      s2++, o2 = this.startEnd[0] - s2, i2 = s2, a2 = this.startEnd[1];
    } else i2 = this.startEnd[0], o2 = (a2 = t3.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1];
    var u2, c2 = this.getDecodeFinderCounters();
    P.arraycopy(c2, 0, c2, 1, c2.length - 1), c2[0] = o2;
    try {
      u2 = this.parseFinderValue(c2, e2.FINDER_PATTERNS);
    } catch (t4) {
      return null;
    }
    return new xe(u2, [i2, a2], i2, a2, r2);
  }, e2.prototype.decodeDataCharacter = function(t3, r2, n2, o2) {
    for (var i2 = this.getDataCharacterCounters(), a2 = 0; a2 < i2.length; a2++) i2[a2] = 0;
    if (o2) e2.recordPatternInReverse(t3, r2.getStartEnd()[0], i2);
    else {
      e2.recordPattern(t3, r2.getStartEnd()[1], i2);
      for (var s2 = 0, u2 = i2.length - 1; s2 < u2; s2++, u2--) {
        var c2 = i2[s2];
        i2[s2] = i2[u2], i2[u2] = c2;
      }
    }
    var f2 = Lt.sum(new Int32Array(i2)) / 17, h2 = (r2.getStartEnd()[1] - r2.getStartEnd()[0]) / 15;
    if (Math.abs(f2 - h2) / h2 > 0.3) throw new nt();
    var l2 = this.getOddCounts(), d2 = this.getEvenCounts(), p2 = this.getOddRoundingErrors(), g2 = this.getEvenRoundingErrors();
    for (s2 = 0; s2 < i2.length; s2++) {
      var w2 = 1 * i2[s2] / f2, A2 = w2 + 0.5;
      if (A2 < 1) {
        if (w2 < 0.3) throw new nt();
        A2 = 1;
      } else if (A2 > 8) {
        if (w2 > 8.7) throw new nt();
        A2 = 8;
      }
      var y2 = s2 / 2;
      0 == (1 & s2) ? (l2[y2] = A2, p2[y2] = w2 - A2) : (d2[y2] = A2, g2[y2] = w2 - A2);
    }
    this.adjustOddEvenCounts(17);
    var C2 = 4 * r2.getValue() + (n2 ? 0 : 2) + (o2 ? 0 : 1) - 1, E2 = 0, v2 = 0;
    for (s2 = l2.length - 1; s2 >= 0; s2--) {
      if (e2.isNotA1left(r2, n2, o2)) {
        var m2 = e2.WEIGHTS[C2][2 * s2];
        v2 += l2[s2] * m2;
      }
      E2 += l2[s2];
    }
    var I2 = 0;
    for (s2 = d2.length - 1; s2 >= 0; s2--) if (e2.isNotA1left(r2, n2, o2)) {
      m2 = e2.WEIGHTS[C2][2 * s2 + 1];
      I2 += d2[s2] * m2;
    }
    var _2 = v2 + I2;
    if (0 != (1 & E2) || E2 > 13 || E2 < 4) throw new nt();
    var T2 = (13 - E2) / 2, S2 = e2.SYMBOL_WIDEST[T2], B2 = 9 - S2, R2 = Ye.getRSSvalue(l2, S2, true), D2 = Ye.getRSSvalue(d2, B2, false), N2 = e2.EVEN_TOTAL_SUBSET[T2], O2 = e2.GSUM[T2];
    return new Ve(R2 * N2 + D2 + O2, _2);
  }, e2.isNotA1left = function(t3, e3, r2) {
    return !(0 === t3.getValue() && e3 && r2);
  }, e2.prototype.adjustOddEvenCounts = function(t3) {
    var r2 = Lt.sum(new Int32Array(this.getOddCounts())), n2 = Lt.sum(new Int32Array(this.getEvenCounts())), o2 = false, i2 = false;
    r2 > 13 ? i2 = true : r2 < 4 && (o2 = true);
    var a2 = false, s2 = false;
    n2 > 13 ? s2 = true : n2 < 4 && (a2 = true);
    var u2 = r2 + n2 - t3, c2 = 1 == (1 & r2), f2 = 0 == (1 & n2);
    if (1 === u2) if (c2) {
      if (f2) throw new nt();
      i2 = true;
    } else {
      if (!f2) throw new nt();
      s2 = true;
    }
    else if (-1 === u2) if (c2) {
      if (f2) throw new nt();
      o2 = true;
    } else {
      if (!f2) throw new nt();
      a2 = true;
    }
    else {
      if (0 !== u2) throw new nt();
      if (c2) {
        if (!f2) throw new nt();
        r2 < n2 ? (o2 = true, s2 = true) : (i2 = true, a2 = true);
      } else if (f2) throw new nt();
    }
    if (o2) {
      if (i2) throw new nt();
      e2.increment(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (i2 && e2.decrement(this.getOddCounts(), this.getOddRoundingErrors()), a2) {
      if (s2) throw new nt();
      e2.increment(this.getEvenCounts(), this.getOddRoundingErrors());
    }
    s2 && e2.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
  }, e2.SYMBOL_WIDEST = [7, 5, 4, 3, 1], e2.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], e2.GSUM = [0, 348, 1388, 2948, 3988], e2.FINDER_PATTERNS = [Int32Array.from([1, 8, 4, 1]), Int32Array.from([3, 6, 4, 1]), Int32Array.from([3, 4, 6, 1]), Int32Array.from([3, 2, 8, 1]), Int32Array.from([2, 6, 5, 1]), Int32Array.from([2, 2, 9, 1])], e2.WEIGHTS = [[1, 3, 9, 27, 81, 32, 96, 77], [20, 60, 180, 118, 143, 7, 21, 63], [189, 145, 13, 39, 117, 140, 209, 205], [193, 157, 49, 147, 19, 57, 171, 91], [62, 186, 136, 197, 169, 85, 44, 132], [185, 133, 188, 142, 4, 12, 36, 108], [113, 128, 173, 97, 80, 29, 87, 50], [150, 28, 84, 41, 123, 158, 52, 156], [46, 138, 203, 187, 139, 206, 196, 166], [76, 17, 51, 153, 37, 111, 122, 155], [43, 129, 176, 106, 107, 110, 119, 146], [16, 48, 144, 10, 30, 90, 59, 177], [109, 116, 137, 200, 178, 112, 125, 164], [70, 210, 208, 202, 184, 130, 179, 115], [134, 191, 151, 31, 93, 68, 204, 190], [148, 22, 66, 198, 172, 94, 71, 2], [6, 18, 54, 162, 64, 192, 154, 40], [120, 149, 25, 75, 14, 42, 126, 167], [79, 26, 78, 23, 69, 207, 199, 175], [103, 98, 83, 38, 114, 131, 182, 124], [161, 61, 183, 127, 170, 88, 53, 159], [55, 165, 73, 8, 24, 72, 5, 15], [45, 135, 194, 160, 58, 174, 100, 89]], e2.FINDER_PAT_A = 0, e2.FINDER_PAT_B = 1, e2.FINDER_PAT_C = 2, e2.FINDER_PAT_D = 3, e2.FINDER_PAT_E = 4, e2.FINDER_PAT_F = 5, e2.FINDER_PATTERN_SEQUENCES = [[e2.FINDER_PAT_A, e2.FINDER_PAT_A], [e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B], [e2.FINDER_PAT_A, e2.FINDER_PAT_C, e2.FINDER_PAT_B, e2.FINDER_PAT_D], [e2.FINDER_PAT_A, e2.FINDER_PAT_E, e2.FINDER_PAT_B, e2.FINDER_PAT_D, e2.FINDER_PAT_C], [e2.FINDER_PAT_A, e2.FINDER_PAT_E, e2.FINDER_PAT_B, e2.FINDER_PAT_D, e2.FINDER_PAT_D, e2.FINDER_PAT_F], [e2.FINDER_PAT_A, e2.FINDER_PAT_E, e2.FINDER_PAT_B, e2.FINDER_PAT_D, e2.FINDER_PAT_E, e2.FINDER_PAT_F, e2.FINDER_PAT_F], [e2.FINDER_PAT_A, e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B, e2.FINDER_PAT_C, e2.FINDER_PAT_C, e2.FINDER_PAT_D, e2.FINDER_PAT_D], [e2.FINDER_PAT_A, e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B, e2.FINDER_PAT_C, e2.FINDER_PAT_C, e2.FINDER_PAT_D, e2.FINDER_PAT_E, e2.FINDER_PAT_E], [e2.FINDER_PAT_A, e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B, e2.FINDER_PAT_C, e2.FINDER_PAT_C, e2.FINDER_PAT_D, e2.FINDER_PAT_E, e2.FINDER_PAT_F, e2.FINDER_PAT_F], [e2.FINDER_PAT_A, e2.FINDER_PAT_A, e2.FINDER_PAT_B, e2.FINDER_PAT_B, e2.FINDER_PAT_C, e2.FINDER_PAT_D, e2.FINDER_PAT_D, e2.FINDER_PAT_E, e2.FINDER_PAT_E, e2.FINDER_PAT_F, e2.FINDER_PAT_F]], e2.MAX_PAIRS = 11, e2;
}(ke);
var Sr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Br = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3, r2) || this;
    return o2.count = 0, o2.finderPattern = n2, o2;
  }
  return Sr(e2, t2), e2.prototype.getFinderPattern = function() {
    return this.finderPattern;
  }, e2.prototype.getCount = function() {
    return this.count;
  }, e2.prototype.incrementCount = function() {
    this.count++;
  }, e2;
}(Ve);
var Rr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Dr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Nr = function(t2) {
  function e2() {
    var e3 = null !== t2 && t2.apply(this, arguments) || this;
    return e3.possibleLeftPairs = [], e3.possibleRightPairs = [], e3;
  }
  return Rr(e2, t2), e2.prototype.decodeRow = function(t3, r2, n2) {
    var o2, i2, a2, s2, u2 = this.decodePair(r2, false, t3, n2);
    e2.addOrTally(this.possibleLeftPairs, u2), r2.reverse();
    var c2 = this.decodePair(r2, true, t3, n2);
    e2.addOrTally(this.possibleRightPairs, c2), r2.reverse();
    try {
      for (var f2 = Dr(this.possibleLeftPairs), h2 = f2.next(); !h2.done; h2 = f2.next()) {
        var l2 = h2.value;
        if (l2.getCount() > 1) try {
          for (var d2 = (a2 = void 0, Dr(this.possibleRightPairs)), p2 = d2.next(); !p2.done; p2 = d2.next()) {
            var g2 = p2.value;
            if (g2.getCount() > 1 && e2.checkChecksum(l2, g2)) return e2.constructResult(l2, g2);
          }
        } catch (t4) {
          a2 = { error: t4 };
        } finally {
          try {
            p2 && !p2.done && (s2 = d2.return) && s2.call(d2);
          } finally {
            if (a2) throw a2.error;
          }
        }
      }
    } catch (t4) {
      o2 = { error: t4 };
    } finally {
      try {
        h2 && !h2.done && (i2 = f2.return) && i2.call(f2);
      } finally {
        if (o2) throw o2.error;
      }
    }
    throw new nt();
  }, e2.addOrTally = function(t3, e3) {
    var r2, n2;
    if (null != e3) {
      var o2 = false;
      try {
        for (var i2 = Dr(t3), a2 = i2.next(); !a2.done; a2 = i2.next()) {
          var s2 = a2.value;
          if (s2.getValue() === e3.getValue()) {
            s2.incrementCount(), o2 = true;
            break;
          }
        }
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          a2 && !a2.done && (n2 = i2.return) && n2.call(i2);
        } finally {
          if (r2) throw r2.error;
        }
      }
      o2 || t3.push(e3);
    }
  }, e2.prototype.reset = function() {
    this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0;
  }, e2.constructResult = function(t3, e3) {
    for (var r2 = 4537077 * t3.getValue() + e3.getValue(), n2 = new String(r2).toString(), o2 = new tt(), i2 = 13 - n2.length; i2 > 0; i2--) o2.append("0");
    o2.append(n2);
    var a2 = 0;
    for (i2 = 0; i2 < 13; i2++) {
      var s2 = o2.charAt(i2).charCodeAt(0) - "0".charCodeAt(0);
      a2 += 0 == (1 & i2) ? 3 * s2 : s2;
    }
    10 === (a2 = 10 - a2 % 10) && (a2 = 0), o2.append(a2.toString());
    var u2 = t3.getFinderPattern().getResultPoints(), c2 = e3.getFinderPattern().getResultPoints();
    return new yt(o2.toString(), null, 0, [u2[0], u2[1], c2[0], c2[1]], Et.RSS_14, (/* @__PURE__ */ new Date()).getTime());
  }, e2.checkChecksum = function(t3, e3) {
    var r2 = (t3.getChecksumPortion() + 16 * e3.getChecksumPortion()) % 79, n2 = 9 * t3.getFinderPattern().getValue() + e3.getFinderPattern().getValue();
    return n2 > 72 && n2--, n2 > 8 && n2--, r2 === n2;
  }, e2.prototype.decodePair = function(t3, e3, r2, n2) {
    try {
      var o2 = this.findFinderPattern(t3, e3), i2 = this.parseFoundFinderPattern(t3, r2, e3, o2), a2 = null == n2 ? null : n2.get(H.NEED_RESULT_POINT_CALLBACK);
      if (null != a2) {
        var s2 = (o2[0] + o2[1]) / 2;
        e3 && (s2 = t3.getSize() - 1 - s2), a2.foundPossibleResultPoint(new Vt(s2, r2));
      }
      var u2 = this.decodeDataCharacter(t3, i2, true), c2 = this.decodeDataCharacter(t3, i2, false);
      return new Br(1597 * u2.getValue() + c2.getValue(), u2.getChecksumPortion() + 4 * c2.getChecksumPortion(), i2);
    } catch (t4) {
      return null;
    }
  }, e2.prototype.decodeDataCharacter = function(t3, r2, n2) {
    for (var o2 = this.getDataCharacterCounters(), i2 = 0; i2 < o2.length; i2++) o2[i2] = 0;
    if (n2) Jt.recordPatternInReverse(t3, r2.getStartEnd()[0], o2);
    else {
      Jt.recordPattern(t3, r2.getStartEnd()[1] + 1, o2);
      for (var a2 = 0, s2 = o2.length - 1; a2 < s2; a2++, s2--) {
        var u2 = o2[a2];
        o2[a2] = o2[s2], o2[s2] = u2;
      }
    }
    var c2 = n2 ? 16 : 15, f2 = Lt.sum(new Int32Array(o2)) / c2, h2 = this.getOddCounts(), l2 = this.getEvenCounts(), d2 = this.getOddRoundingErrors(), p2 = this.getEvenRoundingErrors();
    for (a2 = 0; a2 < o2.length; a2++) {
      var g2 = o2[a2] / f2, w2 = Math.floor(g2 + 0.5);
      w2 < 1 ? w2 = 1 : w2 > 8 && (w2 = 8);
      var A2 = Math.floor(a2 / 2);
      0 == (1 & a2) ? (h2[A2] = w2, d2[A2] = g2 - w2) : (l2[A2] = w2, p2[A2] = g2 - w2);
    }
    this.adjustOddEvenCounts(n2, c2);
    var y2 = 0, C2 = 0;
    for (a2 = h2.length - 1; a2 >= 0; a2--) C2 *= 9, C2 += h2[a2], y2 += h2[a2];
    var E2 = 0, v2 = 0;
    for (a2 = l2.length - 1; a2 >= 0; a2--) E2 *= 9, E2 += l2[a2], v2 += l2[a2];
    var m2 = C2 + 3 * E2;
    if (n2) {
      if (0 != (1 & y2) || y2 > 12 || y2 < 4) throw new nt();
      var I2 = (12 - y2) / 2, _2 = 9 - (D2 = e2.OUTSIDE_ODD_WIDEST[I2]), T2 = Ye.getRSSvalue(h2, D2, false), S2 = Ye.getRSSvalue(l2, _2, true), B2 = e2.OUTSIDE_EVEN_TOTAL_SUBSET[I2], R2 = e2.OUTSIDE_GSUM[I2];
      return new Ve(T2 * B2 + S2 + R2, m2);
    }
    if (0 != (1 & v2) || v2 > 10 || v2 < 4) throw new nt();
    I2 = (10 - v2) / 2, _2 = 9 - (D2 = e2.INSIDE_ODD_WIDEST[I2]), T2 = Ye.getRSSvalue(h2, D2, true), S2 = Ye.getRSSvalue(l2, _2, false);
    var D2, N2 = e2.INSIDE_ODD_TOTAL_SUBSET[I2];
    R2 = e2.INSIDE_GSUM[I2];
    return new Ve(S2 * N2 + T2 + R2, m2);
  }, e2.prototype.findFinderPattern = function(t3, e3) {
    var r2 = this.getDecodeFinderCounters();
    r2[0] = 0, r2[1] = 0, r2[2] = 0, r2[3] = 0;
    for (var n2 = t3.getSize(), o2 = false, i2 = 0; i2 < n2 && e3 !== (o2 = !t3.get(i2)); ) i2++;
    for (var a2 = 0, s2 = i2, u2 = i2; u2 < n2; u2++) if (t3.get(u2) !== o2) r2[a2]++;
    else {
      if (3 === a2) {
        if (ke.isFinderPattern(r2)) return [s2, u2];
        s2 += r2[0] + r2[1], r2[0] = r2[2], r2[1] = r2[3], r2[2] = 0, r2[3] = 0, a2--;
      } else a2++;
      r2[a2] = 1, o2 = !o2;
    }
    throw new nt();
  }, e2.prototype.parseFoundFinderPattern = function(t3, r2, n2, o2) {
    for (var i2 = t3.get(o2[0]), a2 = o2[0] - 1; a2 >= 0 && i2 !== t3.get(a2); ) a2--;
    a2++;
    var s2 = o2[0] - a2, u2 = this.getDecodeFinderCounters(), c2 = new Int32Array(u2.length);
    P.arraycopy(u2, 0, c2, 1, u2.length - 1), c2[0] = s2;
    var f2 = this.parseFinderValue(c2, e2.FINDER_PATTERNS), h2 = a2, l2 = o2[1];
    return n2 && (h2 = t3.getSize() - 1 - h2, l2 = t3.getSize() - 1 - l2), new xe(f2, [a2, o2[1]], h2, l2, r2);
  }, e2.prototype.adjustOddEvenCounts = function(t3, e3) {
    var r2 = Lt.sum(new Int32Array(this.getOddCounts())), n2 = Lt.sum(new Int32Array(this.getEvenCounts())), o2 = false, i2 = false, a2 = false, s2 = false;
    t3 ? (r2 > 12 ? i2 = true : r2 < 4 && (o2 = true), n2 > 12 ? s2 = true : n2 < 4 && (a2 = true)) : (r2 > 11 ? i2 = true : r2 < 5 && (o2 = true), n2 > 10 ? s2 = true : n2 < 4 && (a2 = true));
    var u2 = r2 + n2 - e3, c2 = (1 & r2) == (t3 ? 1 : 0), f2 = 1 == (1 & n2);
    if (1 === u2) if (c2) {
      if (f2) throw new nt();
      i2 = true;
    } else {
      if (!f2) throw new nt();
      s2 = true;
    }
    else if (-1 === u2) if (c2) {
      if (f2) throw new nt();
      o2 = true;
    } else {
      if (!f2) throw new nt();
      a2 = true;
    }
    else {
      if (0 !== u2) throw new nt();
      if (c2) {
        if (!f2) throw new nt();
        r2 < n2 ? (o2 = true, s2 = true) : (i2 = true, a2 = true);
      } else if (f2) throw new nt();
    }
    if (o2) {
      if (i2) throw new nt();
      ke.increment(this.getOddCounts(), this.getOddRoundingErrors());
    }
    if (i2 && ke.decrement(this.getOddCounts(), this.getOddRoundingErrors()), a2) {
      if (s2) throw new nt();
      ke.increment(this.getEvenCounts(), this.getOddRoundingErrors());
    }
    s2 && ke.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
  }, e2.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], e2.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], e2.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], e2.INSIDE_GSUM = [0, 336, 1036, 1516], e2.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], e2.INSIDE_ODD_WIDEST = [2, 4, 6, 8], e2.FINDER_PATTERNS = [Int32Array.from([3, 8, 2, 1]), Int32Array.from([3, 5, 5, 1]), Int32Array.from([3, 3, 7, 1]), Int32Array.from([3, 1, 9, 1]), Int32Array.from([2, 7, 4, 1]), Int32Array.from([2, 5, 6, 1]), Int32Array.from([2, 3, 8, 1]), Int32Array.from([1, 5, 7, 1]), Int32Array.from([1, 3, 9, 1])], e2;
}(ke);
var Or = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Mr = function(t2) {
  function e2(e3) {
    var r2 = t2.call(this) || this;
    r2.readers = [];
    var n2 = e3 ? e3.get(H.POSSIBLE_FORMATS) : null, o2 = e3 && void 0 !== e3.get(H.ASSUME_CODE_39_CHECK_DIGIT);
    return n2 && ((n2.includes(Et.EAN_13) || n2.includes(Et.UPC_A) || n2.includes(Et.EAN_8) || n2.includes(Et.UPC_E)) && r2.readers.push(new Me(e3)), n2.includes(Et.CODE_39) && r2.readers.push(new ne(o2)), n2.includes(Et.CODE_93) && r2.readers.push(new ae()), n2.includes(Et.CODE_128) && r2.readers.push(new te()), n2.includes(Et.ITF) && r2.readers.push(new ce()), n2.includes(Et.CODABAR) && r2.readers.push(new Pe()), n2.includes(Et.RSS_14) && r2.readers.push(new Nr()), n2.includes(Et.RSS_EXPANDED) && (console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk."), r2.readers.push(new Tr()))), 0 === r2.readers.length && (r2.readers.push(new Me(e3)), r2.readers.push(new ne()), r2.readers.push(new ae()), r2.readers.push(new Me(e3)), r2.readers.push(new te()), r2.readers.push(new ce()), r2.readers.push(new Nr())), r2;
  }
  return Or(e2, t2), e2.prototype.decodeRow = function(t3, e3, r2) {
    for (var n2 = 0; n2 < this.readers.length; n2++) try {
      return this.readers[n2].decodeRow(t3, e3, r2);
    } catch (t4) {
    }
    throw new nt();
  }, e2.prototype.reset = function() {
    this.readers.forEach(function(t3) {
      return t3.reset();
    });
  }, e2;
}(Jt);
var br = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new Mr(r2), e3, r2) || this;
  }
  br(e2, t2);
}(At);
var Pr;
var Fr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Lr = function() {
  function t2(t3, e2, r2) {
    this.ecCodewords = t3, this.ecBlocks = [e2], r2 && this.ecBlocks.push(r2);
  }
  return t2.prototype.getECCodewords = function() {
    return this.ecCodewords;
  }, t2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  }, t2;
}();
var kr = function() {
  function t2(t3, e2) {
    this.count = t3, this.dataCodewords = e2;
  }
  return t2.prototype.getCount = function() {
    return this.count;
  }, t2.prototype.getDataCodewords = function() {
    return this.dataCodewords;
  }, t2;
}();
var Vr = function() {
  function t2(t3, e2, r2, n2, o2, i2) {
    var a2, s2;
    this.versionNumber = t3, this.symbolSizeRows = e2, this.symbolSizeColumns = r2, this.dataRegionSizeRows = n2, this.dataRegionSizeColumns = o2, this.ecBlocks = i2;
    var u2 = 0, c2 = i2.getECCodewords(), f2 = i2.getECBlocks();
    try {
      for (var h2 = Fr(f2), l2 = h2.next(); !l2.done; l2 = h2.next()) {
        var d2 = l2.value;
        u2 += d2.getCount() * (d2.getDataCodewords() + c2);
      }
    } catch (t4) {
      a2 = { error: t4 };
    } finally {
      try {
        l2 && !l2.done && (s2 = h2.return) && s2.call(h2);
      } finally {
        if (a2) throw a2.error;
      }
    }
    this.totalCodewords = u2;
  }
  return t2.prototype.getVersionNumber = function() {
    return this.versionNumber;
  }, t2.prototype.getSymbolSizeRows = function() {
    return this.symbolSizeRows;
  }, t2.prototype.getSymbolSizeColumns = function() {
    return this.symbolSizeColumns;
  }, t2.prototype.getDataRegionSizeRows = function() {
    return this.dataRegionSizeRows;
  }, t2.prototype.getDataRegionSizeColumns = function() {
    return this.dataRegionSizeColumns;
  }, t2.prototype.getTotalCodewords = function() {
    return this.totalCodewords;
  }, t2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  }, t2.getVersionForDimensions = function(e2, r2) {
    var n2, o2;
    if (0 != (1 & e2) || 0 != (1 & r2)) throw new Q();
    try {
      for (var i2 = Fr(t2.VERSIONS), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        var s2 = a2.value;
        if (s2.symbolSizeRows === e2 && s2.symbolSizeColumns === r2) return s2;
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        a2 && !a2.done && (o2 = i2.return) && o2.call(i2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    throw new Q();
  }, t2.prototype.toString = function() {
    return "" + this.versionNumber;
  }, t2.buildVersions = function() {
    return [new t2(1, 10, 10, 8, 8, new Lr(5, new kr(1, 3))), new t2(2, 12, 12, 10, 10, new Lr(7, new kr(1, 5))), new t2(3, 14, 14, 12, 12, new Lr(10, new kr(1, 8))), new t2(4, 16, 16, 14, 14, new Lr(12, new kr(1, 12))), new t2(5, 18, 18, 16, 16, new Lr(14, new kr(1, 18))), new t2(6, 20, 20, 18, 18, new Lr(18, new kr(1, 22))), new t2(7, 22, 22, 20, 20, new Lr(20, new kr(1, 30))), new t2(8, 24, 24, 22, 22, new Lr(24, new kr(1, 36))), new t2(9, 26, 26, 24, 24, new Lr(28, new kr(1, 44))), new t2(10, 32, 32, 14, 14, new Lr(36, new kr(1, 62))), new t2(11, 36, 36, 16, 16, new Lr(42, new kr(1, 86))), new t2(12, 40, 40, 18, 18, new Lr(48, new kr(1, 114))), new t2(13, 44, 44, 20, 20, new Lr(56, new kr(1, 144))), new t2(14, 48, 48, 22, 22, new Lr(68, new kr(1, 174))), new t2(15, 52, 52, 24, 24, new Lr(42, new kr(2, 102))), new t2(16, 64, 64, 14, 14, new Lr(56, new kr(2, 140))), new t2(17, 72, 72, 16, 16, new Lr(36, new kr(4, 92))), new t2(18, 80, 80, 18, 18, new Lr(48, new kr(4, 114))), new t2(19, 88, 88, 20, 20, new Lr(56, new kr(4, 144))), new t2(20, 96, 96, 22, 22, new Lr(68, new kr(4, 174))), new t2(21, 104, 104, 24, 24, new Lr(56, new kr(6, 136))), new t2(22, 120, 120, 18, 18, new Lr(68, new kr(6, 175))), new t2(23, 132, 132, 20, 20, new Lr(62, new kr(8, 163))), new t2(24, 144, 144, 22, 22, new Lr(62, new kr(8, 156), new kr(2, 155))), new t2(25, 8, 18, 6, 16, new Lr(7, new kr(1, 5))), new t2(26, 8, 32, 6, 14, new Lr(11, new kr(1, 10))), new t2(27, 12, 26, 10, 24, new Lr(14, new kr(1, 16))), new t2(28, 12, 36, 10, 16, new Lr(18, new kr(1, 22))), new t2(29, 16, 36, 14, 16, new Lr(24, new kr(1, 32))), new t2(30, 16, 48, 14, 22, new Lr(28, new kr(1, 49)))];
  }, t2.VERSIONS = t2.buildVersions(), t2;
}();
var xr = function() {
  function t2(e2) {
    var r2 = e2.getHeight();
    if (r2 < 8 || r2 > 144 || 0 != (1 & r2)) throw new Q();
    this.version = t2.readVersion(e2), this.mappingBitMatrix = this.extractDataRegion(e2), this.readMappingMatrix = new et(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
  }
  return t2.prototype.getVersion = function() {
    return this.version;
  }, t2.readVersion = function(t3) {
    var e2 = t3.getHeight(), r2 = t3.getWidth();
    return Vr.getVersionForDimensions(e2, r2);
  }, t2.prototype.readCodewords = function() {
    var t3 = new Int8Array(this.version.getTotalCodewords()), e2 = 0, r2 = 4, n2 = 0, o2 = this.mappingBitMatrix.getHeight(), i2 = this.mappingBitMatrix.getWidth(), a2 = false, s2 = false, u2 = false, c2 = false;
    do {
      if (r2 !== o2 || 0 !== n2 || a2) if (r2 !== o2 - 2 || 0 !== n2 || 0 == (3 & i2) || s2) if (r2 !== o2 + 4 || 2 !== n2 || 0 != (7 & i2) || u2) if (r2 !== o2 - 2 || 0 !== n2 || 4 != (7 & i2) || c2) {
        do {
          r2 < o2 && n2 >= 0 && !this.readMappingMatrix.get(n2, r2) && (t3[e2++] = 255 & this.readUtah(r2, n2, o2, i2)), r2 -= 2, n2 += 2;
        } while (r2 >= 0 && n2 < i2);
        r2 += 1, n2 += 3;
        do {
          r2 >= 0 && n2 < i2 && !this.readMappingMatrix.get(n2, r2) && (t3[e2++] = 255 & this.readUtah(r2, n2, o2, i2)), r2 += 2, n2 -= 2;
        } while (r2 < o2 && n2 >= 0);
        r2 += 3, n2 += 1;
      } else t3[e2++] = 255 & this.readCorner4(o2, i2), r2 -= 2, n2 += 2, c2 = true;
      else t3[e2++] = 255 & this.readCorner3(o2, i2), r2 -= 2, n2 += 2, u2 = true;
      else t3[e2++] = 255 & this.readCorner2(o2, i2), r2 -= 2, n2 += 2, s2 = true;
      else t3[e2++] = 255 & this.readCorner1(o2, i2), r2 -= 2, n2 += 2, a2 = true;
    } while (r2 < o2 || n2 < i2);
    if (e2 !== this.version.getTotalCodewords()) throw new Q();
    return t3;
  }, t2.prototype.readModule = function(t3, e2, r2, n2) {
    return t3 < 0 && (t3 += r2, e2 += 4 - (r2 + 4 & 7)), e2 < 0 && (e2 += n2, t3 += 4 - (n2 + 4 & 7)), this.readMappingMatrix.set(e2, t3), this.mappingBitMatrix.get(e2, t3);
  }, t2.prototype.readUtah = function(t3, e2, r2, n2) {
    var o2 = 0;
    return this.readModule(t3 - 2, e2 - 2, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3 - 2, e2 - 1, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3 - 1, e2 - 2, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3 - 1, e2 - 1, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3 - 1, e2, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3, e2 - 2, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3, e2 - 1, r2, n2) && (o2 |= 1), o2 <<= 1, this.readModule(t3, e2, r2, n2) && (o2 |= 1), o2;
  }, t2.prototype.readCorner1 = function(t3, e2) {
    var r2 = 0;
    return this.readModule(t3 - 1, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(2, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(3, e2 - 1, t3, e2) && (r2 |= 1), r2;
  }, t2.prototype.readCorner2 = function(t3, e2) {
    var r2 = 0;
    return this.readModule(t3 - 3, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 2, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 4, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 3, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 1, t3, e2) && (r2 |= 1), r2;
  }, t2.prototype.readCorner3 = function(t3, e2) {
    var r2 = 0;
    return this.readModule(t3 - 1, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 3, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 3, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 1, t3, e2) && (r2 |= 1), r2;
  }, t2.prototype.readCorner4 = function(t3, e2) {
    var r2 = 0;
    return this.readModule(t3 - 3, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 2, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(t3 - 1, 0, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 2, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(0, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(1, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(2, e2 - 1, t3, e2) && (r2 |= 1), r2 <<= 1, this.readModule(3, e2 - 1, t3, e2) && (r2 |= 1), r2;
  }, t2.prototype.extractDataRegion = function(t3) {
    var e2 = this.version.getSymbolSizeRows(), r2 = this.version.getSymbolSizeColumns();
    if (t3.getHeight() !== e2) throw new D("Dimension of bitMatrix must match the version size");
    for (var n2 = this.version.getDataRegionSizeRows(), o2 = this.version.getDataRegionSizeColumns(), i2 = e2 / n2 | 0, a2 = r2 / o2 | 0, s2 = new et(a2 * o2, i2 * n2), u2 = 0; u2 < i2; ++u2) for (var c2 = u2 * n2, f2 = 0; f2 < a2; ++f2) for (var h2 = f2 * o2, l2 = 0; l2 < n2; ++l2) for (var d2 = u2 * (n2 + 2) + 1 + l2, p2 = c2 + l2, g2 = 0; g2 < o2; ++g2) {
      var w2 = f2 * (o2 + 2) + 1 + g2;
      if (t3.get(w2, d2)) {
        var A2 = h2 + g2;
        s2.set(A2, p2);
      }
    }
    return s2;
  }, t2;
}();
var Gr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Yr = function() {
  function t2(t3, e2) {
    this.numDataCodewords = t3, this.codewords = e2;
  }
  return t2.getDataBlocks = function(e2, r2) {
    var n2, o2, i2, a2, s2 = r2.getECBlocks(), u2 = 0, c2 = s2.getECBlocks();
    try {
      for (var f2 = Gr(c2), h2 = f2.next(); !h2.done; h2 = f2.next()) {
        u2 += (w2 = h2.value).getCount();
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        h2 && !h2.done && (o2 = f2.return) && o2.call(f2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    var l2 = new Array(u2), d2 = 0;
    try {
      for (var p2 = Gr(c2), g2 = p2.next(); !g2.done; g2 = p2.next()) for (var w2 = g2.value, A2 = 0; A2 < w2.getCount(); A2++) {
        var y2 = w2.getDataCodewords(), C2 = s2.getECCodewords() + y2;
        l2[d2++] = new t2(y2, new Uint8Array(C2));
      }
    } catch (t3) {
      i2 = { error: t3 };
    } finally {
      try {
        g2 && !g2.done && (a2 = p2.return) && a2.call(p2);
      } finally {
        if (i2) throw i2.error;
      }
    }
    var E2 = l2[0].codewords.length - s2.getECCodewords(), v2 = E2 - 1, m2 = 0;
    for (A2 = 0; A2 < v2; A2++) for (var I2 = 0; I2 < d2; I2++) l2[I2].codewords[A2] = e2[m2++];
    var _2 = 24 === r2.getVersionNumber(), T2 = _2 ? 8 : d2;
    for (I2 = 0; I2 < T2; I2++) l2[I2].codewords[E2 - 1] = e2[m2++];
    var S2 = l2[0].codewords.length;
    for (A2 = E2; A2 < S2; A2++) for (I2 = 0; I2 < d2; I2++) {
      var B2 = _2 ? (I2 + 8) % d2 : I2, R2 = _2 && B2 > 7 ? A2 - 1 : A2;
      l2[B2].codewords[R2] = e2[m2++];
    }
    if (m2 !== e2.length) throw new D();
    return l2;
  }, t2.prototype.getNumDataCodewords = function() {
    return this.numDataCodewords;
  }, t2.prototype.getCodewords = function() {
    return this.codewords;
  }, t2;
}();
var qr = function() {
  function t2(t3) {
    this.bytes = t3, this.byteOffset = 0, this.bitOffset = 0;
  }
  return t2.prototype.getBitOffset = function() {
    return this.bitOffset;
  }, t2.prototype.getByteOffset = function() {
    return this.byteOffset;
  }, t2.prototype.readBits = function(t3) {
    if (t3 < 1 || t3 > 32 || t3 > this.available()) throw new D("" + t3);
    var e2 = 0, r2 = this.bitOffset, n2 = this.byteOffset, o2 = this.bytes;
    if (r2 > 0) {
      var i2 = 8 - r2, a2 = t3 < i2 ? t3 : i2, s2 = 255 >> 8 - a2 << (u2 = i2 - a2);
      e2 = (o2[n2] & s2) >> u2, t3 -= a2, 8 === (r2 += a2) && (r2 = 0, n2++);
    }
    if (t3 > 0) {
      for (; t3 >= 8; ) e2 = e2 << 8 | 255 & o2[n2], n2++, t3 -= 8;
      if (t3 > 0) {
        var u2;
        s2 = 255 >> (u2 = 8 - t3) << u2;
        e2 = e2 << t3 | (o2[n2] & s2) >> u2, r2 += t3;
      }
    }
    return this.bitOffset = r2, this.byteOffset = n2, e2;
  }, t2.prototype.available = function() {
    return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
  }, t2;
}();
!function(t2) {
  t2[t2.PAD_ENCODE = 0] = "PAD_ENCODE", t2[t2.ASCII_ENCODE = 1] = "ASCII_ENCODE", t2[t2.C40_ENCODE = 2] = "C40_ENCODE", t2[t2.TEXT_ENCODE = 3] = "TEXT_ENCODE", t2[t2.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", t2[t2.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", t2[t2.BASE256_ENCODE = 6] = "BASE256_ENCODE";
}(Pr || (Pr = {}));
var Ur;
var Hr = function() {
  function t2() {
  }
  return t2.decode = function(t3) {
    var e2 = new qr(t3), r2 = new tt(), n2 = new tt(), o2 = new Array(), i2 = Pr.ASCII_ENCODE;
    do {
      if (i2 === Pr.ASCII_ENCODE) i2 = this.decodeAsciiSegment(e2, r2, n2);
      else {
        switch (i2) {
          case Pr.C40_ENCODE:
            this.decodeC40Segment(e2, r2);
            break;
          case Pr.TEXT_ENCODE:
            this.decodeTextSegment(e2, r2);
            break;
          case Pr.ANSIX12_ENCODE:
            this.decodeAnsiX12Segment(e2, r2);
            break;
          case Pr.EDIFACT_ENCODE:
            this.decodeEdifactSegment(e2, r2);
            break;
          case Pr.BASE256_ENCODE:
            this.decodeBase256Segment(e2, r2, o2);
            break;
          default:
            throw new Q();
        }
        i2 = Pr.ASCII_ENCODE;
      }
    } while (i2 !== Pr.PAD_ENCODE && e2.available() > 0);
    return n2.length() > 0 && r2.append(n2.toString()), new It(t3, r2.toString(), 0 === o2.length ? null : o2, null);
  }, t2.decodeAsciiSegment = function(t3, e2, r2) {
    var n2 = false;
    do {
      var o2 = t3.readBits(8);
      if (0 === o2) throw new Q();
      if (o2 <= 128) return n2 && (o2 += 128), e2.append(String.fromCharCode(o2 - 1)), Pr.ASCII_ENCODE;
      if (129 === o2) return Pr.PAD_ENCODE;
      if (o2 <= 229) {
        var i2 = o2 - 130;
        i2 < 10 && e2.append("0"), e2.append("" + i2);
      } else switch (o2) {
        case 230:
          return Pr.C40_ENCODE;
        case 231:
          return Pr.BASE256_ENCODE;
        case 232:
          e2.append(String.fromCharCode(29));
          break;
        case 233:
        case 234:
        case 241:
          break;
        case 235:
          n2 = true;
          break;
        case 236:
          e2.append("[)>05"), r2.insert(0, "");
          break;
        case 237:
          e2.append("[)>06"), r2.insert(0, "");
          break;
        case 238:
          return Pr.ANSIX12_ENCODE;
        case 239:
          return Pr.TEXT_ENCODE;
        case 240:
          return Pr.EDIFACT_ENCODE;
        default:
          if (254 !== o2 || 0 !== t3.available()) throw new Q();
      }
    } while (t3.available() > 0);
    return Pr.ASCII_ENCODE;
  }, t2.decodeC40Segment = function(t3, e2) {
    var r2 = false, n2 = [], o2 = 0;
    do {
      if (8 === t3.available()) return;
      var i2 = t3.readBits(8);
      if (254 === i2) return;
      this.parseTwoBytes(i2, t3.readBits(8), n2);
      for (var a2 = 0; a2 < 3; a2++) {
        var s2 = n2[a2];
        switch (o2) {
          case 0:
            if (s2 < 3) o2 = s2 + 1;
            else {
              if (!(s2 < this.C40_BASIC_SET_CHARS.length)) throw new Q();
              var u2 = this.C40_BASIC_SET_CHARS[s2];
              r2 ? (e2.append(String.fromCharCode(u2.charCodeAt(0) + 128)), r2 = false) : e2.append(u2);
            }
            break;
          case 1:
            r2 ? (e2.append(String.fromCharCode(s2 + 128)), r2 = false) : e2.append(String.fromCharCode(s2)), o2 = 0;
            break;
          case 2:
            if (s2 < this.C40_SHIFT2_SET_CHARS.length) {
              u2 = this.C40_SHIFT2_SET_CHARS[s2];
              r2 ? (e2.append(String.fromCharCode(u2.charCodeAt(0) + 128)), r2 = false) : e2.append(u2);
            } else switch (s2) {
              case 27:
                e2.append(String.fromCharCode(29));
                break;
              case 30:
                r2 = true;
                break;
              default:
                throw new Q();
            }
            o2 = 0;
            break;
          case 3:
            r2 ? (e2.append(String.fromCharCode(s2 + 224)), r2 = false) : e2.append(String.fromCharCode(s2 + 96)), o2 = 0;
            break;
          default:
            throw new Q();
        }
      }
    } while (t3.available() > 0);
  }, t2.decodeTextSegment = function(t3, e2) {
    var r2 = false, n2 = [], o2 = 0;
    do {
      if (8 === t3.available()) return;
      var i2 = t3.readBits(8);
      if (254 === i2) return;
      this.parseTwoBytes(i2, t3.readBits(8), n2);
      for (var a2 = 0; a2 < 3; a2++) {
        var s2 = n2[a2];
        switch (o2) {
          case 0:
            if (s2 < 3) o2 = s2 + 1;
            else {
              if (!(s2 < this.TEXT_BASIC_SET_CHARS.length)) throw new Q();
              var u2 = this.TEXT_BASIC_SET_CHARS[s2];
              r2 ? (e2.append(String.fromCharCode(u2.charCodeAt(0) + 128)), r2 = false) : e2.append(u2);
            }
            break;
          case 1:
            r2 ? (e2.append(String.fromCharCode(s2 + 128)), r2 = false) : e2.append(String.fromCharCode(s2)), o2 = 0;
            break;
          case 2:
            if (s2 < this.TEXT_SHIFT2_SET_CHARS.length) {
              u2 = this.TEXT_SHIFT2_SET_CHARS[s2];
              r2 ? (e2.append(String.fromCharCode(u2.charCodeAt(0) + 128)), r2 = false) : e2.append(u2);
            } else switch (s2) {
              case 27:
                e2.append(String.fromCharCode(29));
                break;
              case 30:
                r2 = true;
                break;
              default:
                throw new Q();
            }
            o2 = 0;
            break;
          case 3:
            if (!(s2 < this.TEXT_SHIFT3_SET_CHARS.length)) throw new Q();
            u2 = this.TEXT_SHIFT3_SET_CHARS[s2];
            r2 ? (e2.append(String.fromCharCode(u2.charCodeAt(0) + 128)), r2 = false) : e2.append(u2), o2 = 0;
            break;
          default:
            throw new Q();
        }
      }
    } while (t3.available() > 0);
  }, t2.decodeAnsiX12Segment = function(t3, e2) {
    var r2 = [];
    do {
      if (8 === t3.available()) return;
      var n2 = t3.readBits(8);
      if (254 === n2) return;
      this.parseTwoBytes(n2, t3.readBits(8), r2);
      for (var o2 = 0; o2 < 3; o2++) {
        var i2 = r2[o2];
        switch (i2) {
          case 0:
            e2.append("\r");
            break;
          case 1:
            e2.append("*");
            break;
          case 2:
            e2.append(">");
            break;
          case 3:
            e2.append(" ");
            break;
          default:
            if (i2 < 14) e2.append(String.fromCharCode(i2 + 44));
            else {
              if (!(i2 < 40)) throw new Q();
              e2.append(String.fromCharCode(i2 + 51));
            }
        }
      }
    } while (t3.available() > 0);
  }, t2.parseTwoBytes = function(t3, e2, r2) {
    var n2 = (t3 << 8) + e2 - 1, o2 = Math.floor(n2 / 1600);
    r2[0] = o2, n2 -= 1600 * o2, o2 = Math.floor(n2 / 40), r2[1] = o2, r2[2] = n2 - 40 * o2;
  }, t2.decodeEdifactSegment = function(t3, e2) {
    do {
      if (t3.available() <= 16) return;
      for (var r2 = 0; r2 < 4; r2++) {
        var n2 = t3.readBits(6);
        if (31 === n2) {
          var o2 = 8 - t3.getBitOffset();
          return void (8 !== o2 && t3.readBits(o2));
        }
        0 == (32 & n2) && (n2 |= 64), e2.append(String.fromCharCode(n2));
      }
    } while (t3.available() > 0);
  }, t2.decodeBase256Segment = function(t3, e2, r2) {
    var n2, o2 = 1 + t3.getByteOffset(), i2 = this.unrandomize255State(t3.readBits(8), o2++);
    if ((n2 = 0 === i2 ? t3.available() / 8 | 0 : i2 < 250 ? i2 : 250 * (i2 - 249) + this.unrandomize255State(t3.readBits(8), o2++)) < 0) throw new Q();
    for (var a2 = new Uint8Array(n2), s2 = 0; s2 < n2; s2++) {
      if (t3.available() < 8) throw new Q();
      a2[s2] = this.unrandomize255State(t3.readBits(8), o2++);
    }
    r2.push(a2);
    try {
      e2.append(J.decode(a2, $.ISO88591));
    } catch (t4) {
      throw new bt("Platform does not support required encoding: " + t4.message);
    }
  }, t2.unrandomize255State = function(t3, e2) {
    var r2 = t3 - (149 * e2 % 255 + 1);
    return r2 >= 0 ? r2 : r2 + 256;
  }, t2.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], t2.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_"], t2.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], t2.TEXT_SHIFT2_SET_CHARS = t2.C40_SHIFT2_SET_CHARS, t2.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)], t2;
}();
var Wr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Qr = function() {
  function t2() {
    this.rsDecoder = new Pt(Dt.DATA_MATRIX_FIELD_256);
  }
  return t2.prototype.decode = function(t3) {
    var e2, r2, n2 = new xr(t3), o2 = n2.getVersion(), i2 = n2.readCodewords(), a2 = Yr.getDataBlocks(i2, o2), s2 = 0;
    try {
      for (var u2 = Wr(a2), c2 = u2.next(); !c2.done; c2 = u2.next()) {
        s2 += c2.value.getNumDataCodewords();
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        c2 && !c2.done && (r2 = u2.return) && r2.call(u2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    for (var f2 = new Uint8Array(s2), h2 = a2.length, l2 = 0; l2 < h2; l2++) {
      var d2 = a2[l2], p2 = d2.getCodewords(), g2 = d2.getNumDataCodewords();
      this.correctErrors(p2, g2);
      for (var w2 = 0; w2 < g2; w2++) f2[w2 * h2 + l2] = p2[w2];
    }
    return Hr.decode(f2);
  }, t2.prototype.correctErrors = function(t3, e2) {
    var r2 = new Int32Array(t3);
    try {
      this.rsDecoder.decode(r2, t3.length - e2);
    } catch (t4) {
      throw new M();
    }
    for (var n2 = 0; n2 < e2; n2++) t3[n2] = r2[n2];
  }, t2;
}();
var Kr = function() {
  function t2(t3) {
    this.image = t3, this.rectangleDetector = new qt(this.image);
  }
  return t2.prototype.detect = function() {
    var e2 = this.rectangleDetector.detect(), r2 = this.detectSolid1(e2);
    if ((r2 = this.detectSolid2(r2))[3] = this.correctTopRight(r2), !r2[3]) throw new nt();
    var n2 = (r2 = this.shiftToModuleCenter(r2))[0], o2 = r2[1], i2 = r2[2], a2 = r2[3], s2 = this.transitionsBetween(n2, a2) + 1, u2 = this.transitionsBetween(i2, a2) + 1;
    1 == (1 & s2) && (s2 += 1), 1 == (1 & u2) && (u2 += 1), 4 * s2 < 7 * u2 && 4 * u2 < 7 * s2 && (s2 = u2 = Math.max(s2, u2));
    var c2 = t2.sampleGrid(this.image, n2, o2, i2, a2, s2, u2);
    return new xt(c2, [n2, o2, i2, a2]);
  }, t2.shiftPoint = function(t3, e2, r2) {
    var n2 = (e2.getX() - t3.getX()) / (r2 + 1), o2 = (e2.getY() - t3.getY()) / (r2 + 1);
    return new Vt(t3.getX() + n2, t3.getY() + o2);
  }, t2.moveAway = function(t3, e2, r2) {
    var n2 = t3.getX(), o2 = t3.getY();
    return n2 < e2 ? n2 -= 1 : n2 += 1, o2 < r2 ? o2 -= 1 : o2 += 1, new Vt(n2, o2);
  }, t2.prototype.detectSolid1 = function(t3) {
    var e2 = t3[0], r2 = t3[1], n2 = t3[3], o2 = t3[2], i2 = this.transitionsBetween(e2, r2), a2 = this.transitionsBetween(r2, n2), s2 = this.transitionsBetween(n2, o2), u2 = this.transitionsBetween(o2, e2), c2 = i2, f2 = [o2, e2, r2, n2];
    return c2 > a2 && (c2 = a2, f2[0] = e2, f2[1] = r2, f2[2] = n2, f2[3] = o2), c2 > s2 && (c2 = s2, f2[0] = r2, f2[1] = n2, f2[2] = o2, f2[3] = e2), c2 > u2 && (f2[0] = n2, f2[1] = o2, f2[2] = e2, f2[3] = r2), f2;
  }, t2.prototype.detectSolid2 = function(e2) {
    var r2 = e2[0], n2 = e2[1], o2 = e2[2], i2 = e2[3], a2 = this.transitionsBetween(r2, i2), s2 = t2.shiftPoint(n2, o2, 4 * (a2 + 1)), u2 = t2.shiftPoint(o2, n2, 4 * (a2 + 1));
    return this.transitionsBetween(s2, r2) < this.transitionsBetween(u2, i2) ? (e2[0] = r2, e2[1] = n2, e2[2] = o2, e2[3] = i2) : (e2[0] = n2, e2[1] = o2, e2[2] = i2, e2[3] = r2), e2;
  }, t2.prototype.correctTopRight = function(e2) {
    var r2 = e2[0], n2 = e2[1], o2 = e2[2], i2 = e2[3], a2 = this.transitionsBetween(r2, i2), s2 = this.transitionsBetween(n2, i2), u2 = t2.shiftPoint(r2, n2, 4 * (s2 + 1)), c2 = t2.shiftPoint(o2, n2, 4 * (a2 + 1));
    a2 = this.transitionsBetween(u2, i2), s2 = this.transitionsBetween(c2, i2);
    var f2 = new Vt(i2.getX() + (o2.getX() - n2.getX()) / (a2 + 1), i2.getY() + (o2.getY() - n2.getY()) / (a2 + 1)), h2 = new Vt(i2.getX() + (r2.getX() - n2.getX()) / (s2 + 1), i2.getY() + (r2.getY() - n2.getY()) / (s2 + 1));
    return this.isValid(f2) ? this.isValid(h2) ? this.transitionsBetween(u2, f2) + this.transitionsBetween(c2, f2) > this.transitionsBetween(u2, h2) + this.transitionsBetween(c2, h2) ? f2 : h2 : f2 : this.isValid(h2) ? h2 : null;
  }, t2.prototype.shiftToModuleCenter = function(e2) {
    var r2 = e2[0], n2 = e2[1], o2 = e2[2], i2 = e2[3], a2 = this.transitionsBetween(r2, i2) + 1, s2 = this.transitionsBetween(o2, i2) + 1, u2 = t2.shiftPoint(r2, n2, 4 * s2), c2 = t2.shiftPoint(o2, n2, 4 * a2);
    1 == (1 & (a2 = this.transitionsBetween(u2, i2) + 1)) && (a2 += 1), 1 == (1 & (s2 = this.transitionsBetween(c2, i2) + 1)) && (s2 += 1);
    var f2, h2, l2 = (r2.getX() + n2.getX() + o2.getX() + i2.getX()) / 4, d2 = (r2.getY() + n2.getY() + o2.getY() + i2.getY()) / 4;
    return r2 = t2.moveAway(r2, l2, d2), n2 = t2.moveAway(n2, l2, d2), o2 = t2.moveAway(o2, l2, d2), i2 = t2.moveAway(i2, l2, d2), u2 = t2.shiftPoint(r2, n2, 4 * s2), u2 = t2.shiftPoint(u2, i2, 4 * a2), f2 = t2.shiftPoint(n2, r2, 4 * s2), f2 = t2.shiftPoint(f2, o2, 4 * a2), c2 = t2.shiftPoint(o2, i2, 4 * s2), c2 = t2.shiftPoint(c2, n2, 4 * a2), h2 = t2.shiftPoint(i2, o2, 4 * s2), [u2, f2, c2, h2 = t2.shiftPoint(h2, r2, 4 * a2)];
  }, t2.prototype.isValid = function(t3) {
    return t3.getX() >= 0 && t3.getX() < this.image.getWidth() && t3.getY() > 0 && t3.getY() < this.image.getHeight();
  }, t2.sampleGrid = function(t3, e2, r2, n2, o2, i2, a2) {
    return Kt.getInstance().sampleGrid(t3, i2, a2, 0.5, 0.5, i2 - 0.5, 0.5, i2 - 0.5, a2 - 0.5, 0.5, a2 - 0.5, e2.getX(), e2.getY(), o2.getX(), o2.getY(), n2.getX(), n2.getY(), r2.getX(), r2.getY());
  }, t2.prototype.transitionsBetween = function(t3, e2) {
    var r2 = Math.trunc(t3.getX()), n2 = Math.trunc(t3.getY()), o2 = Math.trunc(e2.getX()), i2 = Math.trunc(e2.getY()), a2 = Math.abs(i2 - n2) > Math.abs(o2 - r2);
    if (a2) {
      var s2 = r2;
      r2 = n2, n2 = s2, s2 = o2, o2 = i2, i2 = s2;
    }
    for (var u2 = Math.abs(o2 - r2), c2 = Math.abs(i2 - n2), f2 = -u2 / 2, h2 = n2 < i2 ? 1 : -1, l2 = r2 < o2 ? 1 : -1, d2 = 0, p2 = this.image.get(a2 ? n2 : r2, a2 ? r2 : n2), g2 = r2, w2 = n2; g2 !== o2; g2 += l2) {
      var A2 = this.image.get(a2 ? w2 : g2, a2 ? g2 : w2);
      if (A2 !== p2 && (d2++, p2 = A2), (f2 += c2) > 0) {
        if (w2 === i2) break;
        w2 += h2, f2 -= u2;
      }
    }
    return d2;
  }, t2;
}();
var Xr = function() {
  function t2() {
    this.decoder = new Qr();
  }
  return t2.prototype.decode = function(e2, r2) {
    var n2, o2;
    if (void 0 === r2 && (r2 = null), null != r2 && r2.has(H.PURE_BARCODE)) {
      var i2 = t2.extractPureBits(e2.getBlackMatrix());
      n2 = this.decoder.decode(i2), o2 = t2.NO_POINTS;
    } else {
      var a2 = new Kr(e2.getBlackMatrix()).detect();
      n2 = this.decoder.decode(a2.getBits()), o2 = a2.getPoints();
    }
    var s2 = n2.getRawBytes(), u2 = new yt(n2.getText(), s2, 8 * s2.length, o2, Et.DATA_MATRIX, P.currentTimeMillis()), c2 = n2.getByteSegments();
    null != c2 && u2.putMetadata(mt.BYTE_SEGMENTS, c2);
    var f2 = n2.getECLevel();
    return null != f2 && u2.putMetadata(mt.ERROR_CORRECTION_LEVEL, f2), u2;
  }, t2.prototype.reset = function() {
  }, t2.extractPureBits = function(t3) {
    var e2 = t3.getTopLeftOnBit(), r2 = t3.getBottomRightOnBit();
    if (null == e2 || null == r2) throw new nt();
    var n2 = this.moduleSize(e2, t3), o2 = e2[1], i2 = r2[1], a2 = e2[0], s2 = (r2[0] - a2 + 1) / n2, u2 = (i2 - o2 + 1) / n2;
    if (s2 <= 0 || u2 <= 0) throw new nt();
    var c2 = n2 / 2;
    o2 += c2, a2 += c2;
    for (var f2 = new et(s2, u2), h2 = 0; h2 < u2; h2++) for (var l2 = o2 + h2 * n2, d2 = 0; d2 < s2; d2++) t3.get(a2 + d2 * n2, l2) && f2.set(d2, h2);
    return f2;
  }, t2.moduleSize = function(t3, e2) {
    for (var r2 = e2.getWidth(), n2 = t3[0], o2 = t3[1]; n2 < r2 && e2.get(n2, o2); ) n2++;
    if (n2 === r2) throw new nt();
    var i2 = n2 - t3[0];
    if (0 === i2) throw new nt();
    return i2;
  }, t2.NO_POINTS = [], t2;
}();
var Zr = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new Xr(), e3) || this;
  }
  Zr(e2, t2);
}(At), function(t2) {
  t2[t2.L = 0] = "L", t2[t2.M = 1] = "M", t2[t2.Q = 2] = "Q", t2[t2.H = 3] = "H";
}(Ur || (Ur = {}));
var jr;
var zr = function() {
  function t2(e2, r2, n2) {
    this.value = e2, this.stringValue = r2, this.bits = n2, t2.FOR_BITS.set(n2, this), t2.FOR_VALUE.set(e2, this);
  }
  return t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getBits = function() {
    return this.bits;
  }, t2.fromString = function(e2) {
    switch (e2) {
      case "L":
        return t2.L;
      case "M":
        return t2.M;
      case "Q":
        return t2.Q;
      case "H":
        return t2.H;
      default:
        throw new B(e2 + "not available");
    }
  }, t2.prototype.toString = function() {
    return this.stringValue;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    return this.value === r2.value;
  }, t2.forBits = function(e2) {
    if (e2 < 0 || e2 >= t2.FOR_BITS.size) throw new D();
    return t2.FOR_BITS.get(e2);
  }, t2.FOR_BITS = /* @__PURE__ */ new Map(), t2.FOR_VALUE = /* @__PURE__ */ new Map(), t2.L = new t2(Ur.L, "L", 1), t2.M = new t2(Ur.M, "M", 0), t2.Q = new t2(Ur.Q, "Q", 3), t2.H = new t2(Ur.H, "H", 2), t2;
}();
var Jr = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $r = function() {
  function t2(t3) {
    this.errorCorrectionLevel = zr.forBits(t3 >> 3 & 3), this.dataMask = 7 & t3;
  }
  return t2.numBitsDiffering = function(t3, e2) {
    return Y.bitCount(t3 ^ e2);
  }, t2.decodeFormatInformation = function(e2, r2) {
    var n2 = t2.doDecodeFormatInformation(e2, r2);
    return null !== n2 ? n2 : t2.doDecodeFormatInformation(e2 ^ t2.FORMAT_INFO_MASK_QR, r2 ^ t2.FORMAT_INFO_MASK_QR);
  }, t2.doDecodeFormatInformation = function(e2, r2) {
    var n2, o2, i2 = Number.MAX_SAFE_INTEGER, a2 = 0;
    try {
      for (var s2 = Jr(t2.FORMAT_INFO_DECODE_LOOKUP), u2 = s2.next(); !u2.done; u2 = s2.next()) {
        var c2 = u2.value, f2 = c2[0];
        if (f2 === e2 || f2 === r2) return new t2(c2[1]);
        var h2 = t2.numBitsDiffering(e2, f2);
        h2 < i2 && (a2 = c2[1], i2 = h2), e2 !== r2 && (h2 = t2.numBitsDiffering(r2, f2)) < i2 && (a2 = c2[1], i2 = h2);
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        u2 && !u2.done && (o2 = s2.return) && o2.call(s2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    return i2 <= 3 ? new t2(a2) : null;
  }, t2.prototype.getErrorCorrectionLevel = function() {
    return this.errorCorrectionLevel;
  }, t2.prototype.getDataMask = function() {
    return this.dataMask;
  }, t2.prototype.hashCode = function() {
    return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    return this.errorCorrectionLevel === r2.errorCorrectionLevel && this.dataMask === r2.dataMask;
  }, t2.FORMAT_INFO_MASK_QR = 21522, t2.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])], t2;
}();
var tn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var en = function() {
  function t2(t3) {
    for (var e2 = [], r2 = 1; r2 < arguments.length; r2++) e2[r2 - 1] = arguments[r2];
    this.ecCodewordsPerBlock = t3, this.ecBlocks = e2;
  }
  return t2.prototype.getECCodewordsPerBlock = function() {
    return this.ecCodewordsPerBlock;
  }, t2.prototype.getNumBlocks = function() {
    var t3, e2, r2 = 0, n2 = this.ecBlocks;
    try {
      for (var o2 = tn(n2), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        r2 += i2.value.getCount();
      }
    } catch (e3) {
      t3 = { error: e3 };
    } finally {
      try {
        i2 && !i2.done && (e2 = o2.return) && e2.call(o2);
      } finally {
        if (t3) throw t3.error;
      }
    }
    return r2;
  }, t2.prototype.getTotalECCodewords = function() {
    return this.ecCodewordsPerBlock * this.getNumBlocks();
  }, t2.prototype.getECBlocks = function() {
    return this.ecBlocks;
  }, t2;
}();
var rn = function() {
  function t2(t3, e2) {
    this.count = t3, this.dataCodewords = e2;
  }
  return t2.prototype.getCount = function() {
    return this.count;
  }, t2.prototype.getDataCodewords = function() {
    return this.dataCodewords;
  }, t2;
}();
var nn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var on = function() {
  function t2(t3, e2) {
    for (var r2, n2, o2 = [], i2 = 2; i2 < arguments.length; i2++) o2[i2 - 2] = arguments[i2];
    this.versionNumber = t3, this.alignmentPatternCenters = e2, this.ecBlocks = o2;
    var a2 = 0, s2 = o2[0].getECCodewordsPerBlock(), u2 = o2[0].getECBlocks();
    try {
      for (var c2 = nn(u2), f2 = c2.next(); !f2.done; f2 = c2.next()) {
        var h2 = f2.value;
        a2 += h2.getCount() * (h2.getDataCodewords() + s2);
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        f2 && !f2.done && (n2 = c2.return) && n2.call(c2);
      } finally {
        if (r2) throw r2.error;
      }
    }
    this.totalCodewords = a2;
  }
  return t2.prototype.getVersionNumber = function() {
    return this.versionNumber;
  }, t2.prototype.getAlignmentPatternCenters = function() {
    return this.alignmentPatternCenters;
  }, t2.prototype.getTotalCodewords = function() {
    return this.totalCodewords;
  }, t2.prototype.getDimensionForVersion = function() {
    return 17 + 4 * this.versionNumber;
  }, t2.prototype.getECBlocksForLevel = function(t3) {
    return this.ecBlocks[t3.getValue()];
  }, t2.getProvisionalVersionForDimension = function(t3) {
    if (t3 % 4 != 1) throw new Q();
    try {
      return this.getVersionForNumber((t3 - 17) / 4);
    } catch (t4) {
      throw new Q();
    }
  }, t2.getVersionForNumber = function(e2) {
    if (e2 < 1 || e2 > 40) throw new D();
    return t2.VERSIONS[e2 - 1];
  }, t2.decodeVersionInformation = function(e2) {
    for (var r2 = Number.MAX_SAFE_INTEGER, n2 = 0, o2 = 0; o2 < t2.VERSION_DECODE_INFO.length; o2++) {
      var i2 = t2.VERSION_DECODE_INFO[o2];
      if (i2 === e2) return t2.getVersionForNumber(o2 + 7);
      var a2 = $r.numBitsDiffering(e2, i2);
      a2 < r2 && (n2 = o2 + 7, r2 = a2);
    }
    return r2 <= 3 ? t2.getVersionForNumber(n2) : null;
  }, t2.prototype.buildFunctionPattern = function() {
    var t3 = this.getDimensionForVersion(), e2 = new et(t3);
    e2.setRegion(0, 0, 9, 9), e2.setRegion(t3 - 8, 0, 8, 9), e2.setRegion(0, t3 - 8, 9, 8);
    for (var r2 = this.alignmentPatternCenters.length, n2 = 0; n2 < r2; n2++) for (var o2 = this.alignmentPatternCenters[n2] - 2, i2 = 0; i2 < r2; i2++) 0 === n2 && (0 === i2 || i2 === r2 - 1) || n2 === r2 - 1 && 0 === i2 || e2.setRegion(this.alignmentPatternCenters[i2] - 2, o2, 5, 5);
    return e2.setRegion(6, 9, 1, t3 - 17), e2.setRegion(9, 6, t3 - 17, 1), this.versionNumber > 6 && (e2.setRegion(t3 - 11, 0, 3, 6), e2.setRegion(0, t3 - 11, 6, 3)), e2;
  }, t2.prototype.toString = function() {
    return "" + this.versionNumber;
  }, t2.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), t2.VERSIONS = [new t2(1, new Int32Array(0), new en(7, new rn(1, 19)), new en(10, new rn(1, 16)), new en(13, new rn(1, 13)), new en(17, new rn(1, 9))), new t2(2, Int32Array.from([6, 18]), new en(10, new rn(1, 34)), new en(16, new rn(1, 28)), new en(22, new rn(1, 22)), new en(28, new rn(1, 16))), new t2(3, Int32Array.from([6, 22]), new en(15, new rn(1, 55)), new en(26, new rn(1, 44)), new en(18, new rn(2, 17)), new en(22, new rn(2, 13))), new t2(4, Int32Array.from([6, 26]), new en(20, new rn(1, 80)), new en(18, new rn(2, 32)), new en(26, new rn(2, 24)), new en(16, new rn(4, 9))), new t2(5, Int32Array.from([6, 30]), new en(26, new rn(1, 108)), new en(24, new rn(2, 43)), new en(18, new rn(2, 15), new rn(2, 16)), new en(22, new rn(2, 11), new rn(2, 12))), new t2(6, Int32Array.from([6, 34]), new en(18, new rn(2, 68)), new en(16, new rn(4, 27)), new en(24, new rn(4, 19)), new en(28, new rn(4, 15))), new t2(7, Int32Array.from([6, 22, 38]), new en(20, new rn(2, 78)), new en(18, new rn(4, 31)), new en(18, new rn(2, 14), new rn(4, 15)), new en(26, new rn(4, 13), new rn(1, 14))), new t2(8, Int32Array.from([6, 24, 42]), new en(24, new rn(2, 97)), new en(22, new rn(2, 38), new rn(2, 39)), new en(22, new rn(4, 18), new rn(2, 19)), new en(26, new rn(4, 14), new rn(2, 15))), new t2(9, Int32Array.from([6, 26, 46]), new en(30, new rn(2, 116)), new en(22, new rn(3, 36), new rn(2, 37)), new en(20, new rn(4, 16), new rn(4, 17)), new en(24, new rn(4, 12), new rn(4, 13))), new t2(10, Int32Array.from([6, 28, 50]), new en(18, new rn(2, 68), new rn(2, 69)), new en(26, new rn(4, 43), new rn(1, 44)), new en(24, new rn(6, 19), new rn(2, 20)), new en(28, new rn(6, 15), new rn(2, 16))), new t2(11, Int32Array.from([6, 30, 54]), new en(20, new rn(4, 81)), new en(30, new rn(1, 50), new rn(4, 51)), new en(28, new rn(4, 22), new rn(4, 23)), new en(24, new rn(3, 12), new rn(8, 13))), new t2(12, Int32Array.from([6, 32, 58]), new en(24, new rn(2, 92), new rn(2, 93)), new en(22, new rn(6, 36), new rn(2, 37)), new en(26, new rn(4, 20), new rn(6, 21)), new en(28, new rn(7, 14), new rn(4, 15))), new t2(13, Int32Array.from([6, 34, 62]), new en(26, new rn(4, 107)), new en(22, new rn(8, 37), new rn(1, 38)), new en(24, new rn(8, 20), new rn(4, 21)), new en(22, new rn(12, 11), new rn(4, 12))), new t2(14, Int32Array.from([6, 26, 46, 66]), new en(30, new rn(3, 115), new rn(1, 116)), new en(24, new rn(4, 40), new rn(5, 41)), new en(20, new rn(11, 16), new rn(5, 17)), new en(24, new rn(11, 12), new rn(5, 13))), new t2(15, Int32Array.from([6, 26, 48, 70]), new en(22, new rn(5, 87), new rn(1, 88)), new en(24, new rn(5, 41), new rn(5, 42)), new en(30, new rn(5, 24), new rn(7, 25)), new en(24, new rn(11, 12), new rn(7, 13))), new t2(16, Int32Array.from([6, 26, 50, 74]), new en(24, new rn(5, 98), new rn(1, 99)), new en(28, new rn(7, 45), new rn(3, 46)), new en(24, new rn(15, 19), new rn(2, 20)), new en(30, new rn(3, 15), new rn(13, 16))), new t2(17, Int32Array.from([6, 30, 54, 78]), new en(28, new rn(1, 107), new rn(5, 108)), new en(28, new rn(10, 46), new rn(1, 47)), new en(28, new rn(1, 22), new rn(15, 23)), new en(28, new rn(2, 14), new rn(17, 15))), new t2(18, Int32Array.from([6, 30, 56, 82]), new en(30, new rn(5, 120), new rn(1, 121)), new en(26, new rn(9, 43), new rn(4, 44)), new en(28, new rn(17, 22), new rn(1, 23)), new en(28, new rn(2, 14), new rn(19, 15))), new t2(19, Int32Array.from([6, 30, 58, 86]), new en(28, new rn(3, 113), new rn(4, 114)), new en(26, new rn(3, 44), new rn(11, 45)), new en(26, new rn(17, 21), new rn(4, 22)), new en(26, new rn(9, 13), new rn(16, 14))), new t2(20, Int32Array.from([6, 34, 62, 90]), new en(28, new rn(3, 107), new rn(5, 108)), new en(26, new rn(3, 41), new rn(13, 42)), new en(30, new rn(15, 24), new rn(5, 25)), new en(28, new rn(15, 15), new rn(10, 16))), new t2(21, Int32Array.from([6, 28, 50, 72, 94]), new en(28, new rn(4, 116), new rn(4, 117)), new en(26, new rn(17, 42)), new en(28, new rn(17, 22), new rn(6, 23)), new en(30, new rn(19, 16), new rn(6, 17))), new t2(22, Int32Array.from([6, 26, 50, 74, 98]), new en(28, new rn(2, 111), new rn(7, 112)), new en(28, new rn(17, 46)), new en(30, new rn(7, 24), new rn(16, 25)), new en(24, new rn(34, 13))), new t2(23, Int32Array.from([6, 30, 54, 78, 102]), new en(30, new rn(4, 121), new rn(5, 122)), new en(28, new rn(4, 47), new rn(14, 48)), new en(30, new rn(11, 24), new rn(14, 25)), new en(30, new rn(16, 15), new rn(14, 16))), new t2(24, Int32Array.from([6, 28, 54, 80, 106]), new en(30, new rn(6, 117), new rn(4, 118)), new en(28, new rn(6, 45), new rn(14, 46)), new en(30, new rn(11, 24), new rn(16, 25)), new en(30, new rn(30, 16), new rn(2, 17))), new t2(25, Int32Array.from([6, 32, 58, 84, 110]), new en(26, new rn(8, 106), new rn(4, 107)), new en(28, new rn(8, 47), new rn(13, 48)), new en(30, new rn(7, 24), new rn(22, 25)), new en(30, new rn(22, 15), new rn(13, 16))), new t2(26, Int32Array.from([6, 30, 58, 86, 114]), new en(28, new rn(10, 114), new rn(2, 115)), new en(28, new rn(19, 46), new rn(4, 47)), new en(28, new rn(28, 22), new rn(6, 23)), new en(30, new rn(33, 16), new rn(4, 17))), new t2(27, Int32Array.from([6, 34, 62, 90, 118]), new en(30, new rn(8, 122), new rn(4, 123)), new en(28, new rn(22, 45), new rn(3, 46)), new en(30, new rn(8, 23), new rn(26, 24)), new en(30, new rn(12, 15), new rn(28, 16))), new t2(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new en(30, new rn(3, 117), new rn(10, 118)), new en(28, new rn(3, 45), new rn(23, 46)), new en(30, new rn(4, 24), new rn(31, 25)), new en(30, new rn(11, 15), new rn(31, 16))), new t2(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new en(30, new rn(7, 116), new rn(7, 117)), new en(28, new rn(21, 45), new rn(7, 46)), new en(30, new rn(1, 23), new rn(37, 24)), new en(30, new rn(19, 15), new rn(26, 16))), new t2(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new en(30, new rn(5, 115), new rn(10, 116)), new en(28, new rn(19, 47), new rn(10, 48)), new en(30, new rn(15, 24), new rn(25, 25)), new en(30, new rn(23, 15), new rn(25, 16))), new t2(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new en(30, new rn(13, 115), new rn(3, 116)), new en(28, new rn(2, 46), new rn(29, 47)), new en(30, new rn(42, 24), new rn(1, 25)), new en(30, new rn(23, 15), new rn(28, 16))), new t2(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new en(30, new rn(17, 115)), new en(28, new rn(10, 46), new rn(23, 47)), new en(30, new rn(10, 24), new rn(35, 25)), new en(30, new rn(19, 15), new rn(35, 16))), new t2(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new en(30, new rn(17, 115), new rn(1, 116)), new en(28, new rn(14, 46), new rn(21, 47)), new en(30, new rn(29, 24), new rn(19, 25)), new en(30, new rn(11, 15), new rn(46, 16))), new t2(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new en(30, new rn(13, 115), new rn(6, 116)), new en(28, new rn(14, 46), new rn(23, 47)), new en(30, new rn(44, 24), new rn(7, 25)), new en(30, new rn(59, 16), new rn(1, 17))), new t2(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new en(30, new rn(12, 121), new rn(7, 122)), new en(28, new rn(12, 47), new rn(26, 48)), new en(30, new rn(39, 24), new rn(14, 25)), new en(30, new rn(22, 15), new rn(41, 16))), new t2(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new en(30, new rn(6, 121), new rn(14, 122)), new en(28, new rn(6, 47), new rn(34, 48)), new en(30, new rn(46, 24), new rn(10, 25)), new en(30, new rn(2, 15), new rn(64, 16))), new t2(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new en(30, new rn(17, 122), new rn(4, 123)), new en(28, new rn(29, 46), new rn(14, 47)), new en(30, new rn(49, 24), new rn(10, 25)), new en(30, new rn(24, 15), new rn(46, 16))), new t2(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new en(30, new rn(4, 122), new rn(18, 123)), new en(28, new rn(13, 46), new rn(32, 47)), new en(30, new rn(48, 24), new rn(14, 25)), new en(30, new rn(42, 15), new rn(32, 16))), new t2(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new en(30, new rn(20, 117), new rn(4, 118)), new en(28, new rn(40, 47), new rn(7, 48)), new en(30, new rn(43, 24), new rn(22, 25)), new en(30, new rn(10, 15), new rn(67, 16))), new t2(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new en(30, new rn(19, 118), new rn(6, 119)), new en(28, new rn(18, 47), new rn(31, 48)), new en(30, new rn(34, 24), new rn(34, 25)), new en(30, new rn(20, 15), new rn(61, 16)))], t2;
}();
!function(t2) {
  t2[t2.DATA_MASK_000 = 0] = "DATA_MASK_000", t2[t2.DATA_MASK_001 = 1] = "DATA_MASK_001", t2[t2.DATA_MASK_010 = 2] = "DATA_MASK_010", t2[t2.DATA_MASK_011 = 3] = "DATA_MASK_011", t2[t2.DATA_MASK_100 = 4] = "DATA_MASK_100", t2[t2.DATA_MASK_101 = 5] = "DATA_MASK_101", t2[t2.DATA_MASK_110 = 6] = "DATA_MASK_110", t2[t2.DATA_MASK_111 = 7] = "DATA_MASK_111";
}(jr || (jr = {}));
var an;
var sn = function() {
  function t2(t3, e2) {
    this.value = t3, this.isMasked = e2;
  }
  return t2.prototype.unmaskBitMatrix = function(t3, e2) {
    for (var r2 = 0; r2 < e2; r2++) for (var n2 = 0; n2 < e2; n2++) this.isMasked(r2, n2) && t3.flip(n2, r2);
  }, t2.values = /* @__PURE__ */ new Map([[jr.DATA_MASK_000, new t2(jr.DATA_MASK_000, function(t3, e2) {
    return 0 == (t3 + e2 & 1);
  })], [jr.DATA_MASK_001, new t2(jr.DATA_MASK_001, function(t3, e2) {
    return 0 == (1 & t3);
  })], [jr.DATA_MASK_010, new t2(jr.DATA_MASK_010, function(t3, e2) {
    return e2 % 3 == 0;
  })], [jr.DATA_MASK_011, new t2(jr.DATA_MASK_011, function(t3, e2) {
    return (t3 + e2) % 3 == 0;
  })], [jr.DATA_MASK_100, new t2(jr.DATA_MASK_100, function(t3, e2) {
    return 0 == (Math.floor(t3 / 2) + Math.floor(e2 / 3) & 1);
  })], [jr.DATA_MASK_101, new t2(jr.DATA_MASK_101, function(t3, e2) {
    return t3 * e2 % 6 == 0;
  })], [jr.DATA_MASK_110, new t2(jr.DATA_MASK_110, function(t3, e2) {
    return t3 * e2 % 6 < 3;
  })], [jr.DATA_MASK_111, new t2(jr.DATA_MASK_111, function(t3, e2) {
    return 0 == (t3 + e2 + t3 * e2 % 3 & 1);
  })]]), t2;
}();
var un = function() {
  function t2(t3) {
    var e2 = t3.getHeight();
    if (e2 < 21 || 1 != (3 & e2)) throw new Q();
    this.bitMatrix = t3;
  }
  return t2.prototype.readFormatInformation = function() {
    if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
    for (var t3 = 0, e2 = 0; e2 < 6; e2++) t3 = this.copyBit(e2, 8, t3);
    t3 = this.copyBit(7, 8, t3), t3 = this.copyBit(8, 8, t3), t3 = this.copyBit(8, 7, t3);
    for (var r2 = 5; r2 >= 0; r2--) t3 = this.copyBit(8, r2, t3);
    var n2 = this.bitMatrix.getHeight(), o2 = 0, i2 = n2 - 7;
    for (r2 = n2 - 1; r2 >= i2; r2--) o2 = this.copyBit(8, r2, o2);
    for (e2 = n2 - 8; e2 < n2; e2++) o2 = this.copyBit(e2, 8, o2);
    if (this.parsedFormatInfo = $r.decodeFormatInformation(t3, o2), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
    throw new Q();
  }, t2.prototype.readVersion = function() {
    if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
    var t3 = this.bitMatrix.getHeight(), e2 = Math.floor((t3 - 17) / 4);
    if (e2 <= 6) return on.getVersionForNumber(e2);
    for (var r2 = 0, n2 = t3 - 11, o2 = 5; o2 >= 0; o2--) for (var i2 = t3 - 9; i2 >= n2; i2--) r2 = this.copyBit(i2, o2, r2);
    var a2 = on.decodeVersionInformation(r2);
    if (null !== a2 && a2.getDimensionForVersion() === t3) return this.parsedVersion = a2, a2;
    r2 = 0;
    for (i2 = 5; i2 >= 0; i2--) for (o2 = t3 - 9; o2 >= n2; o2--) r2 = this.copyBit(i2, o2, r2);
    if (null !== (a2 = on.decodeVersionInformation(r2)) && a2.getDimensionForVersion() === t3) return this.parsedVersion = a2, a2;
    throw new Q();
  }, t2.prototype.copyBit = function(t3, e2, r2) {
    return (this.isMirror ? this.bitMatrix.get(e2, t3) : this.bitMatrix.get(t3, e2)) ? r2 << 1 | 1 : r2 << 1;
  }, t2.prototype.readCodewords = function() {
    var t3 = this.readFormatInformation(), e2 = this.readVersion(), r2 = sn.values.get(t3.getDataMask()), n2 = this.bitMatrix.getHeight();
    r2.unmaskBitMatrix(this.bitMatrix, n2);
    for (var o2 = e2.buildFunctionPattern(), i2 = true, a2 = new Uint8Array(e2.getTotalCodewords()), s2 = 0, u2 = 0, c2 = 0, f2 = n2 - 1; f2 > 0; f2 -= 2) {
      6 === f2 && f2--;
      for (var h2 = 0; h2 < n2; h2++) for (var l2 = i2 ? n2 - 1 - h2 : h2, d2 = 0; d2 < 2; d2++) o2.get(f2 - d2, l2) || (c2++, u2 <<= 1, this.bitMatrix.get(f2 - d2, l2) && (u2 |= 1), 8 === c2 && (a2[s2++] = u2, c2 = 0, u2 = 0));
      i2 = !i2;
    }
    if (s2 !== e2.getTotalCodewords()) throw new Q();
    return a2;
  }, t2.prototype.remask = function() {
    if (null !== this.parsedFormatInfo) {
      var t3 = sn.values[this.parsedFormatInfo.getDataMask()], e2 = this.bitMatrix.getHeight();
      t3.unmaskBitMatrix(this.bitMatrix, e2);
    }
  }, t2.prototype.setMirror = function(t3) {
    this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t3;
  }, t2.prototype.mirror = function() {
    for (var t3 = this.bitMatrix, e2 = 0, r2 = t3.getWidth(); e2 < r2; e2++) for (var n2 = e2 + 1, o2 = t3.getHeight(); n2 < o2; n2++) t3.get(e2, n2) !== t3.get(n2, e2) && (t3.flip(n2, e2), t3.flip(e2, n2));
  }, t2;
}();
var cn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var fn = function() {
  function t2(t3, e2) {
    this.numDataCodewords = t3, this.codewords = e2;
  }
  return t2.getDataBlocks = function(e2, r2, n2) {
    var o2, i2, a2, s2;
    if (e2.length !== r2.getTotalCodewords()) throw new D();
    var u2 = r2.getECBlocksForLevel(n2), c2 = 0, f2 = u2.getECBlocks();
    try {
      for (var h2 = cn(f2), l2 = h2.next(); !l2.done; l2 = h2.next()) {
        c2 += (A2 = l2.value).getCount();
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        l2 && !l2.done && (i2 = h2.return) && i2.call(h2);
      } finally {
        if (o2) throw o2.error;
      }
    }
    var d2 = new Array(c2), p2 = 0;
    try {
      for (var g2 = cn(f2), w2 = g2.next(); !w2.done; w2 = g2.next()) for (var A2 = w2.value, y2 = 0; y2 < A2.getCount(); y2++) {
        var C2 = A2.getDataCodewords(), E2 = u2.getECCodewordsPerBlock() + C2;
        d2[p2++] = new t2(C2, new Uint8Array(E2));
      }
    } catch (t3) {
      a2 = { error: t3 };
    } finally {
      try {
        w2 && !w2.done && (s2 = g2.return) && s2.call(g2);
      } finally {
        if (a2) throw a2.error;
      }
    }
    for (var v2 = d2[0].codewords.length, m2 = d2.length - 1; m2 >= 0; ) {
      if (d2[m2].codewords.length === v2) break;
      m2--;
    }
    m2++;
    var I2 = v2 - u2.getECCodewordsPerBlock(), _2 = 0;
    for (y2 = 0; y2 < I2; y2++) for (var T2 = 0; T2 < p2; T2++) d2[T2].codewords[y2] = e2[_2++];
    for (T2 = m2; T2 < p2; T2++) d2[T2].codewords[I2] = e2[_2++];
    var S2 = d2[0].codewords.length;
    for (y2 = I2; y2 < S2; y2++) for (T2 = 0; T2 < p2; T2++) {
      var B2 = T2 < m2 ? y2 : y2 + 1;
      d2[T2].codewords[B2] = e2[_2++];
    }
    return d2;
  }, t2.prototype.getNumDataCodewords = function() {
    return this.numDataCodewords;
  }, t2.prototype.getCodewords = function() {
    return this.codewords;
  }, t2;
}();
!function(t2) {
  t2[t2.TERMINATOR = 0] = "TERMINATOR", t2[t2.NUMERIC = 1] = "NUMERIC", t2[t2.ALPHANUMERIC = 2] = "ALPHANUMERIC", t2[t2.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", t2[t2.BYTE = 4] = "BYTE", t2[t2.ECI = 5] = "ECI", t2[t2.KANJI = 6] = "KANJI", t2[t2.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", t2[t2.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", t2[t2.HANZI = 9] = "HANZI";
}(an || (an = {}));
var hn;
var ln;
var dn = function() {
  function t2(e2, r2, n2, o2) {
    this.value = e2, this.stringValue = r2, this.characterCountBitsForVersions = n2, this.bits = o2, t2.FOR_BITS.set(o2, this), t2.FOR_VALUE.set(e2, this);
  }
  return t2.forBits = function(e2) {
    var r2 = t2.FOR_BITS.get(e2);
    if (void 0 === r2) throw new D();
    return r2;
  }, t2.prototype.getCharacterCountBits = function(t3) {
    var e2, r2 = t3.getVersionNumber();
    return e2 = r2 <= 9 ? 0 : r2 <= 26 ? 1 : 2, this.characterCountBitsForVersions[e2];
  }, t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getBits = function() {
    return this.bits;
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    return this.value === r2.value;
  }, t2.prototype.toString = function() {
    return this.stringValue;
  }, t2.FOR_BITS = /* @__PURE__ */ new Map(), t2.FOR_VALUE = /* @__PURE__ */ new Map(), t2.TERMINATOR = new t2(an.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), t2.NUMERIC = new t2(an.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), t2.ALPHANUMERIC = new t2(an.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), t2.STRUCTURED_APPEND = new t2(an.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), t2.BYTE = new t2(an.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), t2.ECI = new t2(an.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), t2.KANJI = new t2(an.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), t2.FNC1_FIRST_POSITION = new t2(an.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), t2.FNC1_SECOND_POSITION = new t2(an.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), t2.HANZI = new t2(an.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), t2;
}();
var pn = function() {
  function t2() {
  }
  return t2.decode = function(e2, r2, n2, o2) {
    var i2 = new qr(e2), a2 = new tt(), s2 = new Array(), u2 = -1, c2 = -1;
    try {
      var f2 = null, h2 = false, l2 = void 0;
      do {
        if (i2.available() < 4) l2 = dn.TERMINATOR;
        else {
          var d2 = i2.readBits(4);
          l2 = dn.forBits(d2);
        }
        switch (l2) {
          case dn.TERMINATOR:
            break;
          case dn.FNC1_FIRST_POSITION:
          case dn.FNC1_SECOND_POSITION:
            h2 = true;
            break;
          case dn.STRUCTURED_APPEND:
            if (i2.available() < 16) throw new Q();
            u2 = i2.readBits(8), c2 = i2.readBits(8);
            break;
          case dn.ECI:
            var p2 = t2.parseECIValue(i2);
            if (null === (f2 = Z.getCharacterSetECIByValue(p2))) throw new Q();
            break;
          case dn.HANZI:
            var g2 = i2.readBits(4), w2 = i2.readBits(l2.getCharacterCountBits(r2));
            g2 === t2.GB2312_SUBSET && t2.decodeHanziSegment(i2, a2, w2);
            break;
          default:
            var A2 = i2.readBits(l2.getCharacterCountBits(r2));
            switch (l2) {
              case dn.NUMERIC:
                t2.decodeNumericSegment(i2, a2, A2);
                break;
              case dn.ALPHANUMERIC:
                t2.decodeAlphanumericSegment(i2, a2, A2, h2);
                break;
              case dn.BYTE:
                t2.decodeByteSegment(i2, a2, A2, f2, s2, o2);
                break;
              case dn.KANJI:
                t2.decodeKanjiSegment(i2, a2, A2);
                break;
              default:
                throw new Q();
            }
        }
      } while (l2 !== dn.TERMINATOR);
    } catch (t3) {
      throw new Q();
    }
    return new It(e2, a2.toString(), 0 === s2.length ? null : s2, null === n2 ? null : n2.toString(), u2, c2);
  }, t2.decodeHanziSegment = function(t3, e2, r2) {
    if (13 * r2 > t3.available()) throw new Q();
    for (var n2 = new Uint8Array(2 * r2), o2 = 0; r2 > 0; ) {
      var i2 = t3.readBits(13), a2 = i2 / 96 << 8 & 4294967295 | i2 % 96;
      a2 += a2 < 959 ? 41377 : 42657, n2[o2] = a2 >> 8 & 255, n2[o2 + 1] = 255 & a2, o2 += 2, r2--;
    }
    try {
      e2.append(J.decode(n2, $.GB2312));
    } catch (t4) {
      throw new Q(t4);
    }
  }, t2.decodeKanjiSegment = function(t3, e2, r2) {
    if (13 * r2 > t3.available()) throw new Q();
    for (var n2 = new Uint8Array(2 * r2), o2 = 0; r2 > 0; ) {
      var i2 = t3.readBits(13), a2 = i2 / 192 << 8 & 4294967295 | i2 % 192;
      a2 += a2 < 7936 ? 33088 : 49472, n2[o2] = a2 >> 8, n2[o2 + 1] = a2, o2 += 2, r2--;
    }
    try {
      e2.append(J.decode(n2, $.SHIFT_JIS));
    } catch (t4) {
      throw new Q(t4);
    }
  }, t2.decodeByteSegment = function(t3, e2, r2, n2, o2, i2) {
    if (8 * r2 > t3.available()) throw new Q();
    for (var a2, s2 = new Uint8Array(r2), u2 = 0; u2 < r2; u2++) s2[u2] = t3.readBits(8);
    a2 = null === n2 ? $.guessEncoding(s2, i2) : n2.getName();
    try {
      e2.append(J.decode(s2, a2));
    } catch (t4) {
      throw new Q(t4);
    }
    o2.push(s2);
  }, t2.toAlphaNumericChar = function(e2) {
    if (e2 >= t2.ALPHANUMERIC_CHARS.length) throw new Q();
    return t2.ALPHANUMERIC_CHARS[e2];
  }, t2.decodeAlphanumericSegment = function(e2, r2, n2, o2) {
    for (var i2 = r2.length(); n2 > 1; ) {
      if (e2.available() < 11) throw new Q();
      var a2 = e2.readBits(11);
      r2.append(t2.toAlphaNumericChar(Math.floor(a2 / 45))), r2.append(t2.toAlphaNumericChar(a2 % 45)), n2 -= 2;
    }
    if (1 === n2) {
      if (e2.available() < 6) throw new Q();
      r2.append(t2.toAlphaNumericChar(e2.readBits(6)));
    }
    if (o2) for (var s2 = i2; s2 < r2.length(); s2++) "%" === r2.charAt(s2) && (s2 < r2.length() - 1 && "%" === r2.charAt(s2 + 1) ? r2.deleteCharAt(s2 + 1) : r2.setCharAt(s2, String.fromCharCode(29)));
  }, t2.decodeNumericSegment = function(e2, r2, n2) {
    for (; n2 >= 3; ) {
      if (e2.available() < 10) throw new Q();
      var o2 = e2.readBits(10);
      if (o2 >= 1e3) throw new Q();
      r2.append(t2.toAlphaNumericChar(Math.floor(o2 / 100))), r2.append(t2.toAlphaNumericChar(Math.floor(o2 / 10) % 10)), r2.append(t2.toAlphaNumericChar(o2 % 10)), n2 -= 3;
    }
    if (2 === n2) {
      if (e2.available() < 7) throw new Q();
      var i2 = e2.readBits(7);
      if (i2 >= 100) throw new Q();
      r2.append(t2.toAlphaNumericChar(Math.floor(i2 / 10))), r2.append(t2.toAlphaNumericChar(i2 % 10));
    } else if (1 === n2) {
      if (e2.available() < 4) throw new Q();
      var a2 = e2.readBits(4);
      if (a2 >= 10) throw new Q();
      r2.append(t2.toAlphaNumericChar(a2));
    }
  }, t2.parseECIValue = function(t3) {
    var e2 = t3.readBits(8);
    if (0 == (128 & e2)) return 127 & e2;
    if (128 == (192 & e2)) return (63 & e2) << 8 & 4294967295 | t3.readBits(8);
    if (192 == (224 & e2)) return (31 & e2) << 16 & 4294967295 | t3.readBits(16);
    throw new Q();
  }, t2.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", t2.GB2312_SUBSET = 1, t2;
}();
var gn = function() {
  function t2(t3) {
    this.mirrored = t3;
  }
  return t2.prototype.isMirrored = function() {
    return this.mirrored;
  }, t2.prototype.applyMirroredCorrection = function(t3) {
    if (this.mirrored && null !== t3 && !(t3.length < 3)) {
      var e2 = t3[0];
      t3[0] = t3[2], t3[2] = e2;
    }
  }, t2;
}();
var wn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var An = function() {
  function t2() {
    this.rsDecoder = new Pt(Dt.QR_CODE_FIELD_256);
  }
  return t2.prototype.decodeBooleanArray = function(t3, e2) {
    return this.decodeBitMatrix(et.parseFromBooleanArray(t3), e2);
  }, t2.prototype.decodeBitMatrix = function(t3, e2) {
    var r2 = new un(t3), n2 = null;
    try {
      return this.decodeBitMatrixParser(r2, e2);
    } catch (t4) {
      n2 = t4;
    }
    try {
      r2.remask(), r2.setMirror(true), r2.readVersion(), r2.readFormatInformation(), r2.mirror();
      var o2 = this.decodeBitMatrixParser(r2, e2);
      return o2.setOther(new gn(true)), o2;
    } catch (t4) {
      if (null !== n2) throw n2;
      throw t4;
    }
  }, t2.prototype.decodeBitMatrixParser = function(t3, e2) {
    var r2, n2, o2, i2, a2 = t3.readVersion(), s2 = t3.readFormatInformation().getErrorCorrectionLevel(), u2 = t3.readCodewords(), c2 = fn.getDataBlocks(u2, a2, s2), f2 = 0;
    try {
      for (var h2 = wn(c2), l2 = h2.next(); !l2.done; l2 = h2.next()) {
        f2 += (A2 = l2.value).getNumDataCodewords();
      }
    } catch (t4) {
      r2 = { error: t4 };
    } finally {
      try {
        l2 && !l2.done && (n2 = h2.return) && n2.call(h2);
      } finally {
        if (r2) throw r2.error;
      }
    }
    var d2 = new Uint8Array(f2), p2 = 0;
    try {
      for (var g2 = wn(c2), w2 = g2.next(); !w2.done; w2 = g2.next()) {
        var A2, y2 = (A2 = w2.value).getCodewords(), C2 = A2.getNumDataCodewords();
        this.correctErrors(y2, C2);
        for (var E2 = 0; E2 < C2; E2++) d2[p2++] = y2[E2];
      }
    } catch (t4) {
      o2 = { error: t4 };
    } finally {
      try {
        w2 && !w2.done && (i2 = g2.return) && i2.call(g2);
      } finally {
        if (o2) throw o2.error;
      }
    }
    return pn.decode(d2, a2, s2, e2);
  }, t2.prototype.correctErrors = function(t3, e2) {
    var r2 = new Int32Array(t3);
    try {
      this.rsDecoder.decode(r2, t3.length - e2);
    } catch (t4) {
      throw new M();
    }
    for (var n2 = 0; n2 < e2; n2++) t3[n2] = r2[n2];
  }, t2;
}();
var yn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Cn = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3, r2) || this;
    return o2.estimatedModuleSize = n2, o2;
  }
  return yn(e2, t2), e2.prototype.aboutEquals = function(t3, e3, r2) {
    if (Math.abs(e3 - this.getY()) <= t3 && Math.abs(r2 - this.getX()) <= t3) {
      var n2 = Math.abs(t3 - this.estimatedModuleSize);
      return n2 <= 1 || n2 <= this.estimatedModuleSize;
    }
    return false;
  }, e2.prototype.combineEstimate = function(t3, r2, n2) {
    return new e2((this.getX() + r2) / 2, (this.getY() + t3) / 2, (this.estimatedModuleSize + n2) / 2);
  }, e2;
}(Vt);
var En = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var vn = function() {
  function t2(t3, e2, r2, n2, o2, i2, a2) {
    this.image = t3, this.startX = e2, this.startY = r2, this.width = n2, this.height = o2, this.moduleSize = i2, this.resultPointCallback = a2, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3);
  }
  return t2.prototype.find = function() {
    for (var t3 = this.startX, e2 = this.height, r2 = t3 + this.width, n2 = this.startY + e2 / 2, o2 = new Int32Array(3), i2 = this.image, a2 = 0; a2 < e2; a2++) {
      var s2 = n2 + (0 == (1 & a2) ? Math.floor((a2 + 1) / 2) : -Math.floor((a2 + 1) / 2));
      o2[0] = 0, o2[1] = 0, o2[2] = 0;
      for (var u2 = t3; u2 < r2 && !i2.get(u2, s2); ) u2++;
      for (var c2 = 0; u2 < r2; ) {
        if (i2.get(u2, s2)) if (1 === c2) o2[1]++;
        else if (2 === c2) {
          var f2;
          if (this.foundPatternCross(o2)) {
            if (null !== (f2 = this.handlePossibleCenter(o2, s2, u2))) return f2;
          }
          o2[0] = o2[2], o2[1] = 1, o2[2] = 0, c2 = 1;
        } else o2[++c2]++;
        else 1 === c2 && c2++, o2[c2]++;
        u2++;
      }
      if (this.foundPatternCross(o2)) {
        if (null !== (f2 = this.handlePossibleCenter(o2, s2, r2))) return f2;
      }
    }
    if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
    throw new nt();
  }, t2.centerFromEnd = function(t3, e2) {
    return e2 - t3[2] - t3[1] / 2;
  }, t2.prototype.foundPatternCross = function(t3) {
    for (var e2 = this.moduleSize, r2 = e2 / 2, n2 = 0; n2 < 3; n2++) if (Math.abs(e2 - t3[n2]) >= r2) return false;
    return true;
  }, t2.prototype.crossCheckVertical = function(e2, r2, n2, o2) {
    var i2 = this.image, a2 = i2.getHeight(), s2 = this.crossCheckStateCount;
    s2[0] = 0, s2[1] = 0, s2[2] = 0;
    for (var u2 = e2; u2 >= 0 && i2.get(r2, u2) && s2[1] <= n2; ) s2[1]++, u2--;
    if (u2 < 0 || s2[1] > n2) return NaN;
    for (; u2 >= 0 && !i2.get(r2, u2) && s2[0] <= n2; ) s2[0]++, u2--;
    if (s2[0] > n2) return NaN;
    for (u2 = e2 + 1; u2 < a2 && i2.get(r2, u2) && s2[1] <= n2; ) s2[1]++, u2++;
    if (u2 === a2 || s2[1] > n2) return NaN;
    for (; u2 < a2 && !i2.get(r2, u2) && s2[2] <= n2; ) s2[2]++, u2++;
    if (s2[2] > n2) return NaN;
    var c2 = s2[0] + s2[1] + s2[2];
    return 5 * Math.abs(c2 - o2) >= 2 * o2 ? NaN : this.foundPatternCross(s2) ? t2.centerFromEnd(s2, u2) : NaN;
  }, t2.prototype.handlePossibleCenter = function(e2, r2, n2) {
    var o2, i2, a2 = e2[0] + e2[1] + e2[2], s2 = t2.centerFromEnd(e2, n2), u2 = this.crossCheckVertical(r2, s2, 2 * e2[1], a2);
    if (!isNaN(u2)) {
      var c2 = (e2[0] + e2[1] + e2[2]) / 3;
      try {
        for (var f2 = En(this.possibleCenters), h2 = f2.next(); !h2.done; h2 = f2.next()) {
          var l2 = h2.value;
          if (l2.aboutEquals(c2, u2, s2)) return l2.combineEstimate(u2, s2, c2);
        }
      } catch (t3) {
        o2 = { error: t3 };
      } finally {
        try {
          h2 && !h2.done && (i2 = f2.return) && i2.call(f2);
        } finally {
          if (o2) throw o2.error;
        }
      }
      var d2 = new Cn(s2, u2, c2);
      this.possibleCenters.push(d2), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(d2);
    }
    return null;
  }, t2;
}();
var mn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var In = function(t2) {
  function e2(e3, r2, n2, o2) {
    var i2 = t2.call(this, e3, r2) || this;
    return i2.estimatedModuleSize = n2, i2.count = o2, void 0 === o2 && (i2.count = 1), i2;
  }
  return mn(e2, t2), e2.prototype.getEstimatedModuleSize = function() {
    return this.estimatedModuleSize;
  }, e2.prototype.getCount = function() {
    return this.count;
  }, e2.prototype.aboutEquals = function(t3, e3, r2) {
    if (Math.abs(e3 - this.getY()) <= t3 && Math.abs(r2 - this.getX()) <= t3) {
      var n2 = Math.abs(t3 - this.estimatedModuleSize);
      return n2 <= 1 || n2 <= this.estimatedModuleSize;
    }
    return false;
  }, e2.prototype.combineEstimate = function(t3, r2, n2) {
    var o2 = this.count + 1;
    return new e2((this.count * this.getX() + r2) / o2, (this.count * this.getY() + t3) / o2, (this.count * this.estimatedModuleSize + n2) / o2, o2);
  }, e2;
}(Vt);
var _n = function() {
  function t2(t3) {
    this.bottomLeft = t3[0], this.topLeft = t3[1], this.topRight = t3[2];
  }
  return t2.prototype.getBottomLeft = function() {
    return this.bottomLeft;
  }, t2.prototype.getTopLeft = function() {
    return this.topLeft;
  }, t2.prototype.getTopRight = function() {
    return this.topRight;
  }, t2;
}();
var Tn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Sn = function() {
  function t2(t3, e2) {
    this.image = t3, this.resultPointCallback = e2, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = e2;
  }
  return t2.prototype.getImage = function() {
    return this.image;
  }, t2.prototype.getPossibleCenters = function() {
    return this.possibleCenters;
  }, t2.prototype.find = function(e2) {
    var r2 = null != e2 && void 0 !== e2.get(H.TRY_HARDER), n2 = null != e2 && void 0 !== e2.get(H.PURE_BARCODE), o2 = this.image, i2 = o2.getHeight(), a2 = o2.getWidth(), s2 = Math.floor(3 * i2 / (4 * t2.MAX_MODULES));
    (s2 < t2.MIN_SKIP || r2) && (s2 = t2.MIN_SKIP);
    for (var u2 = false, c2 = new Int32Array(5), f2 = s2 - 1; f2 < i2 && !u2; f2 += s2) {
      c2[0] = 0, c2[1] = 0, c2[2] = 0, c2[3] = 0, c2[4] = 0;
      for (var h2 = 0, l2 = 0; l2 < a2; l2++) if (o2.get(l2, f2)) 1 == (1 & h2) && h2++, c2[h2]++;
      else if (0 == (1 & h2)) if (4 === h2) if (t2.foundPatternCross(c2)) {
        if (true !== this.handlePossibleCenter(c2, f2, l2, n2)) {
          c2[0] = c2[2], c2[1] = c2[3], c2[2] = c2[4], c2[3] = 1, c2[4] = 0, h2 = 3;
          continue;
        }
        if (s2 = 2, true === this.hasSkipped) u2 = this.haveMultiplyConfirmedCenters();
        else {
          var d2 = this.findRowSkip();
          d2 > c2[2] && (f2 += d2 - c2[2] - s2, l2 = a2 - 1);
        }
        h2 = 0, c2[0] = 0, c2[1] = 0, c2[2] = 0, c2[3] = 0, c2[4] = 0;
      } else c2[0] = c2[2], c2[1] = c2[3], c2[2] = c2[4], c2[3] = 1, c2[4] = 0, h2 = 3;
      else c2[++h2]++;
      else c2[h2]++;
      if (t2.foundPatternCross(c2)) true === this.handlePossibleCenter(c2, f2, a2, n2) && (s2 = c2[0], this.hasSkipped && (u2 = this.haveMultiplyConfirmedCenters()));
    }
    var p2 = this.selectBestPatterns();
    return Vt.orderBestPatterns(p2), new _n(p2);
  }, t2.centerFromEnd = function(t3, e2) {
    return e2 - t3[4] - t3[3] - t3[2] / 2;
  }, t2.foundPatternCross = function(t3) {
    for (var e2 = 0, r2 = 0; r2 < 5; r2++) {
      var n2 = t3[r2];
      if (0 === n2) return false;
      e2 += n2;
    }
    if (e2 < 7) return false;
    var o2 = e2 / 7, i2 = o2 / 2;
    return Math.abs(o2 - t3[0]) < i2 && Math.abs(o2 - t3[1]) < i2 && Math.abs(3 * o2 - t3[2]) < 3 * i2 && Math.abs(o2 - t3[3]) < i2 && Math.abs(o2 - t3[4]) < i2;
  }, t2.prototype.getCrossCheckStateCount = function() {
    var t3 = this.crossCheckStateCount;
    return t3[0] = 0, t3[1] = 0, t3[2] = 0, t3[3] = 0, t3[4] = 0, t3;
  }, t2.prototype.crossCheckDiagonal = function(e2, r2, n2, o2) {
    for (var i2 = this.getCrossCheckStateCount(), a2 = 0, s2 = this.image; e2 >= a2 && r2 >= a2 && s2.get(r2 - a2, e2 - a2); ) i2[2]++, a2++;
    if (e2 < a2 || r2 < a2) return false;
    for (; e2 >= a2 && r2 >= a2 && !s2.get(r2 - a2, e2 - a2) && i2[1] <= n2; ) i2[1]++, a2++;
    if (e2 < a2 || r2 < a2 || i2[1] > n2) return false;
    for (; e2 >= a2 && r2 >= a2 && s2.get(r2 - a2, e2 - a2) && i2[0] <= n2; ) i2[0]++, a2++;
    if (i2[0] > n2) return false;
    var u2 = s2.getHeight(), c2 = s2.getWidth();
    for (a2 = 1; e2 + a2 < u2 && r2 + a2 < c2 && s2.get(r2 + a2, e2 + a2); ) i2[2]++, a2++;
    if (e2 + a2 >= u2 || r2 + a2 >= c2) return false;
    for (; e2 + a2 < u2 && r2 + a2 < c2 && !s2.get(r2 + a2, e2 + a2) && i2[3] < n2; ) i2[3]++, a2++;
    if (e2 + a2 >= u2 || r2 + a2 >= c2 || i2[3] >= n2) return false;
    for (; e2 + a2 < u2 && r2 + a2 < c2 && s2.get(r2 + a2, e2 + a2) && i2[4] < n2; ) i2[4]++, a2++;
    if (i2[4] >= n2) return false;
    var f2 = i2[0] + i2[1] + i2[2] + i2[3] + i2[4];
    return Math.abs(f2 - o2) < 2 * o2 && t2.foundPatternCross(i2);
  }, t2.prototype.crossCheckVertical = function(e2, r2, n2, o2) {
    for (var i2 = this.image, a2 = i2.getHeight(), s2 = this.getCrossCheckStateCount(), u2 = e2; u2 >= 0 && i2.get(r2, u2); ) s2[2]++, u2--;
    if (u2 < 0) return NaN;
    for (; u2 >= 0 && !i2.get(r2, u2) && s2[1] <= n2; ) s2[1]++, u2--;
    if (u2 < 0 || s2[1] > n2) return NaN;
    for (; u2 >= 0 && i2.get(r2, u2) && s2[0] <= n2; ) s2[0]++, u2--;
    if (s2[0] > n2) return NaN;
    for (u2 = e2 + 1; u2 < a2 && i2.get(r2, u2); ) s2[2]++, u2++;
    if (u2 === a2) return NaN;
    for (; u2 < a2 && !i2.get(r2, u2) && s2[3] < n2; ) s2[3]++, u2++;
    if (u2 === a2 || s2[3] >= n2) return NaN;
    for (; u2 < a2 && i2.get(r2, u2) && s2[4] < n2; ) s2[4]++, u2++;
    if (s2[4] >= n2) return NaN;
    var c2 = s2[0] + s2[1] + s2[2] + s2[3] + s2[4];
    return 5 * Math.abs(c2 - o2) >= 2 * o2 ? NaN : t2.foundPatternCross(s2) ? t2.centerFromEnd(s2, u2) : NaN;
  }, t2.prototype.crossCheckHorizontal = function(e2, r2, n2, o2) {
    for (var i2 = this.image, a2 = i2.getWidth(), s2 = this.getCrossCheckStateCount(), u2 = e2; u2 >= 0 && i2.get(u2, r2); ) s2[2]++, u2--;
    if (u2 < 0) return NaN;
    for (; u2 >= 0 && !i2.get(u2, r2) && s2[1] <= n2; ) s2[1]++, u2--;
    if (u2 < 0 || s2[1] > n2) return NaN;
    for (; u2 >= 0 && i2.get(u2, r2) && s2[0] <= n2; ) s2[0]++, u2--;
    if (s2[0] > n2) return NaN;
    for (u2 = e2 + 1; u2 < a2 && i2.get(u2, r2); ) s2[2]++, u2++;
    if (u2 === a2) return NaN;
    for (; u2 < a2 && !i2.get(u2, r2) && s2[3] < n2; ) s2[3]++, u2++;
    if (u2 === a2 || s2[3] >= n2) return NaN;
    for (; u2 < a2 && i2.get(u2, r2) && s2[4] < n2; ) s2[4]++, u2++;
    if (s2[4] >= n2) return NaN;
    var c2 = s2[0] + s2[1] + s2[2] + s2[3] + s2[4];
    return 5 * Math.abs(c2 - o2) >= o2 ? NaN : t2.foundPatternCross(s2) ? t2.centerFromEnd(s2, u2) : NaN;
  }, t2.prototype.handlePossibleCenter = function(e2, r2, n2, o2) {
    var i2 = e2[0] + e2[1] + e2[2] + e2[3] + e2[4], a2 = t2.centerFromEnd(e2, n2), s2 = this.crossCheckVertical(r2, Math.floor(a2), e2[2], i2);
    if (!isNaN(s2) && (a2 = this.crossCheckHorizontal(Math.floor(a2), Math.floor(s2), e2[2], i2), !isNaN(a2) && (!o2 || this.crossCheckDiagonal(Math.floor(s2), Math.floor(a2), e2[2], i2)))) {
      for (var u2 = i2 / 7, c2 = false, f2 = this.possibleCenters, h2 = 0, l2 = f2.length; h2 < l2; h2++) {
        var d2 = f2[h2];
        if (d2.aboutEquals(u2, s2, a2)) {
          f2[h2] = d2.combineEstimate(s2, a2, u2), c2 = true;
          break;
        }
      }
      if (!c2) {
        var p2 = new In(a2, s2, u2);
        f2.push(p2), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(p2);
      }
      return true;
    }
    return false;
  }, t2.prototype.findRowSkip = function() {
    var e2, r2;
    if (this.possibleCenters.length <= 1) return 0;
    var n2 = null;
    try {
      for (var o2 = Tn(this.possibleCenters), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        if (a2.getCount() >= t2.CENTER_QUORUM) {
          if (null != n2) return this.hasSkipped = true, Math.floor((Math.abs(n2.getX() - a2.getX()) - Math.abs(n2.getY() - a2.getY())) / 2);
          n2 = a2;
        }
      }
    } catch (t3) {
      e2 = { error: t3 };
    } finally {
      try {
        i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return 0;
  }, t2.prototype.haveMultiplyConfirmedCenters = function() {
    var e2, r2, n2, o2, i2 = 0, a2 = 0, s2 = this.possibleCenters.length;
    try {
      for (var u2 = Tn(this.possibleCenters), c2 = u2.next(); !c2.done; c2 = u2.next()) {
        (p2 = c2.value).getCount() >= t2.CENTER_QUORUM && (i2++, a2 += p2.getEstimatedModuleSize());
      }
    } catch (t3) {
      e2 = { error: t3 };
    } finally {
      try {
        c2 && !c2.done && (r2 = u2.return) && r2.call(u2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    if (i2 < 3) return false;
    var f2 = a2 / s2, h2 = 0;
    try {
      for (var l2 = Tn(this.possibleCenters), d2 = l2.next(); !d2.done; d2 = l2.next()) {
        var p2 = d2.value;
        h2 += Math.abs(p2.getEstimatedModuleSize() - f2);
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        d2 && !d2.done && (o2 = l2.return) && o2.call(l2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    return h2 <= 0.05 * a2;
  }, t2.prototype.selectBestPatterns = function() {
    var t3, e2, r2, n2, o2 = this.possibleCenters.length;
    if (o2 < 3) throw new nt();
    var i2, a2 = this.possibleCenters;
    if (o2 > 3) {
      var s2 = 0, u2 = 0;
      try {
        for (var c2 = Tn(this.possibleCenters), f2 = c2.next(); !f2.done; f2 = c2.next()) {
          var h2 = f2.value.getEstimatedModuleSize();
          s2 += h2, u2 += h2 * h2;
        }
      } catch (e3) {
        t3 = { error: e3 };
      } finally {
        try {
          f2 && !f2.done && (e2 = c2.return) && e2.call(c2);
        } finally {
          if (t3) throw t3.error;
        }
      }
      i2 = s2 / o2;
      var l2 = Math.sqrt(u2 / o2 - i2 * i2);
      a2.sort(function(t4, e3) {
        var r3 = Math.abs(e3.getEstimatedModuleSize() - i2), n3 = Math.abs(t4.getEstimatedModuleSize() - i2);
        return r3 < n3 ? -1 : r3 > n3 ? 1 : 0;
      });
      for (var d2 = Math.max(0.2 * i2, l2), p2 = 0; p2 < a2.length && a2.length > 3; p2++) {
        var g2 = a2[p2];
        Math.abs(g2.getEstimatedModuleSize() - i2) > d2 && (a2.splice(p2, 1), p2--);
      }
    }
    if (a2.length > 3) {
      s2 = 0;
      try {
        for (var w2 = Tn(a2), A2 = w2.next(); !A2.done; A2 = w2.next()) {
          s2 += A2.value.getEstimatedModuleSize();
        }
      } catch (t4) {
        r2 = { error: t4 };
      } finally {
        try {
          A2 && !A2.done && (n2 = w2.return) && n2.call(w2);
        } finally {
          if (r2) throw r2.error;
        }
      }
      i2 = s2 / a2.length, a2.sort(function(t4, e3) {
        if (e3.getCount() === t4.getCount()) {
          var r3 = Math.abs(e3.getEstimatedModuleSize() - i2), n3 = Math.abs(t4.getEstimatedModuleSize() - i2);
          return r3 < n3 ? 1 : r3 > n3 ? -1 : 0;
        }
        return e3.getCount() - t4.getCount();
      }), a2.splice(3);
    }
    return [a2[0], a2[1], a2[2]];
  }, t2.CENTER_QUORUM = 2, t2.MIN_SKIP = 3, t2.MAX_MODULES = 57, t2;
}();
var Bn = function() {
  function t2(t3) {
    this.image = t3;
  }
  return t2.prototype.getImage = function() {
    return this.image;
  }, t2.prototype.getResultPointCallback = function() {
    return this.resultPointCallback;
  }, t2.prototype.detect = function(t3) {
    this.resultPointCallback = null == t3 ? null : t3.get(H.NEED_RESULT_POINT_CALLBACK);
    var e2 = new Sn(this.image, this.resultPointCallback).find(t3);
    return this.processFinderPatternInfo(e2);
  }, t2.prototype.processFinderPatternInfo = function(e2) {
    var r2 = e2.getTopLeft(), n2 = e2.getTopRight(), o2 = e2.getBottomLeft(), i2 = this.calculateModuleSize(r2, n2, o2);
    if (i2 < 1) throw new nt("No pattern found in proccess finder.");
    var a2 = t2.computeDimension(r2, n2, o2, i2), s2 = on.getProvisionalVersionForDimension(a2), u2 = s2.getDimensionForVersion() - 7, c2 = null;
    if (s2.getAlignmentPatternCenters().length > 0) for (var f2 = n2.getX() - r2.getX() + o2.getX(), h2 = n2.getY() - r2.getY() + o2.getY(), l2 = 1 - 3 / u2, d2 = Math.floor(r2.getX() + l2 * (f2 - r2.getX())), p2 = Math.floor(r2.getY() + l2 * (h2 - r2.getY())), g2 = 4; g2 <= 16; g2 <<= 1) try {
      c2 = this.findAlignmentInRegion(i2, d2, p2, g2);
      break;
    } catch (t3) {
      if (!(t3 instanceof nt)) throw t3;
    }
    var w2 = t2.createTransform(r2, n2, o2, c2, a2), A2 = t2.sampleGrid(this.image, w2, a2);
    return new xt(A2, null === c2 ? [o2, r2, n2] : [o2, r2, n2, c2]);
  }, t2.createTransform = function(t3, e2, r2, n2, o2) {
    var i2, a2, s2, u2, c2 = o2 - 3.5;
    return null !== n2 ? (i2 = n2.getX(), a2 = n2.getY(), u2 = s2 = c2 - 3) : (i2 = e2.getX() - t3.getX() + r2.getX(), a2 = e2.getY() - t3.getY() + r2.getY(), s2 = c2, u2 = c2), Ht.quadrilateralToQuadrilateral(3.5, 3.5, c2, 3.5, s2, u2, 3.5, c2, t3.getX(), t3.getY(), e2.getX(), e2.getY(), i2, a2, r2.getX(), r2.getY());
  }, t2.sampleGrid = function(t3, e2, r2) {
    return Kt.getInstance().sampleGridWithTransform(t3, r2, r2, e2);
  }, t2.computeDimension = function(t3, e2, r2, n2) {
    var o2 = Lt.round(Vt.distance(t3, e2) / n2), i2 = Lt.round(Vt.distance(t3, r2) / n2), a2 = Math.floor((o2 + i2) / 2) + 7;
    switch (3 & a2) {
      case 0:
        a2++;
        break;
      case 2:
        a2--;
        break;
      case 3:
        throw new nt("Dimensions could be not found.");
    }
    return a2;
  }, t2.prototype.calculateModuleSize = function(t3, e2, r2) {
    return (this.calculateModuleSizeOneWay(t3, e2) + this.calculateModuleSizeOneWay(t3, r2)) / 2;
  }, t2.prototype.calculateModuleSizeOneWay = function(t3, e2) {
    var r2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t3.getX()), Math.floor(t3.getY()), Math.floor(e2.getX()), Math.floor(e2.getY())), n2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e2.getX()), Math.floor(e2.getY()), Math.floor(t3.getX()), Math.floor(t3.getY()));
    return isNaN(r2) ? n2 / 7 : isNaN(n2) ? r2 / 7 : (r2 + n2) / 14;
  }, t2.prototype.sizeOfBlackWhiteBlackRunBothWays = function(t3, e2, r2, n2) {
    var o2 = this.sizeOfBlackWhiteBlackRun(t3, e2, r2, n2), i2 = 1, a2 = t3 - (r2 - t3);
    a2 < 0 ? (i2 = t3 / (t3 - a2), a2 = 0) : a2 >= this.image.getWidth() && (i2 = (this.image.getWidth() - 1 - t3) / (a2 - t3), a2 = this.image.getWidth() - 1);
    var s2 = Math.floor(e2 - (n2 - e2) * i2);
    return i2 = 1, s2 < 0 ? (i2 = e2 / (e2 - s2), s2 = 0) : s2 >= this.image.getHeight() && (i2 = (this.image.getHeight() - 1 - e2) / (s2 - e2), s2 = this.image.getHeight() - 1), a2 = Math.floor(t3 + (a2 - t3) * i2), (o2 += this.sizeOfBlackWhiteBlackRun(t3, e2, a2, s2)) - 1;
  }, t2.prototype.sizeOfBlackWhiteBlackRun = function(t3, e2, r2, n2) {
    var o2 = Math.abs(n2 - e2) > Math.abs(r2 - t3);
    if (o2) {
      var i2 = t3;
      t3 = e2, e2 = i2, i2 = r2, r2 = n2, n2 = i2;
    }
    for (var a2 = Math.abs(r2 - t3), s2 = Math.abs(n2 - e2), u2 = -a2 / 2, c2 = t3 < r2 ? 1 : -1, f2 = e2 < n2 ? 1 : -1, h2 = 0, l2 = r2 + c2, d2 = t3, p2 = e2; d2 !== l2; d2 += c2) {
      var g2 = o2 ? p2 : d2, w2 = o2 ? d2 : p2;
      if (1 === h2 === this.image.get(g2, w2)) {
        if (2 === h2) return Lt.distance(d2, p2, t3, e2);
        h2++;
      }
      if ((u2 += s2) > 0) {
        if (p2 === n2) break;
        p2 += f2, u2 -= a2;
      }
    }
    return 2 === h2 ? Lt.distance(r2 + c2, n2, t3, e2) : NaN;
  }, t2.prototype.findAlignmentInRegion = function(t3, e2, r2, n2) {
    var o2 = Math.floor(n2 * t3), i2 = Math.max(0, e2 - o2), a2 = Math.min(this.image.getWidth() - 1, e2 + o2);
    if (a2 - i2 < 3 * t3) throw new nt("Alignment top exceeds estimated module size.");
    var s2 = Math.max(0, r2 - o2), u2 = Math.min(this.image.getHeight() - 1, r2 + o2);
    if (u2 - s2 < 3 * t3) throw new nt("Alignment bottom exceeds estimated module size.");
    return new vn(this.image, i2, s2, a2 - i2, u2 - s2, t3, this.resultPointCallback).find();
  }, t2;
}();
var Rn = function() {
  function t2() {
    this.decoder = new An();
  }
  return t2.prototype.getDecoder = function() {
    return this.decoder;
  }, t2.prototype.decode = function(e2, r2) {
    var n2, o2;
    if (null != r2 && void 0 !== r2.get(H.PURE_BARCODE)) {
      var i2 = t2.extractPureBits(e2.getBlackMatrix());
      n2 = this.decoder.decodeBitMatrix(i2, r2), o2 = t2.NO_POINTS;
    } else {
      var a2 = new Bn(e2.getBlackMatrix()).detect(r2);
      n2 = this.decoder.decodeBitMatrix(a2.getBits(), r2), o2 = a2.getPoints();
    }
    n2.getOther() instanceof gn && n2.getOther().applyMirroredCorrection(o2);
    var s2 = new yt(n2.getText(), n2.getRawBytes(), void 0, o2, Et.QR_CODE, void 0), u2 = n2.getByteSegments();
    null !== u2 && s2.putMetadata(mt.BYTE_SEGMENTS, u2);
    var c2 = n2.getECLevel();
    return null !== c2 && s2.putMetadata(mt.ERROR_CORRECTION_LEVEL, c2), n2.hasStructuredAppend() && (s2.putMetadata(mt.STRUCTURED_APPEND_SEQUENCE, n2.getStructuredAppendSequenceNumber()), s2.putMetadata(mt.STRUCTURED_APPEND_PARITY, n2.getStructuredAppendParity())), s2;
  }, t2.prototype.reset = function() {
  }, t2.extractPureBits = function(t3) {
    var e2 = t3.getTopLeftOnBit(), r2 = t3.getBottomRightOnBit();
    if (null === e2 || null === r2) throw new nt();
    var n2 = this.moduleSize(e2, t3), o2 = e2[1], i2 = r2[1], a2 = e2[0], s2 = r2[0];
    if (a2 >= s2 || o2 >= i2) throw new nt();
    if (i2 - o2 != s2 - a2 && (s2 = a2 + (i2 - o2)) >= t3.getWidth()) throw new nt();
    var u2 = Math.round((s2 - a2 + 1) / n2), c2 = Math.round((i2 - o2 + 1) / n2);
    if (u2 <= 0 || c2 <= 0) throw new nt();
    if (c2 !== u2) throw new nt();
    var f2 = Math.floor(n2 / 2);
    o2 += f2;
    var h2 = (a2 += f2) + Math.floor((u2 - 1) * n2) - s2;
    if (h2 > 0) {
      if (h2 > f2) throw new nt();
      a2 -= h2;
    }
    var l2 = o2 + Math.floor((c2 - 1) * n2) - i2;
    if (l2 > 0) {
      if (l2 > f2) throw new nt();
      o2 -= l2;
    }
    for (var d2 = new et(u2, c2), p2 = 0; p2 < c2; p2++) for (var g2 = o2 + Math.floor(p2 * n2), w2 = 0; w2 < u2; w2++) t3.get(a2 + Math.floor(w2 * n2), g2) && d2.set(w2, p2);
    return d2;
  }, t2.moduleSize = function(t3, e2) {
    for (var r2 = e2.getHeight(), n2 = e2.getWidth(), o2 = t3[0], i2 = t3[1], a2 = true, s2 = 0; o2 < n2 && i2 < r2; ) {
      if (a2 !== e2.get(o2, i2)) {
        if (5 == ++s2) break;
        a2 = !a2;
      }
      o2++, i2++;
    }
    if (o2 === n2 || i2 === r2) throw new nt();
    return (o2 - t3[0]) / 7;
  }, t2.NO_POINTS = new Array(), t2;
}();
var Dn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Nn = function() {
  function t2() {
  }
  return t2.prototype.PDF417Common = function() {
  }, t2.getBitCountSum = function(t3) {
    return Lt.sum(t3);
  }, t2.toIntArray = function(e2) {
    var r2, n2;
    if (null == e2 || !e2.length) return t2.EMPTY_INT_ARRAY;
    var o2 = new Int32Array(e2.length), i2 = 0;
    try {
      for (var a2 = Dn(e2), s2 = a2.next(); !s2.done; s2 = a2.next()) {
        var u2 = s2.value;
        o2[i2++] = u2;
      }
    } catch (t3) {
      r2 = { error: t3 };
    } finally {
      try {
        s2 && !s2.done && (n2 = a2.return) && n2.call(a2);
      } finally {
        if (r2) throw r2.error;
      }
    }
    return o2;
  }, t2.getCodeword = function(e2) {
    var r2 = G.binarySearch(t2.SYMBOL_TABLE, 262143 & e2);
    return r2 < 0 ? -1 : (t2.CODEWORD_TABLE[r2] - 1) % t2.NUMBER_OF_CODEWORDS;
  }, t2.NUMBER_OF_CODEWORDS = 929, t2.MAX_CODEWORDS_IN_BARCODE = t2.NUMBER_OF_CODEWORDS - 1, t2.MIN_ROWS_IN_BARCODE = 3, t2.MAX_ROWS_IN_BARCODE = 90, t2.MODULES_IN_CODEWORD = 17, t2.MODULES_IN_STOP_PATTERN = 18, t2.BARS_IN_MODULE = 8, t2.EMPTY_INT_ARRAY = new Int32Array([]), t2.SYMBOL_TABLE = Int32Array.from([66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632, 66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846, 66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164, 67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510, 67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800, 67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068, 68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494, 68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764, 68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022, 69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296, 69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556, 69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874, 69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152, 70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636, 70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452, 71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772, 71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048, 72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318, 72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680, 72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950, 72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226, 73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376, 73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858, 73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174, 74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652, 74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576, 75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256, 76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584, 77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980, 78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278, 78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744, 78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368, 79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816, 79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092, 80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378, 80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800, 80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004, 81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216, 81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506, 81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740, 81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328, 82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750, 82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424, 83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900, 83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488, 85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966, 85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536, 89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254, 90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566, 90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3, 91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388, 91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100, 92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248, 93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110, 94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428, 94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700, 94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134, 95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772, 95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228, 96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416, 96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652, 96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008, 97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330, 97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550, 97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862, 97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676, 98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286, 99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574, 99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834, 99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044, 100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422, 100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620, 100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926, 100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318, 101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506, 101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752, 101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044, 102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292, 102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606, 102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864, 102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312, 103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920, 103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344, 104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578, 104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838, 104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312, 105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656, 105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932, 105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210, 106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414, 106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758, 106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988, 107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422, 107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016, 108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422, 108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536, 109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348, 110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722, 110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908, 110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224, 111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736, 111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718, 112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026, 113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416, 113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778, 113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016, 114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248, 114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484, 114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130, 115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430, 115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810, 115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080, 116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262, 116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450, 116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654, 116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930, 116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180, 117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536, 117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798, 117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040, 118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352, 118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580, 118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876, 118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068, 119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284, 119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686, 119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312, 120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732, 120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948, 120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212, 121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656, 121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958, 121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144, 122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468, 122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712, 122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098, 123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314, 123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522, 123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746, 123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026, 124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176, 124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406, 124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646, 124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854, 124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060, 125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216, 125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448, 125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890, 125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094, 126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344, 126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580, 126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786, 126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178, 127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394, 127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664, 127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824, 127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114, 128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304, 128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530, 128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656, 128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886, 128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332, 129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586, 129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766, 129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956, 129960, 129974, 130010]), t2.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785, 2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971, 1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308, 305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549, 1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504, 1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007, 1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207, 1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954, 1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700]), t2;
}();
var On = function() {
  function t2(t3, e2) {
    this.bits = t3, this.points = e2;
  }
  return t2.prototype.getBits = function() {
    return this.bits;
  }, t2.prototype.getPoints = function() {
    return this.points;
  }, t2;
}();
var Mn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var bn = function() {
  function t2() {
  }
  return t2.detectMultiple = function(e2, r2, n2) {
    var o2 = e2.getBlackMatrix(), i2 = t2.detect(n2, o2);
    return i2.length || ((o2 = o2.clone()).rotate180(), i2 = t2.detect(n2, o2)), new On(o2, i2);
  }, t2.detect = function(e2, r2) {
    for (var n2, o2, i2 = new Array(), a2 = 0, s2 = 0, u2 = false; a2 < r2.getHeight(); ) {
      var c2 = t2.findVertices(r2, a2, s2);
      if (null != c2[0] || null != c2[3]) {
        if (u2 = true, i2.push(c2), !e2) break;
        null != c2[2] ? (s2 = Math.trunc(c2[2].getX()), a2 = Math.trunc(c2[2].getY())) : (s2 = Math.trunc(c2[4].getX()), a2 = Math.trunc(c2[4].getY()));
      } else {
        if (!u2) break;
        u2 = false, s2 = 0;
        try {
          for (var f2 = (n2 = void 0, Mn(i2)), h2 = f2.next(); !h2.done; h2 = f2.next()) {
            var l2 = h2.value;
            null != l2[1] && (a2 = Math.trunc(Math.max(a2, l2[1].getY()))), null != l2[3] && (a2 = Math.max(a2, Math.trunc(l2[3].getY())));
          }
        } catch (t3) {
          n2 = { error: t3 };
        } finally {
          try {
            h2 && !h2.done && (o2 = f2.return) && o2.call(f2);
          } finally {
            if (n2) throw n2.error;
          }
        }
        a2 += t2.ROW_STEP;
      }
    }
    return i2;
  }, t2.findVertices = function(e2, r2, n2) {
    var o2 = e2.getHeight(), i2 = e2.getWidth(), a2 = new Array(8);
    return t2.copyToResult(a2, t2.findRowsWithPattern(e2, o2, i2, r2, n2, t2.START_PATTERN), t2.INDEXES_START_PATTERN), null != a2[4] && (n2 = Math.trunc(a2[4].getX()), r2 = Math.trunc(a2[4].getY())), t2.copyToResult(a2, t2.findRowsWithPattern(e2, o2, i2, r2, n2, t2.STOP_PATTERN), t2.INDEXES_STOP_PATTERN), a2;
  }, t2.copyToResult = function(t3, e2, r2) {
    for (var n2 = 0; n2 < r2.length; n2++) t3[r2[n2]] = e2[n2];
  }, t2.findRowsWithPattern = function(e2, r2, n2, o2, i2, a2) {
    for (var s2 = new Array(4), u2 = false, c2 = new Int32Array(a2.length); o2 < r2; o2 += t2.ROW_STEP) {
      if (null != (d2 = t2.findGuardPattern(e2, i2, o2, n2, false, a2, c2))) {
        for (; o2 > 0; ) {
          if (null == (l2 = t2.findGuardPattern(e2, i2, --o2, n2, false, a2, c2))) {
            o2++;
            break;
          }
          d2 = l2;
        }
        s2[0] = new Vt(d2[0], o2), s2[1] = new Vt(d2[1], o2), u2 = true;
        break;
      }
    }
    var f2 = o2 + 1;
    if (u2) {
      for (var h2 = 0, l2 = Int32Array.from([Math.trunc(s2[0].getX()), Math.trunc(s2[1].getX())]); f2 < r2; f2++) {
        var d2;
        if (null != (d2 = t2.findGuardPattern(e2, l2[0], f2, n2, false, a2, c2)) && Math.abs(l2[0] - d2[0]) < t2.MAX_PATTERN_DRIFT && Math.abs(l2[1] - d2[1]) < t2.MAX_PATTERN_DRIFT) l2 = d2, h2 = 0;
        else {
          if (h2 > t2.SKIPPED_ROW_COUNT_MAX) break;
          h2++;
        }
      }
      f2 -= h2 + 1, s2[2] = new Vt(l2[0], f2), s2[3] = new Vt(l2[1], f2);
    }
    return f2 - o2 < t2.BARCODE_MIN_HEIGHT && G.fill(s2, null), s2;
  }, t2.findGuardPattern = function(e2, r2, n2, o2, i2, a2, s2) {
    G.fillWithin(s2, 0, s2.length, 0);
    for (var u2 = r2, c2 = 0; e2.get(u2, n2) && u2 > 0 && c2++ < t2.MAX_PIXEL_DRIFT; ) u2--;
    for (var f2 = u2, h2 = 0, l2 = a2.length, d2 = i2; f2 < o2; f2++) {
      if (e2.get(f2, n2) !== d2) s2[h2]++;
      else {
        if (h2 === l2 - 1) {
          if (t2.patternMatchVariance(s2, a2, t2.MAX_INDIVIDUAL_VARIANCE) < t2.MAX_AVG_VARIANCE) return new Int32Array([u2, f2]);
          u2 += s2[0] + s2[1], P.arraycopy(s2, 2, s2, 0, h2 - 1), s2[h2 - 1] = 0, s2[h2] = 0, h2--;
        } else h2++;
        s2[h2] = 1, d2 = !d2;
      }
    }
    return h2 === l2 - 1 && t2.patternMatchVariance(s2, a2, t2.MAX_INDIVIDUAL_VARIANCE) < t2.MAX_AVG_VARIANCE ? new Int32Array([u2, f2 - 1]) : null;
  }, t2.patternMatchVariance = function(t3, e2, r2) {
    for (var n2 = t3.length, o2 = 0, i2 = 0, a2 = 0; a2 < n2; a2++) o2 += t3[a2], i2 += e2[a2];
    if (o2 < i2) return 1 / 0;
    var s2 = o2 / i2;
    r2 *= s2;
    for (var u2 = 0, c2 = 0; c2 < n2; c2++) {
      var f2 = t3[c2], h2 = e2[c2] * s2, l2 = f2 > h2 ? f2 - h2 : h2 - f2;
      if (l2 > r2) return 1 / 0;
      u2 += l2;
    }
    return u2 / o2;
  }, t2.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), t2.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), t2.MAX_AVG_VARIANCE = 0.42, t2.MAX_INDIVIDUAL_VARIANCE = 0.8, t2.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), t2.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), t2.MAX_PIXEL_DRIFT = 3, t2.MAX_PATTERN_DRIFT = 5, t2.SKIPPED_ROW_COUNT_MAX = 25, t2.ROW_STEP = 5, t2.BARCODE_MIN_HEIGHT = 10, t2;
}();
var Pn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Fn = function() {
  function t2(t3, e2) {
    if (0 === e2.length) throw new D();
    this.field = t3;
    var r2 = e2.length;
    if (r2 > 1 && 0 === e2[0]) {
      for (var n2 = 1; n2 < r2 && 0 === e2[n2]; ) n2++;
      n2 === r2 ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r2 - n2), P.arraycopy(e2, n2, this.coefficients, 0, this.coefficients.length));
    } else this.coefficients = e2;
  }
  return t2.prototype.getCoefficients = function() {
    return this.coefficients;
  }, t2.prototype.getDegree = function() {
    return this.coefficients.length - 1;
  }, t2.prototype.isZero = function() {
    return 0 === this.coefficients[0];
  }, t2.prototype.getCoefficient = function(t3) {
    return this.coefficients[this.coefficients.length - 1 - t3];
  }, t2.prototype.evaluateAt = function(t3) {
    var e2, r2;
    if (0 === t3) return this.getCoefficient(0);
    if (1 === t3) {
      var n2 = 0;
      try {
        for (var o2 = Pn(this.coefficients), i2 = o2.next(); !i2.done; i2 = o2.next()) {
          var a2 = i2.value;
          n2 = this.field.add(n2, a2);
        }
      } catch (t4) {
        e2 = { error: t4 };
      } finally {
        try {
          i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
        } finally {
          if (e2) throw e2.error;
        }
      }
      return n2;
    }
    for (var s2 = this.coefficients[0], u2 = this.coefficients.length, c2 = 1; c2 < u2; c2++) s2 = this.field.add(this.field.multiply(t3, s2), this.coefficients[c2]);
    return s2;
  }, t2.prototype.add = function(e2) {
    if (!this.field.equals(e2.field)) throw new D("ModulusPolys do not have same ModulusGF field");
    if (this.isZero()) return e2;
    if (e2.isZero()) return this;
    var r2 = this.coefficients, n2 = e2.coefficients;
    if (r2.length > n2.length) {
      var o2 = r2;
      r2 = n2, n2 = o2;
    }
    var i2 = new Int32Array(n2.length), a2 = n2.length - r2.length;
    P.arraycopy(n2, 0, i2, 0, a2);
    for (var s2 = a2; s2 < n2.length; s2++) i2[s2] = this.field.add(r2[s2 - a2], n2[s2]);
    return new t2(this.field, i2);
  }, t2.prototype.subtract = function(t3) {
    if (!this.field.equals(t3.field)) throw new D("ModulusPolys do not have same ModulusGF field");
    return t3.isZero() ? this : this.add(t3.negative());
  }, t2.prototype.multiply = function(e2) {
    return e2 instanceof t2 ? this.multiplyOther(e2) : this.multiplyScalar(e2);
  }, t2.prototype.multiplyOther = function(e2) {
    if (!this.field.equals(e2.field)) throw new D("ModulusPolys do not have same ModulusGF field");
    if (this.isZero() || e2.isZero()) return new t2(this.field, new Int32Array([0]));
    for (var r2 = this.coefficients, n2 = r2.length, o2 = e2.coefficients, i2 = o2.length, a2 = new Int32Array(n2 + i2 - 1), s2 = 0; s2 < n2; s2++) for (var u2 = r2[s2], c2 = 0; c2 < i2; c2++) a2[s2 + c2] = this.field.add(a2[s2 + c2], this.field.multiply(u2, o2[c2]));
    return new t2(this.field, a2);
  }, t2.prototype.negative = function() {
    for (var e2 = this.coefficients.length, r2 = new Int32Array(e2), n2 = 0; n2 < e2; n2++) r2[n2] = this.field.subtract(0, this.coefficients[n2]);
    return new t2(this.field, r2);
  }, t2.prototype.multiplyScalar = function(e2) {
    if (0 === e2) return new t2(this.field, new Int32Array([0]));
    if (1 === e2) return this;
    for (var r2 = this.coefficients.length, n2 = new Int32Array(r2), o2 = 0; o2 < r2; o2++) n2[o2] = this.field.multiply(this.coefficients[o2], e2);
    return new t2(this.field, n2);
  }, t2.prototype.multiplyByMonomial = function(e2, r2) {
    if (e2 < 0) throw new D();
    if (0 === r2) return new t2(this.field, new Int32Array([0]));
    for (var n2 = this.coefficients.length, o2 = new Int32Array(n2 + e2), i2 = 0; i2 < n2; i2++) o2[i2] = this.field.multiply(this.coefficients[i2], r2);
    return new t2(this.field, o2);
  }, t2.prototype.toString = function() {
    for (var t3 = new tt(), e2 = this.getDegree(); e2 >= 0; e2--) {
      var r2 = this.getCoefficient(e2);
      0 !== r2 && (r2 < 0 ? (t3.append(" - "), r2 = -r2) : t3.length() > 0 && t3.append(" + "), 0 !== e2 && 1 === r2 || t3.append(r2), 0 !== e2 && (1 === e2 ? t3.append("x") : (t3.append("x^"), t3.append(e2))));
    }
    return t3.toString();
  }, t2;
}();
var Ln = function() {
  function t2() {
  }
  return t2.prototype.add = function(t3, e2) {
    return (t3 + e2) % this.modulus;
  }, t2.prototype.subtract = function(t3, e2) {
    return (this.modulus + t3 - e2) % this.modulus;
  }, t2.prototype.exp = function(t3) {
    return this.expTable[t3];
  }, t2.prototype.log = function(t3) {
    if (0 === t3) throw new D();
    return this.logTable[t3];
  }, t2.prototype.inverse = function(t3) {
    if (0 === t3) throw new Bt();
    return this.expTable[this.modulus - this.logTable[t3] - 1];
  }, t2.prototype.multiply = function(t3, e2) {
    return 0 === t3 || 0 === e2 ? 0 : this.expTable[(this.logTable[t3] + this.logTable[e2]) % (this.modulus - 1)];
  }, t2.prototype.getSize = function() {
    return this.modulus;
  }, t2.prototype.equals = function(t3) {
    return t3 === this;
  }, t2;
}();
var kn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Vn = function(t2) {
  function e2(e3, r2) {
    var n2 = t2.call(this) || this;
    n2.modulus = e3, n2.expTable = new Int32Array(e3), n2.logTable = new Int32Array(e3);
    for (var o2 = 1, i2 = 0; i2 < e3; i2++) n2.expTable[i2] = o2, o2 = o2 * r2 % e3;
    for (i2 = 0; i2 < e3 - 1; i2++) n2.logTable[n2.expTable[i2]] = i2;
    return n2.zero = new Fn(n2, new Int32Array([0])), n2.one = new Fn(n2, new Int32Array([1])), n2;
  }
  return kn(e2, t2), e2.prototype.getZero = function() {
    return this.zero;
  }, e2.prototype.getOne = function() {
    return this.one;
  }, e2.prototype.buildMonomial = function(t3, e3) {
    if (t3 < 0) throw new D();
    if (0 === e3) return this.zero;
    var r2 = new Int32Array(t3 + 1);
    return r2[0] = e3, new Fn(this, r2);
  }, e2.PDF417_GF = new e2(Nn.NUMBER_OF_CODEWORDS, 3), e2;
}(Ln);
var xn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Gn = function() {
  function t2() {
    this.field = Vn.PDF417_GF;
  }
  return t2.prototype.decode = function(t3, e2, r2) {
    for (var n2, o2, i2 = new Fn(this.field, t3), a2 = new Int32Array(e2), s2 = false, u2 = e2; u2 > 0; u2--) {
      var c2 = i2.evaluateAt(this.field.exp(u2));
      a2[e2 - u2] = c2, 0 !== c2 && (s2 = true);
    }
    if (!s2) return 0;
    var f2 = this.field.getOne();
    if (null != r2) try {
      for (var h2 = xn(r2), l2 = h2.next(); !l2.done; l2 = h2.next()) {
        var d2 = l2.value, p2 = this.field.exp(t3.length - 1 - d2), g2 = new Fn(this.field, new Int32Array([this.field.subtract(0, p2), 1]));
        f2 = f2.multiply(g2);
      }
    } catch (t4) {
      n2 = { error: t4 };
    } finally {
      try {
        l2 && !l2.done && (o2 = h2.return) && o2.call(h2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    var w2 = new Fn(this.field, a2), A2 = this.runEuclideanAlgorithm(this.field.buildMonomial(e2, 1), w2, e2), y2 = A2[0], C2 = A2[1], E2 = this.findErrorLocations(y2), v2 = this.findErrorMagnitudes(C2, y2, E2);
    for (u2 = 0; u2 < E2.length; u2++) {
      var m2 = t3.length - 1 - this.field.log(E2[u2]);
      if (m2 < 0) throw M.getChecksumInstance();
      t3[m2] = this.field.subtract(t3[m2], v2[u2]);
    }
    return E2.length;
  }, t2.prototype.runEuclideanAlgorithm = function(t3, e2, r2) {
    if (t3.getDegree() < e2.getDegree()) {
      var n2 = t3;
      t3 = e2, e2 = n2;
    }
    for (var o2 = t3, i2 = e2, a2 = this.field.getZero(), s2 = this.field.getOne(); i2.getDegree() >= Math.round(r2 / 2); ) {
      var u2 = o2, c2 = a2;
      if (a2 = s2, (o2 = i2).isZero()) throw M.getChecksumInstance();
      i2 = u2;
      for (var f2 = this.field.getZero(), h2 = o2.getCoefficient(o2.getDegree()), l2 = this.field.inverse(h2); i2.getDegree() >= o2.getDegree() && !i2.isZero(); ) {
        var d2 = i2.getDegree() - o2.getDegree(), p2 = this.field.multiply(i2.getCoefficient(i2.getDegree()), l2);
        f2 = f2.add(this.field.buildMonomial(d2, p2)), i2 = i2.subtract(o2.multiplyByMonomial(d2, p2));
      }
      s2 = f2.multiply(a2).subtract(c2).negative();
    }
    var g2 = s2.getCoefficient(0);
    if (0 === g2) throw M.getChecksumInstance();
    var w2 = this.field.inverse(g2);
    return [s2.multiply(w2), i2.multiply(w2)];
  }, t2.prototype.findErrorLocations = function(t3) {
    for (var e2 = t3.getDegree(), r2 = new Int32Array(e2), n2 = 0, o2 = 1; o2 < this.field.getSize() && n2 < e2; o2++) 0 === t3.evaluateAt(o2) && (r2[n2] = this.field.inverse(o2), n2++);
    if (n2 !== e2) throw M.getChecksumInstance();
    return r2;
  }, t2.prototype.findErrorMagnitudes = function(t3, e2, r2) {
    for (var n2 = e2.getDegree(), o2 = new Int32Array(n2), i2 = 1; i2 <= n2; i2++) o2[n2 - i2] = this.field.multiply(i2, e2.getCoefficient(i2));
    var a2 = new Fn(this.field, o2), s2 = r2.length, u2 = new Int32Array(s2);
    for (i2 = 0; i2 < s2; i2++) {
      var c2 = this.field.inverse(r2[i2]), f2 = this.field.subtract(0, t3.evaluateAt(c2)), h2 = this.field.inverse(a2.evaluateAt(c2));
      u2[i2] = this.field.multiply(f2, h2);
    }
    return u2;
  }, t2;
}();
var Yn = function() {
  function t2(e2, r2, n2, o2, i2) {
    e2 instanceof t2 ? this.constructor_2(e2) : this.constructor_1(e2, r2, n2, o2, i2);
  }
  return t2.prototype.constructor_1 = function(t3, e2, r2, n2, o2) {
    var i2 = null == e2 || null == r2, a2 = null == n2 || null == o2;
    if (i2 && a2) throw new nt();
    i2 ? (e2 = new Vt(0, n2.getY()), r2 = new Vt(0, o2.getY())) : a2 && (n2 = new Vt(t3.getWidth() - 1, e2.getY()), o2 = new Vt(t3.getWidth() - 1, r2.getY())), this.image = t3, this.topLeft = e2, this.bottomLeft = r2, this.topRight = n2, this.bottomRight = o2, this.minX = Math.trunc(Math.min(e2.getX(), r2.getX())), this.maxX = Math.trunc(Math.max(n2.getX(), o2.getX())), this.minY = Math.trunc(Math.min(e2.getY(), n2.getY())), this.maxY = Math.trunc(Math.max(r2.getY(), o2.getY()));
  }, t2.prototype.constructor_2 = function(t3) {
    this.image = t3.image, this.topLeft = t3.getTopLeft(), this.bottomLeft = t3.getBottomLeft(), this.topRight = t3.getTopRight(), this.bottomRight = t3.getBottomRight(), this.minX = t3.getMinX(), this.maxX = t3.getMaxX(), this.minY = t3.getMinY(), this.maxY = t3.getMaxY();
  }, t2.merge = function(e2, r2) {
    return null == e2 ? r2 : null == r2 ? e2 : new t2(e2.image, e2.topLeft, e2.bottomLeft, r2.topRight, r2.bottomRight);
  }, t2.prototype.addMissingRows = function(e2, r2, n2) {
    var o2 = this.topLeft, i2 = this.bottomLeft, a2 = this.topRight, s2 = this.bottomRight;
    if (e2 > 0) {
      var u2 = n2 ? this.topLeft : this.topRight, c2 = Math.trunc(u2.getY() - e2);
      c2 < 0 && (c2 = 0);
      var f2 = new Vt(u2.getX(), c2);
      n2 ? o2 = f2 : a2 = f2;
    }
    if (r2 > 0) {
      var h2 = n2 ? this.bottomLeft : this.bottomRight, l2 = Math.trunc(h2.getY() + r2);
      l2 >= this.image.getHeight() && (l2 = this.image.getHeight() - 1);
      var d2 = new Vt(h2.getX(), l2);
      n2 ? i2 = d2 : s2 = d2;
    }
    return new t2(this.image, o2, i2, a2, s2);
  }, t2.prototype.getMinX = function() {
    return this.minX;
  }, t2.prototype.getMaxX = function() {
    return this.maxX;
  }, t2.prototype.getMinY = function() {
    return this.minY;
  }, t2.prototype.getMaxY = function() {
    return this.maxY;
  }, t2.prototype.getTopLeft = function() {
    return this.topLeft;
  }, t2.prototype.getTopRight = function() {
    return this.topRight;
  }, t2.prototype.getBottomLeft = function() {
    return this.bottomLeft;
  }, t2.prototype.getBottomRight = function() {
    return this.bottomRight;
  }, t2;
}();
var qn = function() {
  function t2(t3, e2, r2, n2) {
    this.columnCount = t3, this.errorCorrectionLevel = n2, this.rowCountUpperPart = e2, this.rowCountLowerPart = r2, this.rowCount = e2 + r2;
  }
  return t2.prototype.getColumnCount = function() {
    return this.columnCount;
  }, t2.prototype.getErrorCorrectionLevel = function() {
    return this.errorCorrectionLevel;
  }, t2.prototype.getRowCount = function() {
    return this.rowCount;
  }, t2.prototype.getRowCountUpperPart = function() {
    return this.rowCountUpperPart;
  }, t2.prototype.getRowCountLowerPart = function() {
    return this.rowCountLowerPart;
  }, t2;
}();
var Un = function() {
  function t2() {
    this.buffer = "";
  }
  return t2.form = function(t3, e2) {
    var r2 = -1;
    return t3.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function(t4, n2, o2, i2, a2, s2) {
      if ("%%" === t4) return "%";
      if (void 0 !== e2[++r2]) {
        t4 = i2 ? parseInt(i2.substr(1)) : void 0;
        var u2, c2 = a2 ? parseInt(a2.substr(1)) : void 0;
        switch (s2) {
          case "s":
            u2 = e2[r2];
            break;
          case "c":
            u2 = e2[r2][0];
            break;
          case "f":
            u2 = parseFloat(e2[r2]).toFixed(t4);
            break;
          case "p":
            u2 = parseFloat(e2[r2]).toPrecision(t4);
            break;
          case "e":
            u2 = parseFloat(e2[r2]).toExponential(t4);
            break;
          case "x":
            u2 = parseInt(e2[r2]).toString(c2 || 16);
            break;
          case "d":
            u2 = parseFloat(parseInt(e2[r2], c2 || 10).toPrecision(t4)).toFixed(0);
        }
        u2 = "object" == typeof u2 ? JSON.stringify(u2) : (+u2).toString(c2);
        for (var f2 = parseInt(o2), h2 = o2 && o2[0] + "" == "0" ? "0" : " "; u2.length < f2; ) u2 = void 0 !== n2 ? u2 + h2 : h2 + u2;
        return u2;
      }
    });
  }, t2.prototype.format = function(e2) {
    for (var r2 = [], n2 = 1; n2 < arguments.length; n2++) r2[n2 - 1] = arguments[n2];
    this.buffer += t2.form(e2, r2);
  }, t2.prototype.toString = function() {
    return this.buffer;
  }, t2;
}();
var Hn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Wn = function() {
  function t2(t3) {
    this.boundingBox = new Yn(t3), this.codewords = new Array(t3.getMaxY() - t3.getMinY() + 1);
  }
  return t2.prototype.getCodewordNearby = function(e2) {
    var r2 = this.getCodeword(e2);
    if (null != r2) return r2;
    for (var n2 = 1; n2 < t2.MAX_NEARBY_DISTANCE; n2++) {
      var o2 = this.imageRowToCodewordIndex(e2) - n2;
      if (o2 >= 0 && null != (r2 = this.codewords[o2])) return r2;
      if ((o2 = this.imageRowToCodewordIndex(e2) + n2) < this.codewords.length && null != (r2 = this.codewords[o2])) return r2;
    }
    return null;
  }, t2.prototype.imageRowToCodewordIndex = function(t3) {
    return t3 - this.boundingBox.getMinY();
  }, t2.prototype.setCodeword = function(t3, e2) {
    this.codewords[this.imageRowToCodewordIndex(t3)] = e2;
  }, t2.prototype.getCodeword = function(t3) {
    return this.codewords[this.imageRowToCodewordIndex(t3)];
  }, t2.prototype.getBoundingBox = function() {
    return this.boundingBox;
  }, t2.prototype.getCodewords = function() {
    return this.codewords;
  }, t2.prototype.toString = function() {
    var t3, e2, r2 = new Un(), n2 = 0;
    try {
      for (var o2 = Hn(this.codewords), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        null != a2 ? r2.format("%3d: %3d|%3d%n", n2++, a2.getRowNumber(), a2.getValue()) : r2.format("%3d:    |   %n", n2++);
      }
    } catch (e3) {
      t3 = { error: e3 };
    } finally {
      try {
        i2 && !i2.done && (e2 = o2.return) && e2.call(o2);
      } finally {
        if (t3) throw t3.error;
      }
    }
    return r2.toString();
  }, t2.MAX_NEARBY_DISTANCE = 5, t2;
}();
var Qn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Kn = function(t2, e2) {
  var r2 = "function" == typeof Symbol && t2[Symbol.iterator];
  if (!r2) return t2;
  var n2, o2, i2 = r2.call(t2), a2 = [];
  try {
    for (; (void 0 === e2 || e2-- > 0) && !(n2 = i2.next()).done; ) a2.push(n2.value);
  } catch (t3) {
    o2 = { error: t3 };
  } finally {
    try {
      n2 && !n2.done && (r2 = i2.return) && r2.call(i2);
    } finally {
      if (o2) throw o2.error;
    }
  }
  return a2;
};
var Xn = function() {
  function t2() {
    this.values = /* @__PURE__ */ new Map();
  }
  return t2.prototype.setValue = function(t3) {
    t3 = Math.trunc(t3);
    var e2 = this.values.get(t3);
    null == e2 && (e2 = 0), e2++, this.values.set(t3, e2);
  }, t2.prototype.getValue = function() {
    var t3, e2, r2 = -1, n2 = new Array(), o2 = function(t4, e3) {
      var o3 = function() {
        return t4;
      }, i3 = function() {
        return e3;
      };
      i3() > r2 ? (r2 = i3(), (n2 = []).push(o3())) : i3() === r2 && n2.push(o3());
    };
    try {
      for (var i2 = Qn(this.values.entries()), a2 = i2.next(); !a2.done; a2 = i2.next()) {
        var s2 = Kn(a2.value, 2);
        o2(s2[0], s2[1]);
      }
    } catch (e3) {
      t3 = { error: e3 };
    } finally {
      try {
        a2 && !a2.done && (e2 = i2.return) && e2.call(i2);
      } finally {
        if (t3) throw t3.error;
      }
    }
    return Nn.toIntArray(n2);
  }, t2.prototype.getConfidence = function(t3) {
    return this.values.get(t3);
  }, t2;
}();
var Zn = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var jn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var zn = function(t2) {
  function e2(e3, r2) {
    var n2 = t2.call(this, e3) || this;
    return n2._isLeft = r2, n2;
  }
  return Zn(e2, t2), e2.prototype.setRowNumbers = function() {
    var t3, e3;
    try {
      for (var r2 = jn(this.getCodewords()), n2 = r2.next(); !n2.done; n2 = r2.next()) {
        var o2 = n2.value;
        null != o2 && o2.setRowNumberAsRowIndicatorColumn();
      }
    } catch (e4) {
      t3 = { error: e4 };
    } finally {
      try {
        n2 && !n2.done && (e3 = r2.return) && e3.call(r2);
      } finally {
        if (t3) throw t3.error;
      }
    }
  }, e2.prototype.adjustCompleteIndicatorColumnRowNumbers = function(t3) {
    var e3 = this.getCodewords();
    this.setRowNumbers(), this.removeIncorrectCodewords(e3, t3);
    for (var r2 = this.getBoundingBox(), n2 = this._isLeft ? r2.getTopLeft() : r2.getTopRight(), o2 = this._isLeft ? r2.getBottomLeft() : r2.getBottomRight(), i2 = this.imageRowToCodewordIndex(Math.trunc(n2.getY())), a2 = this.imageRowToCodewordIndex(Math.trunc(o2.getY())), s2 = -1, u2 = 1, c2 = 0, f2 = i2; f2 < a2; f2++) if (null != e3[f2]) {
      var h2 = e3[f2], l2 = h2.getRowNumber() - s2;
      if (0 === l2) c2++;
      else if (1 === l2) u2 = Math.max(u2, c2), c2 = 1, s2 = h2.getRowNumber();
      else if (l2 < 0 || h2.getRowNumber() >= t3.getRowCount() || l2 > f2) e3[f2] = null;
      else {
        for (var d2 = void 0, p2 = (d2 = u2 > 2 ? (u2 - 2) * l2 : l2) >= f2, g2 = 1; g2 <= d2 && !p2; g2++) p2 = null != e3[f2 - g2];
        p2 ? e3[f2] = null : (s2 = h2.getRowNumber(), c2 = 1);
      }
    }
  }, e2.prototype.getRowHeights = function() {
    var t3, e3, r2 = this.getBarcodeMetadata();
    if (null == r2) return null;
    this.adjustIncompleteIndicatorColumnRowNumbers(r2);
    var n2 = new Int32Array(r2.getRowCount());
    try {
      for (var o2 = jn(this.getCodewords()), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        if (null != a2) {
          var s2 = a2.getRowNumber();
          if (s2 >= n2.length) continue;
          n2[s2]++;
        }
      }
    } catch (e4) {
      t3 = { error: e4 };
    } finally {
      try {
        i2 && !i2.done && (e3 = o2.return) && e3.call(o2);
      } finally {
        if (t3) throw t3.error;
      }
    }
    return n2;
  }, e2.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(t3) {
    for (var e3 = this.getBoundingBox(), r2 = this._isLeft ? e3.getTopLeft() : e3.getTopRight(), n2 = this._isLeft ? e3.getBottomLeft() : e3.getBottomRight(), o2 = this.imageRowToCodewordIndex(Math.trunc(r2.getY())), i2 = this.imageRowToCodewordIndex(Math.trunc(n2.getY())), a2 = this.getCodewords(), s2 = -1, u2 = o2; u2 < i2; u2++) if (null != a2[u2]) {
      var c2 = a2[u2];
      c2.setRowNumberAsRowIndicatorColumn();
      var f2 = c2.getRowNumber() - s2;
      0 === f2 || (1 === f2 ? s2 = c2.getRowNumber() : c2.getRowNumber() >= t3.getRowCount() ? a2[u2] = null : s2 = c2.getRowNumber());
    }
  }, e2.prototype.getBarcodeMetadata = function() {
    var t3, e3, r2 = this.getCodewords(), n2 = new Xn(), o2 = new Xn(), i2 = new Xn(), a2 = new Xn();
    try {
      for (var s2 = jn(r2), u2 = s2.next(); !u2.done; u2 = s2.next()) {
        var c2 = u2.value;
        if (null != c2) {
          c2.setRowNumberAsRowIndicatorColumn();
          var f2 = c2.getValue() % 30, h2 = c2.getRowNumber();
          switch (this._isLeft || (h2 += 2), h2 % 3) {
            case 0:
              o2.setValue(3 * f2 + 1);
              break;
            case 1:
              a2.setValue(f2 / 3), i2.setValue(f2 % 3);
              break;
            case 2:
              n2.setValue(f2 + 1);
          }
        }
      }
    } catch (e4) {
      t3 = { error: e4 };
    } finally {
      try {
        u2 && !u2.done && (e3 = s2.return) && e3.call(s2);
      } finally {
        if (t3) throw t3.error;
      }
    }
    if (0 === n2.getValue().length || 0 === o2.getValue().length || 0 === i2.getValue().length || 0 === a2.getValue().length || n2.getValue()[0] < 1 || o2.getValue()[0] + i2.getValue()[0] < Nn.MIN_ROWS_IN_BARCODE || o2.getValue()[0] + i2.getValue()[0] > Nn.MAX_ROWS_IN_BARCODE) return null;
    var l2 = new qn(n2.getValue()[0], o2.getValue()[0], i2.getValue()[0], a2.getValue()[0]);
    return this.removeIncorrectCodewords(r2, l2), l2;
  }, e2.prototype.removeIncorrectCodewords = function(t3, e3) {
    for (var r2 = 0; r2 < t3.length; r2++) {
      var n2 = t3[r2];
      if (null != t3[r2]) {
        var o2 = n2.getValue() % 30, i2 = n2.getRowNumber();
        if (i2 > e3.getRowCount()) t3[r2] = null;
        else switch (this._isLeft || (i2 += 2), i2 % 3) {
          case 0:
            3 * o2 + 1 !== e3.getRowCountUpperPart() && (t3[r2] = null);
            break;
          case 1:
            Math.trunc(o2 / 3) === e3.getErrorCorrectionLevel() && o2 % 3 === e3.getRowCountLowerPart() || (t3[r2] = null);
            break;
          case 2:
            o2 + 1 !== e3.getColumnCount() && (t3[r2] = null);
        }
      }
    }
  }, e2.prototype.isLeft = function() {
    return this._isLeft;
  }, e2.prototype.toString = function() {
    return "IsLeft: " + this._isLeft + "\n" + t2.prototype.toString.call(this);
  }, e2;
}(Wn);
var Jn = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $n = function() {
  function t2(t3, e2) {
    this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = t3, this.barcodeColumnCount = t3.getColumnCount(), this.boundingBox = e2, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
  }
  return t2.prototype.getDetectionResultColumns = function() {
    this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
    var t3, e2 = Nn.MAX_CODEWORDS_IN_BARCODE;
    do {
      t3 = e2, e2 = this.adjustRowNumbersAndGetCount();
    } while (e2 > 0 && e2 < t3);
    return this.detectionResultColumns;
  }, t2.prototype.adjustIndicatorColumnRowNumbers = function(t3) {
    null != t3 && t3.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
  }, t2.prototype.adjustRowNumbersAndGetCount = function() {
    var t3 = this.adjustRowNumbersByRow();
    if (0 === t3) return 0;
    for (var e2 = 1; e2 < this.barcodeColumnCount + 1; e2++) for (var r2 = this.detectionResultColumns[e2].getCodewords(), n2 = 0; n2 < r2.length; n2++) null != r2[n2] && (r2[n2].hasValidRowNumber() || this.adjustRowNumbers(e2, n2, r2));
    return t3;
  }, t2.prototype.adjustRowNumbersByRow = function() {
    return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI();
  }, t2.prototype.adjustRowNumbersFromBothRI = function() {
    if (null != this.detectionResultColumns[0] && null != this.detectionResultColumns[this.barcodeColumnCount + 1]) {
      for (var t3 = this.detectionResultColumns[0].getCodewords(), e2 = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), r2 = 0; r2 < t3.length; r2++) if (null != t3[r2] && null != e2[r2] && t3[r2].getRowNumber() === e2[r2].getRowNumber()) for (var n2 = 1; n2 <= this.barcodeColumnCount; n2++) {
        var o2 = this.detectionResultColumns[n2].getCodewords()[r2];
        null != o2 && (o2.setRowNumber(t3[r2].getRowNumber()), o2.hasValidRowNumber() || (this.detectionResultColumns[n2].getCodewords()[r2] = null));
      }
    }
  }, t2.prototype.adjustRowNumbersFromRRI = function() {
    if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
    for (var e2 = 0, r2 = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n2 = 0; n2 < r2.length; n2++) if (null != r2[n2]) for (var o2 = r2[n2].getRowNumber(), i2 = 0, a2 = this.barcodeColumnCount + 1; a2 > 0 && i2 < this.ADJUST_ROW_NUMBER_SKIP; a2--) {
      var s2 = this.detectionResultColumns[a2].getCodewords()[n2];
      null != s2 && (i2 = t2.adjustRowNumberIfValid(o2, i2, s2), s2.hasValidRowNumber() || e2++);
    }
    return e2;
  }, t2.prototype.adjustRowNumbersFromLRI = function() {
    if (null == this.detectionResultColumns[0]) return 0;
    for (var e2 = 0, r2 = this.detectionResultColumns[0].getCodewords(), n2 = 0; n2 < r2.length; n2++) if (null != r2[n2]) for (var o2 = r2[n2].getRowNumber(), i2 = 0, a2 = 1; a2 < this.barcodeColumnCount + 1 && i2 < this.ADJUST_ROW_NUMBER_SKIP; a2++) {
      var s2 = this.detectionResultColumns[a2].getCodewords()[n2];
      null != s2 && (i2 = t2.adjustRowNumberIfValid(o2, i2, s2), s2.hasValidRowNumber() || e2++);
    }
    return e2;
  }, t2.adjustRowNumberIfValid = function(t3, e2, r2) {
    return null == r2 || r2.hasValidRowNumber() || (r2.isValidRowNumber(t3) ? (r2.setRowNumber(t3), e2 = 0) : ++e2), e2;
  }, t2.prototype.adjustRowNumbers = function(e2, r2, n2) {
    var o2, i2;
    if (null != this.detectionResultColumns[e2 - 1]) {
      var a2 = n2[r2], s2 = this.detectionResultColumns[e2 - 1].getCodewords(), u2 = s2;
      null != this.detectionResultColumns[e2 + 1] && (u2 = this.detectionResultColumns[e2 + 1].getCodewords());
      var c2 = new Array(14);
      c2[2] = s2[r2], c2[3] = u2[r2], r2 > 0 && (c2[0] = n2[r2 - 1], c2[4] = s2[r2 - 1], c2[5] = u2[r2 - 1]), r2 > 1 && (c2[8] = n2[r2 - 2], c2[10] = s2[r2 - 2], c2[11] = u2[r2 - 2]), r2 < n2.length - 1 && (c2[1] = n2[r2 + 1], c2[6] = s2[r2 + 1], c2[7] = u2[r2 + 1]), r2 < n2.length - 2 && (c2[9] = n2[r2 + 2], c2[12] = s2[r2 + 2], c2[13] = u2[r2 + 2]);
      try {
        for (var f2 = Jn(c2), h2 = f2.next(); !h2.done; h2 = f2.next()) {
          var l2 = h2.value;
          if (t2.adjustRowNumber(a2, l2)) return;
        }
      } catch (t3) {
        o2 = { error: t3 };
      } finally {
        try {
          h2 && !h2.done && (i2 = f2.return) && i2.call(f2);
        } finally {
          if (o2) throw o2.error;
        }
      }
    }
  }, t2.adjustRowNumber = function(t3, e2) {
    return null != e2 && (!(!e2.hasValidRowNumber() || e2.getBucket() !== t3.getBucket()) && (t3.setRowNumber(e2.getRowNumber()), true));
  }, t2.prototype.getBarcodeColumnCount = function() {
    return this.barcodeColumnCount;
  }, t2.prototype.getBarcodeRowCount = function() {
    return this.barcodeMetadata.getRowCount();
  }, t2.prototype.getBarcodeECLevel = function() {
    return this.barcodeMetadata.getErrorCorrectionLevel();
  }, t2.prototype.setBoundingBox = function(t3) {
    this.boundingBox = t3;
  }, t2.prototype.getBoundingBox = function() {
    return this.boundingBox;
  }, t2.prototype.setDetectionResultColumn = function(t3, e2) {
    this.detectionResultColumns[t3] = e2;
  }, t2.prototype.getDetectionResultColumn = function(t3) {
    return this.detectionResultColumns[t3];
  }, t2.prototype.toString = function() {
    var t3 = this.detectionResultColumns[0];
    null == t3 && (t3 = this.detectionResultColumns[this.barcodeColumnCount + 1]);
    for (var e2 = new Un(), r2 = 0; r2 < t3.getCodewords().length; r2++) {
      e2.format("CW %3d:", r2);
      for (var n2 = 0; n2 < this.barcodeColumnCount + 2; n2++) if (null != this.detectionResultColumns[n2]) {
        var o2 = this.detectionResultColumns[n2].getCodewords()[r2];
        null != o2 ? e2.format(" %3d|%3d", o2.getRowNumber(), o2.getValue()) : e2.format("    |   ");
      } else e2.format("    |   ");
      e2.format("%n");
    }
    return e2.toString();
  }, t2;
}();
var to = function() {
  function t2(e2, r2, n2, o2) {
    this.rowNumber = t2.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(e2), this.endX = Math.trunc(r2), this.bucket = Math.trunc(n2), this.value = Math.trunc(o2);
  }
  return t2.prototype.hasValidRowNumber = function() {
    return this.isValidRowNumber(this.rowNumber);
  }, t2.prototype.isValidRowNumber = function(e2) {
    return e2 !== t2.BARCODE_ROW_UNKNOWN && this.bucket === e2 % 3 * 3;
  }, t2.prototype.setRowNumberAsRowIndicatorColumn = function() {
    this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3));
  }, t2.prototype.getWidth = function() {
    return this.endX - this.startX;
  }, t2.prototype.getStartX = function() {
    return this.startX;
  }, t2.prototype.getEndX = function() {
    return this.endX;
  }, t2.prototype.getBucket = function() {
    return this.bucket;
  }, t2.prototype.getValue = function() {
    return this.value;
  }, t2.prototype.getRowNumber = function() {
    return this.rowNumber;
  }, t2.prototype.setRowNumber = function(t3) {
    this.rowNumber = t3;
  }, t2.prototype.toString = function() {
    return this.rowNumber + "|" + this.value;
  }, t2.BARCODE_ROW_UNKNOWN = -1, t2;
}();
var eo = function() {
  function t2() {
  }
  return t2.initialize = function() {
    for (var e2 = 0; e2 < Nn.SYMBOL_TABLE.length; e2++) for (var r2 = Nn.SYMBOL_TABLE[e2], n2 = 1 & r2, o2 = 0; o2 < Nn.BARS_IN_MODULE; o2++) {
      for (var i2 = 0; (1 & r2) === n2; ) i2 += 1, r2 >>= 1;
      n2 = 1 & r2, t2.RATIOS_TABLE[e2] || (t2.RATIOS_TABLE[e2] = new Array(Nn.BARS_IN_MODULE)), t2.RATIOS_TABLE[e2][Nn.BARS_IN_MODULE - o2 - 1] = Math.fround(i2 / Nn.MODULES_IN_CODEWORD);
    }
    this.bSymbolTableReady = true;
  }, t2.getDecodedValue = function(e2) {
    var r2 = t2.getDecodedCodewordValue(t2.sampleBitCounts(e2));
    return -1 !== r2 ? r2 : t2.getClosestDecodedValue(e2);
  }, t2.sampleBitCounts = function(t3) {
    for (var e2 = Lt.sum(t3), r2 = new Int32Array(Nn.BARS_IN_MODULE), n2 = 0, o2 = 0, i2 = 0; i2 < Nn.MODULES_IN_CODEWORD; i2++) {
      var a2 = e2 / (2 * Nn.MODULES_IN_CODEWORD) + i2 * e2 / Nn.MODULES_IN_CODEWORD;
      o2 + t3[n2] <= a2 && (o2 += t3[n2], n2++), r2[n2]++;
    }
    return r2;
  }, t2.getDecodedCodewordValue = function(e2) {
    var r2 = t2.getBitValue(e2);
    return -1 === Nn.getCodeword(r2) ? -1 : r2;
  }, t2.getBitValue = function(t3) {
    for (var e2 = 0, r2 = 0; r2 < t3.length; r2++) for (var n2 = 0; n2 < t3[r2]; n2++) e2 = e2 << 1 | (r2 % 2 == 0 ? 1 : 0);
    return Math.trunc(e2);
  }, t2.getClosestDecodedValue = function(e2) {
    var r2 = Lt.sum(e2), n2 = new Array(Nn.BARS_IN_MODULE);
    if (r2 > 1) for (var o2 = 0; o2 < n2.length; o2++) n2[o2] = Math.fround(e2[o2] / r2);
    var i2 = kt.MAX_VALUE, a2 = -1;
    this.bSymbolTableReady || t2.initialize();
    for (var s2 = 0; s2 < t2.RATIOS_TABLE.length; s2++) {
      for (var u2 = 0, c2 = t2.RATIOS_TABLE[s2], f2 = 0; f2 < Nn.BARS_IN_MODULE; f2++) {
        var h2 = Math.fround(c2[f2] - n2[f2]);
        if ((u2 += Math.fround(h2 * h2)) >= i2) break;
      }
      u2 < i2 && (i2 = u2, a2 = Nn.SYMBOL_TABLE[s2]);
    }
    return a2;
  }, t2.bSymbolTableReady = false, t2.RATIOS_TABLE = new Array(Nn.SYMBOL_TABLE.length).map(function(t3) {
    return new Array(Nn.BARS_IN_MODULE);
  }), t2;
}();
var ro = function() {
  function t2() {
    this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1;
  }
  return t2.prototype.getSegmentIndex = function() {
    return this.segmentIndex;
  }, t2.prototype.setSegmentIndex = function(t3) {
    this.segmentIndex = t3;
  }, t2.prototype.getFileId = function() {
    return this.fileId;
  }, t2.prototype.setFileId = function(t3) {
    this.fileId = t3;
  }, t2.prototype.getOptionalData = function() {
    return this.optionalData;
  }, t2.prototype.setOptionalData = function(t3) {
    this.optionalData = t3;
  }, t2.prototype.isLastSegment = function() {
    return this.lastSegment;
  }, t2.prototype.setLastSegment = function(t3) {
    this.lastSegment = t3;
  }, t2.prototype.getSegmentCount = function() {
    return this.segmentCount;
  }, t2.prototype.setSegmentCount = function(t3) {
    this.segmentCount = t3;
  }, t2.prototype.getSender = function() {
    return this.sender || null;
  }, t2.prototype.setSender = function(t3) {
    this.sender = t3;
  }, t2.prototype.getAddressee = function() {
    return this.addressee || null;
  }, t2.prototype.setAddressee = function(t3) {
    this.addressee = t3;
  }, t2.prototype.getFileName = function() {
    return this.fileName;
  }, t2.prototype.setFileName = function(t3) {
    this.fileName = t3;
  }, t2.prototype.getFileSize = function() {
    return this.fileSize;
  }, t2.prototype.setFileSize = function(t3) {
    this.fileSize = t3;
  }, t2.prototype.getChecksum = function() {
    return this.checksum;
  }, t2.prototype.setChecksum = function(t3) {
    this.checksum = t3;
  }, t2.prototype.getTimestamp = function() {
    return this.timestamp;
  }, t2.prototype.setTimestamp = function(t3) {
    this.timestamp = t3;
  }, t2;
}();
var no = function() {
  function t2() {
  }
  return t2.parseLong = function(t3, e2) {
    return void 0 === e2 && (e2 = void 0), parseInt(t3, e2);
  }, t2;
}();
var oo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var io = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return oo(e2, t2), e2.kind = "NullPointerException", e2;
}(T);
var ao = function() {
  function t2() {
  }
  return t2.prototype.writeBytes = function(t3) {
    this.writeBytesOffset(t3, 0, t3.length);
  }, t2.prototype.writeBytesOffset = function(t3, e2, r2) {
    if (null == t3) throw new io();
    if (e2 < 0 || e2 > t3.length || r2 < 0 || e2 + r2 > t3.length || e2 + r2 < 0) throw new L();
    if (0 !== r2) for (var n2 = 0; n2 < r2; n2++) this.write(t3[e2 + n2]);
  }, t2.prototype.flush = function() {
  }, t2.prototype.close = function() {
  }, t2;
}();
var so = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var uo = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return so(e2, t2), e2;
}(T);
var co = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var fo = function(t2) {
  function e2(e3) {
    void 0 === e3 && (e3 = 32);
    var r2 = t2.call(this) || this;
    if (r2.count = 0, e3 < 0) throw new D("Negative initial size: " + e3);
    return r2.buf = new Uint8Array(e3), r2;
  }
  return co(e2, t2), e2.prototype.ensureCapacity = function(t3) {
    t3 - this.buf.length > 0 && this.grow(t3);
  }, e2.prototype.grow = function(t3) {
    var e3 = this.buf.length << 1;
    if (e3 - t3 < 0 && (e3 = t3), e3 < 0) {
      if (t3 < 0) throw new uo();
      e3 = Y.MAX_VALUE;
    }
    this.buf = G.copyOfUint8Array(this.buf, e3);
  }, e2.prototype.write = function(t3) {
    this.ensureCapacity(this.count + 1), this.buf[this.count] = t3, this.count += 1;
  }, e2.prototype.writeBytesOffset = function(t3, e3, r2) {
    if (e3 < 0 || e3 > t3.length || r2 < 0 || e3 + r2 - t3.length > 0) throw new L();
    this.ensureCapacity(this.count + r2), P.arraycopy(t3, e3, this.buf, this.count, r2), this.count += r2;
  }, e2.prototype.writeTo = function(t3) {
    t3.writeBytesOffset(this.buf, 0, this.count);
  }, e2.prototype.reset = function() {
    this.count = 0;
  }, e2.prototype.toByteArray = function() {
    return G.copyOfUint8Array(this.buf, this.count);
  }, e2.prototype.size = function() {
    return this.count;
  }, e2.prototype.toString = function(t3) {
    return t3 ? "string" == typeof t3 ? this.toString_string(t3) : this.toString_number(t3) : this.toString_void();
  }, e2.prototype.toString_void = function() {
    return new String(this.buf).toString();
  }, e2.prototype.toString_string = function(t3) {
    return new String(this.buf).toString();
  }, e2.prototype.toString_number = function(t3) {
    return new String(this.buf).toString();
  }, e2.prototype.close = function() {
  }, e2;
}(ao);
function ho() {
  if ("undefined" != typeof window) return window.BigInt || null;
  if ("undefined" != typeof global) return global.BigInt || null;
  if ("undefined" != typeof self) return self.BigInt || null;
  throw new Error("Can't search globals for BigInt!");
}
function lo(t2) {
  if (void 0 === ln && (ln = ho()), null === ln) throw new Error("BigInt is not supported!");
  return ln(t2);
}
!function(t2) {
  t2[t2.ALPHA = 0] = "ALPHA", t2[t2.LOWER = 1] = "LOWER", t2[t2.MIXED = 2] = "MIXED", t2[t2.PUNCT = 3] = "PUNCT", t2[t2.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", t2[t2.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
}(hn || (hn = {}));
var po = function() {
  function t2() {
  }
  return t2.decode = function(e2, r2) {
    var n2 = new tt(""), o2 = Z.ISO8859_1;
    n2.enableDecoding(o2);
    for (var i2 = 1, a2 = e2[i2++], s2 = new ro(); i2 < e2[0]; ) {
      switch (a2) {
        case t2.TEXT_COMPACTION_MODE_LATCH:
          i2 = t2.textCompaction(e2, i2, n2);
          break;
        case t2.BYTE_COMPACTION_MODE_LATCH:
        case t2.BYTE_COMPACTION_MODE_LATCH_6:
          i2 = t2.byteCompaction(a2, e2, o2, i2, n2);
          break;
        case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
          n2.append(e2[i2++]);
          break;
        case t2.NUMERIC_COMPACTION_MODE_LATCH:
          i2 = t2.numericCompaction(e2, i2, n2);
          break;
        case t2.ECI_CHARSET:
          Z.getCharacterSetECIByValue(e2[i2++]);
          break;
        case t2.ECI_GENERAL_PURPOSE:
          i2 += 2;
          break;
        case t2.ECI_USER_DEFINED:
          i2++;
          break;
        case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          i2 = t2.decodeMacroBlock(e2, i2, s2);
          break;
        case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
        case t2.MACRO_PDF417_TERMINATOR:
          throw new Q();
        default:
          i2--, i2 = t2.textCompaction(e2, i2, n2);
      }
      if (!(i2 < e2.length)) throw Q.getFormatInstance();
      a2 = e2[i2++];
    }
    if (0 === n2.length()) throw Q.getFormatInstance();
    var u2 = new It(null, n2.toString(), null, r2);
    return u2.setOther(s2), u2;
  }, t2.decodeMacroBlock = function(e2, r2, n2) {
    if (r2 + t2.NUMBER_OF_SEQUENCE_CODEWORDS > e2[0]) throw Q.getFormatInstance();
    for (var o2 = new Int32Array(t2.NUMBER_OF_SEQUENCE_CODEWORDS), i2 = 0; i2 < t2.NUMBER_OF_SEQUENCE_CODEWORDS; i2++, r2++) o2[i2] = e2[r2];
    n2.setSegmentIndex(Y.parseInt(t2.decodeBase900toBase10(o2, t2.NUMBER_OF_SEQUENCE_CODEWORDS)));
    var a2 = new tt();
    r2 = t2.textCompaction(e2, r2, a2), n2.setFileId(a2.toString());
    var s2 = -1;
    for (e2[r2] === t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s2 = r2 + 1); r2 < e2[0]; ) switch (e2[r2]) {
      case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
        switch (e2[++r2]) {
          case t2.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
            var u2 = new tt();
            r2 = t2.textCompaction(e2, r2 + 1, u2), n2.setFileName(u2.toString());
            break;
          case t2.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
            var c2 = new tt();
            r2 = t2.textCompaction(e2, r2 + 1, c2), n2.setSender(c2.toString());
            break;
          case t2.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
            var f2 = new tt();
            r2 = t2.textCompaction(e2, r2 + 1, f2), n2.setAddressee(f2.toString());
            break;
          case t2.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
            var h2 = new tt();
            r2 = t2.numericCompaction(e2, r2 + 1, h2), n2.setSegmentCount(Y.parseInt(h2.toString()));
            break;
          case t2.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
            var l2 = new tt();
            r2 = t2.numericCompaction(e2, r2 + 1, l2), n2.setTimestamp(no.parseLong(l2.toString()));
            break;
          case t2.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
            var d2 = new tt();
            r2 = t2.numericCompaction(e2, r2 + 1, d2), n2.setChecksum(Y.parseInt(d2.toString()));
            break;
          case t2.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
            var p2 = new tt();
            r2 = t2.numericCompaction(e2, r2 + 1, p2), n2.setFileSize(no.parseLong(p2.toString()));
            break;
          default:
            throw Q.getFormatInstance();
        }
        break;
      case t2.MACRO_PDF417_TERMINATOR:
        r2++, n2.setLastSegment(true);
        break;
      default:
        throw Q.getFormatInstance();
    }
    if (-1 !== s2) {
      var g2 = r2 - s2;
      n2.isLastSegment() && g2--, n2.setOptionalData(G.copyOfRange(e2, s2, s2 + g2));
    }
    return r2;
  }, t2.textCompaction = function(e2, r2, n2) {
    for (var o2 = new Int32Array(2 * (e2[0] - r2)), i2 = new Int32Array(2 * (e2[0] - r2)), a2 = 0, s2 = false; r2 < e2[0] && !s2; ) {
      var u2 = e2[r2++];
      if (u2 < t2.TEXT_COMPACTION_MODE_LATCH) o2[a2] = u2 / 30, o2[a2 + 1] = u2 % 30, a2 += 2;
      else switch (u2) {
        case t2.TEXT_COMPACTION_MODE_LATCH:
          o2[a2++] = t2.TEXT_COMPACTION_MODE_LATCH;
          break;
        case t2.BYTE_COMPACTION_MODE_LATCH:
        case t2.BYTE_COMPACTION_MODE_LATCH_6:
        case t2.NUMERIC_COMPACTION_MODE_LATCH:
        case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
        case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
        case t2.MACRO_PDF417_TERMINATOR:
          r2--, s2 = true;
          break;
        case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
          o2[a2] = t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, u2 = e2[r2++], i2[a2] = u2, a2++;
      }
    }
    return t2.decodeTextCompaction(o2, i2, a2, n2), r2;
  }, t2.decodeTextCompaction = function(e2, r2, n2, o2) {
    for (var i2 = hn.ALPHA, a2 = hn.ALPHA, s2 = 0; s2 < n2; ) {
      var u2 = e2[s2], c2 = "";
      switch (i2) {
        case hn.ALPHA:
          if (u2 < 26) c2 = String.fromCharCode(65 + u2);
          else switch (u2) {
            case 26:
              c2 = " ";
              break;
            case t2.LL:
              i2 = hn.LOWER;
              break;
            case t2.ML:
              i2 = hn.MIXED;
              break;
            case t2.PS:
              a2 = i2, i2 = hn.PUNCT_SHIFT;
              break;
            case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              o2.append(r2[s2]);
              break;
            case t2.TEXT_COMPACTION_MODE_LATCH:
              i2 = hn.ALPHA;
          }
          break;
        case hn.LOWER:
          if (u2 < 26) c2 = String.fromCharCode(97 + u2);
          else switch (u2) {
            case 26:
              c2 = " ";
              break;
            case t2.AS:
              a2 = i2, i2 = hn.ALPHA_SHIFT;
              break;
            case t2.ML:
              i2 = hn.MIXED;
              break;
            case t2.PS:
              a2 = i2, i2 = hn.PUNCT_SHIFT;
              break;
            case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              o2.append(r2[s2]);
              break;
            case t2.TEXT_COMPACTION_MODE_LATCH:
              i2 = hn.ALPHA;
          }
          break;
        case hn.MIXED:
          if (u2 < t2.PL) c2 = t2.MIXED_CHARS[u2];
          else switch (u2) {
            case t2.PL:
              i2 = hn.PUNCT;
              break;
            case 26:
              c2 = " ";
              break;
            case t2.LL:
              i2 = hn.LOWER;
              break;
            case t2.AL:
              i2 = hn.ALPHA;
              break;
            case t2.PS:
              a2 = i2, i2 = hn.PUNCT_SHIFT;
              break;
            case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              o2.append(r2[s2]);
              break;
            case t2.TEXT_COMPACTION_MODE_LATCH:
              i2 = hn.ALPHA;
          }
          break;
        case hn.PUNCT:
          if (u2 < t2.PAL) c2 = t2.PUNCT_CHARS[u2];
          else switch (u2) {
            case t2.PAL:
              i2 = hn.ALPHA;
              break;
            case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              o2.append(r2[s2]);
              break;
            case t2.TEXT_COMPACTION_MODE_LATCH:
              i2 = hn.ALPHA;
          }
          break;
        case hn.ALPHA_SHIFT:
          if (i2 = a2, u2 < 26) c2 = String.fromCharCode(65 + u2);
          else switch (u2) {
            case 26:
              c2 = " ";
              break;
            case t2.TEXT_COMPACTION_MODE_LATCH:
              i2 = hn.ALPHA;
          }
          break;
        case hn.PUNCT_SHIFT:
          if (i2 = a2, u2 < t2.PAL) c2 = t2.PUNCT_CHARS[u2];
          else switch (u2) {
            case t2.PAL:
              i2 = hn.ALPHA;
              break;
            case t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              o2.append(r2[s2]);
              break;
            case t2.TEXT_COMPACTION_MODE_LATCH:
              i2 = hn.ALPHA;
          }
      }
      "" !== c2 && o2.append(c2), s2++;
    }
  }, t2.byteCompaction = function(e2, r2, n2, o2, i2) {
    var a2 = new fo(), s2 = 0, u2 = 0, c2 = false;
    switch (e2) {
      case t2.BYTE_COMPACTION_MODE_LATCH:
        for (var f2 = new Int32Array(6), h2 = r2[o2++]; o2 < r2[0] && !c2; ) switch (f2[s2++] = h2, u2 = 900 * u2 + h2, h2 = r2[o2++]) {
          case t2.TEXT_COMPACTION_MODE_LATCH:
          case t2.BYTE_COMPACTION_MODE_LATCH:
          case t2.NUMERIC_COMPACTION_MODE_LATCH:
          case t2.BYTE_COMPACTION_MODE_LATCH_6:
          case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
          case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case t2.MACRO_PDF417_TERMINATOR:
            o2--, c2 = true;
            break;
          default:
            if (s2 % 5 == 0 && s2 > 0) {
              for (var l2 = 0; l2 < 6; ++l2) a2.write(Number(lo(u2) >> lo(8 * (5 - l2))));
              u2 = 0, s2 = 0;
            }
        }
        o2 === r2[0] && h2 < t2.TEXT_COMPACTION_MODE_LATCH && (f2[s2++] = h2);
        for (var d2 = 0; d2 < s2; d2++) a2.write(f2[d2]);
        break;
      case t2.BYTE_COMPACTION_MODE_LATCH_6:
        for (; o2 < r2[0] && !c2; ) {
          var p2 = r2[o2++];
          if (p2 < t2.TEXT_COMPACTION_MODE_LATCH) s2++, u2 = 900 * u2 + p2;
          else switch (p2) {
            case t2.TEXT_COMPACTION_MODE_LATCH:
            case t2.BYTE_COMPACTION_MODE_LATCH:
            case t2.NUMERIC_COMPACTION_MODE_LATCH:
            case t2.BYTE_COMPACTION_MODE_LATCH_6:
            case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case t2.MACRO_PDF417_TERMINATOR:
              o2--, c2 = true;
          }
          if (s2 % 5 == 0 && s2 > 0) {
            for (l2 = 0; l2 < 6; ++l2) a2.write(Number(lo(u2) >> lo(8 * (5 - l2))));
            u2 = 0, s2 = 0;
          }
        }
    }
    return i2.append(J.decode(a2.toByteArray(), n2)), o2;
  }, t2.numericCompaction = function(e2, r2, n2) {
    for (var o2 = 0, i2 = false, a2 = new Int32Array(t2.MAX_NUMERIC_CODEWORDS); r2 < e2[0] && !i2; ) {
      var s2 = e2[r2++];
      if (r2 === e2[0] && (i2 = true), s2 < t2.TEXT_COMPACTION_MODE_LATCH) a2[o2] = s2, o2++;
      else switch (s2) {
        case t2.TEXT_COMPACTION_MODE_LATCH:
        case t2.BYTE_COMPACTION_MODE_LATCH:
        case t2.BYTE_COMPACTION_MODE_LATCH_6:
        case t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
        case t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
        case t2.MACRO_PDF417_TERMINATOR:
          r2--, i2 = true;
      }
      (o2 % t2.MAX_NUMERIC_CODEWORDS == 0 || s2 === t2.NUMERIC_COMPACTION_MODE_LATCH || i2) && o2 > 0 && (n2.append(t2.decodeBase900toBase10(a2, o2)), o2 = 0);
    }
    return r2;
  }, t2.decodeBase900toBase10 = function(e2, r2) {
    for (var n2 = lo(0), o2 = 0; o2 < r2; o2++) n2 += t2.EXP900[r2 - o2 - 1] * lo(e2[o2]);
    var i2 = n2.toString();
    if ("1" !== i2.charAt(0)) throw new Q();
    return i2.substring(1);
  }, t2.TEXT_COMPACTION_MODE_LATCH = 900, t2.BYTE_COMPACTION_MODE_LATCH = 901, t2.NUMERIC_COMPACTION_MODE_LATCH = 902, t2.BYTE_COMPACTION_MODE_LATCH_6 = 924, t2.ECI_USER_DEFINED = 925, t2.ECI_GENERAL_PURPOSE = 926, t2.ECI_CHARSET = 927, t2.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, t2.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, t2.MACRO_PDF417_TERMINATOR = 922, t2.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, t2.MAX_NUMERIC_CODEWORDS = 15, t2.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, t2.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, t2.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, t2.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, t2.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, t2.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, t2.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, t2.PL = 25, t2.LL = 27, t2.AS = 27, t2.ML = 28, t2.AL = 28, t2.PS = 29, t2.PAL = 29, t2.PUNCT_CHARS = ";<>@[\\]_`~!\r	,:\n-.$/\"|*()?{}'", t2.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^", t2.EXP900 = ho() ? function() {
    var t3 = [];
    t3[0] = lo(1);
    var e2 = lo(900);
    t3[1] = e2;
    for (var r2 = 2; r2 < 16; r2++) t3[r2] = t3[r2 - 1] * e2;
    return t3;
  }() : [], t2.NUMBER_OF_SEQUENCE_CODEWORDS = 2, t2;
}();
var go = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var wo = function() {
  function t2() {
  }
  return t2.decode = function(e2, r2, n2, o2, i2, a2, s2) {
    for (var u2, c2 = new Yn(e2, r2, n2, o2, i2), f2 = null, h2 = null, l2 = true; ; l2 = false) {
      if (null != r2 && (f2 = t2.getRowIndicatorColumn(e2, c2, r2, true, a2, s2)), null != o2 && (h2 = t2.getRowIndicatorColumn(e2, c2, o2, false, a2, s2)), null == (u2 = t2.merge(f2, h2))) throw nt.getNotFoundInstance();
      var d2 = u2.getBoundingBox();
      if (!l2 || null == d2 || !(d2.getMinY() < c2.getMinY() || d2.getMaxY() > c2.getMaxY())) break;
      c2 = d2;
    }
    u2.setBoundingBox(c2);
    var p2 = u2.getBarcodeColumnCount() + 1;
    u2.setDetectionResultColumn(0, f2), u2.setDetectionResultColumn(p2, h2);
    for (var g2 = null != f2, w2 = 1; w2 <= p2; w2++) {
      var A2 = g2 ? w2 : p2 - w2;
      if (void 0 === u2.getDetectionResultColumn(A2)) {
        var y2 = void 0;
        y2 = 0 === A2 || A2 === p2 ? new zn(c2, 0 === A2) : new Wn(c2), u2.setDetectionResultColumn(A2, y2);
        for (var C2 = -1, E2 = C2, v2 = c2.getMinY(); v2 <= c2.getMaxY(); v2++) {
          if ((C2 = t2.getStartColumn(u2, A2, v2, g2)) < 0 || C2 > c2.getMaxX()) {
            if (-1 === E2) continue;
            C2 = E2;
          }
          var m2 = t2.detectCodeword(e2, c2.getMinX(), c2.getMaxX(), g2, C2, v2, a2, s2);
          null != m2 && (y2.setCodeword(v2, m2), E2 = C2, a2 = Math.min(a2, m2.getWidth()), s2 = Math.max(s2, m2.getWidth()));
        }
      }
    }
    return t2.createDecoderResult(u2);
  }, t2.merge = function(e2, r2) {
    if (null == e2 && null == r2) return null;
    var n2 = t2.getBarcodeMetadata(e2, r2);
    if (null == n2) return null;
    var o2 = Yn.merge(t2.adjustBoundingBox(e2), t2.adjustBoundingBox(r2));
    return new $n(n2, o2);
  }, t2.adjustBoundingBox = function(e2) {
    var r2, n2;
    if (null == e2) return null;
    var o2 = e2.getRowHeights();
    if (null == o2) return null;
    var i2 = t2.getMax(o2), a2 = 0;
    try {
      for (var s2 = go(o2), u2 = s2.next(); !u2.done; u2 = s2.next()) {
        var c2 = u2.value;
        if (a2 += i2 - c2, c2 > 0) break;
      }
    } catch (t3) {
      r2 = { error: t3 };
    } finally {
      try {
        u2 && !u2.done && (n2 = s2.return) && n2.call(s2);
      } finally {
        if (r2) throw r2.error;
      }
    }
    for (var f2 = e2.getCodewords(), h2 = 0; a2 > 0 && null == f2[h2]; h2++) a2--;
    var l2 = 0;
    for (h2 = o2.length - 1; h2 >= 0 && (l2 += i2 - o2[h2], !(o2[h2] > 0)); h2--) ;
    for (h2 = f2.length - 1; l2 > 0 && null == f2[h2]; h2--) l2--;
    return e2.getBoundingBox().addMissingRows(a2, l2, e2.isLeft());
  }, t2.getMax = function(t3) {
    var e2, r2, n2 = -1;
    try {
      for (var o2 = go(t3), i2 = o2.next(); !i2.done; i2 = o2.next()) {
        var a2 = i2.value;
        n2 = Math.max(n2, a2);
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        i2 && !i2.done && (r2 = o2.return) && r2.call(o2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return n2;
  }, t2.getBarcodeMetadata = function(t3, e2) {
    var r2, n2;
    return null == t3 || null == (r2 = t3.getBarcodeMetadata()) ? null == e2 ? null : e2.getBarcodeMetadata() : null == e2 || null == (n2 = e2.getBarcodeMetadata()) ? r2 : r2.getColumnCount() !== n2.getColumnCount() && r2.getErrorCorrectionLevel() !== n2.getErrorCorrectionLevel() && r2.getRowCount() !== n2.getRowCount() ? null : r2;
  }, t2.getRowIndicatorColumn = function(e2, r2, n2, o2, i2, a2) {
    for (var s2 = new zn(r2, o2), u2 = 0; u2 < 2; u2++) for (var c2 = 0 === u2 ? 1 : -1, f2 = Math.trunc(Math.trunc(n2.getX())), h2 = Math.trunc(Math.trunc(n2.getY())); h2 <= r2.getMaxY() && h2 >= r2.getMinY(); h2 += c2) {
      var l2 = t2.detectCodeword(e2, 0, e2.getWidth(), o2, f2, h2, i2, a2);
      null != l2 && (s2.setCodeword(h2, l2), f2 = o2 ? l2.getStartX() : l2.getEndX());
    }
    return s2;
  }, t2.adjustCodewordCount = function(e2, r2) {
    var n2 = r2[0][1], o2 = n2.getValue(), i2 = e2.getBarcodeColumnCount() * e2.getBarcodeRowCount() - t2.getNumberOfECCodeWords(e2.getBarcodeECLevel());
    if (0 === o2.length) {
      if (i2 < 1 || i2 > Nn.MAX_CODEWORDS_IN_BARCODE) throw nt.getNotFoundInstance();
      n2.setValue(i2);
    } else o2[0] !== i2 && n2.setValue(i2);
  }, t2.createDecoderResult = function(e2) {
    var r2 = t2.createBarcodeMatrix(e2);
    t2.adjustCodewordCount(e2, r2);
    for (var n2 = new Array(), o2 = new Int32Array(e2.getBarcodeRowCount() * e2.getBarcodeColumnCount()), i2 = [], a2 = new Array(), s2 = 0; s2 < e2.getBarcodeRowCount(); s2++) for (var u2 = 0; u2 < e2.getBarcodeColumnCount(); u2++) {
      var c2 = r2[s2][u2 + 1].getValue(), f2 = s2 * e2.getBarcodeColumnCount() + u2;
      0 === c2.length ? n2.push(f2) : 1 === c2.length ? o2[f2] = c2[0] : (a2.push(f2), i2.push(c2));
    }
    for (var h2 = new Array(i2.length), l2 = 0; l2 < h2.length; l2++) h2[l2] = i2[l2];
    return t2.createDecoderResultFromAmbiguousValues(e2.getBarcodeECLevel(), o2, Nn.toIntArray(n2), Nn.toIntArray(a2), h2);
  }, t2.createDecoderResultFromAmbiguousValues = function(e2, r2, n2, o2, i2) {
    for (var a2 = new Int32Array(o2.length), s2 = 100; s2-- > 0; ) {
      for (var u2 = 0; u2 < a2.length; u2++) r2[o2[u2]] = i2[u2][a2[u2]];
      try {
        return t2.decodeCodewords(r2, e2, n2);
      } catch (t3) {
        if (!(t3 instanceof M)) throw t3;
      }
      if (0 === a2.length) throw M.getChecksumInstance();
      for (u2 = 0; u2 < a2.length; u2++) {
        if (a2[u2] < i2[u2].length - 1) {
          a2[u2]++;
          break;
        }
        if (a2[u2] = 0, u2 === a2.length - 1) throw M.getChecksumInstance();
      }
    }
    throw M.getChecksumInstance();
  }, t2.createBarcodeMatrix = function(t3) {
    for (var e2, r2, n2, o2, i2 = Array.from({ length: t3.getBarcodeRowCount() }, function() {
      return new Array(t3.getBarcodeColumnCount() + 2);
    }), a2 = 0; a2 < i2.length; a2++) for (var s2 = 0; s2 < i2[a2].length; s2++) i2[a2][s2] = new Xn();
    var u2 = 0;
    try {
      for (var c2 = go(t3.getDetectionResultColumns()), f2 = c2.next(); !f2.done; f2 = c2.next()) {
        var h2 = f2.value;
        if (null != h2) try {
          for (var l2 = (n2 = void 0, go(h2.getCodewords())), d2 = l2.next(); !d2.done; d2 = l2.next()) {
            var p2 = d2.value;
            if (null != p2) {
              var g2 = p2.getRowNumber();
              if (g2 >= 0) {
                if (g2 >= i2.length) continue;
                i2[g2][u2].setValue(p2.getValue());
              }
            }
          }
        } catch (t4) {
          n2 = { error: t4 };
        } finally {
          try {
            d2 && !d2.done && (o2 = l2.return) && o2.call(l2);
          } finally {
            if (n2) throw n2.error;
          }
        }
        u2++;
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        f2 && !f2.done && (r2 = c2.return) && r2.call(c2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return i2;
  }, t2.isValidBarcodeColumn = function(t3, e2) {
    return e2 >= 0 && e2 <= t3.getBarcodeColumnCount() + 1;
  }, t2.getStartColumn = function(e2, r2, n2, o2) {
    var i2, a2, s2 = o2 ? 1 : -1, u2 = null;
    if (t2.isValidBarcodeColumn(e2, r2 - s2) && (u2 = e2.getDetectionResultColumn(r2 - s2).getCodeword(n2)), null != u2) return o2 ? u2.getEndX() : u2.getStartX();
    if (null != (u2 = e2.getDetectionResultColumn(r2).getCodewordNearby(n2))) return o2 ? u2.getStartX() : u2.getEndX();
    if (t2.isValidBarcodeColumn(e2, r2 - s2) && (u2 = e2.getDetectionResultColumn(r2 - s2).getCodewordNearby(n2)), null != u2) return o2 ? u2.getEndX() : u2.getStartX();
    for (var c2 = 0; t2.isValidBarcodeColumn(e2, r2 - s2); ) {
      r2 -= s2;
      try {
        for (var f2 = (i2 = void 0, go(e2.getDetectionResultColumn(r2).getCodewords())), h2 = f2.next(); !h2.done; h2 = f2.next()) {
          var l2 = h2.value;
          if (null != l2) return (o2 ? l2.getEndX() : l2.getStartX()) + s2 * c2 * (l2.getEndX() - l2.getStartX());
        }
      } catch (t3) {
        i2 = { error: t3 };
      } finally {
        try {
          h2 && !h2.done && (a2 = f2.return) && a2.call(f2);
        } finally {
          if (i2) throw i2.error;
        }
      }
      c2++;
    }
    return o2 ? e2.getBoundingBox().getMinX() : e2.getBoundingBox().getMaxX();
  }, t2.detectCodeword = function(e2, r2, n2, o2, i2, a2, s2, u2) {
    i2 = t2.adjustCodewordStartColumn(e2, r2, n2, o2, i2, a2);
    var c2, f2 = t2.getModuleBitCount(e2, r2, n2, o2, i2, a2);
    if (null == f2) return null;
    var h2 = Lt.sum(f2);
    if (o2) c2 = i2 + h2;
    else {
      for (var l2 = 0; l2 < f2.length / 2; l2++) {
        var d2 = f2[l2];
        f2[l2] = f2[f2.length - 1 - l2], f2[f2.length - 1 - l2] = d2;
      }
      i2 = (c2 = i2) - h2;
    }
    if (!t2.checkCodewordSkew(h2, s2, u2)) return null;
    var p2 = eo.getDecodedValue(f2), g2 = Nn.getCodeword(p2);
    return -1 === g2 ? null : new to(i2, c2, t2.getCodewordBucketNumber(p2), g2);
  }, t2.getModuleBitCount = function(t3, e2, r2, n2, o2, i2) {
    for (var a2 = o2, s2 = new Int32Array(8), u2 = 0, c2 = n2 ? 1 : -1, f2 = n2; (n2 ? a2 < r2 : a2 >= e2) && u2 < s2.length; ) t3.get(a2, i2) === f2 ? (s2[u2]++, a2 += c2) : (u2++, f2 = !f2);
    return u2 === s2.length || a2 === (n2 ? r2 : e2) && u2 === s2.length - 1 ? s2 : null;
  }, t2.getNumberOfECCodeWords = function(t3) {
    return 2 << t3;
  }, t2.adjustCodewordStartColumn = function(e2, r2, n2, o2, i2, a2) {
    for (var s2 = i2, u2 = o2 ? -1 : 1, c2 = 0; c2 < 2; c2++) {
      for (; (o2 ? s2 >= r2 : s2 < n2) && o2 === e2.get(s2, a2); ) {
        if (Math.abs(i2 - s2) > t2.CODEWORD_SKEW_SIZE) return i2;
        s2 += u2;
      }
      u2 = -u2, o2 = !o2;
    }
    return s2;
  }, t2.checkCodewordSkew = function(e2, r2, n2) {
    return r2 - t2.CODEWORD_SKEW_SIZE <= e2 && e2 <= n2 + t2.CODEWORD_SKEW_SIZE;
  }, t2.decodeCodewords = function(e2, r2, n2) {
    if (0 === e2.length) throw Q.getFormatInstance();
    var o2 = 1 << r2 + 1, i2 = t2.correctErrors(e2, n2, o2);
    t2.verifyCodewordCount(e2, o2);
    var a2 = po.decode(e2, "" + r2);
    return a2.setErrorsCorrected(i2), a2.setErasures(n2.length), a2;
  }, t2.correctErrors = function(e2, r2, n2) {
    if (null != r2 && r2.length > n2 / 2 + t2.MAX_ERRORS || n2 < 0 || n2 > t2.MAX_EC_CODEWORDS) throw M.getChecksumInstance();
    return t2.errorCorrection.decode(e2, n2, r2);
  }, t2.verifyCodewordCount = function(t3, e2) {
    if (t3.length < 4) throw Q.getFormatInstance();
    var r2 = t3[0];
    if (r2 > t3.length) throw Q.getFormatInstance();
    if (0 === r2) {
      if (!(e2 < t3.length)) throw Q.getFormatInstance();
      t3[0] = t3.length - e2;
    }
  }, t2.getBitCountForCodeword = function(t3) {
    for (var e2 = new Int32Array(8), r2 = 0, n2 = e2.length - 1; !((1 & t3) !== r2 && (r2 = 1 & t3, --n2 < 0)); ) e2[n2]++, t3 >>= 1;
    return e2;
  }, t2.getCodewordBucketNumber = function(t3) {
    return t3 instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t3) : this.getCodewordBucketNumber_number(t3);
  }, t2.getCodewordBucketNumber_number = function(e2) {
    return t2.getCodewordBucketNumber(t2.getBitCountForCodeword(e2));
  }, t2.getCodewordBucketNumber_Int32Array = function(t3) {
    return (t3[0] - t3[2] + t3[4] - t3[6] + 9) % 9;
  }, t2.toString = function(t3) {
    for (var e2 = new Un(), r2 = 0; r2 < t3.length; r2++) {
      e2.format("Row %2d: ", r2);
      for (var n2 = 0; n2 < t3[r2].length; n2++) {
        var o2 = t3[r2][n2];
        0 === o2.getValue().length ? e2.format("        ", null) : e2.format("%4d(%2d)", o2.getValue()[0], o2.getConfidence(o2.getValue()[0]));
      }
      e2.format("%n");
    }
    return e2.toString();
  }, t2.CODEWORD_SKEW_SIZE = 2, t2.MAX_ERRORS = 3, t2.MAX_EC_CODEWORDS = 512, t2.errorCorrection = new Gn(), t2;
}();
var Ao = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var yo = function() {
  function t2() {
  }
  return t2.prototype.decode = function(e2, r2) {
    void 0 === r2 && (r2 = null);
    var n2 = t2.decode(e2, r2, false);
    if (null == n2 || 0 === n2.length || null == n2[0]) throw nt.getNotFoundInstance();
    return n2[0];
  }, t2.prototype.decodeMultiple = function(e2, r2) {
    void 0 === r2 && (r2 = null);
    try {
      return t2.decode(e2, r2, true);
    } catch (t3) {
      if (t3 instanceof Q || t3 instanceof M) throw nt.getNotFoundInstance();
      throw t3;
    }
  }, t2.decode = function(e2, r2, n2) {
    var o2, i2, a2 = new Array(), s2 = bn.detectMultiple(e2, r2, n2);
    try {
      for (var u2 = Ao(s2.getPoints()), c2 = u2.next(); !c2.done; c2 = u2.next()) {
        var f2 = c2.value, h2 = wo.decode(s2.getBits(), f2[4], f2[5], f2[6], f2[7], t2.getMinCodewordWidth(f2), t2.getMaxCodewordWidth(f2)), l2 = new yt(h2.getText(), h2.getRawBytes(), void 0, f2, Et.PDF_417);
        l2.putMetadata(mt.ERROR_CORRECTION_LEVEL, h2.getECLevel());
        var d2 = h2.getOther();
        null != d2 && l2.putMetadata(mt.PDF417_EXTRA_METADATA, d2), a2.push(l2);
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        c2 && !c2.done && (i2 = u2.return) && i2.call(u2);
      } finally {
        if (o2) throw o2.error;
      }
    }
    return a2.map(function(t3) {
      return t3;
    });
  }, t2.getMaxWidth = function(t3, e2) {
    return null == t3 || null == e2 ? 0 : Math.trunc(Math.abs(t3.getX() - e2.getX()));
  }, t2.getMinWidth = function(t3, e2) {
    return null == t3 || null == e2 ? Y.MAX_VALUE : Math.trunc(Math.abs(t3.getX() - e2.getX()));
  }, t2.getMaxCodewordWidth = function(e2) {
    return Math.floor(Math.max(Math.max(t2.getMaxWidth(e2[0], e2[4]), t2.getMaxWidth(e2[6], e2[2]) * Nn.MODULES_IN_CODEWORD / Nn.MODULES_IN_STOP_PATTERN), Math.max(t2.getMaxWidth(e2[1], e2[5]), t2.getMaxWidth(e2[7], e2[3]) * Nn.MODULES_IN_CODEWORD / Nn.MODULES_IN_STOP_PATTERN)));
  }, t2.getMinCodewordWidth = function(e2) {
    return Math.floor(Math.min(Math.min(t2.getMinWidth(e2[0], e2[4]), t2.getMinWidth(e2[6], e2[2]) * Nn.MODULES_IN_CODEWORD / Nn.MODULES_IN_STOP_PATTERN), Math.min(t2.getMinWidth(e2[1], e2[5]), t2.getMinWidth(e2[7], e2[3]) * Nn.MODULES_IN_CODEWORD / Nn.MODULES_IN_STOP_PATTERN)));
  }, t2.prototype.reset = function() {
  }, t2;
}();
var Co = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Eo = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return Co(e2, t2), e2.kind = "ReaderException", e2;
}(T);
var vo = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var mo = function() {
  function t2() {
  }
  return t2.prototype.decode = function(t3, e2) {
    return this.setHints(e2), this.decodeInternal(t3);
  }, t2.prototype.decodeWithState = function(t3) {
    return null !== this.readers && void 0 !== this.readers || this.setHints(null), this.decodeInternal(t3);
  }, t2.prototype.setHints = function(t3) {
    this.hints = t3;
    var e2 = null != t3 && void 0 !== t3.get(H.TRY_HARDER), r2 = null == t3 ? null : t3.get(H.POSSIBLE_FORMATS), n2 = new Array();
    if (null != r2) {
      var o2 = r2.some(function(t4) {
        return t4 === Et.UPC_A || t4 === Et.UPC_E || t4 === Et.EAN_13 || t4 === Et.EAN_8 || t4 === Et.CODABAR || t4 === Et.CODE_39 || t4 === Et.CODE_93 || t4 === Et.CODE_128 || t4 === Et.ITF || t4 === Et.RSS_14 || t4 === Et.RSS_EXPANDED;
      });
      o2 && !e2 && n2.push(new Mr(t3)), r2.includes(Et.QR_CODE) && n2.push(new Rn()), r2.includes(Et.DATA_MATRIX) && n2.push(new Xr()), r2.includes(Et.AZTEC) && n2.push(new jt()), r2.includes(Et.PDF_417) && n2.push(new yo()), o2 && e2 && n2.push(new Mr(t3));
    }
    0 === n2.length && (e2 || n2.push(new Mr(t3)), n2.push(new Rn()), n2.push(new Xr()), n2.push(new jt()), n2.push(new yo()), e2 && n2.push(new Mr(t3))), this.readers = n2;
  }, t2.prototype.reset = function() {
    var t3, e2;
    if (null !== this.readers) try {
      for (var r2 = vo(this.readers), n2 = r2.next(); !n2.done; n2 = r2.next()) {
        n2.value.reset();
      }
    } catch (e3) {
      t3 = { error: e3 };
    } finally {
      try {
        n2 && !n2.done && (e2 = r2.return) && e2.call(r2);
      } finally {
        if (t3) throw t3.error;
      }
    }
  }, t2.prototype.decodeInternal = function(t3) {
    var e2, r2;
    if (null === this.readers) throw new Eo("No readers where selected, nothing can be read.");
    try {
      for (var n2 = vo(this.readers), o2 = n2.next(); !o2.done; o2 = n2.next()) {
        var i2 = o2.value;
        try {
          return i2.decode(t3, this.hints);
        } catch (t4) {
          if (t4 instanceof Eo) continue;
        }
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        o2 && !o2.done && (r2 = n2.return) && r2.call(n2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    throw new nt("No MultiFormat Readers were able to detect the code.");
  }, t2;
}();
var Io = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2) {
    void 0 === e3 && (e3 = null), void 0 === r2 && (r2 = 500);
    var n2 = new mo();
    return n2.setHints(e3), t2.call(this, n2, r2) || this;
  }
  Io(e2, t2), e2.prototype.decodeBitmap = function(t3) {
    return this.reader.decodeWithState(t3);
  };
}(At);
var _o = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new yo(), e3) || this;
  }
  _o(e2, t2);
}(At);
var To;
var So = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3) {
    return void 0 === e3 && (e3 = 500), t2.call(this, new Rn(), e3) || this;
  }
  So(e2, t2);
}(At), function(t2) {
  t2[t2.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", t2[t2.CHARACTER_SET = 1] = "CHARACTER_SET", t2[t2.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", t2[t2.DATA_MATRIX_COMPACT = 3] = "DATA_MATRIX_COMPACT", t2[t2.MIN_SIZE = 4] = "MIN_SIZE", t2[t2.MAX_SIZE = 5] = "MAX_SIZE", t2[t2.MARGIN = 6] = "MARGIN", t2[t2.PDF417_COMPACT = 7] = "PDF417_COMPACT", t2[t2.PDF417_COMPACTION = 8] = "PDF417_COMPACTION", t2[t2.PDF417_DIMENSIONS = 9] = "PDF417_DIMENSIONS", t2[t2.AZTEC_LAYERS = 10] = "AZTEC_LAYERS", t2[t2.QR_VERSION = 11] = "QR_VERSION", t2[t2.GS1_FORMAT = 12] = "GS1_FORMAT", t2[t2.FORCE_C40 = 13] = "FORCE_C40";
}(To || (To = {}));
var Bo = To;
var Ro = function() {
  function t2(t3) {
    this.field = t3, this.cachedGenerators = [], this.cachedGenerators.push(new Tt(t3, Int32Array.from([1])));
  }
  return t2.prototype.buildGenerator = function(t3) {
    var e2 = this.cachedGenerators;
    if (t3 >= e2.length) for (var r2 = e2[e2.length - 1], n2 = this.field, o2 = e2.length; o2 <= t3; o2++) {
      var i2 = r2.multiply(new Tt(n2, Int32Array.from([1, n2.exp(o2 - 1 + n2.getGeneratorBase())])));
      e2.push(i2), r2 = i2;
    }
    return e2[t3];
  }, t2.prototype.encode = function(t3, e2) {
    if (0 === e2) throw new D("No error correction bytes");
    var r2 = t3.length - e2;
    if (r2 <= 0) throw new D("No data bytes provided");
    var n2 = this.buildGenerator(e2), o2 = new Int32Array(r2);
    P.arraycopy(t3, 0, o2, 0, r2);
    for (var i2 = new Tt(this.field, o2), a2 = (i2 = i2.multiplyByMonomial(e2, 1)).divide(n2)[1].getCoefficients(), s2 = e2 - a2.length, u2 = 0; u2 < s2; u2++) t3[r2 + u2] = 0;
    P.arraycopy(a2, 0, t3, r2 + s2, a2.length);
  }, t2;
}();
var Do = function() {
  function t2() {
  }
  return t2.applyMaskPenaltyRule1 = function(e2) {
    return t2.applyMaskPenaltyRule1Internal(e2, true) + t2.applyMaskPenaltyRule1Internal(e2, false);
  }, t2.applyMaskPenaltyRule2 = function(e2) {
    for (var r2 = 0, n2 = e2.getArray(), o2 = e2.getWidth(), i2 = e2.getHeight(), a2 = 0; a2 < i2 - 1; a2++) for (var s2 = n2[a2], u2 = 0; u2 < o2 - 1; u2++) {
      var c2 = s2[u2];
      c2 === s2[u2 + 1] && c2 === n2[a2 + 1][u2] && c2 === n2[a2 + 1][u2 + 1] && r2++;
    }
    return t2.N2 * r2;
  }, t2.applyMaskPenaltyRule3 = function(e2) {
    for (var r2 = 0, n2 = e2.getArray(), o2 = e2.getWidth(), i2 = e2.getHeight(), a2 = 0; a2 < i2; a2++) for (var s2 = 0; s2 < o2; s2++) {
      var u2 = n2[a2];
      s2 + 6 < o2 && 1 === u2[s2] && 0 === u2[s2 + 1] && 1 === u2[s2 + 2] && 1 === u2[s2 + 3] && 1 === u2[s2 + 4] && 0 === u2[s2 + 5] && 1 === u2[s2 + 6] && (t2.isWhiteHorizontal(u2, s2 - 4, s2) || t2.isWhiteHorizontal(u2, s2 + 7, s2 + 11)) && r2++, a2 + 6 < i2 && 1 === n2[a2][s2] && 0 === n2[a2 + 1][s2] && 1 === n2[a2 + 2][s2] && 1 === n2[a2 + 3][s2] && 1 === n2[a2 + 4][s2] && 0 === n2[a2 + 5][s2] && 1 === n2[a2 + 6][s2] && (t2.isWhiteVertical(n2, s2, a2 - 4, a2) || t2.isWhiteVertical(n2, s2, a2 + 7, a2 + 11)) && r2++;
    }
    return r2 * t2.N3;
  }, t2.isWhiteHorizontal = function(t3, e2, r2) {
    e2 = Math.max(e2, 0), r2 = Math.min(r2, t3.length);
    for (var n2 = e2; n2 < r2; n2++) if (1 === t3[n2]) return false;
    return true;
  }, t2.isWhiteVertical = function(t3, e2, r2, n2) {
    r2 = Math.max(r2, 0), n2 = Math.min(n2, t3.length);
    for (var o2 = r2; o2 < n2; o2++) if (1 === t3[o2][e2]) return false;
    return true;
  }, t2.applyMaskPenaltyRule4 = function(e2) {
    for (var r2 = 0, n2 = e2.getArray(), o2 = e2.getWidth(), i2 = e2.getHeight(), a2 = 0; a2 < i2; a2++) for (var s2 = n2[a2], u2 = 0; u2 < o2; u2++) 1 === s2[u2] && r2++;
    var c2 = e2.getHeight() * e2.getWidth();
    return Math.floor(10 * Math.abs(2 * r2 - c2) / c2) * t2.N4;
  }, t2.getDataMaskBit = function(t3, e2, r2) {
    var n2, o2;
    switch (t3) {
      case 0:
        n2 = r2 + e2 & 1;
        break;
      case 1:
        n2 = 1 & r2;
        break;
      case 2:
        n2 = e2 % 3;
        break;
      case 3:
        n2 = (r2 + e2) % 3;
        break;
      case 4:
        n2 = Math.floor(r2 / 2) + Math.floor(e2 / 3) & 1;
        break;
      case 5:
        n2 = (1 & (o2 = r2 * e2)) + o2 % 3;
        break;
      case 6:
        n2 = (1 & (o2 = r2 * e2)) + o2 % 3 & 1;
        break;
      case 7:
        n2 = (o2 = r2 * e2) % 3 + (r2 + e2 & 1) & 1;
        break;
      default:
        throw new D("Invalid mask pattern: " + t3);
    }
    return 0 === n2;
  }, t2.applyMaskPenaltyRule1Internal = function(e2, r2) {
    for (var n2 = 0, o2 = r2 ? e2.getHeight() : e2.getWidth(), i2 = r2 ? e2.getWidth() : e2.getHeight(), a2 = e2.getArray(), s2 = 0; s2 < o2; s2++) {
      for (var u2 = 0, c2 = -1, f2 = 0; f2 < i2; f2++) {
        var h2 = r2 ? a2[s2][f2] : a2[f2][s2];
        h2 === c2 ? u2++ : (u2 >= 5 && (n2 += t2.N1 + (u2 - 5)), u2 = 1, c2 = h2);
      }
      u2 >= 5 && (n2 += t2.N1 + (u2 - 5));
    }
    return n2;
  }, t2.N1 = 3, t2.N2 = 3, t2.N3 = 40, t2.N4 = 10, t2;
}();
var No = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Oo = function() {
  function t2(t3, e2) {
    this.width = t3, this.height = e2;
    for (var r2 = new Array(e2), n2 = 0; n2 !== e2; n2++) r2[n2] = new Uint8Array(t3);
    this.bytes = r2;
  }
  return t2.prototype.getHeight = function() {
    return this.height;
  }, t2.prototype.getWidth = function() {
    return this.width;
  }, t2.prototype.get = function(t3, e2) {
    return this.bytes[e2][t3];
  }, t2.prototype.getArray = function() {
    return this.bytes;
  }, t2.prototype.setNumber = function(t3, e2, r2) {
    this.bytes[e2][t3] = r2;
  }, t2.prototype.setBoolean = function(t3, e2, r2) {
    this.bytes[e2][t3] = r2 ? 1 : 0;
  }, t2.prototype.clear = function(t3) {
    var e2, r2;
    try {
      for (var n2 = No(this.bytes), o2 = n2.next(); !o2.done; o2 = n2.next()) {
        var i2 = o2.value;
        G.fill(i2, t3);
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        o2 && !o2.done && (r2 = n2.return) && r2.call(n2);
      } finally {
        if (e2) throw e2.error;
      }
    }
  }, t2.prototype.equals = function(e2) {
    if (!(e2 instanceof t2)) return false;
    var r2 = e2;
    if (this.width !== r2.width) return false;
    if (this.height !== r2.height) return false;
    for (var n2 = 0, o2 = this.height; n2 < o2; ++n2) for (var i2 = this.bytes[n2], a2 = r2.bytes[n2], s2 = 0, u2 = this.width; s2 < u2; ++s2) if (i2[s2] !== a2[s2]) return false;
    return true;
  }, t2.prototype.toString = function() {
    for (var t3 = new tt(), e2 = 0, r2 = this.height; e2 < r2; ++e2) {
      for (var n2 = this.bytes[e2], o2 = 0, i2 = this.width; o2 < i2; ++o2) switch (n2[o2]) {
        case 0:
          t3.append(" 0");
          break;
        case 1:
          t3.append(" 1");
          break;
        default:
          t3.append("  ");
      }
      t3.append("\n");
    }
    return t3.toString();
  }, t2;
}();
var Mo = function() {
  function t2() {
    this.maskPattern = -1;
  }
  return t2.prototype.getMode = function() {
    return this.mode;
  }, t2.prototype.getECLevel = function() {
    return this.ecLevel;
  }, t2.prototype.getVersion = function() {
    return this.version;
  }, t2.prototype.getMaskPattern = function() {
    return this.maskPattern;
  }, t2.prototype.getMatrix = function() {
    return this.matrix;
  }, t2.prototype.toString = function() {
    var t3 = new tt();
    return t3.append("<<\n"), t3.append(" mode: "), t3.append(this.mode ? this.mode.toString() : "null"), t3.append("\n ecLevel: "), t3.append(this.ecLevel ? this.ecLevel.toString() : "null"), t3.append("\n version: "), t3.append(this.version ? this.version.toString() : "null"), t3.append("\n maskPattern: "), t3.append(this.maskPattern.toString()), this.matrix ? (t3.append("\n matrix:\n"), t3.append(this.matrix.toString())) : t3.append("\n matrix: null\n"), t3.append(">>\n"), t3.toString();
  }, t2.prototype.setMode = function(t3) {
    this.mode = t3;
  }, t2.prototype.setECLevel = function(t3) {
    this.ecLevel = t3;
  }, t2.prototype.setVersion = function(t3) {
    this.version = t3;
  }, t2.prototype.setMaskPattern = function(t3) {
    this.maskPattern = t3;
  }, t2.prototype.setMatrix = function(t3) {
    this.matrix = t3;
  }, t2.isValidMaskPattern = function(e2) {
    return e2 >= 0 && e2 < t2.NUM_MASK_PATTERNS;
  }, t2.NUM_MASK_PATTERNS = 8, t2;
}();
var bo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Po = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return bo(e2, t2), e2.kind = "WriterException", e2;
}(T);
var Fo = function() {
  function t2() {
  }
  return t2.clearMatrix = function(t3) {
    t3.clear(255);
  }, t2.buildMatrix = function(e2, r2, n2, o2, i2) {
    t2.clearMatrix(i2), t2.embedBasicPatterns(n2, i2), t2.embedTypeInfo(r2, o2, i2), t2.maybeEmbedVersionInfo(n2, i2), t2.embedDataBits(e2, o2, i2);
  }, t2.embedBasicPatterns = function(e2, r2) {
    t2.embedPositionDetectionPatternsAndSeparators(r2), t2.embedDarkDotAtLeftBottomCorner(r2), t2.maybeEmbedPositionAdjustmentPatterns(e2, r2), t2.embedTimingPatterns(r2);
  }, t2.embedTypeInfo = function(e2, r2, n2) {
    var o2 = new q();
    t2.makeTypeInfoBits(e2, r2, o2);
    for (var i2 = 0, a2 = o2.getSize(); i2 < a2; ++i2) {
      var s2 = o2.get(o2.getSize() - 1 - i2), u2 = t2.TYPE_INFO_COORDINATES[i2], c2 = u2[0], f2 = u2[1];
      if (n2.setBoolean(c2, f2, s2), i2 < 8) {
        var h2 = n2.getWidth() - i2 - 1, l2 = 8;
        n2.setBoolean(h2, l2, s2);
      } else {
        h2 = 8, l2 = n2.getHeight() - 7 + (i2 - 8);
        n2.setBoolean(h2, l2, s2);
      }
    }
  }, t2.maybeEmbedVersionInfo = function(e2, r2) {
    if (!(e2.getVersionNumber() < 7)) {
      var n2 = new q();
      t2.makeVersionInfoBits(e2, n2);
      for (var o2 = 17, i2 = 0; i2 < 6; ++i2) for (var a2 = 0; a2 < 3; ++a2) {
        var s2 = n2.get(o2);
        o2--, r2.setBoolean(i2, r2.getHeight() - 11 + a2, s2), r2.setBoolean(r2.getHeight() - 11 + a2, i2, s2);
      }
    }
  }, t2.embedDataBits = function(e2, r2, n2) {
    for (var o2 = 0, i2 = -1, a2 = n2.getWidth() - 1, s2 = n2.getHeight() - 1; a2 > 0; ) {
      for (6 === a2 && (a2 -= 1); s2 >= 0 && s2 < n2.getHeight(); ) {
        for (var u2 = 0; u2 < 2; ++u2) {
          var c2 = a2 - u2;
          if (t2.isEmpty(n2.get(c2, s2))) {
            var f2 = void 0;
            o2 < e2.getSize() ? (f2 = e2.get(o2), ++o2) : f2 = false, 255 !== r2 && Do.getDataMaskBit(r2, c2, s2) && (f2 = !f2), n2.setBoolean(c2, s2, f2);
          }
        }
        s2 += i2;
      }
      s2 += i2 = -i2, a2 -= 2;
    }
    if (o2 !== e2.getSize()) throw new Po("Not all bits consumed: " + o2 + "/" + e2.getSize());
  }, t2.findMSBSet = function(t3) {
    return 32 - Y.numberOfLeadingZeros(t3);
  }, t2.calculateBCHCode = function(e2, r2) {
    if (0 === r2) throw new D("0 polynomial");
    var n2 = t2.findMSBSet(r2);
    for (e2 <<= n2 - 1; t2.findMSBSet(e2) >= n2; ) e2 ^= r2 << t2.findMSBSet(e2) - n2;
    return e2;
  }, t2.makeTypeInfoBits = function(e2, r2, n2) {
    if (!Mo.isValidMaskPattern(r2)) throw new Po("Invalid mask pattern");
    var o2 = e2.getBits() << 3 | r2;
    n2.appendBits(o2, 5);
    var i2 = t2.calculateBCHCode(o2, t2.TYPE_INFO_POLY);
    n2.appendBits(i2, 10);
    var a2 = new q();
    if (a2.appendBits(t2.TYPE_INFO_MASK_PATTERN, 15), n2.xor(a2), 15 !== n2.getSize()) throw new Po("should not happen but we got: " + n2.getSize());
  }, t2.makeVersionInfoBits = function(e2, r2) {
    r2.appendBits(e2.getVersionNumber(), 6);
    var n2 = t2.calculateBCHCode(e2.getVersionNumber(), t2.VERSION_INFO_POLY);
    if (r2.appendBits(n2, 12), 18 !== r2.getSize()) throw new Po("should not happen but we got: " + r2.getSize());
  }, t2.isEmpty = function(t3) {
    return 255 === t3;
  }, t2.embedTimingPatterns = function(e2) {
    for (var r2 = 8; r2 < e2.getWidth() - 8; ++r2) {
      var n2 = (r2 + 1) % 2;
      t2.isEmpty(e2.get(r2, 6)) && e2.setNumber(r2, 6, n2), t2.isEmpty(e2.get(6, r2)) && e2.setNumber(6, r2, n2);
    }
  }, t2.embedDarkDotAtLeftBottomCorner = function(t3) {
    if (0 === t3.get(8, t3.getHeight() - 8)) throw new Po();
    t3.setNumber(8, t3.getHeight() - 8, 1);
  }, t2.embedHorizontalSeparationPattern = function(e2, r2, n2) {
    for (var o2 = 0; o2 < 8; ++o2) {
      if (!t2.isEmpty(n2.get(e2 + o2, r2))) throw new Po();
      n2.setNumber(e2 + o2, r2, 0);
    }
  }, t2.embedVerticalSeparationPattern = function(e2, r2, n2) {
    for (var o2 = 0; o2 < 7; ++o2) {
      if (!t2.isEmpty(n2.get(e2, r2 + o2))) throw new Po();
      n2.setNumber(e2, r2 + o2, 0);
    }
  }, t2.embedPositionAdjustmentPattern = function(e2, r2, n2) {
    for (var o2 = 0; o2 < 5; ++o2) for (var i2 = t2.POSITION_ADJUSTMENT_PATTERN[o2], a2 = 0; a2 < 5; ++a2) n2.setNumber(e2 + a2, r2 + o2, i2[a2]);
  }, t2.embedPositionDetectionPattern = function(e2, r2, n2) {
    for (var o2 = 0; o2 < 7; ++o2) for (var i2 = t2.POSITION_DETECTION_PATTERN[o2], a2 = 0; a2 < 7; ++a2) n2.setNumber(e2 + a2, r2 + o2, i2[a2]);
  }, t2.embedPositionDetectionPatternsAndSeparators = function(e2) {
    var r2 = t2.POSITION_DETECTION_PATTERN[0].length;
    t2.embedPositionDetectionPattern(0, 0, e2), t2.embedPositionDetectionPattern(e2.getWidth() - r2, 0, e2), t2.embedPositionDetectionPattern(0, e2.getWidth() - r2, e2);
    t2.embedHorizontalSeparationPattern(0, 7, e2), t2.embedHorizontalSeparationPattern(e2.getWidth() - 8, 7, e2), t2.embedHorizontalSeparationPattern(0, e2.getWidth() - 8, e2);
    t2.embedVerticalSeparationPattern(7, 0, e2), t2.embedVerticalSeparationPattern(e2.getHeight() - 7 - 1, 0, e2), t2.embedVerticalSeparationPattern(7, e2.getHeight() - 7, e2);
  }, t2.maybeEmbedPositionAdjustmentPatterns = function(e2, r2) {
    if (!(e2.getVersionNumber() < 2)) for (var n2 = e2.getVersionNumber() - 1, o2 = t2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n2], i2 = 0, a2 = o2.length; i2 !== a2; i2++) {
      var s2 = o2[i2];
      if (s2 >= 0) for (var u2 = 0; u2 !== a2; u2++) {
        var c2 = o2[u2];
        c2 >= 0 && t2.isEmpty(r2.get(c2, s2)) && t2.embedPositionAdjustmentPattern(c2 - 2, s2 - 2, r2);
      }
    }
  }, t2.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])]), t2.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), t2.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -1, -1, -1, -1]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -1, -1]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -1, -1]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -1, -1]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -1, -1]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80, 106, -1, -1]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90, 118, -1, -1]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78, 104, 130, -1]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86, 114, 142, -1]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50, 76, 102, 128, 154]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54, 82, 110, 138, 166]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), t2.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from([8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8, 7]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]), Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])]), t2.VERSION_INFO_POLY = 7973, t2.TYPE_INFO_POLY = 1335, t2.TYPE_INFO_MASK_PATTERN = 21522, t2;
}();
var Lo = function() {
  function t2(t3, e2) {
    this.dataBytes = t3, this.errorCorrectionBytes = e2;
  }
  return t2.prototype.getDataBytes = function() {
    return this.dataBytes;
  }, t2.prototype.getErrorCorrectionBytes = function() {
    return this.errorCorrectionBytes;
  }, t2;
}();
var ko = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
!function() {
  function t2() {
  }
  t2.calculateMaskPenalty = function(t3) {
    return Do.applyMaskPenaltyRule1(t3) + Do.applyMaskPenaltyRule2(t3) + Do.applyMaskPenaltyRule3(t3) + Do.applyMaskPenaltyRule4(t3);
  }, t2.encode = function(e2, r2, n2) {
    void 0 === n2 && (n2 = null);
    var o2 = t2.DEFAULT_BYTE_MODE_ENCODING, i2 = null !== n2 && void 0 !== n2.get(Bo.CHARACTER_SET);
    i2 && (o2 = n2.get(Bo.CHARACTER_SET).toString());
    var a2 = this.chooseMode(e2, o2), s2 = new q();
    if (a2 === dn.BYTE && (i2 || t2.DEFAULT_BYTE_MODE_ENCODING !== o2)) {
      var u2 = Z.getCharacterSetECIByName(o2);
      void 0 !== u2 && this.appendECI(u2, s2);
    }
    this.appendModeInfo(a2, s2);
    var c2, f2 = new q();
    if (this.appendBytes(e2, a2, f2, o2), null !== n2 && void 0 !== n2.get(Bo.QR_VERSION)) {
      var h2 = Number.parseInt(n2.get(Bo.QR_VERSION).toString(), 10);
      c2 = on.getVersionForNumber(h2);
      var l2 = this.calculateBitsNeeded(a2, s2, f2, c2);
      if (!this.willFit(l2, c2, r2)) throw new Po("Data too big for requested version");
    } else c2 = this.recommendVersion(r2, a2, s2, f2);
    var d2 = new q();
    d2.appendBitArray(s2);
    var p2 = a2 === dn.BYTE ? f2.getSizeInBytes() : e2.length;
    this.appendLengthInfo(p2, c2, a2, d2), d2.appendBitArray(f2);
    var g2 = c2.getECBlocksForLevel(r2), w2 = c2.getTotalCodewords() - g2.getTotalECCodewords();
    this.terminateBits(w2, d2);
    var A2 = this.interleaveWithECBytes(d2, c2.getTotalCodewords(), w2, g2.getNumBlocks()), y2 = new Mo();
    y2.setECLevel(r2), y2.setMode(a2), y2.setVersion(c2);
    var C2 = c2.getDimensionForVersion(), E2 = new Oo(C2, C2), v2 = this.chooseMaskPattern(A2, r2, c2, E2);
    return y2.setMaskPattern(v2), Fo.buildMatrix(A2, r2, c2, v2, E2), y2.setMatrix(E2), y2;
  }, t2.recommendVersion = function(t3, e2, r2, n2) {
    var o2 = this.calculateBitsNeeded(e2, r2, n2, on.getVersionForNumber(1)), i2 = this.chooseVersion(o2, t3), a2 = this.calculateBitsNeeded(e2, r2, n2, i2);
    return this.chooseVersion(a2, t3);
  }, t2.calculateBitsNeeded = function(t3, e2, r2, n2) {
    return e2.getSize() + t3.getCharacterCountBits(n2) + r2.getSize();
  }, t2.getAlphanumericCode = function(e2) {
    return e2 < t2.ALPHANUMERIC_TABLE.length ? t2.ALPHANUMERIC_TABLE[e2] : -1;
  }, t2.chooseMode = function(e2, r2) {
    if (void 0 === r2 && (r2 = null), Z.SJIS.getName() === r2 && this.isOnlyDoubleByteKanji(e2)) return dn.KANJI;
    for (var n2 = false, o2 = false, i2 = 0, a2 = e2.length; i2 < a2; ++i2) {
      var s2 = e2.charAt(i2);
      if (t2.isDigit(s2)) n2 = true;
      else {
        if (-1 === this.getAlphanumericCode(s2.charCodeAt(0))) return dn.BYTE;
        o2 = true;
      }
    }
    return o2 ? dn.ALPHANUMERIC : n2 ? dn.NUMERIC : dn.BYTE;
  }, t2.isOnlyDoubleByteKanji = function(t3) {
    var e2;
    try {
      e2 = J.encode(t3, Z.SJIS);
    } catch (t4) {
      return false;
    }
    var r2 = e2.length;
    if (r2 % 2 != 0) return false;
    for (var n2 = 0; n2 < r2; n2 += 2) {
      var o2 = 255 & e2[n2];
      if ((o2 < 129 || o2 > 159) && (o2 < 224 || o2 > 235)) return false;
    }
    return true;
  }, t2.chooseMaskPattern = function(t3, e2, r2, n2) {
    for (var o2 = Number.MAX_SAFE_INTEGER, i2 = -1, a2 = 0; a2 < Mo.NUM_MASK_PATTERNS; a2++) {
      Fo.buildMatrix(t3, e2, r2, a2, n2);
      var s2 = this.calculateMaskPenalty(n2);
      s2 < o2 && (o2 = s2, i2 = a2);
    }
    return i2;
  }, t2.chooseVersion = function(e2, r2) {
    for (var n2 = 1; n2 <= 40; n2++) {
      var o2 = on.getVersionForNumber(n2);
      if (t2.willFit(e2, o2, r2)) return o2;
    }
    throw new Po("Data too big");
  }, t2.willFit = function(t3, e2, r2) {
    return e2.getTotalCodewords() - e2.getECBlocksForLevel(r2).getTotalECCodewords() >= (t3 + 7) / 8;
  }, t2.terminateBits = function(t3, e2) {
    var r2 = 8 * t3;
    if (e2.getSize() > r2) throw new Po("data bits cannot fit in the QR Code" + e2.getSize() + " > " + r2);
    for (var n2 = 0; n2 < 4 && e2.getSize() < r2; ++n2) e2.appendBit(false);
    var o2 = 7 & e2.getSize();
    if (o2 > 0) for (n2 = o2; n2 < 8; n2++) e2.appendBit(false);
    var i2 = t3 - e2.getSizeInBytes();
    for (n2 = 0; n2 < i2; ++n2) e2.appendBits(0 == (1 & n2) ? 236 : 17, 8);
    if (e2.getSize() !== r2) throw new Po("Bits size does not equal capacity");
  }, t2.getNumDataBytesAndNumECBytesForBlockID = function(t3, e2, r2, n2, o2, i2) {
    if (n2 >= r2) throw new Po("Block ID too large");
    var a2 = t3 % r2, s2 = r2 - a2, u2 = Math.floor(t3 / r2), c2 = u2 + 1, f2 = Math.floor(e2 / r2), h2 = f2 + 1, l2 = u2 - f2, d2 = c2 - h2;
    if (l2 !== d2) throw new Po("EC bytes mismatch");
    if (r2 !== s2 + a2) throw new Po("RS blocks mismatch");
    if (t3 !== (f2 + l2) * s2 + (h2 + d2) * a2) throw new Po("Total bytes mismatch");
    n2 < s2 ? (o2[0] = f2, i2[0] = l2) : (o2[0] = h2, i2[0] = d2);
  }, t2.interleaveWithECBytes = function(e2, r2, n2, o2) {
    var i2, a2, s2, u2;
    if (e2.getSizeInBytes() !== n2) throw new Po("Number of bits and data bytes does not match");
    for (var c2 = 0, f2 = 0, h2 = 0, l2 = new Array(), d2 = 0; d2 < o2; ++d2) {
      var p2 = new Int32Array(1), g2 = new Int32Array(1);
      t2.getNumDataBytesAndNumECBytesForBlockID(r2, n2, o2, d2, p2, g2);
      var w2 = p2[0], A2 = new Uint8Array(w2);
      e2.toBytes(8 * c2, A2, 0, w2);
      var y2 = t2.generateECBytes(A2, g2[0]);
      l2.push(new Lo(A2, y2)), f2 = Math.max(f2, w2), h2 = Math.max(h2, y2.length), c2 += p2[0];
    }
    if (n2 !== c2) throw new Po("Data bytes does not match offset");
    var C2 = new q();
    for (d2 = 0; d2 < f2; ++d2) try {
      for (var E2 = (i2 = void 0, ko(l2)), v2 = E2.next(); !v2.done; v2 = E2.next()) {
        d2 < (A2 = v2.value.getDataBytes()).length && C2.appendBits(A2[d2], 8);
      }
    } catch (t3) {
      i2 = { error: t3 };
    } finally {
      try {
        v2 && !v2.done && (a2 = E2.return) && a2.call(E2);
      } finally {
        if (i2) throw i2.error;
      }
    }
    for (d2 = 0; d2 < h2; ++d2) try {
      for (var m2 = (s2 = void 0, ko(l2)), I2 = m2.next(); !I2.done; I2 = m2.next()) {
        d2 < (y2 = I2.value.getErrorCorrectionBytes()).length && C2.appendBits(y2[d2], 8);
      }
    } catch (t3) {
      s2 = { error: t3 };
    } finally {
      try {
        I2 && !I2.done && (u2 = m2.return) && u2.call(m2);
      } finally {
        if (s2) throw s2.error;
      }
    }
    if (r2 !== C2.getSizeInBytes()) throw new Po("Interleaving error: " + r2 + " and " + C2.getSizeInBytes() + " differ.");
    return C2;
  }, t2.generateECBytes = function(t3, e2) {
    for (var r2 = t3.length, n2 = new Int32Array(r2 + e2), o2 = 0; o2 < r2; o2++) n2[o2] = 255 & t3[o2];
    new Ro(Dt.QR_CODE_FIELD_256).encode(n2, e2);
    var i2 = new Uint8Array(e2);
    for (o2 = 0; o2 < e2; o2++) i2[o2] = n2[r2 + o2];
    return i2;
  }, t2.appendModeInfo = function(t3, e2) {
    e2.appendBits(t3.getBits(), 4);
  }, t2.appendLengthInfo = function(t3, e2, r2, n2) {
    var o2 = r2.getCharacterCountBits(e2);
    if (t3 >= 1 << o2) throw new Po(t3 + " is bigger than " + ((1 << o2) - 1));
    n2.appendBits(t3, o2);
  }, t2.appendBytes = function(e2, r2, n2, o2) {
    switch (r2) {
      case dn.NUMERIC:
        t2.appendNumericBytes(e2, n2);
        break;
      case dn.ALPHANUMERIC:
        t2.appendAlphanumericBytes(e2, n2);
        break;
      case dn.BYTE:
        t2.append8BitBytes(e2, n2, o2);
        break;
      case dn.KANJI:
        t2.appendKanjiBytes(e2, n2);
        break;
      default:
        throw new Po("Invalid mode: " + r2);
    }
  }, t2.getDigit = function(t3) {
    return t3.charCodeAt(0) - 48;
  }, t2.isDigit = function(e2) {
    var r2 = t2.getDigit(e2);
    return r2 >= 0 && r2 <= 9;
  }, t2.appendNumericBytes = function(e2, r2) {
    for (var n2 = e2.length, o2 = 0; o2 < n2; ) {
      var i2 = t2.getDigit(e2.charAt(o2));
      if (o2 + 2 < n2) {
        var a2 = t2.getDigit(e2.charAt(o2 + 1)), s2 = t2.getDigit(e2.charAt(o2 + 2));
        r2.appendBits(100 * i2 + 10 * a2 + s2, 10), o2 += 3;
      } else if (o2 + 1 < n2) {
        a2 = t2.getDigit(e2.charAt(o2 + 1));
        r2.appendBits(10 * i2 + a2, 7), o2 += 2;
      } else r2.appendBits(i2, 4), o2++;
    }
  }, t2.appendAlphanumericBytes = function(e2, r2) {
    for (var n2 = e2.length, o2 = 0; o2 < n2; ) {
      var i2 = t2.getAlphanumericCode(e2.charCodeAt(o2));
      if (-1 === i2) throw new Po();
      if (o2 + 1 < n2) {
        var a2 = t2.getAlphanumericCode(e2.charCodeAt(o2 + 1));
        if (-1 === a2) throw new Po();
        r2.appendBits(45 * i2 + a2, 11), o2 += 2;
      } else r2.appendBits(i2, 6), o2++;
    }
  }, t2.append8BitBytes = function(t3, e2, r2) {
    var n2;
    try {
      n2 = J.encode(t3, r2);
    } catch (t4) {
      throw new Po(t4);
    }
    for (var o2 = 0, i2 = n2.length; o2 !== i2; o2++) {
      var a2 = n2[o2];
      e2.appendBits(a2, 8);
    }
  }, t2.appendKanjiBytes = function(t3, e2) {
    var r2;
    try {
      r2 = J.encode(t3, Z.SJIS);
    } catch (t4) {
      throw new Po(t4);
    }
    for (var n2 = r2.length, o2 = 0; o2 < n2; o2 += 2) {
      var i2 = (255 & r2[o2]) << 8 & 4294967295 | 255 & r2[o2 + 1], a2 = -1;
      if (i2 >= 33088 && i2 <= 40956 ? a2 = i2 - 33088 : i2 >= 57408 && i2 <= 60351 && (a2 = i2 - 49472), -1 === a2) throw new Po("Invalid byte sequence");
      var s2 = 192 * (a2 >> 8) + (255 & a2);
      e2.appendBits(s2, 13);
    }
  }, t2.appendECI = function(t3, e2) {
    e2.appendBits(dn.ECI.getBits(), 4), e2.appendBits(t3.getValue(), 8);
  }, t2.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1]), t2.DEFAULT_BYTE_MODE_ENCODING = Z.UTF8.getName();
}();
var Vo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2, n2, o2, i2, a2, s2, u2) {
    var c2 = t2.call(this, a2, s2) || this;
    if (c2.yuvData = e3, c2.dataWidth = r2, c2.dataHeight = n2, c2.left = o2, c2.top = i2, o2 + a2 > r2 || i2 + s2 > n2) throw new D("Crop rectangle does not fit within image data.");
    return u2 && c2.reverseHorizontal(a2, s2), c2;
  }
  Vo(e2, t2), e2.prototype.getRow = function(t3, e3) {
    if (t3 < 0 || t3 >= this.getHeight()) throw new D("Requested row is outside the image: " + t3);
    var r2 = this.getWidth();
    (null == e3 || e3.length < r2) && (e3 = new Uint8ClampedArray(r2));
    var n2 = (t3 + this.top) * this.dataWidth + this.left;
    return P.arraycopy(this.yuvData, n2, e3, 0, r2), e3;
  }, e2.prototype.getMatrix = function() {
    var t3 = this.getWidth(), e3 = this.getHeight();
    if (t3 === this.dataWidth && e3 === this.dataHeight) return this.yuvData;
    var r2 = t3 * e3, n2 = new Uint8ClampedArray(r2), o2 = this.top * this.dataWidth + this.left;
    if (t3 === this.dataWidth) return P.arraycopy(this.yuvData, o2, n2, 0, r2), n2;
    for (var i2 = 0; i2 < e3; i2++) {
      var a2 = i2 * t3;
      P.arraycopy(this.yuvData, o2, n2, a2, t3), o2 += this.dataWidth;
    }
    return n2;
  }, e2.prototype.isCropSupported = function() {
    return true;
  }, e2.prototype.crop = function(t3, r2, n2, o2) {
    return new e2(this.yuvData, this.dataWidth, this.dataHeight, this.left + t3, this.top + r2, n2, o2, false);
  }, e2.prototype.renderThumbnail = function() {
    for (var t3 = this.getWidth() / e2.THUMBNAIL_SCALE_FACTOR, r2 = this.getHeight() / e2.THUMBNAIL_SCALE_FACTOR, n2 = new Int32Array(t3 * r2), o2 = this.yuvData, i2 = this.top * this.dataWidth + this.left, a2 = 0; a2 < r2; a2++) {
      for (var s2 = a2 * t3, u2 = 0; u2 < t3; u2++) {
        var c2 = 255 & o2[i2 + u2 * e2.THUMBNAIL_SCALE_FACTOR];
        n2[s2 + u2] = 4278190080 | 65793 * c2;
      }
      i2 += this.dataWidth * e2.THUMBNAIL_SCALE_FACTOR;
    }
    return n2;
  }, e2.prototype.getThumbnailWidth = function() {
    return this.getWidth() / e2.THUMBNAIL_SCALE_FACTOR;
  }, e2.prototype.getThumbnailHeight = function() {
    return this.getHeight() / e2.THUMBNAIL_SCALE_FACTOR;
  }, e2.prototype.reverseHorizontal = function(t3, e3) {
    for (var r2 = this.yuvData, n2 = 0, o2 = this.top * this.dataWidth + this.left; n2 < e3; n2++, o2 += this.dataWidth) for (var i2 = o2 + t3 / 2, a2 = o2, s2 = o2 + t3 - 1; a2 < i2; a2++, s2--) {
      var u2 = r2[a2];
      r2[a2] = r2[s2], r2[s2] = u2;
    }
  }, e2.prototype.invert = function() {
    return new ft(this);
  }, e2.THUMBNAIL_SCALE_FACTOR = 2;
}(ut);
var xo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  function e2(e3, r2, n2, o2, i2, a2, s2) {
    var u2 = t2.call(this, r2, n2) || this;
    if (u2.dataWidth = o2, u2.dataHeight = i2, u2.left = a2, u2.top = s2, 4 === e3.BYTES_PER_ELEMENT) {
      for (var c2 = r2 * n2, f2 = new Uint8ClampedArray(c2), h2 = 0; h2 < c2; h2++) {
        var l2 = e3[h2], d2 = l2 >> 16 & 255, p2 = l2 >> 7 & 510, g2 = 255 & l2;
        f2[h2] = (d2 + p2 + g2) / 4 & 255;
      }
      u2.luminances = f2;
    } else u2.luminances = e3;
    if (void 0 === o2 && (u2.dataWidth = r2), void 0 === i2 && (u2.dataHeight = n2), void 0 === a2 && (u2.left = 0), void 0 === s2 && (u2.top = 0), u2.left + r2 > u2.dataWidth || u2.top + n2 > u2.dataHeight) throw new D("Crop rectangle does not fit within image data.");
    return u2;
  }
  xo(e2, t2), e2.prototype.getRow = function(t3, e3) {
    if (t3 < 0 || t3 >= this.getHeight()) throw new D("Requested row is outside the image: " + t3);
    var r2 = this.getWidth();
    (null == e3 || e3.length < r2) && (e3 = new Uint8ClampedArray(r2));
    var n2 = (t3 + this.top) * this.dataWidth + this.left;
    return P.arraycopy(this.luminances, n2, e3, 0, r2), e3;
  }, e2.prototype.getMatrix = function() {
    var t3 = this.getWidth(), e3 = this.getHeight();
    if (t3 === this.dataWidth && e3 === this.dataHeight) return this.luminances;
    var r2 = t3 * e3, n2 = new Uint8ClampedArray(r2), o2 = this.top * this.dataWidth + this.left;
    if (t3 === this.dataWidth) return P.arraycopy(this.luminances, o2, n2, 0, r2), n2;
    for (var i2 = 0; i2 < e3; i2++) {
      var a2 = i2 * t3;
      P.arraycopy(this.luminances, o2, n2, a2, t3), o2 += this.dataWidth;
    }
    return n2;
  }, e2.prototype.isCropSupported = function() {
    return true;
  }, e2.prototype.crop = function(t3, r2, n2, o2) {
    return new e2(this.luminances, n2, o2, this.dataWidth, this.dataHeight, this.left + t3, this.top + r2);
  }, e2.prototype.invert = function() {
    return new ft(this);
  };
}(ut);
var Go;
var Yo;
var qo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Uo = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return qo(e2, t2), e2.forName = function(t3) {
    return this.getCharacterSetECIByName(t3);
  }, e2;
}(Z);
var Ho = function() {
  function t2() {
  }
  return t2.ISO_8859_1 = Z.ISO8859_1, t2;
}();
(Go = function(t2, e2) {
  for (var r2 = 1, n2 = 0; n2 < 255; n2++) e2[n2] = r2, t2[r2] = n2, (r2 *= 2) >= 256 && (r2 ^= 301);
  return { LOG: t2, ALOG: e2 };
}([], [])).LOG, Go.ALOG, function(t2) {
  t2[t2.FORCE_NONE = 0] = "FORCE_NONE", t2[t2.FORCE_SQUARE = 1] = "FORCE_SQUARE", t2[t2.FORCE_RECTANGLE = 2] = "FORCE_RECTANGLE";
}(Yo || (Yo = {}));
var Wo;
var Qo = "[)>05";
var Ko = "[)>06";
var Xo = function() {
  function t2() {
  }
  return t2.prototype.getEncodingMode = function() {
    return 0;
  }, t2.prototype.encode = function(t3) {
    if (ci.determineConsecutiveDigitCount(t3.getMessage(), t3.pos) >= 2) t3.writeCodeword(this.encodeASCIIDigits(t3.getMessage().charCodeAt(t3.pos), t3.getMessage().charCodeAt(t3.pos + 1))), t3.pos += 2;
    else {
      var e2 = t3.getCurrentChar(), r2 = ci.lookAheadTest(t3.getMessage(), t3.pos, this.getEncodingMode());
      if (r2 !== this.getEncodingMode()) switch (r2) {
        case 5:
          return t3.writeCodeword(231), void t3.signalEncoderChange(5);
        case 1:
          return t3.writeCodeword(230), void t3.signalEncoderChange(1);
        case 3:
          t3.writeCodeword(238), t3.signalEncoderChange(3);
          break;
        case 2:
          t3.writeCodeword(239), t3.signalEncoderChange(2);
          break;
        case 4:
          t3.writeCodeword(240), t3.signalEncoderChange(4);
          break;
        default:
          throw new Error("Illegal mode: " + r2);
      }
      else ci.isExtendedASCII(e2) ? (t3.writeCodeword(235), t3.writeCodeword(e2 - 128 + 1), t3.pos++) : (t3.writeCodeword(e2 + 1), t3.pos++);
    }
  }, t2.prototype.encodeASCIIDigits = function(t3, e2) {
    if (ci.isDigit(t3) && ci.isDigit(e2)) return 10 * (t3 - 48) + (e2 - 48) + 130;
    throw new Error("not digits: " + t3 + e2);
  }, t2;
}();
var Zo = function() {
  function t2() {
  }
  return t2.prototype.getEncodingMode = function() {
    return 5;
  }, t2.prototype.encode = function(t3) {
    var e2 = new tt();
    for (e2.append(0); t3.hasMoreCharacters(); ) {
      var r2 = t3.getCurrentChar();
      if (e2.append(r2), t3.pos++, ci.lookAheadTest(t3.getMessage(), t3.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
        t3.signalEncoderChange(0);
        break;
      }
    }
    var n2 = e2.length() - 1, o2 = t3.getCodewordCount() + n2 + 1;
    t3.updateSymbolInfo(o2);
    var i2 = t3.getSymbolInfo().getDataCapacity() - o2 > 0;
    if (t3.hasMoreCharacters() || i2) if (n2 <= 249) e2.setCharAt(0, $.getCharAt(n2));
    else {
      if (!(n2 <= 1555)) throw new Error("Message length not in valid ranges: " + n2);
      e2.setCharAt(0, $.getCharAt(Math.floor(n2 / 250) + 249)), e2.insert(1, $.getCharAt(n2 % 250));
    }
    var a2 = 0;
    for (r2 = e2.length(); a2 < r2; a2++) t3.writeCodeword(this.randomize255State(e2.charAt(a2).charCodeAt(0), t3.getCodewordCount() + 1));
  }, t2.prototype.randomize255State = function(t3, e2) {
    var r2 = t3 + (149 * e2 % 255 + 1);
    return r2 <= 255 ? r2 : r2 - 256;
  }, t2;
}();
var jo = function() {
  function t2() {
  }
  return t2.prototype.getEncodingMode = function() {
    return 1;
  }, t2.prototype.encodeMaximal = function(t3) {
    for (var e2 = new tt(), r2 = 0, n2 = t3.pos, o2 = 0; t3.hasMoreCharacters(); ) {
      var i2 = t3.getCurrentChar();
      t3.pos++, r2 = this.encodeChar(i2, e2), e2.length() % 3 == 0 && (n2 = t3.pos, o2 = e2.length());
    }
    if (o2 !== e2.length()) {
      var a2 = Math.floor(e2.length() / 3 * 2), s2 = Math.floor(t3.getCodewordCount() + a2 + 1);
      t3.updateSymbolInfo(s2);
      var u2 = t3.getSymbolInfo().getDataCapacity() - s2, c2 = Math.floor(e2.length() % 3);
      (2 === c2 && 2 !== u2 || 1 === c2 && (r2 > 3 || 1 !== u2)) && (t3.pos = n2);
    }
    e2.length() > 0 && t3.writeCodeword(230), this.handleEOD(t3, e2);
  }, t2.prototype.encode = function(t3) {
    for (var e2 = new tt(); t3.hasMoreCharacters(); ) {
      var r2 = t3.getCurrentChar();
      t3.pos++;
      var n2 = this.encodeChar(r2, e2), o2 = 2 * Math.floor(e2.length() / 3), i2 = t3.getCodewordCount() + o2;
      t3.updateSymbolInfo(i2);
      var a2 = t3.getSymbolInfo().getDataCapacity() - i2;
      if (!t3.hasMoreCharacters()) {
        var s2 = new tt();
        for (e2.length() % 3 == 2 && 2 !== a2 && (n2 = this.backtrackOneCharacter(t3, e2, s2, n2)); e2.length() % 3 == 1 && (n2 > 3 || 1 !== a2); ) n2 = this.backtrackOneCharacter(t3, e2, s2, n2);
        break;
      }
      if (e2.length() % 3 == 0) {
        if (ci.lookAheadTest(t3.getMessage(), t3.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
          t3.signalEncoderChange(0);
          break;
        }
      }
    }
    this.handleEOD(t3, e2);
  }, t2.prototype.backtrackOneCharacter = function(t3, e2, r2, n2) {
    var o2 = e2.length(), i2 = e2.toString().substring(0, o2 - n2);
    e2.setLengthToZero(), e2.append(i2), t3.pos--;
    var a2 = t3.getCurrentChar();
    return n2 = this.encodeChar(a2, r2), t3.resetSymbolInfo(), n2;
  }, t2.prototype.writeNextTriplet = function(t3, e2) {
    t3.writeCodewords(this.encodeToCodewords(e2.toString()));
    var r2 = e2.toString().substring(3);
    e2.setLengthToZero(), e2.append(r2);
  }, t2.prototype.handleEOD = function(t3, e2) {
    var r2 = Math.floor(e2.length() / 3 * 2), n2 = e2.length() % 3, o2 = t3.getCodewordCount() + r2;
    t3.updateSymbolInfo(o2);
    var i2 = t3.getSymbolInfo().getDataCapacity() - o2;
    if (2 === n2) {
      for (e2.append("\0"); e2.length() >= 3; ) this.writeNextTriplet(t3, e2);
      t3.hasMoreCharacters() && t3.writeCodeword(254);
    } else if (1 === i2 && 1 === n2) {
      for (; e2.length() >= 3; ) this.writeNextTriplet(t3, e2);
      t3.hasMoreCharacters() && t3.writeCodeword(254), t3.pos--;
    } else {
      if (0 !== n2) throw new Error("Unexpected case. Please report!");
      for (; e2.length() >= 3; ) this.writeNextTriplet(t3, e2);
      (i2 > 0 || t3.hasMoreCharacters()) && t3.writeCodeword(254);
    }
    t3.signalEncoderChange(0);
  }, t2.prototype.encodeChar = function(t3, e2) {
    if (t3 === " ".charCodeAt(0)) return e2.append(3), 1;
    if (t3 >= "0".charCodeAt(0) && t3 <= "9".charCodeAt(0)) return e2.append(t3 - 48 + 4), 1;
    if (t3 >= "A".charCodeAt(0) && t3 <= "Z".charCodeAt(0)) return e2.append(t3 - 65 + 14), 1;
    if (t3 < " ".charCodeAt(0)) return e2.append(0), e2.append(t3), 2;
    if (t3 <= "/".charCodeAt(0)) return e2.append(1), e2.append(t3 - 33), 2;
    if (t3 <= "@".charCodeAt(0)) return e2.append(1), e2.append(t3 - 58 + 15), 2;
    if (t3 <= "_".charCodeAt(0)) return e2.append(1), e2.append(t3 - 91 + 22), 2;
    if (t3 <= 127) return e2.append(2), e2.append(t3 - 96), 2;
    e2.append("1");
    var r2 = 2;
    return r2 += this.encodeChar(t3 - 128, e2);
  }, t2.prototype.encodeToCodewords = function(t3) {
    var e2 = 1600 * t3.charCodeAt(0) + 40 * t3.charCodeAt(1) + t3.charCodeAt(2) + 1, r2 = e2 / 256, n2 = e2 % 256, o2 = new tt();
    return o2.append(r2), o2.append(n2), o2.toString();
  }, t2;
}();
var zo = function() {
  function t2() {
  }
  return t2.prototype.getEncodingMode = function() {
    return 4;
  }, t2.prototype.encode = function(t3) {
    for (var e2 = new tt(); t3.hasMoreCharacters(); ) {
      var r2 = t3.getCurrentChar();
      if (this.encodeChar(r2, e2), t3.pos++, e2.length() >= 4) {
        t3.writeCodewords(this.encodeToCodewords(e2.toString()));
        var n2 = e2.toString().substring(4);
        if (e2.setLengthToZero(), e2.append(n2), ci.lookAheadTest(t3.getMessage(), t3.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
          t3.signalEncoderChange(0);
          break;
        }
      }
    }
    e2.append($.getCharAt(31)), this.handleEOD(t3, e2);
  }, t2.prototype.handleEOD = function(t3, e2) {
    try {
      var r2 = e2.length();
      if (0 === r2) return;
      if (1 === r2) {
        t3.updateSymbolInfo();
        var n2 = t3.getSymbolInfo().getDataCapacity() - t3.getCodewordCount(), o2 = t3.getRemainingCharacters();
        if (o2 > n2 && (t3.updateSymbolInfo(t3.getCodewordCount() + 1), n2 = t3.getSymbolInfo().getDataCapacity() - t3.getCodewordCount()), o2 <= n2 && n2 <= 2) return;
      }
      if (r2 > 4) throw new Error("Count must not exceed 4");
      var i2 = r2 - 1, a2 = this.encodeToCodewords(e2.toString()), s2 = !t3.hasMoreCharacters() && i2 <= 2;
      if (i2 <= 2) t3.updateSymbolInfo(t3.getCodewordCount() + i2), (n2 = t3.getSymbolInfo().getDataCapacity() - t3.getCodewordCount()) >= 3 && (s2 = false, t3.updateSymbolInfo(t3.getCodewordCount() + a2.length));
      s2 ? (t3.resetSymbolInfo(), t3.pos -= i2) : t3.writeCodewords(a2);
    } finally {
      t3.signalEncoderChange(0);
    }
  }, t2.prototype.encodeChar = function(t3, e2) {
    t3 >= " ".charCodeAt(0) && t3 <= "?".charCodeAt(0) ? e2.append(t3) : t3 >= "@".charCodeAt(0) && t3 <= "^".charCodeAt(0) ? e2.append($.getCharAt(t3 - 64)) : ci.illegalCharacter($.getCharAt(t3));
  }, t2.prototype.encodeToCodewords = function(t3) {
    var e2 = t3.length;
    if (0 === e2) throw new Error("StringBuilder must not be empty");
    var r2 = (t3.charAt(0).charCodeAt(0) << 18) + ((e2 >= 2 ? t3.charAt(1).charCodeAt(0) : 0) << 12) + ((e2 >= 3 ? t3.charAt(2).charCodeAt(0) : 0) << 6) + (e2 >= 4 ? t3.charAt(3).charCodeAt(0) : 0), n2 = r2 >> 16 & 255, o2 = r2 >> 8 & 255, i2 = 255 & r2, a2 = new tt();
    return a2.append(n2), e2 >= 2 && a2.append(o2), e2 >= 3 && a2.append(i2), a2.toString();
  }, t2;
}();
var Jo = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var $o = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ti = function() {
  function t2(t3, e2, r2, n2, o2, i2, a2, s2) {
    void 0 === a2 && (a2 = 0), void 0 === s2 && (s2 = 0), this.rectangular = t3, this.dataCapacity = e2, this.errorCodewords = r2, this.matrixWidth = n2, this.matrixHeight = o2, this.dataRegions = i2, this.rsBlockData = a2, this.rsBlockError = s2;
  }
  return t2.lookup = function(t3, e2, r2, n2, o2) {
    var i2, a2;
    void 0 === e2 && (e2 = 0), void 0 === r2 && (r2 = null), void 0 === n2 && (n2 = null), void 0 === o2 && (o2 = true);
    try {
      for (var s2 = $o(ri), u2 = s2.next(); !u2.done; u2 = s2.next()) {
        var c2 = u2.value;
        if ((1 !== e2 || !c2.rectangular) && ((2 !== e2 || c2.rectangular) && (null == r2 || !(c2.getSymbolWidth() < r2.getWidth() || c2.getSymbolHeight() < r2.getHeight())) && (null == n2 || !(c2.getSymbolWidth() > n2.getWidth() || c2.getSymbolHeight() > n2.getHeight())) && t3 <= c2.dataCapacity)) return c2;
      }
    } catch (t4) {
      i2 = { error: t4 };
    } finally {
      try {
        u2 && !u2.done && (a2 = s2.return) && a2.call(s2);
      } finally {
        if (i2) throw i2.error;
      }
    }
    if (o2) throw new Error("Can't find a symbol arrangement that matches the message. Data codewords: " + t3);
    return null;
  }, t2.prototype.getHorizontalDataRegions = function() {
    switch (this.dataRegions) {
      case 1:
        return 1;
      case 2:
      case 4:
        return 2;
      case 16:
        return 4;
      case 36:
        return 6;
      default:
        throw new Error("Cannot handle this number of data regions");
    }
  }, t2.prototype.getVerticalDataRegions = function() {
    switch (this.dataRegions) {
      case 1:
      case 2:
        return 1;
      case 4:
        return 2;
      case 16:
        return 4;
      case 36:
        return 6;
      default:
        throw new Error("Cannot handle this number of data regions");
    }
  }, t2.prototype.getSymbolDataWidth = function() {
    return this.getHorizontalDataRegions() * this.matrixWidth;
  }, t2.prototype.getSymbolDataHeight = function() {
    return this.getVerticalDataRegions() * this.matrixHeight;
  }, t2.prototype.getSymbolWidth = function() {
    return this.getSymbolDataWidth() + 2 * this.getHorizontalDataRegions();
  }, t2.prototype.getSymbolHeight = function() {
    return this.getSymbolDataHeight() + 2 * this.getVerticalDataRegions();
  }, t2.prototype.getCodewordCount = function() {
    return this.dataCapacity + this.errorCodewords;
  }, t2.prototype.getInterleavedBlockCount = function() {
    return this.rsBlockData ? this.dataCapacity / this.rsBlockData : 1;
  }, t2.prototype.getDataCapacity = function() {
    return this.dataCapacity;
  }, t2.prototype.getErrorCodewords = function() {
    return this.errorCodewords;
  }, t2.prototype.getDataLengthForInterleavedBlock = function(t3) {
    return this.rsBlockData;
  }, t2.prototype.getErrorLengthForInterleavedBlock = function(t3) {
    return this.rsBlockError;
  }, t2;
}();
var ei = function(t2) {
  function e2() {
    return t2.call(this, false, 1558, 620, 22, 22, 36, -1, 62) || this;
  }
  return Jo(e2, t2), e2.prototype.getInterleavedBlockCount = function() {
    return 10;
  }, e2.prototype.getDataLengthForInterleavedBlock = function(t3) {
    return t3 <= 8 ? 156 : 155;
  }, e2;
}(ti);
var ri = [new ti(false, 3, 5, 8, 8, 1), new ti(false, 5, 7, 10, 10, 1), new ti(true, 5, 7, 16, 6, 1), new ti(false, 8, 10, 12, 12, 1), new ti(true, 10, 11, 14, 6, 2), new ti(false, 12, 12, 14, 14, 1), new ti(true, 16, 14, 24, 10, 1), new ti(false, 18, 14, 16, 16, 1), new ti(false, 22, 18, 18, 18, 1), new ti(true, 22, 18, 16, 10, 2), new ti(false, 30, 20, 20, 20, 1), new ti(true, 32, 24, 16, 14, 2), new ti(false, 36, 24, 22, 22, 1), new ti(false, 44, 28, 24, 24, 1), new ti(true, 49, 28, 22, 14, 2), new ti(false, 62, 36, 14, 14, 4), new ti(false, 86, 42, 16, 16, 4), new ti(false, 114, 48, 18, 18, 4), new ti(false, 144, 56, 20, 20, 4), new ti(false, 174, 68, 22, 22, 4), new ti(false, 204, 84, 24, 24, 4, 102, 42), new ti(false, 280, 112, 14, 14, 16, 140, 56), new ti(false, 368, 144, 16, 16, 16, 92, 36), new ti(false, 456, 192, 18, 18, 16, 114, 48), new ti(false, 576, 224, 20, 20, 16, 144, 56), new ti(false, 696, 272, 22, 22, 16, 174, 68), new ti(false, 816, 336, 24, 24, 16, 136, 56), new ti(false, 1050, 408, 18, 18, 36, 175, 68), new ti(false, 1304, 496, 20, 20, 36, 163, 62), new ei()];
var ni = function() {
  function t2(t3) {
    this.msg = t3, this.pos = 0, this.skipAtEnd = 0;
    for (var e2 = t3.split("").map(function(t4) {
      return t4.charCodeAt(0);
    }), r2 = new tt(), n2 = 0, o2 = e2.length; n2 < o2; n2++) {
      var i2 = String.fromCharCode(255 & e2[n2]);
      if ("?" === i2 && "?" !== t3.charAt(n2)) throw new Error("Message contains characters outside ISO-8859-1 encoding.");
      r2.append(i2);
    }
    this.msg = r2.toString(), this.shape = 0, this.codewords = new tt(), this.newEncoding = -1;
  }
  return t2.prototype.setSymbolShape = function(t3) {
    this.shape = t3;
  }, t2.prototype.setSizeConstraints = function(t3, e2) {
    this.minSize = t3, this.maxSize = e2;
  }, t2.prototype.getMessage = function() {
    return this.msg;
  }, t2.prototype.setSkipAtEnd = function(t3) {
    this.skipAtEnd = t3;
  }, t2.prototype.getCurrentChar = function() {
    return this.msg.charCodeAt(this.pos);
  }, t2.prototype.getCurrent = function() {
    return this.msg.charCodeAt(this.pos);
  }, t2.prototype.getCodewords = function() {
    return this.codewords;
  }, t2.prototype.writeCodewords = function(t3) {
    this.codewords.append(t3);
  }, t2.prototype.writeCodeword = function(t3) {
    this.codewords.append(t3);
  }, t2.prototype.getCodewordCount = function() {
    return this.codewords.length();
  }, t2.prototype.getNewEncoding = function() {
    return this.newEncoding;
  }, t2.prototype.signalEncoderChange = function(t3) {
    this.newEncoding = t3;
  }, t2.prototype.resetEncoderSignal = function() {
    this.newEncoding = -1;
  }, t2.prototype.hasMoreCharacters = function() {
    return this.pos < this.getTotalMessageCharCount();
  }, t2.prototype.getTotalMessageCharCount = function() {
    return this.msg.length - this.skipAtEnd;
  }, t2.prototype.getRemainingCharacters = function() {
    return this.getTotalMessageCharCount() - this.pos;
  }, t2.prototype.getSymbolInfo = function() {
    return this.symbolInfo;
  }, t2.prototype.updateSymbolInfo = function(t3) {
    void 0 === t3 && (t3 = this.getCodewordCount()), (null == this.symbolInfo || t3 > this.symbolInfo.getDataCapacity()) && (this.symbolInfo = ti.lookup(t3, this.shape, this.minSize, this.maxSize, true));
  }, t2.prototype.resetSymbolInfo = function() {
    this.symbolInfo = null;
  }, t2;
}();
var oi = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var ii = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return oi(e2, t2), e2.prototype.getEncodingMode = function() {
    return 3;
  }, e2.prototype.encode = function(t3) {
    for (var e3 = new tt(); t3.hasMoreCharacters(); ) {
      var r2 = t3.getCurrentChar();
      if (t3.pos++, this.encodeChar(r2, e3), e3.length() % 3 == 0) {
        if (this.writeNextTriplet(t3, e3), ci.lookAheadTest(t3.getMessage(), t3.pos, this.getEncodingMode()) !== this.getEncodingMode()) {
          t3.signalEncoderChange(0);
          break;
        }
      }
    }
    this.handleEOD(t3, e3);
  }, e2.prototype.encodeChar = function(t3, e3) {
    switch (t3) {
      case 13:
        e3.append(0);
        break;
      case "*".charCodeAt(0):
        e3.append(1);
        break;
      case ">".charCodeAt(0):
        e3.append(2);
        break;
      case " ".charCodeAt(0):
        e3.append(3);
        break;
      default:
        t3 >= "0".charCodeAt(0) && t3 <= "9".charCodeAt(0) ? e3.append(t3 - 48 + 4) : t3 >= "A".charCodeAt(0) && t3 <= "Z".charCodeAt(0) ? e3.append(t3 - 65 + 14) : ci.illegalCharacter($.getCharAt(t3));
    }
    return 1;
  }, e2.prototype.handleEOD = function(t3, e3) {
    t3.updateSymbolInfo();
    var r2 = t3.getSymbolInfo().getDataCapacity() - t3.getCodewordCount(), n2 = e3.length();
    t3.pos -= n2, (t3.getRemainingCharacters() > 1 || r2 > 1 || t3.getRemainingCharacters() !== r2) && t3.writeCodeword(254), t3.getNewEncoding() < 0 && t3.signalEncoderChange(0);
  }, e2;
}(jo);
var ai = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var si = function(t2) {
  function e2() {
    return null !== t2 && t2.apply(this, arguments) || this;
  }
  return ai(e2, t2), e2.prototype.getEncodingMode = function() {
    return 2;
  }, e2.prototype.encodeChar = function(t3, e3) {
    if (t3 === " ".charCodeAt(0)) return e3.append(3), 1;
    if (t3 >= "0".charCodeAt(0) && t3 <= "9".charCodeAt(0)) return e3.append(t3 - 48 + 4), 1;
    if (t3 >= "a".charCodeAt(0) && t3 <= "z".charCodeAt(0)) return e3.append(t3 - 97 + 14), 1;
    if (t3 < " ".charCodeAt(0)) return e3.append(0), e3.append(t3), 2;
    if (t3 <= "/".charCodeAt(0)) return e3.append(1), e3.append(t3 - 33), 2;
    if (t3 <= "@".charCodeAt(0)) return e3.append(1), e3.append(t3 - 58 + 15), 2;
    if (t3 >= "[".charCodeAt(0) && t3 <= "_".charCodeAt(0)) return e3.append(1), e3.append(t3 - 91 + 22), 2;
    if (t3 === "`".charCodeAt(0)) return e3.append(2), e3.append(0), 2;
    if (t3 <= "Z".charCodeAt(0)) return e3.append(2), e3.append(t3 - 65 + 1), 2;
    if (t3 <= 127) return e3.append(2), e3.append(t3 - 123 + 27), 2;
    e3.append("1");
    var r2 = 2;
    return r2 += this.encodeChar(t3 - 128, e3);
  }, e2;
}(jo);
var ui = function() {
  function t2() {
  }
  return t2.randomize253State = function(t3) {
    var e2 = 129 + (149 * t3 % 253 + 1);
    return e2 <= 254 ? e2 : e2 - 254;
  }, t2.encodeHighLevel = function(t3, e2, r2, n2, o2) {
    void 0 === e2 && (e2 = 0), void 0 === r2 && (r2 = null), void 0 === n2 && (n2 = null), void 0 === o2 && (o2 = false);
    var i2 = new jo(), a2 = [new Xo(), i2, new si(), new ii(), new zo(), new Zo()], s2 = new ni(t3);
    s2.setSymbolShape(e2), s2.setSizeConstraints(r2, n2), t3.startsWith(Qo) && t3.endsWith("") ? (s2.writeCodeword(236), s2.setSkipAtEnd(2), s2.pos += 7) : t3.startsWith(Ko) && t3.endsWith("") && (s2.writeCodeword(237), s2.setSkipAtEnd(2), s2.pos += 7);
    var u2 = 0;
    for (o2 && (i2.encodeMaximal(s2), u2 = s2.getNewEncoding(), s2.resetEncoderSignal()); s2.hasMoreCharacters(); ) a2[u2].encode(s2), s2.getNewEncoding() >= 0 && (u2 = s2.getNewEncoding(), s2.resetEncoderSignal());
    var c2 = s2.getCodewordCount();
    s2.updateSymbolInfo();
    var f2 = s2.getSymbolInfo().getDataCapacity();
    c2 < f2 && 0 !== u2 && 5 !== u2 && 4 !== u2 && s2.writeCodeword("þ");
    var h2 = s2.getCodewords();
    for (h2.length() < f2 && h2.append(129); h2.length() < f2; ) h2.append(this.randomize253State(h2.length() + 1));
    return s2.getCodewords().toString();
  }, t2.lookAheadTest = function(t3, e2, r2) {
    var n2 = this.lookAheadTestIntern(t3, e2, r2);
    if (3 === r2 && 3 === n2) {
      for (var o2 = Math.min(e2 + 3, t3.length), i2 = e2; i2 < o2; i2++) if (!this.isNativeX12(t3.charCodeAt(i2))) return 0;
    } else if (4 === r2 && 4 === n2) {
      for (o2 = Math.min(e2 + 4, t3.length), i2 = e2; i2 < o2; i2++) if (!this.isNativeEDIFACT(t3.charCodeAt(i2))) return 0;
    }
    return n2;
  }, t2.lookAheadTestIntern = function(t3, e2, r2) {
    if (e2 >= t3.length) return r2;
    var n2;
    0 === r2 ? n2 = [0, 1, 1, 1, 1, 1.25] : (n2 = [1, 2, 2, 2, 2, 2.25])[r2] = 0;
    for (var o2 = 0, i2 = new Uint8Array(6), a2 = []; ; ) {
      if (e2 + o2 === t3.length) {
        G.fill(i2, 0), G.fill(a2, 0);
        var s2 = this.findMinimums(n2, a2, Y.MAX_VALUE, i2), u2 = this.getMinimumCount(i2);
        if (a2[0] === s2) return 0;
        if (1 === u2) {
          if (i2[5] > 0) return 5;
          if (i2[4] > 0) return 4;
          if (i2[2] > 0) return 2;
          if (i2[3] > 0) return 3;
        }
        return 1;
      }
      var c2 = t3.charCodeAt(e2 + o2);
      if (o2++, this.isDigit(c2) ? n2[0] += 0.5 : this.isExtendedASCII(c2) ? (n2[0] = Math.ceil(n2[0]), n2[0] += 2) : (n2[0] = Math.ceil(n2[0]), n2[0]++), this.isNativeC40(c2) ? n2[1] += 2 / 3 : this.isExtendedASCII(c2) ? n2[1] += 8 / 3 : n2[1] += 4 / 3, this.isNativeText(c2) ? n2[2] += 2 / 3 : this.isExtendedASCII(c2) ? n2[2] += 8 / 3 : n2[2] += 4 / 3, this.isNativeX12(c2) ? n2[3] += 2 / 3 : this.isExtendedASCII(c2) ? n2[3] += 13 / 3 : n2[3] += 10 / 3, this.isNativeEDIFACT(c2) ? n2[4] += 3 / 4 : this.isExtendedASCII(c2) ? n2[4] += 4.25 : n2[4] += 3.25, this.isSpecialB256(c2) ? n2[5] += 4 : n2[5]++, o2 >= 4) {
        if (G.fill(i2, 0), G.fill(a2, 0), this.findMinimums(n2, a2, Y.MAX_VALUE, i2), a2[0] < this.min(a2[5], a2[1], a2[2], a2[3], a2[4])) return 0;
        if (a2[5] < a2[0] || a2[5] + 1 < this.min(a2[1], a2[2], a2[3], a2[4])) return 5;
        if (a2[4] + 1 < this.min(a2[5], a2[1], a2[2], a2[3], a2[0])) return 4;
        if (a2[2] + 1 < this.min(a2[5], a2[1], a2[4], a2[3], a2[0])) return 2;
        if (a2[3] + 1 < this.min(a2[5], a2[1], a2[4], a2[2], a2[0])) return 3;
        if (a2[1] + 1 < this.min(a2[0], a2[5], a2[4], a2[2])) {
          if (a2[1] < a2[3]) return 1;
          if (a2[1] === a2[3]) {
            for (var f2 = e2 + o2 + 1; f2 < t3.length; ) {
              var h2 = t3.charCodeAt(f2);
              if (this.isX12TermSep(h2)) return 3;
              if (!this.isNativeX12(h2)) break;
              f2++;
            }
            return 1;
          }
        }
      }
    }
  }, t2.min = function(t3, e2, r2, n2, o2) {
    var i2 = Math.min(t3, Math.min(e2, Math.min(r2, n2)));
    return void 0 === o2 ? i2 : Math.min(i2, o2);
  }, t2.findMinimums = function(t3, e2, r2, n2) {
    for (var o2 = 0; o2 < 6; o2++) {
      var i2 = e2[o2] = Math.ceil(t3[o2]);
      r2 > i2 && (r2 = i2, G.fill(n2, 0)), r2 === i2 && (n2[o2] = n2[o2] + 1);
    }
    return r2;
  }, t2.getMinimumCount = function(t3) {
    for (var e2 = 0, r2 = 0; r2 < 6; r2++) e2 += t3[r2];
    return e2 || 0;
  }, t2.isDigit = function(t3) {
    return t3 >= "0".charCodeAt(0) && t3 <= "9".charCodeAt(0);
  }, t2.isExtendedASCII = function(t3) {
    return t3 >= 128 && t3 <= 255;
  }, t2.isNativeC40 = function(t3) {
    return t3 === " ".charCodeAt(0) || t3 >= "0".charCodeAt(0) && t3 <= "9".charCodeAt(0) || t3 >= "A".charCodeAt(0) && t3 <= "Z".charCodeAt(0);
  }, t2.isNativeText = function(t3) {
    return t3 === " ".charCodeAt(0) || t3 >= "0".charCodeAt(0) && t3 <= "9".charCodeAt(0) || t3 >= "a".charCodeAt(0) && t3 <= "z".charCodeAt(0);
  }, t2.isNativeX12 = function(t3) {
    return this.isX12TermSep(t3) || t3 === " ".charCodeAt(0) || t3 >= "0".charCodeAt(0) && t3 <= "9".charCodeAt(0) || t3 >= "A".charCodeAt(0) && t3 <= "Z".charCodeAt(0);
  }, t2.isX12TermSep = function(t3) {
    return 13 === t3 || t3 === "*".charCodeAt(0) || t3 === ">".charCodeAt(0);
  }, t2.isNativeEDIFACT = function(t3) {
    return t3 >= " ".charCodeAt(0) && t3 <= "^".charCodeAt(0);
  }, t2.isSpecialB256 = function(t3) {
    return false;
  }, t2.determineConsecutiveDigitCount = function(t3, e2) {
    void 0 === e2 && (e2 = 0);
    for (var r2 = t3.length, n2 = e2; n2 < r2 && this.isDigit(t3.charCodeAt(n2)); ) n2++;
    return n2 - e2;
  }, t2.illegalCharacter = function(t3) {
    var e2 = Y.toHexString(t3.charCodeAt(0));
    throw e2 = "0000".substring(0, 4 - e2.length) + e2, new Error("Illegal character: " + t3 + " (0x" + e2 + ")");
  }, t2;
}();
var ci = ui;
var fi = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var hi = function() {
  function t2(t3) {
    this.charset = t3, this.name = t3.name;
  }
  return t2.prototype.canEncode = function(t3) {
    try {
      return null != J.encode(t3, this.charset);
    } catch (t4) {
      return false;
    }
  }, t2;
}();
var li = function() {
  function t2(t3, e2, r2) {
    var n2, o2, i2, a2, s2, u2;
    this.ENCODERS = ["IBM437", "ISO-8859-2", "ISO-8859-3", "ISO-8859-4", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8", "ISO-8859-9", "ISO-8859-10", "ISO-8859-11", "ISO-8859-13", "ISO-8859-14", "ISO-8859-15", "ISO-8859-16", "windows-1250", "windows-1251", "windows-1252", "windows-1256", "Shift_JIS"].map(function(t4) {
      return new hi(Uo.forName(t4));
    }), this.encoders = [];
    var c2 = [];
    c2.push(new hi(Ho.ISO_8859_1));
    for (var f2 = null != e2 && e2.name.startsWith("UTF"), h2 = 0; h2 < t3.length; h2++) {
      var l2 = false;
      try {
        for (var d2 = (n2 = void 0, fi(c2)), p2 = d2.next(); !p2.done; p2 = d2.next()) {
          var g2 = p2.value, w2 = t3.charAt(h2);
          if (w2.charCodeAt(0) === r2 || g2.canEncode(w2)) {
            l2 = true;
            break;
          }
        }
      } catch (t4) {
        n2 = { error: t4 };
      } finally {
        try {
          p2 && !p2.done && (o2 = d2.return) && o2.call(d2);
        } finally {
          if (n2) throw n2.error;
        }
      }
      if (!l2) try {
        for (var A2 = (i2 = void 0, fi(this.ENCODERS)), y2 = A2.next(); !y2.done; y2 = A2.next()) {
          if ((g2 = y2.value).canEncode(t3.charAt(h2))) {
            c2.push(g2), l2 = true;
            break;
          }
        }
      } catch (t4) {
        i2 = { error: t4 };
      } finally {
        try {
          y2 && !y2.done && (a2 = A2.return) && a2.call(A2);
        } finally {
          if (i2) throw i2.error;
        }
      }
      l2 || (f2 = true);
    }
    if (1 !== c2.length || f2) {
      this.encoders = [];
      var C2 = 0;
      try {
        for (var E2 = fi(c2), v2 = E2.next(); !v2.done; v2 = E2.next()) {
          g2 = v2.value;
          this.encoders[C2++] = g2;
        }
      } catch (t4) {
        s2 = { error: t4 };
      } finally {
        try {
          v2 && !v2.done && (u2 = E2.return) && u2.call(E2);
        } finally {
          if (s2) throw s2.error;
        }
      }
    } else this.encoders = [c2[0]];
    var m2 = -1;
    if (null != e2) {
      for (h2 = 0; h2 < this.encoders.length; h2++) if (null != this.encoders[h2] && e2.name === this.encoders[h2].name) {
        m2 = h2;
        break;
      }
    }
    this.priorityEncoderIndex = m2;
  }
  return t2.prototype.length = function() {
    return this.encoders.length;
  }, t2.prototype.getCharsetName = function(t3) {
    if (!(t3 < this.length())) throw new Error("index must be less than length");
    return this.encoders[t3].name;
  }, t2.prototype.getCharset = function(t3) {
    if (!(t3 < this.length())) throw new Error("index must be less than length");
    return this.encoders[t3].charset;
  }, t2.prototype.getECIValue = function(t3) {
    return this.encoders[t3].charset.getValueIdentifier();
  }, t2.prototype.getPriorityEncoderIndex = function() {
    return this.priorityEncoderIndex;
  }, t2.prototype.canEncode = function(t3, e2) {
    if (!(e2 < this.length())) throw new Error("index must be less than length");
    return true;
  }, t2.prototype.encode = function(t3, e2) {
    if (!(e2 < this.length())) throw new Error("index must be less than length");
    return J.encode($.getCharAt(t3), this.encoders[e2].name);
  }, t2;
}();
var di = function() {
  function t2(t3, e2, r2) {
    this.fnc1 = r2;
    var n2 = new li(t3, e2, r2);
    if (1 === n2.length()) for (var o2 = 0; o2 < this.bytes.length; o2++) {
      var i2 = t3.charAt(o2).charCodeAt(0);
      this.bytes[o2] = i2 === r2 ? 1e3 : i2;
    }
    else this.bytes = this.encodeMinimally(t3, n2, r2);
  }
  return t2.prototype.getFNC1Character = function() {
    return this.fnc1;
  }, t2.prototype.length = function() {
    return this.bytes.length;
  }, t2.prototype.haveNCharacters = function(t3, e2) {
    if (t3 + e2 - 1 >= this.bytes.length) return false;
    for (var r2 = 0; r2 < e2; r2++) if (this.isECI(t3 + r2)) return false;
    return true;
  }, t2.prototype.charAt = function(t3) {
    if (t3 < 0 || t3 >= this.length()) throw new Error("" + t3);
    if (this.isECI(t3)) throw new Error("value at " + t3 + " is not a character but an ECI");
    return this.isFNC1(t3) ? this.fnc1 : this.bytes[t3];
  }, t2.prototype.subSequence = function(t3, e2) {
    if (t3 < 0 || t3 > e2 || e2 > this.length()) throw new Error("" + t3);
    for (var r2 = new tt(), n2 = t3; n2 < e2; n2++) {
      if (this.isECI(n2)) throw new Error("value at " + n2 + " is not a character but an ECI");
      r2.append(this.charAt(n2));
    }
    return r2.toString();
  }, t2.prototype.isECI = function(t3) {
    if (t3 < 0 || t3 >= this.length()) throw new Error("" + t3);
    return this.bytes[t3] > 255 && this.bytes[t3] <= 999;
  }, t2.prototype.isFNC1 = function(t3) {
    if (t3 < 0 || t3 >= this.length()) throw new Error("" + t3);
    return 1e3 === this.bytes[t3];
  }, t2.prototype.getECIValue = function(t3) {
    if (t3 < 0 || t3 >= this.length()) throw new Error("" + t3);
    if (!this.isECI(t3)) throw new Error("value at " + t3 + " is not an ECI but a character");
    return this.bytes[t3] - 256;
  }, t2.prototype.addEdge = function(t3, e2, r2) {
    (null == t3[e2][r2.encoderIndex] || t3[e2][r2.encoderIndex].cachedTotalSize > r2.cachedTotalSize) && (t3[e2][r2.encoderIndex] = r2);
  }, t2.prototype.addEdges = function(t3, e2, r2, n2, o2, i2) {
    var a2 = t3.charAt(n2).charCodeAt(0), s2 = 0, u2 = e2.length();
    e2.getPriorityEncoderIndex() >= 0 && (a2 === i2 || e2.canEncode(a2, e2.getPriorityEncoderIndex())) && (u2 = (s2 = e2.getPriorityEncoderIndex()) + 1);
    for (var c2 = s2; c2 < u2; c2++) (a2 === i2 || e2.canEncode(a2, c2)) && this.addEdge(r2, n2 + 1, new pi(a2, e2, c2, o2, i2));
  }, t2.prototype.encodeMinimally = function(t3, e2, r2) {
    var n2 = t3.length, o2 = new pi[n2 + 1][e2.length()]();
    this.addEdges(t3, e2, o2, 0, null, r2);
    for (var i2 = 1; i2 <= n2; i2++) {
      for (var a2 = 0; a2 < e2.length(); a2++) null != o2[i2][a2] && i2 < n2 && this.addEdges(t3, e2, o2, i2, o2[i2][a2], r2);
      for (a2 = 0; a2 < e2.length(); a2++) o2[i2 - 1][a2] = null;
    }
    var s2 = -1, u2 = Y.MAX_VALUE;
    for (a2 = 0; a2 < e2.length(); a2++) if (null != o2[n2][a2]) {
      var c2 = o2[n2][a2];
      c2.cachedTotalSize < u2 && (u2 = c2.cachedTotalSize, s2 = a2);
    }
    if (s2 < 0) throw new Error('Failed to encode "' + t3 + '"');
    for (var f2 = [], h2 = o2[n2][s2]; null != h2; ) {
      if (h2.isFNC1()) f2.unshift(1e3);
      else {
        var l2 = e2.encode(h2.c, h2.encoderIndex);
        for (i2 = l2.length - 1; i2 >= 0; i2--) f2.unshift(255 & l2[i2]);
      }
      (null === h2.previous ? 0 : h2.previous.encoderIndex) !== h2.encoderIndex && f2.unshift(256 + e2.getECIValue(h2.encoderIndex)), h2 = h2.previous;
    }
    var d2 = [];
    for (i2 = 0; i2 < d2.length; i2++) d2[i2] = f2[i2];
    return d2;
  }, t2;
}();
var pi = function() {
  function t2(t3, e2, r2, n2, o2) {
    this.c = t3, this.encoderSet = e2, this.encoderIndex = r2, this.previous = n2, this.fnc1 = o2, this.c = t3 === o2 ? 1e3 : t3;
    var i2 = this.isFNC1() ? 1 : e2.encode(t3, r2).length;
    (null === n2 ? 0 : n2.encoderIndex) !== r2 && (i2 += 3), null != n2 && (i2 += n2.cachedTotalSize), this.cachedTotalSize = i2;
  }
  return t2.prototype.isFNC1 = function() {
    return 1e3 === this.c;
  }, t2;
}();
var gi = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
!function(t2) {
  t2[t2.ASCII = 0] = "ASCII", t2[t2.C40 = 1] = "C40", t2[t2.TEXT = 2] = "TEXT", t2[t2.X12 = 3] = "X12", t2[t2.EDF = 4] = "EDF", t2[t2.B256 = 5] = "B256";
}(Wo || (Wo = {})), function(t2) {
  function e2(e3, r2, n2, o2, i2) {
    var a2 = t2.call(this, e3, r2, n2) || this;
    return a2.shape = o2, a2.macroId = i2, a2;
  }
  gi(e2, t2), e2.prototype.getMacroId = function() {
    return this.macroId;
  }, e2.prototype.getShapeHint = function() {
    return this.shape;
  };
}(di);
var wi = function() {
  function t2() {
  }
  return t2.prototype.isCompact = function() {
    return this.compact;
  }, t2.prototype.setCompact = function(t3) {
    this.compact = t3;
  }, t2.prototype.getSize = function() {
    return this.size;
  }, t2.prototype.setSize = function(t3) {
    this.size = t3;
  }, t2.prototype.getLayers = function() {
    return this.layers;
  }, t2.prototype.setLayers = function(t3) {
    this.layers = t3;
  }, t2.prototype.getCodeWords = function() {
    return this.codeWords;
  }, t2.prototype.setCodeWords = function(t3) {
    this.codeWords = t3;
  }, t2.prototype.getMatrix = function() {
    return this.matrix;
  }, t2.prototype.setMatrix = function(t3) {
    this.matrix = t3;
  }, t2;
}();
var Ai = function() {
  function t2() {
  }
  return t2.singletonList = function(t3) {
    return [t3];
  }, t2.min = function(t3, e2) {
    return t3.sort(e2)[0];
  }, t2;
}();
var yi = function() {
  function t2(t3) {
    this.previous = t3;
  }
  return t2.prototype.getPrevious = function() {
    return this.previous;
  }, t2;
}();
var Ci = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var Ei = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3) || this;
    return o2.value = r2, o2.bitCount = n2, o2;
  }
  return Ci(e2, t2), e2.prototype.appendTo = function(t3, e3) {
    t3.appendBits(this.value, this.bitCount);
  }, e2.prototype.add = function(t3, r2) {
    return new e2(this, t3, r2);
  }, e2.prototype.addBinaryShift = function(t3, r2) {
    return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new e2(this, t3, r2);
  }, e2.prototype.toString = function() {
    var t3 = this.value & (1 << this.bitCount) - 1;
    return t3 |= 1 << this.bitCount, "<" + Y.toBinaryString(t3 | 1 << this.bitCount).substring(1) + ">";
  }, e2;
}(yi);
var vi = /* @__PURE__ */ function() {
  var t2 = function(e2, r2) {
    return t2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
      t3.__proto__ = e3;
    } || function(t3, e3) {
      for (var r3 in e3) e3.hasOwnProperty(r3) && (t3[r3] = e3[r3]);
    }, t2(e2, r2);
  };
  return function(e2, r2) {
    function n2() {
      this.constructor = e2;
    }
    t2(e2, r2), e2.prototype = null === r2 ? Object.create(r2) : (n2.prototype = r2.prototype, new n2());
  };
}();
var mi = function(t2) {
  function e2(e3, r2, n2) {
    var o2 = t2.call(this, e3, 0, 0) || this;
    return o2.binaryShiftStart = r2, o2.binaryShiftByteCount = n2, o2;
  }
  return vi(e2, t2), e2.prototype.appendTo = function(t3, e3) {
    for (var r2 = 0; r2 < this.binaryShiftByteCount; r2++) (0 === r2 || 31 === r2 && this.binaryShiftByteCount <= 62) && (t3.appendBits(31, 5), this.binaryShiftByteCount > 62 ? t3.appendBits(this.binaryShiftByteCount - 31, 16) : 0 === r2 ? t3.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t3.appendBits(this.binaryShiftByteCount - 31, 5)), t3.appendBits(e3[this.binaryShiftStart + r2], 8);
  }, e2.prototype.addBinaryShift = function(t3, r2) {
    return new e2(this, t3, r2);
  }, e2.prototype.toString = function() {
    return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
  }, e2;
}(Ei);
function Ii(t2, e2, r2) {
  return new Ei(t2, e2, r2);
}
var _i = ["UPPER", "LOWER", "DIGIT", "MIXED", "PUNCT"];
var Ti = new Ei(null, 0, 0);
var Si = [Int32Array.from([0, 327708, 327710, 327709, 656318]), Int32Array.from([590318, 0, 327710, 327709, 656318]), Int32Array.from([262158, 590300, 0, 590301, 932798]), Int32Array.from([327709, 327708, 656318, 0, 327710]), Int32Array.from([327711, 656380, 656382, 656381, 0])];
var Bi = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Ri = function(t2) {
  var e2, r2;
  try {
    for (var n2 = Bi(t2), o2 = n2.next(); !o2.done; o2 = n2.next()) {
      var i2 = o2.value;
      G.fill(i2, -1);
    }
  } catch (t3) {
    e2 = { error: t3 };
  } finally {
    try {
      o2 && !o2.done && (r2 = n2.return) && r2.call(n2);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return t2[0][4] = 0, t2[1][4] = 0, t2[1][0] = 28, t2[3][4] = 0, t2[2][4] = 0, t2[2][0] = 15, t2;
}(G.createInt32Array(6, 6));
var Di = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Ni = function() {
  function t2(t3, e2, r2, n2) {
    this.token = t3, this.mode = e2, this.binaryShiftByteCount = r2, this.bitCount = n2;
  }
  return t2.prototype.getMode = function() {
    return this.mode;
  }, t2.prototype.getToken = function() {
    return this.token;
  }, t2.prototype.getBinaryShiftByteCount = function() {
    return this.binaryShiftByteCount;
  }, t2.prototype.getBitCount = function() {
    return this.bitCount;
  }, t2.prototype.latchAndAppend = function(e2, r2) {
    var n2 = this.bitCount, o2 = this.token;
    if (e2 !== this.mode) {
      var i2 = Si[this.mode][e2];
      o2 = Ii(o2, 65535 & i2, i2 >> 16), n2 += i2 >> 16;
    }
    var a2 = 2 === e2 ? 4 : 5;
    return new t2(o2 = Ii(o2, r2, a2), e2, 0, n2 + a2);
  }, t2.prototype.shiftAndAppend = function(e2, r2) {
    var n2 = this.token, o2 = 2 === this.mode ? 4 : 5;
    return n2 = Ii(n2, Ri[this.mode][e2], o2), new t2(n2 = Ii(n2, r2, 5), this.mode, 0, this.bitCount + o2 + 5);
  }, t2.prototype.addBinaryShiftChar = function(e2) {
    var r2 = this.token, n2 = this.mode, o2 = this.bitCount;
    if (4 === this.mode || 2 === this.mode) {
      var i2 = Si[n2][0];
      r2 = Ii(r2, 65535 & i2, i2 >> 16), o2 += i2 >> 16, n2 = 0;
    }
    var a2 = 0 === this.binaryShiftByteCount || 31 === this.binaryShiftByteCount ? 18 : 62 === this.binaryShiftByteCount ? 9 : 8, s2 = new t2(r2, n2, this.binaryShiftByteCount + 1, o2 + a2);
    return 2078 === s2.binaryShiftByteCount && (s2 = s2.endBinaryShift(e2 + 1)), s2;
  }, t2.prototype.endBinaryShift = function(e2) {
    if (0 === this.binaryShiftByteCount) return this;
    var r2 = this.token;
    return new t2(r2 = function(t3, e3, r3) {
      return new mi(t3, e3, r3);
    }(r2, e2 - this.binaryShiftByteCount, this.binaryShiftByteCount), this.mode, 0, this.bitCount);
  }, t2.prototype.isBetterThanOrEqualTo = function(e2) {
    var r2 = this.bitCount + (Si[this.mode][e2.mode] >> 16);
    return this.binaryShiftByteCount < e2.binaryShiftByteCount ? r2 += t2.calculateBinaryShiftCost(e2) - t2.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > e2.binaryShiftByteCount && e2.binaryShiftByteCount > 0 && (r2 += 10), r2 <= e2.bitCount;
  }, t2.prototype.toBitArray = function(t3) {
    for (var e2, r2, n2 = [], o2 = this.endBinaryShift(t3.length).token; null !== o2; o2 = o2.getPrevious()) n2.unshift(o2);
    var i2 = new q();
    try {
      for (var a2 = Di(n2), s2 = a2.next(); !s2.done; s2 = a2.next()) {
        s2.value.appendTo(i2, t3);
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        s2 && !s2.done && (r2 = a2.return) && r2.call(a2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return i2;
  }, t2.prototype.toString = function() {
    return $.format("%s bits=%d bytes=%d", _i[this.mode], this.bitCount, this.binaryShiftByteCount);
  }, t2.calculateBinaryShiftCost = function(t3) {
    return t3.binaryShiftByteCount > 62 ? 21 : t3.binaryShiftByteCount > 31 ? 20 : t3.binaryShiftByteCount > 0 ? 10 : 0;
  }, t2.INITIAL_STATE = new t2(Ti, 0, 0, 0), t2;
}();
var Oi = function(t2) {
  var e2 = $.getCharCode(" "), r2 = $.getCharCode("."), n2 = $.getCharCode(",");
  t2[0][e2] = 1;
  for (var o2 = $.getCharCode("Z"), i2 = $.getCharCode("A"), a2 = i2; a2 <= o2; a2++) t2[0][a2] = a2 - i2 + 2;
  t2[1][e2] = 1;
  var s2 = $.getCharCode("z"), u2 = $.getCharCode("a");
  for (a2 = u2; a2 <= s2; a2++) t2[1][a2] = a2 - u2 + 2;
  t2[2][e2] = 1;
  var c2 = $.getCharCode("9"), f2 = $.getCharCode("0");
  for (a2 = f2; a2 <= c2; a2++) t2[2][a2] = a2 - f2 + 2;
  t2[2][n2] = 12, t2[2][r2] = 13;
  for (var h2 = ["\0", " ", "", "", "", "", "", "", "\x07", "\b", "	", "\n", "\v", "\f", "\r", "\x1B", "", "", "", "", "@", "\\", "^", "_", "`", "|", "~", ""], l2 = 0; l2 < h2.length; l2++) t2[3][$.getCharCode(h2[l2])] = l2;
  var d2 = ["\0", "\r", "\0", "\0", "\0", "\0", "!", "'", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "{", "}"];
  for (l2 = 0; l2 < d2.length; l2++) $.getCharCode(d2[l2]) > 0 && (t2[4][$.getCharCode(d2[l2])] = l2);
  return t2;
}(G.createInt32Array(5, 256));
var Mi = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var bi = function() {
  function t2(t3) {
    this.text = t3;
  }
  return t2.prototype.encode = function() {
    for (var e2 = $.getCharCode(" "), r2 = $.getCharCode("\n"), n2 = Ai.singletonList(Ni.INITIAL_STATE), o2 = 0; o2 < this.text.length; o2++) {
      var i2 = void 0, a2 = o2 + 1 < this.text.length ? this.text[o2 + 1] : 0;
      switch (this.text[o2]) {
        case $.getCharCode("\r"):
          i2 = a2 === r2 ? 2 : 0;
          break;
        case $.getCharCode("."):
          i2 = a2 === e2 ? 3 : 0;
          break;
        case $.getCharCode(","):
          i2 = a2 === e2 ? 4 : 0;
          break;
        case $.getCharCode(":"):
          i2 = a2 === e2 ? 5 : 0;
          break;
        default:
          i2 = 0;
      }
      i2 > 0 ? (n2 = t2.updateStateListForPair(n2, o2, i2), o2++) : n2 = this.updateStateListForChar(n2, o2);
    }
    return Ai.min(n2, function(t3, e3) {
      return t3.getBitCount() - e3.getBitCount();
    }).toBitArray(this.text);
  }, t2.prototype.updateStateListForChar = function(e2, r2) {
    var n2, o2, i2 = [];
    try {
      for (var a2 = Mi(e2), s2 = a2.next(); !s2.done; s2 = a2.next()) {
        var u2 = s2.value;
        this.updateStateForChar(u2, r2, i2);
      }
    } catch (t3) {
      n2 = { error: t3 };
    } finally {
      try {
        s2 && !s2.done && (o2 = a2.return) && o2.call(a2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    return t2.simplifyStates(i2);
  }, t2.prototype.updateStateForChar = function(t3, e2, r2) {
    for (var n2 = 255 & this.text[e2], o2 = Oi[t3.getMode()][n2] > 0, i2 = null, a2 = 0; a2 <= 4; a2++) {
      var s2 = Oi[a2][n2];
      if (s2 > 0) {
        if (null == i2 && (i2 = t3.endBinaryShift(e2)), !o2 || a2 === t3.getMode() || 2 === a2) {
          var u2 = i2.latchAndAppend(a2, s2);
          r2.push(u2);
        }
        if (!o2 && Ri[t3.getMode()][a2] >= 0) {
          var c2 = i2.shiftAndAppend(a2, s2);
          r2.push(c2);
        }
      }
    }
    if (t3.getBinaryShiftByteCount() > 0 || 0 === Oi[t3.getMode()][n2]) {
      var f2 = t3.addBinaryShiftChar(e2);
      r2.push(f2);
    }
  }, t2.updateStateListForPair = function(t3, e2, r2) {
    var n2, o2, i2 = [];
    try {
      for (var a2 = Mi(t3), s2 = a2.next(); !s2.done; s2 = a2.next()) {
        var u2 = s2.value;
        this.updateStateForPair(u2, e2, r2, i2);
      }
    } catch (t4) {
      n2 = { error: t4 };
    } finally {
      try {
        s2 && !s2.done && (o2 = a2.return) && o2.call(a2);
      } finally {
        if (n2) throw n2.error;
      }
    }
    return this.simplifyStates(i2);
  }, t2.updateStateForPair = function(t3, e2, r2, n2) {
    var o2 = t3.endBinaryShift(e2);
    if (n2.push(o2.latchAndAppend(4, r2)), 4 !== t3.getMode() && n2.push(o2.shiftAndAppend(4, r2)), 3 === r2 || 4 === r2) {
      var i2 = o2.latchAndAppend(2, 16 - r2).latchAndAppend(2, 1);
      n2.push(i2);
    }
    if (t3.getBinaryShiftByteCount() > 0) {
      var a2 = t3.addBinaryShiftChar(e2).addBinaryShiftChar(e2 + 1);
      n2.push(a2);
    }
  }, t2.simplifyStates = function(t3) {
    var e2, r2, n2, o2, i2 = [];
    try {
      for (var a2 = Mi(t3), s2 = a2.next(); !s2.done; s2 = a2.next()) {
        var u2 = s2.value, c2 = true, f2 = function(t4) {
          if (t4.isBetterThanOrEqualTo(u2)) return c2 = false, "break";
          u2.isBetterThanOrEqualTo(t4) && (i2 = i2.filter(function(e3) {
            return e3 !== t4;
          }));
        };
        try {
          for (var h2 = (n2 = void 0, Mi(i2)), l2 = h2.next(); !l2.done; l2 = h2.next()) {
            if ("break" === f2(l2.value)) break;
          }
        } catch (t4) {
          n2 = { error: t4 };
        } finally {
          try {
            l2 && !l2.done && (o2 = h2.return) && o2.call(h2);
          } finally {
            if (n2) throw n2.error;
          }
        }
        c2 && i2.push(u2);
      }
    } catch (t4) {
      e2 = { error: t4 };
    } finally {
      try {
        s2 && !s2.done && (r2 = a2.return) && r2.call(a2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return i2;
  }, t2;
}();
var Pi = function(t2) {
  var e2 = "function" == typeof Symbol && Symbol.iterator, r2 = e2 && t2[e2], n2 = 0;
  if (r2) return r2.call(t2);
  if (t2 && "number" == typeof t2.length) return { next: function() {
    return t2 && n2 >= t2.length && (t2 = void 0), { value: t2 && t2[n2++], done: !t2 };
  } };
  throw new TypeError(e2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
!function() {
  function t2() {
  }
  t2.encodeBytes = function(e2) {
    return t2.encode(e2, t2.DEFAULT_EC_PERCENT, t2.DEFAULT_AZTEC_LAYERS);
  }, t2.encode = function(e2, r2, n2) {
    var o2, i2, a2, s2, u2, c2 = new bi(e2).encode(), f2 = Y.truncDivision(c2.getSize() * r2, 100) + 11, h2 = c2.getSize() + f2;
    if (n2 !== t2.DEFAULT_AZTEC_LAYERS) {
      if (o2 = n2 < 0, (i2 = Math.abs(n2)) > (o2 ? t2.MAX_NB_BITS_COMPACT : t2.MAX_NB_BITS)) throw new D($.format("Illegal value %s for layers", n2));
      var l2 = (a2 = t2.totalBitsInLayer(i2, o2)) - a2 % (s2 = t2.WORD_SIZE[i2]);
      if ((u2 = t2.stuffBits(c2, s2)).getSize() + f2 > l2) throw new D("Data to large for user specified layer");
      if (o2 && u2.getSize() > 64 * s2) throw new D("Data to large for user specified layer");
    } else {
      s2 = 0, u2 = null;
      for (var d2 = 0; ; d2++) {
        if (d2 > t2.MAX_NB_BITS) throw new D("Data too large for an Aztec code");
        if (i2 = (o2 = d2 <= 3) ? d2 + 1 : d2, !(h2 > (a2 = t2.totalBitsInLayer(i2, o2)))) {
          null != u2 && s2 === t2.WORD_SIZE[i2] || (s2 = t2.WORD_SIZE[i2], u2 = t2.stuffBits(c2, s2));
          l2 = a2 - a2 % s2;
          if (!(o2 && u2.getSize() > 64 * s2) && u2.getSize() + f2 <= l2) break;
        }
      }
    }
    var p2, g2 = t2.generateCheckWords(u2, a2, s2), w2 = u2.getSize() / s2, A2 = t2.generateModeMessage(o2, i2, w2), y2 = (o2 ? 11 : 14) + 4 * i2, C2 = new Int32Array(y2);
    if (o2) {
      p2 = y2;
      for (d2 = 0; d2 < C2.length; d2++) C2[d2] = d2;
    } else {
      p2 = y2 + 1 + 2 * Y.truncDivision(Y.truncDivision(y2, 2) - 1, 15);
      var E2 = Y.truncDivision(y2, 2), v2 = Y.truncDivision(p2, 2);
      for (d2 = 0; d2 < E2; d2++) {
        var m2 = d2 + Y.truncDivision(d2, 15);
        C2[E2 - d2 - 1] = v2 - m2 - 1, C2[E2 + d2] = v2 + m2 + 1;
      }
    }
    for (var I2 = new et(p2), _2 = (d2 = 0, 0); d2 < i2; d2++) {
      for (var T2 = 4 * (i2 - d2) + (o2 ? 9 : 12), S2 = 0; S2 < T2; S2++) for (var B2 = 2 * S2, R2 = 0; R2 < 2; R2++) g2.get(_2 + B2 + R2) && I2.set(C2[2 * d2 + R2], C2[2 * d2 + S2]), g2.get(_2 + 2 * T2 + B2 + R2) && I2.set(C2[2 * d2 + S2], C2[y2 - 1 - 2 * d2 - R2]), g2.get(_2 + 4 * T2 + B2 + R2) && I2.set(C2[y2 - 1 - 2 * d2 - R2], C2[y2 - 1 - 2 * d2 - S2]), g2.get(_2 + 6 * T2 + B2 + R2) && I2.set(C2[y2 - 1 - 2 * d2 - S2], C2[2 * d2 + R2]);
      _2 += 8 * T2;
    }
    if (t2.drawModeMessage(I2, o2, p2, A2), o2) t2.drawBullsEye(I2, Y.truncDivision(p2, 2), 5);
    else {
      t2.drawBullsEye(I2, Y.truncDivision(p2, 2), 7);
      for (d2 = 0, S2 = 0; d2 < Y.truncDivision(y2, 2) - 1; d2 += 15, S2 += 16) for (R2 = 1 & Y.truncDivision(p2, 2); R2 < p2; R2 += 2) I2.set(Y.truncDivision(p2, 2) - S2, R2), I2.set(Y.truncDivision(p2, 2) + S2, R2), I2.set(R2, Y.truncDivision(p2, 2) - S2), I2.set(R2, Y.truncDivision(p2, 2) + S2);
    }
    var N2 = new wi();
    return N2.setCompact(o2), N2.setSize(p2), N2.setLayers(i2), N2.setCodeWords(w2), N2.setMatrix(I2), N2;
  }, t2.drawBullsEye = function(t3, e2, r2) {
    for (var n2 = 0; n2 < r2; n2 += 2) for (var o2 = e2 - n2; o2 <= e2 + n2; o2++) t3.set(o2, e2 - n2), t3.set(o2, e2 + n2), t3.set(e2 - n2, o2), t3.set(e2 + n2, o2);
    t3.set(e2 - r2, e2 - r2), t3.set(e2 - r2 + 1, e2 - r2), t3.set(e2 - r2, e2 - r2 + 1), t3.set(e2 + r2, e2 - r2), t3.set(e2 + r2, e2 - r2 + 1), t3.set(e2 + r2, e2 + r2 - 1);
  }, t2.generateModeMessage = function(e2, r2, n2) {
    var o2 = new q();
    return e2 ? (o2.appendBits(r2 - 1, 2), o2.appendBits(n2 - 1, 6), o2 = t2.generateCheckWords(o2, 28, 4)) : (o2.appendBits(r2 - 1, 5), o2.appendBits(n2 - 1, 11), o2 = t2.generateCheckWords(o2, 40, 4)), o2;
  }, t2.drawModeMessage = function(t3, e2, r2, n2) {
    var o2 = Y.truncDivision(r2, 2);
    if (e2) for (var i2 = 0; i2 < 7; i2++) {
      var a2 = o2 - 3 + i2;
      n2.get(i2) && t3.set(a2, o2 - 5), n2.get(i2 + 7) && t3.set(o2 + 5, a2), n2.get(20 - i2) && t3.set(a2, o2 + 5), n2.get(27 - i2) && t3.set(o2 - 5, a2);
    }
    else for (i2 = 0; i2 < 10; i2++) {
      a2 = o2 - 5 + i2 + Y.truncDivision(i2, 5);
      n2.get(i2) && t3.set(a2, o2 - 7), n2.get(i2 + 10) && t3.set(o2 + 7, a2), n2.get(29 - i2) && t3.set(a2, o2 + 7), n2.get(39 - i2) && t3.set(o2 - 7, a2);
    }
  }, t2.generateCheckWords = function(e2, r2, n2) {
    var o2, i2, a2 = e2.getSize() / n2, s2 = new Ro(t2.getGF(n2)), u2 = Y.truncDivision(r2, n2), c2 = t2.bitsToWords(e2, n2, u2);
    s2.encode(c2, u2 - a2);
    var f2 = r2 % n2, h2 = new q();
    h2.appendBits(0, f2);
    try {
      for (var l2 = Pi(Array.from(c2)), d2 = l2.next(); !d2.done; d2 = l2.next()) {
        var p2 = d2.value;
        h2.appendBits(p2, n2);
      }
    } catch (t3) {
      o2 = { error: t3 };
    } finally {
      try {
        d2 && !d2.done && (i2 = l2.return) && i2.call(l2);
      } finally {
        if (o2) throw o2.error;
      }
    }
    return h2;
  }, t2.bitsToWords = function(t3, e2, r2) {
    var n2, o2, i2 = new Int32Array(r2);
    for (n2 = 0, o2 = t3.getSize() / e2; n2 < o2; n2++) {
      for (var a2 = 0, s2 = 0; s2 < e2; s2++) a2 |= t3.get(n2 * e2 + s2) ? 1 << e2 - s2 - 1 : 0;
      i2[n2] = a2;
    }
    return i2;
  }, t2.getGF = function(t3) {
    switch (t3) {
      case 4:
        return Dt.AZTEC_PARAM;
      case 6:
        return Dt.AZTEC_DATA_6;
      case 8:
        return Dt.AZTEC_DATA_8;
      case 10:
        return Dt.AZTEC_DATA_10;
      case 12:
        return Dt.AZTEC_DATA_12;
      default:
        throw new D("Unsupported word size " + t3);
    }
  }, t2.stuffBits = function(t3, e2) {
    for (var r2 = new q(), n2 = t3.getSize(), o2 = (1 << e2) - 2, i2 = 0; i2 < n2; i2 += e2) {
      for (var a2 = 0, s2 = 0; s2 < e2; s2++) (i2 + s2 >= n2 || t3.get(i2 + s2)) && (a2 |= 1 << e2 - 1 - s2);
      (a2 & o2) === o2 ? (r2.appendBits(a2 & o2, e2), i2--) : 0 == (a2 & o2) ? (r2.appendBits(1 | a2, e2), i2--) : r2.appendBits(a2, e2);
    }
    return r2;
  }, t2.totalBitsInLayer = function(t3, e2) {
    return ((e2 ? 88 : 112) + 16 * t3) * t3;
  }, t2.DEFAULT_EC_PERCENT = 33, t2.DEFAULT_AZTEC_LAYERS = 0, t2.MAX_NB_BITS = 32, t2.MAX_NB_BITS_COMPACT = 4, t2.WORD_SIZE = Int32Array.from([4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]);
}();
var Fi = function(t2) {
  function e2(r2) {
    var n2 = t2.call(this, r2.width, r2.height) || this;
    return n2.canvas = r2, n2.tempCanvasElement = void 0, n2.buffer = e2.makeBufferFromCanvasImageData(r2), n2;
  }
  return s(e2, t2), e2.makeBufferFromCanvasImageData = function(t3) {
    var r2 = t3.getContext("2d", { willReadFrequently: true });
    if (!r2) throw new Error("Couldn't get canvas context.");
    var n2 = r2.getImageData(0, 0, t3.width, t3.height);
    return e2.toGrayscaleBuffer(n2.data, t3.width, t3.height);
  }, e2.toGrayscaleBuffer = function(t3, e3, r2) {
    for (var n2 = new Uint8ClampedArray(e3 * r2), o2 = 0, i2 = 0, a2 = t3.length; o2 < a2; o2 += 4, i2++) {
      var s2 = void 0;
      if (0 === t3[o2 + 3]) s2 = 255;
      else s2 = 306 * t3[o2] + 601 * t3[o2 + 1] + 117 * t3[o2 + 2] + 512 >> 10;
      n2[i2] = s2;
    }
    return n2;
  }, e2.prototype.getRow = function(t3, e3) {
    if (t3 < 0 || t3 >= this.getHeight()) throw new D("Requested row is outside the image: " + t3);
    var r2 = this.getWidth(), n2 = t3 * r2;
    return null === e3 ? e3 = this.buffer.slice(n2, n2 + r2) : (e3.length < r2 && (e3 = new Uint8ClampedArray(r2)), e3.set(this.buffer.slice(n2, n2 + r2))), e3;
  }, e2.prototype.getMatrix = function() {
    return this.buffer;
  }, e2.prototype.isCropSupported = function() {
    return true;
  }, e2.prototype.crop = function(e3, r2, n2, o2) {
    return t2.prototype.crop.call(this, e3, r2, n2, o2), this;
  }, e2.prototype.isRotateSupported = function() {
    return true;
  }, e2.prototype.rotateCounterClockwise = function() {
    return this.rotate(-90), this;
  }, e2.prototype.rotateCounterClockwise45 = function() {
    return this.rotate(-45), this;
  }, e2.prototype.invert = function() {
    return new ft(this);
  }, e2.prototype.getTempCanvasElement = function() {
    if (null === this.tempCanvasElement) {
      var t3 = this.canvas.ownerDocument.createElement("canvas");
      t3.width = this.canvas.width, t3.height = this.canvas.height, this.tempCanvasElement = t3;
    }
    return this.tempCanvasElement;
  }, e2.prototype.rotate = function(t3) {
    var r2 = this.getTempCanvasElement();
    if (!r2) throw new Error("Could not create a Canvas element.");
    var n2 = t3 * e2.DEGREE_TO_RADIANS, o2 = this.canvas.width, i2 = this.canvas.height, a2 = Math.ceil(Math.abs(Math.cos(n2)) * o2 + Math.abs(Math.sin(n2)) * i2), s2 = Math.ceil(Math.abs(Math.sin(n2)) * o2 + Math.abs(Math.cos(n2)) * i2);
    r2.width = a2, r2.height = s2;
    var u2 = r2.getContext("2d", { willReadFrequently: true });
    if (!u2) throw new Error("Could not create a Canvas Context element.");
    return u2.translate(a2 / 2, s2 / 2), u2.rotate(n2), u2.drawImage(this.canvas, o2 / -2, i2 / -2), this.buffer = e2.makeBufferFromCanvasImageData(r2), this;
  }, e2.DEGREE_TO_RADIANS = Math.PI / 180, e2;
}(ut);
function Li() {
  return "undefined" != typeof navigator;
}
function ki() {
  return !!(Li() && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
}
var Vi = function() {
  function t2(t3, e2) {
    this.reader = t3, this.options = e2;
  }
  return t2.prototype.decodeBitmap = function(t3) {
    return this.reader.decode(t3, this.options.hints);
  }, t2.prototype.decodeFromCanvas = function(e2) {
    var r2 = t2.createBinaryBitmapFromCanvas(e2);
    return this.decodeBitmap(r2);
  }, t2.prototype.decodeFromConstraints = function(e2, r2, n2) {
    return c(this, void 0, void 0, function() {
      var o2, i2;
      return f(this, function(a2) {
        switch (a2.label) {
          case 0:
            return t2.checkCallbackFnOrThrow(n2), [4, this.getUserMedia(e2)];
          case 1:
            o2 = a2.sent(), a2.label = 2;
          case 2:
            return a2.trys.push([2, 4, , 5]), [4, this.decodeFromStream(o2, r2, n2)];
          case 3:
            return [2, a2.sent()];
          case 4:
            throw i2 = a2.sent(), t2.disposeMediaStream(o2), i2;
          case 5:
            return [2];
        }
      });
    });
  }, t2.prototype.decodeFromStream = function(e2, r2, n2) {
    return c(this, void 0, void 0, function() {
      var o2, i2, a2, s2, h2, l2, d2, p2 = this;
      return f(this, function(g2) {
        switch (g2.label) {
          case 0:
            return t2.checkCallbackFnOrThrow(n2), [4, t2.attachStreamToVideo(e2, r2, this.options.tryPlayVideoTimeout)];
          case 1:
            return o2 = g2.sent(), i2 = function() {
              t2.disposeMediaStream(e2), t2.cleanVideoSource(o2);
            }, a2 = this.scan(o2, n2, i2), s2 = e2.getVideoTracks(), h2 = u(u({}, a2), { stop: function() {
              return c(this, void 0, void 0, function() {
                return f(this, function(t3) {
                  switch (t3.label) {
                    case 0:
                      return [4, a2.stop()];
                    case 1:
                      return t3.sent(), [2];
                  }
                });
              });
            }, setStreamVideoConstraints: function(t3, e3) {
              return c(this, void 0, void 0, function() {
                var r3, n3, o3;
                return f(this, function(i3) {
                  switch (i3.label) {
                    case 0:
                      r3 = e3 ? s2.filter(e3) : s2, n3 = 0, o3 = r3, i3.label = 1;
                    case 1:
                      return n3 < o3.length ? [4, o3[n3].applyConstraints(t3)] : [3, 4];
                    case 2:
                      i3.sent(), i3.label = 3;
                    case 3:
                      return n3++, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }, getStreamVideoConstraints: function(t3) {
              var e3 = s2.find(t3);
              if (!e3) throw new Error("No track found.");
              return e3.getConstraints();
            }, getStreamVideoSettings: function(t3) {
              var e3 = s2.find(t3);
              if (!e3) throw new Error("No track found.");
              return e3.getSettings();
            }, getStreamVideoCapabilities: function(t3) {
              var e3 = s2.find(t3);
              if (!e3) throw new Error("No track found.");
              return e3.getCapabilities();
            } }), t2.mediaStreamIsTorchCompatible(e2) && (l2 = null == s2 ? void 0 : s2.find(function(e3) {
              return t2.mediaStreamIsTorchCompatibleTrack(e3);
            }), d2 = function(e3) {
              return c(p2, void 0, void 0, function() {
                return f(this, function(r3) {
                  switch (r3.label) {
                    case 0:
                      if (!l2) throw new Error("No torch track available.");
                      return [4, t2.mediaStreamSetTorch(l2, e3)];
                    case 1:
                      return r3.sent(), [2];
                  }
                });
              });
            }, h2.switchTorch = d2, h2.stop = function() {
              return c(p2, void 0, void 0, function() {
                return f(this, function(t3) {
                  switch (t3.label) {
                    case 0:
                      return [4, d2(false)];
                    case 1:
                      return t3.sent(), [4, a2.stop()];
                    case 2:
                      return t3.sent(), [2];
                  }
                });
              });
            }), [2, h2];
        }
      });
    });
  }, t2.prototype.decodeFromVideoDevice = function(e2, r2, n2) {
    return c(this, void 0, void 0, function() {
      var o2;
      return f(this, function(i2) {
        switch (i2.label) {
          case 0:
            return t2.checkCallbackFnOrThrow(n2), o2 = { video: e2 ? { deviceId: { exact: e2 } } : { facingMode: "environment" } }, [4, this.decodeFromConstraints(o2, r2, n2)];
          case 1:
            return [2, i2.sent()];
        }
      });
    });
  }, t2.cleanVideoSource = function(t3) {
    if (t3) {
      try {
        t3.srcObject = null;
      } catch (e2) {
        t3.src = "";
      }
      t3 && t3.removeAttribute("src");
    }
  }, t2.releaseAllStreams = function() {
    0 !== t2.streamTracker.length && t2.streamTracker.forEach(function(t3) {
      t3.getTracks().forEach(function(t4) {
        return t4.stop();
      });
    }), t2.streamTracker = [];
  }, t2.listVideoInputDevices = function(t3) {
    return c(this, void 0, void 0, function() {
      var e2, r2, n2, o2, i2, a2, s2, u2, c2, h2;
      return f(this, function(f2) {
        switch (f2.label) {
          case 0:
            if (!Li()) throw new Error("Can't enumerate devices, navigator is not present.");
            if (!ki()) throw new Error("Can't enumerate devices, method not supported.");
            return t3 ? [4, navigator.mediaDevices.getUserMedia({ video: true })] : [3, 2];
          case 1:
            f2.sent(), f2.label = 2;
          case 2:
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 3:
            for (e2 = f2.sent(), r2 = [], n2 = 0, o2 = e2; n2 < o2.length; n2++) i2 = o2[n2], "videoinput" === (a2 = "video" === i2.kind ? "videoinput" : i2.kind) && (s2 = i2.deviceId || i2.id, u2 = i2.label || "Video device ".concat(r2.length + 1), c2 = i2.groupId, h2 = { deviceId: s2, label: u2, kind: a2, groupId: c2 }, r2.push(h2));
            return [2, r2];
        }
      });
    });
  }, t2.addVideoSource = function(t3, e2) {
    try {
      t3.srcObject = e2;
    } catch (t4) {
      console.error("Got interrupted by new loading request");
    }
  }, t2.mediaStreamSetTorch = function(t3, e2) {
    return c(this, void 0, void 0, function() {
      return f(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, t3.applyConstraints({ advanced: [{ fillLightMode: e2 ? "flash" : "off", torch: e2 }] })];
          case 1:
            return r2.sent(), [2];
        }
      });
    });
  }, t2.mediaStreamIsTorchCompatible = function(e2) {
    for (var r2 = 0, n2 = e2.getVideoTracks(); r2 < n2.length; r2++) {
      var o2 = n2[r2];
      if (t2.mediaStreamIsTorchCompatibleTrack(o2)) return true;
    }
    return false;
  }, t2.mediaStreamIsTorchCompatibleTrack = function(t3) {
    try {
      return "torch" in t3.getCapabilities();
    } catch (t4) {
      return console.error(t4), console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available."), false;
    }
  }, t2.isVideoPlaying = function(t3) {
    return t3.currentTime > 0 && !t3.paused && t3.readyState > 2;
  }, t2.getMediaElement = function(t3, e2) {
    var r2 = document.getElementById(t3);
    if (!r2) throw new B("element with id '".concat(t3, "' not found"));
    if (r2.nodeName.toLowerCase() !== e2.toLowerCase()) throw new B("element with id '".concat(t3, "' must be an ").concat(e2, " element"));
    return r2;
  }, t2.createVideoElement = function(e2) {
    if (e2 instanceof HTMLVideoElement) return e2;
    if ("string" == typeof e2) return t2.getMediaElement(e2, "video");
    if (!e2 && "undefined" != typeof document) {
      var r2 = document.createElement("video");
      return r2.width = 200, r2.height = 200, r2;
    }
    throw new Error("Couldn't get videoElement from videoSource!");
  }, t2.prepareVideoElement = function(e2) {
    var r2 = t2.createVideoElement(e2);
    return r2.setAttribute("autoplay", "true"), r2.setAttribute("muted", "true"), r2.setAttribute("playsinline", "true"), r2;
  }, t2.createBinaryBitmapFromCanvas = function(t3) {
    var e2 = new Fi(t3), r2 = new st(e2);
    return new N(r2);
  }, t2.drawImageOnCanvas = function(t3, e2) {
    t3.drawImage(e2, 0, 0);
  }, t2.getMediaElementDimensions = function(t3) {
    if (t3 instanceof HTMLVideoElement) return { height: t3.videoHeight, width: t3.videoWidth };
    if (t3 instanceof HTMLImageElement) return { height: t3.naturalHeight || t3.height, width: t3.naturalWidth || t3.width };
    throw new Error("Couldn't find the Source's dimensions!");
  }, t2.createCaptureCanvas = function(e2) {
    if (!e2) throw new B("Cannot create a capture canvas without a media element.");
    if ("undefined" == typeof document) throw new Error('The page "Document" is undefined, make sure you are running in a browser.');
    var r2 = document.createElement("canvas"), n2 = t2.getMediaElementDimensions(e2), o2 = n2.width, i2 = n2.height;
    return r2.style.width = o2 + "px", r2.style.height = i2 + "px", r2.width = o2, r2.height = i2, r2;
  }, t2.tryPlayVideo = function(e2) {
    return c(this, void 0, void 0, function() {
      var r2;
      return f(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (null == e2 ? void 0 : e2.ended) return console.error("Trying to play video that has ended."), [2, false];
            if (t2.isVideoPlaying(e2)) return console.warn("Trying to play video that is already playing."), [2, true];
            n2.label = 1;
          case 1:
            return n2.trys.push([1, 3, , 4]), [4, e2.play()];
          case 2:
            return n2.sent(), [2, true];
          case 3:
            return r2 = n2.sent(), console.warn("It was not possible to play the video.", r2), [2, false];
          case 4:
            return [2];
        }
      });
    });
  }, t2.playVideoOnLoadAsync = function(e2, r2) {
    return c(this, void 0, void 0, function() {
      return f(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, t2.tryPlayVideo(e2)];
          case 1:
            return n2.sent() ? [2, true] : [2, new Promise(function(n3, o2) {
              var i2 = setTimeout(function() {
                t2.isVideoPlaying(e2) || (o2(false), e2.removeEventListener("canplay", a2));
              }, r2), a2 = function() {
                t2.tryPlayVideo(e2).then(function(t3) {
                  clearTimeout(i2), e2.removeEventListener("canplay", a2), n3(t3);
                });
              };
              e2.addEventListener("canplay", a2);
            })];
        }
      });
    });
  }, t2.attachStreamToVideo = function(e2, r2, n2) {
    return void 0 === n2 && (n2 = 3e3), c(this, void 0, void 0, function() {
      var o2;
      return f(this, function(i2) {
        switch (i2.label) {
          case 0:
            return o2 = t2.prepareVideoElement(r2), t2.addVideoSource(o2, e2), [4, t2.playVideoOnLoadAsync(o2, n2)];
          case 1:
            return i2.sent(), [2, o2];
        }
      });
    });
  }, t2.prototype.scan = function(e2, r2, n2) {
    var o2 = this;
    t2.checkCallbackFnOrThrow(r2);
    var i2 = t2.createCaptureCanvas(e2), a2 = i2.getContext("2d", { willReadFrequently: true });
    if (!a2) throw new Error("Couldn't create canvas for visual element scan.");
    var s2, u2 = function() {
      a2 = null;
    }, h2 = false, l2 = { stop: function() {
      return c(o2, void 0, void 0, function() {
        return f(this, function(t3) {
          return h2 = true, s2 && clearTimeout(s2), u2(), n2 && n2(), [2];
        });
      });
    } }, d2 = function() {
      if (!h2) {
        var c2 = new yt("", new Uint8Array(0), 0, [], 0, 0);
        try {
          if (!a2) return void r2(c2, new T("Canvas is not available"));
          t2.drawImageOnCanvas(a2, e2), c2 = o2.decodeFromCanvas(i2), r2(c2, void 0), s2 = setTimeout(d2, o2.options.delayBetweenScanSuccess);
        } catch (t3) {
          if (r2(c2, t3), t3 instanceof M || t3 instanceof Q || t3 instanceof nt) return void (s2 = setTimeout(d2, o2.options.delayBetweenScanAttempts));
          u2(), n2 && n2(t3);
        }
      }
    };
    return d2(), l2;
  }, t2.prototype.getUserMedia = function(e2) {
    return c(this, void 0, void 0, function() {
      var r2;
      return f(this, function(n2) {
        switch (n2.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(e2)];
          case 1:
            return r2 = n2.sent(), t2.streamTracker.push(r2), [2, r2];
        }
      });
    });
  }, t2.checkCallbackFnOrThrow = function(t3) {
    if (!t3) throw new B("`callbackFn` is a required parameter, you cannot capture results without it.");
  }, t2.disposeMediaStream = function(t3) {
    t3.getVideoTracks().forEach(function(t4) {
      return t4.stop();
    });
  }, t2.streamTracker = [], t2;
}();
var xi = { deviceId: void 0, hints: void 0, constraints: { facingMode: "environment", width: { min: 640, ideal: 720, max: 1920 }, height: { min: 640, ideal: 720, max: 1080 } }, delayBetweenScanAttempts: 500, delayBetweenScanSuccess: 500, tryPlayVideoTimeout: 1e4 };
var Gi = { audio: true, torch: true, count: false, tracker: false, onOff: false };
var Yi = { width: "100%", paddingTop: "100%", overflow: "hidden", position: "relative" };
var qi = { top: 0, left: 0, width: "100%", height: "100%", display: "block", overflow: "hidden", position: "absolute" };
var Ui = function(t2) {
  function e2(e3) {
    var r2 = this, n2 = new mo();
    return n2.setHints(null == e3 ? void 0 : e3.hints), (r2 = t2.call(this, n2, u(u({}, xi), e3)) || this).reader = n2, r2;
  }
  return s(e2, t2), e2;
}(Vi);
var Hi = function(t2) {
  return t2 instanceof Date;
};
var Wi = function(t2) {
  return null == t2;
};
var Qi = function(t2) {
  return "object" == typeof t2;
};
var Ki = function(t2) {
  return !Wi(t2) && !Array.isArray(t2) && Qi(t2) && !Hi(t2);
};
var Xi = function(t2) {
  return Wi(t2) || !Qi(t2);
};
function Zi(t2, e2) {
  if (Xi(t2) || Xi(e2)) return t2 === e2;
  if (Hi(t2) && Hi(e2)) return t2.getTime() === e2.getTime();
  var r2 = Object.keys(t2), n2 = Object.keys(e2);
  if (r2.length !== n2.length) return false;
  for (var o2 = 0, i2 = r2; o2 < i2.length; o2++) {
    var a2 = i2[o2], s2 = t2[a2];
    if (!n2.includes(a2)) return false;
    if ("ref" !== a2) {
      var u2 = e2[a2];
      if (Hi(s2) && Hi(u2) || Ki(s2) && Ki(u2) || Array.isArray(s2) && Array.isArray(u2) ? !Zi(s2, u2) : s2 !== u2) return false;
    }
  }
  return true;
}
function ji(t2) {
  var o2, a2 = this, s2 = t2.onResult, u2 = t2.onError, h2 = t2.audio, l2 = (0, import_react.useRef)(false), d2 = (0, import_react.useRef)(null), p2 = (0, import_react.useRef)(new Audio("data:audio/mp3;base64,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")), g2 = (0, import_react.useRef)(void 0), w2 = (0, import_react.useRef)(s2), A2 = (0, import_react.useRef)(u2), y2 = (0, import_react.useState)(t2.options), C2 = y2[0], E2 = y2[1], v2 = (0, import_react.useState)(false), m2 = v2[0], I2 = v2[1], _2 = (0, import_react.useState)(false), T2 = _2[0], S2 = _2[1], B2 = (0, import_react.useCallback)(function() {
    var t3, e2;
    return null === (e2 = null === (t3 = g2.current) || void 0 === t3 ? void 0 : t3.getStreamVideoSettings) || void 0 === e2 ? void 0 : e2.call(t3, function(t4) {
      return [t4];
    });
  }, []), R2 = (0, import_react.useCallback)(function(t3) {
    var e2, r2;
    null === (r2 = null === (e2 = g2.current) || void 0 === e2 ? void 0 : e2.switchTorch) || void 0 === r2 || r2.call(e2, t3);
  }, []), D2 = (0, import_react.useCallback)(function() {
    return c(a2, void 0, void 0, function() {
      var t3;
      return f(this, function(e2) {
        switch (e2.label) {
          case 0:
            return S2(false), [4, null === (t3 = g2.current) || void 0 === t3 ? void 0 : t3.stop()];
          case 1:
            return e2.sent(), g2.current = void 0, p2.current.pause(), Vi.releaseAllStreams(), [2];
        }
      });
    });
  }, []), N2 = (0, import_react.useCallback)(function(t3, e2) {
    return c(a2, void 0, void 0, function() {
      var r2;
      return f(this, function(n2) {
        switch (n2.label) {
          case 0:
            return t3 ? "" === t3.getText() ? [2] : (h2 && p2.current && "" !== t3.getText() && p2.current.play().catch(function(t4) {
              return console.error("Error playing the sound", t4);
            }), w2.current(t3), [3, 4]) : [3, 1];
          case 1:
            return e2 ? (r2 = e2.name, e2 instanceof nt || e2 instanceof DOMException && "IndexSizeError" === r2 ? [2] : r2 === nt.name || r2 === M.name || r2 === Q.name || e2.message.includes("No MultiFormat Readers were able to detect the code.") ? (A2.current(e2), [3, 4]) : [3, 2]) : [3, 4];
          case 2:
            return A2.current(e2), [4, D2()];
          case 3:
            n2.sent(), n2.label = 4;
          case 4:
            return [2];
        }
      });
    });
  }, [D2, h2]), O2 = (0, import_react.useCallback)(function() {
    return c(a2, void 0, void 0, function() {
      var t3, e2, r2, n2, o3;
      return f(this, function(i2) {
        switch (i2.label) {
          case 0:
            if (console.log("startScanning"), !d2.current || l2.current) return [2];
            S2(true), t3 = new Ui(C2), i2.label = 1;
          case 1:
            return i2.trys.push([1, 6, , 8]), I2(true), C2.deviceId ? (e2 = g2, [4, t3.decodeFromVideoDevice(C2.deviceId, d2.current, N2)]) : [3, 3];
          case 2:
            return e2.current = i2.sent(), [3, 5];
          case 3:
            return r2 = { audio: false, video: null == C2 ? void 0 : C2.constraints }, n2 = g2, [4, t3.decodeFromConstraints(r2, d2.current, N2)];
          case 4:
            n2.current = i2.sent(), i2.label = 5;
          case 5:
            return I2(false), [3, 8];
          case 6:
            return o3 = i2.sent(), u2(o3), [4, D2()];
          case 7:
            return i2.sent(), [3, 8];
          case 8:
            return [2];
        }
      });
    });
  }, [D2, C2, N2]);
  return (0, import_react.useEffect)(function() {
    l2.current = T2;
  }, [T2]), (0, import_react.useEffect)(function() {
    w2.current = s2;
  }, [s2]), (0, import_react.useEffect)(function() {
    A2.current = u2;
  }, [u2]), (0, import_react.useEffect)(function() {
    return function() {
      c(a2, void 0, void 0, function() {
        return f(this, function(t3) {
          switch (t3.label) {
            case 0:
              return [4, D2()];
            case 1:
              return [2, t3.sent()];
          }
        });
      });
    };
  }, [D2]), (0, import_react.useEffect)(function() {
    Zi(C2, t2.options) || (S2(false), E2(t2.options));
  }, [t2.options]), { ref: d2, startScanning: O2, stopScanning: D2, loading: m2, scanning: T2, switchTorch: (null === (o2 = g2.current) || void 0 === o2 ? void 0 : o2.switchTorch) ? R2 : void 0, getSettings: B2 };
}
var zi = function(e2) {
  var i2, a2 = e2.enabled, s2 = void 0 === a2 || a2, h2 = e2.onResult, l2 = e2.onError, d2 = e2.styles, p2 = e2.options, g2 = e2.components, w2 = (0, import_react.useState)(), A2 = w2[0], y2 = w2[1];
  var E2 = u(u({}, xi), p2), v2 = u(u({}, Gi), g2), m2 = ji({ onResult: function(t2) {
    return c(this, void 0, void 0, function() {
      return f(this, function(e3) {
        return y2(t2), h2(t2.getText(), t2), [2];
      });
    });
  }, onError: function(t2) {
    null == l2 || l2(t2);
  }, options: E2, audio: null !== (i2 = v2.audio) && void 0 !== i2 && i2 }), I2 = m2.ref, _2 = m2.startScanning, T2 = m2.stopScanning, S2 = m2.loading, B2 = m2.scanning, R2 = m2.switchTorch, D2 = m2.getSettings;
  return (0, import_react.useEffect)(function() {
    s2 ? _2() : T2();
  }, [s2, T2, _2]), import_react.default.createElement(import_react.Fragment, null, import_react.default.createElement("div", { style: u(u({}, Yi), null == d2 ? void 0 : d2.container) }, import_react.default.createElement(C, { video: I2.current, scanning: B2, loading: S2, result: A2, border: null == d2 ? void 0 : d2.finderBorder, options: E2, count: v2.count, onOff: v2.onOff, tracker: v2.tracker, switchTorch: v2.torch ? R2 : void 0, startScanning: _2, stopScanning: T2, getSettings: D2 }), import_react.default.createElement("video", { ref: I2, autoPlay: true, muted: true, playsInline: true, style: u(u({}, qi), null == d2 ? void 0 : d2.video) })));
};
function Ji() {
  var t2 = this, e2 = (0, import_react.useState)([]), o2 = e2[0], i2 = e2[1];
  function a2() {
    return c(this, void 0, void 0, function() {
      var t3;
      return f(this, function(e3) {
        switch (e3.label) {
          case 0:
            return [4, Vi.listVideoInputDevices(true)];
          case 1:
            return t3 = e3.sent() || [], t3 && t3.length > 0 || console.warn("No video input devices found"), [2, t3];
        }
      });
    });
  }
  return (0, import_react.useEffect)(function() {
    c(t2, void 0, void 0, function() {
      var t3;
      return f(this, function(e3) {
        switch (e3.label) {
          case 0:
            return t3 = i2, [4, a2()];
          case 1:
            return t3.apply(void 0, [e3.sent()]), [2];
        }
      });
    });
  }, []), o2;
}
export {
  zi as Scanner,
  ji as useContinuousScanner,
  Ji as useDeviceList
};
//# sourceMappingURL=@yudiel_react-qr-scanner.js.map
