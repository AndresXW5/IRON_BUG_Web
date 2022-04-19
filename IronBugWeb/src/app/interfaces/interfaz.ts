export interface Profe {
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
    name_r: string;
    cont_r: number;

  }
