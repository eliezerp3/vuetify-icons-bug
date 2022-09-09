const _unimport_useFormValidator = {
  required(errMsg) {
    return (v) => !!v || errMsg || "This field is required";
  },
  email(errMsg) {
    return (v) => /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      v
    ) || errMsg || "Must be a valid e-mail address";
  },
  number(errMsg) {
    return (v) => !Number.isNaN(parseInt(v)) || errMsg || "Must be a valid e-mail address";
  },
  minLength(min, errMsg) {
    return (v) => v.length >= min || errMsg || `Minimum of ${min} characters`;
  },
  maxLength(max, errMsg) {
    return (v) => v.length <= max || errMsg || `Maximum of ${max} characters`;
  },
  minNumber(min, errMsg) {
    return (v) => v >= min || errMsg || `Minimum value is ${min}`;
  },
  maxNumber(max, errMsg) {
    return (v) => v <= max || errMsg || `Maximum value is ${max}`;
  },
  equals(val, errMsg) {
    return (v) => v == val || errMsg || `Invalid Value`;
  },
  startsWith(val, errMsg) {
    return (v) => v.startsWith(val) || errMsg || `Must start with "${val}"`;
  },
  endsWith(val, errMsg) {
    return (v) => v.endsWith(val) || errMsg || `Must end with "${val}"`;
  },
  contains(val, errMsg) {
    return (v) => v.includes(val) || errMsg || `Must include "${val}"`;
  },
  dateYearsBefore(years, errMsg) {
    return (v) => {
      const yearsAgo = new Date().getFullYear() - years;
      const d = new Date();
      d.setFullYear(yearsAgo);
      return v <= d || errMsg || `Must be at least ${years} years ago`;
    };
  }
};
export {
  _unimport_useFormValidator as _
};
