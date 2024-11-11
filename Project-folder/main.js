import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Function to update portfolio display
function updatePortfolioDisplay() {
    // Show value
    document.getElementById("portfolio-value").innerText = "Portfolio Value: $" + calculatePortfolioValue();

    const allocation = getPortfolioAllocation();
    let allocationText = "Portfolio Allocation: <ul>";
    allocation.forEach(asset => {
        allocationText += `<li>${asset.name}: ${asset.allocation}%</li>`;
    });
    allocationText += "</ul>";
    document.getElementById("portfolio-allocation").innerHTML = allocationText;
}

// Apple stock transactions
function buyApple() {
    const buyTransaction = new Transaction(1, "buy", 1); 
    updatePortfolioDisplay();
}

// Function to handle selling Microsoft stock
function sellMicrosoft() {
    const sellTransaction = new Transaction(2, "sell", 1);
    sellTransaction.execute();
    updatePortfolioDisplay();
}
updatePortfolioDisplay();

// Buttons for transactions
document.getElementById("buy-apple-btn").addEventListener("click", buyApple);
document.getElementById("sell-microsoft-btn").addEventListener("click", sellMicrosoft);
