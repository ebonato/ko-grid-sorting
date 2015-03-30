/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function p(t){var q;q=function(k){var e,b,h;e=function(b){return function(d,a){return b.b.extend(d,{get stringifyable(){return a()}})}}(k);b=function(b,d){function a(){return 0}function f(a,c){return"string"===typeof a&&"string"===typeof c?a.localeCompare(c):a<=c?a<c?-1:0:1}function c(a,c){b.b.extend(a,{get onResultOf(){return this.h},get reverse(){return this.reverse},get callable(){return this.j}},{get h(){return function(c){return g(c,a)}},get reverse(){return function(){return c||e(a)}},get j(){return a}})}
function g(a,f){function n(c,n){return f(a(c),a(n))}c(n);d(n,function(){return{type:"by-function-comparator",I:a.stringifyable,comparator:f.stringifyable}});return n}function e(a){function f(c,b){return-a(c,b)}c(f,a);d(f,function(){return{type:"reversed-comparator",comparator:a.stringifyable}});return f}c(f);d(f,function(){return{type:"natural-comparator"}});c(a);d(a,function(){return{type:"indifferent-comparator"}});return{q:a,L:f}}(k,e);h=function(b,d){function a(a){b.b.extend(a,{get callable(){return this.j}},
{get j(){return a}})}return{u:function(f){function c(a){return a[f]}a(c);d(c,function(){return{type:"property-accessor",propertyName:f}});return c}}}(k,e);k=function(b,d){function a(){return!0}function f(){return!1}function c(a,c){b.b.extend(a,{get and(){return this.l},get negate(){return this.t},get onResultOf(){return this.h},get or(){return this.m},get callable(){return this.j}},{get l(){return function(c){return g([a,c])}},get t(){return function(){return c||h(a)}},get h(){return function(c){return e(c,
a)}},get m(){return function(c){return r([a,c])}},get j(){return a}})}function g(b){function f(a){for(var c=0,d=b.length;c<d;++c)if(!b[c](a))return!1;return!0}if(!b.length)return a;c(f);d(f,function(){return{type:"and-predicate",components:b.map(function(a){return a.stringifyable})}});return f}function e(a,b){function f(c){return b(a(c))}c(f);d(f,function(){return{type:"by-function-predicate",I:a.stringifyable,predicate:b.stringifyable}});return f}function h(a){function b(c){return!a(c)}c(b,a);d(b,
function(){return{type:"negated-predicate",predicate:a.stringifyable}});return b}function r(a){function b(c){for(var f=0,d=a.length;f<d;++f)if(a[f](c))return!0;return!1}if(!a.length)return f;c(b);d(b,function(){return{type:"or-predicate",components:a.map(function(a){return a.stringifyable})}});return b}c(f);d(f,function(){return{type:"always-false-predicate"}});c(a);d(a,function(){return{type:"always-true-predicate"}});return{q:f,R:a,l:g,S:function(a,b){function f(c){return a(c)}c(f);d(f,b);return f},
m:r,v:function(a){function b(c){return a.test(c)}c(b);d(b,function(){return{type:"regular-expression-predicate",v:a.source,T:!a.ignoreCase,multiline:a.multiline}});return b}}}(k,e);return function(b){return b}({f:b,c:h,predicates:k,s:e,P:function(b,d){return"function"===typeof d||"object"===typeof d?d.stringifyable||d:d}})}(function(){var k;k=function(){function e(b,e){return Object.prototype.hasOwnProperty.call(b,e)}return{A:function(b,e){if(b===e)return!0;var m=!!e&&"function"===typeof e.valueOf;
return!!b&&"function"===typeof b.valueOf&&m&&b.valueOf()===e.valueOf()},extend:function(b,e){Array.prototype.slice.call(arguments,1).forEach(function(e){for(var d=Object.keys(e),a=0,f=d.length;a<f;a++){var c=d[a],g=Object.getOwnPropertyDescriptor(e,c);void 0!==g&&g.enumerable&&Object.defineProperty(b,c,g)}});return b},H:function(b,h){for(var m in b)e(b,m)&&h(m,b[m])},p:e,K:function(b,h){var m={},d;for(d in b)e(b,d)&&(m[d]=h(b[d],d,b));return m}}}();return function(e){return e}(function(e,b,h,m){return{d:e,
c:b,b:h,n:m}}(function(e){function b(a){return a.filter(function(a,c,b){return b.lastIndexOf(a)===c})}function h(a,b){for(var c=a.length,d=-1,e=0;e<c;++e)if(b(a[e])){if(0<=d)throw Error("Multiple elements match the predicate.");d=e}return d}function m(a,b){return a&&"function"===typeof a.valueOf&&b&&"function"===typeof b.valueOf?a.valueOf()<=b.valueOf()?a.valueOf()<b.valueOf()?-1:0:1:a<=b?a<b?-1:0:1}function d(a,b){var c=a.length,e=Array(c),d=Array(c),l;for(l=0;l<c;++l)e[l]=l,d[l]=a[l];l=a;a=d;d=
l;e.sort(function(c,d){return b(a[c],a[d])||c-d});for(l=0;l<c;++l)d[l]=a[e[l]];return d}return{contains:function(a,b){return 0<=a.indexOf(b)},F:function(a){if(50<a.length){for(var d=a.length,c={},g,h=0;h<d;++h)if(g=a[h],"string"===typeof g)if(e.p(c,g))break;else c[g]=!0;else if(a.lastIndexOf(g)!==h)break;if(!(h>=d)){for(var l=a.slice(0,h);h<d;++h)g=a[h],"string"===typeof g?e.p(c,g)||(c[g]=!0,l.push(g)):a.lastIndexOf(g)===h&&l.push(g);a=l}}else a=b(a);return a},G:function(a,b){return Array.prototype.concat.apply([],
a.map(b))},M:function(a,b){var c=h(a,b);if(0>c)throw Error("None of the elements matches the predicate.");return a[c]},N:function(a,b){var c=h(a,b);return 0<=c?a[c]:null},O:function(a,b){var c=b||m;window.chrome?c=d(a,c):(a.sort(c),c=a);return c}}}(k),function(){function e(b){return function(){return b}}return{ca:e(!0),W:e(!1),$:e(void 0),aa:e(null),da:e(0),B:e,J:function(b){return b}}}(),k,{C:function(e){return e.replace(/([A-Z])/g,function(b){return"-"+b.toLowerCase()})},D:function(e){return e.replace(/-([a-z])/g,
function(b){return b[1].toUpperCase()})},format:function(e){var b=arguments;return e.replace(/{(\d+)}/g,function(e,m){var d=parseInt(m,10)+1;return typeof b.length<=d?e:b[d]})}}))}());return function(k){return k}(function(k,e,b){e.defineExtension("ko-grid-sorting",{q:function(e,m,d){function a(a){a===c?(g="ascending"===g?"descending":"ascending",k=k.reverse()):(c&&c.headerClasses.removeAll(["ascending-order","descending-order"]),c=a,g="ascending",k=f(a));a.headerClasses(c.headerClasses().filter(function(a){return"ascending-order"!==
a&&"descending-order"!==a}).concat(["ascending"===g?"ascending-order":"descending-order"]));d.data.comparator(k)}function f(a){function c(a){return(a=d.data.valueSelector(a[e]))&&"function"===typeof a.valueOf?a.valueOf():a}var e=a.property;b.s(c,function(){return b.c.u(a.property).stringifyable});return b.f.L.h(c)}var c,g,k;(e=e.initiallyBy)&&a(d.columns.byId(e));d.headers.onColumnHeaderClick(function(b,c){b.defaultPrevented||(b.preventDefault(),a(c.column))});var l=d.data.comparator.subscribe(function(a){c&&
(a!==k&&(c.headerClasses.removeAll(["ascending-order","descending-order"]),c=g=k=null),d.layout.recalculate())});this.dispose=function(){l.dispose()}}});return e.declareExtensionAlias("sorting","ko-grid-sorting")}({},t,q))}"function"===typeof define&&define.amd?define(["ko-grid","ko-data-source","ko-indexed-repeat","knockout"],p):window["ko-grid-sorting"]=p(window.ko.bindingHandlers.grid);