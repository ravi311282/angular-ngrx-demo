export const environment = {
  production: false,
};

export interface EnvironmentConfiguration {
  baseUrl: string;
  useInmemoryBackend: boolean;
}

const env: EnvironmentConfiguration = {
  baseUrl: '/',
  useInmemoryBackend: true,
};

// env.baseUrl= "http://localhost:8080";

let IMPORTS: any[] = [];

IMPORTS = [...IMPORTS];
const memoryBackEndModule =
  require('angular-in-memory-web-api').HttpClientInMemoryWebApiModule;
if (env.useInmemoryBackend) {
  IMPORTS.push(
    memoryBackEndModule.forRoot(
      require('../app/mocks/in-memory-backend').InMemoryBackend,
      {
        apiBase: '/',
        host: env.baseUrl,
        passThruUnkownUrl: true,
      }
    )
  );
}

export const ENV_IMPORTS = IMPORTS;
export const ENV_CONFIG = env;
