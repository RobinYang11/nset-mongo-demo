import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument } from './entities/user.schema';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private readonly ud: Model<UserDocument>,
  ) {}

  public async create(user: any): Promise<any> {
    return null;
  }
}
