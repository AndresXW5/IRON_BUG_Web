export interface Admin {
  id_admin :number;
  nick :string;
  fname :string;
  lname :string;
  mail :string;
  centro :string;
  pssw :string;
  psswConf :string;
  avatar : string;
  }

export interface Usuario {
  id_usuario :number;
  nick :string;
  fname :string;
  lname :string;
  fecha :string;
  mail :string;
  pssw :string;
  psswConf :string;
  avatar : string;

  }

  export interface Ranking {
    id_r: number;
    id_usuario?: number;
    name_r: string;
    codigo: number;
  }

  export interface Entrega {
    id: number;
    nombre: string;
    puntos: number;
  }


  export interface producto {
    nombre: string,
    descripcion: string,
    precio: number
  }