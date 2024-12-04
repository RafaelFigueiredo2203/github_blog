import { PostCard } from "../components/PostCard";

export function Post(){
  return(
    <div className="w-full flex-1 flex flex-col items-center justify-start bg-[#071422]">
      <PostCard/>
      <div className="w-full h-screen flex flex-col items-center justify-start bg-[#071422] mt-28">
        <div className="w-[864px] px-10 py-10">
        <p className="text-base text-slate-400">
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        <br/>
        <br/>
        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        <br/>
        <br/>
        </p>

        <code className="flex items-center justify-center bg-blue-950">
        let foo = 42;   // foo is now a number<br/>
        foo = ‘bar’;    // foo is now a string<br/>
        foo = true;     // foo is now a boolean<br/>
        </code>
        </div>
      </div>
    </div>
  )
}