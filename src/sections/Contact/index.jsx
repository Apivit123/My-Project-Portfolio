import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-2xl'>
            <a href="https://github.com/Apivit123">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/apiwich-lee-48b412295?fbclid=IwZXh0bgNhZW0CMTAAAR0EdQcWR_KVu6GpenKT5IrHsE3O-MpGlGbZIxjLkBhhvlaWwERQB3okFNU_aem_AbBbMakaLmq38QWI2xyPUVSIG5icgoEXcQUWCOwqYy9s7FLZ2duUvtApZKjawg3p261I9-v52xtQ0wzdHimacD4W">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin} />
            </a>
        </div>
    )
}

export default Contact