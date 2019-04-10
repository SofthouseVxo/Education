import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-rctive-forms-validation',
  templateUrl: './rctive-forms-validation.component.html'
})
export class RctiveFormsValidationComponent {
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
