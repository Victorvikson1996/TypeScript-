//Basic types

let id: number = 5

let company: string = 'Victor'

let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]

let arr: any[] = [1, true, 'hello']

//Tuple

let person: [number, string, boolean] = [1, 'Victor', true]

//Tuple Array

let employe: [number, string][]

employe = [
  [1, 'Brad'],
  [2, 'ken'],
  [2, 'james'],
]

//unions

let pid: string | number = 22

pid = '22'

//Enum

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
console.log(Direction2.Left)

// object

type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'john',
}

// Type Assertion

let cid: any = 1

// let customerId = <number>cid

let customerId = cid as number

//function

function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number): void {
  console.log(message)
}

//interfaces

interface Deal {
  id: number
  name: string
}

const deal: Deal = {
  id: 1,
  name: 'john',
}
