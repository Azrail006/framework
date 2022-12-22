module.exports = (req, res) => {
    res.writeHead(200, {
        'Content': 'application/json'
    })
    res.send = (data) => {
        res.end(JSON.stringify(data))
    }
}