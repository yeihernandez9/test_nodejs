import { Injectable } from '@nestjs/common';
import { ClientProfileData } from './profile.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly _profileRepository: Repository<ProfileEntity>,
  ) {}
  async create(clientProfile: ClientProfileData): Promise<any> {
    const profile = new ProfileEntity();
    profile.profile_id = clientProfile.userProfileId;
    profile.userProfileId = clientProfile.userProfileId;
    profile.userProfileVersion = clientProfile.userProfileVersion;
    profile.firstName = clientProfile.firstName;
    profile.lastName = clientProfile.lastName;
    profile.email = clientProfile.email;
    profile.document = clientProfile.document;
    profile.corporateDocument = clientProfile.corporateDocument;
    profile.corporateName = clientProfile.corporateName;
    profile.documentType = clientProfile.documentType;
    profile.phone = clientProfile.phone;
    profile.tradeName = clientProfile.tradeName;
    profile.stateInscription = clientProfile.stateInscription;
    profile.corporatePhone = clientProfile.corporatePhone;
    profile.isCorporate = clientProfile.isCorporate;
    profile.customerClass = clientProfile.customerClass;
    profile.customerCode = clientProfile.customerCode;

    await this._profileRepository.save(profile);

    return { statusCode: 200, data: profile };
  }
}
