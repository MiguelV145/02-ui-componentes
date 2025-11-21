import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderHeuristicaComponent } from '../component/header-heuristica/header-heuristica';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-h8-page',
  imports: [HeaderHeuristicaComponent, ],
  templateUrl: './h8-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H8Page {
  avanzado = signal(false);

  toggleAvanzado() {
    this.avanzado.update(v => !v);
  }

 }
