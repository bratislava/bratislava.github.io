# Custom RJSF widgets
In this part we will introduce how to use all created custom widgets in RJSF. At first, we must create form widget in schema.json and then set most of the props in uiSchema.json, as we are describing this in [previous chapter](/docs/bratislava.sk/forms-general).
If you want to disable default RJSF label, you can set `"ui:label"` to false in uiSchema.json.

## TextArea

#### schema.json
```
"textAreaExample": {
    "title": "Text area example",
    "type": "string",
    "default": "You can write default value here"
    }
```

#### uiSchema.json
```
"textAreaExample": {
    "ui:widget": "TextArea",
    "ui:placeholder": "You can write placeholder here",
    "ui:options": {
        "description": "This is description text",
        "tooltip": "This is tooltip text"
        }
    }
```
