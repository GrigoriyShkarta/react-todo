import classNames from "classnames";

import Badge from "../Badge";

import './List.scss'

const List = ({items, isRemovable, onClick}) => {
    return (
        <ul onClick={onClick} className="list">
            {
                items.map(item => (
                    <li
                        key={item.name}
                        className={classNames(item.className, {'active': item.active})}>
                        <i>
                            {item.icon ? item.icon : <Badge color={item.color}/>}
                        </i>
                        <span>{item.name}</span>
                    </li>
                ))
            }

        </ul>
    );
};

export default List;