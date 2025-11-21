import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderHeuristicaComponent } from '../component/header-heuristica/header-heuristica';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-h9-page',
  standalone: true,
  imports: [HeaderHeuristicaComponent, FormsModule, CommonModule],
  templateUrl: './h9-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H9Page {
   user = '';
  password = '';

  error = signal(false);
  verPass = signal(false);

  estadoUsuario = signal<'neutral' | 'error' | 'ok'>('neutral');

  validarUsuario() {
    if (this.user.length === 0) {
      this.estadoUsuario.set('neutral');
    } else if (this.user.length < 3) {
      this.estadoUsuario.set('error');
    } else {
      this.estadoUsuario.set('ok');
    }
  }

  toggleVerPass() {
    this.verPass.update(v => !v);
  }

  login() {
    if (this.user !== 'admin' || this.password !== '1234') {
      this.error.set(true);
    } else {
      alert('Inicio de sesión exitoso');
      this.error.set(false);
    }
  }

  reintentar() {
    this.error.set(false);
  }
 }
