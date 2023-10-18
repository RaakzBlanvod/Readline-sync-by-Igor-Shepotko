celiusToFahrenheit = (celius) => {
const Fahrenheit = (celius * 9/5) + 32;
return Fahrenheit; 
};
const celius = 20;
console.log(celiusToFahrenheit(celius));