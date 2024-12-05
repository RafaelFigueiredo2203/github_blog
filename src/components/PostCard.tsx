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
}

export function PostCard({ title, issueUrl }: PostCardProps) {
  return (
    <div className="absolute top-1/4 p-7  w-[864px]  rounded-lg shadow-xl flex flex-col items-start justify-start bg-[#0B1B2B]">
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

      <div className="flex flex-row items-center justify-lef ">
        <div className="flex flex-row items-center justify-center  mr-6">
          <GithubLogo className="mr-1 text-gray-600" size={17} />
          <span className="text-gray-400 font-nunito text-base">
            rafaelfigueiredo2203
          </span>
        </div>

        <div className="flex items-center justify-center mr-6">
          <CalendarDots className="mr-1 text-gray-600" size={17} />
          <span className="text-gray-400 font-nunito text-base">Há 1 dia</span>
        </div>

        <div className="flex items-center justify-center">
          <ChatCircleDots className="mr-1 text-gray-600" size={17} />
          <span className="text-gray-400 font-nunito text-base">
            5 comentários
          </span>
        </div>
      </div>
    </div>
  )
}
