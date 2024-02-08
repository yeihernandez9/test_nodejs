import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from '../profile/profile.entity';
import { Repository } from 'typeorm';
import { PaymentEntity } from './payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly _profileRepository: Repository<ProfileEntity>,
    @InjectRepository(PaymentEntity)
    private readonly _paymentRepository: Repository<PaymentEntity>,
  ) {}
  async create(payload: any): Promise<any> {
    const payment = new PaymentEntity();

    payment.value = payload.value;
    payment.createDate = payload.createDate;
    payment.paymentSystemName = payload.paymentSystemName;
    payment.item_id = payload.item_id;
    payment.quantity = payload.quantity;
    payment.sellingPrice = payload.sellingPrice;

    const profileData = payload.clienteProfileString;

    const profile = new ProfileEntity();
    profile.profile_id = payload.userProfileId;
    profile.userProfileId = profileData.userProfileId;
    profile.userProfileVersion = profileData.userProfileVersion;
    profile.firstName = profileData.firstName;
    profile.lastName = profileData.lastName;
    profile.email = profileData.email;
    profile.document = profileData.document;
    profile.corporateDocument = profileData.corporateDocument;
    profile.corporateName = profileData.corporateName;
    profile.documentType = profileData.documentType;
    profile.phone = profileData.phone;
    profile.tradeName = profileData.tradeName;
    profile.stateInscription = profileData.stateInscription;
    profile.corporatePhone = profileData.corporatePhone;
    profile.isCorporate = profileData.isCorporate;
    profile.customerClass = profileData.customerClass;
    profile.customerCode = profileData.customerCode;

    payment.profile = profile;

    await this._paymentRepository.save(payment);

    return { statusCode: 200, data: payment };
  }
}
