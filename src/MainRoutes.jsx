import { Routes, Route } from 'react-router-dom'

// Import pages
import Home from './routes/Home'

// Import error pages
import NotFound from './routes/NotFound'

// Import transitions

function MainRoutes() {
	return (
		<Routes>
			{/* All main pages */}
			<Route path="/" element={<Home />} />
			{/* <Route path="/about" element={<About />} /> */}
			{/* <Route path="/contact" element={<Contact />} /> */}

			{/* Error pages */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default MainRoutes
