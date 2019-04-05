const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');   //we selecteren de class dmv querySelector
//console.log(hourHand);

function setDate() {
    const now = new Date();
    // we willen de datum pakken en maken een variabele daarvoor
    const seconds = now.getSeconds();
    // we willen ook de seconden pakken van de huidege minuut
    // console.log(seconds);
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // we maken deze variabele met formule want we willen dat de wijzer roteert(degrees) per seconde
    // bij 0% is het 0 degrees en bij 100% is het 360degrees 
    // we doen +90 er bij om de standaard waarde te compenseren die we in CSS hebben neergezet, want willen we de wijzer niet horizontaal maar verticaal laten beginnen
    secondHand.style.transform =`rotate(${secondsDegrees}deg)`;
    // we willen dat de wijzer(secondHand) roteert per seconden, dus we hebben secondHand waarbij de transform gelijk is aan const secondsDegrees.
    //console.log(seconds);


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;  //"rotate" + munitesDegrees + "deg"
    //console.log(minutes);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90; //we veranderen de waarde nu naar 12 voor de uren 
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);
// als je iets wil laten uitvoeren elke seconde gerbuik je setInterval, setDate met 1000miliseconden

