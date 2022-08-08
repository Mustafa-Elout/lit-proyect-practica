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
import { customElement, property, } from 'lit/decorators.js';
let MisCondiciones = class MisCondiciones extends LitElement {
    constructor() {
        super(...arguments);
        this.valor = 5;
    }
    render() {
        return this.valor == 5
            ? html `<h2>El número vale: ${this.valor}</h2>`
            : html `<h2>En número no vale 5</h2>`;
    }
};
MisCondiciones.styles = css `
    
   `;
__decorate([
    property({ type: Number })
], MisCondiciones.prototype, "valor", void 0);
MisCondiciones = __decorate([
    customElement('mis-condiciones')
], MisCondiciones);
export { MisCondiciones };
//# sourceMappingURL=mis-condiciones.js.map