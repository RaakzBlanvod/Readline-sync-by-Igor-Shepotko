const calculateEmployeeBonus = (salary, performanceRating) => {
    const bonusPercentage = performanceRating > 8 ? 0.2 : 0.1;
    const bonus = salary * bonusPercentage;
    return bonus;
  };
  
  const salary = 5000;
  const performanceRating = 9;
  const bonus = calculateEmployeeBonus(salary, performanceRating);
  
  console.log(bonus); 