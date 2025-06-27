// 1) Inyectamos el JSON directamente para evitar CORS
const d = {
  "titulo": "Pronóstico: Al-Hilal vs Pachuca - Copa Mundial de Clubes (27 junio 2025)",
  "probabilidades_victoria": {
    "Al-Hilal": "61%",
    "Empate": "25%",
    "Pachuca": "14%"
  },
  "resultado_mas_probable": {
    "marca": "Al-Hilal 3-1 Pachuca",
    "fundamento": "Al-Hilal necesita ganar por al menos 2 goles para clasificar, y Pachuca ha encajado 5 goles en 2 partidos. Además, los saudíes tienen un ataque sólido (promedio de 2.5 goles últimos 10 partidos)."
  },
  "handicap_asiatico": [
    {
      "opcion": "Al-Hilal -1.0",
      "explicacion": "Necesitan ganar por 2+ goles. Su ofensiva (2.8 goles de media como local) frente a la defensa débil de Pachuca (19 goles encajados en últimos 20 partidos fuera) respalda esta opción."
    },
    {
      "opcion": "Pachuca +1.0",
      "explicacion": "Sólo viable si se espera victoria ajustada de Al-Hilal. Pachuca ha marcado en 5 de sus últimos 7 partidos, pero su eliminación reduce su motivación."
    }
  ],
  "apuesta_corners": {
    "recomendacion": "Más de 10.5 córners",
    "justificacion": "Al-Hilal superó los 10.5 córners en 6 de sus últimos 7 partidos gracias a centros constantes. Pachuca, al defender profundo, concede esquinas; ambos promedian 4+ córners por partido."
  },
  "jugadores_clave": {
    "Al-Hilal": [
      "Ruben Neves: Orquesta el mediocampo con pases clave. Único goleador del equipo en el torneo.",
      "Sergej Milinković-Savić: 6 participaciones en goles en últimos 10 partidos. Amenaza en remates (over 3.5 tiros por partido)."
    ],
    "Pachuca": [
      "Kenedy (John Kennedy): Alta actividad ofensiva (1.63 odds para over 0.5 tiros a puerta). Presencia constante en ataque.",
      "Elías Montiel: Autor de un gol en el torneo. Motor creativo en transiciones defensa-ataque."
    ]
  },
  "resumen_final": "Al-Hilal es favorito (61%) por su necesidad de victoria amplia y superioridad técnica, frente a un Pachuca eliminado y con defensas frágiles. Recomendamos: 1) Victoria de Al-Hilal (odds 1.62); 2) Más de 10.5 córners; 3) Ambos marcan: Sí (Pachuca anotó en sus 2 partidos; Al-Hilal encajó en 6/10 encuentros). Nota: La ausencia de Mitrović podría limitar su contundencia, pero no su dominio del juego."
};

// 2) Al cargar el DOM, pintamos todo
document.addEventListener("DOMContentLoaded", () => render(d));

function render(d) {
  // Título
  document.getElementById("titulo").innerHTML =
    `<h1>⚽ ${d.titulo}</h1>`;

  // Probabilidades
  let html = `<h2>📊 Probabilidades de victoria</h2><ul>`;
  for (let [eq, pct] of Object.entries(d.probabilidades_victoria)) {
    html += `<li><strong>${eq}:</strong> ${pct}</li>`;
  }
  html += `</ul>`;
  document.getElementById("probabilidades").innerHTML = html;

  // Resultado más probable
  document.getElementById("resultado").innerHTML =
    `<h2>⚽ Resultado más probable</h2>
     <p><strong>${d.resultado_mas_probable.marca}</strong><br>
     <em>${d.resultado_mas_probable.fundamento}</em></p>`;

  // Hándicap asiático
  html = `<h2>⚖️ Hándicap asiático</h2>`;
  d.handicap_asiatico.forEach(o => {
    html += `<h3>${o.opcion}</h3><p>${o.explicacion}</p>`;
  });
  document.getElementById("handicap").innerHTML = html;

  // Apuesta de córners
  document.getElementById("corners").innerHTML =
    `<h2>🎯 Apuesta de córners</h2>
     <p><strong>${d.apuesta_corners.recomendacion}</strong><br>
     ${d.apuesta_corners.justificacion}</p>`;

  // Jugadores clave
  html = `<h2>🌟 Jugadores clave</h2>`;
  for (let [team, players] of Object.entries(d.jugadores_clave)) {
    html += `<h3>${team}</h3><ul>`;
    players.forEach(p => html += `<li>${p}</li>`);
    html += `</ul>`;
  }
  document.getElementById("jugadores").innerHTML = html;

  // Resumen final
  document.getElementById("resumen").innerHTML =
    `<h2>📝 Resumen final</h2><p>${d.resumen_final}</p>`;
}