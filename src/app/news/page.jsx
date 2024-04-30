
import Article from "@/Components/GUI/Article/Article.jsx";
import Container from "@/Components/GUI/Container/Container";
import Paragraph from "@/Components/GUI/Paragraph/Paragraph.jsx";
import NextImage from "next/image";
import style from "./news.module.scss";

export const metadata = {
    title: "Новости"
};

export default async function News() {
    return (
        <main>
            <Article title="Уважаемые пассажиры!" hiddenWrapButton usePartialContent={false}>
                <Paragraph styles={{ fontSize: "1.2em" }}>
                    Наше предприятие обслуживает 13 маршрутов, ежедневно на линию выходят по 82 автобуса.
                    В связи с низкими температурами автобусы стали чаще выходить из строя по техническим причинам.
                    В условиях сильных морозов мы делаем всё от нас зависящее,  чтобы минимизировать отклонения от графика – в
                    случае схода автобуса с линии мы как можно быстрее отправляем по данному маршруту резервный автобус на замену.
                    При возникновении такой ситуации интервал ожидания нужного автобуса неизбежно увеличивается, поэтому
                    <b> просим Вас пользоваться <span style={{ color: "red" }}>приложением «Умный транспорт» </span> или же
                        уточнять время прибытия автобуса на нужную Вам остановку в диспетчерской по телефону
                        <span style={{ color: "red" }}> 61-54-68</span>. </b> Администрация АО «НПАТП №2» приносит свои извинения
                    за доставленные неудобства и просит с пониманием отнестись к возможному увеличению интервалов прибытия
                    автобусов на остановочные пункты.
                </Paragraph>
                <Container centerChildren noMargin noPadding noBorder>
                    <NextImage className={style.img}
                        src="/img/ph.png" alt="Диспутчерская АО «НПАТП №»"
                        width={764} height={469}
                    />
                </Container>

            </Article>
        </main>
    );
}
