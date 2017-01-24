import { Component } from '@angular/core';

import '../styles/styles.scss';

@Component({
  selector: 'my-app',
  template: `
    <section>
      <h1>Hello, {{name}}</h1>
      <my-data>Loading data...</my-data>
    </section>
  `,
})
export class AppComponent  { name = 'Angular'; }