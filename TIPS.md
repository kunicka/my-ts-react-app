# Tips

## Use named exports over defaults

```ts
// good
export const myFn;

// bad
export default myfn;
```

https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad?gi=43f193328f39

- you do not need to add export defaultX to evry file
- vscode will provide better import suggestions
- if you rename component it will be ranemd everywhere

## Typing react component

```tsx
// this
const Mycomponent: React.FC = () => {};

// is the same as this
const Mycomponent: React.FC = () => {};
```

## Provide interface for props

- typescript will catch your errors when you provide incorrent values
- you will get editor suggestions what props are avalible

```ts
// export it too
// naming convention is ComponentName+"Props"
export interface MyComponentProps {
  color: string;
}

// you insert it as "1 generic argument" just use < > brackets
const Mycomponent: React.FC<MyComponentProps> = () => {};

const AnotherComponent: React.FC = () => (
  <div>
    // ok
    <Mycomponent color="red" />
    // error prop "color" should be string
    <Mycomponent color={1} />
    // error prop "color" missing
    <Mycomponent />
    // error there is no prop "width" should be string
    <Mycomponent color="red" width={100} />
  </div>
);
```

## `interface` vs `type`

its basically the same... type needs `=` after

```ts
interface MyColorInterfaceProps {
  color: string;
}

type MyColorTypeProps = {
  color: string;
};
```

## common npm scripts

I've added few basic npm scripts in `package.sjon` that are cool for development

```jsonc
    // format sopurce with prettier
    "format": "prettier src --write",
    // check linttypescript with typesctipt compiler (tsc) without emitting output
    "typecheck": "tsc -p tsconfig.json --noEmit",
    // check linting rules with eslint
    "lint": "eslint --ext .ts,.tsx src"
```

run them in console with `npm run lint` or `yarn lint`
