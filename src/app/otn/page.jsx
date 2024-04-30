
import Article from "@/Components/GUI/Article/Article.jsx";
import List from "@/Components/GUI/List/List.jsx";
import File from "@/Components/GUI/File/File.jsx";
import Paragraph from "@/Components/GUI/Paragraph/Paragraph.jsx";
import Title from "@/Components/GUI/Title/Title.jsx";
import Anchor from "@/Components/GUI/Anchor/Anchor.jsx";
import Video from "@/Components/GUI/Video/Video";
import Container from "@/Components/GUI/Container/Container";
import NextImage from "next/image";
import style from "./otn.module.scss";
import dynamic from "next/dynamic";
const ImageAnchor = dynamic(() => import("@/Components/GUI/ImageAnchor/ImageAnchor"), {
    loading: () => <p>Загрузка...</p>, ssr: false
})

export const metadata = {
    title: "ОТН"
};

export default async function Otn() {
    return (
        <main>
            <Article title="Транспортная карта" hiddenWrapButton usePartialContent={false}>
                <List className={style.hrefList}
                    marker="disc"
                    list={[
                        <Anchor href="#docs">
                            Положение о транспортной карте АСОП в общественном транспорте города Нижневартовск
                        </Anchor>,
                        <Anchor href="#video">
                            Рекламные видеоматериалы
                        </Anchor>,
                        <Anchor href="#otnPay">
                            Места пополнения карт ОТН через терминал самообслуживания.
                        </Anchor>,
                        <Anchor href="#learnDosc">
                            Учебные материалы
                        </Anchor>,
                        <Anchor href="#FAQ">
                            Места пополнения карт ОТН через терминал самообслуживания.
                        </Anchor>,
                    ]}
                />

                <Paragraph>
                    Контактные данные: e-mail:
                    <Anchor href="mailto:patp2c@patp2-nv.ru ?subject=Обращение" target="_blank">patp2c@patp2-nv.ru</Anchor>
                </Paragraph>
            </Article>

            <Article title="Документы" usePartialContent={false} id="docs">
                <Title>
                    Положение о транспортной карте АСОП в общественном транспорте города Нижневартовск
                </Title>
                <Container noMargin>
                    <List
                        list={[
                            <File
                                name="Положение о транспортной карте. Лист 1-4.pdf"
                                path="/documents/otn/Положение о транспортной карте. Лист 1-4.pdf"
                                downloadable
                            />,
                            <File
                                name="Положение о транспортной карте. Лист 5.jpg"
                                path="/documents/otn/Положение о транспортной карте. Лист 5.jpg"
                                downloadable
                            />,
                            <File
                                name="Положение о транспортной карте. Лист 6.jpg"
                                path="/documents/otn/Положение о транспортной карте. Лист 6.jpg"
                                downloadable
                            />,
                            <File
                                name="Положение о транспортной карте. Лист 7.jpg"
                                path="/documents/otn/Положение о транспортной карте. Лист 7.jpg"
                                downloadable
                            />,
                        ]}
                        noVerticalMargin
                    />
                </Container>
            </Article>

            <Article title="Рекламные видеоматериалы" usePartialContent={false} id="video">
                <div className={style.flexVideos}>
                    <Video
                        src="/video/video.mkv"
                        inline
                        captionOver="Video name #1"
                    />
                    <Video
                        src="/video/video.mkv"
                        inline
                        captionOver="Video name #2"
                    />
                    <Video
                        src="/video/video.mkv"
                        inline
                        captionUnder="Video name #3"
                    />
                    <Video
                        src="/video/video.mkv"
                        inline
                        captionUnder="Video name #4"
                    />
                </div>
            </Article>

            <Article title="Места пополнения карт ОТН через терминал самообслуживания." id="otnPay">
                <ImageAnchor src="/img/otn/otn1.jpg">
                    ул. Мира 56, магазин Славтэк.
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN2.jpg">
                    ул. Нефтяников 19, ТК “Империя-Т”.
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN11.jpg">
                    Торгово-развлекательный центр "Юграмолл", ул. Ленина, д. 15п
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN11.jpg">
                    Торговый центр "Подсолнух", ул. Интернациональная, д. 73
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN5.jpg">
                    Центральный рынок, ул. Ленина, д. 14
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN61.jpg">
                    Магазин "Сибирь" ул. Мира, д. 34
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN8.jpg">
                    Многофункциональный комплекс "Европа-Сити", ул. Чапаева, д. 27"
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN9.jpg">
                    ТД 'Домашний', ул. Заводская, д. 10
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN12.png">
                    Мини-маркет 'Кемер', ул. Героев Самотлора, д. 20
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN13.png">
                    Автовокзал, автостанция; ул. Энергетиков, д. 5A, п. г. т. Излучинск
                </ImageAnchor>
                <br />
            </Article>

            <Article title="Места пополнения карт ОТН через кассу.">
                <ImageAnchor src="/img/otn/OTN_1.jpg">
                    Касса железнодорожного вокзала, ул. Северная, д. 37.
                </ImageAnchor>
                <br />
                <ImageAnchor src="/img/otn/OTN_2.jpg">
                    Касса АО "НПАТП №2", ул. Индустриальная, д.8 стр.4.
                </ImageAnchor>
            </Article>

            <Article title="Учебные материалы" usePartialContent={false} id="learnDocs">
                <Container noMargin>
                    <List
                        list={[
                            <File
                                name="Правила пользования транспортной картой.doc"
                                path="/documents/otn/Правила пользования транспортной картой.doc"
                                downloadable
                            />,
                            <File
                                name="Оплата.jpg"
                                path="/documents/otn/Оплата.jpg"
                                downloadable
                            />
                        ]}
                        noVerticalMargin
                    />
                </Container>

                <br />
                <Paragraph centerText styles={{ fontWeight: "bold" }}>Виды карт</Paragraph>
                <div className={style.flexImages}>
                    <NextImage
                        src="/documents/otn/OTN_card_01.png"
                        alt="Транспортная карта для граждан"
                        width={300}
                        height={189}
                    />
                    <NextImage
                        src="/documents/otn/OTN_card_03.png"
                        alt="Транспортная карта для учащихся"
                        width={300}
                        height={189}
                    />
                </div>
                <div className={style.flexImages}>
                    <NextImage
                        src="/documents/otn/OTN_card_05.png"
                        alt="Транспортная карта для студентов"
                        width={300}
                        height={189}
                    />
                    <NextImage
                        src="/documents/otn/OTN_card_07.png"
                        alt="Транспортная карта для ветеранов"
                        width={300}
                        height={189}
                    />
                </div>
            </Article>

            <Article title="Часто задаваемые вопросы." id="FAQ">
                <Title>Бланки заявлений.</Title>

                <Container noMargin>
                    <List
                        list={[
                            <File
                                name="Блокировка карты ОТН брак.docx"
                                path="/documents/otn/Blokirovka karty OTH, Brak.docx"
                            />,
                            <File
                                name="Блокировка карты ОТН из-за утери.docx.docx"
                                path="/documents/otn/Blokirovka karty OTH, uterya.docx"
                            />,
                            <File
                                name="Блокировка карты ОТН поломка.docx"
                                path="/documents/otn/Blokirovka karty OTH, polomka.docx"
                            />,
                            <File
                                name="На возврат денежных средств (минипэй не зачислил).docx"
                                path="/documents/otn/Na vozvrat deneg na karty pri neudachnom popolnenie v avtobuse.docx"
                            />,
                            <File
                                name="На возврат денежных средств (стационарный терминал не зачислил).docx"
                                path="/documents/otn/Na vozvrat deneg pri neudachnom popolnenie v stacionarnom terminale.docx"
                            />,
                            <File
                                name="На возврат денежных средств (терминал не распечатал).docx"
                                path="/documents/otn/Na vozvrat deneg, pri neodnokratnoi oplate (t2 ne pechatal check).docx"
                            />,
                        ]}
                        noVerticalMargin
                    />
                </Container>

                <Paragraph>В целях упрощения обработки обращений от граждан, при возникновении ситуаций таких как:</Paragraph>
                <br />
                <Paragraph>- ошибка в пополнение карт ОТН в стационарных или мобильных (в автобусах) терминалах оплаты</Paragraph>
                <Paragraph>- при многократном оплате проезда за одного человека (терминал оплаты не распечатался билет)</Paragraph>
                <br />
                <Paragraph>предлагаем Вам, перед посещением офиса компании, заполнить размещенный выше бланк заявления и
                    отправить их отсканированную копию, на электронный адрес:
                    <Anchor href="mailto:patp2c@patp2-nv.ru ?subject=Обращение" target="_blank">patp2c@patp2-nv.ru</Anchor>
                    или по факсу 8 (3466) 62-52-76.</Paragraph>
                <Paragraph>После обработки заявления с Вами свяжутся по указанному Вами телефону.</Paragraph>
                <br />
                <Paragraph>В других случаях, необходимо присутствие гражданина в офисе компании.</Paragraph>
                <br />
                <Paragraph>Во всех случаях присутствия в офисе, необходимо иметь при себе ряд документов:</Paragraph>
                <Paragraph>- паспорт</Paragraph>
                <Paragraph>- чек подтверждающий приобретение карты ОТН</Paragraph>
                <Paragraph>- чек проезда или пополнения (если имеется)</Paragraph>
                <Paragraph>- карту ОТН</Paragraph>
            </Article>

        </main>
    )
}