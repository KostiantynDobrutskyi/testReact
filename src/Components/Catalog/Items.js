import React from "react";
import {Item} from "./Item";
import Placeholder from "./Placeholder";

export function Items() {

    let [data, setData] = React.useState([]);
    const [isLoading, setLoadingStatus] = React.useState(true);

    React.useEffect(() => {
        fetch('https://62eea362c1ef25f3da8cadb1.mockapi.io/catalog')
            .then((res) => { return res.json() })
            .then((json) => {
                setData(json);
                setLoadingStatus(false);
            });
    }, [])

    return (
        <div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [... new Array(12)].map((_, i) => <Placeholder key={i} />)
                        : data.map((item) => <Item key={item.id} data={item}/>)
                }
            </div>
        </div>
    )
}