import { assets, getAssetById } from './asset.js'; // Assets by their ID for easy viewing

// Class to handle transactions (buy/sell)
export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    }

    // Complete transaction
    execute() {
        const asset = getAssetById(this.assetId);
        
        if (this.type === "buy") {
            asset.quantity += this.quantity;  // Increase stock quantity
        } else if (this.type === "sell") {
            if (asset.quantity >= this.quantity) {
                asset.quantity -= this.quantity;  // Decrease stock quantity
            } else {
                throw new Error(`Insufficient quantity for sale of ${asset.name}`); //if not enough available, throw error
            }
        } else {
            throw new Error("Invalid transaction type");
        }
    }
}

