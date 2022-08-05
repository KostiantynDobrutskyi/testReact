import React from "react";
import {Sort} from "./Sort";

export function Toolbar() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    const categories = [{name: 'All'}, {name: 'Meat'}, {name: 'Vegan'}, {name: 'Grill'}, {name: 'Spicy'}, {name: 'Closed'}];

    return (<div className="content__top">
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return (
                        <li
                            onClick={() => { onClickCategory(index) }}
                            className={activeIndex === index ? 'active' : ''}
                            key={index}>
                            {category.name}
                        </li>
                    )
                })}
            </ul>
        </div>
        <Sort/>
    </div>)
}