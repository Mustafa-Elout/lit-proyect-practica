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
import { customElement } from 'lit/decorators.js';
let MisSlotChachi = class MisSlotChachi extends LitElement {
    render() {
        return html `+ 
        <div>
            <h4>Slot chachi</h4>
            <slot name="cabecera"></slot>
            <slot name="pie"></slot>
        </div>
    `;
    }
};
MisSlotChachi.styles = css `
   `;
MisSlotChachi = __decorate([
    customElement('mi-slot-chachi')
], MisSlotChachi);
export { MisSlotChachi };
//# sourceMappingURL=mi-slot-chachi.js.map