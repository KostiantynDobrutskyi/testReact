import {Item} from "./Item";
import data from "../../assets/db.json"

export function Items() {
    return (
        <div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    data.pizzas.map((item) => {
                        return(
                            <Item key={item.id} data={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}