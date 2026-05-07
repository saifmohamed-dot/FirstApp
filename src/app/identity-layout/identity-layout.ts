import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-identity-layout',
  imports: [RouterLink, RouterOutlet, Footer],
  templateUrl: './identity-layout.html',
  styleUrl: './identity-layout.css',
})
export class IdentityLayout {}
