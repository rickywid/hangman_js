!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){n(5),window.onload=function(){var e,t,n,o,r,i,a,r,l,s,d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],c=document.getElementById("lives"),u=document.getElementById("outcome"),f=document.getElementById("categoryName"),p=document.getElementById("hintBtn"),h=document.getElementById("playBtn"),g=(document.getElementById("alphabet"),document.getElementById("alphabetList")),m=document.getElementById("clue"),b=document.getElementById("emptyWord"),y=function(){ul=document.createElement("ul"),ul.id="letter";for(var e=0;e<d.length;e++)n=document.createElement("li"),n.setAttribute("class","letters"),n.innerHTML=d[e],v(),ul.appendChild(n),g.appendChild(ul)},v=function(){n.onclick=function(){this.setAttribute("class","active"),this.className+=" animated bounceOutDown",o=this.innerHTML.toLowerCase(),this.onclick=null;for(var t=0;t<e.length;t++)e[t]===o&&(r++,x(),i[t].innerHTML=o.toUpperCase());var n=e.indexOf(o);-1===n&&(a--,x())}},x=function(){c.innerHTML=a+" guesses left",1>a&&(console.log(!0),u.className="animated zoomIn",u.innerHTML="YOU LOSE!"),r===i.length-s&&(console.log(!0),u.className="animated zoomIn",u.innerHTML="YOU WIN!")},w=function(){wordHolder=document.createElement("ul"),wordHolder.id="word-holder";for(var t=0;t<e.length;t++)list=document.createElement("li"),list.setAttribute("class","blank"),"-"===e[t]?(list.innerHTML="-",s=1):list.innerHTML="_",i.push(list),wordHolder.appendChild(list),b.appendChild(wordHolder)},I=function(){l===t[0]&&(f.innerHTML="CITIES"),l===t[1]&&(f.innerHTML="SPORTS"),l===t[2]&&(f.innerHTML="MUSIC"),l===t[3]&&(f.innerHTML="TV SHOWS")},k=function(){t=[["toronto","sydney","tokyo","paris","london","tijuana","havana","las-vegas","moscow","venice"],["blue-jays","yankees","red-sox","david-beckham","cowboys","maple-leafs","lionel-messi","don-king"],["taylor-swift","kanye-west","beyonce","elvis","thriller","madonna","rihanna","drake","beatles"],["lost","breaking-bad","daredevil","fresh-prince","south-park","sesame street","jeopardy"]],l=t[Math.floor(Math.random()*t.length)],e=l[Math.floor(Math.random()*l.length)],i=[],r=0,s=0,a=5,y(),w(),x(),I(),console.log("word length: "+i.length),console.log("counter: "+r),console.log("spaces: "+s),console.log("word: "+e)};k(),p.onclick=function(){hints=[["4th highest population in North America","Home of Bondi Beach","Was previously known as Edo","Most romantic city in the world","Home of Heathrow Airport","Lies on US-Mexican border","Colorful city of Cuba","aka Sin City","Location of St. Basil Cathedral","City of canals"],["Ended 22 year playoff drought","Richest MLB franchise","Team of Fenway Park","Married to a Spice Girl","Richest NFL franchise","Won Stanley Cup in '67","Argentinian soccer superstar","Iconic boxing promoter"],["Country turned Pop singer","Musician, Artist, Fashion Designer","Former lead singer of popular RnB group","King of Rock n Roll","Highest selling album of all time","Queen of Pop","Born in Barbados","Canadian rapper","4 member band from Liverpool"],["Survivors stuck on a mysterious island","School teacher turned drug dealer","Blind superhero","3 children & 1 nephew living together","4 kids in Colorado","Classic children's TV show","Answer given as the question"]],categoriesIndex=t.indexOf(l),wordIndex=l.indexOf(e),m.setAttribute("id","showClue"),m.innerHTML=hints[categoriesIndex][wordIndex]},h.onclick=function(){wordHolder.parentNode.removeChild(wordHolder),ul.parentNode.removeChild(ul),u.innerHTML="",u.className="",m.setAttribute("id",m),m.innerHTML="",k()}}},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,"body{font-family:Open Sans Condensed,sans-serif;text-align:center;min-width:1140px;color:#fff;font-size:16px;height:550px;background:#fff832;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPHJhZGlhbEdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNzUlIj4KICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmY4MzIiIHN0b3Atb3BhY2l0eT0iMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmY4OTg5IiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxyZWN0IHg9Ii01MCIgeT0iLTUwIiB3aWR0aD0iMTAxIiBoZWlnaHQ9IjEwMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);background:-webkit-radial-gradient(center,ellipse cover,#fff832 0,#ff8989 100%);background:radial-gradient(ellipse at center,#fff832 0,#ff8989 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff832',endColorstr='#ff8989',GradientType=1)}.main-content{margin-bottom:60px}#word-holder{width:73%}#alphabetList,#word-holder{margin:0 auto}#alphabetList .letters{color:#fff;font-size:2em;font-weight:bolder;display:inline-block;margin-right:20px;margin-bottom:20px;padding:9px;border-radius:100%;background-color:#df5959;line-height:36px;height:36px;width:36px;transition:background-color .3s}#alphabetList .letters:hover{background-color:#a85252;cursor:pointer}#alphabetList .active{color:#fff;font-size:2em;font-weight:bolder;display:inline-block;margin-right:20px;margin-bottom:20px;padding:9px;border-radius:100%;background-color:#df5959;height:36px;width:36px;transition:background-color .3s;opacity:0}#buttons{position:absolute;left:0;top:0;margin:50px}#buttons #hintBtn{background-color:#84cca2}#buttons #playBtn{background-color:#ed5e53}#buttons #hintBtn,#buttons #playBtn{border:none;padding:10px;font-size:120%;font-weight:bolder;border-radius:5px;color:#fff;outline:none;cursor:pointer;letter-spacing:4px;font-family:Open Sans Condensed,sans-serif;transition:background-color .3s}#buttons #hintBtn:hover{background-color:#5fb884}#buttons #playBtn:hover{background-color:#d56259;cursor:pointer}#categoryName{color:#f54949;margin:50px;font-size:3em;font-weight:bolder;text-align:center;display:inline-block}#lives{font-weight:bolder;font-size:150%;color:#fff;background-color:rgba(89,247,217,.5);border-radius:100px;border:1px solid rgba(172,224,153,.99);width:40%;margin:0 auto;padding:5px}.letterHolder{display:inline-block;margin-right:10px}.blank{display:inline-block;margin:9px;font-size:500%;color:#b83e3e}#header{text-decoration:underline}#clue{display:none}#showClue{font-weight:bolder;font-size:150%;color:#fff;background-color:rgba(8,180,255,.5);border-radius:100px;border:1px solid rgba(132,191,171,.99);width:40%;margin:10px auto;padding:5px;display:block}#outcome{z-index:1000;position:absolute;left:15%;top:25%;font-size:16em;font-weight:700;text-shadow:-13px 16px 1px #000}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=p[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],t));p[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],l=r[2],s=r[3],d={css:a,media:l,sourceMap:s};n[i]?n[i].parts.push(d):t.push(n[i]={id:i,parts:[d]})}return t}function i(e,t){var n=m(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function d(e,t){var n,o,r;if(t.singleton){var i=y++;n=b||(b=l(t)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=f.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),o=u.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,y=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],s=p[l.id];s.refs--,i.push(s)}if(e){var d=r(e);o(d,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete p[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{});o.locals&&(e.exports=o.locals)}]);