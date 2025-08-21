export const environment = {
  production: true,
  // apiUrl: (window as any)['env']['API_URL'] || 'http://localhost:8080'
  apiHost: (window as any)['env']['API_HOST'] || 'localhost',
  apiPort: (window as any)['env']['API_PORT'] || '8080',
  get apiUrl() { return `http://${this.apiHost}:${this.apiPort}`; }
};
