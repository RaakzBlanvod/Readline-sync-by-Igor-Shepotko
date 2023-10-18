
const calculateDistance = (x1, y1, x2, y2) => {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
    return distance;
  };
  
  const x1 = 0;
  const y1 = 0;
  const x2 = 3;
  const y2 = 4;
  const distance = calculateDistance(x1, y1, x2, y2);
  console.log(distance);