# SVG setup

SVG files are not supported by default. We use [SVGR](https://react-svgr.com/) to convert SVG files to React components.
We also disable `removeViewBox` plugin to be able to resize icons. (It's enabled by default by SVGO, but it prevents icon resizing, see [issue](https://github.com/svg/svgo/issues/1128))

So far, we are using `@svgr/webpack` version `6.5.1`. Following setup will not work witch newer versions.

This version however does not work in server components.

Note: We sould like to use newsest version of SVGR soon.

## Install SVGR

Install `@svgr/webpack` as dev dependency:

```bash copy
yarn add -D @svgr/webpack@6.5.1
```

## Configure Webpack

Add the following setup to your `next.config.js`:

```js copy
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // ...
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'removeViewBox',
                active: false,
              },
            ],
          },
        },
      },
    })
    return config
  },
  //...
}
```

## Add declarations

Add declaration file (and include it in tsconfig):

```ts filename="index.d.ts" copy
declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const content: string

  export { ReactComponent }
  export default content
}
```

## How to use .svg files

1. Export the .svg file from figma or you other provided .svg file.
2. Place the file into assets.
3. Change all instance of (stroke) color to `currentColor` in the .svg file, so the icon can be colored by css.
4. Export the icon in barrel file as `export { default as YourNewIcon } from './icon-name.svg'`. Make sure to follow naming convention from existing file.
5. Import the icon in your component and use it as a component `<YourNewIcon />`.
