import { Global, Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
