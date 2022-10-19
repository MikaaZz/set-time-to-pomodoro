export function tempoParaSegundos(tempo: string) {
  // Split: quebra um string em um array de varios strings
  // Couxetes, define os objetos recebidos do split e define um padrão "0" se não receber valor
  const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');

  const horasEmSegundos = Number(horas) * 3600;
  const minutosEmSegundos = Number(minutos) * 60;
  return horasEmSegundos + minutosEmSegundos + Number(segundos);
}
