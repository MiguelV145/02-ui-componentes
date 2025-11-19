import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderHeuristicaComponent } from '../component/header-heuristica/header-heuristica';

@Component({
  selector: 'app-h2-page',
  imports: [HeaderHeuristicaComponent],
  templateUrl: './h2-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H2Page { 



  lastOperation = signal('');
  
  executeOperation(action: string) {
    this.lastOperation.set(action);
  }
}
