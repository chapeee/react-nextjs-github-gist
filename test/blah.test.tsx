import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GitGist from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <GitGist id="b543da43290b15c514493da86958d913" file=""  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
