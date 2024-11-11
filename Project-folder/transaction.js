// transaction.js
import { assets, getAssetById } from './asset.js'; // Assets by their ID for easy viewing

// Class to handle transactions (buy/sell)
export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    }

    // Execute the transaction
    execute() {
        const asset = getAssetById(this.assetId);
        
        if (this.type === "buy") {
            asset.quantity += this.quantity;  // Increase asset quantity
        } else if (this.type === "sell") {
            if (asset.quantity >= this.quantity) {
                asset.quantity -= this.quantity;  // Decrease asset quantity
            } else {
                throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }
        } else {
            throw new Error("Invalid transaction type");
        }
    }
}
