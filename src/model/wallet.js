const mongoose = require('../database/mongo')

const WalletSchema = new mongoose.Schema({
    owner_client: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0.0
    },
    wallet_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    wallet_type: {
        type: String,
        uppercase: true,
        default: "BASIC" //BASIC - GOLD - DIAMOND
    }
    
});

const Wallet = mongoose.model("Wallet", WalletSchema);

module.exports = Wallet;