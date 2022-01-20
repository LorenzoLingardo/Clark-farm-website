import React from "react"
import MainOptions from "./MainOptions"

const MainOptionsDescArray = [
    {
        id: 1,
        option: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis. Et netus et malesuada fames ac turpis egestas. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Amet est placerat in egestas erat. Tortor at auctor urna nunc id cursus. Nunc sed augue lacus viverra vitae congue eu. Tincidunt vitae semper quis lectus nulla at volutpat. Commodo sed egestas egestas fringilla phasellus faucibus. Dolor sed viverra ipsum nunc aliquet. Elementum nibh tellus molestie nunc non blandit massa enim nec. Amet nisl suscipit adipiscing bibendum. Ut lectus arcu bibendum at varius. Sit amet nisl purus in mollis nunc sed id semper. Tellus cras adipiscing enim eu turpis egestas pretium. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Pellentesque id nibh tortor id aliquet lectus proin. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Egestas purus viverra accumsan in nisl nisi scelerisque eu."
    },
    {
        id: 2,
        option: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis. Et netus et malesuada fames ac turpis egestas. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Amet est placerat in egestas erat. Tortor at auctor urna nunc id cursus. Nunc sed augue lacus viverra vitae congue eu. Tincidunt vitae semper quis lectus nulla at volutpat. Commodo sed egestas egestas fringilla phasellus faucibus. Dolor sed viverra ipsum nunc aliquet. Elementum nibh tellus molestie nunc non blandit massa enim nec. Amet nisl suscipit adipiscing bibendum. Ut lectus arcu bibendum at varius. Sit amet nisl purus in mollis nunc sed id semper. Tellus cras adipiscing enim eu turpis egestas pretium. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Pellentesque id nibh tortor id aliquet lectus proin. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Egestas purus viverra accumsan in nisl nisi scelerisque eu."
    },
    {
        id: 3,
        option: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus vestibulum mattis. Et netus et malesuada fames ac turpis egestas. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Amet est placerat in egestas erat. Tortor at auctor urna nunc id cursus. Nunc sed augue lacus viverra vitae congue eu. Tincidunt vitae semper quis lectus nulla at volutpat. Commodo sed egestas egestas fringilla phasellus faucibus. Dolor sed viverra ipsum nunc aliquet. Elementum nibh tellus molestie nunc non blandit massa enim nec. Amet nisl suscipit adipiscing bibendum. Ut lectus arcu bibendum at varius. Sit amet nisl purus in mollis nunc sed id semper. Tellus cras adipiscing enim eu turpis egestas pretium. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Pellentesque id nibh tortor id aliquet lectus proin. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Egestas purus viverra accumsan in nisl nisi scelerisque eu."
    }
]

const MainOptionsDesc = () => {
    return (
        <div className="mainOptions grid">
            {
                MainOptionsDescArray.map(content => {
                    return(
                        <div className="mainOptionsContent bg-white">
                            <MainOptions key={content.id} {...content}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MainOptionsDesc;