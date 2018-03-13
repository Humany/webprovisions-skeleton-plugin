import settings from './settings';
import SkeletonPlugin from './skeleton-plugin';

const humany = window.Humany;
if (!humany) {
  console.error('No Humany installation is available on the page.');
}

humany.configure(settings.implementationName, (config) => {
  // Register the plugin in the types registry for the current environment:
  config.types.register('@my/skeleton-plugin', SkeletonPlugin);
  // Enable the plugin for the specified widget:
  config(settings.widgetName).usePlugin('@my/skeleton-plugin');
});