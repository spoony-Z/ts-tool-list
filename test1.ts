interface IPerson {
  name: string
}

export function testA(): void {
  let testC: IPerson = {
  name: 'testA'
}
console.log(testC, "testA");
}