const mapping: Record<string, string> = {
  jobs: 'job',
  news: 'news',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
