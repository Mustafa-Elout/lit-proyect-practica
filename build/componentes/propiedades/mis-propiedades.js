/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MisPropiedades = class MisPropiedades extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        this.cadena = "Esta es la cadena";
        this.numero = 12;
    }
    render() {
        return html `
      <h1>Mis propiedades</h1>
      <p>${this.name}</p>
      <p>${this.cadena}</p>
      <p>${this.numero}</p>
      <slot></slot>
    `;
    }
};
MisPropiedades.styles = css `
   
  `;
__decorate([
    property()
], MisPropiedades.prototype, "name", void 0);
__decorate([
    property({ type: String })
], MisPropiedades.prototype, "cadena", void 0);
__decorate([
    property({ type: Number })
], MisPropiedades.prototype, "numero", void 0);
MisPropiedades = __decorate([
    customElement('mis-propiedades')
], MisPropiedades);
export { MisPropiedades };
//# sourceMappingURL=mis-propiedades.js.map