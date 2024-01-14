import { Form } from './components/Form'

const App = () => {
  return (
    <div className="flex mt-10 justify-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Find the latest news..</h1>
        <p className="text-gray-600">Here you will find the latest news of your interest.</p>
        <Form/>
      </div>
    </div>
    
  )
}
export default App