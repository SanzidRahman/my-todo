import TodoCard from "./TodoCard";

const getTodo = async () => {
  const data = await fetch("http://localhost:3000/api/todo", {
    method: "GET",
  });
  return data.json();
};

const ShowTodo = async () => {
  const info = await getTodo();
  return (
    <div>
      {info.todo.map((singleTodo) => (
        <TodoCard key={singleTodo._id} todo={singleTodo} />
      ))}
    </div>
  );
};

export default ShowTodo;
