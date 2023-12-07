import React, { useEffect } from "react";

export function GoogleMap(lat, lon){
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
    );
}