import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import {
  ClientProfileData,
  DeliveryId,
  Item,
  LogisticsInfo,
  OrderData,
  Payment,
  ShippingData,
} from './order.interface';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LogisticEntity } from '../logistics/logistics.entity';
import { ProfileEntity } from '../profile/profile.entity';
import { ShoppingEntity } from '../shopping/shopping.entity';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly _orderRepository: Repository<OrderEntity>,
    @InjectRepository(ProfileEntity)
    private readonly _profileRepository: Repository<ProfileEntity>,
    @InjectRepository(ShoppingEntity)
    private readonly _shoppingRepository: Repository<ShoppingEntity>,
    @InjectRepository(LogisticEntity)
    private readonly _logisticRepository: Repository<LogisticEntity>,
  ) {}
  async create(data: OrderData): Promise<any> {
    const dataString: OrderData = data;
    const itemsString: Item[] = dataString.items;
    const clienteProfileString: ClientProfileData =
      dataString.clientProfileData;
    const shopping: ShippingData = dataString.shippingData;
    const logisticString: DeliveryId[] = shopping.logisticsInfo[0].deliveryIds;
    const payment: Payment[] = dataString.paymentData.transactions[0].payments;

    const order = new OrderEntity();

    order.item_id = itemsString[0].id;
    order.item_cuantity = itemsString[0].quantity;
    order.order_id = dataString.id;

    const profile = new ProfileEntity();

    profile.profile_id = clienteProfileString.userProfileId;
    profile.userProfileId = clienteProfileString.userProfileId;
    profile.userProfileVersion = clienteProfileString.userProfileVersion;
    profile.firstName = clienteProfileString.firstName;
    profile.lastName = clienteProfileString.lastName;
    profile.email = clienteProfileString.email;
    profile.document = clienteProfileString.document;
    profile.corporateDocument = clienteProfileString.corporateDocument;
    profile.corporateName = clienteProfileString.corporateName;
    profile.documentType = clienteProfileString.documentType;
    profile.phone = clienteProfileString.phone;
    profile.tradeName = clienteProfileString.tradeName;
    profile.stateInscription = clienteProfileString.stateInscription;
    profile.corporatePhone = clienteProfileString.corporatePhone;
    profile.isCorporate = clienteProfileString.isCorporate;
    profile.customerClass = clienteProfileString.customerClass;
    profile.customerCode = clienteProfileString.customerCode;

    order.profile = profile;

    const shipping = new ShoppingEntity();
    order.shopping = shipping;

    const logistic = new LogisticEntity();
    logistic.warehouseId = logisticString[0].warehouseId;
    logistic.deliveryCompany = shopping.logisticsInfo[0].deliveryCompany;

    order.logistic = logistic;

    await order.save();

    await this.sendToCRM(order);
    await this.sentToERP(dataString, clienteProfileString, payment);

    return { statusCode: 200, data: order };
  }
  async sentToERP(
    dataString: OrderData,
    clienteProfileString: ClientProfileData,
    payment: Payment[],
  ): Promise<any> {
    const url = 'http://localhost:3002/api/payment/create';
    const data = {
      value: dataString.value,
      createDate: dataString.creationDate,
      clienteProfileString,
      paymentSystemName: payment[0].paymentSystemName,
      item_id: dataString.items[0].id,
      quantity: dataString.items[0].quantity,
      sellingPrice: dataString.items[0].sellingPrice,
    }; // Los datos que deseas enviar en el cuerpo del POST

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      // Manejo de errores
      console.error('Error al realizar la solicitud POST:', error);
      throw error;
    }
  }

  async sendToCRM(order: any): Promise<any> {

    const url = 'http://localhost:3001/api/profile/create';
    const data = order.profile; // Los datos que deseas enviar en el cuerpo del POST

    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      // Manejo de errores
      console.error('Error al realizar la solicitud POST:', error);
      throw error;
    }
  }
}
