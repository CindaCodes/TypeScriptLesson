// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

type UserId = stringOrNumber;

