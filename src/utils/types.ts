export enum Urls {
  HOME = '/',
  SIGNUP = 'signup',
  DETAILS = 'details',
  LOGIN = 'login',
  ACCEPT_TERMS = 'terms',
  SHOPIFY_INTEGRATION = 'shopify',
  GENERAL_SETTINGS = 'general-settings',
  SEO = 'seo',
  TEST_AND_PLAY = 'test-play',
  GETTING_PAID = 'getting-paid',
  CHOOSE_PLAN = 'choose-plan',
  BRAND_LANGUAGE = 'brand-language',
  CONVERSATION_TOOLS = 'conversation-tools',
  ANALYTICS = 'analytics',
  INSIGHTS = 'insights',
  USER = 'user',
  REFERRALS = 'referrals',
  BILLING = 'billing',
  DISCOUNTS = 'discounts'
}

export type IButtonTypes = 'button' | 'submit' | 'reset' | undefined;

export interface IClearFn {
  (): void;
}

export interface ILink {
  linkTitle: string;
  linkUrl: string;
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}
