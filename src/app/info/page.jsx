import Article from "@/Components/GUI/Article/Article.jsx";
import Paragraph from "@/Components/GUI/Paragraph/Paragraph.jsx";
import File from "@/Components/GUI/File/File.jsx";
import List from "@/Components/GUI/List/List.jsx";
import Container from "@/Components/GUI/Container/Container.jsx";

export const metadata = {
    title: "Информация для граждан"
};

export default async function Info() {
    return (
        <main>
            <Article title="Информация для граждан">
                <Paragraph>
                    В этом разделе предоставлена дополнительная информация для граждан и сотрудников предприятия
                </Paragraph>

                <Container noMargin>
                    <List
                        list={[
                            <File
                                name="Перечень рекомендуемых мероприятий по улучшению условий труда.pdf"
                                path="/documents/info/Перечень рекомендуемых мероприятий по улучшению условий труда.pdf"
                                downloadable
                            />,
                            <File
                                name="Сводная ведомость результатов проведения СОУТ.pdf"
                                path="/documents/info/Сводная ведомость результатов проведения СОУТ.pdf"
                                downloadable
                            />,
                            <File
                                name="Порядок и случаи оказания бесплатной юридической помощи.pdf"
                                path="/documents/info/Порядок и случаи оказания бесплатной юридической помощи.pdf"
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
