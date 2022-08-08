/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property, state} from 'lit/decorators.js';
 
 
 @customElement('ejercicio-propiedades')
 export class EjercicioPropiedades extends LitElement {
   static override styles = css`
    
   `;
 
   /**
    * The name to say "Hello" to.
    */
   @property()
   valor  = 'Primer valor';
 
 

   @state({})
   contador =1;
 
   override render() {
     return html`
       <h1>Ejercicio Propiedades</h1>
       <p>${this.valor}</p>
       <p>${this.contador}</p>
       <slot></slot>
     `;
   }
 
  
 
 
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'ejercicio-propiedades': EjercicioPropiedades;
   }
 }
 