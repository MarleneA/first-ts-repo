
function calculateTotalPrice({ roses, tulips, priceRoses, priceTulips }: { roses: number; tulips: number; priceRoses: number; priceTulips: number; }){
let totalRoses = roses * priceRoses;
let totalTulips = tulips * priceTulips;
let totalPrice = totalRoses + totalTulips;
return [totalPrice]; 
}


console.log (calculateTotalPrice({ roses: 3, tulips: 5, priceRoses: 0.5, priceTulips: 0.3 }));