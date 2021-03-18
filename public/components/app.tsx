import React from 'react';
import { BrowserRouter, Router, RouteComponentProps, Switch, Route, Redirect } from 'react-router-dom';
import Greeting from './greeting'

import {
  EuiButton,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
  EuiText,
} from '@elastic/eui';

import { CoreStart } from '../../../../src/core/public';
import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';

import { PLUGIN_ID } from '../../common';

interface HelloWorldAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  http: CoreStart['http'];
  navigation: NavigationPublicPluginStart;
  history: RouteComponentProps['history'];
}

export const HelloWorldApp = ({ basename, notifications, http, navigation, history }: HelloWorldAppDeps) => {
  const onClickHandler = () => {
    notifications.toasts.addSuccess("Bye!");
  };
  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return (
    <Router history={history}>
      <BrowserRouter basename={basename}>
          <>
            <navigation.ui.TopNavMenu
              appName={PLUGIN_ID}
              showSearchBar={true}
              useDefaultBehaviors={true}
            />
            <EuiPage restrictWidth="1000px">
              <EuiPageBody>
                <EuiPageHeader>
                  <EuiTitle size="l">
                    <h1>
                      Hello World
                    </h1>
                  </EuiTitle>
                </EuiPageHeader>
                <Switch>
                  <Route path="/hello"><Greeting
                    title="Welcome"
                    text="Happy to see you"
                    buttonText="Bye"
                    link="/bye"
                    toasts={notifications.toasts}
                  /></Route>
                  <Route path="/bye"><Greeting
                    title="Goodbye!"
                    text="Hope to see you again!"
                    buttonText="Hello"
                    link="/hello"
                    toasts={notifications.toasts}
                  /></Route>
                  <Redirect to="/hello" />
                </Switch>                
              </EuiPageBody>
            </EuiPage>
          </>
      </BrowserRouter>
    </Router>
  );
};
