
class App extends React.Component {
  render() {
    return(
      <>
      <h1>This TEXT from Counter</h1>
      <p>555</p>
      <ShoppingList name="Mobile App"/>
      </>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
