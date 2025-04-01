// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
let notInitialize: undefined;
const callback: (a: number) => number = (a: number): number => {
  return 100 + a;
};

console.log(age, username, toggle, empty, notInitialize, callback);
export {};
