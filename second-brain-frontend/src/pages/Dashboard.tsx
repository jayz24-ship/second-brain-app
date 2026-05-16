import { Button } from "../components/ui/Button";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";



export function Dashboard() {
    return (
       <div>
        
         <div>
            <div className="flex font-thin justify-end">
                <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>} />
                <Button variant="primary" text="Create Content" startIcon={<PlusIcon />} />
            </div>
        </div>
       </div>


    )
}