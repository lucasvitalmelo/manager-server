import { PartialType } from '@nestjs/mapped-types';
import { CreateTattooTypeDto } from './create-tattoo-type.dto';

export class UpdateTattooTypeDto extends PartialType(CreateTattooTypeDto) {}
