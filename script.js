var NUM="919999999999";
var S={"Hair":[["Haircut (women)","Wash and blow-dry included",600],["Haircut (men)","",250],["Global colour","Per sitting, length extra",2500],["Balayage / highlights","Consultation first",4500],["Hair spa","Deep conditioning",1200]],
"Skin":[["Classic facial","60 minutes",1200],["Hydra glow facial","Brightening and hydration",2200],["Clean-up","Quick refresh",700],["Threading (face)","",150]],
"Bridal":[["Bridal makeup","Includes hair styling",15000],["Party makeup","",3500],["Saree draping","",800],["Mehendi (one hand)","",500]],
"Nails":[["Manicure","",600],["Pedicure","",800],["Gel polish","",900],["Nail art","Per set",1200]]};
var tabs=document.getElementById("tabs"),menu=document.getElementById("menu"),sv=document.getElementById("sv");
function fmt(n){return "₹"+n.toLocaleString("en-IN")}
function show(k){
 Array.prototype.forEach.call(tabs.children,function(b){b.setAttribute("aria-selected",b.dataset.k===k)});
 menu.innerHTML=S[k].map(function(r){return '<li><span class="n">'+r[0]+(r[1]?'<small>'+r[1]+'</small>':'')+'</span><span class="dots"></span><span class="p">'+fmt(r[2])+'</span></li>'}).join("");
}
Object.keys(S).forEach(function(k,i){
 var b=document.createElement("button");b.textContent=k;b.dataset.k=k;b.setAttribute("role","tab");b.onclick=function(){show(k)};tabs.appendChild(b);
 var g=document.createElement("optgroup");g.label=k;S[k].forEach(function(r){var o=document.createElement("option");o.textContent=r[0];g.appendChild(o)});sv.appendChild(g);
});
show("Hair");
document.documentElement.classList.add("js");
(function(){
 var els=document.querySelectorAll("section h2,.sub,.tabs,.menu,.tile,#f,.contact,.note");
 Array.prototype.forEach.call(els,function(el,i){el.classList.add("reveal");if(el.classList.contains("tile")){el.style.transitionDelay=(Array.prototype.indexOf.call(el.parentNode.children,el)*0.08)+"s"}});
 if(!("IntersectionObserver" in window)){Array.prototype.forEach.call(els,function(el){el.classList.add("in")});return}
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
 Array.prototype.forEach.call(els,function(el){io.observe(el)});
})();
var d=document.getElementById("dt");d.min=new Date().toISOString().slice(0,10);
document.getElementById("f").onsubmit=function(e){
 e.preventDefault();
 var t="Hi Mira Studio, I’d like to book "+sv.value+" on "+d.value+" at "+document.getElementById("tm").value+". Name: "+document.getElementById("nm").value;
 window.open("https://wa.me/"+NUM+"?text="+encodeURIComponent(t),"_blank");
};
