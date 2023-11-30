import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiInputModule } from '@taiga-ui/kit';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'tg-root',
  standalone: true,
  imports: [CommonModule, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiInputModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  public readonly title = 'taiga-ui';
  public readonly testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });
}
