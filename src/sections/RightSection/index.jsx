import About from "../About"
import { data as experienceData } from "../../contents/experience"
import ContentContainer from "../../compnents/ContentContainer"
import { data as projectData } from "../../contents/Project"
import Footer from "../Footer"

const RightSection = ({ onInitial }) => {
    return (
        <div className="grid gap-y-40 px-5">
            <About 
                onInitial={onInitial}
                title="About"
            />
            <ContentContainer 
                onInitial={onInitial}
                title="Experience"
                data={experienceData}
            />
             <ContentContainer 
                onInitial={onInitial}
                title="Project"
                data={projectData}
            />
            <Footer />
        </div>
    )
}
export default RightSection