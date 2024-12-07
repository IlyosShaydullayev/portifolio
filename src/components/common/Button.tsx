interface ButtonType {
    text: string,
    className?: string
}

const Button = ({ text, className }: ButtonType) => {
    return (
        <button className={`${className} transition-all duration-300 text-[16px] rounded-3xl font-[600] bg-[#43A548] cursor-pointer px-4 py-2 hover:bg-gradient-to-r hover:from-[#43A548] hover:to-[#52E259]`}>
            {text}
        </button>
    )
}

export default Button