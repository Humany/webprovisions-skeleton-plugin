import settings from './settings';
import SkeletonPlugin from './skeleton-plugin';

const humany = window.Humany;
if (!humany) {
  console.error('No Humany installation is available on the page.');
}

humany.configure(settings.implementationName, (config) => {
  // Register the plugin for the specified widget:
  config(settings.widgetName).plugin(SkeletonPlugin);
});