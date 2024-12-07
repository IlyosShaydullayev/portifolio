import Slider from "react-slick"

const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
};

const LogoCarousel = () => {
    return (
        <div className="py-[64px] md:py-[100px] px-[20px] md:px-[50px] lg:px-[100px] bg-slate-100">
            <p className="lg:text-[32px] md:text-[26px] text-[20px] font-semibold">Компании которые выбирают 1С-Товары</p>
            <Slider {...settings} className="flex items-center pt-[60px]">
                <img src="/discord-logo-2 1.png" alt="" className="w-[200px] h-[50px]" />
                <img src="/dollar-1 1.png" alt="" className="w-[200px] h-[50px]" />
                <img src="/sullivan-university 1.png" alt="" className="w-[200px] h-[50px]" />
                <img src="/redbullenergydrink 1.png" alt="" className="w-[200px] h-[50px]" />
                <img src="/pioneer 1.png" alt="" className="w-[200px] h-[50px]" />
                <img src="/makita-logo 1.png" alt="" className="w-[200px] h-[50px]" />
            </Slider>
        </div>
    )
}

export default LogoCarousel