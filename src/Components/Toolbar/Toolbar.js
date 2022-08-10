import React from "react";
import {Sort} from "./Sort";
import {SortCategory} from "./SortCategory";

export function Toolbar({setSortCategory, setSortPopup, setascDesc, ascDesc}) {
    return (<div className="content__top">
        <SortCategory setSortCategory={setSortCategory}/>
        <Sort setSortPopup={setSortPopup} setascDesc={setascDesc} ascDesc={ascDesc}/>
    </div>)
}