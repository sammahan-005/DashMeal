import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 100 }, // Monte à 100 utilisateurs en 30s
    { duration: '1m', target: 100 },  // Reste à 100 utilisateurs pendant 1 min
    { duration: '10s', target: 0 },   // Redescend à 0
  ],
};

export default function () {
  const res = http.get('http://localhost:3333/');
  
  // Vérifie que la réponse est 200 (OK)
  check(res, {
    'status est 200': (r) => r.status === 200,
    'temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(0.1); // Temps de pause entre deux requêtes par utilisateur


}