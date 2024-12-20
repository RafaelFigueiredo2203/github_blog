import { Building, GithubLogo, Users } from '@phosphor-icons/react'

interface ProfileCardProps {
  name: string
  username: string
  followers: number
  company: string
  bio: string
}

export function ProfileCard({
  name,
  username,
  company,
  followers,
  bio,
}: ProfileCardProps) {
  return (
    <div className="relative mt-[-50px]  max-w-[400px] p-7 md:max-w-[700px] sm:max-w-[400px]  lg:max-w-[900px] md:h-52 rounded-lg shadow-xl flex flex-col md:flex-row items-center justify-center bg-[#0B1B2B]">
      <img
        className="w-36 h-36 rounded-md mr-8 lg:mb-0 mb-6"
        src="https://avatars.githubusercontent.com/u/60237326?v=4"
        alt="Foto de perfil do github"
      />
      <div>
        <h1 className="font-nunito font-bold text-gray-100 text-2xl mb-2">
          {name}
        </h1>

        <p className="font-nunito text-base text-gray-400 mb-6">{bio}</p>

        <div className="flex flex-col md:flex-row items-start md:items-center  justify-center">
          <div className="flex flex-row items-center justify-center  mr-6">
            <GithubLogo className="mr-1 text-gray-600" size={17} />
            <span className="text-gray-400 font-nunito text-base">
              {username}
            </span>
          </div>

          <div className="flex items-center justify-center mr-6">
            <Building className="mr-1 text-gray-600" size={17} />
            <span className="text-gray-400 font-nunito text-base">
              {company}
            </span>
          </div>

          <div className="flex items-center justify-center">
            <Users className="mr-1 text-gray-600" size={17} />
            <span className="text-gray-400 font-nunito text-base">
              {followers} seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
