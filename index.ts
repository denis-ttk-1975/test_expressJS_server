import http from 'http';
// импортируем типы для запроса и ответа
import { IncomingMessage, ServerResponse } from 'http';
console.log('In Node && TypeScript We Trust');
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req.url); // /hello
  console.log(req.method); // GET
  console.log(req.headers); // здесь будут заголовки запроса
});

server.listen(3000);
