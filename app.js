class PocForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postbackUrl: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ postbackUrl: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <label>form post </label>
          <input type="text" onChange={this.handleChange} /> E.g.:
          https://www.google.com
          <br />
          <br />
        </div>
        <form action={this.state.postbackUrl} method="post">
          <div>
            <label>Account name </label>
            <input type="text" name="name" />
            <br />
            <br />
          </div>
          <div>
            <label>Credit Card number </label>
            <input type="text" name="cardnumber" />
            <br />
            <br />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
