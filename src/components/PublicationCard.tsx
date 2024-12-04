export function PublicationCard() {
  return (
    <div className="bg-[#112131] rounded-lg w-[415px] h-[250px] px-5 py-4 mb-10 hover:border-2 border-slate-950 cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-bold text-white">JavaScript data types and data structures</h2>

        <span className="text-sm text-slate-500 w-16">Há 1 dia</span>
      </div>

      <p className="line-clamp-5 mt-5 text-gray-400">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string
        foo = true; // foo is now a boolean
      </p>
    </div>
  )
}
