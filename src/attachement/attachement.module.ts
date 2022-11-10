import { Module } from '@nestjs/common';
import { AttachementService } from './attachement.service';
import { AttachementController } from './attachement.controller';

@Module({
  controllers: [AttachementController],
  providers: [AttachementService]
})
export class AttachementModule {}
