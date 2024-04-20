import GButton from './src/main.vue';

GButton.install = (app, options) => {
  app.component('g-button', GButton)
}

export default GButton