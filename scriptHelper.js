// Write your helper functions here!

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = 
    `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} km</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}"> 
    `;

}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    }else if(isNaN(testInput)){
        return "Not a Number";

    }else{
        return "Is a Number";

    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");


    if(validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
        alert("All fields are required");
        
    }else if(validateInput(pilot) === "Is a Number"){
        alert("Pilot name should be a string");

    }else if(validateInput(copilot) === "Is a Number"){
        alert("Copilot name should be a string");

    }else if(validateInput(fuelLevel) === "Not a Number" ) {
        alert("FuelLevel should be a number");

    }else if( validateInput(cargoLevel) === "Not a Number"){
        alert("CargoLevel should be a number");

    }
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;

    if(fuelLevel < 10000 && cargoLevel < 10000 ){
        launchStatus.innerHTML= `Shuttle not ready for launch`;
        launchStatus.style.color= "red";
        fuelStatus.innerHTML= `Not enough fuel for the journey`;
        cargoStatus.innerHTML= `Cargo mass low enough for launch`;

    }else if(cargoLevel >10000 && fuelLevel > 10000){
        launchStatus.innerHTML= `Shuttle not ready for launch`;
        launchStatus.style.color= "red";
        fuelStatus.innerHTML= `Enough fuel for launch`;
        cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;

    }else if(cargoLevel >10000 && fuelLevel < 10000){
        launchStatus.innerHTML= `Shuttle not ready for launch`;
        launchStatus.style.color= "red";
        fuelStatus.innerHTML= `Not enough fuel for the journey`;
        cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;


    }else{
        launchStatus.innerHTML= `Shuttle ready for launch`;
        launchStatus.style.color= "green";
        fuelStatus.innerHTML= `Enough fuel for launch`;
        cargoStatus.innerHTML= `Cargo mass low enough for launch`;

    }

} 

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
       return response.json() 
           
        
     });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = Math.floor(Math.random() * planets.length);

    return planets[planet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
