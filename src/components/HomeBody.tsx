import { ProfileCard } from './ProfielCard'
import { PublicationCard } from './PublicationCard'
import { SearchPublicationsInput } from './SearchPublicationsInput'

export function HomeBody() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center bg-[#071422]">
      <ProfileCard />

      <div className=" w-[864px] ">
        <SearchPublicationsInput />

        <div className='grid grid-cols-2 mt-12 mb-20'>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>

        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
        <PublicationCard/>
        </div>
      </div>
    </div>
  )
}
