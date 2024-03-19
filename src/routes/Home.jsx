import Transition from '../utils/Transition'
import { Button } from 'antd'

function Home() {
	return (
		<Transition className="flex justify-center items-center flex-col space-y-4">
			<h1 className="text-5xl font-bold">Home</h1>
			<p className="text-gray-600">Welcome to the Home page</p>
			<Button type="danger">Button</Button>
		</Transition>
	)
}

export default Home
