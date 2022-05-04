import List from "./components/List";
import AddListButton from "./components/AddListButton";

import listSvg from "./assets/img/list.svg";
import DB from './assets/db.json'

function App() {

    return (
    <div className="todo">
        <div className="todo__sidebar">
        <List items={[
            {
                icon: <img src={listSvg} alt="list"/>,
                name: "Все задачи",
            }

        ]}/>
        <List items={[
                {
                    color: "green",
                    name: "Покупки",
                    active: true
                },
                {
                    color: "blue",
                    name: "Фронтенд",

                },
                {
                    color: "pink",
                    name: "Фильмы и сериалы"
                },
            ]}
            isRemovable
        />
        <AddListButton colors={DB.colors}/>
      </div>
    </div>
    );
}

export default App;
