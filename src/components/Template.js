import { useEffect, useState } from "react";
import Hook from "../hooks/Hook";
import Spinner from "./Spinner";

export default function Template({ isTag }) {

    const [tag, settag] = useState("car");

    const { gif, fetchdata, loading } = Hook(isTag, tag);
    useEffect(()=>{
        fetchdata();
    },[])

    return (
        <div className={isTag ? "bg_aqua TemplateDiv" : "bg_green TemplateDiv"}>

            {
                isTag &&
                <h2 className="TemplateHeading">Random {tag} Gif</h2>
            }

            {
                !isTag &&
                <h2 className="TemplateHeading">A Random Gif</h2>
            }

            <div>{
                loading ? <Spinner /> : <img src={gif} />
            }
            </div>

            {
                isTag &&
                <input type="text" onChange={(event) => settag(event.target.value)} name="tagname" />
            }

            <button className="TemplateGenertaebtn" onClick={() => fetchdata()}>Generate Gif</button>

        </div>
    );
}