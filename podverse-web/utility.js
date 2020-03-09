const getTestOrigin = () => {
    if (process.env.NODE_ENV === 'stage') {
        return `https://stage.podverse.fm`
    } else {
        return `http://localhost:8765`
    }
}
module.exports = {
    getTestOrigin
}