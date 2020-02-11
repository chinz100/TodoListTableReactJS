import React, { Component } from "react";

class Data extends Component {
    render() {
      const { name, age, nickname, handleDelete, handleEdit } = this.props;
      return (
  
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{nickname}</td>
          <td>  <div className="todo-icon">
            <span className="mx-2 text-seccess">
              <button onClick={handleEdit}>edit</button>
            </span>
            <span className="mx-2 text-danger">
              <button onClick={handleDelete}>delete</button>
            </span>
          </div>
          </td>
        </tr>
  
      );
    }
  }

  export default Data;