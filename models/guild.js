const mongoose = require('mongoose');

const guildShema = mongoose.Schema({
    id: String,
    Bienvenue: { 'type': String, 'default': '646464646464646' },
    RoleReglement: { 'type': String, 'default': '646464646464646' },
    SuggestChannel: { 'type': String, 'default': '646464646464646' },
    ReportChannel: { 'type': String, 'default': '646464646464646' },
    TicketsChannel: { 'type': String, 'default': '646464646464646' },
    TicketsCategory: { 'type': String, 'default': '646464646464646' },
});

module.exports = mongoose.model('Guild', guildShema);