/* eslint-disable camelcase */
import Markdown from 'react-markdown'

export interface PublicationCardProps {
  created_at: string | number | Date
  date: string
  comments?: number
  id?: number
  title: string
  body: string
  html_url?: string | undefined
}

export function PublicationCard({ body, title, date }: PublicationCardProps) {
  return (
    <div className="bg-[#112131] rounded-lg max-w-[415px] h-[250px] px-5 py-4  hover:border-2 border-slate-950 cursor-pointer">
      <div className="flex flex-col sm:flex-row items-left sm:items-center justify-between">
        <h2 className="text-xl  font-bold text-white line-clamp-2">{title}</h2>

        <span className="text-sm text-slate-500 flex sm:w-44  sm:items-center sm:justify-end mt-2 sm:mt-0">
          {date}
        </span>
      </div>

      <p className="line-clamp-5 mt-5 text-gray-400">
        <Markdown>{body}</Markdown>
      </p>
    </div>
  )
}
