import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../component/header-heuristica/header-heuristica';

@Component({
  selector: 'app-h4-page',
  standalone: true,
  imports: [HeaderHeuristicaComponent],
  templateUrl: './h4-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H4Page { }
