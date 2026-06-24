import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { carritoService } from '../../app/servicios/carritoService';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
constructor(public carritoService: carritoService) {}

}
