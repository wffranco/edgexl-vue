(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["library"],{"55a5":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={className:"container"},c={className:"assignments-tabs"},i={className:"assignments-tabs__content"},l={className:"assignments-list"};function s(e,t,n,s,b,o){var u=Object(r["z"])("TabHeader"),O=Object(r["z"])("LibraryCard");return Object(r["r"])(),Object(r["d"])(r["a"],null,[Object(r["h"])(u,{left:"EdgeXL"}),Object(r["h"])("div",a,[Object(r["h"])("div",c,[Object(r["h"])("div",i,[Object(r["h"])("div",l,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["x"])(e.types,(function(e,t){return Object(r["r"])(),Object(r["d"])(O,Object(r["m"])(e,{key:t}),null,16)})),128))])])])])],64)}n("9911");var b={class:"assignments-list__item-simple"},o=Object(r["h"])("div",{class:"assignments-list__item-simple__thumbnail"},[Object(r["h"])("img",{src:"https://via.placeholder.com/160x115",alt:""})],-1),u={class:"assignments-list__item-simple__info"},O={class:"info-content"},j={class:"info-content__title"},p={class:"info-content__subtitle"},m={class:"info-actions"},d=Object(r["g"])(" Open ");function h(e,t,n,a,c,i){var l=Object(r["z"])("Link");return Object(r["r"])(),Object(r["d"])("article",b,[o,Object(r["h"])("div",u,[Object(r["h"])("div",O,[Object(r["h"])("div",null,[Object(r["h"])("h4",j,'Created by "'+Object(r["C"])(e.creator)+'"',1),Object(r["h"])("p",p,Object(r["C"])(e.subtitle),1)])]),Object(r["h"])("div",m,[Object(r["h"])("div",null,[Object(r["h"])(l,{to:e.link,class:"btn-small link"},{default:Object(r["I"])((function(){return[d]})),_:1},8,["to"])])])])])}var f=n("517f"),v=Object(r["i"])({name:"LibraryCard",components:{Link:f["a"]},props:{creator:String,link:{type:[String,Object],required:!0},subtitle:String}});v.render=h;var x=v,g=n("47f7"),y={components:{LibraryCard:x,TabHeader:g["a"]},data:function(){return{types:[{creator:"Me",link:{name:"LibraryByMe"}},{creator:"Math Nation",link:{name:"LibraryByMathNation"}},{creator:"District",link:{name:"LibraryByDistrict"}},{creator:"Others",link:{name:"LibraryByOthers"}}]}}};y.render=s;t["default"]=y},"5a44":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"home"};function c(e,t,n,c,i,l){var s=Object(r["z"])("JSXExample"),b=Object(r["z"])("TSXExample"),o=Object(r["z"])("VueJsExample"),u=Object(r["z"])("VueTsExample");return Object(r["r"])(),Object(r["d"])("div",a,[Object(r["h"])(s),Object(r["h"])(b,{name:"xxx"}),Object(r["h"])(o,{name:"xxx"}),Object(r["h"])(u,{name:"xxx"})])}function i(e){return Object(r["h"])("div",null,[Object(r["g"])("Test")])}n("b0c0");function l(e){return Object(r["h"])("div",null,[Object(r["g"])("Test: "),null===e||void 0===e?void 0:e.name])}function s(e,t,n,a,c,i){return Object(r["r"])(),Object(r["d"])("div",null,"Vue Js Example")}var b={props:{example1:String}};b.render=s;var o=b;function u(e,t,n,a,c,i){return Object(r["r"])(),Object(r["d"])("ul",null,[Object(r["h"])("li",null,Object(r["C"])(e.example1),1),Object(r["h"])("li",null,Object(r["C"])(e.example2),1),Object(r["h"])("li",null,Object(r["C"])(e.prop1),1),Object(r["h"])("li",null,Object(r["C"])(e.prop2),1)])}var O=n("5c40"),j=Object(O["l"])({props:{prop1:String,prop2:{type:String,default:"Prop 2"}},setup:function(){var e="Example 1";return{example1:e}},data:function(){return{example2:"Example 2"}},computed:{},methods:{}});j.render=u;var p=j,m=Object(r["i"])({name:"Home",components:{JSXExample:i,TSXExample:l,VueJsExample:o,VueTsExample:p}});m.render=c;t["default"]=m},"857a":function(e,t,n){var r=n("1d80"),a=/"/g;e.exports=function(e,t,n,c){var i=String(r(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(c).replace(a,"&quot;")+'"'),l+">"+i+"</"+t+">"}},9911:function(e,t,n){"use strict";var r=n("23e7"),a=n("857a"),c=n("af03");r({target:"String",proto:!0,forced:c("link")},{link:function(e){return a(this,"a","href",e)}})},af03:function(e,t,n){var r=n("d039");e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}}}]);
//# sourceMappingURL=library.25913974.js.map