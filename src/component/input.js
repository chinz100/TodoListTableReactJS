import React, { Component } from "react";

class Input extends Component {
    constructor(props) {
      super(props);
      const minOffset = 1, maxOffset = 100;
      this.ages = Array.from(new Array(maxOffset), (val, index) => index + minOffset);
    }
    render() {
      const {
        name,
        age,
        nickname,
        handleChangename,
        handleChangeage,
        handleChangenickname,
        handleSubmit,
        handleCancel,
        edititem
      } = this.props
      return (
        <div className="container center">
          <div className="row">
          <form onSubmit={handleSubmit}>
  
            {///name
            }
            <input type="text"
              className="from-contorl text-capitalize"
              placeholder="Add your name"
              style={{ margin: '10px' }}
              value={name}
              onChange={handleChangename}
            ></input>
  
            {///age
            }
     
            <select value={age} onChange={handleChangeage} style={{ margin: '10px' }} className="dropdown">
  
              {
                this.ages.map((age, index) => {
                  return <option key={`age${index}`} value={age}>{age}</option>
                })
              }
            </select>
   
  
            {///nickname
            }
            <input type="text"
              className="from-contorl text-capitalize"
              placeholder="Nickname"
              style={{ margin: '10px' }}
              value={nickname}
              onChange={handleChangenickname}
            ></input>

{
              edititem ?
                <button type="submit" style={{ margin: '10px' }} className="btn btn-warning" >edit item</button> :
                <button type="submit" style={{ margin: '10px' }} className="btn btn-success" >Save item</button>
            } 
            </form>
            <div>

            <button onClick={handleCancel} style={{ margin: '10px' }} className="btn btn-danger" > Cancel </button>
            </div>
            </div>
         
        </div>
      )
    }
  }

  export default Input;