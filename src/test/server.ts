import { Server } from '../core/server'

export function test_server_ts(){
  typeof alert === 'undefined'? console.log(Server) : alert(Server)
}