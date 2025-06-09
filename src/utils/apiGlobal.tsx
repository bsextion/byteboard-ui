//BASE URL
export const api_domain = 'http://localhost:8080/api';

// URIs for different API endpoints
export const job_uri = '/jobs';
export const search_uri = '/search';
export const details_uri = '/details';

// Constructed Job API endpoints
export const api_job_search= `${api_domain}${job_uri}${search_uri}`;
export const api_job_details = `${api_domain}${job_uri}${details_uri}`;