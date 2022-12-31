import { Component } from '@angular/core'; import { FieldWrapper } from '@ngx-formly/core';
@Component({
    selector: 'formly-horizontal-wrapper',
    template: `
     <div class="row col-12 p-3">
         <label [attr.for]="id"  *ngIf="props.label"> {{ props.label }} 
            <ng-container *ngIf="props.required ">*</ng-container> 
        </label> 
        <div class="p-3"> 
            <ng-template #fieldComponent></ng-template>
        </div>
        <div *ngIf="showError" class="col-sm-3 invalid-feedback d-block"> 
            <formly-validation-message [field]="field"></formly-validation-message> 
        </div> 
    </div> `,
})
export class FormlyHorizontalWrapper extends FieldWrapper { }