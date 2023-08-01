const mapping: Record<string, string> = {
  cvs: 'cv',
  'cv-templates': 'cv_template',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
