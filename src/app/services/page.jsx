
import Article from '@/Components/GUI/Article/Article';
import Container from '@/Components/GUI/Container/Container';
import Table from '@/Components/GUI/Table/Table';

export const metadata = {
    title: "Услуги"
};

export default async function Services() {
    return (
        <main>
            <Article title="Услуги, предоставляемые НПАТП №2 для предпринимателей, осуществляющих коммерческие 
            пассажирские перевозки">
                <Container noBorder noMargin centerChildren>
                    <Table
                        tiledBackground
                        head={[
                            [{ content: "№ ПП", span: { rowSpan: 2 } }, { content: "Виды работ", span: { rowSpan: 2 } },
                            { content: "Стоимость работ, руб.", span: { colSpan: 3 } }],
                            ["Для автобусов малого класса", "Для автобусов среднего класса",
                                "Для автобусов большого класса"]
                        ]}
                        table={[
                            ["1", "Предрейсовый медицинский осмотррейсовый", "20", "23", "24"],
                            ["2", "Послерейсовый медицинский осмотр", "20", "23", "24"],
                            ["3", "Проверка технического состояния при выходе на линию", "30", "33", "34"],
                            ["4", "Выдача и обработка данных путевого листа", "32", "36", "38"],
                            ["5", "Проведение инструктажа по БД", "350", "400", "400"],
                            ["6", "Заключение договора на оказание услуг по перевозке пассажиров — за 1 единицу транспорта", "2200", "2500", "2800"],
                            ["7", "Проведение ТО-1", "600", "750", "850"],
                            ["8", "Проведение ТО-2", "2100", "4000", "5400"],
                            ["9", "За место на охраняемой стоянке с применением электроподогрева", "1000", "—", "—"],
                        ]}
                    />
                </Container>
            </Article>
            <Article title="Услуги по мойке, уборке и полировке легковых автомобилей">
                <Container noBorder noMargin centerChildren>
                    <Table
                        tiledBackground
                        head={[
                            [{ content: "№ п/п", style: { fontWeight: "normal" } }, { content: "Наименование работ", style: { fontWeight: "normal" } },
                            { content: "Сдельная расценка, руб.", style: { fontWeight: "normal" } }]
                        ]}
                        table={[
                            [{ content: "1. Мойка автомобилей ручная", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [" ", { content: "Автомобили легковые зарубежные (Краузеры, Паджеро)", style: { textAlign: "start" } }, "400"],
                            [" ", { content: "Автомобили легковые зарубежные (джипы 4-х дверные)", style: { textAlign: "start" } }, "350"],
                            [" ", { content: "Автомобили легковые зарубежные (джипы 2-х дверные)", style: { textAlign: "start" } }, "300"],
                            [" ", { content: "Автомобили легковые зарубежные (кроме джипов)", style: { textAlign: "start" } }, "240"],
                            [" ", { content: "Микроавтобусы и фургоны отечественные, стран СНГ и зарубежные", style: { textAlign: "start" } }, "400"],
                            [" ", { content: "МиниВены, Нива 4-х дверная, хэтчбеки", style: { textAlign: "start" } }, "280"],
                            [" ", { content: "Автомобили легковые отечественные и стран СНГ (ВАЗ, ГАЗ, Москвич и прочие) всех марок и модификаций", style: { textAlign: "start" } }, "230"],
                            [{ content: "2. Мойка двигателя автомобиля", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [" ", { content: "Микроавтобусы и фургоны отечественные, стран СНГ и зарубежные", style: { textAlign: "start" } }, "300"],
                            [" ", { content: "Автомобили легковые отечественные и стран СНГ (ВАЗ, ГАЗ, Москвич и прочие) всех марок и модификаций", style: { textAlign: "start" } }, "250"],
                            [" ", { content: "Автомобили легковые зарубежные", style: { textAlign: "start" } }, "250"],
                            [{ content: "3. Уборка салона", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [" ", { content: "Микроавтобусы и фургоны отечественные, стран СНГ и зарубежные", style: { textAlign: "start" } }, "170"],
                            [" ", { content: "Автомобили легковые зарубежные (джипы)", style: { textAlign: "start" } }, "150"],
                            [" ", { content: "Автомобили легковые отечественные и стран СНГ (ВАЗ, ГАЗ, Москвич и прочие) всех марок и модификаций", style: { textAlign: "start" } }, "120"],
                            [{ content: "4. Уборка багажника", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [" ", { content: "Микроавтобусы и фургоны отечественные, стран СНГ и зарубежные", style: { textAlign: "start" } }, "50"],
                            [" ", { content: "	Автомобили легковые отечественные, стран СНГ и зарубежные", style: { textAlign: "start" } }, "50"],
                            [{ content: "5. Полировка", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [" ", { content: "Автомобили легковые отечественные и стран СНГ всех марок", style: { textAlign: "start" } }, "450"],
                            [" ", { content: "Автомобили легковые зарубежные (джипы)", style: { textAlign: "start" } }, "550"],
                            [" ", { content: "Автомобили легковые зарубежные (кроме джипов)", style: { textAlign: "start" } }, "450"],
                            [{ content: "6. Чистка стекол", span: { colSpan: 2 }, style: { fontWeight: "bold", textAlign: "start" } }, "100"],
                            [{ content: "7. Чистка панели", span: { colSpan: 2 }, style: { fontWeight: "bold", textAlign: "start" } }, "80"],
                            [{ content: "8. Чистка бампера", span: { colSpan: 2 }, style: { fontWeight: "bold", textAlign: "start" } }, "40"],
                            [{ content: "9. Чистка битумных пятен", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [" ", { content: "- менее загрязненных поверхностей", style: { textAlign: "start" } }, "50"],
                            [" ", { content: "- более загрязненных поверхностей", style: { textAlign: "start" } }, "150"],
                            [{ content: "10. Чистка днища", span: { colSpan: 2 }, style: { fontWeight: "bold", textAlign: "start" } }, "100"],
                            [{ content: "11. Проверка и подкачка одного колеса", span: { colSpan: 2 }, style: { fontWeight: "bold", textAlign: "start" } }, "10"],
                            [{ content: "12. Чистка поверхности автомобиля от следов насекомых", span: { colSpan: 3 }, style: { fontWeight: "bold", textAlign: "start" } }],
                            [" ", { content: "- менее загрязненных поверхностей", style: { textAlign: "start" } }, "50"],
                            [" ", { content: "- более загрязненных поверхностей", style: { textAlign: "start" } }, "150"],
                        ]}
                    />
                </Container>
            </Article>
        </main>
    );
}
