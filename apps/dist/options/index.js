(()=>{var c="__qrcodeAutoPaste",s="__qrcodeAutoJump",d="__qrcodeAutoCopy";var h=t=>t.type.includes("image"),I=()=>{chrome.runtime.openOptionsPage(),window.close()},m=t=>{let e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0),e},p=t=>{let e=["image/webp","image/jpeg","image/png"],o="image/png";return t.toDataURL(e[o])},w=t=>{try{return p(m(t))}catch{return null}},u=t=>typeof t=="boolean"?t:typeof t=="string"?t==="true":!1;var n=new bootstrap.Modal(document.getElementById("modal"),{keyboard:!0});n.show(),n.hide=()=>{window.close()},document.getElementById("confirm").addEventListener("click",()=>{n.hide()});var r=(t,e)=>{t.checked=u(localStorage.getItem(e)),t.addEventListener("change",o=>{localStorage.setItem(e,o.target.checked)})},a=(t,e)=>{new bootstrap.Tooltip(t,{title:e})},g=document.getElementById("autoPasteEl"),l=document.getElementById("autoCopyEl"),i=document.getElementById("autoJump");r(g,c),r(l,d),r(i,s),a(document.getElementById("tip1"),"\u53EF\u5B9E\u73B0\u590D\u5236\u4E8C\u7EF4\u7801\u540E\uFF0C\u6253\u5F00\u63D2\u4EF6\u5C31\u80FD\u81EA\u52A8\u89E3\u6790\u4E8C\u7EF4\u7801\u5185\u5BB9\uFF0C\u7701\u53BB\u624B\u52A8\u7C98\u8D34\u4E8C\u7EF4\u7801\u8FC7\u7A0B"),a(document.getElementById("tip2"),"\u89E3\u6790\u4E8C\u7EF4\u7801\u540E\u81EA\u52A8\u590D\u5236\u4E8C\u7EF4\u7801\u5185\u5BB9\u5230\u526A\u5207\u677F\uFF0C\u4E0D\u4F1A\u590D\u5236\u591A\u4F59\u5185\u5BB9\uFF0C\u6587\u672C\u6846\u591A\u4F59\u5185\u5BB9\u662F\u4E3A\u4E86\u63D0\u793A\u7528\u6237"),a(document.getElementById("tip3"),"\u89E3\u6790\u4E8C\u7EF4\u7801\u5982\u679C\u4E3A\u94FE\u63A5\uFF0C\u53EF\u4EE5\u81EA\u52A8\u6253\u5F00\u94FE\u63A5");})();
