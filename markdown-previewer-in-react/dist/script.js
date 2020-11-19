class MarkDownPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: placeHolder,
      output: '',
      autocompile: false };


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value });

  }

  render() {
    return (
      React.createElement("div", { id: "app-wrapper", class: "row" },
      React.createElement(Editor, { value: this.state.input, onChange: this.handleChange, class: "row-sm-6" }),
      React.createElement(Preview, { text: this.state.input, class: "row-sm-6" })));


  }}


const Editor = props => {
  return (
    React.createElement("div", { id: "Editor-container" },
    React.createElement("h1", null, "Markdown Editor"),
    React.createElement("textarea", { id: "editor", type: "text", placeholder: placeHolder, value: props.input, onChange: props.onChange })));


};
const Preview = props => {
  return (
    React.createElement("div", { id: "preview-container" },
    React.createElement("h1", null, "Preview"),
    React.createElement("div", { id: "preview-text" },
    React.createElement("div", { dangerouslySetInnerHTML: { __html: props.text } }))));





};
const placeHolder = `
<h1>This text is H1 sized!</h1>
  <hr>
<h2>This text is H2 sized!</h2>
  <hr>
<h3>This text is H3 sized!</h3>
  <hr>
<ul><strong>Here is an unordered list!</strong>
  <li>Here is my first list item</li>
  <li>Here is my second List Item</li>
</ul>
  <hr>
<ol><strong>Here is an ordered list!</strong>
  <li>List Item #1</li>
  <li>List Item #2</li>
</ol>
  <hr>
<p> You can also make text <strong>BOLD!</strong></p>
<p>Or even <em>emphasized</em></p>`;



ReactDOM.render(React.createElement(MarkDownPreview, null), document.getElementById("app"));