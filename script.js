let chart;

function login(){
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(email==="Samuellavigne50@gmail.com" && password==="bonjour2023"){
document.getElementById("login").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");
initChart();
showIsland("✅ Connexion réussie");
}else{
alert("Identifiants incorrects");
}
}

// GRAPH INTERACTIF
function initChart(){
const ctx=document.getElementById("chart").getContext("2d");
chart=new Chart(ctx,{
type:"bar",
data:{
labels:["Netflix","Amazon","Uber","EDF","Apple"],
datasets:[{
label:"Dépenses €",
data:[15,120,22,80,99],
backgroundColor:"#00c6ff"
}]
},
options:{animation:{duration:1500}}
});
}

function updateChart(){
const month=document.getElementById("monthSelector").value;
const dataSets=[
[15,120,22,80,99],
[40,90,33,60,120],
[25,140,50,40,70],
[60,110,20,95,100],
[30,150,70,80,130],
[45,100,60,50,90]
];
chart.data.datasets[0].data=dataSets[month];
chart.update();
}

// Dynamic Island
function showIsland(text){
const island=document.getElementById("island");
document.getElementById("islandText").innerText=text;
island.classList.add("island-active");
setTimeout(()=>island.classList.remove("island-active"),3000);
}

// Apple Pay + vibration
function applePay(){
showIsland(" Pay en cours...");
pushNotification("Paiement Apple Pay tenté");

if(navigator.vibrate){
navigator.vibrate([200,100,200]);
}

setTimeout(()=>{
showIsland("🚫 Paiement refusé - Compte bloqué");
pushNotification("Transaction refusée");
},3000);
}

// NOTIFICATION iPhone
function pushNotification(text){
const notif=document.createElement("div");
notif.className="notification";
notif.innerText=text;
document.body.appendChild(notif);

setTimeout(()=>notif.remove(),4000);
}
