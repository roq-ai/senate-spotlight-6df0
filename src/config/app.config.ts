interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Creator', 'Job Poster'],
  tenantName: 'Organization',
  applicationName: 'Senate Spotlight',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organization profile',
    'Invite and remove Content Creators and Job Posters',
    'View all news articles and job postings',
    'Manage team members',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2095ec6d-6406-405f-b425-42a692dba72c',
};
