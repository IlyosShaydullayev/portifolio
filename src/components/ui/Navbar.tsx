import { Link } from "react-router-dom"
import { Button } from "../common"
import { MdOutlineMenu } from "react-icons/md"
import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex items-center justify-between gap-x-4 sticky top-0 z-[999] shadow-md px-[20px] py-[20px] md:px-[50px] lg:px-[100px] md:py-[24px] bg-white">
            <div className="z-50 ">
                <img src="/logo.svg" alt="logo" loading="lazy" className="md:w-[172px] w-[133px]" />
            </div>

            <button className="cursor-pointer md:hidden z-50" onClick={() => setOpen(!open)}>
                <MdOutlineMenu size={25} />
            </button>

            <div className={`${open ? "flex flex-col items-center justify-center gap-y-10 absolute top-0 left-0 w-screen h-screen bg-slate-100" : "hidden"} transition-all duration-300 md:flex items-center md:gap-x-[20px] lg:gap-x-[50px]`}>
                <Link to='/' className="text-[14px] font-[400] text-[#2C2B35] hover:text-[#43A548] cursor-pointer transition-all duration-200">Как это работает</Link>
                <Link to='/' className="text-[14px] font-[400] text-[#2C2B35] hover:text-[#43A548] cursor-pointer transition-all duration-200">Инструкции</Link>
                <Link to='/' className="text-[14px] font-[400] text-[#2C2B35] hover:text-[#43A548] cursor-pointer transition-all duration-200">Продукты</Link>
                <Link to='/' className="text-[14px] font-[400] text-[#2C2B35] hover:text-[#43A548] cursor-pointer transition-all duration-200">База знаний </Link>
                <Link to='/' className="text-[14px] font-[400] text-[#2C2B35] hover:text-[#43A548] cursor-pointer transition-all duration-200">О нас</Link>
                <Button text="Вход" className="text-white"/>
            </div>
        </div>
    )
}


export default Navbar