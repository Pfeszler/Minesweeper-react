(this["webpackJsonpminesweeper-react"]=this["webpackJsonpminesweeper-react"]||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var r=t(4),i=t(1),c=t.n(i),o=t(14),u=t.n(o),a=t(8),d=t(6),s=t(5);function f(){var n=Object(d.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n        background: ",";\n        color: ","\n    }\n"]);return f=function(){return n},n}var l=Object(s.b)(f(),(function(n){return n.theme.color.background}),(function(n){return n.theme.color.font})),h={color:{background:"#ccc",font:"#444",difficultyButtonColor:"#444",easyButton:"#b0fb7e",mediumButton:"#fbfb7e",hardButton:"#fc8282"},breakpoint:{mobileMax:767}},m=t(16),b=t(17),j=Object(b.b)({name:"game",initialState:{started:!1,dimensions:{width:0,height:0,area:0,adjacentFields:[]},fields:[],startingId:!1,mines:{quantity:0,ids:[]},uncoveredFields:[],win:!1},reducers:{startGame:function(n){n.started=!0},setDimensions:function(n,e){var t=e.payload;n.dimensions.height=t.height,n.dimensions.width=t.width,n.dimensions.area=t.width*t.height},generateFields:function(n){var e,t=n.dimensions;for(e=1;e<t.area+1;e++)n.fields.push({id:e,uncovered:!1,marked:!1,mine:!1,adjacentFields:[],minesAround:0})},addAdjacentFields:function(n){var e=n.fields,t=n.dimensions;e.forEach((function(n){n.adjacentFields=function(n,e){var t=e.id,r=n.width,i=n.height;return 1===t?[t+1,t+r,t+r+1]:t===r?[t-1,t+r,t+r-1]:t===r*i-r+1?[t-r,t-r+1,t+1]:t===r*i?[t-r,t-r-1,t-1]:t<r?[t-1,t+1,t+r,t+r-1,t+r+1]:t%r===1?[t-r,t-r+1,t+1,t+r,t+r+1]:t%r===0?[t-r,t-r-1,t-1,t+r,t+r-1]:t>r*i-r+1?[t-r,t-r-1,t-r+1,t-1,t+1]:[t-r,t-r-1,t-r+1,t-1,t+1,t+r,t+r-1,t+r+1]}(t,n)}))},setStartingId:function(n,e){var t=e.payload;n.startingId=t},generateMines:function(n,e){var t=n.mines,r=n.dimensions,i=e.payload,c=r.area;t.quantity=i.quantity;for(var o,u=i.id,a=u;a===u;)a=Math.floor(Math.random()*c+1);for(t.ids.push(a),o=1;o<i.quantity;o++){for(a=Math.floor(Math.random()*c+1);a===u||t.ids.includes(a);)a=Math.floor(Math.random()*c+1);t.ids.push(a)}},plantMines:function(n){var e=n.mines;n.fields.forEach((function(n){e.ids.includes(n.id)&&(n.mine=!0)}))},setMinesAround:function(n){var e=n.fields,t=e.filter((function(n){return!0===n.mine}));e.forEach((function(n){var e=[];n.adjacentFields.forEach((function(n){var r=t.filter((function(e){return e.id===n}));r.length>0&&e.push(r)})),n.minesAround=e.length}))},uncoverField:function(n,e){var t=e.payload;n.fields[t].uncovered=!0,n.uncoveredFields.push(n.fields[t].id)},uncoverSafeFields:function(n,e){var t=e.payload,r=n.fields;r[t].adjacentFields.forEach((function(e){var t=r.find((function(n){return n.id===e}));t.uncovered=!0,n.uncoveredFields.push(t.id)}))},uncoverWhenSomethingUncovered:function(n){var e=n.fields;e.forEach((function(t){if(!1===t.mine&&!1===t.uncovered){var r=[];t.adjacentFields.forEach((function(n){var t=e.find((function(e){return e.id===n}));r.push(t)})),void 0!==r.find((function(n){var e=n.mine,t=n.uncovered,r=n.minesAround;return!1===e&&!0===t&&0===r}))&&(t.uncovered=!0,n.uncoveredFields.push(t.id))}}))},markField:function(n,e){var t=e.payload;n.fields[t].marked=!n.fields[t].marked},setWin:function(n){var e=n.fields.filter((function(n){var e=n.marked,t=n.mine;return!0===e&&t&&!0})),t=n.mines.quantity;e.length===t&&(n.win=!0)},resetGame:function(n){n.fields=[],n.mines={quantity:0,ids:[]},n.uncoveredFields=[],n.startingId=void 0,n.win=!1}}}),v=j.actions,p=v.startGame,x=v.setDimensions,g=v.generateFields,O=v.addAdjacentFields,y=v.setStartingId,w=v.generateMines,k=v.plantMines,F=v.setMinesAround,M=v.uncoverField,A=v.uncoverSafeFields,B=v.uncoverWhenSomethingUncovered,E=v.markField,C=v.setWin,S=v.resetGame,q=function(n){return n.game},I=function(n){return q(n).started},z=function(n){return q(n).dimensions},W=function(n){return q(n).fields},G=function(n){return q(n).startingId},D=function(n){return q(n).uncoveredFields},J=function(n){return q(n).win},U=j.reducer;function H(){var n=Object(d.a)(["\n    min-width: 50px;\n    min-height: 50px;\n    border: 1px solid black;\n"]);return H=function(){return n},n}function L(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n    grid-gap: 2px;\n"]);return L=function(){return n},n}var Y=s.d.div(L()),K=s.d.button(H()),N=function(){var n=Object(a.b)(),e=Object(a.c)(D),t=Object(a.c)(W);Object(i.useEffect)((function(){n(B())}),[e,n]);return[function(e){n(w({quantity:10,id:e})),n(k()),n(F()),n(y(e))},function(e){var r=e-1;n(M(r)),t[r].mine&&(alert("przegra\u0142e\u015b"),n(S())),0===t[r].minesAround&&!1===t[r].mine&&n(A(r))},function(e,t){e.preventDefault(),n(E(t-1)),n(C())}]},P=function(){var n=Object(a.c)(W),e=Object(a.c)(G),t=Object(a.c)(J),i=Object(a.c)(z),c=N(),o=Object(m.a)(c,3),u=o[0],d=o[1],s=o[2];return Object(r.jsx)(r.Fragment,{children:t?Object(r.jsx)("h1",{children:"You Won"}):Object(r.jsx)(Y,{width:i.width,height:i.height,children:n.map((function(n){return Object(r.jsxs)(K,{disabled:n.uncovered,onClick:e?function(){return d(n.id)}:function(){return u(n.id)},onContextMenu:function(e){return s(e,n.id)},children:[n.uncovered?n.mine?"!":0===n.minesAround?"":n.minesAround:"",n.marked?"@":""]},n.id)}))})})};function Q(){var n=Object(d.a)(["\n        background-color: ",";\n    "]);return Q=function(){return n},n}function R(){var n=Object(d.a)(["\n        background-color: ",";\n    "]);return R=function(){return n},n}function T(){var n=Object(d.a)(["\n        background-color: ",";\n    "]);return T=function(){return n},n}function V(){var n=Object(d.a)(["\n    padding: 10px 20px;\n    margin: 7px 0;\n    font-weight: bold;\n    border: 3px solid ",";\n    color: ",";\n\n    ","\n\n    ","\n\n    ","\n"]);return V=function(){return n},n}function X(){var n=Object(d.a)(["\n    width: 100px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: stretch;\n\n"]);return X=function(){return n},n}function Z(){var n=Object(d.a)(["\n    font-size: 25px;\n    text-align: center;\n"]);return Z=function(){return n},n}function $(){var n=Object(d.a)(["\n    text-align: justify;\n    font-size: 16px;\n"]);return $=function(){return n},n}function _(){var n=Object(d.a)(["\n    text-align: center;\n    font-size: 36px;\n"]);return _=function(){return n},n}function nn(){var n=Object(d.a)(["\n    max-width: 668px;\n    margin: 0 auto;\n\n    @media(max-width: ","px) {\n        max-width: unset;\n        margin: 0 15px;\n    }\n"]);return nn=function(){return n},n}var en=s.d.section(nn(),(function(n){return n.theme.breakpoint.mobileMax})),tn=s.d.h1(_()),rn=s.d.p($()),cn=s.d.h2(Z()),on=s.d.div(X()),un=s.d.button(V(),(function(n){return n.theme.color.difficultyButtonColor}),(function(n){return n.theme.color.difficultyButtonColor}),(function(n){return"easy"===n.difficulty&&Object(s.c)(T(),(function(n){return n.theme.color.easyButton}))}),(function(n){return"medium"===n.difficulty&&Object(s.c)(R(),(function(n){return n.theme.color.mediumButton}))}),(function(n){return"hard"===n.difficulty&&Object(s.c)(Q(),(function(n){return n.theme.color.hardButton}))})),an=function(){var n=Object(a.b)(),e=function(e,t){n(x({height:8,width:8})),n(g()),n(O())};return[function(t,r){n(p()),e()},function(t,r){n(S()),e()}]},dn=function(){var n=Object(a.c)(I),e=an(),t=Object(m.a)(e,1)[0];return!n&&Object(r.jsxs)(en,{children:[Object(r.jsx)(tn,{children:"Minesweeper Game"}),Object(r.jsx)(rn,{children:"Welcome"}),Object(r.jsx)(cn,{children:"Chose Difficulty Level:"}),Object(r.jsxs)(on,{children:[Object(r.jsx)(un,{onClick:function(){return t()},difficulty:"easy",children:"Easy"}),Object(r.jsx)(un,{onClick:function(){return t()},difficulty:"medium",children:"Medium"}),Object(r.jsx)(un,{onClick:function(){return t()},difficulty:"hard",children:"Hard"})]})]})};function sn(){var n=Object(d.a)(["\n    max-width: 1368px;\n    margin: 0 auto;\n"]);return sn=function(){return n},n}var fn=s.d.main(sn()),ln=function(n){var e=n.children;return Object(r.jsx)(fn,{children:e})};var hn=function(){return Object(r.jsxs)(s.a,{theme:h,children:[Object(r.jsx)(l,{}),Object(r.jsxs)(ln,{children:[Object(r.jsx)(dn,{}),Object(r.jsx)(P,{})]})]})},mn=t(26),bn=t(13),jn=t.n(bn),vn=t(18),pn=jn.a.mark(gn),xn=jn.a.mark(On);function gn(){var n;return jn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(vn.b)(G);case 2:return n=e.sent,e.next=5,Object(vn.a)(M(n-1));case 5:case"end":return e.stop()}}),pn)}function On(){return jn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(vn.c)(y.type,gn);case 2:case"end":return n.stop()}}),xn)}var yn=Object(mn.a)(),wn=Object(b.a)({reducer:{game:U},middleware:[yn]});yn.run(On);var kn=wn;u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(a.a,{store:kn,children:Object(r.jsx)(hn,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.77585368.chunk.js.map