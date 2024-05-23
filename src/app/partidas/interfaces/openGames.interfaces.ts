

export interface OpenGames {
  idPista: number;
  categoria: string;
  genero: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  puntosRanking: number;
  jugador1?: number;
  jugador2?: number;
  jugador3?: number;
  jugador4?: number;
  cerrada?: number;
  idReserva: number;
  idPartida: number;
  player?: string;
  apellidos1?: string;
  pos1?: string;
  cat1?: string;
  g1?: string;
  apellidos2?: string;
  pos2?: string;
  cat2?: string;
  g2?: string;
  apellidos3?: string;
  pos3?: string;
  cat3?: string;
  g3?: string;
  apellidos4?: string;
  pos4?: string;
  cat4?: string;
  g4?: string;
  show: boolean;
}
