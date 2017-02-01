// @flow

import { app, html } from 'hyperapp';

import styles from './styles.css';

type Model = {
  greeting: string,
};

const model: Model = {
  greeting: 'Hello',
};

app({
  model,
  update: {
    moreEmphaticHello: (model: Model): Model => ({
      ...model,
      greeting: model.greeting + 'o',
    }),
  },
  view: (model, msg) => {
    return html`
      <div class=${styles.container}>
        ${model.greeting}
        <button onclick=${msg.moreEmphaticHello}>
          Say ${model.greeting + 'o'}
        </button>
      </div>
    `;
  },
});
