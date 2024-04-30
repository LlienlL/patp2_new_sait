
import Article from "@/Components/GUI/Article/Article.jsx";
import List from "@/Components/GUI/List/List.jsx";
import File from "@/Components/GUI/File/File.jsx";
import Paragraph from "@/Components/GUI/Paragraph/Paragraph.jsx";
import Title from "@/Components/GUI/Title/Title.jsx";
import Table from "@/Components/GUI/Table/Table.jsx";
import Image from "@/Components/GUI/Image/Image.jsx";
import Anchor from "@/Components/GUI/Anchor/Anchor.jsx";
import Slider from "@/Components/GUI/Slider/Slider";
import style from "./about.module.scss";

// Useless import:
import { FILE_TYPES_TO_ICON } from "@/Components/params.js";


export default async function About() {
    return (
        <main>
            <Article title="О предприятии" hiddenWrapButton>
                <Paragraph>
                    Акционерное общество <b>«Нижневартовское пассажирское автотранспортное предприятие №2» </b>
                    осуществляет городские пассажирские перевозки.
                </Paragraph>
                <Paragraph>
                    Чтобы удовлетворять потребности горожан и соответствовать требованиям современного, красивого города,
                    руководство предприятия активно занимается модернизацией производства и повышением качества обслуживания.
                    С октября 2008 года на нашем предприятии внедрена автоматизированная система диспетчерского управления
                    пассажирскими перевозками (АСДУПП) с использованием системы ГЛОНАСС.
                </Paragraph>
                <Paragraph>
                    На данный период в парке предприятия насчитывается 101 городской автобус. Каждый день на линию выходит 71
                    автобус, которые обслуживают 13 муниципальных маршрутов. Ежедневно автотранспортом предприятия пользуются
                    32 тысячи пассажиров.
                </Paragraph>
                <Paragraph>
                    Гордостью предприятия является его коллектив, возглавляемый директором <b>Кляповым Владимиром Яковлевичем</b>.
                    Численность работающих составляет 420 человек.
                </Paragraph>
                <Paragraph>
                    На сегодняшний день кроме пассажирских перевозок АО «НПАТП №2» осуществляет <Anchor href="/services">следующие виды работ</Anchor>.
                </Paragraph>
            </Article>

            <Article title="Историческая справка" maxSquare={400000}>
                <List marker="disc" className={style.historyList}
                    list={[
                        <span><b>1971 год </b>- приказом по Тюменскому транспортному управлению за № 342 от 17 августа был организован в
                            Нижневартовске Филиал Сургутского АТП. В состав, которого входило 9 единиц техники -5 автобусов марки
                            Лаз -695 и 4 автобуса марки Паз -672; численность работающих - 50 человек.</span>,
                        <span><b>1972 год </b>- парк увеличился до 31 единицы, к этому времени уже насчитывалось, Лаз-695 20 единиц,
                            Паз- 672 -6 единиц и 5 таксомоторов. Было открыто 2 городских маршрута «Старый Вартовск – Тайга» и
                            «Старый Вартовск – Аэропорт», а также пригородный маршрут «Нижневартовск – Мегион».</span>,
                        <span><b>1977 год </b>– приказом №384 от 16 мая, филиал реорганизуется в самостоятельное автотранспортное
                            предприятие, входящее в состав Тюменского транспортного управления. Предприятие выполняет как пассажирские
                            перевозки, так и грузовые.</span>,
                        <span><b>1983 год </b>– выходит из состава предприятия грузовой автотранспорт как самостоятельное предприятие
                            ГАТП. Средняя заработная плата по предприятию составляла 352 рубля, по водителям 596 рублей.</span>,
                        <span><b>1988 год </b>– предприятие приобретает статус объединения в состав, которого входят АТП города Радужный
                            и города Мегион, а также Нижневартовский таксомоторный парк и кооператив «Авторемонт». Численность работников
                            составляла 1346 человек.</span>,
                        <span><b>1990 год </b>– автоколонна №3 занимающаяся заказными перевозками, выходит из состава предприятия
                            и организуется в самостоятельное предприятие ПАТП-1.</span>,
                        <span><b>1992 год </b>– решением Городского совета в городе Нижневартовске был введен бесплатный
                            проезд в городских автобусах. Нижневартовский ПОПАТ переименовывается в ПАТП-2 и переходит в
                            собственность муниципалитета.</span>,
                        <span><b>1996 год </b>– предприятию – 25 лет. Введены в эксплуатацию спорткомплекс, мойка автобусов и легковых
                            автомобилей. Парк 93 автобуса. По плану на маршрут выходит 71 автобус, обслуживается 10 маршрутов.</span>,
                        <span><b>1997 год </b>– 25 лет городу. Открывается 25 маршрут.</span>,
                        <span><b>1998 год </b>– 1 июля перешли на платный проезд 20 маршрутных автобусов - 25 % от общего количества, стоимость
                            проезда - 2 рубля. С 1 октября перешли на платный проезд 50% парка - 40 автобусов. Впервые была проведена спартакиада
                            посвященная Дню автомобилиста.</span>,
                        <span><b>1999 год </b>– перешли на платный проезд, 100% автобусного парка. Открыт коммерческий маршрут № 17.</span>,
                        <span><b>2000 год </b>– стоимость проезда увеличилась до 3 рублей. Численность 700 человек автобусов 110 единиц,
                            доходы за год от пассажирских перевозок 44 миллиона 299 тысяч рублей. По плану на маршрут выходит 79 автобусов,
                            обслуживается 11 маршрутов.</span>,
                        <span><b>2001 год </b>– 17 августа предприятию исполнилось 30 лет. 1 апреля увеличивается стоимость проезда до
                            5 рублей. Произведен капитальный ремонт и сдан в эксплуатацию бокс ТО-2.</span>,
                        <span><b>2002 год </b>- произведена реконструкция здания АБК и запущена в эксплуатацию столовая на 25 мест</span>,
                        <span><b>2003 год </b>– 1 сентября перешли на обслуживание по новой маршрутной сети. На 1 сентября 2003 года
                            обслуживается предприятием 11 маршрутов. 3 маршрута (17-к , 20 и 21) обслуживаются привлеченным транспортом
                            на договорных условиях. Численность работающих составляет 697 человек.</span>,
                        <span><b>2008 год </b>– на предприятии внедрена автоматизированная система диспетчерского управления
                            пассажирскими перевозками (АСДУПП).</span>,
                        <span><b>2013 год </b>– 1 ноября внедрена автоматизированная система оплаты проезда в общественном транспорте
                            города Нижневартовска (АСОП) с использованием бесконтактных смарт - карт.</span>,
                        <span><b>2016 год – ОАО «ПАТП-2» - 45 лет</b></span>,
                        <span><b>2017 год </b>– в целях расширения сети пополнения транспортных карт был заключен договор с QIWI -
                            платежные терминалы. В ноябре в городских автобусах появилась возможность оплатить проезд бесконтактной
                            банковской картой.</span>,
                        <span><b>2018 год </b>– 14 марта ОАО «ПАТП-2» переименовывается в АО «НПАТП №2». Неработающие
                            пенсионеры города Нижневартовска получили право бесплатного проезда в городском транспорте по карте
                            пенсионера. Разработано и внедрено приложение «Умный транспорт».</span>,
                    ]}
                />
            </Article>

            {/* <Article title="Важная информация">

                <Slider
                    childList={[
                        <Image src="/img/pict.jpeg"
                            width={300}
                        />,
                        <Image src="/img/header.jpg"
                            width={300}
                        />,
                        <Image src="/img/photo1_1.jpg"
                            width={300}
                        />,
                        <Image src="/img/photo2_1.jpg"
                            width={300}
                        />,
                    ]}
                />

                <Anchor href="/services">Ссылька</Anchor>
                <Anchor href="/info">info</Anchor>

                <Image src="/img/pict.jpeg"
                    //inlineDisplay
                    setBorder
                    width={700}
                />
                <Image src="/img/pict.jpeg"
                    //inlineDisplay
                    width={300}
                    height={500}
                />
                <Table
                    caption="Таблица №1"
                    bottomCaption
                    table={[
                        [1, 2, { content: 3, span: { rowSpan: 3, colSpan: 2 } }, 5, 7],
                        [{ content: 6, span: { rowSpan: 1, colSpan: 2 } }, 10, 11],
                        [13, 15, { content: 6, span: { rowSpan: 2, colSpan: 2 } }],
                        [19, 20, 21, 22],
                    ]}
                    tiledBackground
                />
                <Title title="Мини заголовок" noIndent />
                <Paragraph>
                    Officia aliquip adipisicing nostrud ex <Anchor href="/services">ссылька</Anchor> dolor reprehenderit eiusmod anim occaecat. Qui incididunt elit minim laboris enim tempor commodo pariatur minim in irure minim anim. Enim excepteur ipsum ex reprehenderit fugiat magna consequat est elit irure est. Ea eiusmod id cupidatat sit minim labore nostrud Lorem aute excepteur amet consequat ea. Ullamco quis Lorem proident adipisicing officia sit cillum amet aliqua ex est excepteur.Deserunt eiusmod et non est irure reprehenderit in excepteur pariatur aliquip aliquip. Exercitation et minim laborum fugiat duis labore duis consequat id. Cillum minim in ullamco pariatur.
                </Paragraph>
                <Paragraph>
                    Ea proident cupidatat adipisicing
                    <File
                        name="file.link"
                        path="/documents/audit_2021.pdf"
                        icon="link.svg"
                        inTextFile
                    />
                    ea nisi ex ullamco magna anim ullamco officia pariatur dolore excepteur. Elit in ea mollit elit aute commodo sunt nulla dolore velit fugiat consequat proident commodo. Occaecat labore et ad sit duis ex elit labore eiusmod fugiat adipisicing. Tempor anim nostrud cillum labore amet occaecat cillum consequat in tempor eu est in incididunt. Minim occaecat laborum dolor cillum.
                    Minim et minim reprehenderit dolor est id magna ullamco. Excepteur est aliquip quis pariatur ut proident sint velit tempor esse ipsum. Eiusmod mollit cupidatat eu laboris mollit in consequat sit. Cillum aliquip sit voluptate tempor cupidatat commodo. Sint exercitation mollit tempor ea ex culpa est nostrud do dolor. Do sunt proident labore quis enim laborum minim fugiat exercitation.
                    Excepteur cillum nulla aliquip amet consectetur Lorem ad excepteur eiusmod consequat do nostrud. Irure sit tempor est enim velit nisi cupidatat ipsum esse aliquip in anim duis id. Quis magna eiusmod voluptate et fugiat eu culpa ex aliqua aliquip aliquip pariatur fugiat.
                </Paragraph>
                <File
                    name="file.link"
                    path="/documents/audit_2021.pdf"
                    icon="link.svg"
                    downloadable
                    browsed
                />
                <List
                    list={[
                        "Some Item",
                        "item#2",
                        <>
                            File for download:
                            <File
                                name="file.docx"
                                path="/documents/audit_2021.pdf"
                                notBlocky
                            />
                        </>,
                        <List
                            title="Inner list"
                            list={[
                                "Inner item",
                                "item#5",
                            ]}
                            marker="circle"
                        />,
                    ]}
                    marker="disc"
                />
                <Paragraph centerText>
                    Some text.
                </Paragraph>
            </Article>
            <Article title="Какой-то длинный заголовок статьи">
                {FILE_TYPES_TO_ICON.map(key => (
                    <File key={key.types[0]}
                        name={"file." + key.types[0]}
                        path="/documents/audit_2021.pdf"
                        downloadable
                    />
                ))}
                {FILE_TYPES_TO_ICON.map(key => (
                    <File key={key.types[0]}
                        name={"file." + key.types[0]}
                        path="/documents/audit_2021.pdf"
                        downloadable
                    />
                ))}
                {FILE_TYPES_TO_ICON.map(key => (
                    <File key={key.types[0]}
                        name={"file." + key.types[0]}
                        path="/documents/audit_2021.pdf"
                        downloadable
                    />
                ))}
            </Article>
            <Article title="Демонстрация">
                <List
                    marker="none"
                    list={[
                        <File
                            name="file1.pdf"
                            path="/documents/Перечень рекомендуемых мероприятий по улучшению условий труда.pdf"
                            browsed
                            downloadable
                            icon="pdf.svg"
                        />,
                        <span>
                            Откройте файл
                            <File
                                name="file2.pdf"
                                path="/documents/Перечень рекомендуемых мероприятий по улучшению условий труда.pdf"
                                browsed
                                downloadable
                                notBlocky
                                inTextFile
                            />
                            для просмотра рекомендуемых мероприятий
                        </span>,
                        <File
                            name="file3.pdf"
                            path="/documents/Перечень рекомендуемых мероприятий по улучшению условий труда.pdf"
                            downloadable
                            icon="video.svg"
                            notBlocky
                        />,
                        <File
                            name="file4"
                            notBlocky
                        />,
                        <File
                            name="file5.txt"
                            notBlocky
                            hideIcon
                        />,
                    ]}
                />
            </Article> */}
        </main>
    );
}
