# Custom RJSF widgets
In this part we will introduce how to use all created custom widgets in RJSF. At first, we must create form widget in schema.json and then set most of the props in uiSchema.json, as we are describing this in [previous chapter](/docs/bratislava.sk/forms-general).
If you want to disable default RJSF label, you can set `"ui:label"` to false in uiSchema.json.

## General schema
It's very important to keep structure of `schema.json` file with multiple layers. At top, we have object representing
whole form. It should have _title_ and _description_ of form. Because of parsing, it's important to write also return _type_,
in our case it's "object". All steps of form are kept in array called _allOf_. Thi is also case for form with one step.

Every step, which will be showed on frontend alone, is represented by object. This object includes another object _properties_.
Inside of properties, we can create multiple step groups, which can be named as we want.
They will be shown all at once in step, but this is good if we will want to divide
fields little also in same step. In these groups, we can define title of group and also required fields. 
Final layer in group is object properties, which is holding form fields and widgets we want to show in form.

We wrote down examples of these custom widgets after this subchapter. Here you can see example of _schema.json_ architecture.

```
{   
  /* this is whole form */
  "title": "Example form",
  "description": "this schema is example how to build a form",
  "type": "object",
  "allOf": [
     {  
        /* this is one step */
        "properties": {
            "myCustomWidgetGroup": { 
                /* this is one group of widgets in step */
                "title": "Custom group of widgets in step",
                "required": [ "myCustomWidget" ],
                "properties": {
                    "myCustomWidget": {
                        /* this is one widget */
                        "type": "string",
                        "title": "Custom form widget"
                    }
                }
            }
        }
     }
  ]
}
```

Now we will continue with examples of custom widgets from last layer of schema.json, which represents widgets which should be filled by user.

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
You can choose one of 4 types of leftIcon parameter. Also choose one of [input types](https://www.w3schools.com/html/html_form_input_types.asp) like text, password, mail, .etc.
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

## RadioButton

#### schema.json
```
"radioButton": {
    "type": "string",
    "title": "Radio buttons",
    "oneOf": [
        {
            "const": "screen",
            "title": "Screen",
            "tooltip": "This is some tooltip1"
        },
        {
            "const": "multiply",
            "title": "Multiply",
            "error": true
        },
        {
            "const": "overlay",
            "title": "Overlay"
        }
    ]
}
```

#### uiSchema.json
You can choose one of 3 types of parameter _variant_.
```
"radioButton": {
    "ui:widget": "RadioButton",
    "ui:options": {
        "className": "flex flex-col gap-4",
        "variant": "basic" | "boxed" | "card"
    },
    "ui:value": "overlay"
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
