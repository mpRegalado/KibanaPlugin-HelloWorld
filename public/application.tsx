import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters, CoreStart } from '../../../src/core/public';
import { AppPluginStartDependencies } from './types';
import { HelloWorldApp } from './components/app';

export const renderApp = (
  { notifications, http }: CoreStart,
  { navigation }: AppPluginStartDependencies,
  { appBasePath, element, history }: AppMountParameters
) => {
  ReactDOM.render(
    <HelloWorldApp
      basename={appBasePath}
      notifications={notifications}
      http={http}
      navigation={navigation}
      history={history}
    />,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
