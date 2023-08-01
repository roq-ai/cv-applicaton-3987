import axios from 'axios';
import queryString from 'query-string';
import { CvInterface, CvGetQueryInterface } from 'interfaces/cv';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCvs = async (query?: CvGetQueryInterface): Promise<PaginatedInterface<CvInterface>> => {
  const response = await axios.get('/api/cvs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCv = async (cv: CvInterface) => {
  const response = await axios.post('/api/cvs', cv);
  return response.data;
};

export const updateCvById = async (id: string, cv: CvInterface) => {
  const response = await axios.put(`/api/cvs/${id}`, cv);
  return response.data;
};

export const getCvById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/cvs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCvById = async (id: string) => {
  const response = await axios.delete(`/api/cvs/${id}`);
  return response.data;
};
