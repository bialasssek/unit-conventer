/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnConvert = document.getElementById("btn-convert")
const inputNumber = document.getElementById("input-number")
const lengthCalc = document.getElementById("length-calc")
const volumeCalc = document.getElementById("volume-calc")
const massCalc = document.getElementById("mass-calc")

btnConvert.addEventListener("click",function(){
    if (inputNumber.value > 0){
        
    const convertNumber = inputNumber.value
    
    
    const metersToFeet = convertNumber * 3.281
    const feetToMeters = convertNumber / 3.281
    lengthCalc.textContent = `${convertNumber} meters = ${metersToFeet.toFixed(3)} feet | ${convertNumber} feet = ${feetToMeters.toFixed(3)} meters`
    
    const litersToGallons = convertNumber * 0.264
    const gallonsToLiters = convertNumber / 0.264
    volumeCalc.textContent = `${convertNumber} liters = ${litersToGallons.toFixed(3)} gallons | ${convertNumber} galoons = ${gallonsToLiters.toFixed(3)} litters`
    
    const kilogramsToPounds = convertNumber * 2.204
    const poundsToKilograms = convertNumber / 2.204
    massCalc.textContent = `${convertNumber} kilograms = ${kilogramsToPounds.toFixed(3)} pounds | ${convertNumber} pounds = ${poundsToKilograms.toFixed(3)} kilograms`
    
    
    }
    
})