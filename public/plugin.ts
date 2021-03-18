import { AppMountParameters, CoreSetup, CoreStart, Plugin } from '../../../src/core/public';
import { HelloWorldPluginSetup, HelloWorldPluginStart, AppPluginStartDependencies } from './types';
import { PLUGIN_NAME } from '../common';

export class HelloWorldPlugin implements Plugin<HelloWorldPluginSetup, HelloWorldPluginStart> {
  public setup(core: CoreSetup): HelloWorldPluginSetup {
    // Register an application into the side navigation menu
    core.application.register({
      id: 'helloWorld',
      title: PLUGIN_NAME,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return "Hello World!"
      },
    };
  }

  public start(core: CoreStart): HelloWorldPluginStart {
    return {};
  }

  public stop() {}
}
