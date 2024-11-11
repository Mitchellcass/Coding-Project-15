import { assets } from './asset.js';  // Import from asset.js

// Calculating the total portfolio value to display
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => {
        return total + asset.price * asset.quantity;
    }, 0);
}

export function getPortfolioAllocation() { 
    const totalValue = calculatePortfolioValue(); // Portfolio allocation as percentages function
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue * 100).toFixed(2),
    }));
}
