import { GlobalProvider } from "./context/GlobalState"
import Header from './components/Header'
import Balance from "./components/Balance"
import TransaccionForm from "./components/TransaccionForm"

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransaccionForm />
      <h1>Hello World</h1>
    </GlobalProvider>
  )
}

export default App
