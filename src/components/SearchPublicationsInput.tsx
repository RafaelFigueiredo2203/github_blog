export function SearchPublicationsInput() {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-0">
      <div className="flex w-full flex-row items-center justify-between mb-3">
        <span className="font-nunito font-bold text-base text-gray-200">
          Publicações
        </span>

        <span className="text-gray-400 font-nunito text-base">
          6 publicações
        </span>
      </div>

      <input
        className="bg-[#040F1A] text-gray-300 rounded-lg border-2 border-gray-800 px-2 w-full h-14 placeholder:font-nunito placeholder:text-base placeholder:text-gray-600 outline-none focus:border-blue-800"
        type="text"
        placeholder="Buscar conteúdo..."
      />
    </div>
  )
}
