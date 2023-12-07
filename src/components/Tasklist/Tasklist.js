import React from "react";
import "./tasklist.css";
import propTypes from "prop-types";
import plusIcon from "../../img/plus-icon.svg";
import TaskItem from "../TaskItem/TaskItem";

export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTasks,
}) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTasks={onDeleteTasks}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="" />
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}

Tasklist.propTypes = {
  title: propTypes.string.isRequired,
  onAddTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired,
};
