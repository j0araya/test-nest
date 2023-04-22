import { before } from '@nestjs/swagger/plugin';

export const name = 'nestjs-swagger-transformer';
export const version = 1;

export function factory(cs) {
  return before(
    {
      // @nestjs/swagger/plugin options (can be empty)
    },
    cs.program, // "cs.tsCompiler.program" for older versions of Jest (<= v27)
  );
}
