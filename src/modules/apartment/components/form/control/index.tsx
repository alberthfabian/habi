import { Input } from "../input";
// import Textarea from './Textarea'
import { Select } from "../select";
// import RadioButtons from './RadioButtons'
// import CheckboxGroup from './CheckboxGroup'
// import DatePicker from './DatePicker'
// import ChakraInput from './ChakraInput'

function Control(props: any) {
  const { type, ...rest } = props;

  switch (type) {
    case "input":
      return <Input {...rest} />;
    case "email":
      return <Input {...rest} />;
    case "password":
      return <Input {...rest} />;
    // case 'textarea':
    //   return <Textarea {...rest} />
    case "select":
      return <Select {...rest} />;
    // case 'radio':
    //   return <RadioButtons {...rest} />
    // case 'checkbox':
    //   return <CheckboxGroup {...rest} />
    // case 'date':
    //   return <DatePicker {...rest} />
    // case 'chakraInput':
    //   return <ChakraInput {...rest} />
    default:
      return null;
  }
}

export default Control;
