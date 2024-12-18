import {
  ArrowLeft,
  ArrowLineUpRight,
  CalendarDots,
  ChatCircleDots,
  GithubLogo,
} from '@phosphor-icons/react'

interface PostCardProps {
  title: string
  issueUrl: string | undefined
  githubName: string
  comments?: number
  date: string
}

export function PostCard({
  title,
  issueUrl,
  githubName,
  comments,
  date,
}: PostCardProps) {
  return (
    <div className="absolute top-[35%] w-full max-w-[400px] p-7 md:max-w-[700px] sm:max-w-[400px]  lg:max-w-[900px] md:h-52  rounded-lg shadow-xl flex flex-col items-start justify-start bg-[#0B1B2B]">
      <div className="flex flex-row items-center justify-between w-full">
        <a href="/">
          <span className="flex flex-row items-center justify-center text-xs text-blue-700  hover:text-white">
            <ArrowLeft size={12} className="mr-2" />
            VOLTAR
          </span>
        </a>

        <a href={issueUrl} target="blank">
          <span className="flex flex-row items-center justify-center text-xs text-blue-700  hover:text-white cursor-pointer">
            VER NO GITHUB
            <ArrowLineUpRight size={14} className="ml-2" />
          </span>
        </a>
      </div>

      <h2 className="text-2xl font-bold text-white mt-6">{title}</h2>

      <div className="flex flex-col md:flex-row items-start md:items-center  justify-center ">
        <div className="flex flex-row items-center justify-center  mr-6">
          <GithubLogo className="mr-1 text-gray-600" size={17} />
          <span className="text-gray-400 font-nunito text-base">
            {githubName}
          </span>
        </div>

        <div className="flex items-center justify-center mr-6">
          <CalendarDots className="mr-1 text-gray-600" size={17} />
          <span className="text-gray-400 font-nunito text-base">{date}</span>
        </div>

        <div className="flex items-center justify-center">
          <ChatCircleDots className="mr-1 text-gray-600" size={17} />
          <span className="text-gray-400 font-nunito text-base">
            {comments} comentários
          </span>
        </div>
      </div>
    </div>
  )
}
