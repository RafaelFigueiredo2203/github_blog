import { ArrowLeft, ArrowLineUpRight, CalendarDots, ChatCircleDots, GithubLogo } from "@phosphor-icons/react";

export function PostCard() {
  return (
    <div className="absolute top-1/4 p-7  w-[864px]  rounded-lg shadow-xl flex flex-col items-start justify-start bg-[#0B1B2B]">
     <div className="flex flex-row items-center justify-between w-full">
      <span className="flex flex-row items-center justify-center text-xs text-blue-700 ">
        <ArrowLeft size={12} className="mr-2"/>
        VOLTAR
      </span>

      <span className="flex flex-row items-center justify-center text-xs text-blue-700 ">
        VER NO GITHUB
        <ArrowLineUpRight size={14} className="ml-2"/>
       
      </span>
     </div>

     <h2 className="text-2xl font-bold text-white mt-6">JavaScript data types and data structures</h2>

     <div className="flex flex-row items-center justify-lef mt-4">
          <div className="flex flex-row items-center justify-center  mr-6">
            <GithubLogo className="mr-1 text-gray-600" size={17} />
            <span className="text-gray-400 font-nunito text-base">
              rafaelfigueiredo2203
            </span>
          </div>

          <div className="flex items-center justify-center mr-6">
            <CalendarDots className="mr-1 text-gray-600" size={17} />
            <span className="text-gray-400 font-nunito text-base">
              Há 1 dia
            </span>
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
