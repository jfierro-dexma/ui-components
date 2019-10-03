import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from 'components/Title';
import ToastProvider from 'components/ToastProvider';
import Grid from 'components/Grid';
import Cell from 'components/Cell';

storiesOf('ToastProvider', module)
  .addParameters({
    jest: ['ToastProvider'],
  })
  .add('basic', () => (
    <ToastProvider text="Some alert!">
      <Grid type="vertical" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Basic Toast:" line />
        </Cell>
      </Grid>
    </ToastProvider>
  ));
