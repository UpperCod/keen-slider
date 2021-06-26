import{u as e,a as t,c as l,b as n,d as o,e as s,f as i,g as a,h as r,o as d,i as c}from"./vendor.f323d234.js";const u=l`.keen-slider{display:flex;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.keen-slider__slide{position:relative;overflow:hidden;width:100%;min-height:100%}.keen-slider[data-keen-slider-v]{flex-wrap:wrap}.keen-slider[data-keen-slider-v] .keen-slider__slide{width:100%}.keen-slider[data-keen-slider-moves] *{pointer-events:none}:host{position:relative;display:block}::slotted([slot=left]),::slotted([slot=right]){display:flex;align-items:center;justify-content:center;position:absolute;top:50%;transform:translateY(-50%)}::slotted([slot=left]){left:0}::slotted([slot=right]){right:0}`;function p({centered:l,vertical:n,loop:u,initial:p,duration:v,mode:m,spacing:y,autoplay:h,autoplayMs:f,breakpoints:g}){const k=o(),b=o(),[w,S]=s();i(k,S,{childList:!0});const D=function(l,n){const[o]=e(l);return n(t(""+o))}("slidesPerView",Number),[_,x]=e("slider"),[B,E]=e("autoplayPause"),M=a("SlideChanged"),N=a("SlideDragStart"),P=a("SlideDragEnd"),j=a("SlideDragMove"),V=a("Slidedestroyed");r((()=>{const e=new d(b.current,{slidesPerView:D,centered:l,vertical:n,loop:u,initial:p,duration:v,mode:m,spacing:y,breakpoints:g,slideChanged:M,dragStart:N,dragEnd:P,move:j,destroyed:V});return x(e),()=>e.destroy()}),[D,l,n,u,p,v,m,y]);const C=w.filter((e=>e instanceof HTMLElement&&!["left","right"].includes(e.slot)));return r((()=>{if(h&&_&&!B){const e=setInterval(_.next,f);return()=>clearInterval(e)}}),[_,B]),c("host",{shadowDom:!0,ref:k,onSlideDragStart:()=>E(!0),onSlideDragEnd:()=>E(!1),onmouseover:()=>E(!0),onmouseout:()=>E(!1)},c("div",{class:"keen-slider",ref:b},C.map(((e,t)=>c("div",{class:"keen-slider__slide"},c("slot",{name:e.slot=""+t}))))),c("slot",{name:"left",onclick:null==_?void 0:_.prev}),c("slot",{name:"right",onclick:null==_?void 0:_.next}))}p.props={breakpoints:Object,centered:Boolean,vertical:{type:Boolean},loop:{type:Boolean},spacing:{type:Number,value:0},initial:{type:Number,value:0},duration:{type:Number,value:500},slidesPerView:{value:1},mode:{type:String,value:"snap"},autoplay:{type:Boolean},autoplayMs:{type:Number,value:5e3},slider:{type:Object,event:{type:"SliderMounted"}},autoplayPause:{type:Boolean}},p.styles=u;const v=n(p);customElements.define("keen-slider",v);
