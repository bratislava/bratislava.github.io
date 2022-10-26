# Forms

> 🔧 This section, as well as the feature itself, is a work-in-progress.

We are using [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) with our custom form components as widgets to build our form system.

We use [AJV](https://ajv.js.org/) for validation (and so does react-jsonschema-form).

Read more about [JSON Schema](https://json-schema.org/).

## Developing custom form components

react-jsonschema-form let's you [extend the theme](https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-themes/), as well as specify [custom widgets](https://react-jsonschema-form.readthedocs.io/en/latest/usage/widgets/) and [templates](https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-templates/).

Since we have our own design system for forms, we prefer overriding all of the components (widgets) using the theme setup. Our custom - themed - form component can be found in `components/forms/ThemedForm.tsx`. You can see it used on `pages/forms/[eform].tsx`.

You can find list of widgets, fields and templates to override in the react-jsonschema-form docs linked above.

## Basic ‘architecture’ of frontend eForms:

- all form definitions, files and configs are exported from /backed/forms/index.ts
- everything is rendered in page/\[eform\].tsx - the eform param should match the key exported from backend/forms/index
- all [rjsf](https://github.com/rjsf-team/react-jsonschema-form) config (i.e. custom components to be rendered as input fields) are linked & configured in components/forms/ThemedForm.tsx
- all the logic between the steps (storing & persisting state, validating & submitting) should concentrate in useFormStepper hook in utils/forms.ts
- all the forms are submited to pages/api/forms/\[id\]/submit.ts - where id matches the key exported from backend/forms/index . Validation (json & xml), transformation, and forwarding to our forms BE service lives in here
- any supporting functionality should be ‘linked’ to ine of these entry points
