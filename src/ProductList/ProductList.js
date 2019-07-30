import React from "react";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      index: "",
      btnTitle: "Add"
    };

    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  //Add a product to the list
  add() {
    if (this.state.btnTitle === "Add") {
      this.setState({
        products: this.state.products.concat(this.refs.usertext.value),
        btnTitle: "Add"
      });
    } else {
      var array = [...this.state.products];
      // this.refs.usertext.value = this.state.products[this.state.index];
      array.splice(Number(this.state.index), 1, this.refs.usertext.value);
      console.log(
        "New Array====",
        array.splice(Number(this.state.index), 1, this.refs.usertext.value)
      );
      this.setState({
        products: array,
        btnTitle: "Add"
      });
    }
    this.refs.usertext.value = "";
  }

  //Edit an existing product of the list
  edit(index) {
    this.refs.usertext.value = this.state.products[index];
    this.setState({
      index: index,
      btnTitle: "Save"
    });
  }

  //Delete a product from the list
  delete(index) {
    var array = [...this.state.products];
    if (index != -1) {
      array.splice(index, 1);
      this.setState({ products: array });
    }
  }

  render() {
    return (
      <div>
        <div className="backColor">
          <div className="head"> Products </div>
          <div className="form-group">
            <input
              value={this.state.inputValue}
              type="text"
              placeholder="Product"
              ref="usertext"
            />
            <button onClick={this.add} className="button1">
              {this.state.btnTitle}
            </button>
          </div>
          <div className="divRes">
            {this.state.products.length > 0 &&
              this.state.products.map((val, index) => {
                return (
                  <React.Fragment>
                    <div className="res">{val}</div>
                    <div className="res2">
                      <button onClick={() => this.edit(index)}>Edit</button>
                      <button onClick={() => this.delete(index)}>Delete</button>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
