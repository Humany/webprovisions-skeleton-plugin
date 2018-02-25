import SkeletonPlugin from './skeleton-plugin';

const Humany = window.Humany;

// The 'webprovisions' runtime is only available on implementations
// that have this feature enabled.
const webprovisions = Humany.webprovisions;
if (!webprovisions) {
  console.error('Webprovisions is not enabled for the current Humany implementation.');
}

// Get the implementation which you want to configure.
const implementation = webprovisions.getImplementation('default');

implementation.configure((config) => {
  // Register the Plugin in the types registry for the current environment.
  config.types.register('webprovisions-skeleton-plugin', SkeletonPlugin);

  // Enable the plugin on all widgets.
  config.addPlugin('webprovisions-skeleton-plugin');

  // ...or for a specific widget only.
  // config('dummy-bot').addPlugin('webprovisions-skeleton-plugin');
});
