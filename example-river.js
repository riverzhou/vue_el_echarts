var echartsExample = function(t) {
		var e = {};

		function i(a) {
			if (e[a]) return e[a].exports;
			var r = e[a] = {
				i: a,
				l: !1,
				exports: {}
			};
			return t[a].call(r.exports, r, r.exports, i), r.l = !0, r.exports
		}
		return i.m = t, i.c = e, i.d = function(t, e, a) {
			i.o(t, e) || Object.defineProperty(t, e, {
				enumerable: !0,
				get: a
			})
		}, i.r = function(t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, i.t = function(t, e) {
			if (1 & e && (t = i(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var a = Object.create(null);
			if (i.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t) for (var r in t) i.d(a, r, function(e) {
				return t[e]
			}.bind(null, r));
			return a
		}, i.n = function(t) {
			var e = t && t.__esModule ?
			function() {
				return t.
			default
			} : function() {
				return t
			};
			return i.d(e, "a", e), e
		}, i.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, i.p = "", i(i.s = 29)
	}([function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
		t.exports = Vue
	}, function(t, e) {
		t.exports = function(t) {
			var e = typeof t;
			return null != t && ("object" == e || "function" == e)
		}
	}, function(t, e, i) {
		var a = i(14),
			r = "object" == typeof self && self && self.Object === Object && self,
			n = a || r || Function("return this")();
		t.exports = n
	}, function(t, e, i) {
		var a = i(8).Symbol;
		t.exports = a
	}, function(t, e, i) {
		var a = i(7),
			r = i(13),
			n = i(16),
			o = Math.max,
			l = Math.min;
		t.exports = function(t, e, i) {
			var s, c, d, u, f, g, p = 0,
				h = !1,
				m = !1,
				y = !0;
			if ("function" != typeof t) throw new TypeError("Expected a function");

			function v(e) {
				var i = s,
					a = c;
				return s = c = void 0, p = e, u = t.apply(a, i)
			}
			function b(t) {
				return p = t, f = setTimeout(C, e), h ? v(t) : u
			}
			function _(t) {
				var i = t - g;
				return void 0 === g || i >= e || i < 0 || m && t - p >= d
			}
			function C() {
				var t = r();
				if (_(t)) return w(t);
				f = setTimeout(C, function(t) {
					var i = e - (t - g);
					return m ? l(i, d - (t - p)) : i
				}(t))
			}
			function w(t) {
				return f = void 0, y && s ? v(t) : (s = c = void 0, u)
			}
			function x() {
				var t = r(),
					i = _(t);
				if (s = arguments, c = this, g = t, i) {
					if (void 0 === f) return b(g);
					if (m) return clearTimeout(f), f = setTimeout(C, e), v(g)
				}
				return void 0 === f && (f = setTimeout(C, e)), u
			}
			return e = n(e) || 0, a(i) && (h = !! i.leading, d = (m = "maxWait" in i) ? o(n(i.maxWait) || 0, e) : d, y = "trailing" in i ? !! i.trailing : y), x.cancel = function() {
				void 0 !== f && clearTimeout(f), p = 0, s = g = c = f = void 0
			}, x.flush = function() {
				return void 0 === f ? u : w(r())
			}, x
		}
	}, function(t, e, i) {
		"undefined" != typeof self && self, t.exports = function(t) {
			var e = {};

			function i(a) {
				if (e[a]) return e[a].exports;
				var r = e[a] = {
					i: a,
					l: !1,
					exports: {}
				};
				return t[a].call(r.exports, r, r.exports, i), r.l = !0, r.exports
			}
			return i.m = t, i.c = e, i.d = function(t, e, a) {
				i.o(t, e) || Object.defineProperty(t, e, {
					enumerable: !0,
					get: a
				})
			}, i.r = function(t) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(t, "__esModule", {
					value: !0
				})
			}, i.t = function(t, e) {
				if (1 & e && (t = i(t)), 8 & e) return t;
				if (4 & e && "object" == typeof t && t && t.__esModule) return t;
				var a = Object.create(null);
				if (i.r(a), Object.defineProperty(a, "default", {
					enumerable: !0,
					value: t
				}), 2 & e && "string" != typeof t) for (var r in t) i.d(a, r, function(e) {
					return t[e]
				}.bind(null, r));
				return a
			}, i.n = function(t) {
				var e = t && t.__esModule ?
				function() {
					return t.
				default
				} : function() {
					return t
				};
				return i.d(e, "a", e), e
			}, i.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}, i.p = "/dist/", i(i.s = 1)
		}([function(t, e) {
			var i = "function" == typeof Float32Array;

			function a(t, e) {
				return 1 - 3 * e + 3 * t
			}
			function r(t, e) {
				return 3 * e - 6 * t
			}
			function n(t) {
				return 3 * t
			}
			function o(t, e, i) {
				return ((a(e, i) * t + r(e, i)) * t + n(e)) * t
			}
			function l(t, e, i) {
				return 3 * a(e, i) * t * t + 2 * r(e, i) * t + n(e)
			}
			function s(t) {
				return t
			}
			t.exports = function(t, e, a, r) {
				if (!(0 <= t && t <= 1 && 0 <= a && a <= 1)) throw new Error("bezier x values must be in [0, 1] range");
				if (t === e && a === r) return s;
				for (var n = i ? new Float32Array(11) : new Array(11), c = 0; c < 11; ++c) n[c] = o(.1 * c, t, a);

				function d(e) {
					for (var i = 0, r = 1; 10 !== r && n[r] <= e; ++r) i += .1;
					--r;
					var s = i + (e - n[r]) / (n[r + 1] - n[r]) * .1,
						c = l(s, t, a);
					return c >= .001 ?
					function(t, e, i, a) {
						for (var r = 0; r < 4; ++r) {
							var n = l(e, i, a);
							if (0 === n) return e;
							e -= (o(e, i, a) - t) / n
						}
						return e
					}(e, s, t, a) : 0 === c ? s : function(t, e, i, a, r) {
						var n, l, s = 0;
						do {
							(n = o(l = e + (i - e) / 2, a, r) - t) > 0 ? i = l : e = l
						} while (Math.abs(n) > 1e-7 && ++s < 10);
						return l
					}(e, i, i + .1, t, a)
				}
				return function(t) {
					return 0 === t ? 0 : 1 === t ? 1 : o(d(t), e, r)
				}
			}
		}, function(t, e, i) {
			"use strict";
			i.r(e);
			var a = function() {
					var t = this.$createElement;
					return (this._self._c || t)(this.tag, {
						ref: "scrollactive-nav-wrapper",
						tag: "component",
						staticClass: "scrollactive-nav"
					}, [this._t("default")], 2)
				};
			a._withStripped = !0;
			var r = i(0),
				n = i.n(r);

			function o(t) {
				return function(t) {
					if (Array.isArray(t)) return l(t)
				}(t) ||
				function(t) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
				}(t) ||
				function(t, e) {
					if (t) {
						if ("string" == typeof t) return l(t, e);
						var i = Object.prototype.toString.call(t).slice(8, -1);
						return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? l(t, e) : void 0
					}
				}(t) ||
				function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
			function l(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
				return a
			}
			var s = function(t, e, i, a, r, n, o, l) {
					var s, c = "function" == typeof t ? t.options : t;
					if (e && (c.render = e, c.staticRenderFns = [], c._compiled = !0), s) if (c.functional) {
						c._injectStyles = s;
						var d = c.render;
						c.render = function(t, e) {
							return s.call(e), d(t, e)
						}
					} else {
						var u = c.beforeCreate;
						c.beforeCreate = u ? [].concat(u, s) : [s]
					}
					return {
						exports: t,
						options: c
					}
				}({
					props: {
						activeClass: {
							type: String,
						default:
							"is-active"
						},
						offset: {
							type: Number,
						default:
							20
						},
						scrollOffset: {
							type: Number,
						default:
							null
						},
						scrollContainerSelector: {
							type: String,
						default:
							""
						},
						clickToScroll: {
							type: Boolean,
						default:
							!0
						},
						duration: {
							type: Number,
						default:
							600
						},
						alwaysTrack: {
							type: Boolean,
						default:
							!1
						},
						bezierEasingValue: {
							type: String,
						default:
							".5,0,.35,1"
						},
						modifyUrl: {
							type: Boolean,
						default:
							!0
						},
						exact: {
							type: Boolean,
						default:
							!1
						},
						highlightFirstItem: {
							type: Boolean,
						default:
							!1
						},
						tag: {
							type: String,
						default:
							"nav"
						},
						scrollOnStart: {
							type: Boolean,
						default:
							!0
						}
					},
					data: function() {
						return {
							observer: null,
							items: [],
							currentItem: null,
							lastActiveItem: null,
							scrollAnimationFrame: null,
							bezierEasing: n.a
						}
					},
					computed: {
						cubicBezierArray: function() {
							return this.bezierEasingValue.split(",")
						},
						scrollContainer: function() {
							var t = window;
							return this.scrollContainerSelector && (t = document.querySelector(this.scrollContainerSelector) || window), t
						}
					},
					mounted: function() {
						var t = window.MutationObserver || window.WebKitMutationObserver;
						this.observer || (this.observer = new t(this.initScrollactiveItems), this.observer.observe(this.$refs["scrollactive-nav-wrapper"], {
							childList: !0,
							subtree: !0
						})), this.initScrollactiveItems(), this.removeActiveClass(), this.currentItem = this.getItemInsideWindow(), this.currentItem && this.currentItem.classList.add(this.activeClass), this.scrollOnStart && this.scrollToHashElement(), this.scrollContainer.addEventListener("scroll", this.onScroll)
					},
					updated: function() {
						this.initScrollactiveItems()
					},
					beforeDestroy: function() {
						this.scrollContainer.removeEventListener("scroll", this.onScroll), window.cancelAnimationFrame(this.scrollAnimationFrame)
					},
					methods: {
						onScroll: function(t) {
							this.currentItem = this.getItemInsideWindow(), this.currentItem !== this.lastActiveItem && (this.removeActiveClass(), this.$emit("itemchanged", t, this.currentItem, this.lastActiveItem), this.lastActiveItem = this.currentItem), this.currentItem && this.currentItem.classList.add(this.activeClass)
						},
						getItemInsideWindow: function() {
							var t, e = this;
							return [].forEach.call(this.items, (function(i) {
								var a = i === e.items[0],
									r = document.getElementById(decodeURI(i.hash.substr(1)));
								if (r) {
									var n = e.scrollContainer.scrollTop || window.pageYOffset,
										o = n >= e.getOffsetTop(r) - e.offset,
										l = n < e.getOffsetTop(r) - e.offset + r.offsetHeight;
									a && e.highlightFirstItem && l && (t = i), e.exact && o && l && (t = i), !e.exact && o && (t = i)
								}
							})), t
						},
						initScrollactiveItems: function() {
							var t = this;
							this.items = this.$el.querySelectorAll(".scrollactive-item"), this.clickToScroll ? [].forEach.call(this.items, (function(e) {
								e.addEventListener("click", t.handleClick)
							})) : [].forEach.call(this.items, (function(e) {
								e.removeEventListener("click", t.handleClick)
							}))
						},
						setScrollactiveItems: function() {
							this.initScrollactiveItems()
						},
						handleClick: function(t) {
							var e = this;
							t.preventDefault();
							var i = t.currentTarget.hash,
								a = document.getElementById(decodeURI(i.substr(1)));
							a ? (this.alwaysTrack || (this.scrollContainer.removeEventListener("scroll", this.onScroll), window.cancelAnimationFrame(this.scrollAnimationFrame), this.removeActiveClass(), t.currentTarget.classList.add(this.activeClass)), this.scrollTo(a).then((function() {
								e.alwaysTrack || (e.scrollContainer.addEventListener("scroll", e.onScroll), e.currentItem = [].find.call(e.items, (function(t) {
									return decodeURI(t.hash.substr(1)) === a.id
								})), e.currentItem !== e.lastActiveItem && (e.$emit("itemchanged", null, e.currentItem, e.lastActiveItem), e.lastActiveItem = e.currentItem)), e.modifyUrl && e.pushHashToUrl(i)
							}))) : console.warn("[vue-scrollactive] Element '".concat(i, "' was not found. Make sure it is set in the DOM."))
						},
						scrollTo: function(t) {
							var e = this;
							return new Promise((function(i) {
								var a = e.getOffsetTop(t),
									r = e.scrollContainer.scrollTop || window.pageYOffset,
									n = a - r,
									l = e.bezierEasing.apply(e, o(e.cubicBezierArray)),
									s = null;
								window.requestAnimationFrame((function t(a) {
									s || (s = a);
									var o = a - s,
										c = o / e.duration;
									o >= e.duration && (o = e.duration), c >= 1 && (c = 1);
									var d = e.scrollOffset || e.offset,
										u = r + l(c) * (n - d);
									e.scrollContainer.scrollTo(0, u), o < e.duration ? e.scrollAnimationFrame = window.requestAnimationFrame(t) : i()
								}))
							}))
						},
						getOffsetTop: function(t) {
							for (var e = 0, i = t; i;) e += i.offsetTop, i = i.offsetParent;
							return this.scrollContainer.offsetTop && (e -= this.scrollContainer.offsetTop), e
						},
						removeActiveClass: function() {
							var t = this;
							[].forEach.call(this.items, (function(e) {
								e.classList.remove(t.activeClass)
							}))
						},
						scrollToHashElement: function() {
							var t = this,
								e = window.location.hash;
							if (e) {
								var i = document.querySelector(decodeURI(e));
								i && (window.location.hash = "", setTimeout((function() {
									var a = i.offsetTop - t.offset;
									t.scrollContainer.scrollTo(0, a), t.pushHashToUrl(e)
								}), 0))
							}
						},
						pushHashToUrl: function(t) {
							window.history.pushState ? window.history.pushState(null, null, t) : window.location.hash = t
						}
					}
				}, a);
			s.options.__file = "src/scrollactive.vue";
			var c = s.exports,
				d = {
					install: function(t) {
						d.install.installed || t.component("scrollactive", c)
					}
				};
			"undefined" != typeof window && window.Vue && d.install(window.Vue), e.
		default = d
		}])
	}, function(t, e, i) {
		"use strict";
		var a = i(0);
		i.n(a).a
	}, function(t, e, i) {
		var a = i(8);
		t.exports = function() {
			return a.Date.now()
		}
	}, function(t, e, i) {
		(function(e) {
			var i = "object" == typeof e && e && e.Object === Object && e;
			t.exports = i
		}).call(this, i(15))
	}, function(t, e) {
		var i;
		i = function() {
			return this
		}();
		try {
			i = i || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (i = window)
		}
		t.exports = i
	}, function(t, e, i) {
		var a = i(7),
			r = i(17),
			n = /^\s+|\s+$/g,
			o = /^[-+]0x[0-9a-f]+$/i,
			l = /^0b[01]+$/i,
			s = /^0o[0-7]+$/i,
			c = parseInt;
		t.exports = function(t) {
			if ("number" == typeof t) return t;
			if (r(t)) return NaN;
			if (a(t)) {
				var e = "function" == typeof t.valueOf ? t.valueOf() : t;
				t = a(e) ? e + "" : e
			}
			if ("string" != typeof t) return 0 === t ? t : +t;
			t = t.replace(n, "");
			var i = l.test(t);
			return i || s.test(t) ? c(t.slice(2), i ? 2 : 8) : o.test(t) ? NaN : +t
		}
	}, function(t, e, i) {
		var a = i(18),
			r = i(21);
		t.exports = function(t) {
			return "symbol" == typeof t || r(t) && "[object Symbol]" == a(t)
		}
	}, function(t, e, i) {
		var a = i(9),
			r = i(19),
			n = i(20),
			o = a ? a.toStringTag : void 0;
		t.exports = function(t) {
			return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : o && o in Object(t) ? r(t) : n(t)
		}
	}, function(t, e, i) {
		var a = i(9),
			r = Object.prototype,
			n = r.hasOwnProperty,
			o = r.toString,
			l = a ? a.toStringTag : void 0;
		t.exports = function(t) {
			var e = n.call(t, l),
				i = t[l];
			try {
				t[l] = void 0;
				var a = !0
			} catch (t) {}
			var r = o.call(t);
			return a && (e ? t[l] = i : delete t[l]), r
		}
	}, function(t, e) {
		var i = Object.prototype.toString;
		t.exports = function(t) {
			return i.call(t)
		}
	}, function(t, e) {
		t.exports = function(t) {
			return null != t && "object" == typeof t
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(1);
		i.n(a).a
	}, function(t, e, i) {
		"use strict";
		var a = i(2);
		i.n(a).a
	}, function(t, e, i) {
		"use strict";
		var a = i(3);
		i.n(a).a
	}, function(t, e, i) {
		t.exports = i.p + "../asset/placeholder.jpg"
	}, function(t, e, i) {
		"use strict";
		var a = i(4);
		i.n(a).a
	}, function(t, e) {
		function i(t, e, i) {
			t.self === t ? t.scrollTo(e, i) : (t.scrollLeft = e, t.scrollTop = i)
		}
		function a(t) {
			var e = t._scrollSettings;
			if (e) {
				var r = e.maxSynchronousAlignments,
					n = function(t, e) {
						var i, a, r, n, o, l, s, c = t.align,
							d = t.target.getBoundingClientRect(),
							u = c && null != c.left ? c.left : .5,
							f = c && null != c.top ? c.top : .5,
							g = c && null != c.leftOffset ? c.leftOffset : 0,
							p = c && null != c.topOffset ? c.topOffset : 0,
							h = u,
							m = f;
						if (t.isWindow(e)) l = Math.min(d.width, e.innerWidth), s = Math.min(d.height, e.innerHeight), a = d.left + e.pageXOffset - e.innerWidth * h + l * h, r = d.top + e.pageYOffset - e.innerHeight * m + s * m, r -= p, n = (a -= g) - e.pageXOffset, o = r - e.pageYOffset;
						else {
							l = d.width, s = d.height, i = e.getBoundingClientRect();
							var y = d.left - (i.left - e.scrollLeft),
								v = d.top - (i.top - e.scrollTop);
							a = y + l * h - e.clientWidth * h, r = v + s * m - e.clientHeight * m, a -= g, r -= p, a = Math.max(Math.min(a, e.scrollWidth - e.clientWidth), 0), r = Math.max(Math.min(r, e.scrollHeight - e.clientHeight), 0), n = a - e.scrollLeft, o = r - e.scrollTop
						}
						return {
							x: a,
							y: r,
							differenceX: n,
							differenceY: o
						}
					}(e, t),
					o = Date.now() - e.startTime,
					l = Math.min(1 / e.time * o, 1);
				if (e.endIterations >= r) return i(t, n.x, n.y), t._scrollSettings = null, e.end("complete");
				var s = 1 - e.ease(l);
				if (i(t, n.x - n.differenceX * s, n.y - n.differenceY * s), o >= e.time) return e.endIterations++, a(t);
				!
				function(t) {
					if ("requestAnimationFrame" in window) return window.requestAnimationFrame(t);
					setTimeout(t, 16)
				}(a.bind(null, t))
			}
		}
		function r(t) {
			return t.self === t
		}
		function n(t, e, i, n) {
			var o, l = !e._scrollSettings,
				s = e._scrollSettings,
				c = Date.now(),
				d = {
					passive: !0
				};

			function u(t) {
				e._scrollSettings = null, e.parentElement && e.parentElement._scrollSettings && e.parentElement._scrollSettings.end(t), i.debug && console.log("Scrolling ended with type", t, "for", e), n(t), o && (e.removeEventListener("touchstart", o, d), e.removeEventListener("wheel", o, d))
			}
			s && s.end("canceled");
			var f = i.maxSynchronousAlignments;
			return null == f && (f = 3), e._scrollSettings = {
				startTime: c,
				endIterations: 0,
				target: t,
				time: i.time,
				ease: i.ease,
				align: i.align,
				isWindow: i.isWindow || r,
				maxSynchronousAlignments: f,
				end: u
			}, "cancellable" in i && !i.cancellable || (o = u.bind(null, "canceled"), e.addEventListener("touchstart", o, d), e.addEventListener("wheel", o, d)), l && a(e), o
		}
		function o(t) {
			return "pageXOffset" in t || (t.scrollHeight !== t.clientHeight || t.scrollWidth !== t.clientWidth) && "hidden" !== getComputedStyle(t).overflow
		}
		function l() {
			return !0
		}
		function s(t) {
			if (t.assignedSlot) return s(t.assignedSlot);
			if (t.parentElement) return "BODY" === t.parentElement.tagName ? t.parentElement.ownerDocument.defaultView || t.parentElement.ownerDocument.ownerWindow : t.parentElement;
			if (t.getRootNode) {
				var e = t.getRootNode();
				if (11 === e.nodeType) return e.host
			}
		}
		t.exports = function(t, e, i) {
			if (t) {
				"function" == typeof e && (i = e, e = null), e || (e = {}), e.time = isNaN(e.time) ? 1e3 : e.time, e.ease = e.ease ||
				function(t) {
					return 1 - Math.pow(1 - t, t / 2)
				};
				var a, r = s(t),
					c = 1,
					d = e.validTarget || l,
					u = e.isScrollable;
				for (e.debug && (console.log("About to scroll to", t), r || console.error("Target did not have a parent, is it mounted in the DOM?")); r;) if (e.debug && console.log("Scrolling parent node", r), d(r, c) && (u ? u(r, o) : o(r)) && (c++, a = n(t, r, e, f)), !(r = s(r))) {
					f("complete");
					break
				}
				return a
			}
			function f(t) {
				--c || i && i(t)
			}
		}
	}, function(t, e, i) {
		"use strict";
		var a = i(5);
		i.n(a).a
	}, function(t, e, i) {
		"use strict";
		i.r(e), i.d(e, "init", (function() {
			return Ye
		}));
		var a = i(6),
			r = i.n(a),
			n = ["style", "currency", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "localeMatcher", "formatMatcher", "unit"];

		function o(t, e) {
			"undefined" != typeof console && (console.warn("[vue-i18n] " + t), e && console.warn(e.stack))
		}
		var l = Array.isArray;

		function s(t) {
			return null !== t && "object" == typeof t
		}
		function c(t) {
			return "string" == typeof t
		}
		var d = Object.prototype.toString;

		function u(t) {
			return "[object Object]" === d.call(t)
		}
		function f(t) {
			return null == t
		}
		function g() {
			for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
			var i = null,
				a = null;
			return 1 === t.length ? s(t[0]) || Array.isArray(t[0]) ? a = t[0] : "string" == typeof t[0] && (i = t[0]) : 2 === t.length && ("string" == typeof t[0] && (i = t[0]), (s(t[1]) || Array.isArray(t[1])) && (a = t[1])), {
				locale: i,
				params: a
			}
		}
		function p(t) {
			return JSON.parse(JSON.stringify(t))
		}
		function h(t, e) {
			return !!~t.indexOf(e)
		}
		var m = Object.prototype.hasOwnProperty;

		function y(t, e) {
			return m.call(t, e)
		}
		function v(t) {
			for (var e = arguments, i = Object(t), a = 1; a < arguments.length; a++) {
				var r = e[a];
				if (null != r) {
					var n = void 0;
					for (n in r) y(r, n) && (s(r[n]) ? i[n] = v(i[n], r[n]) : i[n] = r[n])
				}
			}
			return i
		}
		function b(t, e) {
			if (t === e) return !0;
			var i = s(t),
				a = s(e);
			if (!i || !a) return !i && !a && String(t) === String(e);
			try {
				var r = Array.isArray(t),
					n = Array.isArray(e);
				if (r && n) return t.length === e.length && t.every((function(t, i) {
					return b(t, e[i])
				}));
				if (r || n) return !1;
				var o = Object.keys(t),
					l = Object.keys(e);
				return o.length === l.length && o.every((function(i) {
					return b(t[i], e[i])
				}))
			} catch (t) {
				return !1
			}
		}
		var _ = {
			beforeCreate: function() {
				var t = this.$options;
				if (t.i18n = t.i18n || (t.__i18n ? {} : null), t.i18n) if (t.i18n instanceof Y) {
					if (t.__i18n) try {
						var e = {};
						t.__i18n.forEach((function(t) {
							e = v(e, JSON.parse(t))
						})), Object.keys(e).forEach((function(i) {
							t.i18n.mergeLocaleMessage(i, e[i])
						}))
					} catch (t) {
						0
					}
					this._i18n = t.i18n, this._i18nWatcher = this._i18n.watchI18nData()
				} else if (u(t.i18n)) {
					var i = this.$root && this.$root.$i18n && this.$root.$i18n instanceof Y ? this.$root.$i18n : null;
					if (i && (t.i18n.root = this.$root, t.i18n.formatter = i.formatter, t.i18n.fallbackLocale = i.fallbackLocale, t.i18n.formatFallbackMessages = i.formatFallbackMessages, t.i18n.silentTranslationWarn = i.silentTranslationWarn, t.i18n.silentFallbackWarn = i.silentFallbackWarn, t.i18n.pluralizationRules = i.pluralizationRules, t.i18n.preserveDirectiveContent = i.preserveDirectiveContent), t.__i18n) try {
						var a = {};
						t.__i18n.forEach((function(t) {
							a = v(a, JSON.parse(t))
						})), t.i18n.messages = a
					} catch (t) {
						0
					}
					var r = t.i18n.sharedMessages;
					r && u(r) && (t.i18n.messages = v(t.i18n.messages, r)), this._i18n = new Y(t.i18n), this._i18nWatcher = this._i18n.watchI18nData(), (void 0 === t.i18n.sync || t.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale()), i && i.onComponentInstanceCreated(this._i18n)
				} else 0;
				else this.$root && this.$root.$i18n && this.$root.$i18n instanceof Y ? this._i18n = this.$root.$i18n : t.parent && t.parent.$i18n && t.parent.$i18n instanceof Y && (this._i18n = t.parent.$i18n)
			},
			beforeMount: function() {
				var t = this.$options;
				t.i18n = t.i18n || (t.__i18n ? {} : null), t.i18n ? (t.i18n instanceof Y || u(t.i18n)) && (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : (this.$root && this.$root.$i18n && this.$root.$i18n instanceof Y || t.parent && t.parent.$i18n && t.parent.$i18n instanceof Y) && (this._i18n.subscribeDataChanging(this), this._subscribing = !0)
			},
			beforeDestroy: function() {
				if (this._i18n) {
					var t = this;
					this.$nextTick((function() {
						t._subscribing && (t._i18n.unsubscribeDataChanging(t), delete t._subscribing), t._i18nWatcher && (t._i18nWatcher(), t._i18n.destroyVM(), delete t._i18nWatcher), t._localeWatcher && (t._localeWatcher(), delete t._localeWatcher)
					}))
				}
			}
		},
			C = {
				name: "i18n",
				functional: !0,
				props: {
					tag: {
						type: [String, Boolean, Object],
					default:
						"span"
					},
					path: {
						type: String,
						required: !0
					},
					locale: {
						type: String
					},
					places: {
						type: [Array, Object]
					}
				},
				render: function(t, e) {
					var i = e.data,
						a = e.parent,
						r = e.props,
						n = e.slots,
						o = a.$i18n;
					if (o) {
						var l = r.path,
							s = r.locale,
							c = r.places,
							d = n(),
							u = o.i(l, s, function(t) {
								var e;
								for (e in t) if ("default" !== e) return !1;
								return Boolean(e)
							}(d) || c ?
							function(t, e) {
								var i = e ?
								function(t) {
									0;
									return Array.isArray(t) ? t.reduce(x, {}) : Object.assign({}, t)
								}(e) : {};
								if (!t) return i;
								var a = (t = t.filter((function(t) {
									return t.tag || "" !== t.text.trim()
								}))).every(N);
								0;
								return t.reduce(a ? w : x, i)
							}(d.
						default, c) : d),
							f = r.tag && !0 !== r.tag || !1 === r.tag ? r.tag : "span";
						return f ? t(f, i, u) : u
					}
				}
			};

		function w(t, e) {
			return e.data && e.data.attrs && e.data.attrs.place && (t[e.data.attrs.place] = e), t
		}
		function x(t, e, i) {
			return t[i] = e, t
		}
		function N(t) {
			return Boolean(t.data && t.data.attrs && t.data.attrs.place)
		}
		var S, k = {
			name: "i18n-n",
			functional: !0,
			props: {
				tag: {
					type: [String, Boolean, Object],
				default:
					"span"
				},
				value: {
					type: Number,
					required: !0
				},
				format: {
					type: [String, Object]
				},
				locale: {
					type: String
				}
			},
			render: function(t, e) {
				var i = e.props,
					a = e.parent,
					r = e.data,
					o = a.$i18n;
				if (!o) return null;
				var l = null,
					d = null;
				c(i.format) ? l = i.format : s(i.format) && (i.format.key && (l = i.format.key), d = Object.keys(i.format).reduce((function(t, e) {
					var a;
					return h(n, e) ? Object.assign({}, t, ((a = {})[e] = i.format[e], a)) : t
				}), null));
				var u = i.locale || o.locale,
					f = o._ntp(i.value, u, l, d),
					g = f.map((function(t, e) {
						var i, a = r.scopedSlots && r.scopedSlots[t.type];
						return a ? a(((i = {})[t.type] = t.value, i.index = e, i.parts = f, i)) : t.value
					})),
					p = i.tag && !0 !== i.tag || !1 === i.tag ? i.tag : "span";
				return p ? t(p, {
					attrs: r.attrs,
					class: r.class,
					staticClass: r.staticClass
				}, g) : g
			}
		};

		function D(t, e, i) {
			M(t, i) && E(t, e, i)
		}
		function L(t, e, i, a) {
			if (M(t, i)) {
				var r = i.context.$i18n;
				(function(t, e) {
					var i = e.context;
					return t._locale === i.$i18n.locale
				})(t, i) && b(e.value, e.oldValue) && b(t._localeMessage, r.getLocaleMessage(r.locale)) || E(t, e, i)
			}
		}
		function T(t, e, i, a) {
			if (i.context) {
				var r = i.context.$i18n || {};
				e.modifiers.preserve || r.preserveDirectiveContent || (t.textContent = ""), t._vt = void 0, delete t._vt, t._locale = void 0, delete t._locale, t._localeMessage = void 0, delete t._localeMessage
			} else o("Vue instance does not exists in VNode context")
		}
		function M(t, e) {
			var i = e.context;
			return i ? !! i.$i18n || (o("VueI18n instance does not exists in Vue instance"), !1) : (o("Vue instance does not exists in VNode context"), !1)
		}
		function E(t, e, i) {
			var a, r, n = function(t) {
					var e, i, a, r;
					c(t) ? e = t : u(t) && (e = t.path, i = t.locale, a = t.args, r = t.choice);
					return {
						path: e,
						locale: i,
						args: a,
						choice: r
					}
				}(e.value),
				l = n.path,
				s = n.locale,
				d = n.args,
				f = n.choice;
			if (l || s || d) if (l) {
				var g = i.context;
				t._vt = t.textContent = null != f ? (a = g.$i18n).tc.apply(a, [l, f].concat(A(s, d))) : (r = g.$i18n).t.apply(r, [l].concat(A(s, d))), t._locale = g.$i18n.locale, t._localeMessage = g.$i18n.getLocaleMessage(g.$i18n.locale)
			} else o("`path` is required in v-t directive");
			else o("value type not supported")
		}
		function A(t, e) {
			var i = [];
			return t && i.push(t), e && (Array.isArray(e) || u(e)) && i.push(e), i
		}
		function O(t) {
			O.installed = !0;
			(S = t).version && Number(S.version.split(".")[0]);
			(function(t) {
				t.prototype.hasOwnProperty("$i18n") || Object.defineProperty(t.prototype, "$i18n", {
					get: function() {
						return this._i18n
					}
				}), t.prototype.$t = function(t) {
					for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
					var a = this.$i18n;
					return a._t.apply(a, [t, a.locale, a._getMessages(), this].concat(e))
				}, t.prototype.$tc = function(t, e) {
					for (var i = [], a = arguments.length - 2; a-- > 0;) i[a] = arguments[a + 2];
					var r = this.$i18n;
					return r._tc.apply(r, [t, r.locale, r._getMessages(), this, e].concat(i))
				}, t.prototype.$te = function(t, e) {
					var i = this.$i18n;
					return i._te(t, i.locale, i._getMessages(), e)
				}, t.prototype.$d = function(t) {
					for (var e, i = [], a = arguments.length - 1; a-- > 0;) i[a] = arguments[a + 1];
					return (e = this.$i18n).d.apply(e, [t].concat(i))
				}, t.prototype.$n = function(t) {
					for (var e, i = [], a = arguments.length - 1; a-- > 0;) i[a] = arguments[a + 1];
					return (e = this.$i18n).n.apply(e, [t].concat(i))
				}
			})(S), S.mixin(_), S.directive("t", {
				bind: D,
				update: L,
				unbind: T
			}), S.component(C.name, C), S.component(k.name, k), S.config.optionMergeStrategies.i18n = function(t, e) {
				return void 0 === e ? t : e
			}
		}
		var I = function() {
				this._caches = Object.create(null)
			};
		I.prototype.interpolate = function(t, e) {
			if (!e) return [t];
			var i = this._caches[t];
			return i || (i = function(t) {
				var e = [],
					i = 0,
					a = "";
				for (; i < t.length;) {
					var r = t[i++];
					if ("{" === r) {
						a && e.push({
							type: "text",
							value: a
						}), a = "";
						var n = "";
						for (r = t[i++]; void 0 !== r && "}" !== r;) n += r, r = t[i++];
						var o = "}" === r,
							l = R.test(n) ? "list" : o && F.test(n) ? "named" : "unknown";
						e.push({
							value: n,
							type: l
						})
					} else "%" === r ? "{" !== t[i] && (a += r) : a += r
				}
				return a && e.push({
					type: "text",
					value: a
				}), e
			}(t), this._caches[t] = i), function(t, e) {
				var i = [],
					a = 0,
					r = Array.isArray(e) ? "list" : s(e) ? "named" : "unknown";
				if ("unknown" === r) return i;
				for (; a < t.length;) {
					var n = t[a];
					switch (n.type) {
					case "text":
						i.push(n.value);
						break;
					case "list":
						i.push(e[parseInt(n.value, 10)]);
						break;
					case "named":
						"named" === r && i.push(e[n.value]);
						break;
					case "unknown":
						0
					}
					a++
				}
				return i
			}(i, e)
		};
		var R = /^(?:\d)+/,
			F = /^(?:\w)+/;
		var P = [];
		P[0] = {
			ws: [0],
			ident: [3, 0],
			"[": [4],
			eof: [7]
		}, P[1] = {
			ws: [1],
			".": [2],
			"[": [4],
			eof: [7]
		}, P[2] = {
			ws: [2],
			ident: [3, 0],
			0: [3, 0],
			number: [3, 0]
		}, P[3] = {
			ident: [3, 0],
			0: [3, 0],
			number: [3, 0],
			ws: [1, 1],
			".": [2, 1],
			"[": [4, 1],
			eof: [7, 1]
		}, P[4] = {
			"'": [5, 0],
			'"': [6, 0],
			"[": [4, 2],
			"]": [1, 3],
			eof: 8,
			else: [4, 0]
		}, P[5] = {
			"'": [4, 0],
			eof: 8,
			else: [5, 0]
		}, P[6] = {
			'"': [4, 0],
			eof: 8,
			else: [6, 0]
		};
		var j = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

		function z(t) {
			if (null == t) return "eof";
			switch (t.charCodeAt(0)) {
			case 91:
			case 93:
			case 46:
			case 34:
			case 39:
				return t;
			case 95:
			case 36:
			case 45:
				return "ident";
			case 9:
			case 10:
			case 13:
			case 160:
			case 65279:
			case 8232:
			case 8233:
				return "ws"
			}
			return "ident"
		}
		function B(t) {
			var e, i, a, r = t.trim();
			return ("0" !== t.charAt(0) || !isNaN(t)) && (a = r, j.test(a) ? (i = (e = r).charCodeAt(0)) !== e.charCodeAt(e.length - 1) || 34 !== i && 39 !== i ? e : e.slice(1, -1) : "*" + r)
		}
		var G = function() {
				this._cache = Object.create(null)
			};
		G.prototype.parsePath = function(t) {
			var e = this._cache[t];
			return e || (e = function(t) {
				var e, i, a, r, n, o, l, s = [],
					c = -1,
					d = 0,
					u = 0,
					f = [];

				function g() {
					var e = t[c + 1];
					if (5 === d && "'" === e || 6 === d && '"' === e) return c++, a = "\\" + e, f[0](), !0
				}
				for (f[1] = function() {
					void 0 !== i && (s.push(i), i = void 0)
				}, f[0] = function() {
					void 0 === i ? i = a : i += a
				}, f[2] = function() {
					f[0](), u++
				}, f[3] = function() {
					if (u > 0) u--, d = 4, f[0]();
					else {
						if (u = 0, void 0 === i) return !1;
						if (!1 === (i = B(i))) return !1;
						f[1]()
					}
				}; null !== d;) if (c++, "\\" !== (e = t[c]) || !g()) {
					if (r = z(e), 8 === (n = (l = P[d])[r] || l.
					else || 8)) return;
					if (d = n[0], (o = f[n[1]]) && (a = void 0 === (a = n[2]) ? e : a, !1 === o())) return;
					if (7 === d) return s
				}
			}(t)) && (this._cache[t] = e), e || []
		}, G.prototype.getPathValue = function(t, e) {
			if (!s(t)) return null;
			var i = this.parsePath(e);
			if (0 === i.length) return null;
			for (var a = i.length, r = t, n = 0; n < a;) {
				var o = r[i[n]];
				if (void 0 === o) return null;
				r = o, n++
			}
			return r
		};
		var W, H = /<\/?[\w\s="/.':;#-\/]+>/,
			V = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,
			U = /^@(?:\.([a-z]+))?:/,
			q = /[()]/g,
			J = {
				upper: function(t) {
					return t.toLocaleUpperCase()
				},
				lower: function(t) {
					return t.toLocaleLowerCase()
				},
				capitalize: function(t) {
					return "" + t.charAt(0).toLocaleUpperCase() + t.substr(1)
				}
			},
			Z = new I,
			Y = function(t) {
				var e = this;
				void 0 === t && (t = {}), !S && "undefined" != typeof window && window.Vue && O(window.Vue);
				var i = t.locale || "en-US",
					a = !1 !== t.fallbackLocale && (t.fallbackLocale || "en-US"),
					r = t.messages || {},
					n = t.dateTimeFormats || {},
					o = t.numberFormats || {};
				this._vm = null, this._formatter = t.formatter || Z, this._modifiers = t.modifiers || {}, this._missing = t.missing || null, this._root = t.root || null, this._sync = void 0 === t.sync || !! t.sync, this._fallbackRoot = void 0 === t.fallbackRoot || !! t.fallbackRoot, this._formatFallbackMessages = void 0 !== t.formatFallbackMessages && !! t.formatFallbackMessages, this._silentTranslationWarn = void 0 !== t.silentTranslationWarn && t.silentTranslationWarn, this._silentFallbackWarn = void 0 !== t.silentFallbackWarn && !! t.silentFallbackWarn, this._dateTimeFormatters = {}, this._numberFormatters = {}, this._path = new G, this._dataListeners = [], this._componentInstanceCreatedListener = t.componentInstanceCreatedListener || null, this._preserveDirectiveContent = void 0 !== t.preserveDirectiveContent && !! t.preserveDirectiveContent, this.pluralizationRules = t.pluralizationRules || {}, this._warnHtmlInMessage = t.warnHtmlInMessage || "off", this._postTranslation = t.postTranslation || null, this.getChoiceIndex = function(t, i) {
					var a = Object.getPrototypeOf(e);
					if (a && a.getChoiceIndex) return a.getChoiceIndex.call(e, t, i);
					var r, n;
					return e.locale in e.pluralizationRules ? e.pluralizationRules[e.locale].apply(e, [t, i]) : (r = t, n = i, r = Math.abs(r), 2 === n ? r ? r > 1 ? 1 : 0 : 1 : r ? Math.min(r, 2) : 0)
				}, this._exist = function(t, i) {
					return !(!t || !i) && (!f(e._path.getPathValue(t, i)) || !! t[i])
				}, "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || Object.keys(r).forEach((function(t) {
					e._checkLocaleMessage(t, e._warnHtmlInMessage, r[t])
				})), this._initVM({
					locale: i,
					fallbackLocale: a,
					messages: r,
					dateTimeFormats: n,
					numberFormats: o
				})
			},
			X = {
				vm: {
					configurable: !0
				},
				messages: {
					configurable: !0
				},
				dateTimeFormats: {
					configurable: !0
				},
				numberFormats: {
					configurable: !0
				},
				availableLocales: {
					configurable: !0
				},
				locale: {
					configurable: !0
				},
				fallbackLocale: {
					configurable: !0
				},
				formatFallbackMessages: {
					configurable: !0
				},
				missing: {
					configurable: !0
				},
				formatter: {
					configurable: !0
				},
				silentTranslationWarn: {
					configurable: !0
				},
				silentFallbackWarn: {
					configurable: !0
				},
				preserveDirectiveContent: {
					configurable: !0
				},
				warnHtmlInMessage: {
					configurable: !0
				},
				postTranslation: {
					configurable: !0
				}
			};
		Y.prototype._checkLocaleMessage = function(t, e, i) {
			var a = function(t, e, i, r) {
					if (u(i)) Object.keys(i).forEach((function(n) {
						var o = i[n];
						u(o) ? (r.push(n), r.push("."), a(t, e, o, r), r.pop(), r.pop()) : (r.push(n), a(t, e, o, r), r.pop())
					}));
					else if (Array.isArray(i)) i.forEach((function(i, n) {
						u(i) ? (r.push("[" + n + "]"), r.push("."), a(t, e, i, r), r.pop(), r.pop()) : (r.push("[" + n + "]"), a(t, e, i, r), r.pop())
					}));
					else if (c(i)) {
						if (H.test(i)) {
							var n = "Detected HTML in message '" + i + "' of keypath '" + r.join("") + "' at '" + e + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
							"warn" === t ? o(n) : "error" === t &&
							function(t, e) {
								"undefined" != typeof console && (console.error("[vue-i18n] " + t), e && console.error(e.stack))
							}(n)
						}
					}
				};
			a(e, t, i, [])
		}, Y.prototype._initVM = function(t) {
			var e = S.config.silent;
			S.config.silent = !0, this._vm = new S({
				data: t
			}), S.config.silent = e
		}, Y.prototype.destroyVM = function() {
			this._vm.$destroy()
		}, Y.prototype.subscribeDataChanging = function(t) {
			this._dataListeners.push(t)
		}, Y.prototype.unsubscribeDataChanging = function(t) {
			!
			function(t, e) {
				if (t.length) {
					var i = t.indexOf(e);
					if (i > -1) t.splice(i, 1)
				}
			}(this._dataListeners, t)
		}, Y.prototype.watchI18nData = function() {
			var t = this;
			return this._vm.$watch("$data", (function() {
				for (var e = t._dataListeners.length; e--;) S.nextTick((function() {
					t._dataListeners[e] && t._dataListeners[e].$forceUpdate()
				}))
			}), {
				deep: !0
			})
		}, Y.prototype.watchLocale = function() {
			if (!this._sync || !this._root) return null;
			var t = this._vm;
			return this._root.$i18n.vm.$watch("locale", (function(e) {
				t.$set(t, "locale", e), t.$forceUpdate()
			}), {
				immediate: !0
			})
		}, Y.prototype.onComponentInstanceCreated = function(t) {
			this._componentInstanceCreatedListener && this._componentInstanceCreatedListener(t, this)
		}, X.vm.get = function() {
			return this._vm
		}, X.messages.get = function() {
			return p(this._getMessages())
		}, X.dateTimeFormats.get = function() {
			return p(this._getDateTimeFormats())
		}, X.numberFormats.get = function() {
			return p(this._getNumberFormats())
		}, X.availableLocales.get = function() {
			return Object.keys(this.messages).sort()
		}, X.locale.get = function() {
			return this._vm.locale
		}, X.locale.set = function(t) {
			this._vm.$set(this._vm, "locale", t)
		}, X.fallbackLocale.get = function() {
			return this._vm.fallbackLocale
		}, X.fallbackLocale.set = function(t) {
			this._localeChainCache = {}, this._vm.$set(this._vm, "fallbackLocale", t)
		}, X.formatFallbackMessages.get = function() {
			return this._formatFallbackMessages
		}, X.formatFallbackMessages.set = function(t) {
			this._formatFallbackMessages = t
		}, X.missing.get = function() {
			return this._missing
		}, X.missing.set = function(t) {
			this._missing = t
		}, X.formatter.get = function() {
			return this._formatter
		}, X.formatter.set = function(t) {
			this._formatter = t
		}, X.silentTranslationWarn.get = function() {
			return this._silentTranslationWarn
		}, X.silentTranslationWarn.set = function(t) {
			this._silentTranslationWarn = t
		}, X.silentFallbackWarn.get = function() {
			return this._silentFallbackWarn
		}, X.silentFallbackWarn.set = function(t) {
			this._silentFallbackWarn = t
		}, X.preserveDirectiveContent.get = function() {
			return this._preserveDirectiveContent
		}, X.preserveDirectiveContent.set = function(t) {
			this._preserveDirectiveContent = t
		}, X.warnHtmlInMessage.get = function() {
			return this._warnHtmlInMessage
		}, X.warnHtmlInMessage.set = function(t) {
			var e = this,
				i = this._warnHtmlInMessage;
			if (this._warnHtmlInMessage = t, i !== t && ("warn" === t || "error" === t)) {
				var a = this._getMessages();
				Object.keys(a).forEach((function(t) {
					e._checkLocaleMessage(t, e._warnHtmlInMessage, a[t])
				}))
			}
		}, X.postTranslation.get = function() {
			return this._postTranslation
		}, X.postTranslation.set = function(t) {
			this._postTranslation = t
		}, Y.prototype._getMessages = function() {
			return this._vm.messages
		}, Y.prototype._getDateTimeFormats = function() {
			return this._vm.dateTimeFormats
		}, Y.prototype._getNumberFormats = function() {
			return this._vm.numberFormats
		}, Y.prototype._warnDefault = function(t, e, i, a, r, n) {
			if (!f(i)) return i;
			if (this._missing) {
				var o = this._missing.apply(null, [t, e, a, r]);
				if (c(o)) return o
			} else 0;
			if (this._formatFallbackMessages) {
				var l = g.apply(void 0, r);
				return this._render(e, n, l.params, e)
			}
			return e
		}, Y.prototype._isFallbackRoot = function(t) {
			return !t && !f(this._root) && this._fallbackRoot
		}, Y.prototype._isSilentFallbackWarn = function(t) {
			return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(t) : this._silentFallbackWarn
		}, Y.prototype._isSilentFallback = function(t, e) {
			return this._isSilentFallbackWarn(e) && (this._isFallbackRoot() || t !== this.fallbackLocale)
		}, Y.prototype._isSilentTranslationWarn = function(t) {
			return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(t) : this._silentTranslationWarn
		}, Y.prototype._interpolate = function(t, e, i, a, r, n, o) {
			if (!e) return null;
			var l, s = this._path.getPathValue(e, i);
			if (Array.isArray(s) || u(s)) return s;
			if (f(s)) {
				if (!u(e)) return null;
				if (!c(l = e[i])) return null
			} else {
				if (!c(s)) return null;
				l = s
			}
			return (l.indexOf("@:") >= 0 || l.indexOf("@.") >= 0) && (l = this._link(t, e, l, a, "raw", n, o)), this._render(l, r, n, i)
		}, Y.prototype._link = function(t, e, i, a, r, n, o) {
			var l = i,
				s = l.match(V);
			for (var c in s) if (s.hasOwnProperty(c)) {
				var d = s[c],
					u = d.match(U),
					f = u[0],
					g = u[1],
					p = d.replace(f, "").replace(q, "");
				if (h(o, p)) return l;
				o.push(p);
				var m = this._interpolate(t, e, p, a, "raw" === r ? "string" : r, "raw" === r ? void 0 : n, o);
				if (this._isFallbackRoot(m)) {
					if (!this._root) throw Error("unexpected error");
					var y = this._root.$i18n;
					m = y._translate(y._getMessages(), y.locale, y.fallbackLocale, p, a, r, n)
				}
				m = this._warnDefault(t, p, m, a, Array.isArray(n) ? n : [n], r), this._modifiers.hasOwnProperty(g) ? m = this._modifiers[g](m) : J.hasOwnProperty(g) && (m = J[g](m)), o.pop(), l = m ? l.replace(d, m) : l
			}
			return l
		}, Y.prototype._render = function(t, e, i, a) {
			var r = this._formatter.interpolate(t, i, a);
			return r || (r = Z.interpolate(t, i, a)), "string" !== e || c(r) ? r : r.join("")
		}, Y.prototype._appendItemToChain = function(t, e, i) {
			var a = !1;
			return h(t, e) || (a = !0, e && (a = "!" !== e[e.length - 1], e = e.replace(/!/g, ""), t.push(e), i && i[e] && (a = i[e]))), a
		}, Y.prototype._appendLocaleToChain = function(t, e, i) {
			var a, r = e.split("-");
			do {
				var n = r.join("-");
				a = this._appendItemToChain(t, n, i), r.splice(-1, 1)
			} while (r.length && !0 === a);
			return a
		}, Y.prototype._appendBlockToChain = function(t, e, i) {
			for (var a = !0, r = 0; r < e.length && "boolean" == typeof a; r++) {
				var n = e[r];
				c(n) && (a = this._appendLocaleToChain(t, n, i))
			}
			return a
		}, Y.prototype._getLocaleChain = function(t, e) {
			if ("" === t) return [];
			this._localeChainCache || (this._localeChainCache = {});
			var i = this._localeChainCache[t];
			if (!i) {
				e || (e = this.fallbackLocale), i = [];
				for (var a, r = [t]; l(r);) r = this._appendBlockToChain(i, r, e);
				(r = c(a = l(e) ? e : s(e) ? e.
			default ?e.
			default:
				null : e) ? [a] : a) && this._appendBlockToChain(i, r, null), this._localeChainCache[t] = i
			}
			return i
		}, Y.prototype._translate = function(t, e, i, a, r, n, o) {
			for (var l, s = this._getLocaleChain(e, i), c = 0; c < s.length; c++) {
				var d = s[c];
				if (!f(l = this._interpolate(d, t[d], a, r, n, o, [a]))) return l
			}
			return null
		}, Y.prototype._t = function(t, e, i, a) {
			for (var r, n = [], o = arguments.length - 4; o-- > 0;) n[o] = arguments[o + 4];
			if (!t) return "";
			var l = g.apply(void 0, n),
				s = l.locale || e,
				c = this._translate(i, s, this.fallbackLocale, t, a, "string", l.params);
			if (this._isFallbackRoot(c)) {
				if (!this._root) throw Error("unexpected error");
				return (r = this._root).$t.apply(r, [t].concat(n))
			}
			return c = this._warnDefault(s, t, c, a, n, "string"), this._postTranslation && null != c && (c = this._postTranslation(c, t)), c
		}, Y.prototype.t = function(t) {
			for (var e, i = [], a = arguments.length - 1; a-- > 0;) i[a] = arguments[a + 1];
			return (e = this)._t.apply(e, [t, this.locale, this._getMessages(), null].concat(i))
		}, Y.prototype._i = function(t, e, i, a, r) {
			var n = this._translate(i, e, this.fallbackLocale, t, a, "raw", r);
			if (this._isFallbackRoot(n)) {
				if (!this._root) throw Error("unexpected error");
				return this._root.$i18n.i(t, e, r)
			}
			return this._warnDefault(e, t, n, a, [r], "raw")
		}, Y.prototype.i = function(t, e, i) {
			return t ? (c(e) || (e = this.locale), this._i(t, e, this._getMessages(), null, i)) : ""
		}, Y.prototype._tc = function(t, e, i, a, r) {
			for (var n, o = [], l = arguments.length - 5; l-- > 0;) o[l] = arguments[l + 5];
			if (!t) return "";
			void 0 === r && (r = 1);
			var s = {
				count: r,
				n: r
			},
				c = g.apply(void 0, o);
			return c.params = Object.assign(s, c.params), o = null === c.locale ? [c.params] : [c.locale, c.params], this.fetchChoice((n = this)._t.apply(n, [t, e, i, a].concat(o)), r)
		}, Y.prototype.fetchChoice = function(t, e) {
			if (!t && !c(t)) return null;
			var i = t.split("|");
			return i[e = this.getChoiceIndex(e, i.length)] ? i[e].trim() : t
		}, Y.prototype.tc = function(t, e) {
			for (var i, a = [], r = arguments.length - 2; r-- > 0;) a[r] = arguments[r + 2];
			return (i = this)._tc.apply(i, [t, this.locale, this._getMessages(), null, e].concat(a))
		}, Y.prototype._te = function(t, e, i) {
			for (var a = [], r = arguments.length - 3; r-- > 0;) a[r] = arguments[r + 3];
			var n = g.apply(void 0, a).locale || e;
			return this._exist(i[n], t)
		}, Y.prototype.te = function(t, e) {
			return this._te(t, this.locale, this._getMessages(), e)
		}, Y.prototype.getLocaleMessage = function(t) {
			return p(this._vm.messages[t] || {})
		}, Y.prototype.setLocaleMessage = function(t, e) {
			"warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, e), this._vm.$set(this._vm.messages, t, e)
		}, Y.prototype.mergeLocaleMessage = function(t, e) {
			"warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(t, this._warnHtmlInMessage, e), this._vm.$set(this._vm.messages, t, v({}, this._vm.messages[t] || {}, e))
		}, Y.prototype.getDateTimeFormat = function(t) {
			return p(this._vm.dateTimeFormats[t] || {})
		}, Y.prototype.setDateTimeFormat = function(t, e) {
			this._vm.$set(this._vm.dateTimeFormats, t, e), this._clearDateTimeFormat(t, e)
		}, Y.prototype.mergeDateTimeFormat = function(t, e) {
			this._vm.$set(this._vm.dateTimeFormats, t, v(this._vm.dateTimeFormats[t] || {}, e)), this._clearDateTimeFormat(t, e)
		}, Y.prototype._clearDateTimeFormat = function(t, e) {
			for (var i in e) {
				var a = t + "__" + i;
				this._dateTimeFormatters.hasOwnProperty(a) && delete this._dateTimeFormatters[a]
			}
		}, Y.prototype._localizeDateTime = function(t, e, i, a, r) {
			for (var n = e, o = a[n], l = this._getLocaleChain(e, i), s = 0; s < l.length; s++) {
				var c = l[s];
				if (n = c, !f(o = a[c]) && !f(o[r])) break
			}
			if (f(o) || f(o[r])) return null;
			var d = o[r],
				u = n + "__" + r,
				g = this._dateTimeFormatters[u];
			return g || (g = this._dateTimeFormatters[u] = new Intl.DateTimeFormat(n, d)), g.format(t)
		}, Y.prototype._d = function(t, e, i) {
			if (!i) return new Intl.DateTimeFormat(e).format(t);
			var a = this._localizeDateTime(t, e, this.fallbackLocale, this._getDateTimeFormats(), i);
			if (this._isFallbackRoot(a)) {
				if (!this._root) throw Error("unexpected error");
				return this._root.$i18n.d(t, i, e)
			}
			return a || ""
		}, Y.prototype.d = function(t) {
			for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
			var a = this.locale,
				r = null;
			return 1 === e.length ? c(e[0]) ? r = e[0] : s(e[0]) && (e[0].locale && (a = e[0].locale), e[0].key && (r = e[0].key)) : 2 === e.length && (c(e[0]) && (r = e[0]), c(e[1]) && (a = e[1])), this._d(t, a, r)
		}, Y.prototype.getNumberFormat = function(t) {
			return p(this._vm.numberFormats[t] || {})
		}, Y.prototype.setNumberFormat = function(t, e) {
			this._vm.$set(this._vm.numberFormats, t, e), this._clearNumberFormat(t, e)
		}, Y.prototype.mergeNumberFormat = function(t, e) {
			this._vm.$set(this._vm.numberFormats, t, v(this._vm.numberFormats[t] || {}, e)), this._clearNumberFormat(t, e)
		}, Y.prototype._clearNumberFormat = function(t, e) {
			for (var i in e) {
				var a = t + "__" + i;
				this._numberFormatters.hasOwnProperty(a) && delete this._numberFormatters[a]
			}
		}, Y.prototype._getNumberFormatter = function(t, e, i, a, r, n) {
			for (var o = e, l = a[o], s = this._getLocaleChain(e, i), c = 0; c < s.length; c++) {
				var d = s[c];
				if (o = d, !f(l = a[d]) && !f(l[r])) break
			}
			if (f(l) || f(l[r])) return null;
			var u, g = l[r];
			if (n) u = new Intl.NumberFormat(o, Object.assign({}, g, n));
			else {
				var p = o + "__" + r;
				(u = this._numberFormatters[p]) || (u = this._numberFormatters[p] = new Intl.NumberFormat(o, g))
			}
			return u
		}, Y.prototype._n = function(t, e, i, a) {
			if (!Y.availabilities.numberFormat) return "";
			if (!i) return (a ? new Intl.NumberFormat(e, a) : new Intl.NumberFormat(e)).format(t);
			var r = this._getNumberFormatter(t, e, this.fallbackLocale, this._getNumberFormats(), i, a),
				n = r && r.format(t);
			if (this._isFallbackRoot(n)) {
				if (!this._root) throw Error("unexpected error");
				return this._root.$i18n.n(t, Object.assign({}, {
					key: i,
					locale: e
				}, a))
			}
			return n || ""
		}, Y.prototype.n = function(t) {
			for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
			var a = this.locale,
				r = null,
				o = null;
			return 1 === e.length ? c(e[0]) ? r = e[0] : s(e[0]) && (e[0].locale && (a = e[0].locale), e[0].key && (r = e[0].key), o = Object.keys(e[0]).reduce((function(t, i) {
				var a;
				return h(n, i) ? Object.assign({}, t, ((a = {})[i] = e[0][i], a)) : t
			}), null)) : 2 === e.length && (c(e[0]) && (r = e[0]), c(e[1]) && (a = e[1])), this._n(t, a, r, o)
		}, Y.prototype._ntp = function(t, e, i, a) {
			if (!Y.availabilities.numberFormat) return [];
			if (!i) return (a ? new Intl.NumberFormat(e, a) : new Intl.NumberFormat(e)).formatToParts(t);
			var r = this._getNumberFormatter(t, e, this.fallbackLocale, this._getNumberFormats(), i, a),
				n = r && r.formatToParts(t);
			if (this._isFallbackRoot(n)) {
				if (!this._root) throw Error("unexpected error");
				return this._root.$i18n._ntp(t, e, i, a)
			}
			return n || []
		}, Object.defineProperties(Y.prototype, X), Object.defineProperty(Y, "availabilities", {
			get: function() {
				if (!W) {
					var t = "undefined" != typeof Intl;
					W = {
						dateTimeFormat: t && void 0 !== Intl.DateTimeFormat,
						numberFormat: t && void 0 !== Intl.NumberFormat
					}
				}
				return W
			}
		}), Y.install = O, Y.version = "8.20.0";
		var Q = Y,
			K = {
				en: {
					editor: {
						run: "Run",
						errorInEditor: "Errors exist in code!",
						chartOK: "Chart has been generated successfully, ",
						darkMode: "Dark Mode",
						enableDecal: "Decal Pattern",
						renderCfgTitle: "Render",
						renderer: "Renderer",
						useDirtyRect: "Use Dirty Rect",
						download: "Download",
						edit: "Edit",
						monacoMode: "Enable Type Checking"
					},
					chartTypes: {
						line: "Line",
						bar: "Bar",
						pie: "Pie",
						scatter: "Scatter",
						map: "GEO/Map",
						candlestick: "Candlestick",
						radar: "Radar",
						boxplot: "Boxplot",
						heatmap: "Heatmap",
						graph: "Graph",
						lines: "Lines",
						tree: "Tree",
						treemap: "Treemap",
						sunburst: "Sunburst",
						parallel: "Parallel",
						sankey: "Sankey",
						funnel: "Funnel",
						gauge: "Gauge",
						pictorialBar: "PictorialBar",
						themeRiver: "ThemeRiver",
						calendar: "Calendar",
						custom: "Custom",
						dataset: "Dataset",
						dataZoom: "DataZoom",
						drag: "Drag",
						rich: "Rich Text",
						globe: "3D Globe",
						bar3D: "3D Bar",
						scatter3D: "3D Scatter",
						surface: "3D Surface",
						map3D: "3D Map",
						lines3D: "3D Lines",
						line3D: "3D Line",
						scatterGL: "Scatter GL",
						linesGL: "Lines GL",
						flowGL: "Flow GL",
						graphGL: "Graph GL"
					}
				},
				zh: {
					editor: {
						run: "运行",
						errorInEditor: "编辑器内容有误！",
						chartOK: "图表已生成, ",
						darkMode: "深色模式",
						enableDecal: "无障碍花纹",
						renderCfgTitle: "渲染设置",
						useDirtyRect: "开启脏矩形优化",
						renderer: "渲染模式",
						download: "下载示例",
						edit: "编辑",
						monacoMode: "开启类型检查"
					},
					chartTypes: {
						line: "折线图",
						bar: "柱状图",
						pie: "饼图",
						scatter: "散点图",
						map: "地理坐标/地图",
						candlestick: "K 线图",
						radar: "雷达图",
						boxplot: "盒须图",
						heatmap: "热力图",
						graph: "关系图",
						lines: "路径图",
						tree: "树图",
						treemap: "矩形树图",
						sunburst: "旭日图",
						parallel: "平行坐标系",
						sankey: "桑基图",
						funnel: "漏斗图",
						gauge: "仪表盘",
						pictorialBar: "象形柱图",
						themeRiver: "主题河流图",
						calendar: "日历坐标系",
						custom: "自定义系列",
						dataset: "数据集",
						dataZoom: "数据区域缩放",
						drag: "拖拽",
						rich: "富文本",
						globe: "3D 地球",
						bar3D: "3D 柱状图",
						scatter3D: "3D 散点图",
						surface: "3D 曲面",
						map3D: "3D 地图",
						lines3D: "3D 路径图",
						line3D: "3D 折线图",
						scatterGL: "GL 散点图",
						linesGL: "GL 路径图",
						flowGL: "GL 矢量场图",
						graphGL: "GL 关系图"
					}
				}
			},
			tt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					attrs: {
						id: "main-container"
					}
				}, [t.shared.isMobile ? t._e() : i("div", {
					style: {
						width: t.leftContainerSize + "%"
					},
					attrs: {
						id: "code-container"
					}
				}, [i("div", {
					attrs: {
						id: "control-panel"
					}
				}, [i("div", {
					attrs: {
						id: "code-info"
					}
				}, [t.shared.editorStatus.message ? [i("span", {
					staticClass: "code-info-time"
				}, [t._v(t._s(t.currentTime))]), t._v(" "), i("span", {
					class: "code-info-type-" + t.shared.editorStatus.type
				}, [t._v(t._s(t.shared.editorStatus.message))])] : t._e()], 2), t._v(" "), i("div", {
					staticClass: "control-btn-panel"
				}, [i("a", {
					staticClass: "btn btn-default btn-sm",
					attrs: {
						href: "javascript:;"
					},
					on: {
						click: t.disposeAndRun
					}
				}, [t._v(t._s(t.$t("editor.run")))])])]), t._v(" "), t.shared.typeCheck ? i("CodeMonaco", {
					attrs: {
						id: "code-panel",
						initialCode: t.initialCode
					}
				}) : i("CodeAce", {
					attrs: {
						id: "code-panel",
						initialCode: t.initialCode
					}
				})], 1), t._v(" "), t.shared.isMobile ? t._e() : i("div", {
					staticClass: "handler",
					style: {
						left: t.leftContainerSize + "%"
					},
					attrs: {
						id: "h-handler"
					},
					on: {
						mousedown: t.onSplitterDragStart
					}
				}), t._v(" "), i("Preview", {
					ref: "preview",
					staticClass: "right-container",
					style: {
						width: 100 - t.leftContainerSize + "%",
						left: t.leftContainerSize + "%"
					},
					attrs: {
						inEditor: !0
					}
				})], 1)
			};
		tt._withStripped = !0;
		var et = function() {
				var t = this.$createElement;
				return (this._self._c || t)("div", {
					directives: [{
						name: "loading",
						rawName: "v-loading",
						value: this.loading,
						expression: "loading"
					}],
					staticClass: "ace-editor-main"
				})
			};
		et._withStripped = !0;
		var it = {
			grid: 108210,
			series: 1161721,
			pie: 173151,
			legend: 278319,
			right: 12224,
			tooltip: 188049,
			xAxis: 374619,
			bar: 182040,
			label: 163527,
			emphasis: 5e4,
			formatter: 62138,
			line: 306801,
			data: 232156,
			left: 24464,
			top: 18094,
			scatter: 48954,
			type: 92134,
			yAxis: 238764,
			axisLabel: 73604,
			legendHoverLink: 14243,
			textStyle: 129159,
			hoverAnimation: 9062,
			dataZoom: 90999,
			nameLocation: 15800,
			nameTextStyle: 30596,
			nameGap: 14640,
			singleAxis: 15977,
			splitLine: 30047,
			nameRotate: 10483,
			inverse: 12997,
			boundaryGap: 18533,
			clockwise: 4411,
			lineStyle: 81857,
			selectedOffset: 2984,
			width: 17962,
			slider: 28321,
			dataBackground: 2287,
			areaStyle: 19428,
			color: 94439,
			height: 7954,
			orient: 17218,
			align: 10373,
			symbol: 35613,
			xAxisIndex: 15405,
			stack: 10602,
			clipOverflow: 3229,
			center: 9827,
			padding: 12855,
			itemStyle: 143518,
			itemGap: 11914,
			shadowBlur: 17233,
			shadowColor: 13929,
			normal: 211293,
			borderColor: 20648,
			shadowOffsetX: 11499,
			shadowOffsetY: 9210,
			opacity: 12301,
			heatmap: 13825,
			value: 21111,
			fillerColor: 797,
			borderWidth: 15576,
			itemWidth: 7123,
			effectScatter: 31179,
			coordinateSystem: 15302,
			axisLine: 53628,
			axisTick: 38765,
			selectedMode: 15177,
			fontSize: 14906,
			inactiveColor: 5720,
			selected: 10921,
			gauge: 55176,
			markLine: 65539,
			handleStyle: 1852,
			borderType: 5717,
			title: 158568,
			show: 82e3,
			length: 4814,
			zlevel: 22293,
			labelPrecision: 746,
			position: 48349,
			labelFormatter: 727,
			alignWithLabel: 3785,
			interval: 28810,
			showDetail: 694,
			yAxisIndex: 10560,
			showDataShadow: 591,
			realtime: 2611,
			onZero: 3690,
			silent: 22883,
			radar: 61070,
			axisPointer: 23175,
			trigger: 15344,
			barCategoryGap: 3511,
			splitNumber: 19992,
			inside: 32482,
			name: 61072,
			showSymbol: 4778,
			containLabel: 6413,
			offset: 15619,
			max: 12538,
			backgroundColor: 32864,
			visualMap: 95262,
			fontStyle: 14443,
			fontWeight: 11970,
			fontFamily: 10141,
			symbolSize: 21077,
			blurSize: 360,
			geo: 65283,
			radius: 8533,
			markArea: 19906,
			map: 102385,
			brush: 29508,
			parallel: 20673,
			parallelAxis: 13713,
			gridIndex: 20650,
			piecewise: 25231,
			showContent: 6960,
			zoom: 3997,
			polar: 23175,
			controller: 2892,
			radiusAxis: 24146,
			angleAxis: 18771,
			toolbox: 101543,
			timeline: 34619,
			precision: 3306,
			curveness: 1378,
			x: 2753,
			valueIndex: 2807,
			itemHeight: 5180,
			icon: 10336,
			valueDim: 2013,
			symbolOffset: 10017,
			y: 1590,
			transitionDuration: 3814,
			radarIndex: 715,
			extraCssText: 3640,
			animation: 17864,
			"animationThreshold = 2000": 11727,
			minInterval: 11278,
			animationDelay: 7620,
			layoutCenter: 2348,
			animationDurationUpdate: 6972,
			animationEasingUpdate: 6816,
			animationDelayUpdate: 6642,
			symbolRotate: 10221,
			feature: 50238,
			axis: 1794,
			crossStyle: 1830,
			funnel: 11042,
			scaleLimit: 4792,
			roam: 7112,
			itemSize: 1966,
			showTitle: 1851,
			smooth: 5185,
			saveAsImage: 9915,
			showAllSymbol: 3417,
			polarIndex: 5235,
			graph: 76898,
			layout: 2633,
			excludeComponents: 447,
			restore: 3693,
			dataView: 10258,
			magicType: 10505,
			iconStyle: 9088,
			nodeScaleRatio: 892,
			hoverLayerThreshold: 6480,
			textAlign: 9402,
			splitArea: 16447,
			nameMap: 4584,
			text: 11691,
			pixelRatio: 357,
			readOnly: 491,
			optionToContent: 936,
			lang: 549,
			textareaColor: 233,
			textareaBorderColor: 177,
			option: 2003,
			seriesIndex: 4483,
			back: 199,
			rect: 323,
			polygon: 254,
			min: 16646,
			scale: 14303,
			logBase: 7456,
			start: 2889,
			z: 15867,
			link: 5348,
			textBaseline: 4210,
			subtext: 5086,
			sublink: 2618,
			subtarget: 2373,
			subtextStyle: 7732,
			triggerEvent: 9175,
			blendMode: 6359,
			progressiveThreshold: 4699,
			continuous: 42105,
			lines: 31608,
			markPoint: 81254,
			roseType: 4221,
			animationEasing: 8836,
			animationDuration: 9562,
			calculable: 3953,
			progressive: 5761,
			treemap: 16948,
			links: 9573,
			edgeSymbol: 1211,
			bottom: 13969,
			edges: 1122,
			edgeLabel: 1685,
			edgeSymbolSize: 769,
			focusNodeAdjacency: 888,
			draggable: 965,
			force: 5601,
			geoIndex: 2856,
			circular: 1862,
			avoidLabelOverlap: 3694,
			target: 5476,
			coord: 3995,
			startValue: 2182,
			triggerOn: 6741,
			showDelay: 3535,
			alwaysShowContent: 4928,
			enterable: 3871,
			hideDelay: 3018,
			step: 3437,
			detail: 5434,
			startAngle: 5421,
			handleIcon: 1051,
			handleSize: 932,
			zoomLock: 1979,
			throttle: 1757,
			boxplot: 6233,
			candlestick: 14005,
			sankey: 10101,
			loop: 678,
			rewind: 439,
			controlStyle: 1269,
			labelLine: 17838,
			distance: 452,
			rotate: 4666,
			margin: 4342,
			barWidth: 6641,
			category: 1318,
			barGap: 4832,
			nodes: 2085,
			pieces: 2683,
			smoothMonotone: 2203,
			itemSymbol: 882,
			axisType: 902,
			currentIndex: 583,
			effectType: 1364,
			areaColor: 2808,
			showEffectOn: 1285,
			rippleEffect: 3617,
			minAngle: 2527,
			barMaxWidth: 3073,
			rotateLabel: 523,
			dimension: 1922,
			end: 1426,
			inRange: 4604,
			outOfRange: 2262,
			checkpointStyle: 1036,
			sampling: 2458,
			regions: 6273,
			large: 1055,
			showLegendSymbol: 1600,
			layoutSize: 1981,
			mapValueCalculation: 1447,
			categories: 4362,
			indicator: 2995,
			barBorderRadius: 1455,
			range: 2009,
			connectNulls: 3411,
			pointer: 2665,
			effect: 5446,
			parallelAxisDefault: 927,
			coords: 750,
			shadowStyle: 1670,
			largeThreshold: 754,
			hoverLink: 1276,
			repulsion: 865,
			textGap: 1121,
			breadcrumb: 828,
			baseline: 1316,
			endAngle: 895,
			period: 1153,
			brushType: 1421,
			minOpacity: 216,
			brushLink: 913,
			brushMode: 465,
			transformable: 418,
			brushStyle: 507,
			throttleType: 448,
			throttleDelay: 369,
			removeOnClick: 648,
			inBrush: 500,
			outOfBrush: 466,
			offsetCenter: 981,
			barMinHeight: 2279,
			parallelIndex: 235,
			nodeClick: 732,
			source: 869,
			color0: 210,
			filterMode: 2252,
			tiled: 352,
			autoPlay: 496,
			playInterval: 440,
			sort: 484,
			polyline: 929,
			initLayout: 966,
			controlPosition: 408,
			children: 89,
			contentToOption: 590,
			maxOpacity: 215,
			squareRatio: 281,
			leafDepth: 347,
			zoomToNodeRatio: 300,
			childrenVisibleMin: 303,
			shape: 1054,
			length2: 891,
			endValue: 1107,
			gravity: 634,
			edgeLength: 662,
			layoutAnimation: 485,
			colorAlpha: 389,
			constantSpeed: 451,
			trailLength: 530,
			dim: 313,
			areaSelectStyle: 253,
			funnelAlign: 334,
			buttonTextColor: 177,
			buttonColor: 205,
			levels: 2267,
			textColor: 178,
			lineX: 46,
			lineY: 32,
			showPlayBtn: 64,
			showPrevBtn: 43,
			showNextBtn: 43,
			playIcon: 90,
			stopIcon: 48,
			prevIcon: 39,
			nextIcon: 36,
			ellipsis: 76,
			clear: 114,
			colorMappingBy: 424,
			maxSize: 131,
			minSize: 147,
			gap: 175,
			visibleMin: 315,
			axisExpandable: 134,
			layoutIterations: 226,
			nodeGap: 158,
			nodeWidth: 134,
			axisExpandCenter: 79,
			axisExpandCount: 56,
			axisExpandWidth: 51,
			boxWidth: 46,
			gapWidth: 78,
			borderColorSaturation: 56,
			inactiveOpacity: 51,
			keep: 41,
			colorSaturation: 343,
			visualDimension: 471,
			id: 138,
			borderColor0: 67,
			emptyItemWidth: 60,
			activeOpacity: 43,
			radiusAxisIndex: 574,
			angleAxisIndex: 478,
			textPosition: 232,
			minOpen: 194,
			maxOpen: 125,
			graphic: 5617,
			elements: 3108,
			image: 673,
			group: 488,
			$action: 82,
			style: 431,
			textVerticalAlign: 13,
			fill: 55,
			stroke: 47,
			lineWidth: 34,
			sector: 93,
			"bezier-curve": 6,
			cpx2: 1,
			cpy2: 1,
			circle: 256,
			arc: 61,
			bezierCurve: 61,
			onclick: 101,
			onmouseover: 32,
			font: 17,
			bounding: 75,
			cursor: 54,
			themeRiver: 11,
			confine: 580,
			ring: 103,
			ondragleave: 3,
			ondragstart: 4,
			ondragover: 4,
			disabled: 221,
			visualMin: 44,
			visualMax: 18,
			onmousemove: 14,
			ondrag: 8,
			ondragend: 2,
			x2: 7,
			x1: 4,
			y1: 2,
			y2: 3,
			percent: 6,
			ondrop: 9,
			cx: 7,
			smoothConstraint: 20,
			cpx1: 2,
			points: 16,
			onmousewheel: 13,
			onmouseout: 7,
			barBorderWidth: 2,
			ondragenter: 2,
			onmouseup: 1,
			cy: 1,
			r: 2,
			onmousedown: 1,
			animationThreshold: 1
		},
			at = {};

		function rt(t) {
			return Promise.all(t.map((function(t) {
				if ("string" == typeof t && (t = {
					url: t,
					type: t.match(/\.css$/) ? "css" : "js"
				}), at[t.url]) return at[t.url];
				var e = new Promise((function(e, i) {
					if ("js" === t.type) {
						var a = document.createElement("script");
						a.src = t.url, a.async = !1, a.onload = function() {
							e()
						}, a.onerror = function() {
							i()
						}, document.body.appendChild(a)
					} else if ("css" === t.type) {
						var r = document.createElement("link");
						r.rel = "stylesheet", r.href = t.url, r.onload = function() {
							e()
						}, r.onerror = function() {
							i()
						}, document.body.appendChild(r)
					}
				}));
				return at[t.url] = e, e
			})))
		}
		var nt = ["line", "bar", "pie", "scatter", "map", "candlestick", "radar", "boxplot", "heatmap", "graph", "lines", "tree", "treemap", "sunburst", "parallel", "sankey", "funnel", "gauge", "pictorialBar", "themeRiver", "calendar", "custom", "dataset", "dataZoom", "drag", "rich", "globe", "bar3D", "scatter3D", "surface", "map3D", "lines3D", "line3D", "scatterGL", "linesGL", "flowGL", "graphGL"],
			ot = function(t) {
				for (var e = {}, i = 0; i < t.length; i++) e[t[i]] = 1;
				return location.href.indexOf("github.io") >= 0 ? {} : e
			}(["effectScatter-map", "geo-lines", "geo-map-scatter", "heatmap-map", "lines-airline", "map-china", "map-china-dataRange", "map-labels", "map-locate", "map-province", "map-world", "map-world-dataRange", "scatter-map", "scatter-map-brush", "scatter-weibo", "scatter-world-population", "geo3d", "geo3d-with-different-height", "globe-country-carousel", "globe-with-echarts-surface", "map3d-alcohol-consumption", "map3d-wood-map", "scattergl-weibo"]),
			lt = {};
		(location.search || "").substr(1).split("&").forEach((function(t) {
			var e = t.split("=");
			lt[e[0]] = e[1]
		}));
		var st, ct = ((st = document.createElement("canvas")).width = st.height = 1, !(!st.getContext || !st.getContext("2d")) && 0 === st.toDataURL("image/webp").indexOf("data:image/webp")),
			dt = {
				localEChartsMinJS: "http://localhost/echarts-next/dist/echarts.js",
				echartsMinJS: "https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js",
				echartsDir: "https://cdn.jsdelivr.net/npm/echarts@5",
				echartsStatMinJS: "https://cdn.jsdelivr.net/npm/echarts-stat@latest/dist/ecStat.min.js",
				echartsGLMinJS: "https://cdn.jsdelivr.net/npm/echarts-gl@2.0.0-rc.1/dist/echarts-gl.min.js",
				datGUIMinJS: "https://cdn.jsdelivr.net/npm/dat.gui@0.6.5/build/dat.gui.min.js",
				monacoDir: "https://cdn.jsdelivr.net/npm/monaco-editor@0.21.2/min/vs",
				aceDir: "https://cdn.jsdelivr.net/npm/ace-builds@1.4.12/src-min-noconflict"
			},
			ut = {
				cdnRoot: "",
				version: "",
				locale: "",
				darkMode: "dark" === lt.theme,
				enableDecal: "decal" in lt,
				renderer: lt.renderer || "canvas",
				//typeCheck: "monaco" === lt.editor,
				typeCheck: true,
				useDirtyRect: "useDirtyRect" in lt,
				code: "",
				runCode: "",
				sourceCode: "",
				isMobile: window.innerWidth < 600,
				editorStatus: {
					type: "",
					message: ""
				}
			};

		function ft() {
			return new Promise((function(t) {
				var e = lt.gl ? "data-gl" : "data";
				$.ajax("".concat(ut.cdnRoot, "/").concat(e, "/").concat(lt.c, ".js?_v_").concat(ut.version), {
					dataType: "text",
					success: function(e) {
						t(e)
					}
				})
			}))
		}
		function gt(t) {
			return t.replace(/\/\*[\w\W]*?\*\//, "").trim()
		}
		var pt = {
			props: ["initialCode"],
			data: function() {
				return {
					shared: ut,
					loading: !1
				}
			},
			mounted: function() {
				var t = this;
				this.loading = !0, ("undefined" == typeof ace ? rt([dt.aceDir + "/ace.js", dt.aceDir + "/ext-language_tools.js"]).then((function() {
					var t = ace.require("ace/ext/language_tools"),
						e = [];
					for (var i in it) e.push({
						caption: i,
						value: i,
						score: it[i],
						metal: "local"
					});
					t.addCompleter({
						getCompletions: function(t, i, a, r, n) {
							n(null, e)
						}
					})
				})) : Promise.resolve()).then((function() {
					t.loading = !1;
					var e = ace.edit(t.$el);
					e.getSession().setMode("ace/mode/javascript"), e.setOptions({
						enableBasicAutocompletion: !0,
						enableSnippets: !0,
						enableLiveAutocompletion: !0
					}), t._editor = e, e.on("change", (function() {
						ut.sourceCode = ut.runCode = e.getValue()
					})), t.initialCode && t.setInitialCode(t.initialCode),
					e.setValue(`\
option = {
    title: {
        text: 'ECharts 入门示例 ace'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    dataZoom: [{
    type: "inside"
    }],
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};`)
				}))
			},
			methods: {
				setInitialCode: function(t) {
					this._editor && t && (this._editor.setValue(t || ""), this._editor.selection.setSelectionRange({
						start: {
							row: 1,
							column: 4
						},
						end: {
							row: 1,
							column: 4
						}
					}))
				}
			},
			watch: {
				initialCode: function(t) {
					this.setInitialCode(t)
				}
			}
		};
		i(12);

		function ht(t, e, i, a, r, n, o, l) {
			var s, c = "function" == typeof t ? t.options : t;
			if (e && (c.render = e, c.staticRenderFns = i, c._compiled = !0), a && (c.functional = !0), n && (c._scopeId = "data-v-" + n), o ? (s = function(t) {
				(t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
			}, c._ssrRegister = s) : r && (s = l ?
			function() {
				r.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
			} : r), s) if (c.functional) {
				c._injectStyles = s;
				var d = c.render;
				c.render = function(t, e) {
					return s.call(e), d(t, e)
				}
			} else {
				var u = c.beforeCreate;
				c.beforeCreate = u ? [].concat(u, s) : [s]
			}
			return {
				exports: t,
				options: c
			}
		}
		var mt = ht(pt, et, [], !1, null, null, null);
		mt.options.__file = "src/editor/CodeAce.vue";
		var yt = mt.exports,
			vt = function() {
				var t = this.$createElement;
				return (this._self._c || t)("div", {
					directives: [{
						name: "loading",
						rawName: "v-loading",
						value: this.loading,
						expression: "loading"
					}],
					staticClass: "monaco-editor-main"
				})
			};
		vt._withStripped = !0;
		var bt = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					class: [t.inEditor && !t.shared.isMobile ? "" : "full"]
				}, [i("div", {
					directives: [{
						name: "loading",
						rawName: "v-loading",
						value: t.loading,
						expression: "loading"
					}],
					staticClass: "right-panel",
					style: {
						background: t.backgroundColor
					},
					attrs: {
						id: "chart-panel"
					}
				}), t._v(" "), i("div", {
					attrs: {
						id: "tool-panel"
					}
				}, [i("div", {
					staticClass: "left-panel"
				}, [i("el-switch", {
					staticClass: "dark-mode",
					attrs: {
						"active-color": "#181432",
						"active-text": t.$t("editor.darkMode"),
						"inactive-text": ""
					},
					model: {
						value: t.shared.darkMode,
						callback: function(e) {
							t.$set(t.shared, "darkMode", e)
						},
						expression: "shared.darkMode"
					}
				}), t._v(" "), i("el-switch", {
					staticClass: "enable-decal",
					attrs: {
						"active-text": t.$t("editor.enableDecal"),
						"inactive-text": ""
					},
					model: {
						value: t.shared.enableDecal,
						callback: function(e) {
							t.$set(t.shared, "enableDecal", e)
						},
						expression: "shared.enableDecal"
					}
				}), t._v(" "), i("el-popover", {
					staticStyle: {
						"margin-top": "3px"
					},
					attrs: {
						placement: "bottom",
						width: "450",
						trigger: "click"
					}
				}, [i("div", {
					staticClass: "render-config-container"
				}, [i("el-row", {
					attrs: {
						gutter: 2,
						type: "flex",
						align: "middle"
					}
				}, [i("el-col", {
					attrs: {
						span: 12
					}
				}, [i("label", {
					staticClass: "tool-label"
				}, [t._v(t._s(t.$t("editor.renderer")))]), t._v(" "), i("el-radio-group", {
					staticStyle: {
						"text-transform": "uppercase"
					},
					attrs: {
						size: "mini"
					},
					model: {
						value: t.shared.renderer,
						callback: function(e) {
							t.$set(t.shared, "renderer", e)
						},
						expression: "shared.renderer"
					}
				}, [i("el-radio-button", {
					attrs: {
						label: "svg"
					}
				}), t._v(" "), i("el-radio-button", {
					attrs: {
						label: "canvas"
					}
				})], 1)], 1), t._v(" "), i("el-col", {
					attrs: {
						span: 12
					}
				}, ["canvas" === t.shared.renderer ? i("el-switch", {
					attrs: {
						"active-text": t.$t("editor.useDirtyRect"),
						"inactive-text": ""
					},
					model: {
						value: t.shared.useDirtyRect,
						callback: function(e) {
							t.$set(t.shared, "useDirtyRect", e)
						},
						expression: "shared.useDirtyRect"
					}
				}) : t._e()], 1)], 1)], 1), t._v(" "), i("span", {
					staticClass: "render-config-trigger",
					attrs: {
						slot: "reference"
					},
					slot: "reference"
				}, [i("i", {
					staticClass: "el-icon-setting el-icon--left"
				}), t._v(t._s(t.$t("editor.renderCfgTitle")))])])], 1), t._v(" "), t.inEditor ? [t.shared.isMobile ? t._e() : i("button", {
					staticClass: "download btn btn-sm",
					on: {
						click: t.downloadExample
					}
				}, [t._v(t._s(t.$t("editor.download")))]), t._v(" "), i("a", {
					staticClass: "screenshot",
					attrs: {
						target: "_blank"
					},
					on: {
						click: t.screenshot
					}
				}, [i("i", {
					staticClass: "el-icon-camera-solid"
				})])] : i("a", {
					staticClass: "edit btn btn-sm",
					attrs: {
						href: t.editLink,
						target: "_blank"
					}
				}, [t._v(t._s(t.$t("editor.edit")))])], 2)])
			};
		bt._withStripped = !0;
		var _t = function() {
				function t(t) {
					var e = this.dom = document.createElement("div");
					for (var i in e.className = "ec-debug-dirty-rect", t = Object.assign({}, t), Object.assign(t, {
						backgroundColor: "rgba(0, 0, 255, 0.2)",
						border: "1px solid #00f"
					}), e.style.cssText = "\nposition: absolute;\nopacity: 0;\ntransition: opacity 0.5s linear;\npointer-events: none;\n", t) t.hasOwnProperty(i) && (e.style[i] = t[i])
				}
				return t.prototype.update = function(t) {
					var e = this.dom.style;
					e.width = t.width + "px", e.height = t.height + "px", e.left = t.x + "px", e.top = t.y + "px"
				}, t.prototype.hide = function() {
					this.dom.style.opacity = "0"
				}, t.prototype.show = function() {
					var t = this;
					clearTimeout(this._hideTimeout), this.dom.style.opacity = "1", this._hideTimeout = setTimeout((function() {
						t.hide()
					}), 500)
				}, t
			}();

		function Ct(t) {
			return (Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}
		function wt(t) {
			var e, i = {},
				a = [],
				r = [],
				n = window.setTimeout,
				o = window.setInterval;

			function l(t, e) {
				var i = n(t, e);
				return r.push(i), i
			}
			function s(t, e) {
				var i = o(t, e);
				return a.push(i), i
			}
			var c, d = [];
			return {
				resize: function() {
					c && c.resize()
				},
				dispose: function() {
					c && (c.dispose(), c = null)
				},
				getDataURL: function() {
					return c.getDataURL({
						pixelRatio: 2,
						excludeComponents: ["toolbox"]
					})
				},
				run: function(n, o) {
					if (!c) {
						if (c = echarts.init(n, o.darkMode ? "dark" : "", {
							renderer: o.renderer,
							useDirtyRect: o.useDirtyRect
						}), o.useDirtyRect && "canvas" === o.renderer) try {
							!
							function(t, e) {
								e = e || {};
								var i = t.painter;
								if (!i.getLayers) throw new Error("Debug dirty rect can only been used on canvas renderer.");
								if (i.isSingleCanvas()) throw new Error("Debug dirty rect can only been used on zrender inited with container.");
								var a = document.createElement("div");
								a.style.cssText = "\nposition:absolute;\nleft:0;\ntop:0;\nright:0;\nbottom:0;\npointer-events:none;\n", a.className = "ec-debug-dirty-rect-container";
								var r = [],
									n = t.dom;
								n.appendChild(a), "static" === getComputedStyle(n).position && (n.style.position = "relative"), t.on("rendered", (function() {
									if (i.getLayers) {
										var t = 0;
										i.eachBuiltinLayer((function(i) {
											if (i.debugGetPaintRects) for (var n = i.debugGetPaintRects(), o = 0; o < n.length; o++) r[t] || (r[t] = new _t(e.style), a.appendChild(r[t].dom)), r[t].show(), r[t].update(n[o]), t++
										}));
										for (var n = t; n < r.length; n++) r[n].hide()
									}
								}))
							}(c.getZr(), {
								autoHideDelay: 500
							})
						} catch (t) {
							console.error(t)
						}
						f = (u = c).on, g = u.setOption, u.on = function(t) {
							var e = f.apply(u, arguments);
							return d.push(t), e
						}, u.setOption = function() {
							var e = g.apply(this, arguments);
							return t && t(u), e
						}
					}
					var u, f, g;
					!
					function() {
						for (var t = 0; t < a.length; t++) clearInterval(a[t]);
						for (t = 0; t < r.length; t++) clearTimeout(r[t]);
						a = [], r = []
					}(), function(t) {
						d.forEach((function(e) {
							t && t.off(e)
						})), d.length = 0
					}(c), i.config = null;
					var p = o.runCode,
						h = new Function("myChart", "app", "setTimeout", "setInterval", "ROOT_PATH", "var option;\n" + p + "\nreturn option;")(c, i, l, s, o.cdnRoot),
						m = 0;
					if (h && "object" === Ct(h)) {
						var y = +new Date;
						c.setOption(h, !0), m = +new Date - y
					}
					if (e && ($(e.domElement).remove(), e.destroy(), e = null), i.config) {
						e = new dat.GUI({
							autoPlace: !1
						}), $(e.domElement).css({
							position: "absolute",
							right: 5,
							top: 0,
							zIndex: 1e3
						}), $(".right-container").append(e.domElement);
						var v = i.configParameters || {};
						for (var b in i.config) {
							var _ = i.config[b];
							if ("onChange" !== b && "onFinishChange" !== b) {
								var C = !1,
									w = null;
								if (v[b] && (v[b].options ? w = e.add(i.config, b, v[b].options) : null != v[b].min && (w = e.add(i.config, b, v[b].min, v[b].max))), "string" == typeof obj) try {
									var x = echarts.color.parse(_);
									(C = !! x) && (_ = echarts.color.stringify(x, "rgba"))
								} catch (t) {}
								w || (w = e[C ? "addColor" : "add"](i.config, b)), i.config.onChange && w.onChange(i.config.onChange), i.config.onFinishChange && w.onFinishChange(i.config.onFinishChange)
							}
						}
					}
					return m
				}
			}
		}
		var xt = i(10),
			Nt = i.n(xt);
		let St = null;
		let kt = null;

		function Dt(t, e = {}) {
			let i = document.createElement(t);
			return Object.keys(e).forEach(t => {
				i[t] = e[t]
			}), i
		}
		function Lt(t, e, i) {
			return (window.getComputedStyle(t, i || null) || {
				display: "none"
			})[e]
		}
		function Tt(t) {
			if (!document.documentElement.contains(t)) return {
				detached: !0,
				rendered: !1
			};
			let e = t;
			for (; e !== document;) {
				if ("none" === Lt(e, "display")) return {
					detached: !1,
					rendered: !1
				};
				e = e.parentNode
			}
			return {
				detached: !1,
				rendered: !0
			}
		}
		let Mt = 0, Et = null;

		function At(t, e) {
			if (t.__resize_mutation_handler__ || (t.__resize_mutation_handler__ = Ot.bind(t)), !t.__resize_listeners__) if (t.__resize_listeners__ = [], window.ResizeObserver) {
				let {
					offsetWidth: e,
					offsetHeight: i
				} = t, a = new ResizeObserver(() => {
					(t.__resize_observer_triggered__ || (t.__resize_observer_triggered__ = !0, t.offsetWidth !== e || t.offsetHeight !== i)) && Rt(t)
				}), {
					detached: r,
					rendered: n
				} = Tt(t);
				t.__resize_observer_triggered__ = !1 === r && !1 === n, t.__resize_observer__ = a, a.observe(t)
			} else if (t.attachEvent && t.addEventListener) t.__resize_legacy_resize_handler__ = function() {
				Rt(t)
			}, t.attachEvent("onresize", t.__resize_legacy_resize_handler__), document.addEventListener("DOMSubtreeModified", t.__resize_mutation_handler__);
			else if (Mt || (Et = function(t) {
				var e = document.createElement("style");
				return e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), (document.querySelector("head") || document.body).appendChild(e), e
			}('.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}')), function(t) {
				let e = Lt(t, "position");
				e && "static" !== e || (t.style.position = "relative");
				t.__resize_old_position__ = e, t.__resize_last__ = {};
				let i = Dt("div", {
					className: "resize-triggers"
				}), a = Dt("div", {
					className: "resize-expand-trigger"
				}), r = Dt("div"), n = Dt("div", {
					className: "resize-contract-trigger"
				});
				a.appendChild(r), i.appendChild(a), i.appendChild(n), t.appendChild(i), t.__resize_triggers__ = {
					triggers: i,
					expand: a,
					expandChild: r,
					contract: n
				}, Ft(t), t.addEventListener("scroll", It, !0), t.__resize_last__ = {
					width: t.offsetWidth,
					height: t.offsetHeight
				}
			}(t), t.__resize_rendered__ = Tt(t).rendered, window.MutationObserver) {
				let e = new MutationObserver(t.__resize_mutation_handler__);
				e.observe(document, {
					attributes: !0,
					childList: !0,
					characterData: !0,
					subtree: !0
				}), t.__resize_mutation_observer__ = e
			}
			t.__resize_listeners__.push(e), Mt++
		}
		function Ot() {
			let {
				rendered: t,
				detached: e
			} = Tt(this);
			t !== this.__resize_rendered__ && (!e && this.__resize_triggers__ && (Ft(this), this.addEventListener("scroll", It, !0)), this.__resize_rendered__ = t, Rt(this))
		}
		function It() {
			var t, e;
			Ft(this), this.__resize_raf__ && (t = this.__resize_raf__, kt || (kt = (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame ||
			function(t) {
				clearTimeout(t)
			}).bind(window)), kt(t)), this.__resize_raf__ = (e = () => {
				let t = function(t) {
					let {
						width: e,
						height: i
					} = t.__resize_last__, {
						offsetWidth: a,
						offsetHeight: r
					} = t;
					return a !== e || r !== i ? {
						width: a,
						height: r
					} : null
				}(this);
				t && (this.__resize_last__ = t, Rt(this))
			}, St || (St = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
			function(t) {
				return setTimeout(t, 16)
			}).bind(window)), St(e))
		}
		function Rt(t) {
			t && t.__resize_listeners__ && t.__resize_listeners__.forEach(e => {
				e.call(t, t)
			})
		}
		function Ft(t) {
			let {
				expand: e,
				expandChild: i,
				contract: a
			} = t.__resize_triggers__, {
				scrollWidth: r,
				scrollHeight: n
			} = a, {
				offsetWidth: o,
				offsetHeight: l,
				scrollWidth: s,
				scrollHeight: c
			} = e;
			a.scrollLeft = r, a.scrollTop = n, i.style.width = o + 1 + "px", i.style.height = l + 1 + "px", e.scrollLeft = s, e.scrollTop = c
		}
		var Pt = [{
			category: ["bar"],
			id: "bar-background",
			tags: [],
			title: "Bar with Background",
			titleCN: "带背景色的柱状图",
			difficulty: 0
		}, {
			category: ["custom"],
			id: "bar-histogram",
			tags: [],
			title: "Histogram with Custom Series",
			titleCN: "直方图（自定义系列）",
			difficulty: 0
		}, {
			category: ["bar"],
			id: "bar-simple",
			tags: [],
			title: "Basic Bar",
			titleCN: "基础柱状图",
			difficulty: 0
		}, {
			category: ["bar"],
			id: "bar-tick-align",
			tags: [],
			title: "Axis Align with Tick",
			titleCN: "坐标轴刻度与标签对齐",
			difficulty: 0
		}, {
			category: ["calendar"],
			id: "calendar-simple",
			tags: [],
			title: "Simple Calendar",
			titleCN: "基础日历图",
			difficulty: 0
		}, {
			category: ["candlestick"],
			id: "candlestick-simple",
			tags: [],
			title: "Basic Candlestick",
			titleCN: "基础 K 线图",
			difficulty: 0
		}, {
			category: ["dataset", "bar", "transform"],
			id: "data-transform-sort-bar",
			tags: [],
			title: "Sort Data in Bar Chart",
			titleCN: "柱状图排序",
			difficulty: 0
		}, {
			category: ["heatmap"],
			id: "heatmap-cartesian",
			tags: [],
			title: "Heatmap on Cartesian",
			titleCN: "笛卡尔坐标系上的热力图",
			difficulty: 0
		}, {
			category: ["line"],
			id: "line-simple",
			tags: [],
			title: "Basic Line Chart",
			titleCN: "基础折线图",
			difficulty: 0
		}, {
			category: ["line"],
			id: "line-smooth",
			tags: [],
			title: "Smoothed Line Chart",
			titleCN: "基础平滑折线图",
			difficulty: 0
		}, {
			category: ["pie"],
			id: "pie-simple",
			tags: [],
			title: "Referer of a website",
			titleCN: "某站点用户访问来源",
			difficulty: 0
		}, {
			category: ["radar"],
			id: "radar",
			tags: [],
			title: "Basic Radar Chart",
			titleCN: "基础雷达图",
			difficulty: 0
		}, {
			category: ["sankey"],
			id: "sankey-simple",
			tags: [],
			title: "Basic Sankey",
			titleCN: "基础桑基图",
			difficulty: 0
		}, {
			category: ["scatter"],
			id: "scatter-simple",
			tags: [],
			title: "Basic Scatter Chart",
			titleCN: "基础散点图",
			difficulty: 0
		}, {
			category: ["line"],
			id: "area-basic",
			tags: [],
			title: "Basic area chart",
			titleCN: "基础面积图",
			difficulty: 1
		}, {
			category: ["bar"],
			id: "bar-data-color",
			tags: [],
			title: "Set Style of Single Bar.",
			titleCN: "自定义单个柱子颜色",
			difficulty: 1
		}, {
			category: ["bar"],
			id: "bar-waterfall",
			tags: [],
			title: "Waterfall Chart",
			titleCN: "瀑布图（柱状图模拟）",
			difficulty: 1
		}, {
			category: ["calendar", "heatmap"],
			id: "calendar-heatmap",
			tags: [],
			title: "Calendar Heatmap",
			titleCN: "日历热力图",
			difficulty: 1
		}, {
			category: ["calendar", "heatmap"],
			id: "calendar-vertical",
			tags: [],
			title: "Calendar Heatmap Vertical",
			titleCN: "纵向日历图",
			difficulty: 1
		}, {
			category: ["candlestick"],
			id: "custom-ohlc",
			tags: [],
			title: "OHLC Chart",
			titleCN: "OHLC 图（使用自定义系列）",
			difficulty: 1
		}, {
			category: ["custom"],
			id: "custom-profit",
			tags: [],
			title: "Profit",
			titleCN: "利润分布直方图",
			difficulty: 1
		}, {
			category: ["dataset", "bar"],
			id: "dataset-encode0",
			tags: [],
			title: "Simple Encode",
			titleCN: "指定数据到坐标轴的映射",
			difficulty: 1
		}, {
			category: ["gauge"],
			id: "gauge",
			tags: [],
			title: "Gauge Basic chart",
			titleCN: "基础仪表盘",
			difficulty: 1
		}, {
			category: ["gauge"],
			id: "gauge-simple",
			tags: [],
			title: "Simple Gauge",
			titleCN: "带标签数字动画的基础仪表盘",
			difficulty: 1
		}, {
			category: ["graph"],
			id: "graph-force2",
			tags: [],
			title: "Force Layout",
			titleCN: "力引导布局",
			difficulty: 1
		}, {
			category: ["line"],
			id: "line-stack",
			tags: [],
			title: "Stacked Line Chart",
			titleCN: "折线图堆叠",
			difficulty: 1
		}, {
			category: ["parallel"],
			id: "parallel-simple",
			tags: [],
			title: "Basic Parallel",
			titleCN: "基础平行坐标",
			difficulty: 1
		}, {
			category: ["pie"],
			id: "pie-borderRadius",
			tags: [],
			title: "Doughnut Chart with Rounded Corner",
			titleCN: "圆角环形图",
			difficulty: 1
		}, {
			category: ["pie"],
			id: "pie-doughnut",
			tags: [],
			title: "Doughnut Chart",
			titleCN: "环形图",
			difficulty: 1
		}, {
			category: ["radar"],
			id: "radar-aqi",
			tags: [],
			title: "AQI - Radar Chart",
			titleCN: "AQI - 雷达图",
			difficulty: 1
		}, {
			category: ["sankey"],
			id: "sankey-vertical",
			tags: [],
			title: "Sankey Orient Vertical",
			titleCN: "垂直方向的桑基图",
			difficulty: 1
		}, {
			category: ["scatter"],
			id: "scatter-anscombe-quartet",
			tags: [],
			title: "Anscomb's quartet",
			titleCN: "Anscomb's quartet",
			difficulty: 1
		}, {
			category: ["scatter"],
			id: "scatter-clustering",
			tags: [],
			title: "Clustering Process",
			titleCN: "数据聚合",
			difficulty: 1
		}, {
			category: ["scatter"],
			id: "scatter-clustering-process",
			tags: [],
			title: "Clustering Process",
			titleCN: "聚合过程可视化",
			difficulty: 1
		}, {
			category: ["scatter"],
			id: "scatter-exponential-regression",
			tags: [],
			title: "Exponential Regression",
			titleCN: "指数回归（使用统计插件）",
			difficulty: 1
		}, {
			category: ["sunburst"],
			id: "sunburst-simple",
			tags: [],
			title: "Basic Sunburst",
			titleCN: "基础旭日图",
			difficulty: 1
		}, {
			category: ["line"],
			id: "area-stack",
			tags: [],
			title: "Stacked area chart",
			titleCN: "堆叠面积图",
			difficulty: 2
		}, {
			category: ["line"],
			id: "area-stack-gradient",
			tags: [],
			title: "Gradient Stacked area chart",
			titleCN: "渐变堆叠面积图",
			difficulty: 2
		}, {
			category: ["bar"],
			id: "bar-negative2",
			tags: [],
			title: "Bar Chart with Negative Value",
			titleCN: "交错正负轴标签",
			difficulty: 2
		}, {
			category: ["bar"],
			id: "bar-y-category",
			tags: [],
			title: "World Total Population",
			titleCN: "世界人口总量 - 条形图",
			difficulty: 2
		}, {
			category: ["calendar"],
			id: "calendar-horizontal",
			tags: [],
			title: "Calendar Heatmap Horizontal",
			titleCN: "横向日力图",
			difficulty: 2
		}, {
			category: ["candlestick"],
			id: "candlestick-sh",
			tags: [],
			title: "ShangHai Index",
			titleCN: "上证指数",
			difficulty: 2
		}, {
			category: ["custom", "dataZoom"],
			id: "custom-error-scatter",
			tags: [],
			title: "Error Scatter on Catesian",
			titleCN: "使用自定系列给散点图添加误差范围",
			difficulty: 2
		}, {
			category: ["scatter"],
			id: "effectScatter-map",
			tags: [],
			title: "Air Quality",
			titleCN: "全国主要城市空气质量",
			difficulty: 2
		}, {
			category: ["gauge"],
			id: "gauge-speed",
			tags: [],
			title: "Speed Gauge",
			titleCN: "速度仪表盘",
			difficulty: 2
		}, {
			category: ["graph"],
			id: "graph-grid",
			tags: [],
			title: "Graph on Cartesian",
			titleCN: "笛卡尔坐标系上的 Graph",
			difficulty: 2
		}, {
			category: ["graph"],
			id: "graph-simple",
			tags: [],
			title: "Simple Graph",
			titleCN: "Graph 简单示例",
			difficulty: 2
		}, {
			category: ["heatmap"],
			id: "heatmap-large",
			tags: [],
			title: "Heatmap - 2w data",
			titleCN: "热力图 - 2w 数据",
			difficulty: 2
		}, {
			category: ["heatmap"],
			id: "heatmap-large-piecewise",
			tags: [],
			title: "Heatmap - Discrete Mapping of Color",
			titleCN: "热力图 - 颜色的离散映射",
			difficulty: 2
		}, {
			category: ["line"],
			id: "line-marker",
			tags: [],
			title: "Temperature Change in the coming week",
			titleCN: "未来一周气温变化",
			difficulty: 2
		}, {
			category: ["parallel"],
			id: "parallel-aqi",
			tags: [],
			title: "Parallel Aqi",
			titleCN: "AQI 分布（平行坐标）",
			difficulty: 2
		}, {
			category: ["pie"],
			id: "pie-custom",
			tags: [],
			title: "Customized Pie",
			titleCN: "饼图自定义样式",
			difficulty: 2
		}, {
			category: ["pie"],
			id: "pie-pattern",
			tags: [],
			title: "Texture on Pie Chart",
			titleCN: "饼图纹理",
			difficulty: 2
		}, {
			category: ["pie"],
			id: "pie-roseType",
			tags: [],
			title: "Nightingale's Rose Diagram",
			titleCN: "南丁格尔玫瑰图",
			difficulty: 2
		}, {
			category: ["pie"],
			id: "pie-roseType-simple",
			tags: [],
			title: "Nightingale's Rose Diagram",
			titleCN: "基础南丁格尔玫瑰图",
			difficulty: 2
		}, {
			category: ["radar"],
			id: "radar-custom",
			tags: [],
			title: "Customized Radar Chart",
			titleCN: "自定义雷达图",
			difficulty: 2
		}, {
			category: ["sankey"],
			id: "sankey-itemstyle",
			tags: [],
			title: "Specify ItemStyle for Each Node in Sankey",
			titleCN: "桑基图节点自定义样式",
			difficulty: 2
		}, {
			category: ["sankey"],
			id: "sankey-levels",
			tags: [],
			title: "Sankey with Levels Setting",
			titleCN: "桑基图层级自定义样式",
			difficulty: 2
		}, {
			category: ["scatter"],
			id: "scatter-effect",
			tags: [],
			title: "Effect Scatter Chart",
			titleCN: "涟漪特效散点图",
			difficulty: 2
		}, {
			category: ["scatter"],
			id: "scatter-linear-regression",
			tags: [],
			title: "Linear Regression",
			titleCN: "线性回归（使用统计插件）",
			difficulty: 2
		}, {
			category: ["scatter"],
			id: "scatter-polynomial-regression",
			tags: [],
			title: "Polynomial Regression",
			titleCN: "多项式回归（使用统计插件）",
			difficulty: 2
		}, {
			category: ["sunburst"],
			id: "sunburst-borderRadius",
			tags: [],
			title: "Sunburst with Rounded Corner",
			titleCN: "圆角旭日图",
			difficulty: 2
		}, {
			category: ["sunburst"],
			id: "sunburst-label-rotate",
			tags: [],
			title: "Sunburst Label Rotate",
			titleCN: "旭日图标签旋转",
			difficulty: 2
		}, {
			category: ["line", "visualMap"],
			id: "area-pieces",
			tags: [],
			title: "Area Pieces",
			titleCN: "折线图区域高亮",
			difficulty: 3
		}, {
			category: ["bar"],
			id: "bar-gradient",
			tags: [],
			title: "Clickable Column Chart with Gradient",
			titleCN: "特性示例：渐变色 阴影 点击缩放",
			difficulty: 3
		}, {
			category: ["bar"],
			id: "bar-label-rotation",
			tags: [],
			title: "Bar Label Rotation",
			titleCN: "柱状图标签旋转",
			difficulty: 3
		}, {
			category: ["bar"],
			id: "bar-stack",
			tags: [],
			title: "Stacked Column Chart",
			titleCN: "堆叠柱状图",
			difficulty: 3
		}, {
			category: ["bar"],
			id: "bar-waterfall2",
			tags: [],
			title: "Waterfall Chart",
			titleCN: "阶梯瀑布图（柱状图模拟）",
			difficulty: 3
		}, {
			category: ["bar"],
			id: "bar-y-category-stack",
			tags: [],
			title: "Stacked Horizontal Bar",
			titleCN: "堆叠条形图",
			difficulty: 3
		}, {
			category: ["candlestick"],
			id: "candlestick-large",
			tags: [],
			title: "Large Scale Candlestick",
			titleCN: "大数据量K线图",
			difficulty: 3
		}, {
			category: ["custom"],
			id: "custom-bar-trend",
			tags: [],
			title: "Custom Bar Trend",
			titleCN: "使用自定义系列添加柱状图趋势",
			difficulty: 3
		}, {
			category: ["custom"],
			id: "custom-cartesian-polygon",
			tags: [],
			title: "Custom Cartesian Polygon",
			titleCN: "自定义多边形图",
			difficulty: 3
		}, {
			category: ["custom"],
			id: "custom-error-bar",
			tags: [],
			title: "Error Bar on Catesian",
			titleCN: "使用自定系列给柱状图添加误差范围",
			difficulty: 3
		}, {
			category: ["custom"],
			id: "custom-profile",
			tags: [],
			title: "Profile",
			titleCN: "性能分析图",
			difficulty: 3
		}, {
			category: ["custom"],
			id: "cycle-plot",
			tags: [],
			title: "Cycle Plot",
			titleCN: "Cycle Plot",
			difficulty: 3
		}, {
			category: ["line"],
			id: "data-transform-filter",
			tags: [],
			title: "Data Transform Fitler",
			titleCN: "数据过滤",
			difficulty: 3
		}, {
			category: ["dataset", "pie", "transform"],
			id: "data-transform-multiple-pie",
			tags: [],
			title: "Partition Data to Pies",
			titleCN: "分割数据到数个饼图",
			difficulty: 3
		}, {
			category: ["dataset", "pie"],
			id: "dataset-default",
			tags: [],
			title: "Default arrangement",
			titleCN: "默认 encode 设置",
			difficulty: 3
		}, {
			category: ["dataset"],
			id: "dataset-encode1",
			tags: [],
			title: "Encode and Matrix",
			titleCN: "指定数据到坐标轴的映射",
			difficulty: 3
		}, {
			category: ["gauge"],
			id: "gauge-progress",
			tags: [],
			title: "Grogress Gauge",
			titleCN: "进度仪表盘",
			difficulty: 3
		}, {
			category: ["gauge"],
			id: "gauge-stage",
			tags: [],
			title: "Stage Speed Gauge",
			titleCN: "阶段速度仪表盘",
			difficulty: 3
		}, {
			category: ["graph"],
			id: "graph-force",
			tags: [],
			title: "Force Layout",
			titleCN: "力引导布局",
			difficulty: 3
		}, {
			category: ["graph"],
			id: "graph-label-overlap",
			tags: [],
			title: "Hide Overlapped Label",
			titleCN: "关系图自动隐藏重叠标签",
			difficulty: 3
		}, {
			category: ["heatmap"],
			id: "heatmap-bmap",
			tags: ["bmap"],
			title: "Heatmap on Baidu Map Extension",
			titleCN: "热力图与百度地图扩展",
			difficulty: 3
		}, {
			category: ["heatmap"],
			id: "heatmap-map",
			tags: [],
			title: "Air Qulity",
			titleCN: "全国主要城市空气质量",
			difficulty: 3
		}, {
			category: ["line"],
			id: "line-gradient",
			tags: [],
			title: "Line Gradient",
			titleCN: "折线图的渐变",
			difficulty: 3
		}, {
			category: ["line"],
			id: "line-sections",
			tags: [],
			title: "Distribution of Electricity",
			titleCN: "一天用电量分布",
			difficulty: 3
		}, {
			category: ["pie"],
			id: "pie-alignTo",
			tags: [],
			title: "Pie Label Align",
			titleCN: "饼图标签对齐",
			difficulty: 3
		}, {
			category: ["pie"],
			id: "pie-labelLine-adjust",
			tags: [],
			title: "Label Line Adjust",
			titleCN: "饼图引导线调整",
			difficulty: 3
		}, {
			category: ["radar"],
			id: "radar2",
			tags: [],
			title: "Proportion of Browsers",
			titleCN: "浏览器占比变化",
			difficulty: 3
		}, {
			category: ["sankey"],
			id: "sankey-energy",
			tags: [],
			title: "Gradient Edge",
			titleCN: "桑基图渐变色边",
			difficulty: 3
		}, {
			category: ["sankey"],
			id: "sankey-nodeAlign-left",
			tags: [],
			title: "Node Align Left in Sankey",
			titleCN: "桑基图左对齐布局",
			difficulty: 3
		}, {
			category: ["sankey"],
			id: "sankey-nodeAlign-right",
			tags: [],
			title: "Node Align Right in Sankey",
			titleCN: "桑基图右对齐布局",
			difficulty: 3
		}, {
			category: ["scatter"],
			id: "scatter-punchCard",
			tags: [],
			title: "Punch Card of Github",
			titleCN: "GitHub 打卡气泡图",
			difficulty: 3
		}, {
			category: ["scatter"],
			id: "scatter-single-axis",
			tags: [],
			title: "Scatter on Single Axis",
			titleCN: "单轴散点图",
			difficulty: 3
		}, {
			category: ["scatter"],
			id: "scatter-weight",
			tags: [],
			title: "Distribution of Height and Weight",
			titleCN: "男性女性身高体重分布",
			difficulty: 3
		}, {
			category: ["sunburst"],
			id: "sunburst-monochrome",
			tags: [],
			title: "Monochrome Sunburst",
			titleCN: "Monochrome Sunburst",
			difficulty: 3
		}, {
			category: ["line", "dataZoom"],
			id: "area-simple",
			tags: [],
			title: "Large scale area chart",
			titleCN: "大数据量面积图",
			difficulty: 4
		}, {
			category: ["bar"],
			id: "bar-brush",
			tags: [],
			title: "Brush Select on Column Chart",
			titleCN: "柱状图框选",
			difficulty: 4
		}, {
			category: ["bar"],
			id: "bar-negative",
			tags: [],
			title: "Bar Chart with Negative Value",
			titleCN: "正负条形图",
			difficulty: 4
		}, {
			category: ["bar"],
			id: "bar1",
			tags: [],
			title: "Rainfall and Evaporation",
			titleCN: "某地区蒸发量和降水量",
			difficulty: 4
		}, {
			category: ["calendar", "graph"],
			id: "calendar-graph",
			tags: [],
			title: "Calendar Graph",
			titleCN: "日历关系图",
			difficulty: 4
		}, {
			category: ["calendar"],
			id: "calendar-lunar",
			tags: [],
			title: "Calendar Lunar",
			titleCN: "农历日历图",
			difficulty: 4
		}, {
			category: ["candlestick"],
			id: "candlestick-touch",
			tags: [],
			title: "Axis Pointer Link and Touch",
			titleCN: "触屏上的坐标轴指示器",
			difficulty: 4
		}, {
			category: ["line"],
			id: "confidence-band",
			tags: [],
			title: "Confidence Band",
			titleCN: "Confidence Band",
			difficulty: 4
		}, {
			category: ["custom", "dataZoom", "drag"],
			id: "custom-gantt-flight",
			tags: [],
			title: "Gantt Chart of Airport Flights",
			titleCN: "机场航班甘特图",
			difficulty: 4
		}, {
			category: ["custom"],
			id: "custom-polar-heatmap",
			tags: [],
			title: "Polar Heatmap",
			titleCN: "极坐标热力图（自定义系列）",
			difficulty: 4
		}, {
			category: ["boxplot"],
			id: "data-transform-aggregate",
			tags: [],
			title: "Data Transform Simple Aggregate",
			titleCN: "简单的数据聚合",
			difficulty: 4
		}, {
			category: ["gauge"],
			id: "gauge-grade",
			tags: [],
			title: "Grade Gauge",
			titleCN: "等级仪表盘",
			difficulty: 4
		}, {
			category: ["gauge"],
			id: "gauge-multi-title",
			tags: [],
			title: "Multi Title Gauge",
			titleCN: "多标题仪表盘",
			difficulty: 4
		}, {
			category: ["gauge"],
			id: "gauge-temperature",
			tags: [],
			title: "Temperature Gauge chart",
			titleCN: "气温仪表盘",
			difficulty: 4
		}, {
			category: ["graph"],
			id: "graph",
			tags: [],
			title: "Les Miserables",
			titleCN: "悲惨世界人物关系图",
			difficulty: 4
		}, {
			category: ["line"],
			id: "grid-multiple",
			tags: [],
			title: "Rainfall and Water Flow",
			titleCN: "雨量流量关系图",
			difficulty: 4
		}, {
			category: ["line"],
			id: "line-aqi",
			tags: [],
			title: "Beijing AQI",
			titleCN: "北京 AQI 可视化",
			difficulty: 4
		}, {
			category: ["bar"],
			id: "mix-line-bar",
			tags: [],
			title: "Mixed Line and Bar",
			titleCN: "折柱混合",
			difficulty: 4
		}, {
			category: ["bar"],
			id: "mix-zoom-on-value",
			tags: [],
			title: "Mix Zoom On Value",
			titleCN: "多数值轴轴缩放",
			difficulty: 4
		}, {
			category: ["line"],
			id: "multiple-x-axis",
			tags: [],
			title: "Multiple X Axes",
			titleCN: "多 X 轴",
			difficulty: 4
		}, {
			category: ["bar"],
			id: "multiple-y-axis",
			tags: [],
			title: "Multiple Y Axes",
			titleCN: "多 Y 轴示例",
			difficulty: 4
		}, {
			category: ["parallel"],
			id: "parallel-nutrients",
			tags: [],
			title: "Parallel Nutrients",
			titleCN: "营养结构（平行坐标）",
			difficulty: 4
		}, {
			category: ["pie"],
			id: "pie-legend",
			tags: [],
			title: "Pie with Scrollable Legend",
			titleCN: "可滚动的图例",
			difficulty: 4
		}, {
			category: ["pie", "rich"],
			id: "pie-rich-text",
			tags: [],
			title: "Pie Special Label",
			titleCN: "富文本标签",
			difficulty: 4
		}, {
			category: ["scatter"],
			id: "scatter-label-align-right",
			tags: [],
			title: "Align Label on the Top",
			titleCN: "散点图标签顶部对齐",
			difficulty: 4
		}, {
			category: ["scatter"],
			id: "scatter-label-align-top",
			tags: [],
			title: "Align Label on the Top",
			titleCN: "散点图标签顶部对齐",
			difficulty: 4
		}, {
			category: ["sunburst"],
			id: "sunburst-visualMap",
			tags: [],
			title: "Sunburst VisualMap",
			titleCN: "旭日图使用视觉编码",
			difficulty: 4
		}, {
			category: ["line"],
			id: "area-rainfall",
			tags: [],
			title: "Rainfall",
			titleCN: "雨量流量关系图",
			difficulty: 5
		}, {
			category: ["line"],
			id: "area-time-axis",
			tags: [],
			title: "Area Chart with Time Axis",
			titleCN: "时间轴折线图",
			difficulty: 5
		}, {
			category: ["bar"],
			id: "bar-animation-delay",
			tags: [],
			title: "Animation Delay",
			titleCN: "柱状图动画延迟",
			difficulty: 5
		}, {
			category: ["bar"],
			id: "bar-large",
			tags: [],
			title: "Large Scale Bar Chart",
			titleCN: "大数据量柱图",
			difficulty: 5
		}, {
			category: ["bar"],
			id: "bar-race",
			tags: [],
			title: "Bar Race",
			titleCN: "动态排序柱状图",
			difficulty: 5
		}, {
			category: ["dataset", "line", "pie"],
			id: "dataset-link",
			tags: [],
			title: "Share Dataset",
			titleCN: "联动和共享数据集",
			difficulty: 5
		}, {
			category: ["dataset", "bar"],
			id: "dataset-series-layout-by",
			tags: [],
			title: "Series Layout By Column or Row",
			titleCN: "系列按行和按列排布",
			difficulty: 5
		}, {
			category: ["dataset", "bar"],
			id: "dataset-simple0",
			tags: [],
			title: "Simple Example of Dataset",
			titleCN: "最简单的数据集（dataset）",
			difficulty: 5
		}, {
			category: ["dataset", "bar"],
			id: "dataset-simple1",
			tags: [],
			title: "Dataset in Object Array",
			titleCN: "对象数组的输入格式",
			difficulty: 5
		}, {
			category: ["line"],
			id: "dynamic-data2",
			tags: [],
			title: "Dynamic Data + Time Axis",
			titleCN: "动态数据 + 时间坐标轴",
			difficulty: 5
		}, {
			category: ["gauge"],
			id: "gauge-ring",
			tags: [],
			title: "Ring Gauge",
			titleCN: "得分环",
			difficulty: 5
		}, {
			category: ["graph"],
			id: "graph-circular-layout",
			tags: [],
			title: "Les Miserables",
			titleCN: "悲惨世界人物关系图(环形布局)",
			difficulty: 5
		}, {
			category: ["line"],
			id: "line-function",
			tags: [],
			title: "Function Plot",
			titleCN: "函数绘图",
			difficulty: 5
		}, {
			category: ["line"],
			id: "line-race",
			tags: [],
			title: "Line Race",
			titleCN: "动态排序折线图",
			difficulty: 5
		}, {
			category: ["pie", "rich"],
			id: "pie-nest",
			tags: [],
			title: "Nested Pies",
			titleCN: "嵌套环形图",
			difficulty: 5
		}, {
			category: ["scatter"],
			id: "scatter-large",
			tags: [],
			title: "Large Scatter",
			titleCN: "大规模散点图",
			difficulty: 5
		}, {
			category: ["scatter"],
			id: "scatter-nebula",
			tags: [],
			title: "Scatter Nebula",
			titleCN: "大规模星云散点图",
			difficulty: 5
		}, {
			category: ["scatter"],
			id: "scatter-stream-visual",
			tags: [],
			title: "Visual interaction with stream",
			titleCN: "流式渲染和视觉映射操作",
			difficulty: 5
		}, {
			category: ["sunburst"],
			id: "sunburst-drink",
			tags: [],
			title: "Drink Flavors",
			titleCN: "Drink Flavors",
			difficulty: 5
		}, {
			category: ["custom", "dataZoom"],
			id: "wind-barb",
			tags: [],
			title: "Wind Barb",
			titleCN: "风向图",
			difficulty: 5
		}, {
			category: ["bar", "rich"],
			id: "bar-rich-text",
			tags: [],
			title: "Wheater Statistics",
			titleCN: "天气统计（富文本）",
			difficulty: 6
		}, {
			category: ["scatter"],
			id: "bubble-gradient",
			tags: [],
			title: "Bubble Chart",
			titleCN: "气泡图",
			difficulty: 6
		}, {
			category: ["calendar", "pie"],
			id: "calendar-pie",
			tags: [],
			title: "Calendar Pie",
			titleCN: "日历饼图",
			difficulty: 6
		}, {
			category: ["custom", "map"],
			id: "custom-hexbin",
			tags: [],
			title: "Hexagonal Binning",
			titleCN: "六边形分箱图（自定义系列）",
			difficulty: 6
		}, {
			category: ["bar"],
			id: "dynamic-data",
			tags: [],
			title: "Dynamic Data",
			titleCN: "动态数据",
			difficulty: 6
		}, {
			category: ["gauge"],
			id: "gauge-barometer",
			tags: [],
			title: "Gauge Barometer chart",
			titleCN: "气压表",
			difficulty: 6
		}, {
			category: ["graph"],
			id: "graph-force-dynamic",
			tags: [],
			title: "Graph Dynamic",
			titleCN: "动态增加图节点",
			difficulty: 6
		}, {
			category: ["line"],
			id: "line-markline",
			tags: [],
			title: "Line with Marklines",
			titleCN: "折线图的标记线",
			difficulty: 6
		}, {
			category: ["line"],
			id: "line-style",
			tags: [],
			title: "Line Style and Item Style",
			titleCN: "自定义折线图样式",
			difficulty: 6
		}, {
			category: ["bar"],
			id: "mix-timeline-finance",
			tags: [],
			title: "Finance Indices 2002",
			titleCN: "2002全国宏观经济指标",
			difficulty: 6
		}, {
			category: ["sunburst"],
			id: "sunburst-book",
			tags: [],
			title: "Book Records",
			titleCN: "书籍分布",
			difficulty: 6
		}, {
			category: ["bar"],
			id: "watermark",
			tags: [],
			title: "Watermark - ECharts Download",
			titleCN: "水印 - ECharts 下载统计",
			difficulty: 6
		}, {
			category: ["bar"],
			id: "bar-polar-real-estate",
			tags: [],
			title: "Bar Chart on Polar",
			difficulty: 7
		}, {
			category: ["bar"],
			id: "bar-polar-stack",
			tags: [],
			title: "Stacked Bar Chart on Polar",
			titleCN: "极坐标系下的堆叠柱状图",
			difficulty: 7
		}, {
			category: ["bar"],
			id: "bar-polar-stack-radial",
			tags: [],
			title: "Stacked Bar Chart on Polar(Radial)",
			titleCN: "极坐标系下的堆叠柱状图",
			difficulty: 7
		}, {
			category: ["custom", "calendar"],
			id: "custom-calendar-icon",
			tags: [],
			title: "Custom Calendar Icon",
			titleCN: "日历图自定义图标",
			difficulty: 7
		}, {
			category: ["custom"],
			id: "custom-wind",
			tags: [],
			title: "Use custom series to draw wind vectors",
			titleCN: "使用自定义系列绘制风场",
			difficulty: 7
		}, {
			category: ["gauge"],
			id: "gauge-clock",
			tags: [],
			title: "Clock Gauge",
			titleCN: "时钟仪表盘",
			difficulty: 7
		}, {
			category: ["graph"],
			id: "graph-life-expectancy",
			tags: [],
			title: "Graph Life Expectancy",
			titleCN: "Graph Life Expectancy",
			difficulty: 7
		}, {
			category: ["line"],
			id: "line-in-cartesian-coordinate-system",
			tags: [],
			title: "Line Chart in Cartesian Coordinate System",
			titleCN: "双数值轴折线图",
			difficulty: 7
		}, {
			category: ["line"],
			id: "line-log",
			tags: [],
			title: "Log Axis",
			titleCN: "对数轴示例",
			difficulty: 7
		}, {
			category: ["line"],
			id: "line-step",
			tags: [],
			title: "Step Line",
			titleCN: "阶梯折线图",
			difficulty: 7
		}, {
			category: ["bar"],
			id: "polar-roundCap",
			tags: [],
			title: "Rounded Bar on Polar",
			titleCN: "圆角环形图",
			difficulty: 7
		}, {
			category: ["scatter"],
			id: "scatter-aqi-color",
			tags: [],
			title: "Scatter Aqi Color",
			titleCN: "AQI 气泡图",
			difficulty: 7
		}, {
			category: ["scatter"],
			id: "scatter-nutrients",
			tags: [],
			title: "Scatter Nutrients",
			titleCN: "营养分布散点图",
			difficulty: 7
		}, {
			category: ["scatter"],
			id: "scatter-nutrients-matrix",
			tags: [],
			title: "Scatter Nutrients Matrix",
			titleCN: "营养分布散点矩阵",
			difficulty: 7
		}, {
			category: ["gauge"],
			id: "gauge-car",
			tags: [],
			title: "Gauge Car",
			titleCN: "Gauge Car",
			difficulty: 8
		}, {
			category: ["graph"],
			id: "graph-webkit-dep",
			tags: [],
			title: "Graph Webkit Dep",
			titleCN: "WebKit 模块关系依赖图",
			difficulty: 8
		}, {
			category: ["line"],
			id: "line-easing",
			tags: [],
			title: "Line Easing Visualizing",
			titleCN: "缓动函数可视化",
			difficulty: 8
		}, {
			category: ["line"],
			id: "line-y-category",
			tags: [],
			title: "Line Y Category",
			titleCN: "垂直折线图（Y轴为类目轴）",
			difficulty: 8
		}, {
			category: ["scatter"],
			id: "scatter-polar-punchCard",
			tags: [],
			title: "Punch Card of Github",
			titleCN: "GitHub 打卡气泡图（极坐标）",
			difficulty: 8
		}, {
			category: ["custom"],
			id: "custom-gauge",
			tags: [],
			title: "Custom Gauge",
			titleCN: "自定义仪表",
			difficulty: 9
		}, {
			category: ["graph"],
			id: "graph-npm",
			tags: [],
			title: "NPM Dependencies",
			titleCN: "NPM 依赖关系图",
			difficulty: 9
		}, {
			category: ["line"],
			id: "line-graphic",
			tags: [],
			title: "Custom Graphic Component",
			titleCN: "自定义图形组件",
			difficulty: 9
		}, {
			category: ["line"],
			id: "line-pen",
			tags: [],
			title: "Click to Add Points",
			titleCN: "点击添加折线图拐点",
			difficulty: 9
		}, {
			category: ["scatter"],
			id: "scatter-life-expectancy-timeline",
			tags: [],
			title: "Life Expectancy and GDP",
			titleCN: "各国人均寿命与GDP关系演变",
			difficulty: 9
		}, {
			category: ["scatter"],
			id: "scatter-painter-choice",
			tags: [],
			title: "Master Painter Color Choices Throughout History",
			titleCN: "Master Painter Color Choices Throughout History",
			difficulty: 9
		}, {
			category: ["boxplot"],
			id: "boxplot-light-velocity",
			tags: [],
			title: "Boxplot Light Velocity",
			titleCN: "基础盒须图",
			difficulty: 10
		}, {
			category: ["boxplot"],
			id: "boxplot-light-velocity2",
			tags: [],
			title: "Boxplot Light Velocity2",
			titleCN: "垂直方向盒须图",
			difficulty: 10
		}, {
			category: ["boxplot"],
			id: "boxplot-multi",
			tags: [],
			title: "Multiple Categories",
			titleCN: "多系列盒须图",
			difficulty: 10
		}, {
			category: [],
			id: "calendar-effectscatter",
			tags: [],
			difficulty: 10
		}, {
			category: ["candlestick"],
			id: "candlestick-brush",
			tags: [],
			title: "Candlestick Brush",
			titleCN: "日力图刷选",
			difficulty: 10
		}, {
			category: ["candlestick"],
			id: "candlestick-sh-2015",
			tags: [],
			title: "ShangHai Index, 2015",
			titleCN: "2015 年上证指数",
			difficulty: 10
		}, {
			category: [],
			id: "covid-america",
			tags: [],
			difficulty: 10
		}, {
			category: ["scatter", "map"],
			id: "effectScatter-bmap",
			tags: ["bmap"],
			title: "Air Quality - Baidu Map",
			titleCN: "全国主要城市空气质量 - 百度地图",
			difficulty: 10
		}, {
			category: ["funnel"],
			id: "funnel",
			tags: [],
			title: "Funnel Chart",
			titleCN: "漏斗图",
			difficulty: 10
		}, {
			category: ["funnel"],
			id: "funnel-align",
			tags: [],
			title: "Funnel (align)",
			titleCN: "漏斗图(对比)",
			difficulty: 10
		}, {
			category: ["funnel"],
			id: "funnel-customize",
			tags: [],
			title: "Customized Funnel",
			titleCN: "漏斗图",
			difficulty: 10
		}, {
			category: ["funnel"],
			id: "funnel-mutiple",
			tags: [],
			title: "Multiple Funnels",
			titleCN: "漏斗图",
			difficulty: 10
		}, {
			category: ["map"],
			id: "geo-lines",
			tags: [],
			title: "Migration",
			titleCN: "模拟迁徙",
			difficulty: 10
		}, {
			category: ["map"],
			id: "geo-map-scatter",
			tags: [],
			title: "map and scatter share a geo",
			titleCN: "map and scatter share a geo",
			difficulty: 10
		}, {
			category: ["line", "drag"],
			id: "line-draggable",
			tags: [],
			title: "Try Dragging these Points",
			titleCN: "可拖拽点",
			difficulty: 10
		}, {
			category: ["line"],
			id: "line-polar",
			tags: [],
			title: "Two Value-Axes in Polar",
			titleCN: "极坐标双数值轴",
			difficulty: 10
		}, {
			category: ["line"],
			id: "line-polar2",
			tags: [],
			title: "Two Value-Axes in Polar",
			titleCN: "极坐标双数值轴",
			difficulty: 10
		}, {
			category: ["line", "dataZoom"],
			id: "line-tooltip-touch",
			tags: [],
			title: "Tooltip and DataZoom on Mobile",
			titleCN: "移动端上的 dataZoom 和 tooltip",
			difficulty: 10
		}, {
			category: ["map", "lines"],
			id: "lines-airline",
			tags: [],
			title: "65k+ Airline",
			titleCN: "65k+ 飞机航线",
			difficulty: 10
		}, {
			category: ["map", "lines"],
			id: "lines-bmap",
			tags: ["bmap"],
			title: "A Hiking Trail in Hangzhou - Baidu Map",
			titleCN: "杭州热门步行路线 - 百度地图",
			difficulty: 10
		}, {
			category: ["map", "lines"],
			id: "lines-bmap-bus",
			tags: ["bmap"],
			title: "Bus Lines of Beijing - Baidu Map",
			titleCN: "北京公交路线 - 百度地图",
			difficulty: 10
		}, {
			category: ["map", "lines"],
			id: "lines-bmap-effect",
			tags: ["bmap"],
			title: "Bus Lines of Beijing - Line Effect",
			titleCN: "北京公交路线 - 线特效",
			difficulty: 10
		}, {
			category: ["map", "lines"],
			id: "lines-ny",
			tags: [],
			title: "Use lines to draw 1 million ny streets.",
			titleCN: "使用线图绘制近 100 万的纽约街道数据",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-bin",
			tags: ["bmap"],
			title: "Binning on Map",
			titleCN: "Binning on Map",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-china",
			tags: [],
			title: "Map China",
			titleCN: "Map China",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-china-dataRange",
			tags: [],
			title: "Sales of iphone",
			titleCN: "iphone销量",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-HK",
			tags: [],
			title: "Population Density of HongKong (2011)",
			titleCN: "香港18区人口密度 （2011）",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-labels",
			tags: [],
			title: "Rich Text Labels on Map",
			titleCN: "地图上的富文本标签",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-locate",
			tags: [],
			title: "Map Locate",
			titleCN: "Map Locate",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-polygon",
			tags: ["bmap"],
			title: "Draw Polygon on Map",
			titleCN: "在地图上绘制多边形",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-province",
			tags: [],
			title: "Switch among 34 Provinces",
			titleCN: "34 省切换查看",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-usa",
			tags: [],
			title: "USA Population Estimates (2012)",
			titleCN: "USA Population Estimates (2012)",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-world",
			tags: [],
			title: "Map World",
			titleCN: "Map World",
			difficulty: 10
		}, {
			category: ["map"],
			id: "map-world-dataRange",
			tags: [],
			title: "World Population (2010)",
			titleCN: "World Population (2010)",
			difficulty: 10
		}, {
			category: ["pictorialBar"],
			id: "pictorialBar-body-fill",
			tags: [],
			title: "Water Content",
			titleCN: "人体含水量",
			difficulty: 10
		}, {
			category: ["pictorialBar"],
			id: "pictorialBar-dotted",
			tags: [],
			title: "Dotted bar",
			titleCN: "虚线柱状图效果",
			difficulty: 10
		}, {
			category: ["pictorialBar"],
			id: "pictorialBar-forest",
			tags: [],
			title: "Expansion of forest",
			titleCN: "森林的增长",
			difficulty: 10
		}, {
			category: ["pictorialBar"],
			id: "pictorialBar-hill",
			tags: [],
			title: "Wish List and Mountain Height",
			titleCN: "圣诞愿望清单和山峰高度",
			difficulty: 10
		}, {
			category: ["pictorialBar"],
			id: "pictorialBar-spirit",
			tags: [],
			title: "Spirits",
			titleCN: "精灵",
			difficulty: 10
		}, {
			category: ["pictorialBar"],
			id: "pictorialBar-vehicle",
			tags: [],
			title: "Vehicles",
			titleCN: "交通工具",
			difficulty: 10
		}, {
			category: ["pictorialBar"],
			id: "pictorialBar-velocity",
			tags: [],
			title: "Velocity of Christmas Reindeers",
			titleCN: "驯鹿的速度",
			difficulty: 10
		}, {
			category: ["radar"],
			id: "radar-multiple",
			tags: [],
			title: "Multiple Radar",
			titleCN: "多雷达图",
			difficulty: 10
		}, {
			category: ["scatter"],
			id: "scatter-map",
			tags: [],
			title: "Air Quality",
			titleCN: "全国主要城市空气质量",
			difficulty: 10
		}, {
			category: ["scatter"],
			id: "scatter-map-brush",
			tags: [],
			title: "Scatter Map Brush",
			titleCN: "Scatter Map Brush",
			difficulty: 10
		}, {
			category: ["parallel", "scatter"],
			id: "scatter-matrix",
			tags: [],
			title: "Scatter Matrix",
			titleCN: "散点矩阵和平行坐标",
			difficulty: 10
		}, {
			category: ["scatter"],
			id: "scatter-weibo",
			tags: [],
			title: "Sign in of weibo",
			titleCN: "微博签到数据点亮中国",
			difficulty: 10
		}, {
			category: ["scatter"],
			id: "scatter-world-population",
			tags: [],
			title: "World Population (2011)",
			titleCN: "World Population (2011)",
			difficulty: 10
		}, {
			category: ["themeRiver"],
			id: "themeRiver-basic",
			tags: [],
			title: "ThemeRiver",
			titleCN: "主题河流图",
			difficulty: 10
		}, {
			category: ["themeRiver"],
			id: "themeRiver-lastfm",
			tags: [],
			title: "ThemeRiver Lastfm",
			titleCN: "ThemeRiver Lastfm",
			difficulty: 10
		}, {
			category: ["tree"],
			id: "tree-basic",
			tags: [],
			title: "From Left to Right Tree",
			titleCN: "从左到右树状图",
			difficulty: 10
		}, {
			category: ["tree"],
			id: "tree-legend",
			tags: [],
			title: "Multiple Trees",
			titleCN: "多棵树",
			difficulty: 10
		}, {
			category: ["tree"],
			id: "tree-orient-bottom-top",
			tags: [],
			title: "From Bottom to Top Tree",
			titleCN: "从下到上树状图",
			difficulty: 10
		}, {
			category: ["tree"],
			id: "tree-orient-right-left",
			tags: [],
			title: "From Right to Left Tree",
			titleCN: "从右到左树状图",
			difficulty: 10
		}, {
			category: ["tree"],
			id: "tree-polyline",
			tags: [],
			title: "Tree with Polyline Edge",
			titleCN: "折线树图",
			difficulty: 10
		}, {
			category: ["tree"],
			id: "tree-radial",
			tags: [],
			title: "Radial Tree",
			titleCN: "径向树状图",
			difficulty: 10
		}, {
			category: ["tree"],
			id: "tree-vertical",
			tags: [],
			title: "From Top to Bottom Tree",
			titleCN: "从上到下树状图",
			difficulty: 10
		}, {
			category: ["treemap"],
			id: "treemap-disk",
			tags: [],
			title: "Disk Usage",
			titleCN: "磁盘占用",
			difficulty: 10
		}, {
			category: ["treemap"],
			id: "treemap-drill-down",
			tags: [],
			title: "ECharts Option Query",
			titleCN: "ECharts 配置项查询分布",
			difficulty: 10
		}, {
			category: ["treemap"],
			id: "treemap-obama",
			tags: [],
			title: "How $3.7 Trillion is Spent",
			titleCN: "How $3.7 Trillion is Spent",
			difficulty: 10
		}, {
			category: ["treemap"],
			id: "treemap-show-parent",
			tags: [],
			title: "Show Parent Labels",
			titleCN: "显示父层级标签",
			difficulty: 10
		}, {
			category: ["treemap"],
			id: "treemap-simple",
			tags: [],
			title: "Basic Treemap",
			titleCN: "基础矩形树图",
			difficulty: 10
		}, {
			category: ["treemap"],
			id: "treemap-visual",
			tags: [],
			title: "Gradient Mapping",
			titleCN: "映射为渐变色",
			difficulty: 10
		}, {
			category: ["calendar", "scatter"],
			id: "calendar-charts",
			tags: [],
			title: "Calendar Charts",
			titleCN: "日力图",
			difficulty: 11
		}, {
			category: ["custom"],
			id: "circle-packing-with-d3",
			tags: [],
			title: "Circle Packing with d3",
			titleCN: "Circle Packing with d3",
			difficulty: 11
		}, {
			category: ["custom"],
			id: "custom-combine-separate-morph",
			tags: [],
			title: "Combine-Separate Morphing",
			titleCN: "聚合分割形变",
			difficulty: 11
		}, {
			category: ["custom"],
			id: "custom-one-to-one-morph",
			tags: [],
			title: "One-to-one Morphing",
			titleCN: "一对一映射形变",
			difficulty: 11
		}, {
			category: ["custom"],
			id: "custom-spiral-race",
			tags: [],
			title: "Custom Spiral Race",
			titleCN: "自定义螺旋线竞速",
			difficulty: 11
		}, {
			category: ["custom"],
			id: "custom-story-transition",
			tags: [],
			title: "Simple Story Transition",
			titleCN: "极简场景变换示例",
			difficulty: 11
		}, {
			category: ["scatter"],
			id: "scatter-logarithmic-regression",
			tags: [],
			title: "Logarithmic Regression",
			titleCN: "对数回归（使用统计插件）",
			difficulty: 16
		}],
			jt = ut.code.indexOf("ROOT_PATH") >= 0 ? "var ROOT_PATH = '".concat(ut.cdnRoot, "'") : "";

		function $t(t) {
			return function(t) {
				if (Array.isArray(t)) return zt(t)
			}(t) ||
			function(t) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
			}(t) ||
			function(t, e) {
				if (!t) return;
				if ("string" == typeof t) return zt(t, e);
				var i = Object.prototype.toString.call(t).slice(8, -1);
				"Object" === i && t.constructor && (i = t.constructor.name);
				if ("Map" === i || "Set" === i) return Array.from(t);
				if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return zt(t, e)
			}(t) ||
			function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}
		function zt(t, e) {
			(null == e || e > t.length) && (e = t.length);
			for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
			return a
		}
		var Bt = Pt.find((function(t) {
			return lt.c === t.id
		}));

		function Gt(t) {
			ut.enableDecal && (t.aria = t.aria || {}, t.aria.decal = t.aria.decal || {}, t.aria.decal.show = !0, t.aria.show = t.aria.enabled = !0)
		}
		function Wt() {
			if ("undefined" == typeof echarts) {
				var t = Bt && Bt.tags.indexOf("bmap") >= 0;
				return t && (window.HOST_TYPE = "2", window.BMap_loadScriptTime = (new Date).getTime()), rt([dt.datGUIMinJS, "local" in lt ? dt.localEChartsMinJS : dt.echartsMinJS, dt.echartsDir + "/dist/extension/dataTool.js", "https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/js/world.js", dt.echartsStatMinJS].concat($t(lt.gl ? [dt.echartsGLMinJS] : []), $t(t ? ["https://api.map.baidu.com/getscript?v=2.0&ak=KOmVjPVUAey1G2E8zNhPiuQ6QiEmAwZu&services=&t=20200327103013", dt.echartsDir + "/dist/extension/bmap.js"] : []))).then((function() {
					echarts.registerPreprocessor(Gt)
				}))
			}
			return Promise.resolve()
		}
		function Ht(t, e) {
			"warn" !== e && "error" !== e && (e = "info"), ut.editorStatus.message = t, ut.editorStatus.type = e
		}
		var Vt = {
			props: ["inEditor"],
			data: function() {
				return {
					shared: ut,
					debouncedTime: void 0,
					backgroundColor: "",
					autoRun: !0,
					loading: !1
				}
			},
			mounted: function() {
				var t = this;
				this.loading = !0, Wt().then((function() {
					t.loading = !1, ut.runCode && t.run()
				})), At(this.$el, (function() {
					t.sandbox && t.sandbox.resize()
				}))
			},
			computed: {
				editLink: function() {
					var t = ["c=" + lt.c];
					return lt.theme && t.push(["theme=" + lt.theme]), lt.gl && t.push(["gl=" + lt.gl]), "./editor.html?" + t.join("&")
				}
			},
			watch: {
				"shared.runCode": function(t) {
					!this.autoRun && this.sandbox || (this.debouncedRun ? this.debouncedRun() : this.run())
				},
				"shared.renderer": function() {
					this.refreshAll()
				},
				"shared.darkMode": function() {
					this.refreshAll()
				},
				"shared.enableDecal": function() {
					this.refreshAll()
				},
				"shared.useDirtyRect": function() {
					this.refreshAll()
				}
			},
			methods: {
				run: function t() {
					var e = this;
					if ("undefined" != typeof echarts) {
						this.sandbox || (this.sandbox = wt((function(t) {
							var i = t.getOption();
							"string" == typeof i.backgroundColor && "transparent" !== i.backgroundColor ? e.backgroundColor = i.backgroundColor : e.backgroundColor = "#fff"
						})));
						try {
							var i = this.sandbox.run(this.$el.querySelector("#chart-panel"), ut);
							Ht(this.$t("editor.chartOK") + i + "ms");
							for (var a = [0, 500, 2e3, 5e3, 1e4], r = a.length - 1; r >= 0; r--) {
								var n = a[r + 1] || 1e6;
								if (i >= a[r] && this.debouncedTime !== n) {
									this.debouncedRun = Nt()(t, n, {
										trailing: !0
									}), this.debouncedTime = n;
									break
								}
							}
						} catch (t) {
							Ht(this.$t("editor.errorInEditor"), "error"), console.error(t)
						}
					}
				},
				refreshAll: function() {
					this.dispose(), this.run()
				},
				dispose: function() {
					this.sandbox && this.sandbox.dispose()
				},
				downloadExample: function() {
					var t, e, i;
					t = '<!DOCTYPE html>\n<html style="height: 100%">\n    <head>\n        <meta charset="utf-8">\n    </head>\n    <body style="height: 100%; margin: 0">\n        <div id="container" style="height: 100%"></div>\n\n        <script type="text/javascript" src="'.concat(dt.echartsMinJS, '"><\/script>\n        <!-- Uncomment this line if you want to dataTool extension\n        <script type="text/javascript" src="').concat(dt.echartsDir, '/dist/extension/dataTool.min.js"><\/script>\n        -->\n        <!-- Uncomment this line if you want to use gl extension\n        <script type="text/javascript" src="').concat(dt.echartsGLMinJS, '"><\/script>\n        -->\n        <!-- Uncomment this line if you want to echarts-stat extension\n        <script type="text/javascript" src="').concat(dt.echartsStatMinJS, '"><\/script>\n        -->\n        <!-- Uncomment this line if you want to use map\n        <script type="text/javascript" src="').concat(dt.echartsDir, '/map/js/china.js"><\/script>\n        <script type="text/javascript" src="').concat(dt.echartsDir, '/map/js/world.js"><\/script>\n        -->\n        <!-- Uncomment these two lines if you want to use bmap extension\n        <script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=<Your Key Here>"><\/script>\n        <script type="text/javascript" src="').concat(dt.echartsDir, '/dist/extension/bmap.min.js"><\/script>\n        -->\n\n        <script type="text/javascript">\nvar dom = document.getElementById("container");\nvar myChart = echarts.init(dom);\nvar app = {};\n\nvar option;\n\n').concat(jt, "\n\n").concat(ut.code, "\n\nif (option && typeof option === 'object') {\n    myChart.setOption(option);\n}\n\n        <\/script>\n    </body>\n</html>\n    "), e = new Blob([t], {
						type: "text/html;charset=UTF-8",
						encoding: "UTF-8"
					}), (i = document.createElement("a")).href = URL.createObjectURL(e), i.download = lt.c + ".html", i.click()
				},
				screenshot: function() {
					if (this.sandbox) {
						var t = this.sandbox.getDataURL(),
							e = document.createElement("a");
						e.download = lt.c + "." + ("svg" === ut.renderer ? "svg" : "png"), e.target = "_blank", e.href = t;
						var i = new MouseEvent("click", {
							bubbles: !0,
							cancelable: !1
						});
						e.dispatchEvent(i)
					}
				}
			}
		},
			Ut = (i(22), ht(Vt, bt, [], !1, null, null, null));
		Ut.options.__file = "src/editor/Preview.vue";
		var qt = Ut.exports;

		function Jt() {
			return Wt().then((function() {
				return "undefined" == typeof monaco ? rt([dt.monacoDir + "/loader.js", ut.cdnRoot + "/js/example-transform-ts-bundle.js"]).then((function() {
					return window.require.config({
						paths: {
							vs: dt.monacoDir
						}
					}), new Promise((function(t) {
						window.require(["vs/editor/editor.main"], (function() {
							fetch(ut.cdnRoot + "/types/echarts.d.ts", {
								mode: "cors"
							}).then((function(t) {
								return t.text()
							})).then((function(t) {
								monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
									noSemanticValidation: !1,
									noSyntaxValidation: !1
								}), monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
									target: monaco.languages.typescript.ScriptTarget.ES6,
									allowNonTsExtensions: !0,
									noResolve: !1
								}), monaco.languages.typescript.typescriptDefaults.addExtraLib(t, "file:///node_modules/@types/echarts/index.d.ts"), monaco.languages.typescript.typescriptDefaults.addExtraLib("import {init, EChartsOption} from 'echarts';\n// Declare to global namespace.\ndeclare global {\ndeclare const $: any;\ndeclare const ROOT_PATH: string;\ndeclare const app: {\n    configParameters: {\n        [key: string]: ({\n            options: { [key: string]: string\n        }) | ({\n            min?: number\n            max?: number\n        })\n    }\n    config: {\n        onChange: () => void\n        [key: string]: string | number | function\n    }\n    [key: string]: any\n};\ndeclare const myChart: ReturnType<typeof init>;\ndeclare var option: EChartsOption;\n}\n", "file:///example.d.ts")
							})).then((function() {
								t()
							}))
						}))
					}))
				})) : Promise.resolve()
			}))
		}
		var Zt = {
			props: ["initialCode"],
			data: function() {
				return {
					shared: ut,
					loading: !1
				}
			},
			mounted: function() {
				var t = this;
				this.loading = !0, Jt().then((function() {
					t.loading = !1;
					var e = monaco.editor.createModel(t.initialCode || "", "typescript", monaco.Uri.parse("file:///main.ts")),
						i = monaco.editor.create(t.$el, {
							model: e,
							fontFamily: "'Source Code Pro', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace",
							minimap: {
								enabled: !1
							},
							automaticLayout: !0
						});
					t._editor = i, t.initialCode && (ut.sourceCode = t.initialCode, ut.runCode = echartsExampleTransformTs(ut.sourceCode)), i.onDidChangeModelContent((function() {
						ut.sourceCode = i.getValue(), ut.runCode = echartsExampleTransformTs(ut.sourceCode)}))
/*
				i.setValue(`\
option = {
    title: {
        text: 'ECharts 入门示例 monaco'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    dataZoom: [{
    type: "inside"
    }],
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};`);
*/
				}))
			},
			destroyed: function() {
				this._editor && (this._editor.getModel().dispose(), this._editor.dispose())
			},
			methods: {
				setInitialCode: function(t) {
					this._editor && t && this._editor.setValue(t || "")
				}
			},
			watch: {
				initialCode: function(t) {
					this.setInitialCode(t)
				}
			}
		},
			Yt = (i(23), ht(Zt, vt, [], !1, null, null, null));
		Yt.options.__file = "src/editor/CodeMonaco.vue";
		var Xt = {
			components: {
				CodeAce: yt,
				CodeMonaco: Yt.exports,
				Preview: qt
			},
			data: function() {
				return {
					mousedown: !1,
					leftContainerSize: 40,
					mobileMode: !1,
					shared: ut,
					initialCode: ""
				}
			},
			computed: {
				currentTime: function() {
					this.shared.message;
					for (var t = new Date, e = [t.getHours(), t.getMinutes(), t.getSeconds()], i = "", a = 0, r = e.length; a < r; ++a) i += (e[a] < 10 ? "0" : "") + e[a], a < r - 1 && (i += ":");
					return i
				}
			},
			mounted: function() {
				var t = this;
				ut.isMobile ? (this.leftContainerSize = 0, ft().then((function(t) {
					ut.runCode = gt(t)
				}))) : (ft().then((function(e) {
					t.initialCode = gt(e)
				})), window.addEventListener("mousemove", (function(e) {
					if (t.mousedown) {
						var i = e.clientX / window.innerWidth;
						i = Math.min(.9, Math.max(.1, i)), t.leftContainerSize = 100 * i
					}
				})), window.addEventListener("mouseup", (function(e) {
					t.mousedown = !1
				})))
			},
			methods: {
				onSplitterDragStart: function() {
					this.mousedown = !0
				},
				disposeAndRun: function() {
					this.$refs.preview.refreshAll()
				}
			},
			watch: {
				"shared.typeCheck": function(t) {
					this.initialCode = ut.sourceCode
				}
			}
		},
			Qt = (i(24), ht(Xt, tt, [], !1, null, null, null));
		Qt.options.__file = "src/editor/Editor.vue";
		var Kt = Qt.exports,
			te = function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					attrs: {
						id: "example-explore"
					}
				}, [i("div", {
					attrs: {
						id: "left-container"
					}
				}, [i("div", {
					attrs: {
						id: "left-toolbar"
					}
				}, [i("el-switch", {
					attrs: {
						"active-color": "#181432",
						"active-text": t.$t("editor.darkMode"),
						"inactive-text": ""
					},
					model: {
						value: t.shared.darkMode,
						callback: function(e) {
							t.$set(t.shared, "darkMode", e)
						},
						expression: "shared.darkMode"
					}
				})], 1), t._v(" "), i("div", {
					attrs: {
						id: "left-chart-nav"
					}
				}, [i("scrollactive", {
					attrs: {
						"active-class": "active",
						offset: 80,
						duration: 500,
						"scroll-container-selector": "#example-explore",
						"bezier-easing-value": ".5,0,.35,1"
					},
					on: {
						itemchanged: t.onActiveNavChanged
					}
				}, [i("ul", t._l(t.EXAMPLE_CATEGORIES, (function(e) {
					return i("li", {
						key: e
					}, [i("a", {
						staticClass: "left-chart-nav-link scrollactive-item",
						attrs: {
							id: "left-chart-nav-" + e,
							href: "#chart-type-" + e
						}
					}, [i("span", {
						staticClass: "chart-icon"
					}), t._v(" "), i("span", {
						staticClass: "chart-name"
					}, [t._v(t._s(t.$t("chartTypes." + e)))])])])
				})), 0)])], 1)]), t._v(" "), i("div", {
					attrs: {
						id: "explore-container"
					}
				}, [i("div", {
					staticClass: "example-list-panel"
				}, t._l(t.exampleList, (function(e) {
					return i("div", {
						key: e.category
					}, [i("h3", {
						staticClass: "chart-type-head",
						attrs: {
							id: "chart-type-" + e.category
						}
					}, [t._v("\n                    " + t._s(t.$t("chartTypes." + e.category)) + "\n                    "), i("span", [t._v(t._s(e.category))])]), t._v(" "), i("div", {
						staticClass: "row",
						attrs: {
							id: "chart-row-" + e.category
						}
					}, t._l(e.examples, (function(t) {
						return i("div", {
							key: t.id,
							staticClass: "col-xl-2 col-lg-3 col-md-4 col-sm-6"
						}, [i("ExampleCard", {
							attrs: {
								example: t
							}
						})], 1)
					})), 0)])
				})), 0)])])
			};
		te._withStripped = !0;
		var ee = [{
			category: ["globe"],
			id: "animating-contour-on-globe",
			tags: [],
			title: "Animating Contour on Globe",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "bar3d-dataset",
			tags: [],
			title: "3D Bar with Dataset",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "bar3d-global-population",
			tags: [],
			title: "Bar3D - Global Population",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "bar3d-music-visualization",
			tags: [],
			title: "Music Visualization",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "bar3d-myth",
			tags: [],
			title: "星云",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "bar3d-noise-modified-from-marpi-demo",
			tags: [],
			title: "Noise modified from marpi's demo",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "bar3d-punch-card",
			tags: [],
			title: "Bar3D - Punch Card",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "bar3d-simplex-noise",
			tags: [],
			theme: "dark",
			title: "Bar3D - Simplex Noise",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "bar3d-voxelize-image",
			tags: [],
			title: "Voxelize image",
			difficulty: 10
		}, {
			category: ["flowGL"],
			id: "flowGL-noise",
			tags: [],
			theme: "dark",
			title: "Flow on the cartesian",
			difficulty: 10
		}, {
			category: ["geo3D"],
			id: "geo3d",
			tags: [],
			title: "Geo3D",
			difficulty: 10
		}, {
			category: ["geo3D"],
			id: "geo3d-with-different-height",
			tags: [],
			title: "Geo3D with Different Height",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "global-population-bar3d-on-globe",
			tags: [],
			title: "Global Population - Bar3D on Globe",
			difficulty: 10
		}, {
			category: ["flowGL"],
			id: "global-wind-visualization",
			tags: [],
			title: "Global wind visualization",
			difficulty: 10
		}, {
			category: ["flowGL"],
			id: "global-wind-visualization-2",
			tags: [],
			title: "Global Wind Visualization 2",
			difficulty: 10
		}, {
			category: ["globe"],
			id: "globe-contour-paint",
			tags: [],
			title: "Contour Paint",
			difficulty: 10
		}, {
			category: ["globe"],
			id: "globe-country-carousel",
			tags: [],
			title: "Country Carousel",
			difficulty: 10
		}, {
			category: ["globe"],
			id: "globe-displacement",
			tags: [],
			title: "Globe Displacement",
			difficulty: 10
		}, {
			category: ["globe"],
			id: "globe-echarts-gl-hello-world",
			tags: [],
			title: "ECharts-GL Hello World",
			difficulty: 10
		}, {
			category: ["globe"],
			id: "globe-layers",
			tags: [],
			title: "Globe Layers",
			difficulty: 10
		}, {
			category: ["globe"],
			id: "globe-moon",
			tags: [],
			title: "Moon",
			difficulty: 10
		}, {
			category: ["globe"],
			id: "globe-with-echarts-surface",
			tags: [],
			title: "Globe with ECharts Surface",
			difficulty: 10
		}, {
			category: ["graphGL"],
			id: "graphgl-gpu-layout",
			tags: [],
			theme: "dark",
			title: "GraphGL GPU Layout",
			difficulty: 10
		}, {
			category: ["graphGL"],
			id: "graphgl-large-internet",
			tags: [],
			theme: "dark",
			title: "GraphGL - Large Internet",
			difficulty: 10
		}, {
			category: ["graphGL"],
			id: "graphgl-npm-dep",
			tags: [],
			theme: "dark",
			title: "1w 节点 2w7 边的NPM 依赖图",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "image-surface-sushuang",
			tags: [],
			title: "Image Surface Sushuang",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "image-to-bar3d",
			tags: [],
			title: "Image to Bar3D",
			difficulty: 10
		}, {
			category: ["globe"],
			id: "iron-globe",
			tags: [],
			title: "Iron globe",
			difficulty: 10
		}, {
			category: ["line3D"],
			id: "line3d-orthographic",
			tags: [],
			title: "三维折线图正交投影",
			difficulty: 10
		}, {
			category: ["lines3D"],
			id: "lines3d-airline-on-globe",
			tags: [],
			title: "Airline on Globe",
			difficulty: 10
		}, {
			category: ["lines3D"],
			id: "lines3d-flights",
			tags: [],
			title: "Flights",
			difficulty: 10
		}, {
			category: ["lines3D"],
			id: "lines3d-flights-gl",
			tags: [],
			title: "Flights GL",
			difficulty: 10
		}, {
			category: ["lines3D"],
			id: "lines3d-flights-on-geo3d",
			tags: [],
			title: "Flights on Geo3D",
			difficulty: 10
		}, {
			category: ["linesGL"],
			id: "linesGL-ny",
			tags: [],
			title: "Use linesGL to draw 1 million ny streets.",
			difficulty: 10
		}, {
			category: ["map3D"],
			id: "map3d-alcohol-consumption",
			tags: [],
			title: "Map3D - Alcohol Consumption",
			difficulty: 10
		}, {
			category: ["map3D"],
			id: "map3d-buildings",
			tags: [],
			title: "Buildings",
			difficulty: 10
		}, {
			category: ["map3D"],
			id: "map3d-wood-city",
			tags: [],
			title: "Wood City",
			difficulty: 10
		}, {
			category: ["map3D"],
			id: "map3d-wood-map",
			tags: [],
			title: "木质世界地图",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "metal-bar3d",
			tags: [],
			title: "Metal Bar3D",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "metal-surface",
			tags: [],
			title: "Metal Surface",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "parametric-surface-rose",
			tags: [],
			title: "Parametric Surface Rose",
			difficulty: 10
		}, {
			category: ["scatter3D"],
			id: "scatter3d",
			tags: [],
			theme: "dark",
			title: "Scatter3D",
			difficulty: 10
		}, {
			category: ["scatter3D"],
			id: "scatter3D-dataset",
			tags: [],
			title: "3D Scatter with Dataset",
			difficulty: 10
		}, {
			category: ["scatter3D"],
			id: "scatter3d-globe-population",
			tags: [],
			title: "Scatter3D - Globe Population",
			difficulty: 10
		}, {
			category: ["scatter3D"],
			id: "scatter3d-orthographic",
			tags: [],
			theme: "dark",
			title: "三维散点图正交投影",
			difficulty: 10
		}, {
			category: ["scatter3D"],
			id: "scatter3d-scatter",
			tags: [],
			title: "3D Scatter with Scatter Matrix",
			difficulty: 10
		}, {
			category: ["scatter3D"],
			id: "scatter3d-simplex-noise",
			tags: [],
			theme: "dark",
			title: "Scatter3D - Simplex Noise",
			difficulty: 10
		}, {
			category: ["scatterGL"],
			id: "scatterGL-gps",
			tags: [],
			title: "10 million Bulk GPS points",
			difficulty: 10
		}, {
			category: ["scatterGL"],
			id: "scattergl-weibo",
			tags: [],
			theme: "dark",
			title: "微博签到数据点亮中国",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "simple-surface",
			tags: [],
			title: "Simple Surface",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "sphere-parametric-surface",
			tags: [],
			title: "Sphere Parametric Surface",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "stacked-bar3d",
			tags: [],
			title: "Stacked Bar3D",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "surface-breather",
			tags: [],
			title: "Breather",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "surface-golden-rose",
			tags: [],
			title: "Golden Rose",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "surface-leather",
			tags: [],
			title: "皮革材质",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "surface-mollusc-shell",
			tags: [],
			title: "Mollusc Shell",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "surface-theme-roses",
			tags: [],
			title: "Theme Roses",
			difficulty: 10
		}, {
			category: ["surface"],
			id: "surface-wave",
			tags: [],
			title: "Surface Wave",
			difficulty: 10
		}, {
			category: ["bar3D"],
			id: "transparent-bar3d",
			tags: [],
			title: "Transparent Bar3D",
			difficulty: 10
		}],
			ie = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "example-list-item"
				}, [a("a", {
					staticClass: "example-link",
					attrs: {
						target: "_blank",
						href: t.exampleLink
					}
				}, [a("img", {
					staticClass: "chart-area",
					attrs: {
						src: i(25),
						"data-src": t.screenshotURL
					}
				}), t._v(" "), a("h4", {
					staticClass: "example-title"
				}, [t._v(t._s(t.title))]), t._v(" "), t.showSubtitle ? a("h5", {
					staticClass: "example-subtitle"
				}, [t._v(t._s(t.subtitle))]) : t._e()])])
			};
		ie._withStripped = !0;
		var ae = {
			props: ["example"],
			computed: {
				title: function() {
					return ("zh" === ut.locale ? this.example.titleCN : this.example.title) || this.example.title || ""
				},
				showSubtitle: function() {
					return "zh" === ut.locale
				},
				subtitle: function() {
					return this.example.title || ""
				},
				exampleTheme: function() {
					var t = this.example;
					return t.isGL ? "" : t.theme || (ut.darkMode ? "dark" : "")
				},
				exampleLink: function() {
					var t = this.example,
						e = ["c=" + t.id],
						i = this.exampleTheme;
					return t.isGL && e.push("gl=1"), i && e.push("theme=" + i), "local" in lt && e.push("local"), "useDirtyRect" in lt && e.push("useDirtyRect"), "./editor.html?" + e.join("&")
				},
				screenshotURL: function() {
					var t = this.example,
						e = this.exampleTheme ? "-" + this.exampleTheme : "",
						i = t.isGL ? "jpg" : ct ? "webp" : "png",
						a = t.isGL ? "data-gl" : "data";
					return "".concat(ut.cdnRoot, "/").concat(a, "/thumb").concat(e, "/").concat(t.id, ".").concat(i, "?_v_=").concat(ut.version)
				}
			}
		},
			re = (i(26), ht(ae, ie, [], !1, null, null, null));
		re.options.__file = "src/explore/ExampleCard.vue";
		var ne = re.exports;
		const oe = "undefined" != typeof window, le = oe && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), se = oe && "IntersectionObserver" in window, ce = oe && "classList" in document.createElement("p"), de = {
			elements_selector: "img",
			container: le || oe ? document : null,
			threshold: 300,
			thresholds: null,
			data_src: "src",
			data_srcset: "srcset",
			data_sizes: "sizes",
			data_bg: "bg",
			data_poster: "poster",
			class_loading: "loading",
			class_loaded: "loaded",
			class_error: "error",
			load_delay: 0,
			auto_unobserve: !0,
			callback_enter: null,
			callback_exit: null,
			callback_reveal: null,
			callback_loaded: null,
			callback_error: null,
			callback_finish: null,
			use_native: !1
		};
		const ue = function(t, e) {
			var i;
			let a = new t(e);
			try {
				i = new CustomEvent("LazyLoad::Initialized", {
					detail: {
						instance: a
					}
				})
			} catch (t) {
				(i = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
					instance: a
				})
			}
			window.dispatchEvent(i)
		};
		const fe = (t, e) => t.getAttribute("data-" + e), ge = (t, e, i) => {
			var a = "data-" + e;
			null !== i ? t.setAttribute(a, i) : t.removeAttribute(a)
		}, pe = t => "true" === fe(t, "was-processed"), he = (t, e) => ge(t, "ll-timeout", e), me = t => fe(t, "ll-timeout"), ye = (t, e, i, a) => {
			t && (void 0 === a ? void 0 === i ? t(e) : t(e, i) : t(e, i, a))
		}, ve = (t, e) => {
			t.loadingCount += e, 0 === t._elements.length && 0 === t.loadingCount && ye(t._settings.callback_finish, t)
		}, be = t => {
			let e = [];
			for (let i, a = 0; i = t.children[a]; a += 1)"SOURCE" === i.tagName && e.push(i);
			return e
		}, _e = (t, e, i) => {
			i && t.setAttribute(e, i)
		}, Ce = (t, e) => {
			_e(t, "sizes", fe(t, e.data_sizes)), _e(t, "srcset", fe(t, e.data_srcset)), _e(t, "src", fe(t, e.data_src))
		}, we = {
			IMG: (t, e) => {
				const i = t.parentNode;
				if (i && "PICTURE" === i.tagName) {
					be(i).forEach(t => {
						Ce(t, e)
					})
				}
				Ce(t, e)
			},
			IFRAME: (t, e) => {
				_e(t, "src", fe(t, e.data_src))
			},
			VIDEO: (t, e) => {
				be(t).forEach(t => {
					_e(t, "src", fe(t, e.data_src))
				}), _e(t, "poster", fe(t, e.data_poster)), _e(t, "src", fe(t, e.data_src)), t.load()
			}
		}, xe = (t, e) => {
			const i = e._settings, a = t.tagName, r = we[a];
			if (r) return r(t, i), ve(e, 1), void(e._elements = (n = e._elements, o = t, n.filter(t => t !== o)));
			var n, o;
			((t, e) => {
				const i = fe(t, e.data_src), a = fe(t, e.data_bg);
				i && (t.style.backgroundImage = `url("${i}")`), a && (t.style.backgroundImage = a)
			})(t, i)
		}, Ne = (t, e) => {
			ce ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
		}, Se = (t, e) => {
			ce ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
		}, ke = (t, e, i) => {
			t.addEventListener(e, i)
		}, De = (t, e, i) => {
			t.removeEventListener(e, i)
		}, Le = (t, e, i) => {
			De(t, "load", e), De(t, "loadeddata", e), De(t, "error", i)
		}, Te = function(t, e, i) {
			var a = i._settings;
			const r = e ? a.class_loaded : a.class_error, n = e ? a.callback_loaded : a.callback_error, o = t.target;
			Se(o, a.class_loading), Ne(o, r), ye(n, o, i), ve(i, -1)
		}, Me = (t, e) => {
			const i = r => {
				Te(r, !0, e), Le(t, i, a)
			}, a = r => {
				Te(r, !1, e), Le(t, i, a)
			};
			((t, e, i) => {
				ke(t, "load", e), ke(t, "loadeddata", e), ke(t, "error", i)
			})(t, i, a)
		}, Ee = ["IMG", "IFRAME", "VIDEO"], Ae = (t, e) => {
			var i = e._observer;
			Re(t, e), i && e._settings.auto_unobserve && i.unobserve(t)
		}, Oe = t => {
			var e = me(t);
			e && (clearTimeout(e), he(t, null))
		}, Ie = (t, e) => {
			var i = e._settings.load_delay,
				a = me(t);
			a || (a = setTimeout((function() {
				Ae(t, e), Oe(t)
			}), i), he(t, a))
		}, Re = (t, e, i) => {
			var a = e._settings;
			!i && pe(t) || (Ee.indexOf(t.tagName) > -1 && (Me(t, e), Ne(t, a.class_loading)), xe(t, e), (t => {
				ge(t, "was-processed", "true")
			})(t), ye(a.callback_reveal, t, e), ye(a.callback_set, t, e))
		}, Fe = t => {
			return !!se && (t._observer = new IntersectionObserver(e => {
				e.forEach(e => (t => t.isIntersecting || t.intersectionRatio > 0)(e) ? ((t, e, i) => {
					const a = i._settings;
					ye(a.callback_enter, t, e, i), a.load_delay ? Ie(t, i) : Ae(t, i)
				})(e.target, e, t) : ((t, e, i) => {
					const a = i._settings;
					ye(a.callback_exit, t, e, i), a.load_delay && Oe(t)
				})(e.target, e, t))
			}, {
				root: (e = t._settings).container === document ? null : e.container,
				rootMargin: e.thresholds || e.threshold + "px"
			}), !0);
			var e
		}, Pe = ["IMG", "IFRAME"], je = (t, e) => {
			return (t => t.filter(t => !pe(t)))((i = t || (t => t.container.querySelectorAll(t.elements_selector))(e), Array.prototype.slice.call(i)));
			var i
		}, $e = t => {
			var e = t._settings;
			e.container.querySelectorAll("." + e.class_error).forEach(t => {
				Se(t, e.class_error), (t => {
					ge(t, "was-processed", null)
				})(t)
			}), t.update()
		}, ze = function(t, e) {
			var i;
			this._settings = (t => Object.assign({}, de, t))(t), this.loadingCount = 0, Fe(this), this.update(e), i = this, oe && window.addEventListener("online", t => {
				$e(i)
			})
		};
		ze.prototype = {
			update: function(t) {
				var e, i = this._settings;
				(this._elements = je(t, i), !le && this._observer) ? ((t => t.use_native && "loading" in HTMLImageElement.prototype)(i) && ((e = this)._elements.forEach(t => {
					-1 !== Pe.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), Re(t, e))
				}), this._elements = je(t, i)), this._elements.forEach(t => {
					this._observer.observe(t)
				})) : this.loadAll()
			},
			destroy: function() {
				this._observer && (this._elements.forEach(t => {
					this._observer.unobserve(t)
				}), this._observer = null), this._elements = null, this._settings = null
			},
			load: function(t, e) {
				Re(t, this, e)
			},
			loadAll: function() {
				this._elements.forEach(t => {
					Ae(t, this)
				})
			}
		}, oe &&
		function(t, e) {
			if (e) if (e.length) for (let i, a = 0; i = e[a]; a += 1) ue(t, i);
			else ue(t, e)
		}(ze, window.lazyLoadOptions);
		var Be = ze,
			Ge = (i(27), {
				components: {
					ExampleCard: ne
				},
				data: function() {
					var t = {};

					function e(e, i) {
						var a = 0;
						do {
							for (var r = !1, n = 0; n < e.length; n++) {
								var o = e[n];
								if (!ot.hasOwnProperty(o.id)) {
									"string" == typeof o.category && (o.category = [o.category]);
									var l = (o.category || [])[a];
									if (l) {
										r = !0;
										var s = t[l];
										s || (s = {
											category: l,
											examples: []
										}, t[l] = s), o.isGL = i, s.examples.push(o)
									}
								}
							}
							if (!r) break
						} while (++a && a < 4)
					}
					return e(Pt, !1), e(ee, !0), {
						shared: ut,
						EXAMPLE_CATEGORIES: nt,
						exampleListByCategory: t
					}
				},
				watch: {
					"shared.darkMode": function() {
						for (var t = this.$el.querySelectorAll("img.chart-area"), e = 0; e < t.length; e++) t[e].classList.remove("ec-shot-loaded"), t[e].setAttribute("data-was-processed", "false");
						this._lazyload.update()
					}
				},
				computed: {
					exampleList: function() {
						for (var t = [], e = 0; e < nt.length; e++) {
							var i = nt[e],
								a = this.exampleListByCategory[i];
							a && a.examples.length > 0 && t.push({
								category: i,
								examples: a.examples
							})
						}
						return t
					}
				},
				mounted: function() {
					this._lazyload = new Be({
						elements_selector: "img.chart-area",
						load_delay: 400,
						class_loaded: "ec-shot-loaded"
					})
				},
				methods: {
					onActiveNavChanged: function(t, e, i) {}
				}
			}),
			We = (i(28), ht(Ge, te, [], !1, null, null, null));
		We.options.__file = "src/explore/Explore.vue";
		var He = We.exports,
			Ve = function() {
				var t = this.$createElement;
				return (this._self._c || t)("preview")
			};
		Ve._withStripped = !0;
		var Ue = ht({
			components: {
				Preview: qt
			},
			mounted: function() {
				ft().then((function(t) {
					ut.runCode = gt(t)
				}))
			}
		}, Ve, [], !1, null, null, null);
		Ue.options.__file = "src/editor/View.vue";
		var qe = Ue.exports,
			Je = i(11),
			Ze = i.n(Je);

		function Ye(t, e) {
			var i = new Q({
				locale: e.locale,
				fallbackLocale: "en",
				messages: K
			});
			if (ut.cdnRoot = e.cdnRoot, ut.version = e.version, ut.locale = e.locale || "en", "string" == typeof t && (t = document.querySelector(t)), !t) throw new Error("Can't find el.");
			var a = document.createElement("div");
			t.appendChild(a), new r.a({
				i18n: i,
				el: a,
				render: function(t) {
					return t({
						editor: Kt,
						explore: He,
						view: qe
					}[e.page] || He)
				}
			})
		}
		r.a.use(Ze.a)
	}]);