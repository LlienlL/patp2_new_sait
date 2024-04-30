import Article from "@/Components/GUI/Article/Article";
import Container from "@/Components/GUI/Container/Container";
import Table from "@/Components/GUI/Table/Table";
import List from "@/Components/GUI/List/List";
import Anchor from "@/Components/GUI/Anchor/Anchor";
import File from "@/Components/GUI/File/File";
import Image from "@/Components/GUI/Image/Image";

export const metadata = {
    title: "Технический осмотр",
};

export default async function TechnicalInspection() {
    return (
        <main>
            <Article title="Оператор технического осмотра">
                <Container noBorder noMargin centerChildren>
                    <Table
                        tiledBackground
                        head={[
                            [{ content: "Сведения об операторе из реестра РСА", span: { colSpan: 2 } }]
                        ]}
                        table={[
                            [{ content: "Краткое наименование", style: { fontWeight: "bold", textAlign: "start" } },
                            { content: "АО \"НПАТП №2\"", style: { textAlign: "start" } }],
                            [{ content: "Полное наименование", style: { fontWeight: "bold", textAlign: "start" } },
                            { content: "Акционерное общество \"Нижневартовское пассажирское автотранспортное предприятие №2\"", style: { textAlign: "start" } }],
                            [{ content: "Директор", style: { fontWeight: "bold", textAlign: "start" } },
                            { content: "Кляпов Владимир Яковлевич", style: { textAlign: "start" } }],
                            [{ content: "ИНН", style: { fontWeight: "bold", textAlign: "start" } },
                            { content: "8603146847", style: { textAlign: "start" } }],
                            [{ content: "ОГРН", style: { fontWeight: "bold", textAlign: "start" } },
                            { content: "1078603006987", style: { textAlign: "start" } }],
                            [{ content: "Юридический адрес", style: { fontWeight: "bold", textAlign: "start" } },
                            { content: "628616, Ханты-Мансийский Автономный округ - Югра, городской округ Нижневартовск, город Нижневартовск, улица Индустриальная, здание 8", style: { textAlign: "start" } }],
                            [{ content: "E-mail", style: { fontWeight: "bold", textAlign: "start" } },
                            { content: <Anchor href="mailto:patp2c@patp2-nv.ru ?subject=Обращение" target="_blank">patp2c@patp2-nv.ru</Anchor>, style: { textAlign: "start" } }],
                            [{ content: "Телефон", style: { fontWeight: "bold", textAlign: "start" } },
                            { content: <Anchor href="tel:+7 (3466) 61-78-83" target="_blank">+7 (3466) 61-78-83</Anchor>, style: { textAlign: "start" } }],

                        ]}
                    />
                </Container>
            </Article>
            <Article title="График работы">
                <Container noBorder noMargin centerChildren>
                    <Table
                        tiledBackground
                        colgroup={[{ width: "300px" }, { width: "300px" }, { width: "300px" }]}
                        head={[
                            ["Дни недели", "Часы работы", "Обед"],
                        ]}
                        table={[
                            [{ content: "Понедельник", style: { textAlign: "start" } },
                            { content: "08:00 до 17:00", span: { rowSpan: 5 } }, { content: "12:00 до 13:00", span: { rowSpan: 5 } }],
                            [{ content: "Вторник", style: { textAlign: "start" } }],
                            [{ content: "Среда", style: { textAlign: "start" } }],
                            [{ content: "Чеверг", style: { textAlign: "start" } }],
                            [{ content: "Пятница", style: { textAlign: "start" } }],
                            [{ content: "Суббота", style: { textAlign: "start" } }, { content: "Выходной", span: { rowSpan: 2, colSpan: 2 } }],
                            [{ content: "Воскресенье", style: { textAlign: "start" } }],
                        ]}
                    />
                </Container>
            </Article>
            <Article title="Размеры платы за проведение технического осмотра транспортных средств.">
                <Container noBorder noMargin centerChildren>
                    <Table
                        tiledBackground
                        head={[
                            ["Тип транспортного средства", "Категория ТС по классификации КВТ ЕЭК ООН", "Размер платы, руб."],
                        ]}
                        table={[
                            [{ content: "Легковые автомобили", style: { fontWeight: "bold", textAlign: "start" } }, "M1", "913"],
                            [{ content: "Автобусы, в том числе:", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [{ content: "максимальной массой не более 5 тонн", style: { fontWeight: "bold", textAlign: "start" } }, "М2", "1563"],
                            [{ content: "максимальной массой более 5 тонн", style: { fontWeight: "bold", textAlign: "start" } }, "M3", "1888"],
                            [{ content: "Грузовые автомобили в том числе:", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [{ content: "максимальной массой не более 3,5 тонн", style: { fontWeight: "bold", textAlign: "start" } }, "N1", "999"],
                            [{ content: "максимальной массой более 3,5 тонн, но не более 12 тонн", style: { fontWeight: "bold", textAlign: "start" } }, "N2", "1821"],
                            [{ content: "Стоимость повторного осмотра составляет 50% (пятьдесят процентов) от стоимости предельного размера платы соответствующей категории транспортных средств.", span: { colSpan: 3 }, style: { textAlign: "start" } }],
                        ]}
                    />
                </Container>
            </Article>
            <Article title="Нормативные правовые акты">
                <List 
                    marker="decimal"
                    list={[
                        <Anchor href="https://base.garant.ru/12187349/">Федеральный закон от 01.07.2011 N 170-ФЗ О техническом осмотре транспортных средств и о внесении</Anchor>,
                        <Anchor href="https://base.garant.ru/74671754/">Постановление Правительства РФ от 15.09.2020 N 1434 Об утверждении Правил проведения технического</Anchor>,
                        <Anchor href="https://base.garant.ru/70103612/">Постановление Правительства РФ от 05.12.2011 г № 1008</Anchor>,
                        <Anchor href="https://base.garant.ru/74172147/">Постановление Правительства РФ от 23 мая 2020 года № 741</Anchor>,
                        <Anchor href="https://base.garant.ru/70106658/">Решение Комиссии Таможенного союза от 09.12.2011 № 877</Anchor>,
                        <Anchor href="https://base.garant.ru/71871854/">ГОСТ 33997-2016. Межгосударственный стандарт. Колесные транспортные средства.</Anchor>
                    ]}
                />
            </Article>
            <Article title="Типовой договор о проведении технического осмотра">
                    <File
                        name="Форма типового договора о проведении технического осмотра.doc"
                        path="/documents/Форма типового договора о проведении технического осмотра.doc"
                        downloadable
                    />
            </Article>
            <Article title="Для прохождения технического осмотра вам необходимо предоставить">
                    <List
                        marker="decimal"
                        list={[
                            "Документ, удостоверяющий личность (для представителя владельца транспортного средства - документ, удостоверяющий личность и доверенность);",
                            "Свидетельство о регистрации транспортного средства или паспорт тренспортногосредства.",
                        ]}
                    />
            </Article>
            <Article title="Фотографии">
                <Image
                    src="/img/photo1_1.jpg"
                    inlineDisplay
                />
                <Image
                    src="/img/photo2_1.jpg"
                    inlineDisplay
                />
            </Article>
        </main>
    );
}
