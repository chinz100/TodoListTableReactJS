import React, { Component } from "react";
import Data from './data';

class List extends Component {
  render() {
    var { items, name, age, nickname, handleDelete, handleEdit } = this.props
    return (


      <div className="container center" style={{ marginTop: '50px' }}>
        <h2>List Item</h2>
        <p>Add value in form ( Edit or delete in table).</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Nickname</th>
              <th>Editor</th>
            </tr>
          </thead>

          <tbody>
            {
              items.map(item => {
                return <Data
                  key={item.id}
                  name={item.name}
                  age={item.age}
                  nickname={item.nickname}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                />
              })
            }
            <tr>
              <td>{name}</td>
              <td>{age}</td>
              <td>{nickname}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

export default List;