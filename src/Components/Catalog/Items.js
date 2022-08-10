import React from "react";
import {Item} from "./Item";
import Placeholder from "./Placeholder";

export function Items({sortCategory, sortPopup, ascDesc, searchResult}) {

    let [data, setData] = React.useState([]);
    const [isLoading, setLoadingStatus] = React.useState(true);

    const sortPopupStatus = {
        '0': 'rating',
        '1': 'price',
        '2': 'name'
    }

    let params =  [
        sortCategory !== 0 ? 'category=' + sortCategory : '',
        'sortBy=' + sortPopupStatus[sortPopup],
        ascDesc ? 'order=asc' : 'order=desc',
        searchResult ? `filter=${searchResult}` : ''
    ]

    const urlGenerator = (params) => {
        params = params.filter(String);
        let urlParams = ''
        for(let i = 0; i<params.length; i++){
            urlParams+= i === 0 ? '?' + params[i] : '&' + params[i];
        }
        return urlParams;
    }

    React.useEffect(() => {
        setLoadingStatus(true);
        fetch(`https://62eea362c1ef25f3da8cadb1.mockapi.io/catalog${urlGenerator(params)}`)
            .then((res) => { return res.json() })
            .then((json) => {
                setData(json);
                setLoadingStatus(false);
            });
        window.scrollTo(0,0);
    }, [sortCategory, sortPopup, ascDesc, searchResult]);

    return (
        <div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [... new Array(8)].map((_, i) => <Placeholder key={i} />)
                        : data.map((item) => <Item key={item.id} data={item}/>)
                }
            </div>
        </div>
    )
}