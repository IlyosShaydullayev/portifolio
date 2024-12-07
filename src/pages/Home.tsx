import { useState } from "react"
import { Footer, Navbar } from "../components"
import { Button, Carousel } from "../components/common"
import Carousel1 from "../components/ui/Carousel1"
import LogoCarousel from "../components/ui/LogoCarousel"

interface gridData {
    image: string
    title: string
    description: string
}

const data: gridData[] = [
    {
        image: "/Frame 317.png",
        title: "Управление запасами",
        description: "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков."
    },
    {
        image: "/Frame 317.svg",
        title: "Автозаказ товаров",
        description: "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков."
    },
    {
        image: "/Frame 317 (1).svg",
        title: "Анализ магазина",
        description: "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков."
    },
    {
        image: "/Frame 317 (2).svg",
        title: "Прогнозирование спроса",
        description: "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков."
    },
    {
        image: "/Frame 317 (3).svg",
        title: "Управление поставками",
        description: "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой."
    },
    {
        image: "/Frame 317 (4).svg",
        title: "Управление ассортиментом",
        description: "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков."
    },
    {
        image: "/Frame 317 (5).svg",
        title: "Управление продажами",
        description: "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой."
    },
]



const Home = () => {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <div>
            <Navbar />

            <section className="pt-[55px] flex md:flex-row flex-col md:items-center justify-center md:justify-between gap-8 px-[20px] md:px-[50px] lg:px-[100px]">
                <div className="max-w-[335px] md:max-w-[646px]">
                    <h2 className="text-[30px] md:text-[60px] font-[600] text-[#2C2B35] leading-[33px] md:leading-[66px]">Управление запасами розничного магазина</h2>
                    <p className="text-[16px] md:text-[20px] font-[400] pt-[20px]">Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
                    <Button text="Заказать демонстрацию" className="mt-[30px] text-white" />
                </div>
                <div>
                    <img src="/Grocery shopping-amico 2.png" alt="image" loading="lazy" />
                </div>
            </section>

            <section className="bg-slate-100 p-[20px] md:p-[60px]">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px]">
                        {data.slice(0, 2).map((item, i) => (
                            <div key={i} className="rounded-[40px] bg-white md:p-[40px] p-[20px]">
                                <div className="flex pb-4 gap-x-4 items-center">
                                    <img src={item.image} alt="image" loading="lazy" />
                                    <h3 className="text-[20px] md:text-[24px] font-[600] text-[#2C2B35]">{item.title}</h3>
                                </div>
                                <p className="text-[12px] md:text-[16px] text-[#6F7973] font-[400]">{item.description}</p>
                                <Button text="Подробнее" className="mt-[32px] bg-white border text-[#43A548] border-[#43A548] hover:text-white hover:border-none" />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 py-[20px] w-full gap-[20px]">
                        {data.slice(2, 5).map((item, i) => (
                            <div key={i} className="rounded-[40px] bg-white md:p-[40px] p-[20px]">
                                <div className="flex pb-4 gap-x-4 items-center">
                                    <img src={item.image} alt="image" loading="lazy" />
                                    <h3 className="text-[20px] md:text-[24px] font-[600] text-[#2C2B35]">{item.title}</h3>
                                </div>
                                <p className="text-[12px] md:text-[16px] text-[#6F7973] font-[400]">{item.description}</p>
                                <Button text="Подробнее" className="mt-[32px] bg-white border text-[#43A548] border-[#43A548] hover:text-white hover:border-none" />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px]">
                        {data.slice(5, 7).map((item, i) => (
                            <div key={i} className="rounded-[40px] bg-white md:p-[40px] p-[20px]">
                                <div className="flex pb-4 gap-x-4 items-center">
                                    <img src={item.image} alt="image" loading="lazy" />
                                    <h3 className="text-[20px] md:text-[24px] font-[600] text-[#2C2B35]">{item.title}</h3>
                                </div>
                                <p className="text-[12px] md:text-[16px] text-[#6F7973] font-[400]">{item.description}</p>
                                <Button text="Подробнее" className="mt-[32px] bg-white border text-[#43A548] border-[#43A548] hover:text-white hover:border-none" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-4 items-center justify-between w-full rounded-[40px] bg-[#EFFBF0] mt-[40px] p-[35px]">
                    <div className="flex items-center gap-[20px]">
                        <img src="/Icon.png" alt="icon" />
                        <p className="text-[20px] font-[500] text-[#43A548]">Подключи любой продукт на 1 месяц бесплатно и оцени наши приемущества</p>
                    </div>
                    <Button text="Подключить сейчас" className="w-full md:max-w-max text-white" />
                </div>

                <p className="text-[28px] font-[600] pt-[100px] pb-[60px]">С нами удобнее</p>

                <div className="grid grid-cols-1 gap-[20px] w-full md:grid-cols-2">
                    <div className="rounded-[40px] p-[40px] bg-white">
                        <p className="text-center pb-[40px] text-[24px] font-[600]">Без 1С-Товары</p>
                        <div>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/Close_MD.png" alt="cross" />
                                <span> Лишний товар складируется и не продается</span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/Close_MD.png" alt="cross" />
                                <span> Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/Close_MD.png" alt="cross" />
                                <span> Лишний товар складируется и не продается</span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/Close_MD.png" alt="cross" />
                                <span> Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/Close_MD.png" alt="cross" />
                                <span> Лишний товар складируется и не продается</span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/Close_MD.png" alt="cross" />
                                <span> Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</span>
                            </p>
                        </div>
                    </div>
                    <div className="rounded-[40px] p-[40px] bg-[#E5F6E6]">
                        <p className="text-center pb-[40px] text-[24px] font-[600]">Вместе с 1С-Товары</p>
                        <div>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/check.png" alt="tick" />
                                <span> Организованная система остатков</span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/check.png" alt="tick" />
                                <span> В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент </span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/check.png" alt="tick" />
                                <span>Рассчитанный прогноз спроса</span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/check.png" alt="tick" />
                                <span> В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент </span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/check.png" alt="tick" />
                                <span> Организованная система остатков</span>
                            </p>
                            <p className="py-[10px] flex items-center gap-x-4">
                                <img src="/check.png" alt="tick" />
                                <span> В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[20px] md:p-[60px] bg-[#EBF5EB] pt-[63px] md:block hidden">
                <div className="flex items-center justify-between pb-[50px]">
                    <p className="text-[28px] font-[600]">Популярные продукты</p>
                    <Button text="Все продукты" className="text-white" />
                </div>
                <Carousel1 />
            </section>

            <section className="px-[20px] md:px-[50px] lg:px-[100px] bg-slate-100">
                <div className="bg-white rounded-[40px] flex md:flex-row flex-col justify-between w-full gap-4 p-[40px]">
                    <div className="md:w-[50%] w-full md:text-start text-center">
                        <p className="md:text-[26px] text-[20px] font-[600]">Предоставляем техподдержку для наших клиентов</p>
                        <p className="text-[16px] font-[400] pt-[40px]">Если у вас возникнут сложности с использованием 1С-Товары, обращайтесь в нашу техподдержку. Техподдержка работает круглосуточно. Вы можете связаться с нами любыми удобными для Вас способами. При использовании техпомощи просим соблюдать правила обращения.</p>
                    </div>

                    <div className="md:w-[32%] w-full md:text-start text-center rounded-[40px] bg-[#EBF5EB] p-[40px]">
                        <p className="md:text-[18px] text-[14px] font-[400]">Вы можете связаться с нами через 1С-Коннект и 1С-Товары. Поддержка пользователей</p>
                        <div className="flex md:flex-row flex-col justify-between gap-4 pt-[20px]">
                            <div>
                                <p className="text-[14px] font-[400]">Телефон техподдержки</p>
                                <p className="pt-[10px] text-[#327F36] text-[20px] font-[600]">+7-495-111-00-10</p>
                            </div>
                            <div>
                                <p className="text-[14px] font-[400]">E-mail техподдержки</p>
                                <p className="pt-[10px] text-[#327F36] text-[20px] font-[600]">info@rozn.info</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[20px] md:px-[50px] lg:px-[100px] bg-slate-100 pt-[64px] md:pt-[100px]">
                <div className="flex md:flex-row flex-col gap-4 items-center justify-between">
                    <div className="md:w-[40%] w-full">
                        <p className="md:text-[26px] text-[20px] font-[600] pb-[40px]">Для розничных магазинов и ресторанов</p>
                        <div className="flex md:flex-col max-w-max flex-row gap-2 ">
                            <img src="/Grocery shopping-amico 1.png" alt="" className="max-w-[180px] md:max-w-full" />
                            <img src="/Coffee shop-amico 1.png" alt="" className="max-w-[180px] md:max-w-full" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:w-1/2 w-full">
                        <div className="rounded-[40px] bg-white p-[40px]">
                            <p className="text-[20px] font-[600]">Получайте рекомендации по управлению ассортиментом</p>
                            <p className="text-[#6F7973] text-[14px] font-[400] py-[20px]">Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».
                                Каждую неделю вам на почту будет приходить письмо с рекомендациями:
                                какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;
                                какие товары у вас в избытке, а какие следует отнести к неликвидам;
                                какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</p>
                            <p className="text-[14px] font-[400] inline-block mr-4 text-[#327F36] cursor-pointer">Подробнее о 1С-Ритейл Чекер</p>
                            <img src="/Icon (1).png" alt="" className="inline" />
                        </div>
                        <div className="rounded-[40px] bg-white p-[40px]">
                            <p className="text-[20px] font-[600]">Прогнозируйте спрос и управляйте запасами</p>
                            <p className="text-[#6F7973] text-[14px] font-[400] py-[20px]">Используйте 1С-Товары для более точного прогноза спроса. 1С-Товары учитывают средние продажи, тренды, периоды дефицита товара (пробелы на полках), сезонность спроса, праздники, распродажи, акции.
                                Ежедневно 1С-Товары автоматически проверяют минимальные остатки и своевременно отправляет заявку поставщику, используя результаты прогноза. Так вы избежите как дефицита, так и излишков товара в магазине.</p>
                            <p className="text-[14px] font-[400] inline-block mr-4 text-[#327F36] cursor-pointer">Подробнее о 1С-Товары</p>
                            <img src="/Icon (1).png" alt="" className="inline" />
                        </div>
                        <div className="rounded-[40px] bg-white p-[40px]">
                            <p className="text-[20px] font-[600]">Планируйте ассортимент без ошибок</p>
                            <p className="text-[#6F7973] text-[14px] font-[400] py-[20px]"> Узнайте, какие товары приносят вам прибыль и всегда должны быть в ассортименте. И, наоборот, выводите из ассортимента товары с низкой наценкой и оборачиваемостью.</p>
                        </div>
                        <div className="rounded-[40px] bg-white p-[40px]">
                            <p className="text-[20px] font-[600]">Контролируйте бизнес и повышайте прибыль</p>
                            <p className="text-[#6F7973] text-[14px] font-[400] py-[20px]">Для этого используйте блок аналитики.
                                Пробуйте разные варианты повышения продаж – новые товары, изменение наценки, перераспределение площади. Убедиться в правильности действий помогут отчеты. Блок аналитики доступен через Интернет и сделан как приборная панель индикаторов деятельности, что позволяет быстро заметить изменения.</p>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-4 items-center justify-between py-[100px]">
                    <div className="md:w-[40%] w-full">
                        <p className="md:text-[26px] text-[20px] font-[600]">Для оптовых поставщиков</p>
                        <img src="/Logistics-amico 1.png" alt="" />
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:w-1/2 w-full">
                        <div className="rounded-[40px] bg-white p-[40px]">
                            <p className="text-[20px] font-[600]">Планируйте поставки товаров в собственные или арендованные торговые точки</p>
                            <p className="text-[#6F7973] text-[14px] font-[400] py-[20px]">Получайте с помощью 1С-Товары текущие остатки товаров в магазинах и правильно определяйте размер поставок. Система прогноза спроса, встроенная в 1С-Товары, поможет обеспечить постоянное наличие на полках магазинов ходового товара и позволит избежать «оверстока» на ваших складах. Для такого сценария работы предусмотрен специальный выгодный тариф «1С-Товары 300».</p>
                            <p className="text-[14px] font-[400] inline-block mr-4 text-[#327F36] cursor-pointer">Подробнее о 1С-Товары 300</p>
                            <img src="/Icon (1).png" alt="" className="inline" />
                        </div>
                        <div className="rounded-[40px] bg-white p-[40px]">
                            <p className="text-[20px] font-[600]">Повышайте эффективность обработки полученных заказов</p>
                            <p className="text-[#6F7973] text-[14px] font-[400] py-[20px]">1С-Товары позволяют синхронизировать наименования товаров у поставщика и магазина, что дает возможность автоматически загружать заявки от розничных магазинов в учетную систему и не тратить много времени на сопоставление номенклатуры.</p>
                            <p className="text-[14px] font-[400] inline-block mr-4 text-[#327F36] cursor-pointer">Подробнее о 1С-Товары</p>
                            <img src="/Icon (1).png" alt="" className="inline" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[20px] md:px-[50px] lg:px-[100px] bg-slate-100">
                <div className="rounded-[40px] bg-[#43A548] flex md:flex-row flex-col p-[40px]">
                    <div>
                        <p className="text-[#F7F8F8] md:text-[32px] text-[24px] font-[600]">Хотите бесплатную консультацию? Оставляйте заявку</p>
                        <p className="md:text-[20px] text-[16px] text-[#F7F8F8] py-4">Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время </p>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="pb-[20px] text-[16px] font-[400] text-white">
                            <label htmlFor="name">Ваше имя</label>
                            <input type="text" placeholder="Сергей" id="name" className="mt-1 rounded-[20px] outline-none p-2 px-4 w-full" />
                        </div>
                        <div className="pb-[20px] text-[16px] font-[400] text-white">
                            <label htmlFor="phone">Ваш телефон</label>
                            <input type="text" placeholder="Ваш телефон" id="phone" className="mt-1 rounded-[20px] outline-none p-2 px-4 w-full" />
                        </div>
                        <div className="pb-[20px] text-[16px] font-[400] text-white">
                            <label htmlFor="email">Ваш e-mail</label>
                            <input type="text" placeholder="Ваш e-mail" id="email" className="mt-1 rounded-[20px] outline-none p-2 px-4 w-full" />
                        </div>
                        <div className="flex md:flex-row flex-col-reverse gap-8 justify-between w-full">
                            <p className="text-[12px] font-[400] text-white">Нажимая кнопку вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности</p>
                            <Button text="Отправить" className="bg-black text-white cursor-pointer hover:bg-white hover:text-black" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[20px] md:px-[50px] lg:px-[100px] bg-slate-100">
                <p className="md:pt-[100px] pt-[60px] text-[20px] md:text-[32px] font-[600] ">Ответы на вопросы</p>
                <div className="grid grid-cols-1 w-full gap-y-[20px] pt-[60px]">
                    <div className={`bg-white rounded-[40px] p-[20px] cursor-pointer px-[40px] transition-all duration-300 ${open === 1 ? "h-auto" : "overflow-hidden h-[100px] md:h-[80px]"}`} onClick={() => setOpen(1)}>
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-[20px] font-[600]">С чего начать работу с 1С-Товары?</p>
                            <img src="/Frame 312.png" alt="arrow" className={`hover:cursor-pointer hover:text-[#43A548] ${open ? "rotate-[90deg]" : "rotate-[270deg]"}`} />
                        </div>

                        <div className="text-[#6F7973] text-[14px]">
                            <p className="py-[20px]">Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
                            <p>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                            <ul className="list-disc pl-[30px]">
                                <li>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                                <li>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                                <li>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`bg-white rounded-[40px] p-[20px] cursor-pointer px-[40px] transition-all duration-300 ${open === 2 ? "h-auto" : "overflow-hidden h-[100px] md:h-[80px]"}`} onClick={() => setOpen(2)}>
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-[20px] font-[600]">Как подключить 1С-Ритейл Чекер* и 1С-Товары?</p>
                            <img src="/Frame 312.png" alt="arrow" className={`hover:cursor-pointer hover:text-[#43A548] ${open ? "rotate-[90deg]" : "rotate-[270deg]"}`} />
                        </div>

                        <div className="text-[#6F7973] text-[14px]">
                            <p className="py-[20px]">Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
                            <p>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                            <ul className="list-disc pl-[30px]">
                                <li>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                                <li>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                                <li>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`bg-white rounded-[40px] p-[20px] cursor-pointer px-[40px] transition-all duration-300 ${open === 3 ? "h-auto" : "overflow-hidden h-[100px] md:h-[80px]"}`} onClick={() => setOpen(3)}>
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-[20px] font-[600]">Средний чек, о чем нам может рассказать?</p>
                            <img src="/Frame 312.png" alt="arrow" className={`hover:cursor-pointer hover:text-[#43A548] ${open ? "rotate-[90deg]" : "rotate-[270deg]"}`} />
                        </div>

                        <div className="text-[#6F7973] text-[14px]">
                            <p className="py-[20px]">Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
                            <p>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                            <ul className="list-disc pl-[30px]">
                                <li>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                                <li>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                                <li>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`bg-white rounded-[40px] p-[20px] cursor-pointer px-[40px] transition-all duration-300 ${open === 4 ? "h-auto" : "overflow-hidden h-[100px] md:h-[80px]"}`} onClick={() => setOpen(4)}>
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-[20px] font-[600]">Сценарии автозаказа сервиса 1С-Товары</p>
                            <img src="/Frame 312.png" alt="arrow" className={`hover:cursor-pointer hover:text-[#43A548] ${open ? "rotate-[90deg]" : "rotate-[270deg]"}`} />
                        </div>

                        <div className="text-[#6F7973] text-[14px]">
                            <p className="py-[20px]">Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
                            <p>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                            <ul className="list-disc pl-[30px]">
                                <li>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                                <li>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                                <li>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`bg-white rounded-[40px] p-[20px] cursor-pointer px-[40px] transition-all duration-300 ${open === 5 ? "h-auto" : "overflow-hidden h-[100px] md:h-[80px]"}`} onClick={() => setOpen(5)}>
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-[20px] font-[600]">Как подключить 1С-Ритейл Чекер* и 1С-Товары?</p>
                            <img src="/Frame 312.png" alt="arrow" className={`hover:cursor-pointer hover:text-[#43A548] ${open ? "rotate-[90deg]" : "rotate-[270deg]"}`} />
                        </div>

                        <div className="text-[#6F7973] text-[14px]">
                            <p className="py-[20px]">Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
                            <p>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                            <ul className="list-disc pl-[30px]">
                                <li>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                                <li>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                                <li>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`bg-white rounded-[40px] p-[20px] cursor-pointer px-[40px] transition-all duration-300 ${open === 6 ? "h-auto" : "overflow-hidden h-[100px] md:h-[80px]"}`} onClick={() => setOpen(6)}>
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-[20px] font-[600]">Методы и формулы расчета торговой наценки</p>
                            <img src="/Frame 312.png" alt="arrow" className={`hover:cursor-pointer hover:text-[#43A548] ${open ? "rotate-[90deg]" : "rotate-[270deg]"}`} />
                        </div>

                        <div className="text-[#6F7973] text-[14px]">
                            <p className="py-[20px]">Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
                            <p>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
                            <ul className="list-disc pl-[30px]">
                                <li>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</li>
                                <li>какие товары у вас в избытке, а какие следует отнести к неликвидам;</li>
                                <li>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-[#43A548] rounded-[40px] px-[30px] py-[20px] md:px-[40px] md:py-[20px] flex md:flex-row flex-col gap-y-4 justify-between items-center w-full">
                        <p className="text-white md:text-[20px] text-[14px] font-semibold">Переходи в раздел “Как это работает” , что бы получить больше полезной информации</p>
                        <Button text="Как это работает" className="md:max-w-max w-full bg-white hover:text-white" />
                    </div>
                </div>
            </section>

            <section className="px-[20px] md:px-[50px] lg:px-[100px] bg-slate-100 pt-[64px] md:pt-[120px] w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px] w-full">
                    <p className="lg:text-[32px] md:text-[26px] text-[20px] font-semibold">База знаний</p>
                    <div className="flex md:justify-end order-3 md:order-none">
                        <Button text="Все статьи" className="md:max-w-max w-full text-white" />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <Carousel />
                    </div>
                </div>
            </section>

            <LogoCarousel />

            <Footer />
        </div>
    )
}

export default Home