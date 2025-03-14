/**
 * Створіть змінну, яка може містити або рядок, або число (union type)?
 * Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).
 */

let mixedType: string | number;
mixedType = "string";
mixedType = 25;

type EnableOrDisable = "enable" | "disable";
let value: EnableOrDisable;
value = "enable";
value = "disable";
