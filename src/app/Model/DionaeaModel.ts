export interface IConnections {
  connection: number;
  connection_type: string;
  connection_transport : string;
  connection_protocol : string;
  connection_timeStamp: string;
  connection_root: number;
  connection_parent: number;
  local_host:string;
  local_port:number;
  remote_host:string;
  remote_hostname : string;
  remote_port:number;
}