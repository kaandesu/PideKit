# How to contribute

### ❗ **Common mistakes**

- Opening a pull request without a description or a proper name is not fun for the reviewer, so try to explain your change as much as possible either by text or a code snippet.
- Adding new dependencies or modifying the `package.json` will most likely be not accepted or will be accepted in a long time since adding a new dependency to the codebase can be tricky.
- This project uses `pnpm`, so please try to respect the choice and try to use it.

### 📝 Useful scripts

These are the useful scripts that you can use while developing. You can find them in the `package.json` file. You can run them by using `npm run <script_name>`.

| Script                | Description                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| `dev`                 | Start the development environment using Vite                                       |
| `build`               | Test and build the app, library, and `live-demo`                                   |
| `build:lib`           | Test and build the library                                                         |
| `build:live-demo`     | Build the `live-demo`                                                              |
| `coverage:web`        | Serve the test coverage report to localhost                                        |
| `generate:types`      | Generate declaration files for the project using `vue-tsc`                         |
| `changeset`           | Adds a changelog to the project after a change                                     |
| `test`                | Run the tests once using Vitest                                                    |
| `test:watch`          | Watch the tests with Vitest                                                        |
| `test:coverage`       | Create a coverage report for the tests using Vitest                                |
| `clean`               | Remove `./dist`, `./live-demo`, `./coverage`, and `./storybook-static` directories |
| `build:pages`         | Build documentation, `live-demo`, and Storybook                                    |
| `build:live-demo`     | Build the `live-demo` using Vite and output to `./docs/.vitepress/dist/live-demo`  |
| `docs:dev`            | Start the Vitepress development server for documentation                           |
| `docs:build`          | Build documentation using Vitepress                                                |
| `docs:preview`        | Preview documentation using Vitepress                                              |
| `storybook`           | Start Storybook development server                                                 |
| `build-storybook`     | Build Storybook and output to `./docs/.vitepress/dist/storybook`                   |
| `rollup:inspect`      | Serve Rollup inspection results                                                    |
| `vite:inspect`        | Serve Vite inspection results                                                      |
| `unbuild`             | Unbuild the project                                                                |
| `generate:namespaced` | Generate namespaced import index file                                              |
| `lint:check`          | Checks the linting of the project with ESLint                                      |
| `lint:fix`            | Fixes the fixable lint issues with ESLint                                          |
| `format:check`        | Checks the formatting of the project with Prettier                                 |
| `format:fix`          | Fixes the fixable formatting issues with Prettier                                  |

When pushing your changes, always include a **changeset** file. You can do this by running the `changeset` script. It will ask you a few questions and then create a file for you. You can read more about it [here](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md).

### 🐛 **Did you find a bug?**

Ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/kaandesu/PideKit/issues). If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/kaandesu/PideKit/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible demonstrating the expected behavior that is not occurring.

### 💡 **Do you want to add a new feature or change an existing one?**

[Open a GitHub issue](https://github.com/kaandesu/PideKit/issues/new) stating your feature request clearly. We can discuss it on the issue thread, then you can implement it! 🎉

### ✨ **Did you write a change that fixes a bug?**

Open a new GitHub pull request with the patch.

1. Fork the repository
2. Modify the code and make your amazing change
3. Create your feature branch
   ```sh
   git checkout -b feature/<your_feature>
   ```
4. **IMPORTANT!** If your code contains minor or a major change that needs to be stated on the changelog, please run the command below and write down what you have changed in a brief manner.
   ```sh
   npm run changeset
   ```
5. Add your changes
   ```sh
   git add .
   ```
6. Commit your changes _(please respect the commit message standards)_
   ```sh
   git commit -m "feat: added amazing things!"
   ```
7. Push your changes
   ```sh
   git push -u origin feature/<your_feature>
   ```
8. Open a pull request from your branch
   - State your change in the title according to the [conventional commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/).
   - Please respect the pull request template while writing your PR description.

Open source software is beautiful, all of your contributions are much appreciated

Thanks!
