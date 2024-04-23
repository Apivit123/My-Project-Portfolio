import { faGithub } from "@fortawesome/free-brands-svg-icons";
import picPj1 from '../assets/login_Apw.png'
import picPj2 from '../assets/Portfolio_Apw.png'

export const data =[
    {
        date:"2023",
        title:"login",
        link:"",
        materials:[
            {type: faGithub, link:"https://github.com/Apivit123/login-project.git"}
        ],
        descriptions:[
            "A simple and minimalist login for developers built with html and css"
        ],
        skills:[
            ["Html", "Css"]
        ],
        picture: picPj1
    },

    {
        date:"2024",
        title:"Portfolio",
        link:"",
        materials:[
            {type: faGithub, link:"https://github.com/Apivit123/My-Project-Portfolio.git"}
        ],
        descriptions:[
            "A simple and minimalist portfolio for developers built with React and TailwindCSS"
        ],
        skills:[
            ["React", "Tailwinds"]
        ],
        picture: picPj2
    }
]