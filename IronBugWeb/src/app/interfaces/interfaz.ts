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


  export interface Productos {
    id: number,
    nombre: string,
    precio: number,
    descripcion: string,
    foto: string
  }

  export interface Carrito {
    id_prod: number;
    id_user?: number;
  }
