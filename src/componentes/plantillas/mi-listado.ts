/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property, } from 'lit/decorators.js';
 
 
 @customElement('mi-listado')
 export class MiListado extends LitElement {
   static override styles = css`
    
   `;
 

   @property({type:Array}) alumnos=['Musta', 'Iván', 'Andrea'];
 
 
   override render() {
    return html`
        <ul>
          ${this.alumnos.map((alumno)=>
              html`<li>Alumno: <b>${alumno}</b></li>`
            )}
        </ul>
    `;
   }
 
  
 
 
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'mi-listado': MiListado;
   }
 }