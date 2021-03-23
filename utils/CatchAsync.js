// This function catches any errors present, it acts a middle ware between the routes
module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(e=>res.send({
            "name": e.name,
            "message": e.message
        }));
    }
}