calculateRectangleProperties = (width, height) => {
const P = width + height + width + height;
const S = width * height;
return ('P = ' + P + ' S = ' + S );
};

const width = 5;
const height = 10;
console.log(calculateRectangleProperties(width, height));