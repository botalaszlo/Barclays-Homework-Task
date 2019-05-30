import { NgModule } from '@angular/core';

import {
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule, 
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule
    ],
  exports: [
      MatButtonModule, 
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatListModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule
    ],
})
export class MaterialModule { }
