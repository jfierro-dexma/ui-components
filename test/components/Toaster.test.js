import React from 'react';
import { mount } from 'enzyme';

import Toaster, { ToasterContext, ToastConfig, ToastType } from 'components/Toaster';

describe('<Toaster>', () => {
  it('Should render a toast element when call toast', () => {
    let toastFunction = null;
    const toaster = mount(
      <Toaster>
        <ToasterContext.Consumer>
          { context => toastFunction = context.toast }
        </ToasterContext.Consumer>
      </Toaster>
        );
    toastFunction(new ToastConfig('some alert', ToastType.INFO));
    toaster.update();
    expect(toaster.find('.toast').length).toEqual(1);
  });
  it('Should render nothing if toast not called', () => {
    const toaster = mount(
      <Toaster>
        <ToasterContext.Consumer>
          { () => {} }
        </ToasterContext.Consumer>
      </Toaster>
    );
    expect(toaster.find('.toast').length).toEqual(0);
  });
  it('Should render text passed', () => {
    let toastFunction = null;
    const toaster = mount(
      <Toaster>
        <ToasterContext.Consumer>
          { context => toastFunction = context.toast }
        </ToasterContext.Consumer>
      </Toaster>
    );
    toastFunction(new ToastConfig('expected text', ToastType.ERROR));
    toaster.update();
    expect(toaster.text()).toEqual('expected text');
  });
});
