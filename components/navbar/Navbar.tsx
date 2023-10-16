import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <Link href="./">LC</Link>
        <ul>
            <li><Link href="./post">all post</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar