import * as Yup from "yup";

export const personalDetailsSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  middle_name: Yup.string().required("Middle name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  gender: Yup.string().required("Select your gender"),
  mobile_number: Yup.string().required("Mobile number is required"),
  pan_number: Yup.string().required("PAN number is required"),
  voter_id: Yup.string().optional(),
})

export const serviceDetailsSchema = Yup.object({
  joining_appointment_date: Yup.string().required("Joining date is required"),
  post_at_appointment: Yup.string().required("Post at appointment is required"),
  regular_appointment_date: Yup.string().optional(),
  ppan: Yup.string().optional(),
  pran: Yup.string().optional(),
  exams: Yup.array().of(Yup.object({ exam_type: Yup.string().required(), passing_date: Yup.string().optional(), attempt_count: Yup.number().transform((value, originalValue) => (originalValue === undefined ? undefined : value)).typeError("Attempt count must be a number").when("passing_date", { is: (val: string | undefined) => !!val && val !== "", then: (schema) => schema.required("Please enter attempt count"), otherwise: (schema) => schema.optional(), }), })),
});
