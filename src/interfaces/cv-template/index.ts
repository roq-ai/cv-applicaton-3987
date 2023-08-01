import { CvInterface } from 'interfaces/cv';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CvTemplateInterface {
  id?: string;
  name: string;
  content: string;
  admin_id?: string;
  created_at?: any;
  updated_at?: any;
  cv?: CvInterface[];
  user?: UserInterface;
  _count?: {
    cv?: number;
  };
}

export interface CvTemplateGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  admin_id?: string;
}
