let FlowRateInput = document.getElementById("FlowRateBox");
let TimeInput = document.getElementById("TimeBox");
let VolumeText = document.getElementById("volume");

// takes the flow rate input and time input, and puts them into the equation. Also calculates the volume if you used it for less time.
function calculate(){
    
let flowrate = Number(FlowRateInput.value);
let time = Number(TimeInput.value);

let Volume = flowrate * time;
let BetterVolume = flowrate * (time - time * 0.75);
VolumeText.innerText = `${Math.round(Volume * 100) / 100} liters. Did you know if you only used your tap for around ${Math.round(time * 100) / 100 * 0.75} minutes you could have saved about ${Math.round((Volume - BetterVolume) * 100) / 100} Liters?`;

}
//applies the standard Frisco tap flow rate 
function FriscoFlowRateTap(){
    FlowRateInput.value = 8.32791;
}
//for shower
function FriscoFlowRateShower(){
    FlowRateInput.value = 9.46353
}
//for hose
function FriscoFlowRateHose(){
    FlowRateInput.value = 49
}
//for bathtub
function FriscoFlowRateTub(){
    FlowRateInput.value = 15.1
}

//reset everything
function clearCalculator(){
    VolumeText.innerText = "Volume will show up here";
    FlowRateInput.value = "";
    TimeInput.value = "";
}
