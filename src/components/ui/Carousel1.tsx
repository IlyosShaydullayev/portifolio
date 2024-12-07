import Slider from "react-slick";
import { Button } from "../common"

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

const Carousel1 = () => {
    return (
        <div>
            <Slider {...settings} className="hidden md:flex items-center justify-between">
                <div className="rounded-[40px] bg-white p-[40px]">
                    <div className="flex items-center justify-between gap-x-2 pb-[24px]">
                        <p className="text-[20px] font-[600]">1С-Товары 300</p>
                        <Button text="400 руб/мес" className="bg-white border hover:text-white border-[#43A548] text-[#43A548] text-[14px] font-[600] hover:bg-white" />
                    </div>
                    <ul className="text-[#838684] list-disc">
                        <li className="leading-[20px]">Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</li>
                        <li className="leading-[20px]"> Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</li>
                        <li className="leading-[20px]"> Анализ работы розничного магазина или сети магазинов</li>
                        <li className="leading-[20px]">Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
                    </ul>
                    <p className="text-[#43A548] text-[14px] font-[400] flex items-center gap-x-2 cursor-pointer pt-[40px] justify-end">Подробнее <img src="/Icon (1).png" alt="arrow" /></p>
                </div>
                <div className="rounded-[40px] bg-white p-[40px]">
                    <div className="flex items-center justify-between gap-x-2 pb-[24px]">
                        <p className="text-[20px] font-[600]">1С-Товары 30000</p>
                        <Button text="1 700 руб/мес" className="bg-white border hover:text-white border-[#43A548] text-[#43A548] text-[14px] font-[600] hover:bg-white" />
                    </div>
                    <ul className="text-[#838684] list-disc">
                        <li className="leading-[20px]">Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</li>
                        <li className="leading-[20px]"> Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</li>
                        <li className="leading-[20px]"> Анализ работы розничного магазина или сети магазинов</li>
                        <li className="leading-[20px]">Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
                    </ul>
                    <p className="text-[#43A548] text-[14px] font-[400] flex items-center gap-x-2 cursor-pointer pt-[40px] justify-end">Подробнее <img src="/Icon (1).png" alt="arrow" /></p>
                </div>
                <div className="rounded-[40px] bg-white p-[40px]">
                    <div className="flex items-center justify-between gap-x-2 pb-[24px]">
                        <p className="text-[20px] font-[600]">1С-Товары</p>
                        <Button text="4500 руб/мес" className="bg-white border hover:text-white border-[#43A548] text-[#43A548] text-[14px] font-[600] hover:bg-white" />
                    </div>
                    <ul className="text-[#838684] list-disc">
                        <li className="leading-[20px]">Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</li>
                        <li className="leading-[20px]"> Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</li>
                        <li className="leading-[20px]"> Анализ работы розничного магазина или сети магазинов</li>
                        <li className="leading-[20px]">Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
                    </ul>
                    <p className="text-[#43A548] text-[14px] font-[400] flex items-center gap-x-2 cursor-pointer pt-[40px] justify-end">Подробнее <img src="/Icon (1).png" alt="arrow" /></p>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel1