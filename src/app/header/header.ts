import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Footer } from "../footer/footer";
import { Auth } from '../service/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet, Footer],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(public auth : Auth) {}
}
