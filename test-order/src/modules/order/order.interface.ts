export interface OrderData {
  id: string;
  sellerOrderId: string;
  orderFormId: string;
  origin: string;
  orderGroup: string;
  items: Item[];
  marketplaceItems: any;
  authorizedDate: string;
  subscriptionData: any;
  taxData: any;
  invoicedDate: any;
  marketplaceOrderId: any;
  marketplaceServicesEndpoint: any;
  clientProfileData: ClientProfileData;
  giftRegistryData: any;
  emailTracked: string;
  isCheckedIn: boolean;
  approvedBy: string;
  cancelledBy: any;
  canceledBy: any;
  cancelReason: any;
  callCenterOperatorData: any;
  allowCancellation: boolean;
  allowEdition: boolean;
  roundingError: number;
  salesChannel: string;
  salesChannelData: SalesChannelData;
  customData: any;
  changesAttachment: any;
  commercialConditionData: any;
  shippingData: ShippingData;
  packageAttachment: PackageAttachment;
  marketplace: any;
  contextData: ContextData;
  lastMessage: any;
  status: string;
  handlingData: any;
  documentVersion: any;
  appVersion: any;
  workflowData: WorkflowData;
  checkedInPickupPointId: any;
  fingerPrint: string;
  piiHidden: boolean;
  workflowIsInError: boolean;
  callCenterOperator: string;
  state: string;
  timeZoneCreationDate: string;
  timeZoneLastChange: string;
  userType: string;
  clientPreferencesData: ClientPreferencesData;
  orderId: string;
  workflowInstanceId: any;
  creationDate: string;
  totals: Total[];
  sequence: string;
  receiptData: ReceiptData;
  isCompleted: boolean;
  openTextField: any;
  affiliateId: string;
  value: number;
  hostname: string;
  followUpEmail: string;
  lastChange: string;
  sellers: Seller[];
  marketingData: MarketingData;
  ratesAndBenefitsData: RatesAndBenefitsData;
  paymentData: PaymentData;
  invoiceData: InvoiceData;
  storePreferencesData: StorePreferencesData;
  merchantName: any;
  itemMetadata: ItemMetadata;
  creationEnvironment: any;
  cancellationData: any;
  cancellationRequests: any;
}

export interface Item {
  productCategories: ProductCategories;
  uniqueId: string;
  id: string;
  productId: string;
  lockId: any;
  ean: string;
  quantity: string;
  seller: string;
  sellerSku: string;
  priceValidUntil: string;
  name: string;
  additionalInfo: AdditionalInfo;
  attachments: any[];
  attachmentOfferings: any[];
  assemblies: any[];
  refId: string;
  shippingPrice: any;
  price: number;
  sellingPrice: number;
  listPrice: number;
  manualPrice: any;
  tax: number;
  rewardValue: number;
  freightCommission: number;
  commission: number;
  priceTags: any[];
  imageUrl: string;
  detailUrl: string;
  components: any[];
  bundleItems: any[];
  offerings: any[];
  preSaleDate: any;
  isGift: boolean;
  taxCode: string;
  measurementUnit: string;
  unitMultiplier: number;
  marketingData: any;
  parentAssemblyBinding: any;
  parentItemIndex: any;
  callCenterOperator: any;
  priceDefinition: PriceDefinition;
  costPrice: any;
}

export interface ProductCategories {
  '2': string;
  '1': string;
  '21': string;
  '123': string;
  '2015': string;
}

export interface AdditionalInfo {
  brandName: string;
  brandId: string;
  categoriesIds: string;
  dimension: Dimension;
  productClusterId: string;
  commercialConditionId: string;
  offeringInfo: any;
  offeringType: any;
  offeringTypeId: any;
  categories: Category[];
}

export interface Dimension {
  cubicweight: number;
  height: number;
  length: number;
  weight: number;
  width: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface PriceDefinition {
  calculatedSellingPrice: number;
  total: number;
  sellingPrices: SellingPrice[];
  reason: any;
}

export interface SellingPrice {
  value: number;
  quantity: number;
}

export interface ClientProfileData {
  id: any;
  userProfileId: string;
  userProfileVersion: any;
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  corporateDocument: any;
  corporateName: any;
  documentType: string;
  phone: string;
  tradeName: any;
  stateInscription: string;
  corporatePhone: any;
  isCorporate: string;
  customerClass: any;
  customerCode: any;
}

export interface SalesChannelData {
  countryCode: any;
  currencyCode: any;
  currencyFormatInfo: any;
  currencyLocale: number;
  currencySymbol: any;
  timeZone: any;
  id: string;
  name: string;
  isActive: boolean;
}

export interface ShippingData {
  address: Address;
  logisticsInfo: LogisticsInfo[];
  trackingHints: any[];
  selectedAddresses: SelectedAddress[];
  availableAddresses: AvailableAddress[];
  contactInformation: any[];
}

export interface Address {
  addressType: string;
  receiverName: string;
  addressId: string;
  versionId: any;
  entityId: any;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  street: string;
  number: any;
  neighborhood: any;
  complement: string;
  reference: any;
  geoCoordinates: number[];
  contactId: any;
}

export interface LogisticsInfo {
  polygonName: string;
  shippingEstimate: string;
  entityId: any;
  versionId: any;
  pickupStoreInfo: PickupStoreInfo;
  deliveryWindow: any;
  sellingPrice: number;
  listPrice: number;
  price: number;
  deliveryChannel: string;
  deliveryCompany: string;
  deliveryIds: DeliveryId[];
  shippingEstimateDate: string;
  deliveryChannels: DeliveryChannel[];
  itemId: string;
  shipsTo: string[];
  slas: Sla[];
  addressId: string;
  selectedDeliveryChannel: string;
  lockTTL: string;
  selectedSla: string;
  itemIndex: number;
  pickupPointId: any;
  transitTime: string;
}

export interface PickupStoreInfo {
  isPickupStore: boolean;
  friendlyName: any;
  address: any;
  additionalInfo: any;
  dockId: any;
}

export interface DeliveryId {
  courierId: string;
  warehouseId: string;
  dockId: string;
  courierName: string;
  quantity: number;
  totalListPrice: any;
  accountCarrierName: string;
  kitItemDetails: any[];
}

export interface DeliveryChannel {
  id: string;
  stockBalance: number;
}

export interface Sla {
  pickupPointId: any;
  pickupStoreInfo: PickupStoreInfo2;
  tax: number;
  listPrice: number;
  price: number;
  deliveryWindow: any;
  availableDeliveryWindows: AvailableDeliveryWindow[];
  lockTTL: string;
  shippingEstimateDate?: string;
  shippingEstimate: string;
  deliveryIds: DeliveryId2[];
  name: string;
  deliveryChannel: string;
  id: string;
  pickupDistance?: number;
  polygonName: string;
  transitTime: string;
}

export interface PickupStoreInfo2 {
  isPickupStore: boolean;
  friendlyName: any;
  address: any;
  additionalInfo: any;
  dockId: any;
}

export interface AvailableDeliveryWindow {
  startDateUtc: string;
  endDateUtc: string;
  price: number;
  listPrice: any;
  tax: number;
}

export interface DeliveryId2 {
  courierId: string;
  warehouseId: string;
  dockId: string;
  courierName: string;
  quantity: number;
  totalListPrice: any;
  accountCarrierName: string;
  kitItemDetails: any[];
}

export interface SelectedAddress {
  addressType: string;
  receiverName: string;
  addressId: string;
  versionId: any;
  entityId: any;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  street: string;
  number: any;
  neighborhood: any;
  complement: string;
  reference: any;
  geoCoordinates: number[];
  contactId: any;
}

export interface AvailableAddress {
  addressType: string;
  receiverName: string;
  addressId: string;
  versionId: any;
  entityId: any;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  street: string;
  number: any;
  neighborhood: any;
  complement: string;
  reference: any;
  geoCoordinates: number[];
  contactId: any;
}

export interface PackageAttachment {
  packages: Package[];
}

export interface Package {
  courier: string;
  description: any;
  invoiceNumber: string;
  invoiceValue: number;
  invoiceUrl: string;
  issuanceDate: string;
  trackingNumber: string;
  invoiceKey: string;
  trackingUrl: string;
  embeddedInvoice: string;
  type: string;
  items: Item2[];
  courierStatus: CourierStatus;
  cfop: any;
  lastChange: string;
  restitutions: any;
  volumes: number;
}

export interface Item2 {
  itemIndex: number;
  id: string;
  quantity: number;
  price: number;
  description: any;
  unitMultiplier: number;
}

export interface CourierStatus {
  deliveredDate: string;
  status: string;
  finished: boolean;
  data: any[];
}

export interface ContextData {
  loggedIn: boolean;
  hasAccessToOrderFormEnabledByLicenseManager: boolean;
  userAgent: string;
  userId: string;
}

export interface WorkflowData {
  instances: Instance[];
  mainFlowIndex: number;
}

export interface Instance {
  id: string;
  name: string;
  currentStepName: string;
  currentStepDescription: string;
  lastChange: string;
  isInError: boolean;
  isInAutomaticRetry: boolean;
  creationDate: string;
  owner: string;
  version: string;
  timeLine: TimeLine[];
  logicTimeLine: LogicTimeLine[];
  steps: Step[];
  currentLogicalStep: string;
}

export interface TimeLine {
  stepName: string;
  date: string;
  parentStepName: string;
}

export interface LogicTimeLine {
  stepName: string;
  date: string;
}

export interface Step {
  name: string;
  next: Next[];
  systemWillMove: boolean;
  actionsAllowed: any;
  start?: boolean;
}

export interface Next {
  name: string;
  next: any;
  systemWillMove: boolean;
  actionsAllowed?: ActionsAllowed;
  expectFlow?: boolean;
  isAnEnd?: boolean;
}

export interface ActionsAllowed {
  type: string;
}

export interface ClientPreferencesData {
  locale: string;
  optinNewsLetter: boolean;
}

export interface Total {
  id: string;
  name: string;
  value: number;
  alternativeTotals: any;
}

export interface ReceiptData {
  receiptCollection: ReceiptCollection[];
}

export interface ReceiptCollection {
  receiptType: string;
  date: string;
}

export interface Seller {
  id: string;
  name: string;
  logo: string;
  fulfillmentEndpoint: string;
  subSellerId: string;
}

export interface MarketingData {
  utmSource: any;
  utmMedium: any;
  utmCampaign: any;
  utmPartner: any;
  utmipage: any;
  utmiPart: any;
  utmiCampaign: any;
  coupon: any;
  marketingTags: string[];
}

export interface RatesAndBenefitsData {
  rateAndBenefitsIdentifiers: RateAndBenefitsIdentifier[];
  teaser: any;
}

export interface RateAndBenefitsIdentifier {
  id: string;
  name: string;
  featured: boolean;
  description: any;
  matchedParameters: MatchedParameters;
  additionalInfo: any;
}

export interface MatchedParameters {
  'product@CatalogSystem': string;
}

export interface PaymentData {
  giftCards: any[];
  transactions: Transaction[];
}

export interface Transaction {
  isActive: boolean;
  transactionId: string;
  merchantName: string;
  payments: Payment[];
  sharedTransaction: boolean;
  status: any;
}

export interface Payment {
  bankIssuedInvoiceIdentificationNumberFormatted: any;
  bankIssuedInvoiceIdentificationNumber: any;
  parentAccountId: any;
  accountId: any;
  dueDate: any;
  group: string;
  isGiftCardDiscount: any;
  giftCardName: any;
  giftCardCaption: any;
  giftCardProvider: any;
  giftCardId: any;
  redemptionCode: any;
  tid: any;
  koinUrl: any;
  url: any;
  expireYear: any;
  expireMonth: any;
  cvv2: any;
  lastDigits: any;
  firstDigits: any;
  cardNumber: any;
  cardHolder: any;
  referenceValue: number;
  connectorResponses: ConnectorResponses;
  installments: number;
  value: number;
  paymentSystemName: string;
  paymentSystem: string;
  paymentOrigin: any;
  id: string;
  bankIssuedInvoiceBarCodeNumber: any;
  bankIssuedInvoiceBarCodeType: any;
  billingAddress: any;
}

export interface ConnectorResponses {}

export interface InvoiceData {
  address: any;
  userPaymentInfo: any;
  settleInvoices: string[];
  invoiceSubject: any;
}

export interface StorePreferencesData {
  countryCode: string;
  currencyCode: string;
  currencyFormatInfo: CurrencyFormatInfo;
  currencyLocale: number;
  currencySymbol: string;
  timeZone: string;
}

export interface CurrencyFormatInfo {
  CurrencyDecimalDigits: number;
  CurrencyDecimalSeparator: string;
  CurrencyGroupSeparator: string;
  CurrencyGroupSize: number;
  StartsWithCurrencySymbol: boolean;
}

export interface ItemMetadata {
  items: Item3[];
}

export interface Item3 {
  id: string;
  seller: string;
  name: string;
  skuName: string;
  productId: string;
  refId: string;
  ean: string;
  imageUrl: string;
  detailUrl: string;
  assemblyOptions: any[];
}
