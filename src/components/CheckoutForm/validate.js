const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default values => {
    return sleep(2000).then(() => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        } else if (values.name.length > 40) {
          errors.name = 'Must be 40 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
    })
  };