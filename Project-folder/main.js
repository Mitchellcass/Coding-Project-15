import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Function to update portfolio display
function updatePortfolioDisplay() {
    // Display portfolio value
    document.getElementById("portfolio-value").innerText = "Portfolio Value: $" + calculatePortfolioValue();

    // Display portfolio allocation
    const allocation = getPortfolioAllocation();
    let allocationText = "Portfolio Allocation: <ul>";
    allocation.forEach(asset => {
        allocationText += `<li>${asset.name}: ${asset.allocation}%</li>`;
    });
    allocationText += "</ul>";
    document.getElementById("portfolio-allocation").innerHTML = allocationText;
}

// Function to handle buying Apple stock
function buyApple() {
    const buyTransaction = new Transaction(1, "buy", 2);  // Buying 2 Apple stocks
    buyTransaction.execute();
    updatePortfolioDisplay();
}

// Function to handle selling Microsoft stock
function sellMicrosoft() {
    const sellTransaction = new Transaction(2, "sell", 1);  // Selling 1 Microsoft stock
    sellTransaction.execute();
    updatePortfolioDisplay();
}

// Initial portfolio display update
updatePortfolioDisplay();

// Example transaction buttons to trigger actions
document.getElementById("buy-apple-btn").addEventListener("click", buyApple);
document.getElementById("sell-microsoft-btn").addEventListener("click", sellMicrosoft);
