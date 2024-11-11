// Array of assets with descriptions
export const assets = [
    { id: 1, name: "Apple", type: "stock", price: 500, quantity: 5 },
    { id: 2, name: "Microsoft", type: "stock", price: 350, quantity: 3 },
    { id: 3, name: "Tesla", type: "stock", price: 500, quantity: 10 },
];

// Function to get asset by ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
