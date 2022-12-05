# Custom RJSF widgets
In this part we will introduce how to use all created custom widgets in RJSF. At first, we must create form widget in schema.json and then set most of the props in uiSchema.json, as we are describing this in [previous chapter](/docs/bratislava.sk/forms-general).
If you want to disable default RJSF label, you can set `"ui:label"` to false in uiSchema.json.

## InputField

#### schema.json
```
"inputExample": {
    "title": "Input field example",
    "type": "string",
    "default": "You can write default value here"
}
```

#### uiSchema.json
You can choose one of 4 types of leftIcon parameter . Also choose one of [input types](https://www.w3schools.com/html/html_form_input_types.asp) like text, password, mail, .etc.
```
"inputExample": {
    "ui:widget": "InputField",
    "ui:placeholder": "You can write placeholder here",
    "ui:options": {
        "resetIcon": true,
        "leftIcon": "person" | "mail" | "call" | "lock",
        "type": "text",
        "description": "This is description text",
        "tooltip": "This is tooltip text",
        "explicitOptional": false,
        "className": "px-2 py-4"
    }
}
```

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
        "tooltip": "This is tooltip text",
        "explicitOptional": false,
        "className": "px-2 py-4"
    }
}
```

## SelectField

#### schema.json - one choice with string
In this type of creating options, _const_ represents _value_ and _title_ represents _label_.
```
"oneChoiceSelect": {
    "type": "string",
    "title": "One Choice Select",
    "oneOf": [
        {"const": "STU FEI", "title": "fakulta elektrotechniky a informatiky"},
        {"const": "STU FCHPT"},
        {"const": "STU FIIT", "title": "fakulta informatiky a informacnych technologii"}
    ]
}
```

#### schema.json - deprecated one choice with number
```
"deprecatedOneChoiceSelect": {
    "type": "number",
     "title": "Deprecated One Choice Select",
      "uniqueItems": true,
      "enum": [1, 2, 3, 4, 5, 6],
      "enumNames": ["One", "Two", "Three", "Four", "Five", "Six"]
}
```

#### schema.json - multi choice
```
"multiChoiceSelect": {
    "type": "array",
    "title": "Reached diplomas",
    "uniqueItems": true,
    "items": {
        "type": "string",
        "oneOf": [
            {"const": "STU FEI", "title": "fakulta elektrotechniky a informatiky"},
            {"const": "STU FCHPT"},
            {"const": "STU FIIT", "title": "fakulta informatiky a informacnych technologii"}
        ]
    }
}
```

#### uiSchema.json
```
"multiChoiceSelect": {
    "ui:widget": "SelectField",
    "ui:placeholder": "You can write placeholder here",
    "ui:options": {
        "dropdownDivider": true,
        "selectAllOption": true,
        "description": "This is descriptiont text",
        "tooltip": "This is tooltip text",
        "explicitOptional": false,
        "className": "px-2 py-4"
    }
}
```

## Upload

#### schema.json - one file
```
"importOneFile": {
    "type": "string"
}
```

#### schema.json - multi files
```
"importButtonMultipleFiles": {
    "type": "array",
    "items": {
        "type": "string"
    }
}
```

#### uiSchema.json
You can choose if you want _button_ or _drag&drop_ Upload component by option _type_.
```
"importButton": {
    "ui:widget": "Upload",
    "ui:options": {
        "type": "button" | "dragAndDrop",
        "size": 5,
        "accept": ".jpg,.pdf",
        "className": "px-2 py-4"
    }
}
```
