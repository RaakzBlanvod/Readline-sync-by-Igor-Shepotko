const calculateTime = (distance, speed) => {
    const timeInHours = distance / speed;
    const hour = Math.floor(timeInHours);
    const minute = Math.round((timeInHours - hour) * 60);
  
    const formattedTime = (`${hour}ч. ${minute}м.`);
    return formattedTime;
};

  const distance = 200; 
  const speed = 50; 
  
  const travelTime = calculateTime(distance, speed);
  
  console.log(travelTime);