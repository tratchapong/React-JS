class Haha extends React.Component {
	constructor() {
		super();
		this.text = 'HAHAHA'
		this.myStyle = { border : '1px dashed lime' }
  }	
	render() {
		return (
			<h1 style={ {...this.myStyle, background: 'coral'} }> {this.text} </h1>
		)
	}
}

class App extends React.Component {
  constructor() {
    super();
    this.message = 'Codecamp';
  }
  render() {
    return (
			<div>
			<h1>Hello {this.message}</h1>
			<Haha />
			</div>
		);
  }
}
ReactDOM.render(<App/>, window.root);