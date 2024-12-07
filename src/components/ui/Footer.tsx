import { Button } from "../common";

const Footer = () => {
    return (
        <footer className="px-[20px] md:px-[50px] lg:px-[100px] py-8 bg-[#2C2B35] text-white">
            <div className="flex md:flex-row flex-col justify-between">
                <div>
                    <img src="/dark-logo.png" alt="dark-logo" />
                    <div className="flex md:flex-col flex-row-reverse gap-[10px] pt-[30px] md:gap-[40px]">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 justify-between md:w-full w-[50%]">
                            <div>
                                <span className="md:text-[16px] text-[12px] font-[400] text-[#919999]">Линия консультации</span>
                                <p className="md:text-[24px] text-[18px] font-semibold">+7(495)-111-00-10</p>
                            </div>
                            <div>
                                <span className="md:text-[16px] text-[12px] font-[400] text-[#919999]">Наш e-mail</span>
                                <p className="md:text-[24px] text-[18px] font-semibold hover:text-[#43A548] cursor-pointer">info@rozn.info</p>
                            </div>
                            <div>
                                <Button text="Заказать звонок" />
                            </div>
                        </div>
                        <div className="md:w-full w-[60%]">
                            <p className="pb-[20px]">Для активации перейдите на <span className="underline hover:text-[#43A548] cursor-pointer"> portal.1c.ru</span> или обратитесь к Вашему партнеру 1С.</p>
                            <p>Инструкция по установке сервиса</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[20px] font-semibold pt-[32px]">Информация</p>
                    <p className="py-[10px] pt-[30px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548]">Как это работает</a></p>
                    <p className="py-[10px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548] ">Инструкции</a></p>
                    <p className="py-[10px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548] ">Блог</a></p>
                    <p className="py-[10px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548] ">О нас</a></p>
                </div>
                <div>
                    <p className="text-[20px] font-semibold pt-[32px]">Продукты</p>
                    <p className="py-[10px] pt-[30px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548]">1С-Ритейл Чекер Демо</a></p>
                    <p className="py-[10px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548] ">1С-Товары.Тестовый для магазина на 1 месяц</a></p>
                    <p className="py-[10px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548] ">1С-Ритейл Чекер</a></p>
                    <p className="py-[10px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548] ">1С-Товары 300</a></p>
                    <p className="py-[10px]"><a href="" className="text-[16px] font-[400] hover:text-[#43A548] ">1С-Товары 30000</a></p>
                </div>
            </div><hr className="bg-[#494949] border mt-[40px] mb-[20px]" />
            <div className="flex items-center justify-between text-[#919999]">
                <p className="text-[14px] font-[400]">1С-Товары © 2023</p>
                <p>Сайт создан - <span className="hover:text-white cursor-pointer"> wtstudio.ru</span></p>
            </div>
        </footer>
    );
};

export default Footer;