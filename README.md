<div align="center">
  <a href="https://github.com/kaandesu/pidekit">
    <img src="public/logo.webp" alt="Logo" width="160">
  </a>

<br>

![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white) ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

  <h3 align="center">PideKit UI</h3>
   <!-- DESCRIPTION -->
  <p align="center">
    🚀 Vue3 component library using Radix primitives, seamlessly styled with Tailwind CSS for rapid and flexible UI development. Elevate your Vue projects with accessible and customizable components.
    <br />        
    <br />    
    <a href="https://kaandesu.github.io/PideKit/#/">Live Demo</a>   |
    <a href="https://github.com/kaandesu/PideKit/issues">Report Bug</a>     |
    <a href="https://github.com/kaandesu/PideKit/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>    
    <li><a href="#installation-&-setup">Project Setup</a></li>    
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>    
  </ol>
</details>

<br>

## Installation & Setup

Install the package from npm
```bash
npm i pidekit
```

`usePideKitUI` plugin options & type reference:
```ts
type PluginOptions = {
  showLogs?: boolean
  components?: {
    globallyRegister: boolean
    exclude?: ComponentName[]
  }
  plugins?: {
    globallyRegister?: boolean
    exclude: PluginName[]
  }
  directives?: {
    globallyRegister?: boolean
    exclude: DirectiveName[]
  }
}
```

`globallyRegister`: If **true**, all components/plugins/directives will be **registered globally**. If **false**, you need to import and register them **manually**. 
If it is globally registered you don't need to import it, but for typesafe componant usage it is *recommended* to disable it for the 'componants' and import them manually.

`exclude`: Array of component/plugin/directive names to exclude from global registration (_if true_).

`showLogs`: If **true**, import/exclude/error logs will be shown in the console on initial load.
<hr>

### Vite / VueCLI
```js
import { createApp } from 'vue'
import { usePideKitUI } from 'pidekit'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(
  usePideKitUI({
    showLogs: true, // default: true
    components: { 
      globallyRegister: false, // default: false
      exclude: []
    },
    plugins: {
      globallyRegister: true, // default: true
      exclude: ['customPlugin']
    },
    directives: {  
      globallyRegister: true, // default: true
      exclude: [] 
    },
  })
)
app.mount('#app')

```

### Nuxt3 ([nuxt plugins](https://nuxt.com/docs/guide/directory-structure/plugins))
```js
import { usePideKitUI } from 'pidekit'
export default defineNuxtPlugin({
  name: 'pidekit',
  enforce: 'pre',
  async setup(nuxtApp) {
    nuxtApp.vueApp.use(
      usePideKitUI({
        showLogs: true, // default: true
        components: { 
          globallyRegister: false, // default: false
          exclude: []
        },
        plugins: {
          globallyRegister: true, // default: true
          exclude: []
        },
        directives: {  
          globallyRegister: true, // default: true
          exclude: [] 
        },
      }),
    );
  },
  hooks: {
    'app:created'() {
      const nuxtApp = useNuxtApp();
    },
  },
});
```


## Usage


Import the components you want to use
```js
import { Button, Slider } from 'pidekit'
```


_For more examples, please refer to the [live docs](https://kaandesu.github.io/PideKit/#/)_

<!-- ROADMAP -->

## Roadmap

- [x] Namespaced import for components
- [x] vite & rollup bundle inspection
- [x] Storybook documentation setup
- [x] TailwindCSS setup
- [x] Radix UI setup
- [x] Vitest configuration with coverage
- [x] Vitepress configuration
- [ ] Dialog 
- [ ] Slider
- [ ] Select
- [ ] Checkbox
- [ ] Toggle
- [ ] Toggle Group
- [ ] Radio Group
- [ ] Alert Dialog
- [ ] Dropdown Menu
- [ ] Menubar
- [ ] Navigation Menu
- [ ] Tabs
- [ ] Popover
- [ ] Avatar
- [ ] Collapsible
- [ ] Combobox
- [ ] Context Menu
- [ ] Hover Card
- [ ] Label
- [ ] Pagination
- [ ] Pin Input
- [ ] Aspect Ratio
- [ ] Progress
- [ ] Scroll Area
- [ ] Separator
- [ ] Switch
- [ ] Tags Input
- [ ] Toast
- [ ] Toolbar
- [ ] Tooltip

## Contributing

Contributions to the project is highly appreciated. If you have any suggestions/questions/requests please consider [opening an issue](https://github.com/kaandesu/PideKit/issues/new). If you want to contribute to the project, fixing an open issue is greatly recommended and appreciated. To see the all contribution rules please check the [contribution rules](CONTRIBUTING.md).

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](LICENSE.md) for more information.

<!-- CONTACT -->

## Contact

| Maintainer | E-Mail | Twitter |
| --- | --- | --- |
| [kaandesu](https://github.com/kaandesu) | kaandesu00@gmail.com | - |
| [EgeOnder](https://github.com/EgeOnder) | 40398628+EgeOnder@users.noreply.github.com | [@EgeOnder23](https://twitter.com/EgeOnder23) |

Project Link: [https://github.com/kaandesu/PideKit](https://github.com/kaandesu/PideKit)
