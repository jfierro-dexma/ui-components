import React from 'react';
import { mount } from 'enzyme';

import Toaster, { ToasterContext } from 'components/Toaster';

describe('<Toaster>', () => {
  it('Should render a toast element when call toast', () => {
    const toaster = mount(
      <Toaster>
        <ToasterContext.Consumer>
          { context => context.toast('some alert') }
        </ToasterContext.Consumer>
      </Toaster>
        );
    expect(toaster.find('.toast').length).toEqual(1);
  });
  it('Should render nothing if toast not called', () => {
    const toaster = mount(
      <Toaster>
        <ToasterContext.Consumer>
          { context => {} }
        </ToasterContext.Consumer>
      </Toaster>
    );
    expect(toaster.find('.toast').length).toEqual(0);
  });
  it('Should render text passed', () => {
    const toaster = mount(
      <Toaster>
        <ToasterContext.Consumer>
          { context => context.toast('expected text') }
        </ToasterContext.Consumer>
      </Toaster>
    );
    expect(toaster.text()).toEqual('expected text');
  });
});
