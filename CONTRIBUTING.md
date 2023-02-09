# Contributing to `React Hook Dialog`

As the creators and maintainers of this project, we want to ensure that `react-hook-dialog` lives and continues to grow and evolve. We would like to encourage everyone to help and support this library by contributing.

## Code contributions

Here is a quick guide to doing code contributions to the library.

1. Fork and clone the repo to your local machine.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/react-hook-dialog.git
```

2. Create a new branch from `main` with a meaningful name for a new feature or an issue you want to work on.

```bash
git checkout -b your-meaningful-branch-name
```

3. Install packages by running.

```bash
pnpm install
```

4. Test your code in example.

```bash
cd example
pnpm install
pnpm run dev
```

5. Try to write some unit tests to cover as much of your code as possible.

6. Ensure your code lints without errors.

```
pnpm run lint
```

7. Ensure build passes.

```bash
pnpm run build
```

8. Push your branch.

```bash
git push -u origin your-meaningful-branch-name
```

9. Submit a pull request to the upstream react-hook-dialogs repository.

10. Choose a descriptive title and describe your changes briefly.

## Coding style

Please follow the coding style of the project. React Hook Dialog uses eslint and prettier. If possible, enable their respective plugins in your editor to get real-time feedback. The linting can be run manually with the following command: `pnpm run format` and `pnpm run lint`

## License

By contributing your code to the react-hook-dialog GitHub repository, you agree to license your contribution under the MIT license.
