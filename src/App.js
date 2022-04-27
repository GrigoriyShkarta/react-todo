import List from "./components/List";
import AddList from "./components/AddListButton";

import listSvg from "./assets/img/list.svg";


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
        <AddList/>
      </div>
    </div>
    );
}

export default App;
