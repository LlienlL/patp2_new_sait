import Article from "@/Components/GUI/Article/Article";
import Container from "@/Components/GUI/Container/Container";
import List from "@/Components/GUI/List/List";
import File from "@/Components/GUI/File/File";
import Paragraph from "@/Components/GUI/Paragraph/Paragraph";

export const metadata = {
    title: "Годовая отчетность"
};

export default async function Report() {
    return (
        <main>
            <Article title="Годовая отчетность">
                <Paragraph>
                    В этом разделе представлена годовая отчетность Акционерного Общества "Нижневартовское пассажирское автотранспортное
                    предприятие №2" (г. Нижневартовск). Вы можете скачать любой из представленных ниже файлов (в формате .pdf):
                </Paragraph>
                <Container noMargin>
                    <List
                        list={[
                            <File
                                name="Аудиторское заключение 2021 год"
                                path="/documents/report/Аудиторское заключение 2021 год.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Аудиторское заключение 2018 год"
                                path="/documents/report/Аудиторское заключение 2018 год.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Аудиторское заключение 2017 год"
                                path="/documents/report/Аудиторское заключение 2017 год.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Бухгалтерская отчетность 2021 год"
                                path="/documents/report/Бухгалтерская отчетность 2021 год.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Информация"
                                path="/documents/report/Информация.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Изменение в устав"
                                path="/documents/report/Изменение в устав.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Свидетельство"
                                path="/documents/report/Свидетельство.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="ПРАВИЛА ВЕДЕНИЯ РЕЕСТРА АКЦИОНЕРОВ"
                                path="/documents/report/ПРАВИЛА ВЕДЕНИЯ РЕЕСТРА АКЦИОНЕРОВ.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Правила ведения реестра акционеров 2"
                                path="/documents/report/Правила ведения реестра акционеров 2.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Анкета зарегистрированного лица (для физических лиц)"
                                path="/documents/report/Анкета зарегистрированного лица (для физических лиц).pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Анкета зарегистрированного лица (для юридических лиц)"
                                path="/documents/report/Анкета зарегистрированного лица (для юридических лиц).pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Передаточное распоряжение"
                                path="/documents/report/Передаточное распоряжение.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Залоговое распоряжение"
                                path="/documents/report/Залоговое распоряжение.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name="Выписка из реестра акционеров"
                                path="/documents/report/Выписка из реестра акционеров.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name=""
                                path="/documents/report/.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name=""
                                path="/documents/report/.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name=""
                                path="/documents/report/.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name=""
                                path="/documents/report/.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name=""
                                path="/documents/report/.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name=""
                                path="/documents/report/.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name=""
                                path="/documents/report/.pdf"
                                icon="pdf.svg"
                                downloadable
                            />,
                            <File
                                name=""
                                path="/documents/report/.pdf"
                                icon="pdf.svg"
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
