import axios from 'axios'
import { useEffect, useState } from 'react'
import { useIssueContext } from '../utils/context/useIssueContext'
import { ProfileCard } from './ProfielCard'
import { PublicationCard } from './PublicationCard'
import { SearchPublicationsInput } from './SearchPublicationsInput'

export function HomeBody() {
  const { issues, setIssues, user, setUser } = useIssueContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/RafaelFigueiredo2203/github_blog/issues',
          {
            headers: {
              Authorization: `${process.env.NODE_ENV}`,
            },
          },
        )
        setIssues(response.data)
        setLoading(false)
      } catch (err: unknown) {
        setError('Erro ao buscar as issues.')
        setLoading(false)
        console.log(err)
      }
    }

    fetchIssues()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/RafaelFigueiredo2203',
        )
        setUser(response.data)
        setLoading(false)
      } catch (err: unknown) {
        setError('Erro ao buscar as issues.')
        setLoading(false)
        console.log(err)
      }
    }
    fetchUser()
  }, [])

  console.log(user)

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center bg-[#071422]">
      <ProfileCard
        name={user.name}
        username={user.login}
        company={user.company}
        bio={user.bio}
        followers={user.followers}
      />

      <div className=" w-[864px] ">
        <SearchPublicationsInput pubs={issues.length} />

        <div className="grid grid-cols-2 mt-12 mb-20">
          {issues.map((issue) => (
            // eslint-disable-next-line react/jsx-key
            <a href={`/issue/${issue.id}`}>
              <PublicationCard
                key={issue.id}
                title={issue.title}
                body={issue.body}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
