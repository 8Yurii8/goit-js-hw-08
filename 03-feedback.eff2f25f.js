var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector('input[name="email"]'),n=document.querySelector('textarea[name="message"]'),i=document.querySelector(".feedback-form");let o={email:"",message:""};var r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var i,o,r,a,u,f,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function y(e){return c=e,u=setTimeout(h,t),l?m(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function h(){var e=g();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?p(n,r-(e-c)):n}(e))}function w(e){return u=void 0,d&&i?m(e):(i=o=void 0,a)}function O(){var e=g(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return y(f);if(s)return u=setTimeout(h,t),m(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=j(t)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?v(j(n.maxWait)||0,t):r,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(g())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}const S=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})}((function(e){o.email=t.value,o.message=n.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500);i.addEventListener("input",S),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(o=e,t.value=o.email,n.value=o.message)}(),i.addEventListener("submit",(function(e){e.preventDefault(),console.log(o),""!==t.value&&""!==n.value||localStorage.removeItem("feedback-form-state"),t.value="",n.value=""}));
//# sourceMappingURL=03-feedback.eff2f25f.js.map
