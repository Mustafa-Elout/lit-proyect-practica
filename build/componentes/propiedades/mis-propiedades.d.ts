/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class MisPropiedades extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    cadena: string;
    numero: number;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mis-propiedades': MisPropiedades;
    }
}
//# sourceMappingURL=mis-propiedades.d.ts.map