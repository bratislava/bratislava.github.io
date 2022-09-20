# Forms

> 🔧 This section, as well as the feature itself, is a work-in-progress.

We are using [react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form) with our custom form components as widgets to build our form system.

We use [AJV](https://ajv.js.org/) for validation (and so does react-jsonschema-form).

Read more about [JSON Schema](https://json-schema.org/).

## Developing custom form components

react-jsonschema-form let's you [extend the theme](https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-themes/), as well as specify [custom widgets](https://react-jsonschema-form.readthedocs.io/en/latest/usage/widgets/) and [templates](https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/custom-templates/).

Since we have our own design system for forms, we prefer overriding all of the components (widgets) using the theme setup. Our custom - themed - form component can be found in `components/forms/ThemedForm.tsx`. You can see it used on an example page `pages/_forms-ui-sample.tsx`.

You can find list of widgets, fields and templates to override in the react-jsonschema-form docs linked above.
