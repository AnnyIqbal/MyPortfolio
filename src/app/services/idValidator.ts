import { FormControl } from '@angular/forms';

interface Validator<T extends FormControl> {
    (c: T): { [error: string]: any }
}

export function ValidateId(c: FormControl) {
    let IdPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // correct pattern required
    // console.log(c.value);
    let a = IdPattern.test(c.value) ? null : {
        InValidPattern: true
    };
    return a;
}