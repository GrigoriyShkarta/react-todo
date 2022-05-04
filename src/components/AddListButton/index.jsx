import {useState} from "react";

import List from "../List";
import Badge from "../Badge";

import add from "../../assets/img/add.svg";
import close from "../../assets/img/close.svg"

import './AddListButton.scss'


const AddListButton = ({colors}) => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [selectedColor, selectColor] = useState(colors[0].id)

    return (
        <div className="add-list">
            <List
                onClick={() => setVisiblePopup(true)}
                items={[
                    {
                        className: "list__add-button",
                        icon: <img src={add} alt="add"/>,
                        name: "Добавить список"
                    }
                ]}
            />
            {visiblePopup && (
                <div className="add-list__popup">
                    <img
                        onClick={() => setVisiblePopup(false)}
                        className="add-list__popup-close-btn"
                        src={close}
                        alt="close"/>
                    <input className="field" type="text" placeholder="Название папки"/>
                    <div className="add-list__popup-colors">
                        {colors.map(color => (
                            <Badge
                                onClick = {() => selectColor(color.id)}
                                key={color.id}
                                color={color.name}
                                className={selectedColor === color.id && 'active'}
                            />
                        ))}
                    </div>
                    <button className="button">Добавить</button>
                </div>
            )}
        </div>

    );
};

export default AddListButton;