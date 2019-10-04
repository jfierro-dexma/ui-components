import React from 'react';
import { storiesOf } from '@storybook/react';

import ToastProvider, { ToastContext } from 'components/ToastProvider';
import Cell from 'components/Cell';
import { Sizes } from 'config/foundation';
import Button from 'components/Button';

storiesOf('ToastProvider', module)
  .addParameters({
    jest: ['ToastProvider'],
  })
  .add('basic', () => (
    <ToastProvider>
      <Cell medium={2}>
        <ToastContext.Consumer>
          {context => (
            <Button
              size={Sizes[1]}
              text="Toast me!"
              onClick={() => {
                context.showToast('it woooorks!!!');
              }}
            />
          )}
        </ToastContext.Consumer>
      </Cell>
    </ToastProvider>
  ));
