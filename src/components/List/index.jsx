import classNames from "classnames";

import './List.scss'

const List = ({items, isRemovable}) => {
    return (
        <ul className="list">
            {
                items.map(item => (
                    <li
                        key={item.name}
                        className={classNames(item.className, {'active': item.active})}>
                        <i>
                            {item.icon ? item.icon : <i className={`badge badge--${item.color}`}/>}
                        </i>
                        <span>{item.name}</span>
                    </li>
                ))
            }

        </ul>
    );
};

export default List;