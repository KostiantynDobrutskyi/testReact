import React from "react";
import {Toolbar} from "../Components/Toolbar/Toolbar";
import {Items} from "../Components/Catalog/Items";

function Catalog({searchResult}) {
    const [sortCategory, setSortCategory] = React.useState(0);
    const [sortPopup, setSortPopup] = React.useState(0);
    const [ascDesc, setascDesc] = React.useState(false);

    return (
        <>
            <Toolbar setSortPopup={setSortPopup} setSortCategory={setSortCategory} setascDesc={setascDesc} ascDesc={ascDesc}/>
            <Items sortCategory={sortCategory} sortPopup={sortPopup} ascDesc={ascDesc} searchResult={searchResult} />
        </>
    );
}

export default Catalog;
