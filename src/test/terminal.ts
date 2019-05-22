import { Terminal } from '../core/Terminal'

export function test_terminal_ts(){
  typeof alert === 'undefined'? console.log(Terminal) : alert(Terminal)
}