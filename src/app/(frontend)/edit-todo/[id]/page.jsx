import Navbar from "@/components/application/Navbar";
import EditTodo from "@/components/application/todo/EditTodo";
import ShowTodo from "@/components/application/todo/ShowTodo";

const getTodo = async (id) => {
  const data = await fetch(`http://localhost:3000/api/todo/update/${id}`, {
    method: "GET",
  });
  return data.json();
};

const EditTodoPage = async ({ params }) => {
  const { id } = await params;
  const info = await getTodo(id);
  const { title, description } = info.todo;
  return (
    <div>
      <Navbar />
      <EditTodo title={title} description={description} id={id} />
    </div>
  );
};

export default EditTodoPage;
