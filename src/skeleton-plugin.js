import { Plugin } from '@webprovisions/platform';

export default class SkeletonPlugin extends Plugin {
  constructor(container, settings) {
    super(container, settings);
    container.register('greeting', 'Hello, I am a plugin!');
  }

  initialize() {
    console.log(
      `Hello world - I'm a plugin and I've just been initialized for the "${this.widget.name}" widget.
From here, I can invoke commands on the widget as well as accessing any registered
values or services through the container.`,
    );

    // Invoke an action on the widget
    this.widget.invoke('start', { phrase: this.container.get('greeting') });
  }

  // destroy() { }
}
