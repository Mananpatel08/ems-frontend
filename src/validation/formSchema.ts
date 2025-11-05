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
  regular_appointment_date: Yup.string().required("Regular appointment date is required"),
  post_at_appointment: Yup.string().required("Post is required"),
  ppan: Yup.string().required("PPAN is required"),
  pran: Yup.string().required("PRAN is required"),
  exams: Yup.array().of(
    Yup.object({
      exam_type: Yup.string().required("Exam type is required"),
      passing_date: Yup.string().required("Passing date is required"),
      attempt_count: Yup.number().required("Attempt count is required")
    })
  ).min(1, "At least one exam record required"),
  root_form_id: Yup.string().uuid("Invalid UUID").required("Root Form ID is required"),
});
