module.exports = {
  roots: ['<rootDir>/src'],
  // definindo a pasta onde iremos fazer a cobertura de testes
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  // transpilando/convertendo os arquivos ts antes de rodarmos os testes
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
