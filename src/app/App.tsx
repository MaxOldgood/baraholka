import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Layout } from '../shared/ui'
import { Header } from '../widgets'

function App() {
  return (
    <>
      <Layout header={<Header />} content={<Outlet />} />
      <ScrollRestoration />
    </>
  )
}
export default App
