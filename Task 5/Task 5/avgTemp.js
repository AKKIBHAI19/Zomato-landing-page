
const avtemp = document.querySelector('#avtemp')
function calculateAverageTemperature() {
    //temperatures for 24 hours
    const temp1 = 52;
    const temp2 = 45;
    const temp3 = 48;
    const temp4 = 26;
    const temp5 = 31;
    const temp6 = 30;
    const temp7 = 28;
    const temp8 = 29;
    const temp9 = 38;
    const temp10 = 18;
    const temp11 = 16;
    const temp12 = 28;
    const temp13 = 27;
    const temp14 = 12;
    const temp15 = 13;
    const temp16 = 16;
    const temp17 = 45;
    const temp18 = 20;
    const temp19 = 25;
    const temp20 = 27;
    const temp21 = 32;
    const temp22 = 38;
    const temp23 = 30;
    const temp24 = 34;


    // the sum of temperatures
    const sum = temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7 + temp8 + temp9 + temp10 + temp11 + temp12 + temp13 + temp14 + temp15 + temp16 + temp17 + temp18 + temp19 + temp20 + temp21 + temp22 + temp23 + temp24;

    // the average temperature
    const average = sum / 24; // hardcoded for only 24 hourly temperatures 

    return average;
}

const averageTemp = calculateAverageTemperature();
console.log(`The average temperature for 24 hours is ${averageTemp.toFixed(2)} degrees.`);

avtemp.innerText = averageTemp;