module.exports = (baseUrl) =>  (req, res) => {
    const parsedUrl  = new URL(req.url, baseUrl)
    console.log(parsedUrl)
}