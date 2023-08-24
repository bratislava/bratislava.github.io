# Components

This is a basic component structure:
```tsx
import React from 'react'

type ExampleProps = {}

/**
 * Figma: https://www.figma.com/file/...
 */
const Example = ({}: ExampleProps) => {
  return (
    <div></div>
  )
}

export default Example
```

 * ✅ Add TSDoc if needed.
 * ✅ Add Figma link if suitable.
 * ✅ Prefer types to interfaces for props (consistency).
 * ❌ Don't prefix interfaces with `I`. ([source](https://stackoverflow.com/a/41967120))
 * ❌ Don't create a `index.ts` grouping the components. In the ES module system, it adds an unnecessary step and behaviorally leads to creating fewer components (there should be more of them!). ([example](https://github.com/bratislava/kupaliska-starz-fe/blob/master/src/components/index.ts))


## Using 3rd party libraries
When using a 3rd party library component that is used on a multiple places wrap the component in your own with project specific prefix (e.g. M for Marianum), decide for the prefix early on.

* ✅ Extend the original types and omit properties that your component provides, or you don't want to implement to avoid conflicts.
```tsx
// We don't want to support `acceptArrays`.
type MThirdPartyComponentProps = Omit<ComponentProps<typeof ThirdPartyComponent>, 'apiKey' | 'acceptArrays'>

const MThirdPartyComponent = ({...props}: MThirdPartyComponentProps) => {
  return (
    <MThirdPartyComponent apiKey={...} {...props} />
  )
}
```
* ✅ Include the styles that override default behavior in the global CSS but place the file in the same directory as the component ([example](https://github.com/bratislava/city-library/blob/b95212904ebf59dac58ff78b4da6353057453293/next/modules/common/MDatePicker/MDatePicker.css)). Next component level CSS doesn't suit this purpose ([documentation](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)).
* ✅ Wrap and re-export external components ([source](https://alexkondov.com/tao-of-react/#wrap-external-components)).
* ❌ Don't put the styles in the global CSS file directly. ([example](https://github.com/bratislava/marianum/blob/88050a10faab8bde12d6a66676c3da35a65928ef/next/styles/globals.css#L158))


## Passing styles
If creating a component, provide an ability to override the default classnames via props.

* ✅ Provide an ability to override classes on multiple levels (e.g. container, text). 
* ✅ Always use [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) for passed classes to correctly resolve conflicts.
* ❌ Never use [classnames](https://www.npmjs.com/package/classnames) for passed classes.
```tsx
import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

type ComponentWithStylesProps = {
  className?: string;
  textClassname?: string;
}

const ComponentWithStyles = ({className, textClassname}: ComponentWithStylesProps) => {
  const containerClasses = cx('...', {...});

  return <div className={twMerge(containerClasses, className)}>
    <h1 className={textClassname}></h1>
  </div>
}

```


## Use controlled state
If implementing a component that accepts a value from parent and is able to change it use `useControlledState` from `@react-stately/utils`. It also allows you to skip value from parent and provide a default value if needed. [This article](https://medium.com/quick-code/writing-ui-components-with-optionally-controllable-state-86e396a6f1ec) explains why it's important to use controlled state.

For more advanced use cases use state utilities from [react-stately](https://react-spectrum.adobe.com/react-stately/index.html) (e.g. `useToggleState`).

Examples: 
* ✅ The [component](https://github.com/bratislava/city-library/blob/b95212904ebf59dac58ff78b4da6353057453293/next/components/Molecules/EventFilters.tsx#L24) correctly handles inputs and outputs and it's changes of the state.
* ❌ The [component](https://github.com/bratislava/city-library/blob/b95212904ebf59dac58ff78b4da6353057453293/next/components/ui/Select/Select.tsx) only reacts to its own value change if it's propagated from the parent on change event. However, if the change event is missing the `<select>` displays a wrong option.
* ❌ The [component](https://github.com/bratislava/marianum/blob/88050a10faab8bde12d6a66676c3da35a65928ef/next/components/atoms/Select.tsx) only allows the parent set the value as default, if the value changes after the initialization it is not possible to propagate it from the parent.


## Use generated ids
Although often needed `id`s are not important from the semantic or accessibility standpoint, the component's "user" must not be forced provide these (they can be generated).

* ✅ Use `useId` hook from React to generate an `id`.
* ✅ Make `id` optional in the component props.
```tsx
import React, { useId } from 'react'

type ComponentWithIdProps = { id?: string }

const ComponentWithId = ({ id }: ComponentWithIdProps) => {
  const generatedId = useId()
  const generatedOrProvidedId = id ?? generatedId

  return <div id={generatedOrProvidedId}></div>
}
```
* ✅ Use the id to generate ids for mapped elements.
```tsx
import React, { useId } from 'react'

type ComponentWithIdProps = { id?: string; list: any[] }

const ComponentWithId = ({ id, list }: ComponentWithIdProps) => {
  const generatedId = useId()
  const generatedOrProvidedId = id ?? generatedId

  return (
    <>
      {list.map((item, index) => {
        const labelId = `${generatedOrProvidedId}-item-label-${index}`
        
        return (
          <>
            <label id={labelId} />
            <div aria-labelledby={labelId} />
          </>
        )
      })}
    </>
  )
}

```
