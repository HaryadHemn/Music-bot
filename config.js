module.exports = {
    app: {
        px: '!',
        token: 'ODcyMTMyNTkyMzQwNzI1Nzkx.YQlaxQ.PsFTpArGgdZl67-f_F5RUmnNbOA',
        playing: 'by mero ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
