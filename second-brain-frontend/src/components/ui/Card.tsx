import PlusIcon from "../../icons/PlusIcon"
import ShareIcon from "../../icons/ShareIcon"

interface CardProps{
    title:string,
    link:string,
    type:"twitter"| "youtube"
}


export function Card({title,link,type}:CardProps){
    return (
        <div>
            <div className="bg-white shadow-md border-gray-200 rounded-md min-h-48 max-h-72 ">
                <div className="flex justify-between">
                    <div>
                        <div>
                            <ShareIcon/>
                        </div>
                        {title}
                    </div>
                    <div>
                        <div>
                           <a href={link}>
                            <ShareIcon/>
                           </a>
                        </div>
                        <div>
                            <PlusIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}