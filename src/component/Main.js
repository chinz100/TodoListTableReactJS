import React, { Component } from "react";
import Input from './input';
import List from './list';
import './theme.css';
import uuid from "uuid";




class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuid(),
      name: '',
      age: '',
      nickname: '',
      editItem: false
    }
  }

  handleChangename(e) {
    this.setState({
      name: e.target.value,
    })
  }
  handleChangeage(e) {
    this.setState({
      age: e.target.value,
    })
  }
  handleChangenickname(e) {
    this.setState({
      nickname: e.target.value,
    })
  }


  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      nickname: this.state.nickname,
    }
    console.log(newItem)
    const updateItems = [...this.state.items, newItem]
    this.setState({
      items: updateItems,
      name: '',
      age: '',
      nickname: '',
      id: uuid(),
      editItem: false
    })
  }

  handleDelete(id) {
    const filteritems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filteritems
    })
  }
  handleCancel() {
    this.setState({
      name: '',
      age: '',
      nickname: '',
    })
  }

  handleEdit(id) {
    const filteritems = this.state.items.filter(item => item.id !== id)
    const selectitem = this.state.items.find(item => item.id === id);
    //console.log(selectitem.name)
    this.setState({
      items: filteritems,
      name: selectitem.name,
      age: selectitem.age,
      nickname: selectitem.nickname,
      editItem: true,
      id: id
    })

  }
  render() {
    return (
      <div>


        <List
          items={this.state.items}
          handleDelete={this.handleDelete.bind(this)}
          handleEdit={this.handleEdit.bind(this)}
          name={this.state.name}
          age={this.state.age}
          nickname={this.state.nickname}
        />
        <Input
          item={this.state.item}
          name={this.state.name}
          age={this.state.age}
          nickname={this.state.nickname}
          handleChangename={this.handleChangename.bind(this)}
          handleChangeage={this.handleChangeage.bind(this)}
          handleChangenickname={this.handleChangenickname.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          edititem={this.state.editItem}
          handleCancel={this.handleCancel.bind(this)}
        />
      </div>
    );
  }
}



export default Main;