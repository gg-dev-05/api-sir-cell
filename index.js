const app = require('./initialize')

const port = process.env.PORT || 5000;

const NewsRouter = require('./routes/news')

app.use('/news', NewsRouter);

app.listen(port, () => {
	console.log("Server is running at port : ", port);
});