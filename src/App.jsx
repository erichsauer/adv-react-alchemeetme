import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { UserProvider } from './components/providers/UserProvider'

function App() {
  return (
    <UserProvider>
      <Layout>
        <Home />
      </Layout>
    </UserProvider>
  )
}

export default App
