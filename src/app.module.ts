import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './components/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://xxx`,{
      user:"root",
      connectionName:"test",
      authSource:'admin',
      dbName:"panzi",
      pass:'1hbl#QTmongo',
    }),

    // MongooseModule.forRootAsync({
    //   connectionName: 'mongodb1',
    //   useFactory: () => ({
    //     uri: 'mongodb://',
    //     user:"root",
    //     authSource: 'admin',
    //     dbName: 'panzi',
    //     pass: '1hbl#QTmongo',
    //   }),
    // }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
