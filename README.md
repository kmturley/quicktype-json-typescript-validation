# quicktype-json-typescript-validation

Quicktype example validating json using TypeScript interfaces, built with:

* NodeJS 20.x
* TypeScript 5.x
* Quicktype 23.x


## Installation

Install dependencies using:

    npm install


## Usage

Run the dev version using:

    npm run quicktype
    npm run dev

Run a build using:

    npm run build
    npm start


## Example

Input:

```
export interface Animal {
  legs: number;
  colore: string;
  name: string;
}
```

Output validation code:
```
export class Convert {
    public static toAnimal(json: string): Animal {
        return cast(JSON.parse(json), r("Animal"));
    }
    public static animalToJson(value: Animal): string {
        return JSON.stringify(uncast(value, r("Animal")), null, 2);
    }
}
```


## Contact

For more information please contact kmturley
