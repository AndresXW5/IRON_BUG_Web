export interface Admin {
  id_profesor :number;
  nick :string;
  fname :string;
  lname :string;
  mail :string;
  centro :string;
  pssw :string;
  psswConf :string;
  avatar : string;
  }

export interface Alumno {
  id_alumno :number;
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
    id_alumno?: number;
    name_r: string;
    codigo: number;
  }

  export interface Entrega {
    id: number;
    nombre: string;
    puntos: number;
  }


