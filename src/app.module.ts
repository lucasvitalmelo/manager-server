import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CustomerModule } from './customer/customer.module';
import { TagsModule } from './tags/tags.module';
import { TattooTypeModule } from './tattoo-type/tattoo-type.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, CustomerModule, TagsModule, TattooTypeModule, OrderModule, PaymentModule, AuthModule],
})
export class AppModule { }
