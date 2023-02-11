import {useGlobalContext} from "../context.jsx";
import Loading from "./Loading.jsx";

const ReceptionList=() => {

    const {receptions,loading} = useGlobalContext()
    if(loading){
        return <Loading/>
    }
    return(
        <div>
            <h2>reception list</h2>
        </div>
    )

}

export default ReceptionList