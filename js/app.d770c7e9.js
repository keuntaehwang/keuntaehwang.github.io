(function(){"use strict";var t={4493:function(t,i,e){var l=e(5130),n=e(6768),o=e(4232);const r={class:"nav nav-tabs"},s=["onClick"],a={class:"continer"},c={class:"row mt-3"},p={class:"d-grid gap-2"},d=["onClick"],k={class:"fw-bold text-dark"},u={class:"fw-lighter text-dark",style:{"font-size":"12px"}};function h(t,i,e,l,h,w){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("ul",r,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(h.fav,((t,i)=>((0,n.uX)(),(0,n.CE)("li",{class:"nav-item",key:i,ref_for:!0,ref:"nav-"+i},[(0,n.Lk)("a",{class:(0,o.C4)("nav-link "+(h.selectedNavIdx==i?"active":"")),onClick:t=>w.renderFav(i)},(0,o.v_)(t.label),11,s)])))),128))]),(0,n.Lk)("div",a,[(0,n.Lk)("div",c,[(0,n.Lk)("div",p,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(h.viewFav.links,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{class:"p-2 bg-light border",key:e,onClick:i=>w.go(t.link),style:{cursor:"pointer"}},[(0,n.Lk)("span",k,(0,o.v_)(t.title),1),i[0]||(i[0]=(0,n.eW)("   ")),(0,n.Lk)("span",u,(0,o.v_)(t.description),1)],8,d)))),128))])])])])}var w=[{label:"A",links:[{title:"Naver",link:"https://m.naver.com/",description:""},{title:"Naver Sports",link:"https://sports.news.naver.com/",description:""},{title:"Issue",link:"https://www.issuelink.co.kr/community/listview/all/3/adj/_self/blank/blank/blank",description:""},{title:"Issue #2",link:"https://aagag.com/mirror/",description:""},{title:"Issue #3",link:"https://gorani.kr/",description:""},{title:"algu",link:"https://www.algumon.com/",description:""}]},{label:"B",links:[{title:"경기도사이버도서관",link:"https://www.library.kr",description:""},{title:"경기도사이버도서관",link:"https://cyberlibrary.dkyobobook.co.kr/main.ink",description:"구독형"},{title:"용인 디지털 자료 서비스",link:"https://lib.yongin.go.kr/intro/41687/contents.do",description:""},{title:"용인전자책도서관",link:"https://ebook.yongin.go.kr/elibrary-front/main.ink",description:""}]},{label:"W",links:[{title:"Naver",link:"https://weather.naver.com/today",description:""},{title:"웨더뉴스 ( today )",link:"https://www.kr-weathernews.com/mv3/html/map.html",description:""},{title:"기상청",link:"https://www.weather.go.kr/w/image/vshrt/rain.do",description:"초단기예측"}]},{label:"C",links:[{title:"Gmail",link:"https://mail.google.com/",description:""},{title:"quickconnect",link:"https://quickconnect.to/",description:""}]},{label:"F",links:[{title:"CFS",link:"https://www.classicfootballshirts.co.uk/",description:"classic football shirts"},{title:"prodirect sports",link:"https://www.prodirectsport.com/",description:""},{title:"kitbag",link:"https://www.kitbag.com/en/",description:""},{title:"allthatkids",link:"https://allthatkids.co.kr/",description:""}]},{label:"S",links:[{title:"Samsung Family",link:"https://www.samsungebiz.com/welfare/familymall/member/indexConnectionCtf/",description:"classic football shirts"},{title:"danawa",link:"http://m.danawa.com/",description:""},{title:"신한카드",link:"https://www.shinhancard.com/pconts/html/card/apply/credit/1188292_2207.html",description:"주차정보"},{title:"신한카드 경유",link:"https://allthat.aws.shinhancard.com/dsp02000/429",description:"구매 경유"},{title:"buts",link:"https://buts.co.kr",description:"구독 공유"},{title:"pickle plus",link:"https://pickle.plus",description:"구독 공유"},{title:"lendit",link:"https://invest.lendit.co.kr/invest",description:""},{title:"pays",link:"https://www.paysgift.com/Mobile/Inquiry",description:"잔액조회"},{title:"infodeli",link:"https://coupon.infordeli.com/coupon",description:"잔액"},{title:"malltail",link:"https://post.malltail.com/",description:"h.."}]},{label:"I",links:[{title:"IP",link:"https://whatismyipaddress.com/",description:""},{title:"oracle cloud",link:"https://www.oracle.com/cloud/sign-in.html?redirect_uri=https%3A%2F%2Fcloud.oracle.com%2F",description:""},{title:"github",link:"https://github.com/keuntaehwang/public/blob/main/_posts/2023-02-07-favorite.markdown",description:""}]},{label:"M",links:[{title:"U+Mobile",link:"https://www.uplusumobile.com/",description:""},{title:"skylife",link:"https://www.skylife.co.kr/member/login",description:""},{title:"liivm",link:"https://www.liivm.com/",description:""},{title:"kt chat",link:"https://dt.kt.co.kr/fe/chat/pay.do?key=0deae4f4-9cdb-4692-b0fe-c42158dff46b",description:"chat pay"}]}],m={name:"app-home",props:{},data(){return{fav:w,selectedNavIdx:0,viewFav:[],style:["tile-blue","tile-green","tile-yellow","tile-pink","tile-purple","tile-lime","tile-teal","tile-turquoise","tile-greensea","tile-emerald","tile-nephritis","tile-amethyst","tile-midnightblue","tile-orange","tile-carrot","tile-pumpkin","tile-alizarin","tile-clouds","tile-silver","tile-concrete","tile-asbestos"]}},mounted(){this.renderFav(this.selectedNavIdx)},methods:{renderFav(t){this.selectedNavIdx=t,this.viewFav=w[t]},tileColor(t){return["thumbnail","tile","tile-wide",this.style[t%this.style.length]]},go(t){window.location.href=t}}},f=e(1241);const v=(0,f.A)(m,[["render",h]]);var b=v;(0,l.Ef)(b).mount("#app")}},i={};function e(l){var n=i[l];if(void 0!==n)return n.exports;var o=i[l]={exports:{}};return t[l].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(i,l,n,o){if(!l){var r=1/0;for(p=0;p<t.length;p++){l=t[p][0],n=t[p][1],o=t[p][2];for(var s=!0,a=0;a<l.length;a++)(!1&o||r>=o)&&Object.keys(e.O).every((function(t){return e.O[t](l[a])}))?l.splice(a--,1):(s=!1,o<r&&(r=o));if(s){t.splice(p--,1);var c=n();void 0!==c&&(i=c)}}return i}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[l,n,o]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var l in i)e.o(i,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:i[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={524:0};e.O.j=function(i){return 0===t[i]};var i=function(i,l){var n,o,r=l[0],s=l[1],a=l[2],c=0;if(r.some((function(i){return 0!==t[i]}))){for(n in s)e.o(s,n)&&(e.m[n]=s[n]);if(a)var p=a(e)}for(i&&i(l);c<r.length;c++)o=r[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(p)},l=self["webpackChunkfavorite_vue"]=self["webpackChunkfavorite_vue"]||[];l.forEach(i.bind(null,0)),l.push=i.bind(null,l.push.bind(l))}();var l=e.O(void 0,[504],(function(){return e(4493)}));l=e.O(l)})();
//# sourceMappingURL=app.d770c7e9.js.map