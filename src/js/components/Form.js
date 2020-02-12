import React from 'react';
import './../../css/Form.css';
import './../../scss/main.scss';

var BEST_JS_LIBS = [
  { name: 'Backbone.js', url: 'http://backbonejs.org/' },
  { name: 'AngularJS', url: 'https://angularjs.org/' },
  { name: 'jQuery', url: 'http://jquery.com/' },
  { name: 'Prototype', url: 'http://www.prototypejs.org/' },
  { name: 'React', url: 'http://facebook.github.io/react/' },
  { name: 'Ember', url: 'http://emberjs.com/' },
  { name: 'Knockout.js', url: 'http://knockoutjs.com/' },
  { name: 'Dojo', url: 'http://dojotoolkit.org/' },
  { name: 'Mootools', url: 'http://mootools.net/' },
  { name: 'Underscore', url: 'http://underscorejs.org/' },
  { name: 'Lodash', url: 'http://lodash.com/' },
  { name: 'Moment', url: 'http://momentjs.com/' },
  { name: 'Express', url: 'http://expressjs.com/' },
  { name: 'Koa', url: 'http://koajs.com/' }
];

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    var libs = BEST_JS_LIBS;

    return (
      <div>
        <ul>
          {libs.map(lib => (
            <li key={lib.name}>
              <a href={lib.url} target="_blank">
                {// 'Such ' +
                lib.name + ''}
              </a>
            </li>
          ))}
        </ul>

        <h1 className="vedro"> hello world</h1>
        <h1 className="vedro2"> hello world</h1>
        <form>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

let MyForm = Form;
export { MyForm };
