/**
 * Messages functions
 */

exports.generateMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime(),
    };
};
