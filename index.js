const app = require('./initialize')

const port = process.env.PORT || 5000;

const NewsRouter = require('./routes/news');
const EventsRouter = require('./routes/events');

app.use('/news', NewsRouter)
app.use('/events', EventsRouter)

app.listen(port, () => {
	console.log("Server is running at port : ", port);
});