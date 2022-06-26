import cors from 'cors'
import express from 'express'
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleware from './middleware/not-found.js'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
import 'express-async-errors'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ msg: 'Welcome!' })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL)
		app.listen(port, () => {
			console.log(`Server is running on port ${port}...`)
		})
	} catch (err) {
		console.error(err)
	}
}

start()
