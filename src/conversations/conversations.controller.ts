import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('conversations')
@Controller('conversations')
export class ConversationsController {}
