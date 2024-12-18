import axios from 'axios'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { PublicationCardProps } from '../../components/PublicationCard'

interface User {
  name: string

  login: string
  followers: number
  company: string
  bio: string
}

interface IssueContextType {
  setIssues: Dispatch<SetStateAction<PublicationCardProps[]>>
  issues: PublicationCardProps[]
  setUser: Dispatch<User>
  user: User
}

export const IssueContext = createContext<IssueContextType | undefined>(
  undefined,
)

interface IssueContextProviderProps {
  children: ReactNode
}

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issues, setIssues] = useState<PublicationCardProps[]>([])
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/RafaelFigueiredo2203',
        )
        setUser(response.data)
      } catch (err: unknown) {
        console.log(err)
      }
    }
    fetchUser()
  }, [])

  if (!user) {
    return
  }

  return (
    <IssueContext.Provider value={{ issues, setIssues, user, setUser }}>
      {children}
    </IssueContext.Provider>
  )
}
