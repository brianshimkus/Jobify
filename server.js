import express from 'express'
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'
const app = express()

app.get('/', (req, res) => {
	res.send('Welcome!')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}...`))
