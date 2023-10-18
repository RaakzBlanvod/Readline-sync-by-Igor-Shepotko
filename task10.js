const generateRandomEquation = () => {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const c = getRandomNumber();
  
    const equation = `${a}x + ${b} = ${c}`;
  
    return equation;
  };
  
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };
  
  const equation = generateRandomEquation();
  
  console.log(equation); 