import { UserInterface } from 'interfaces/user';
import { CvTemplateInterface } from 'interfaces/cv-template';
import { GetQueryInterface } from 'interfaces';

export interface CvInterface {
  id?: string;
  content: string;
  user_id?: string;
  template_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  cv_template?: CvTemplateInterface;
  _count?: {};
}

export interface CvGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  template_id?: string;
}
