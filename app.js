class PocForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        postbackUrl: ""
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      console.log("e", e.target.value);
      this.setState({ postbackUrl: e.target.value });
    }
  
    render() {
      return (
        <div>
          <div>
            <label>form post</label>
            <input type="text" onChange={this.handleChange} />
          </div>
          <form action={this.state.postbackUrl} method="post">
            <div>
              <label>Account name</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Credit Card number</label>
              <input type="text" name="cardnumber" />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      );
    }
  }
  