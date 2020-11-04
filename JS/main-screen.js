(function (){
    "use strict";
    let action = document.getElementById("action");
    function fadeActionOut(){
        action.style.display = "none";
    }
    // car buttons
    const cameras = document.getElementById("cameraDisplay");
    cameras.addEventListener("click", function (){
        action.style.display = "flex";
        action.innerText = "Viewing Cameras";
        setInterval(fadeActionOut, 2000);
    });
    const charge = document.getElementById("checkCharge");
    charge.addEventListener("click", function (){
        action.style.display = "flex";
        action.innerText = "Checking Charge Status";
        setInterval(fadeActionOut, 2000);
    });
    const voice = document.getElementById("voiceRecognition");
    voice.addEventListener("click", function (){
        action.style.display = "flex";
        action.innerText = "Speak Now";
        setInterval(fadeActionOut, 2000);
    });
    const openFrunk = document.getElementById("openFrunk");
    let frontCounter = 0;
    openFrunk.addEventListener("click", function(){
        frontCounter++;
        action.style.display = "flex";
        if(frontCounter % 2 !== 0) {
            openFrunk.innerText = "Close";
            action.innerText = "Opening Front Trunk";
        } else {
            openFrunk.innerText = "Open";
            action.innerText = "Closing Front Trunk";
        }
        setInterval(fadeActionOut, 2000);
    });
    const openTrunk = document.getElementById("openTrunk");
    let rearCounter = 0;
    openTrunk.addEventListener("click", function(){
        rearCounter++;
        action.style.display = "flex";
        if(rearCounter % 2 !== 0) {
            openTrunk.innerText = "Close";
            action.innerText = "Opening Trunk";
        } else {
            openTrunk.innerText = "Open";
            action.innerText = "Closing Trunk";
        }
        setInterval(fadeActionOut, 2000);
    });
    const chargeError = document.getElementsByClassName("hollowCircleForError");
    const closeCharge = document.getElementById("closeCharge");
    let chargeCounter = 0;
    closeCharge.addEventListener("click", function(){
        chargeCounter++;
        action.style.display = "flex";
        if(chargeCounter % 2 !== 0){
            chargeError[0].style.display = "none";
            closeCharge.innerText = "Open";
            action.innerText = "Closing Charger";
        } else {
            chargeError[0].style.display = "block";
            closeCharge.innerText = "Close";
            action.innerText = "Opening Charger";
        }
        setInterval(fadeActionOut, 2000);
    });

    // lower buttons
    const carMenu = document.getElementById("carButton");
    carMenu.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Car Menu Displayed";
        setInterval(fadeActionOut, 2000);
    });
    const defrostFront = document.getElementById("frontDefrost");
    defrostFront.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Front Windshield Defroster";
        setInterval(fadeActionOut, 2000);
    });
    const defrostRear = document.getElementById("rearDefrost");
    defrostRear.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Rear Glass Defroster";
        setInterval(fadeActionOut, 2000);
    });
    const driverSeatHeat = document.getElementById("seatWarmerDriver");
    driverSeatHeat.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Driver Seat Heater On";
        setInterval(fadeActionOut, 2000);
    });
    const driverTemp = document.getElementById("driverTemp");
    driverTemp.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Driver Temp Adjusted";
        setInterval(fadeActionOut, 2000);
    });
    const fanControl = document.getElementById("fanSpeed");
    fanControl.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Fan Speed Lowered/Raised";
        setInterval(fadeActionOut, 2000);
    });
    const passengerTemp = document.getElementById("passengerTemp");
    passengerTemp.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Passenger Temp Adjusted";
        setInterval(fadeActionOut, 2000);
    });
    const passengerSeatHeat = document.getElementById("seatWarmerPassenger");
    passengerSeatHeat.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Passenger Seat Heater On";
        setInterval(fadeActionOut, 2000);
    });
    const music = document.getElementById("music");
    music.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Music Selection: ";
        setInterval(fadeActionOut, 2000);
    });
    const connectPhone = document.getElementById("phone");
    connectPhone.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Mobile Phone Connected";
        setInterval(fadeActionOut, 2000);
    });
    const volume = document.getElementById("volume");
    volume.addEventListener("click", function(){
        action.style.display = "flex";
        action.innerText = "Volume Adjusted";
        setInterval(fadeActionOut, 2000);
    });

    mapboxgl.accessToken = keyMap;
    var mapObj = ({
        container: "mapArea",//from id map in HTML
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 10 , // starting zoom
    });
    var map = new mapboxgl.Map(mapObj);

})();