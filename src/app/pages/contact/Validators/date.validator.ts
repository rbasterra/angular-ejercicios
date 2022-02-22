import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dateValidator(): ValidatorFn{

    return (control: AbstractControl) : ValidationErrors | null => {
        const d = Date.parse(control.value);
        const currentDate = new Date();
        currentDate.setHours(1);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);

        return d >= currentDate.getTime() ? {dateCheck: {value: control.value}} : null;

        
    }
}