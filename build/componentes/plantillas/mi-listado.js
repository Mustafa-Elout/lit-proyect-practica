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
let MiListado = class MiListado extends LitElement {
    constructor() {
        super(...arguments);
        this.alumnos = ['Musta', 'Iván', 'Andrea'];
    }
    render() {
        return html `
        <ul>
          ${this.alumnos.map((alumno) => html `<li>Alumno: <b>${alumno}</b></li>`)}
        </ul>
    `;
    }
};
MiListado.styles = css `
    
   `;
__decorate([
    property({ type: Array })
], MiListado.prototype, "alumnos", void 0);
MiListado = __decorate([
    customElement('mi-listado')
], MiListado);
export { MiListado };
//# sourceMappingURL=mi-listado.js.map