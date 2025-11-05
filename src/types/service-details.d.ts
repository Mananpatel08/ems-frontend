const exam_types = "pre_service" | "ccc" | "ccc_plus" | "lrq" | "hrq";

type ServiceDetailsPayload = {
    joining_appointment_date: string;
    regular_appointment_date?: string;
    post_at_appointment: "revenue_clerk" | "revenue_talati" | "deputy_mamlatdar";
    ppan?: string;
    pran?: string;
    exams?: {
        exam_type: exam_types;
        passing_date: string;
        attempt_count: number;
    }[];
    root_form_id?: string;
};

export interface Exam {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    exam_type: exam_types;
    passing_date: string;
    attempt_count: number;
    created_by: string | null;
    updated_by: string | null;
    service_details: string;
}

export interface ServiceDetails {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    joining_appointment_date: string;
    regular_appointment_date: string;
    post_at_appointment: string;
    ppan: string;
    pran: string;
    exams: Exam[];
    is_step_completed: boolean;
    created_by: string;
    updated_by: string | null;
}
