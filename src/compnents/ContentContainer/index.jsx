import { useEffect, useState } from "react"
import FormattedDate from "../FormattedDate"
import Picture from "../Picture"
import TitleLink from "../TitleLink"
import Material from "../Material"
import Description from "../Description"
import Tech from "../Tech"

const ContentContainer =({
    onInitial,
    title: sectiontitle = "",
    data = [],
}) =>{
    const [isMouseEnter, setIsMouseEnter] = useState({})

    const Section_ID =`${sectiontitle}-section`

    useEffect(() => {
        onInitial(Section_ID)
    }, [])

    return (
                <div id={Section_ID} className="scroll-m-14">
                    <div className='text-primaryAccent font-medium px-2'>{sectiontitle}</div>
                    {
                        data.map(({
                                date = "",
                                title = "",
                                link = "",
                                materials = [],
                                descriptions = [],
                                skills= [],
                                picture = ""
                            } ,index) => (
                            <div 
                                key={`${Section_ID}-${index}-${title.replaceAll(" ","")}`}
                                className={`grid grid-cols-[3fr_7fr] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${Section_ID}-${index}`] ? "bg-primaryBase" : ""}`}
                                onMouseEnter= {() => setIsMouseEnter({ [`${Section_ID}-${index}`] : true })}
                                onMouseLeave={() => setIsMouseEnter({ [`${Section_ID}-${index}`] : false })}
                            >
                                <div>
                                    <FormattedDate isHighLight={isMouseEnter[`${Section_ID}-${index}`]}>{date}</FormattedDate>
                                    <Picture picture={picture} title={title} />
                                </div>
                                <div className="grid gap-y-4">
                                    <TitleLink isHighLight={isMouseEnter[`${Section_ID}-${index}`]} title={title} link={link} />
                                    {
                                        materials.length > 0 ?
                                            <div className="flex gap-4 text-xl item-center">
                                                {
                                                    materials.map((e, i) =>(
                                                        <Material key={`${e}-material-${i}`} link= {e.link} icon= {e.type} />
                                                    ))
                                                }
                                            </div>
                                            :null
                                    }
                                    {
                                        descriptions.map((e ,i) => (
                                            <Description key={`${e}-description-${i}`} description= {e}/>
                                        ))
                                    }
                                    {
                                        skills.map((e, i)=> (
                                            <Tech key={`${e}-skill-${i}`} isHighLight={isMouseEnter[`${Section_ID}-${index}`]} data={e} />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                
                </div>
            )
}

export default ContentContainer