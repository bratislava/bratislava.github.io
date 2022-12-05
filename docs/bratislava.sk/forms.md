# Forms

> 🔧 This section, as well as the feature itself, is a work-in-progress.

We are using [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) with our custom form components as widgets to build our form system.

We use [AJV](https://ajv.js.org/) for validation (and so does react-jsonschema-form).

Read more about [JSON Schema](https://json-schema.org/).

## Basic ‘architecture’ of frontend eForms:

- base path for code is /next in [codebase](https://github.com/bratislava/bratislava.sk)
- all form definitions, files and configs are exported from /backed/forms/index.ts
- everything is rendered in page/\[eform\].tsx - the eform param should match the key exported from backend/forms/index
- all [rjsf](https://github.com/rjsf-team/react-jsonschema-form) config (i.e. custom components to be rendered as input fields) are linked & configured in components/forms/ThemedForm.tsx
- all the logic between the steps (storing & persisting state, validating & submitting) should concentrate in useFormStepper hook in utils/forms.ts
- all the forms are submited to pages/api/forms/\[id\]/submit.ts - where id matches the key exported from backend/forms/index . Validation (json & xml), transformation, and forwarding to our forms BE service lives in here
- any supporting functionality should be ‘linked’ to ine of these entry points

## Developing custom form components

react-jsonschema-form let's you [extend the theme](https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-themes/), as well as specify [custom widgets](https://react-jsonschema-form.readthedocs.io/en/latest/usage/widgets/) and [templates](https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-templates/).

Since we have our own design system for forms, we prefer overriding all of the components (widgets) using the theme setup. Our custom - themed - form component can be found in `components/forms/ThemedForm.tsx`. You can see it used on `pages/forms/[eform].tsx`.

You can find list of widgets, fields and templates to override in the react-jsonschema-form docs linked above.

## How to create new RJSF component 
1. Create **new component** in `/components/forms/` - if your new component is composed out of multiple components, create folder for all of these components. It's important to keep your component **controlled** by **value** and **onChange** event.
2. Add your new component to **styleguide**, to show how it works. You should create component **ShowCase** in `/components/styleguide/showcases/` where you will show all possible versions of component wrapped in Wrapper and Stack. Then you will use ShowCase in  `/pages/styleguide`.
3. To use correctly your component in RJSF, I would encourage you to create **widget wrapper** (where you will use component) in `/components/forms/widgets/` for multiple reasons.
4. First reason to use widget wrapper is usage of **custom props** in your component. All RJSF widgets have [these props](https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets) available to use. But we may want to use some more custom props. They can be passed in **options** object in prop. You should read all custom props from options in widget wrapper and pass it to original component.
5. Second reason to use widget wrapper is **handling of onChange and value types**. Some components like DatePicker, Select or Upload may have not primitive types like string, number or array etc., which are needed in RJSF.  It's necessary to handle value and onChange types, to be compatible with original component.
6. **Map** your widget component **into schema**. In `/components/forms/ThemedForm.tsx` add it in object **theme** inside **widgets** property. You can also choose special name of component in RJSF.
7. Now we can use component in any RJSF form. For **testing** purposes, we can use it in `/backend/forms/test`. We can reach this form in browser at url `/forms/test`.
8. Add new form widget in **schema.json**. There is list of all form steps. It's better to create new step where you can create multiple form widgets which will use your custom component. You can read how to add custom component in schema.json at [RJSF docs](https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets). You need to choose value and optionally also title and which form widgets will be required.
9. Define which custom component will be used in **uiSchema.json**. Do not forget, you must define form widgets exactly like they are **nested** in schema.json. It's possible to choose which custom component will be used in form for chosen widget through `"ui:widget"` with name you choose when you mapped your component in ThemedForm. If you want to forbid default label, you can set `"ui:label"` to false. It's possible to set here multiple component props. All custom props, which are not defined by RJSF, is possible to set through `"ui:options"`. You will find more about uiSchema again in [RJSF docs](https://react-jsonschema-form.readthedocs.io/en/docs/advanced-customization/custom-widgets-fields/#adding-your-own-custom-widgets).
10. When finished, add description of widget to docs here to know, how to set correctly uiSchema.
