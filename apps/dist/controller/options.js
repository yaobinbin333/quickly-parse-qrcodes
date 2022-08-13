(()=>{var p="__qrcodeAutoPaste",g="__qrcodeAutoJump",r="__qrcodeAutoCopy";var v=e=>e.type.includes("image"),x=()=>{chrome.runtime.openOptionsPage(),window.close()},h=e=>{let t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t},y=e=>{let t=["image/webp","image/jpeg","image/png"],n="image/png";return e.toDataURL(n)},B=e=>{try{return y(h(e))}catch(t){return console.log("error: ",t),null}},c=e=>typeof e=="boolean"?e:typeof e=="string"?e==="true":!1;var i=class{save(t,n){localStorage.setItem(t,n)}getValue(t){return localStorage.getItem(t)}initialSave(t,n){this.getValue(t)===null&&this.save(t,n)}};var o=class extends i{constructor(n){super();this.configs=n,this.getValue(r)===null&&this.setDefault()}static getInstance(n){return o.instance||(o.instance=new o(n)),o.instance}add(n,a,s){this.configs.push({type:n,defaultValue:a,postHandle:s})}emit(n,...a){c(this.getValue(n))&&this.configs.forEach(s=>{s.type===n&&s.postHandle(...a)})}setDefault(){this.configs.forEach(n=>{this.initialSave(n.type,n.defaultValue)})}};var d=o.getInstance(),u=new bootstrap.Modal(document.getElementById("modal"),{keyboard:!0});u.show(),u.hide=()=>{window.close()},document.getElementById("confirm").addEventListener("click",()=>{u.hide()});var l=(e,t)=>{e.checked=c(d.getValue(t)),e.addEventListener("change",n=>{let a=n.target.checked;console.log("autoPasteEl",a),d.save(t,a)})},m=(e,t)=>{new bootstrap.Tooltip(e,{title:t})},f=document.getElementById("autoPasteEl"),E=document.getElementById("autoCopyEl"),I=document.getElementById("autoJump");l(f,p),l(E,r),l(I,g),m(document.getElementById("tip1"),"\u53EF\u5B9E\u73B0\u590D\u5236\u4E8C\u7EF4\u7801\u540E\uFF0C\u6253\u5F00\u63D2\u4EF6\u5C31\u80FD\u81EA\u52A8\u89E3\u6790\u4E8C\u7EF4\u7801\u5185\u5BB9\uFF0C\u7701\u53BB\u624B\u52A8\u7C98\u8D34\u4E8C\u7EF4\u7801\u8FC7\u7A0B"),m(document.getElementById("tip2"),"\u89E3\u6790\u4E8C\u7EF4\u7801\u540E\u81EA\u52A8\u590D\u5236\u4E8C\u7EF4\u7801\u5185\u5BB9\u5230\u526A\u5207\u677F\uFF0C\u4E0D\u4F1A\u590D\u5236\u591A\u4F59\u5185\u5BB9\uFF0C\u6587\u672C\u6846\u591A\u4F59\u5185\u5BB9\u662F\u4E3A\u4E86\u63D0\u793A\u7528\u6237"),m(document.getElementById("tip3"),"\u89E3\u6790\u4E8C\u7EF4\u7801\u5982\u679C\u4E3A\u94FE\u63A5\uFF0C\u53EF\u4EE5\u81EA\u52A8\u6253\u5F00\u94FE\u63A5");})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc3JjL2NvbnN0YW50cy50cyIsICIuLi8uLi8uLi9zcmMvdXRpbHMudHMiLCAiLi4vLi4vLi4vc3JjL21vZGVsL1NhdmVyLnRzIiwgIi4uLy4uLy4uL3NyYy9tb2RlbC9Db25maWd1cmVyLnRzIiwgIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL29wdGlvbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBhdXRvUGFzdGUgPSAnX19xcmNvZGVBdXRvUGFzdGUnO1xuZXhwb3J0IGNvbnN0IGF1dG9KdW1wID0gJ19fcXJjb2RlQXV0b0p1bXAnO1xuZXhwb3J0IGNvbnN0IGF1dG9Db3B5ID0gJ19fcXJjb2RlQXV0b0NvcHknOyIsICJleHBvcnQgY29uc3QgaXNJbWFnZSA9IChmaWxlOiBGaWxlKSA9PiB7XG4gICAgcmV0dXJuIGZpbGUudHlwZS5pbmNsdWRlcygnaW1hZ2UnKTtcbn1cbmV4cG9ydCBjb25zdCBvcGVuT3B0aW9uc1BhZ2UgPSAoKSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XG4gICAgd2luZG93LmNsb3NlKCk7XG59XG4vLyBcdTYyOEFpbWFnZSBcdThGNkNcdTYzNjJcdTRFM0EgY2FudmFzXHU1QkY5XHU4QzYxXG5jb25zdCBpbWdUb0NhbnZhcyA9KGltYWdlOiBhbnkpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgY2FudmFzLmdldENvbnRleHQoXCIyZFwiKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgIHJldHVybiBjYW52YXM7XG59XG4vL2NhbnZhc1x1OEY2Q1x1NjM2Mlx1NEUzQWltYWdlXG5jb25zdCBjYW52YXNUb0ltZyA9IChjYW52YXM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gW1wiaW1hZ2Uvd2VicFwiLCBcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9wbmdcIl07XG4gICAgY29uc3QgdHlwZSA9ICdpbWFnZS9wbmcnO1xuICAgIGNvbnN0IHNyYyA9IGNhbnZhcy50b0RhdGFVUkwodHlwZSk7XG4gICAgcmV0dXJuIHNyYztcbn1cbi8vIFx1OEY2Q1x1NEUzQXBuZ1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb1BuZyA9IChpbWc6IGFueSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBuZyA9IGNhbnZhc1RvSW1nKGltZ1RvQ2FudmFzKGltZykpXG4gICAgICAgIHJldHVybiBwbmc7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbi8vIFx1OEY2Q1x1NEUzQWJvb2xlYW5cdTUwM0NcbmV4cG9ydCBjb25zdCB0b0Jvb2xlYW4gPSAodmFsOiBhbnkpID0+IHtcbiAgICBpZih0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgaWYodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHZhbCA9PT0gJ3RydWUnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4iLCAiZXhwb3J0IGNsYXNzIFNhdmVyIHtcbiAgICBzYXZlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0VmFsdWUoa2V5OiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIH1cbiAgICAvLyBcdTUzRUFcdTY3MDlcdTU3MjhcdTdCMkNcdTRFMDBcdTZCMjFcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTYyNERcdThCQkVcdTdGNkVcbiAgICBpbml0aWFsU2F2ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgaWYodGhpcy5nZXRWYWx1ZShrZXkpID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2F2ZShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG59XG4iLCAiLy8gXHU5MTREXHU3RjZFXG5pbXBvcnQge1NhdmVyfSBmcm9tIFwiLi9TYXZlclwiO1xuaW1wb3J0IHt0b0Jvb2xlYW59IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHthdXRvQ29weX0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xudHlwZSBub3RPYmplY3QgPSBib29sZWFuIHwgc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyZXIgZXh0ZW5kcyBTYXZlcntcbiAgICBjb25maWdzOiBDb25maWdbXTtcbiAgICBzdGF0aWMgaW5zdGFuY2U6IENvbmZpZ3VyZXI7XG4gICAgc3RhdGljIGdldEluc3RhbmNlKGNvbmZpZ3M/OiBDb25maWdbXSkge1xuICAgICAgICBpZighQ29uZmlndXJlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgQ29uZmlndXJlci5pbnN0YW5jZSA9IG5ldyBDb25maWd1cmVyKGNvbmZpZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb25maWd1cmVyLmluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihjb25maWdzPzogQ29uZmlnW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb25maWdzID0gY29uZmlncztcbiAgICAgICAgaWYodGhpcy5nZXRWYWx1ZShhdXRvQ29weSkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZCh0eXBlOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYm9vbGVhbiwgcG9zdEhhbmRsZTogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb25maWdzLnB1c2goe1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgIHBvc3RIYW5kbGVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGlmKHRvQm9vbGVhbih0aGlzLmdldFZhbHVlKHR5cGUpKSkge1xuICAgICAgICAgICAgdGhpcy5jb25maWdzLmZvckVhY2goY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICBpZihjb25maWcudHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcucG9zdEhhbmRsZSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldERlZmF1bHQoKSB7XG4gICAgICAgIHRoaXMuY29uZmlncy5mb3JFYWNoKGNvbmZpZyA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTYXZlKGNvbmZpZy50eXBlLCBjb25maWcuZGVmYXVsdFZhbHVlKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuIiwgImltcG9ydCB7IGF1dG9Db3B5LCBhdXRvUGFzdGUsIGF1dG9KdW1wIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHt0b0Jvb2xlYW59IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHtDb25maWd1cmVyfSBmcm9tIFwiLi4vbW9kZWwvQ29uZmlndXJlclwiO1xuY29uc3QgY29uZmlnZXIgPSBDb25maWd1cmVyLmdldEluc3RhbmNlKCk7XG52YXIgbW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLCB7XG4gIGtleWJvYXJkOiB0cnVlXG59KVxubW9kYWwuc2hvdygpO1xubW9kYWwuaGlkZSA9ICgpID0+IHtcbiAgd2luZG93LmNsb3NlKCk7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbC5oaWRlKCk7XG59KVxuY29uc3Qgc2V0VmFsQW5kQWRkRXZlbnQgPSAoZWw6IEhUTUxJbnB1dEVsZW1lbnQsIGtleTogc3RyaW5nKSA9PiB7XG4gIGVsLmNoZWNrZWQgPSB0b0Jvb2xlYW4oY29uZmlnZXIuZ2V0VmFsdWUoa2V5KSk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgY29uc3QgaXNjaGVja2VkID0gKDxIVE1MSW5wdXRFbGVtZW50PmUudGFyZ2V0KS5jaGVja2VkXG4gICAgY29uc29sZS5sb2coJ2F1dG9QYXN0ZUVsJywgaXNjaGVja2VkKTtcbiAgICBjb25maWdlci5zYXZlKGtleSwgaXNjaGVja2VkKTtcbiAgfSlcbn1cbmNvbnN0IGFkZFRpcHMgPSAoZWw6IEhUTUxFbGVtZW50LCB0aXBzOiBzdHJpbmcpID0+IHtcbiAgbmV3IGJvb3RzdHJhcC5Ub29sdGlwKGVsLCB7XG4gICAgdGl0bGU6IHRpcHNcbiAgfSlcbn1cbmNvbnN0IGF1dG9QYXN0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9QYXN0ZUVsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGF1dG9Db3B5RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0b0NvcHlFbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBhdXRvSnVtcEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9KdW1wJykgYXMgSFRNTElucHV0RWxlbWVudDtcbnNldFZhbEFuZEFkZEV2ZW50KGF1dG9QYXN0ZUVsLCBhdXRvUGFzdGUpO1xuc2V0VmFsQW5kQWRkRXZlbnQoYXV0b0NvcHlFbCwgYXV0b0NvcHkpO1xuc2V0VmFsQW5kQWRkRXZlbnQoYXV0b0p1bXBFbCwgYXV0b0p1bXApO1xuYWRkVGlwcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGlwMScpLCAnXHU1M0VGXHU1QjlFXHU3M0IwXHU1OTBEXHU1MjM2XHU0RThDXHU3RUY0XHU3ODAxXHU1NDBFXHVGRjBDXHU2MjUzXHU1RjAwXHU2M0QyXHU0RUY2XHU1QzMxXHU4MEZEXHU4MUVBXHU1MkE4XHU4OUUzXHU2NzkwXHU0RThDXHU3RUY0XHU3ODAxXHU1MTg1XHU1QkI5XHVGRjBDXHU3NzAxXHU1M0JCXHU2MjRCXHU1MkE4XHU3Qzk4XHU4RDM0XHU0RThDXHU3RUY0XHU3ODAxXHU4RkM3XHU3QTBCJyk7XG5hZGRUaXBzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXAyJyksICdcdTg5RTNcdTY3OTBcdTRFOENcdTdFRjRcdTc4MDFcdTU0MEVcdTgxRUFcdTUyQThcdTU5MERcdTUyMzZcdTRFOENcdTdFRjRcdTc4MDFcdTUxODVcdTVCQjlcdTUyMzBcdTUyNkFcdTUyMDdcdTY3N0ZcdUZGMENcdTRFMERcdTRGMUFcdTU5MERcdTUyMzZcdTU5MUFcdTRGNTlcdTUxODVcdTVCQjlcdUZGMENcdTY1ODdcdTY3MkNcdTY4NDZcdTU5MUFcdTRGNTlcdTUxODVcdTVCQjlcdTY2MkZcdTRFM0FcdTRFODZcdTYzRDBcdTc5M0FcdTc1MjhcdTYyMzcnKTtcbmFkZFRpcHMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpcDMnKSwgJ1x1ODlFM1x1Njc5MFx1NEU4Q1x1N0VGNFx1NzgwMVx1NTk4Mlx1Njc5Q1x1NEUzQVx1OTRGRVx1NjNBNVx1RkYwQ1x1NTNFRlx1NEVFNVx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1OTRGRVx1NjNBNScpO1xuIl0sCiAgIm1hcHBpbmdzIjogIk1BQU8sSUFBTUEsRUFBWSxvQkFDWkMsRUFBVyxtQkFDWEMsRUFBVyxtQkNGakIsSUFBTUMsRUFBV0MsR0FDYkEsRUFBSyxLQUFLLFNBQVMsT0FBTyxFQUV4QkMsRUFBa0IsSUFBTSxDQUNqQyxPQUFPLFFBQVEsZ0JBQWdCLEVBQy9CLE9BQU8sTUFBTSxDQUNqQixFQUVNQyxFQUFj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LEVBQ3JEVixFQUFrQlEsRUFBYUcsQ0FBUyxFQUN4Q1gsRUFBa0JTLEVBQVlHLENBQVEsRUFDdENaLEVBQWtCVSxFQUFZRyxDQUFRLEVBQ3RDUCxFQUFRLFNBQVMsZUFBZSxNQUFNLEVBQUcsZ09BQXVDLEVBQ2hGQSxFQUFRLFNBQVMsZUFBZSxNQUFNLEVBQUcsb1FBQTZDLEVBQ3RGQSxFQUFRLFNBQVMsZUFBZSxNQUFNLEVBQUcsb0hBQXFCIiwKICAibmFtZXMiOiBbImF1dG9QYXN0ZSIsICJhdXRvSnVtcCIsICJhdXRvQ29weSIsICJpc0ltYWdlIiwgImZpbGUiLCAib3Blbk9wdGlvbnNQYWdlIiwgImltZ1RvQ2FudmFzIiwgImltYWdlIiwgImNhbnZhcyIsICJjYW52YXNUb0ltZyIsICJhcnJheSIsICJ0eXBlIiwgImNvbnZlcnRUb1BuZyIsICJpbWciLCAiZXJyb3IiLCAidG9Cb29sZWFuIiwgInZhbCIsICJTYXZlciIsICJrZXkiLCAidmFsdWUiLCAiQ29uZmlndXJlciIsICJTYXZlciIsICJjb25maWdzIiwgImF1dG9Db3B5IiwgInR5cGUiLCAiZGVmYXVsdFZhbHVlIiwgInBvc3RIYW5kbGUiLCAiYXJncyIsICJ0b0Jvb2xlYW4iLCAiY29uZmlnIiwgImNvbmZpZ2VyIiwgIkNvbmZpZ3VyZXIiLCAibW9kYWwiLCAic2V0VmFsQW5kQWRkRXZlbnQiLCAiZWwiLCAia2V5IiwgInRvQm9vbGVhbiIsICJlIiwgImlzY2hlY2tlZCIsICJhZGRUaXBzIiwgInRpcHMiLCAiYXV0b1Bhc3RlRWwiLCAiYXV0b0NvcHlFbCIsICJhdXRvSnVtcEVsIiwgImF1dG9QYXN0ZSIsICJhdXRvQ29weSIsICJhdXRvSnVtcCJdCn0K
