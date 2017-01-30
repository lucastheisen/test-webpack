import { Component } from '@angular/core';

import '../styles/styles.scss';

@Component({
  selector: 'my-app',
  styles: [`
    my-app {
        background-color: green;
    }
    viewer-cesium,
    my-data {
        float: left;
        height: 100%;
    }
  `],
  template: `
    <header>
      <section>
        <h3>Hello, {{name}}</h3>
      </section>
    </header>
    <main>
      <my-data>Loading data...</my-data>
      <viewer-cesium>WHAT THE HECK?</viewer-cesium>
    </main>
    <footer>
      <span>Brought to you by <a href="pastdev.com">pastdev.com</a></span>
    </footer>
  `,
})
export class AppComponent  { name = 'Angular'; }