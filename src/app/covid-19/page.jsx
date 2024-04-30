
import Article from "@/Components/GUI/Article/Article.jsx";
import Container from "@/Components/GUI/Container/Container";
import List from "@/Components/GUI/List/List";
import File from "@/Components/GUI/File/File";

export const metadata = {
    title: "COVID-19"
};

export default async function Covid19() {
    return (
        <main>
            <Article title="Информация для сотрудников предприятия COVID-19" hiddenWrapButton usePartialContent={false}>
            <Container noMargin>
                    <List
                        list={[
                            <File
                                name="Приказ о введение в действие Модельного акта.pdf"
                                path="/documents/covid-19/Приказ о введение в действие Модельного акта.pdf"
                                downloadable
                            />,
                            <File
                                name="Уведомление.pdf"
                                path="/documents/covid-19/Уведомление.pdf"
                                downloadable
                            />,
                            <File
                                name="Служебная записка.pdf"
                                path="/documents/covid-19/Служебная записка.pdf"
                                downloadable
                            />,
                            <File
                                name="Заявление о возмещении.pdf"
                                path="/documents/covid-19/Заявление о возмещении.pdf"
                                downloadable
                            />,
                        ]}
                        noVerticalMargin
                    />
                </Container>

            </Article>
        </main>
    );
}
