import { RouterProvider } from 'react-router-dom'
import { Header } from './components/Header'
import './index.css'
import { Routes } from './routes'
import { IssueContextProvider } from './utils/context/issue-context'

export default function App() {
  return (
    <>
      <IssueContextProvider>
        <Header />
        <RouterProvider router={Routes} />
      </IssueContextProvider>
    </>
  )
}
