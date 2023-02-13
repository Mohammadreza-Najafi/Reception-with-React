import {useGlobalContext} from "../context.jsx";
import Loading from "./Loading.jsx";
import Reception from "./Reception.jsx";

const ReceptionList=() => {

    const {receptions,loading} = useGlobalContext()

    if(loading){
        return <Loading/>
    }

    if(receptions.length < 1){
        return (
            <h2 className="section-title">
                no receptions matched your search criteria
            </h2>
        )
    }
    // console.log(receptions)

    return(
        <section className="section">
            <h2 className="section-title">reception list</h2>
            <div className="cocktails-center">
                {receptions.map((item) =>{
                    return <Reception key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default ReceptionList