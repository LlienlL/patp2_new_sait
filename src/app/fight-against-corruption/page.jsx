
import Article from "@/Components/GUI/Article/Article.jsx";
import List from "@/Components/GUI/List/List.jsx";
import File from "@/Components/GUI/File/File.jsx";
import Paragraph from "@/Components/GUI/Paragraph/Paragraph.jsx";
import Title from "@/Components/GUI/Title/Title.jsx";
import Anchor from "@/Components/GUI/Anchor/Anchor.jsx";
import Container from "@/Components/GUI/Container/Container";
import NextImage from "next/image";
import style from "./cor.module.scss";

export const metadata = {
    title: "Борьба с коррупцией"
};

export default async function Cor() {
    return (
        <main>
            <Article title="Борьба с коррупцией">
                <div className={style.block}>
                    <NextImage src="/img/cor.png" className={style.img}
                        alt="Борьба с коррупцией"
                        width={415} height={241}
                    />

                    <Paragraph>
                        Генеральная прокуратура Российской Федерации разработала информационно-разъяснительные рекомендации,
                        направленные на профилактику коррупции и формирование у граждан антикоррупционного поведения
                        (см. прикрепленные ниже файлы)
                    </Paragraph>
                    <Paragraph>
                        Особенность рекомендаций в том, что все они созданы в современной и доступной для восприятия форме
                        (в виде инфографики, комиксов, интерактивной компьютерной программы). Рекомендации рассчитаны на
                        различную возрастную категорию и затрагивают наиболее подверженные коррупционным рискам сферы
                        жизнедеятельности (медицина, образование, ЖКХ и др.)
                    </Paragraph>
                    <Paragraph>
                        Ознакомиться с информационно-разъяснительными и иными материалами, направленными на борьбу с
                        коррупцией, можно на официальном сайте Генпрокуратуры РФ в разделе
                        <Anchor href="https://epp.genproc.gov.ru/anticor/">«Противодействие коррупции»</Anchor>.
                    </Paragraph>
                    <br />

                    <Container noMargin>
                        <List noVerticalMargin
                            list={[
                                <File
                                    name="Памятка «Мы против коррупции в здравоохранении»"
                                    path="/documents/corrupt/zdrav.pdf"
                                    icon="pdf.svg"
                                    downloadable
                                />,
                                <File
                                    name="Памятка «Мы против коррупции в образовании»"
                                    path="/documents/corrupt/obraz.pdf"
                                    icon="pdf.svg"
                                    downloadable
                                />,
                                <File
                                    name="Мы против коррупции на дорогах"
                                    path="/documents/corrupt/dorog.pdf"
                                    icon="pdf.svg"
                                    downloadable
                                />,
                                <File
                                    name="Мы против коррупции в жилищно-коммунальной сфере"
                                    path="/documents/corrupt/gkh.pdf"
                                    icon="pdf.svg"
                                    downloadable
                                />,
                                <File
                                    name="Мы против коррупции в сфере оказания ритуальных услуг"
                                    path="/documents/corrupt/ritual.pdf"
                                    icon="pdf.svg"
                                    downloadable
                                />,
                                <File
                                    name="Буклет. Эстафета добрых дел"
                                    path="/documents/corrupt/esta.pdf"
                                    icon="pdf.svg"
                                    downloadable
                                />,
                                <File
                                    name="Буклет. История одного чиновника"
                                    path="/documents/corrupt/history.pdf"
                                    icon="pdf.svg"
                                    downloadable
                                />,
                            ]}
                        />
                    </Container>
                </div>
            </Article>

        </main>
    )
}