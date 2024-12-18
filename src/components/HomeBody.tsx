import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { useIssueContext } from '../utils/context/useIssueContext'
import { formatDate } from '../utils/formatDate'
import { ProfileCard } from './ProfileCard'
import { PublicationCard } from './PublicationCard'
import { SearchPublicationsInput } from './SearchPublicationsInput'

export function HomeBody() {
  const { issues, setIssues, user } = useIssueContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [searchPost, setSearchPost] = useState<string>('')

  const filteredIssues = useMemo(() => {
    return issues.filter((issue) =>
      issue.title.toLowerCase().includes(searchPost.toLowerCase()),
    )
  }, [searchPost, issues])

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

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center bg-[#071422] px-4">
      <ProfileCard
        name={user.name}
        username={user.login}
        company={user.company}
        bio={user.bio}
        followers={user.followers}
      />

      <div className="max-w-[900px] md:mt-0 mt-60">
        <SearchPublicationsInput
          search={searchPost}
          setSearch={setSearchPost}
          pubs={issues.length}
        />

        {filteredIssues.length > 0 ? (
          <div className="grid lg:grid-cols-2 mt-12 mb-20 gap-20">
            {filteredIssues.map((issue) => (
              // eslint-disable-next-line react/jsx-key
              <a href={`/issue/${issue.id}`}>
                <PublicationCard
                  created_at=""
                  key={issue.id}
                  title={issue.title}
                  body={issue.body}
                  date={formatDate(new Date(issue.created_at))}
                />
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-white font-semibold text-lg w-full mt-6 mb-14">
            Nenhum item encontrado.
          </p>
        )}
      </div>
    </div>
  )
}
