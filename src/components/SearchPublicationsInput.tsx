import { Dispatch } from 'react'

interface SearchPublicationsInputProps {
  pubs: number
  search: string
  setSearch: Dispatch<string>
}

export function SearchPublicationsInput({
  pubs,
  search,
  setSearch,
}: SearchPublicationsInputProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-32">
      <div className="flex w-full flex-row items-center justify-between mb-3">
        <span className="font-nunito font-bold text-base text-gray-200">
          Publicações
        </span>

        <span className="text-gray-400 font-nunito text-base">{pubs}</span>
      </div>

      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="bg-[#040F1A] text-gray-300 rounded-lg border-2 border-gray-800 px-2 w-full h-14 placeholder:font-nunito placeholder:text-base placeholder:text-gray-600 outline-none focus:border-blue-800"
        type="text"
        placeholder="Buscar conteúdo..."
      />
    </div>
  )
}
