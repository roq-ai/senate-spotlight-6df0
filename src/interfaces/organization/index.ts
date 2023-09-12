import { JobInterface } from 'interfaces/job';
import { NewsInterface } from 'interfaces/news';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  status?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  job?: JobInterface[];
  news?: NewsInterface[];
  user?: UserInterface;
  _count?: {
    job?: number;
    news?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  status?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
