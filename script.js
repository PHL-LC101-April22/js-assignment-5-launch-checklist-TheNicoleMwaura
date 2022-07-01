// Write your JavaScript code here!



window.addEventListener("load", function() {

 //const { myFetch, formSubmission, pickPlanet, addDestinationInfo } = require("./scriptHelper");

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event){

        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]");
        let pilot = pilotName.value;

        let copilotName = document.querySelector("input[name=copilotName]");
        let copilot = copilotName.value;

        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let fuel = Number(fuelLevel.value);

        let cargoMass = document.querySelector("input[name=cargoMass]");
        let cargo = Number(cargoMass.value);

        let list = document.getElementById("faultyItems");
        
 
        if(pilotName.value===""|| copilotName.value==="" || fuelLevel.value==="" ||cargoMass.value===""){
             return galert("All fields are required!");
            event.preventDefault();
           
        }
        
 
        formSubmission(document, list, pilot, copilot, fuel, cargo );


    })
    

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, 
         planet.distance, planet.moons, planet.image);
        
 
    }) 
 
   
});

 