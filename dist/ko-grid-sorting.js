/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function k(l){return function(d){return d}(function(d){function h(m,d){this.a=m;this.c=d||new h(function(e,d){return m(d,e)},this)}h.prototype={reverse:function(){return this.c}};d.k("ko-grid-sorting",{f:function(d,l,e){function n(a){if(a===b)f="ascending"===f?"descending":"ascending",c=c.reverse();else{b&&b.b.removeAll(["ascending-order","descending-order"]);b=a;var g=d.l;g?f="descending"===g?"descending":"ascending":f="ascending";c=new h(q(a));"descending"===f&&(c=c.reverse())}g=b.b().filter(function(a){return"ascending-order"!==
a&&"descending-order"!==a});g.push("ascending"===f?"ascending-order":"descending-order");a.b(g);e.data.a(c.a)}function p(a){return(a=e.data.p(a))&&"function"===typeof a.valueOf?a.valueOf():a}function q(a){return function(d,e){var b=p(d[a.e]),c=p(e[a.e]);return null===b&&null===c?0:null===b?-1:null===c?1:"string"===typeof b&&"string"===typeof c?b.localeCompare(c):b<=c?b<c?-1:0:1}}var b,f,c;d.d&&n(e.i.g(d.d));e.headers.n(function(a,b){a.defaultPrevented||(a.preventDefault(),n(b.h))});var r=e.data.a.subscribe(function(a){b&&
(a!==c.a&&(b.b.removeAll(["ascending-order","descending-order"]),b=f=c=null),e.m.o())});this.dispose=function(){r.dispose()}}});return d.j("sorting","ko-grid-sorting")}(l))}"function"===typeof define&&define.amd?define(["ko-grid","ko-indexed-repeat","knockout"],k):window["ko-grid-sorting"]=k(window.ko.bindingHandlers.grid);
