import { Controller, Get, Inject, Injectable, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/user')
export default class UserController {
  
  constructor( private readonly userService: UserService) {}

  @Post('/addUser')
  public async addUser(user: any): Promise<any> {
    return this.userService.create(user);
  }
}
