import React, { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss";

function List() {
  const [tarefas, setTarefas] = useState();

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTarefas();
        }}
      >
        {" "}
        Estudos do dia{" "}
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
