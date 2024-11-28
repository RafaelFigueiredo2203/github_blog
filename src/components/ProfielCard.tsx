import { Building, GithubLogo, Users } from '@phosphor-icons/react'

export function ProfileCard() {
  return (
    <div className="absolute top-1/4 p-7  w-[864px] h-52 rounded-lg shadow-xl flex flex-row items-center justify-center bg-[#0B1B2B]">
      <img
        className="w-36 h-36 rounded-md mr-8"
        src="https://avatars.githubusercontent.com/u/60237326?v=4"
        alt="Foto de perfil do github"
      />
      <div>
        <h1 className="font-nunito font-bold text-gray-100 text-2xl mb-2">
          Rafael Figueiredo
        </h1>

        <p className="font-nunito text-base text-gray-400 mb-6">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="flex flex-row items-center justify-lef">
          <div className="flex flex-row items-center justify-center  mr-6">
            <GithubLogo className="mr-1 text-gray-600" size={17} />
            <span className="text-gray-400 font-nunito text-base">
              rafaelfigueiredo2203
            </span>
          </div>

          <div className="flex items-center justify-center mr-6">
            <Building className="mr-1 text-gray-600" size={17} />
            <span className="text-gray-400 font-nunito text-base">
              Rocketseat
            </span>
          </div>

          <div className="flex items-center justify-center">
            <Users className="mr-1 text-gray-600" size={17} />
            <span className="text-gray-400 font-nunito text-base">
              32 seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
