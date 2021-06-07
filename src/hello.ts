export const greeter = (person: string): string => {
  return `Hello, ${person}!`;
};

function testGreeter() {
  const user = "dyoshizawa";
  Logger.log(greeter(user));
}
