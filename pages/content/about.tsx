import NavBar from '@/components/NavBar'
import Layout from '@/components/Layout'

export default function About() {
    return (
        <div className= "justify-between items-center bg-gradient-to-b from-slate-600 to-slate-900 p-10 w-screen h-screen">
            <NavBar/>
            <a>
                About Page
            </a>
        </div>
    )
}