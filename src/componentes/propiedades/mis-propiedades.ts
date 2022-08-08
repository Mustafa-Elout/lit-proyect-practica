/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('mis-propiedades')
export class MisPropiedades extends LitElement {
  static override styles = css`
   
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';


  @property({type: String})
  cadena ="Esta es la cadena";
  @property({type: Number})
  numero =12;

  override render() {
    return html`
      <h1>Mis propiedades</h1>
      <p>${this.name}</p>
      <p>${this.cadena}</p>
      <p>${this.numero}</p>
      <slot></slot>
    `;
  }

 


}

declare global {
  interface HTMLElementTagNameMap {
    'mis-propiedades': MisPropiedades;
  }
}
