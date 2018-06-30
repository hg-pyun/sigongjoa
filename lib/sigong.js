module.exports = function (description) {
    return [ '♨', ...description.split(/,/).reduce((a, t) => {
        const tokens = '♚☆$☜※♜￥§★@♨◐';
        const token = tokens[Math.floor(Math.random() * tokens.length)];
        return [ ...a, token, t, token ];
    }, []), '♨' ].join('');
};