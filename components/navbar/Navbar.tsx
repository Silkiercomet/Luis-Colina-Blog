import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between font-semibold ">
        <Link href="./"><Image 
              src="/svg/logo-black.svg"
              width={90}
              height={90}
              alt="Picture of the author"
        /></Link>
        <ul className="flex gap-5 pr-2">
            <li><Link href="./post">Post</Link></li>
            <li><Link href="./post">Contact</Link></li>
            <li><Link href="./post">About me</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar