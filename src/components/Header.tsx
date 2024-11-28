import logo from '../assets/logo.png'

export function Header() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-t to-cyan-950 from-blue-950 w-full  h-64">
      <img className="w-36 h-24 mb-14" src={logo} alt="Github Logo" />
    </div>
  )
}
