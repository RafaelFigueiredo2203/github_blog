import { ProfileCard } from './ProfielCard'
import { SearchPublicationsInput } from './SearchPublicationsInput'

export function HomeBody() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center h-screen bg-[#071422]">
      <ProfileCard />

      <div className=" w-[864px]  mt-[-172px]">
        <SearchPublicationsInput />
      </div>
    </div>
  )
}
