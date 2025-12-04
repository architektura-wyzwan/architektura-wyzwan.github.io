import {ArticleMetadata} from "../layout/Article";
import {Paragraph} from "../components/Paragraph";

export const agendaWorkInProgressPage: ArticleMetadata = {
    title_pl: "Program",
    title_en: "Agenda",
    content: Content,
}

function Content() {
    return <Paragraph pl={"Program zostanie ogłoszony 5 czerwca."} en={"The agenda will be announced on June 5."}/>
}
