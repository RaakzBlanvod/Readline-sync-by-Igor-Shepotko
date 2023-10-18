calculateDiscount = (price, discountPercentage) => {
    return price - (price * (discountPercentage/100));
};
const price = 100;
const discountPercentage = 25;
console.log(calculateDiscount(price, discountPercentage));