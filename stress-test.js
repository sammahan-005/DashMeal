import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 10000 }, // Monte à 100 utilisateurs en 30s
    { duration: '1m', target: 1000 },
    {duration: '1m', target: 500},
    { duration: '30s', target: 0 },   // Redescend à 0
  ],
};

export default function () {
  const res = http.get('https://snapquest-love.up.railway.app/');
  
  // Vérifie que la réponse est 200 (OK)
  check(res, {
    'status est 200': (r) => r.status === 200,
    'temps de réponse < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Temps de pause entre deux requêtes par utilisateur


}

