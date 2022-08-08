/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement } from 'lit/decorators.js';
 
 
 @customElement('mi-slot-chachi')
 export class MisSlotChachi extends LitElement {
   static override styles = css`
   `;
 
 
   override render() {
    return html`+ 
        <div>
            <h4>Slot chachi</h4>
            <slot name="cabecera"></slot>
            <slot name="pie"></slot>
        </div>
    `;
   }
 
  
 
 
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'mi-slot-chachi': MisSlotChachi;
   }
 }