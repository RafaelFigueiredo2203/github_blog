import axios from 'axios'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { PostCard } from '../components/PostCard'
import { PublicationCardProps } from '../components/PublicationCard'
import { useIssueContext } from '../utils/context/useIssueContext'
import { formatDate } from '../utils/formatDate'
import './index.css'

export function Post() {
  const { issues, setIssues, user } = useIssueContext()
  const [issue, setIssue] = useState<PublicationCardProps>()
  const { id } = useParams<{ id: string }>()

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
      } catch (err: unknown) {
        console.log(err)
      }
    }

    fetchIssues()
  }, [])

  useEffect(() => {
    const issueById = issues.find((x) => String(x.id) === id)
    setIssue(issueById)
  }, [issues])

  if (!issue) {
    return
  }

  return (
    <div
      id="teste"
      className="w-full flex-1 flex flex-col items-center justify-start bg-[#071422]"
    >
      <PostCard
        githubName={user.login}
        comments={issue.comments}
        title={issue.title}
        issueUrl={issue.html_url}
        date={formatDate(new Date(issue.created_at))}
      />
      <div className="w-full flex flex-col items-center justify-start bg-[#071422] md:mt-28 mt-60">
        <div className="max-w-[864px] px-10 py-10">
          <Markdown
            className="text-base text-slate-400 "
            remarkPlugins={[remarkGfm]}
          >
            {issue.body}
          </Markdown>
        </div>
      </div>
    </div>
  )
}
