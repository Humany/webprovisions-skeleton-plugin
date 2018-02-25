import { Plugin } from '@webprovisions/platform';

export default class SkeletonPlugin extends Plugin {
  // constructor(container) {
  //   super(container);
  // }

  initialize() {
    console.log(
      `Hello world - I'm a plugin and I've just been initialized for the "${this.widget.name}" widget.
From here, I can speak to the widget through the controller (this.controller)
as well as accessing any registered services through the container (this.container).`,
      this.controller,
      this.container,
    );
  }

  // destroy() { }
}
