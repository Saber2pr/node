import { Terminal } from '../core/terminal'

export function test_terminal_ts(){
  typeof alert === 'undefined'? console.log(Terminal) : alert(Terminal)
}