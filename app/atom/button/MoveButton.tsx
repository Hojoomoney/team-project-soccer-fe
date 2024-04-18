import { useRouter } from "next/navigation"

interface IMoveButton {
    text : string,
    path : string
}

export default function MoveButton({text, path} : IMoveButton) {
    const router = useRouter()
    return (<>
    <button 
    onClick={() => router.push(path)}
    type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500
     to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
      dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{text}</button>
    </>)
}