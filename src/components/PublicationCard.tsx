import Markdown from 'react-markdown'

export interface PublicationCardProps {
  id?: number
  title: string
  body: string
  html_url?: string | undefined
}

export function PublicationCard({ body, title }: PublicationCardProps) {
  return (
    <div className="bg-[#112131] rounded-lg w-[415px] h-[250px] px-5 py-4 mb-10 hover:border-2 border-slate-950 cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-bold text-white line-clamp-2">{title}</h2>

        <span className="text-sm text-slate-500 w-24 flex items-center justify-center">
          Há 1 dia
        </span>
      </div>

      <p className="line-clamp-5 mt-5 text-gray-400">
        <Markdown>{body}</Markdown>
      </p>
    </div>
  )
}
