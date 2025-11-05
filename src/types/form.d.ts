import { PersonalDetail } from "./personal-details";
import { ServiceDetails } from "./service-details";

export interface FormDataResponse {
  id: string;
  personal_details: PersonalDetail;
  service_details: ServiceDetails;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  step_completed: string[];
  status: string;
  completed_at: string | null;
  current_step: number;
  form_number: string;
  created_by: string;
  updated_by: string | null;
  user: string;
}

// interface FormDataResponse {
//   status: boolean;
//   message: string;
//   data: RootFormData;
//   errors: null | Record<string, string[]>;
// }
