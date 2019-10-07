import React from 'react';
import { storiesOf } from '@storybook/react';

import Toaster, { ToasterContext, ToastType } from 'components/Toaster';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import { Sizes } from 'config/foundation';
import Button from 'components/Button';

storiesOf('Toaster', module)
  .addParameters({
    jest: ['Toaster'],
  })
  .add('basic', () => (
    <Toaster>
      <Grid type="vertical" horizontalPadding verticalPadding>
        <Cell
          medium={2}
          style={{ height: '200px', backgroundColor: 'cornsilk' }}
        >
          <ToasterContext.Consumer>
            {context => (
              <React.Fragment>
                <Button
                  size={Sizes[1]}
                  text="INFO"
                  onClick={() => {
                    context.toast({
                      text:
                        'it woooorks!!! but now I want to try a bigger toast with a long long long long long long text :)',
                      type: ToastType.INFO,
                    });
                  }}
                />
                <Button
                  size={Sizes[1]}
                  text="SUCCESS"
                  onClick={() => {
                    context.toast({
                      text:
                        'Success!!! but now I want to try a bigger toast with a long long long long long long text :)',
                      type: ToastType.SUCCESS,
                    });
                  }}
                />
                <Button
                  size={Sizes[1]}
                  text="WARNING"
                  onClick={() => {
                    context.toast({
                      text:
                        'Warning!!! but now I want to try a bigger toast with a long long long long long long text :)',
                      type: ToastType.WARNING,
                    });
                  }}
                />
                <Button
                  size={Sizes[1]}
                  text="ERROR"
                  onClick={() => {
                    context.toast({
                      text:
                        'ERROR!!! but now I want to try a bigger toast with a long long long long long long text :)',
                      type: ToastType.ERROR,
                    });
                  }}
                />
              </React.Fragment>
            )}
          </ToasterContext.Consumer>
        </Cell>
      </Grid>
    </Toaster>
  ));
