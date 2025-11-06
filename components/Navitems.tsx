import Link from "next/link"
import { Nav_Items } from "@/lib/constants"

const Navitems = () => {
  return (
    <ul className="flex items-center gap-10">
            {Nav_Items.map(({href,label})=>(
                <li key={href}> <Link href={href}>{label}</Link></li>
        ))}
    </ul>
  )
}

export default Navitems