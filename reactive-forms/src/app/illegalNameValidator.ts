import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function illegalNameValidator(nameExp:RegExp): ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null=>{
        const myNameExp=nameExp.test(control.value);
        return myNameExp?{illegalName:{value:control.value}}:null;
    }
}