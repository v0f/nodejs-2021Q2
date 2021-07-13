import morgan from 'morgan';

morgan.token('query', (req: any) => JSON.stringify(req.query));
morgan.token('body', (req: any) => JSON.stringify(req.body));

export const requestLogger = morgan(':method :url :status :query :body');
