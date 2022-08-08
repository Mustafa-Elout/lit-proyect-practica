/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property, } from 'lit/decorators.js';
 
 
 @customElement('mis-condiciones')
 export class MisCondiciones extends LitElement {
   static override styles = css`
    
   `;
 

   @property({type:Number})
   valor  = 5;
 
 
   override render() {
    return this.valor == 5
        ? html`<h2>El número vale: ${this.valor}</h2>`
        : html`<h2>En número no vale 5</h2>`;
   }
 
  
 
 
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'mis-condiciones': MisCondiciones;
   }
 }