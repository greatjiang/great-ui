import GButton from './button';

const components = {
  GButton
}

const install = (app, options) => {
  if (install.installed) return;

  Object.keys(components).forEach(key => {
    app.component(components[key].name, components[key]);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components,
}

export default API

export { GButton }
