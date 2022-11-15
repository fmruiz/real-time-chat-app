/**
 * Messages functions
 */
exports.generateMessage = (operation, text) => {
    switch (operation) {
        case 'MESSAGES':
            return {
                text,
                createdAt: new Date().getTime(),
            };
        case 'LOCATION':
            return {
                text,
                createdAt: new Date().getTime(),
            };
        default:
            return {
                text,
                createdAt: new Date().getTime(),
            };
    }
};
