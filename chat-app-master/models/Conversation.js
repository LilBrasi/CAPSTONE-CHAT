const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creo lo schema per gli utenti
const ConversationSchema = new Schema({
    recipients: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    lastMessage: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = Conversation = mongoose.model(
    'conversations',
    ConversationSchema
);
