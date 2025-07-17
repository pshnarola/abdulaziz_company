import React from 'react'
import TextField from './TextField'
// import PasswordField from './PasswordField';
import SelectField from './SelectField';
import ComboBoxField from './ComboBoxField';
import TextareaField from './TextareaField';
// import RadioField from './RadioField';
// import DatePickerField from './DatePickerField';

const InputField = (props) => {
  const { type } = props;
  switch (type) {
    case 'text':
    case 'email':
    case 'phone':
    case 'url':
      return <TextField {...props} />

    // case 'password':
    //   return <PasswordField {...props} />

    case 'select':
      return <SelectField {...props} />

    case 'combobox':
      return <ComboBoxField {...props} />

    case 'textarea':
      return <TextareaField {...props} />

    // case 'radio':
    //   return <RadioField {...props} />

    // case 'date':
    //   return <DatePickerField {...props} />
  
    default:
      return <div>default</div>
  }
}

export default InputField