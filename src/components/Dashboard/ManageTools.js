import React from "react";
import useTools from "../../hooks/useTools";

const ManageTools = () => {
  const [tools, setTools] = useTools();

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://glacial-falls-47354.herokuapp.com/tool/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = tools.filter((tool) => tool._id !== id);
          setTools(remaining);
        });
    }
  };
  return (
    <div>
      <h2>Manage Your Tools</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool._id}>
              <td>{tool.name}</td>
              <td>{tool.price}</td>
              <td>{tool.available_quantity}</td>
              <td>
                <button
                  onClick={() => handleDelete(tool._id)}
                  type="button"
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTools;
