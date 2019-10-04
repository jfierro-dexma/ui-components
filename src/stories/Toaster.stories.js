import React from 'react';
import { storiesOf } from '@storybook/react';

import Toaster, { ToasterContext } from 'components/Toaster';
import Cell from 'components/Cell';
import { Sizes } from 'config/foundation';
import Button from 'components/Button';

storiesOf('Toaster', module)
  .addParameters({
    jest: ['Toaster'],
  })
  .add('basic', () => (
    <Toaster>
      <Cell medium={2}>
        <ToasterContext.Consumer>
          {context => (
            <Button
              size={Sizes[1]}
              text="Toast me!"
              onClick={() => {
                context.toast('it woooorks!!!');
              }}
            />
          )}
        </ToasterContext.Consumer>
      </Cell>
    </Toaster>
  ));
