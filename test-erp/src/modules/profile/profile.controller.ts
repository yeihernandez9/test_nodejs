import { Body, Controller, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ClientProfileData } from './profile.interface';

@Controller('profile')
export class ProfileController {
  constructor(private readonly _profileService: ProfileService) {}

  @Post('create')
  async createUser(@Body() clientProfile: ClientProfileData): Promise<any> {
    const createOrder = await this._profileService.create(clientProfile);
    return createOrder;
  }
}
