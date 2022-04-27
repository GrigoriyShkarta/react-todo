import List from "../List";

import add from "../../assets/img/add.svg";

import './AddList.scss'

const AddList = () => {
    return (
        <div className="add-list">
            <List
                items={[
                    {
                        className: "list__add-button",
                        icon: <img src={add} alt="add"/>,
                        name: "Добавить список"
                    }
                ]}
            />
            <div className="add-list__popup">
                <h1>123</h1>
            </div>
        </div>

    );
};

export default AddList;