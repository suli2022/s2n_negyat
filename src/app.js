/*
* File: app.js
* Author: Nagy János
* Copyright: 2022, Nagy János
* Group: Szoft II N
* Date: 2021-10-19
* Github: https://github.com/janos/
* Licenc: GNU GPL
*/
var oldalElem = document.querySelector("#oldal");
var szamitGomb = document.querySelector("#szamitGomb");
var eredmenyElem = document.querySelector("#eredmeny");
function szamolAtlo(oldal) {
    return Math.sqrt(2) * oldal;
}
szamitGomb === null || szamitGomb === void 0 ? void 0 : szamitGomb.addEventListener('click', function () {
    var oldal = Number(oldalElem.value);
    var atlo = szamolAtlo(oldal);
    eredmenyElem.textContent = String(atlo);
});
