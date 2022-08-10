(()=>{var at=Object.create;var K=Object.defineProperty;var it=Object.getOwnPropertyDescriptor;var ot=Object.getOwnPropertyNames;var st=Object.getPrototypeOf,ut=Object.prototype.hasOwnProperty;var ht=(o,u)=>()=>(u||o((u={exports:{}}).exports,u),u.exports);var lt=(o,u,g,c)=>{if(u&&typeof u=="object"||typeof u=="function")for(let _ of ot(u))!ut.call(o,_)&&_!==g&&K(o,_,{get:()=>u[_],enumerable:!(c=it(u,_))||c.enumerable});return o};var ft=(o,u,g)=>(g=o!=null?at(st(o)):{},lt(u||!o||!o.__esModule?K(g,"default",{value:o,enumerable:!0}):g,o));var J=ht((Lt,W)=>{(function(o){"use strict";o.exports.is_uri=g,o.exports.is_http_uri=c,o.exports.is_https_uri=_,o.exports.is_web_uri=p,o.exports.isUri=g,o.exports.isHttpUri=c,o.exports.isHttpsUri=_,o.exports.isWebUri=p;var u=function(d){var m=d.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);return m};function g(d){if(!!d&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(d)&&!/%[^0-9a-f]/i.test(d)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(d)){var m=[],E="",w="",C="",T="",B="",L="";if(m=u(d),E=m[1],w=m[2],C=m[3],T=m[4],B=m[5],!!(E&&E.length&&C.length>=0)){if(w&&w.length){if(!(C.length===0||/^\//.test(C)))return}else if(/^\/\//.test(C))return;if(!!/^[a-z][a-z0-9\+\-\.]*$/.test(E.toLowerCase()))return L+=E+":",w&&w.length&&(L+="//"+w),L+=C,T&&T.length&&(L+="?"+T),B&&B.length&&(L+="#"+B),L}}}function c(d,m){if(!!g(d)){var E=[],w="",C="",T="",B="",L="",R="",x="";if(E=u(d),w=E[1],C=E[2],T=E[3],L=E[4],R=E[5],!!w){if(m){if(w.toLowerCase()!="https")return}else if(w.toLowerCase()!="http")return;if(!!C)return/:(\d+)$/.test(C)&&(B=C.match(/:(\d+)$/)[0],C=C.replace(/:\d+$/,"")),x+=w+":",x+="//"+C,B&&(x+=B),x+=T,L&&L.length&&(x+="?"+L),R&&R.length&&(x+="#"+R),x}}}function _(d){return c(d,!0)}function p(d){return c(d)||_(d)}})(W)});var O="__qrcodeAutoPaste",S="__qrcodeAutoJump",H="__qrcodeAutoCopy";var X=ft(J()),F=(o,u)=>{localStorage.getItem(o)===null&&localStorage.setItem(o,u)};F(H,"true"),F(S,"false"),F(O,"false");var $=o=>{setTimeout(()=>{o.select(),document.execCommand("paste")})},Y=(o,u)=>{o.value=u,o.select(),document.execCommand("copy")},V=o=>{X.default.isUri(o)&&window.open(o)};var N;(function(){function o(t){this.mode=g.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var n=[],a=this.data.charCodeAt(e);a>65536?(n[0]=240|(a&1835008)>>>18,n[1]=128|(a&258048)>>>12,n[2]=128|(a&4032)>>>6,n[3]=128|a&63):a>2048?(n[0]=224|(a&61440)>>>12,n[1]=128|(a&4032)>>>6,n[2]=128|a&63):a>128?(n[0]=192|(a&1984)>>>6,n[1]=128|a&63):n[0]=a,this.parsedData.push(n)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}o.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}};function u(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}u.prototype={addData:function(t){var e=new o(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(0<=r&&r<=6&&(n==0||n==6)||0<=n&&n<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=n&&n<=4?this.modules[t+r][e+n]=!0:this.modules[t+r][e+n]=!1)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=p.getLostPoint(this);(r==0||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r),a=1;this.make();for(var s=0;s<this.modules.length;s++)for(var h=s*a,i=0;i<this.modules[s].length;i++){var l=i*a,v=this.modules[s][i];v&&(n.beginFill(0,100),n.moveTo(l,h),n.lineTo(l+a,h),n.lineTo(l+a,h+a),n.lineTo(l,h+a),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=p.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],a=t[r];if(this.modules[n][a]==null)for(var s=-2;s<=2;s++)for(var h=-2;h<=2;h++)s==-2||s==2||h==-2||h==2||s==0&&h==0?this.modules[n+s][a+h]=!0:this.modules[n+s][a+h]=!1}},setupTypeNumber:function(t){for(var e=p.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&(e>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(var r=0;r<18;r++){var n=!t&&(e>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=p.getBCHTypeInfo(r),a=0;a<15;a++){var s=!t&&(n>>a&1)==1;a<6?this.modules[a][8]=s:a<8?this.modules[a+1][8]=s:this.modules[this.moduleCount-15+a][8]=s}for(var a=0;a<15;a++){var s=!t&&(n>>a&1)==1;a<8?this.modules[8][this.moduleCount-a-1]=s:a<9?this.modules[8][15-a-1+1]=s:this.modules[8][15-a-1]=s}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,a=7,s=0,h=this.moduleCount-1;h>0;h-=2)for(h==6&&h--;;){for(var i=0;i<2;i++)if(this.modules[n][h-i]==null){var l=!1;s<t.length&&(l=(t[s]>>>a&1)==1);var v=p.getMask(e,n,h-i);v&&(l=!l),this.modules[n][h-i]=l,a--,a==-1&&(s++,a=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}}},u.PAD0=236,u.PAD1=17,u.createData=function(t,e,r){for(var n=w.getRSBlocks(t,e),a=new C,s=0;s<r.length;s++){var h=r[s];a.put(h.mode,4),a.put(h.getLength(),p.getLengthInBits(h.mode,t)),h.write(a)}for(var i=0,s=0;s<n.length;s++)i+=n[s].dataCount;if(a.getLengthInBits()>i*8)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+i*8+")");for(a.getLengthInBits()+4<=i*8&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=i*8||(a.put(u.PAD0,8),a.getLengthInBits()>=i*8));)a.put(u.PAD1,8);return u.createBytes(a,n)},u.createBytes=function(t,e){for(var r=0,n=0,a=0,s=new Array(e.length),h=new Array(e.length),i=0;i<e.length;i++){var l=e[i].dataCount,v=e[i].totalCount-l;n=Math.max(n,l),a=Math.max(a,v),s[i]=new Array(l);for(var f=0;f<s[i].length;f++)s[i][f]=255&t.buffer[f+r];r+=l;var A=p.getErrorCorrectPolynomial(v),P=new E(s[i],A.getLength()-1),I=P.mod(A);h[i]=new Array(A.getLength()-1);for(var f=0;f<h[i].length;f++){var D=f+I.getLength()-h[i].length;h[i][f]=D>=0?I.get(D):0}}for(var y=0,f=0;f<e.length;f++)y+=e[f].totalCount;for(var M=new Array(y),k=0,f=0;f<n;f++)for(var i=0;i<e.length;i++)f<s[i].length&&(M[k++]=s[i][f]);for(var f=0;f<a;f++)for(var i=0;i<e.length;i++)f<h[i].length&&(M[k++]=h[i][f]);return M};for(var g={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},c={L:1,M:0,Q:3,H:2},_={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},p={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(t){for(var e=t<<10;p.getBCHDigit(e)-p.getBCHDigit(p.G15)>=0;)e^=p.G15<<p.getBCHDigit(e)-p.getBCHDigit(p.G15);return(t<<10|e)^p.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;p.getBCHDigit(e)-p.getBCHDigit(p.G18)>=0;)e^=p.G18<<p.getBCHDigit(e)-p.getBCHDigit(p.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;t!=0;)e++,t>>>=1;return e},getPatternPosition:function(t){return p.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case _.PATTERN000:return(e+r)%2==0;case _.PATTERN001:return e%2==0;case _.PATTERN010:return r%3==0;case _.PATTERN011:return(e+r)%3==0;case _.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case _.PATTERN101:return e*r%2+e*r%3==0;case _.PATTERN110:return(e*r%2+e*r%3)%2==0;case _.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new E([1],0),r=0;r<t;r++)e=e.multiply(new E([1,d.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case g.MODE_NUMBER:return 10;case g.MODE_ALPHA_NUM:return 9;case g.MODE_8BIT_BYTE:return 8;case g.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case g.MODE_NUMBER:return 12;case g.MODE_ALPHA_NUM:return 11;case g.MODE_8BIT_BYTE:return 16;case g.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case g.MODE_NUMBER:return 14;case g.MODE_ALPHA_NUM:return 13;case g.MODE_8BIT_BYTE:return 16;case g.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var a=0;a<e;a++){for(var s=0,h=t.isDark(n,a),i=-1;i<=1;i++)if(!(n+i<0||e<=n+i))for(var l=-1;l<=1;l++)a+l<0||e<=a+l||i==0&&l==0||h==t.isDark(n+i,a+l)&&s++;s>5&&(r+=3+s-5)}for(var n=0;n<e-1;n++)for(var a=0;a<e-1;a++){var v=0;t.isDark(n,a)&&v++,t.isDark(n+1,a)&&v++,t.isDark(n,a+1)&&v++,t.isDark(n+1,a+1)&&v++,(v==0||v==4)&&(r+=3)}for(var n=0;n<e;n++)for(var a=0;a<e-6;a++)t.isDark(n,a)&&!t.isDark(n,a+1)&&t.isDark(n,a+2)&&t.isDark(n,a+3)&&t.isDark(n,a+4)&&!t.isDark(n,a+5)&&t.isDark(n,a+6)&&(r+=40);for(var a=0;a<e;a++)for(var n=0;n<e-6;n++)t.isDark(n,a)&&!t.isDark(n+1,a)&&t.isDark(n+2,a)&&t.isDark(n+3,a)&&t.isDark(n+4,a)&&!t.isDark(n+5,a)&&t.isDark(n+6,a)&&(r+=40);for(var f=0,a=0;a<e;a++)for(var n=0;n<e;n++)t.isDark(n,a)&&f++;var A=Math.abs(100*f/e/e-50)/5;return r+=A*10,r}},d={glog:function(t){if(t<1)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},m=0;m<8;m++)d.EXP_TABLE[m]=1<<m;for(var m=8;m<256;m++)d.EXP_TABLE[m]=d.EXP_TABLE[m-4]^d.EXP_TABLE[m-5]^d.EXP_TABLE[m-6]^d.EXP_TABLE[m-8];for(var m=0;m<255;m++)d.LOG_TABLE[d.EXP_TABLE[m]]=m;function E(t,e){if(t.length==null)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&t[r]==0;)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}E.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=d.gexp(d.glog(this.get(r))+d.glog(t.get(n)));return new E(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=d.glog(this.get(0))-d.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(var n=0;n<t.getLength();n++)r[n]^=d.gexp(d.glog(t.get(n))+e);return new E(r,0).mod(t)}};function w(t,e){this.totalCount=t,this.dataCount=e}w.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],w.getRSBlocks=function(t,e){var r=w.getRsBlockTable(t,e);if(r==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,a=[],s=0;s<n;s++)for(var h=r[s*3+0],i=r[s*3+1],l=r[s*3+2],v=0;v<h;v++)a.push(new w(i,l));return a},w.getRsBlockTable=function(t,e){switch(e){case c.L:return w.RS_BLOCK_TABLE[(t-1)*4+0];case c.M:return w.RS_BLOCK_TABLE[(t-1)*4+1];case c.Q:return w.RS_BLOCK_TABLE[(t-1)*4+2];case c.H:return w.RS_BLOCK_TABLE[(t-1)*4+3];default:return}};function C(){this.buffer=[],this.length=0}C.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var r=0;r<e;r++)this.putBit((t>>>e-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var T=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function B(){return typeof CanvasRenderingContext2D<"u"}function L(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var R=function(){var t=function(e,r){this._el=e,this._htOption=r};return t.prototype.draw=function(e){var r=this._htOption,n=this._el,a=e.getModuleCount(),s=Math.floor(r.width/a),h=Math.floor(r.height/a);this.clear();function i(P,I){var D=document.createElementNS("http://www.w3.org/2000/svg",P);for(var y in I)I.hasOwnProperty(y)&&D.setAttribute(y,I[y]);return D}var l=i("svg",{viewBox:"0 0 "+String(a)+" "+String(a),width:"100%",height:"100%",fill:r.colorLight});l.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.appendChild(l),l.appendChild(i("rect",{fill:r.colorLight,width:"100%",height:"100%"})),l.appendChild(i("rect",{fill:r.colorDark,width:"1",height:"1",id:"template"}));for(var v=0;v<a;v++)for(var f=0;f<a;f++)if(e.isDark(v,f)){var A=i("use",{x:String(v),y:String(f)});A.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),l.appendChild(A)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),x=document.documentElement.tagName.toLowerCase()==="svg",G=x?R:B()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(s,h,i,l,v,f,A,P,I){if("nodeName"in s&&/img/i.test(s.nodeName))for(var D=arguments.length-1;D>=1;D--)arguments[D]=arguments[D]*e;else typeof P>"u"&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}function n(s,h){var i=this;if(i._fFail=h,i._fSuccess=s,i._bSupportDataURI===null){var l=document.createElement("img"),v=function(){i._bSupportDataURI=!1,i._fFail&&i._fFail.call(i)},f=function(){i._bSupportDataURI=!0,i._fSuccess&&i._fSuccess.call(i)};l.onabort=v,l.onerror=v,l.onload=f,l.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";return}else i._bSupportDataURI===!0&&i._fSuccess?i._fSuccess.call(i):i._bSupportDataURI===!1&&i._fFail&&i._fFail.call(i)}var a=function(s,h){this._bIsPainted=!1,this._android=L(),this._htOption=h,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=h.width,this._elCanvas.height=h.height,s.appendChild(this._elCanvas),this._el=s,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return a.prototype.draw=function(s){var h=this._elImage,i=this._oContext,l=this._htOption,v=s.getModuleCount(),f=l.width/v,A=l.height/v,P=Math.round(f),I=Math.round(A);h.style.display="none",this.clear();for(var D=0;D<v;D++)for(var y=0;y<v;y++){var M=s.isDark(D,y),k=y*f,Q=D*A;i.strokeStyle=M?l.colorDark:l.colorLight,i.lineWidth=1,i.fillStyle=M?l.colorDark:l.colorLight,i.fillRect(k,Q,f,A),i.strokeRect(Math.floor(k)+.5,Math.floor(Q)+.5,P,I),i.strokeRect(Math.ceil(k)-.5,Math.ceil(Q)-.5,P,I)}this._bIsPainted=!0},a.prototype.makeImage=function(){this._bIsPainted&&n.call(this,t)},a.prototype.isPainted=function(){return this._bIsPainted},a.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},a.prototype.round=function(s){return s&&Math.floor(s*1e3)/1e3},a}():function(){var t=function(e,r){this._el=e,this._htOption=r};return t.prototype.draw=function(e){for(var r=this._htOption,n=this._el,a=e.getModuleCount(),s=Math.floor(r.width/a),h=Math.floor(r.height/a),i=['<table style="border:0;border-collapse:collapse;">'],l=0;l<a;l++){i.push("<tr>");for(var v=0;v<a;v++)i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+s+"px;height:"+h+"px;background-color:"+(e.isDark(l,v)?r.colorDark:r.colorLight)+';"></td>');i.push("</tr>")}i.push("</table>"),n.innerHTML=i.join("");var f=n.childNodes[0],A=(r.width-f.offsetWidth)/2,P=(r.height-f.offsetHeight)/2;A>0&&P>0&&(f.style.margin=P+"px "+A+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function rt(t,e){for(var r=1,n=nt(t),a=0,s=T.length;a<=s;a++){var h=0;switch(e){case c.L:h=T[a][0];break;case c.M:h=T[a][1];break;case c.Q:h=T[a][2];break;case c.H:h=T[a][3];break}if(n<=h)break;r++}if(r>T.length)throw new Error("Too long data");return r}function nt(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}N=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:c.H},typeof e=="string"&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];typeof t=="string"&&(t=document.getElementById(t)),this._htOption.useSVG&&(G=R),this._android=L(),this._el=t,this._oQRCode=null,this._oDrawing=new G(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},N.prototype.makeCode=function(t){this._oQRCode=new u(rt(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},N.prototype.makeImage=function(){typeof this._oDrawing.makeImage=="function"&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},N.prototype.clear=function(){this._oDrawing.clear()},N.CorrectLevel=c})();var z=N;var gt=document.getElementById("buildQrcode"),Z=document.getElementById("urlConiner"),j=(o,u)=>{o.innerHTML="",new z(o,{text:u,width:260,height:260})};gt.addEventListener("click",()=>{let o=document.getElementById("qrcodeWrap");j(o,Z.value)});var q=()=>{let o=document.getElementById("qrcodeWrap");chrome.tabs.query({active:!0,currentWindow:!0},function(u){Array.isArray(u)&&u.length>0?(Z.value=u[0].url,o&&j(o,u[0].url)):o.innerHTML="\u8BF7\u6253\u5F00\u4E00\u4E2A\u9875\u9762"})};var Rt=o=>o.type.includes("image"),tt=()=>{chrome.runtime.openOptionsPage(),window.close()},ct=o=>{let u=document.createElement("canvas");return u.width=o.width,u.height=o.height,u.getContext("2d").drawImage(o,0,0),u},dt=o=>{let u=["image/webp","image/jpeg","image/png"],g="image/png";return o.toDataURL(u[g])},bt=o=>{try{return dt(ct(o))}catch{return null}},U=o=>typeof o=="boolean"?o:typeof o=="string"?o==="true":!1;var b=document.getElementById("content");b.focus();var pt=U(localStorage.getItem(O));pt&&$(b);var Ht=o=>new Promise((u,g)=>{let c=new FileReader;try{c.onload=function(_){let p=new Image;p.src=_.target.result,p.onload=()=>{u(p)}},c.readAsDataURL(o)}catch{g(null)}}),vt=o=>{let u=U(localStorage.getItem(H)),g=U(localStorage.getItem(S));u&&Y(b,o),g&&V(o),b.value=`\u4E8C\u7EF4\u7801\u5185\u5BB9\u4E3A\uFF1A${o}${u?",\u5DF2\u81EA\u52A8\u590D\u5236\u5230\u526A\u8D34\u677F":""}`},mt=o=>{b.value="\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u56FE\u7247\u662F\u5426\u662F\u4E8C\u7EF4\u7801"};async function _t(o){return new Promise((u,g)=>{let c=new Image;c.onload=()=>u(c),c.onerror=g,c.src=o})}function wt(o,u,g){_t(o).then(c=>{new ZXing.BrowserQRCodeReader().decodeFromImage(c).then(p=>{u(p.text)}).catch(p=>{g(p)})})}var Et=(o,u,g)=>{let c=new FileReader;c.onload=_=>{wt(_.target.result,u,g)},c.readAsDataURL(o)};b.addEventListener("paste",o=>{let u=o.clipboardData&&o.clipboardData.items,g=null;if(u&&u.length)for(let c=0;c<u.length;c++)u[c].type.indexOf("image")!==-1&&(g=u[c].getAsFile(),b.value="\u6B63\u5728\u89E3\u6790\u4E2D, \u8BF7\u7A0D\u7B49...",Et(g,vt,mt))});var Ct=document.getElementById("settings");Ct.addEventListener("click",tt);var At=document.getElementById("funcGroup"),et=["parseQrcodeWrap","buildQrcodeWrap"];At.addEventListener("click",o=>{let u=Array.from(document.getElementsByClassName("func")),g=o.target.getAttribute("index");u.forEach((c,_)=>{_==g?(c.classList.add("active"),et.forEach((p,d)=>{let m=document.getElementById(et[d]);d==g?(m.style.display="block",d===1&&q()):m.style.display="none"})):c.classList.remove("active")})});})();
