interface IPerson {
  name: string
}

export function testB(): void {
  let testC: IPerson = {
  name: 'testB'
}
console.log(testC, "testB");
}