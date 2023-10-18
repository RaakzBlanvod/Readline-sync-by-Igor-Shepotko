incomeTaxCalculator = (income) => {
 const amount = 0.15;
 const result = income * amount;
 return result
};

const income = 1000;
console.log(incomeTaxCalculator(income));