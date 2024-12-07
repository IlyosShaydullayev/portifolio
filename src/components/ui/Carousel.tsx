import Slider from "react-slick";

interface SliderProps {
    className?: string
    onClick?: () => void
}

function SampleNextArrow(props: SliderProps) {
    const { className, onClick } = props;
    return (
        <img
            src="/Frame 312.png"
            alt="arrow-right"
            className={`${className} hover:text-[#43A548] cursor-pointer rotate-[180deg]`}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: SliderProps) {
    const { className, onClick } = props;
    return (
        <img
            src="/Frame 312.png"
            alt="arrow-left"
            className={`${className} hover:text-[#43A548] cursor-pointer`}
            onClick={onClick}
        />
    );
}


const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, 
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};


const Carousel = () => {
    return (
        <Slider {...settings} className="flex items-center justify-between">
            <div className="rounded-[20px] bg-white">
                <img src="/Rectangle 5 (3).png" alt="" className="object-cover overflow-hidden rounded-t-[20px]" />
                <div className="p-[20px] md:p-[30px]">
                    <p className="text-[16px] md:text-[20px] fomt-semibold">Методы и формулы расчета торговой наценки</p>
                    <p className="text-[12px] md:text-[16px] font-semibold flex justify-end text-[#43A548] cursor-pointer">Читать статью</p>
                </div>
            </div>
            <div className="rounded-[20px] bg-white">
                <img src="/Rectangle 5.png" alt="" className="object-cover overflow-hidden rounded-t-[20px]" />
                <div className="p-[20px] md:p-[30px]">
                    <p className="text-[16px] md:text-[20px] fomt-semibold">Ассортимент продуктового ассортимента</p>
                    <p className="text-[12px] md:text-[16px] font-semibold flex justify-end text-[#43A548] cursor-pointer">Читать статью</p>
                </div>
            </div>
            <div className="rounded-[20px] bg-white">
                <img src="/Rectangle 5 (2).png" alt="" className="object-cover overflow-hidden rounded-t-[20px]" />
                <div className="p-[20px] md:p-[30px]">
                    <p className="text-[16px] md:text-[20px] fomt-semibold">Что такое сезонность продаж</p>
                    <p className="text-[12px] md:text-[16px] font-semibold flex justify-end text-[#43A548] cursor-pointer pt-[20px]">Читать статью</p>
                </div>
            </div>
        </Slider>
    )
}

export default Carousel