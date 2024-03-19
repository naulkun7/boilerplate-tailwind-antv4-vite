// Header + Footer + Routes
import Header from './components/Header'
import Footer from './components/Footer'
import MainRoutes from './MainRoutes'

const App = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<MainRoutes />
			<Footer />
		</div>
	)
}

export default App
