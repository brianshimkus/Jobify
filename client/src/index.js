import React from 'react'
import 'normalize.css'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './context/appContext'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
)
