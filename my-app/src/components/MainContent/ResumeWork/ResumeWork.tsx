import { Subtitle } from "../../common/Subtitle/Subtitle";
import { ResumeElement } from "./ResumeElement/ResumeElement";
import { ResumePanel } from "./ResumePanel/ResumePanel";

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, nesciunt dignissimos asperiores eaque necessitatibus consequuntur eligendi autem suscipit dolor enim repudiandae veniam totam et velit deleniti tempore maxime optio. Explicabo?"

const first = {
    title: "World company SAS",
    content: lorem
}

const other = {
    title: "Contract #145",
    content: lorem
}

export const ResumeWork = () => (
    <div>
        <Subtitle content = "Resume your work" />
        <ResumePanel>
            <ResumeElement title={ first.title } content={ first.content } />
            <ResumeElement title={ other.title } content={ other.content } />
            <ResumeElement title={ other.title } content={ other.content } />
            <ResumeElement title={ other.title } content={ other.content } />
            <ResumeElement title={ other.title } content={ other.content } />
            <ResumeElement title={ other.title } content={ other.content } />
            <ResumeElement title={ other.title } content={ other.content } />
            <ResumeElement title={ other.title } content={ other.content } />
            <ResumeElement title={ other.title } content={ other.content } />
            <ResumeElement title={ other.title } content={ other.content } />
        </ResumePanel>
    </div>
)