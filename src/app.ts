/*
* File: app.js
* Author: Nagy János
* Copyright: 2022, Nagy János
* Group: Szoft II N
* Date: 2021-10-19
* Github: https://github.com/janos/
* Licenc: GNU GPL
*/

const oldalElem = document.querySelector("#oldal") as HTMLInputElement;
const szamitGomb = document.querySelector("#szamitGomb");
const eredmenyElem = document.querySelector("#eredmeny") as HTMLInputElement;


function szamolAtlo(oldal: number): number {
    return Math.sqrt(2)* oldal;
}

szamitGomb?.addEventListener('click', () => {
    let oldal = Number(oldalElem.value);
    let atlo = szamolAtlo(oldal);
    eredmenyElem.textContent = String(atlo);
});