
import Article from "@/Components/GUI/Article/Article.jsx";
import Paragraph from "@/Components/GUI/Paragraph/Paragraph.jsx";
import Anchor from "@/Components/GUI/Anchor/Anchor.jsx";
import Map from "@/Components/GUI/Map/Map";

export const metadata = {
    title: "Карты маршрутов"
};

export default async function Maps() {
    const defaultMapHeight = "75vh";

    return (
        <main>
            <Article title="Карты маршрутов" hiddenWrapButton>
                <Paragraph>
                    На этой странице вы можете ознакомиться с картами маршрутов автобусов города Нижневартовска.
                    На данный период в парке предприятия насчитывается <b>104 единицы</b> городских автобусов.
                    Каждый день на линию выходит <b>69 автобусов</b>, обслуживающих 11 городских маршрутов.
                    Ежедневно автотранспортом предприятия пользуются <b>36,5 тысяч пассажиров</b>.
                    Более подробно о НПАТП №2 вы можете прочитать в разделе <Anchor href="/about">О предприятии</Anchor>.
                </Paragraph>
            </Article>


            <Article title="Маршрут №6" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "ПАТП №2" - "железнодорожный вокзал"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/6.png",
                    alt: "Маршрут №6",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №7" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "ПАТП №2" - "городская поликлиника № 3"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/7.png",
                    alt: "Маршрут №7",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №9" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "Аэропорт" - "Старовартовская"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/9.png",
                    alt: "Маршрут №9",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №10" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "ПАТП №2" - "авторынок"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/10.png",
                    alt: "Маршрут №10",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №11" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "Управление социальной защиты населения" - "ДРСУ"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/11.png",
                    alt: "Маршрут №11",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №12" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "ПАТП №2" - "авторынок"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/12.png",
                    alt: "Маршрут №12",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №13" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "ПАТП №2" - "МЖК"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/13.png",
                    alt: "Маршрут №13",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №14" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "Железнодоожный вокзал" - "РЭБ флота"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/14.png",
                    alt: "Маршрут №14",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №15" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "Аэропорт" - "железнодорожный вокзал"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/15.png",
                    alt: "Маршрут №15",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №16" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "ПАТП №2" - "МЖК"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/16.png",
                    alt: "Маршрут №16",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №17" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "Поселок у северной рощи" - "МЖК"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/17.png",
                    alt: "Маршрут №17",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №21" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "Аэропорт" - "железнодорожный вокзал" - "ДРСУ"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/21.png",
                    alt: "Маршрут №21",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>

            <Article title="Маршрут №30" usePartialContent={false} hiddenAll>
                <Paragraph>
                    "Автовокзал" - "противотуберкулезный диспансер"
                </Paragraph>
                <Map map={{
                    src: "/img/maps/30.png",
                    alt: "Маршрут №30",
                    width: 1600,
                    height: 1100,
                }}
                    styles={{ maxHeight: defaultMapHeight }}
                />
            </Article>
        </main>
    );
}
