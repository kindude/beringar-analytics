(function(){"use strict";var e={5155:function(e,t,a){var r=a(5130),l=a(6768),n=a(4232);const o={id:"app",class:"container mt-5"},c={key:0},i={key:1,class:"row"},s={class:"col-md-8"},d={class:"table-responsive"},u={class:"table table-striped table-bordered table-hover"},p={class:"pagination mt-4"},v={"aria-label":"Page navigation"},k={class:"pagination"},g=["onClick"],h={class:"col-md-4"},m={class:"analytics mt-4"},L={class:"row"},f={key:0,class:"col-md-12 mb-3"},b={class:"card"},y={class:"card-body"},C={class:"card-text"},_={class:"col-md-12 mb-3"},x={class:"card"},O={class:"card-body"},P={class:"card-text"},D={class:"col-md-12 mb-3"},E={class:"card"},w={class:"card-body"},A={class:"card-text"},S={class:""};function $(e,t,a,$,T,M){const j=(0,l.g2)("CO2Chart");return(0,l.uX)(),(0,l.CE)("div",o,[t[9]||(t[9]=(0,l.Lk)("h1",null," Test Rack 2",-1)),e.loading?((0,l.uX)(),(0,l.CE)("div",c,t[2]||(t[2]=[(0,l.Lk)("p",null,"Loading data, please wait...",-1)]))):(0,l.Q3)("",!0),e.loading?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",i,[(0,l.Lk)("div",s,[(0,l.Lk)("div",d,[(0,l.Lk)("table",u,[t[3]||(t[3]=(0,l.Lk)("thead",{class:"thead-dark"},[(0,l.Lk)("tr",null,[(0,l.Lk)("th",{scope:"col"},"#"),(0,l.Lk)("th",{scope:"col"},"ATTEC ID"),(0,l.Lk)("th",{scope:"col"},"Lora Address"),(0,l.Lk)("th",{scope:"col"},"Occupancy"),(0,l.Lk)("th",{scope:"col"},"Temp (°C)"),(0,l.Lk)("th",{scope:"col"},"Noise (dB)"),(0,l.Lk)("th",{scope:"col"},"CO2 (ppm)"),(0,l.Lk)("th",{scope:"col"},"AQ 1"),(0,l.Lk)("th",{scope:"col"},"AQ 2"),(0,l.Lk)("th",{scope:"col"},"Humidity (%)"),(0,l.Lk)("th",{scope:"col"},"Pressure (hPa)"),(0,l.Lk)("th",{scope:"col"},"Lux"),(0,l.Lk)("th",{scope:"col"},"Bearing (°)"),(0,l.Lk)("th",{scope:"col"},"Time (YYYY-MM-DD HH:mm:ss)"),(0,l.Lk)("th",{scope:"col"},"Device UUID"),(0,l.Lk)("th",{scope:"col"},"Host MCU"),(0,l.Lk)("th",{scope:"col"},"Lora MCU"),(0,l.Lk)("th",{scope:"col"},"EeDsp")])],-1)),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)($.paginatedData,((e,t)=>((0,l.uX)(),(0,l.CE)("tr",{key:e.id},[(0,l.Lk)("td",null,(0,n.v_)(($.currentPage-1)*$.itemsPerPage+t+1),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.ateccid),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.physicalsensorid),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.occupancy),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.temperature),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.noise),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.co2),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.aqi1),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.aqi2),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.humid),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.pressure),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.lux),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.bearing),1),(0,l.Lk)("td",null,(0,n.v_)($.formatDate(e.updated)),1),(0,l.Lk)("td",null,(0,n.v_)(e.detail.deviceid),1),(0,l.Lk)("td",null,(0,n.v_)(e.deviceCache?.shadow_event_document_json?.current?.state?.reported?.softwareRevision?.hostMcu),1),(0,l.Lk)("td",null,(0,n.v_)(e.deviceCache?.shadow_event_document_json?.current?.state?.reported?.softwareRevision?.loraMcu),1),(0,l.Lk)("td",null,(0,n.v_)(e.deviceCache?.shadow_event_document_json?.current?.state?.reported?.softwareRevision?.eeDsp),1)])))),128))])])]),(0,l.Lk)("div",p,[(0,l.Lk)("nav",v,[(0,l.Lk)("ul",k,[(0,l.Lk)("li",{class:(0,n.C4)(["page-item",{disabled:1===$.currentPage}])},[(0,l.Lk)("a",{class:"page-link",onClick:t[0]||(t[0]=(0,r.D$)((e=>$.currentPage--),["prevent"]))},"Previous")],2),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)($.totalPages,(e=>((0,l.uX)(),(0,l.CE)("li",{class:(0,n.C4)(["page-item",{active:$.currentPage===e}]),key:e},[(0,l.Lk)("a",{class:"page-link",onClick:(0,r.D$)((t=>$.currentPage=e),["prevent"])},(0,n.v_)(e),9,g)],2)))),128)),(0,l.Lk)("li",{class:(0,n.C4)(["page-item",{disabled:$.currentPage===$.totalPages}])},[(0,l.Lk)("a",{class:"page-link",onClick:t[1]||(t[1]=(0,r.D$)((e=>$.currentPage++),["prevent"]))},"Next")],2)])])])]),(0,l.Lk)("div",h,[(0,l.Lk)("div",m,[t[7]||(t[7]=(0,l.Lk)("h3",{class:"text-center"},"Analytics",-1)),(0,l.Lk)("div",L,[$.averageTemperature||$.averageHumidity||$.maxCO2?((0,l.uX)(),(0,l.CE)("div",f,[(0,l.Lk)("div",b,[(0,l.Lk)("div",y,[t[4]||(t[4]=(0,l.Lk)("h5",{class:"card-title"},"Average Temperature (°C)",-1)),(0,l.Lk)("p",C,(0,n.v_)($.averageTemperature.toFixed(2)),1)])])])):(0,l.Q3)("",!0),(0,l.Lk)("div",_,[(0,l.Lk)("div",x,[(0,l.Lk)("div",O,[t[5]||(t[5]=(0,l.Lk)("h5",{class:"card-title"},"Average Humidity (%)",-1)),(0,l.Lk)("p",P,(0,n.v_)($.averageHumidity.toFixed(2)),1)])])]),(0,l.Lk)("div",D,[(0,l.Lk)("div",E,[(0,l.Lk)("div",w,[t[6]||(t[6]=(0,l.Lk)("h5",{class:"card-title"},"Maximum CO2 (ppm)",-1)),(0,l.Lk)("p",A,(0,n.v_)($.maxCO2),1)])])])])]),(0,l.Lk)("div",S,[t[8]||(t[8]=(0,l.Lk)("h3",{class:"text-center"},"CO2 Levels Over Time",-1)),$.co2Data.length>0&&$.timestamps.length>0?((0,l.uX)(),(0,l.Wv)(j,{key:0,co2Data:$.co2Data,timestamps:$.timestamps,class:"",style:{height:"1000px"}},null,8,["co2Data","timestamps"])):(0,l.Q3)("",!0)])])]))])}a(4979);var T=a(4373),M=a(144);function j(e,t,a,r,n,o){return(0,l.uX)(),(0,l.CE)("div",null,t[0]||(t[0]=[(0,l.Lk)("canvas",{id:"co2Chart"},null,-1)]))}var X=a(6912);X.t1.register(...X.$L);var H={name:"CO2Chart",props:{co2Data:{type:Array,required:!0},timestamps:{type:Array,required:!0}},setup(e){const t=(0,M.KR)(null);return(0,l.sV)((()=>{const a=document.getElementById("co2Chart").getContext("2d");console.log(e.co2Data),t.value=new X.t1(a,{type:"line",data:{labels:e.timestamps,datasets:[{label:"CO2 Levels (ppm)",data:e.co2Data,borderColor:"rgba(75, 192, 192, 1)",backgroundColor:"rgba(75, 192, 192, 0.2)",borderWidth:2,fill:!0}]},options:{responsive:!0,scales:{x:{title:{display:!0,text:"Time"}},y:{title:{display:!0,text:"CO2 Levels (ppm)"},beginAtZero:!0}}}})})),(0,l.xo)((()=>{t.value&&t.value.destroy()})),{co2Chart:t}}},W=a(1241);const B=(0,W.A)(H,[["render",j]]);var R=B,F={name:"App",components:{CO2Chart:R},setup(){const e="george_dudnik",t="7355608Egor$",a=btoa(`${e}:${t}`),r=(0,M.KR)([]),n=10,o=(0,M.KR)(1),c=(0,M.KR)(!1),i=async e=>{try{const t=await T.A.get(`https://console.beringar.co.uk/privateapi/device/cache/${e.detail.deviceid}/`,{headers:{Authorization:`Basic ${a}`}});e.deviceCache=t.data}catch(t){console.error("Error fetching device cache:",t)}},s=async()=>{c.value=!0;try{const e=await T.A.get("https://console.beringar.co.uk/privateapi/sensorlatest/building/5e8af3e0-b603-4cba-a0cd-15f761f96014/",{headers:{Authorization:`Basic ${a}`}});r.value=e.data,await Promise.all(r.value.map((e=>i(e)))),console.log("All device caches fetched")}catch(e){console.error("Error fetching protected data:",e)}};(0,l.sV)(s);const d=(0,l.EW)((()=>{const e=r.value.map((e=>e.detail.temperature)).filter(Boolean),t=e.reduce(((e,t)=>e+t),0);return t/e.length||0})),u=(0,l.EW)((()=>{const e=r.value.map((e=>e.detail.humid)).filter(Boolean),t=e.reduce(((e,t)=>e+t),0);return t/e.length||0})),p=(0,l.EW)((()=>{const e=r.value.map((e=>e.detail.co2)).filter(Boolean);return Math.max(...e)||0})),v=(0,l.EW)((()=>Math.ceil(r.value.length/n))),k=(0,l.EW)((()=>{const e=(o.value-1)*n,t=e+n;return r.value.slice(e,t)})),g=(0,l.EW)((()=>r.value?r.value.map((e=>e.detail.co2)):[])),h=(0,l.EW)((()=>r.value?r.value.map((e=>m(e.updated))):[])),m=e=>{const t=new Date(e),a=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0"),n=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0"),c=String(t.getSeconds()).padStart(2,"0");return`${a}-${r}-${l} ${n}:${o}:${c}`};return{data:r,currentPage:o,itemsPerPage:n,averageTemperature:d,averageHumidity:u,maxCO2:p,totalPages:v,paginatedData:k,co2Data:g,timestamps:h,formatDate:m}}};const I=(0,W.A)(F,[["render",$]]);var K=I,Q=a(5768);const Y=(0,r.Ef)(K);Y.use(Q["default"]),Y.use(Q.IconsPlugin),Y.mount("#app")}},t={};function a(r){var l=t[r];if(void 0!==l)return l.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,l,n){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],l=e[d][1],n=e[d][2];for(var c=!0,i=0;i<r.length;i++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(c=!1,n<o&&(o=n));if(c){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,l,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,n,o=r[0],c=r[1],i=r[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(l in c)a.o(c,l)&&(a.m[l]=c[l]);if(i)var d=i(a)}for(t&&t(r);s<o.length;s++)n=o[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},r=self["webpackChunkberingar_analytics"]=self["webpackChunkberingar_analytics"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(5155)}));r=a.O(r)})();
//# sourceMappingURL=app.20304fdc.js.map