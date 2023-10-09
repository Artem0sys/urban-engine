var in1Element = document.getElementById('in1');
var in2Element = document.getElementById('in2');
var resElement = document.getElementById('res');
var buttBtn = document.getElementById('butt')
var Btnp = document.getElementById('btn+')
var Btnm = document.getElementById('btn-')
Btnp.onclick = function minus(){
    buttBtn.onclick = function subm(){
        resElement.textContent = Number(in1Element.value) + Number(in2Element.value);
    }
}
Btnm.onclick = function plus(){
    buttBtn.onclick = function subm(){
        resElement.textContent = Number(in1Element.value) - Number(in2Element.value);
    }
}