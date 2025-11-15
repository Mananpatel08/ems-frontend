export interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    profile_photo: string;
    form_id: string;
    user_role: string;
    date_joined: string;
};

type Pagination = {
    current_page: number,
    page_size: number,
    total_items: number,
    total_pages: number,
    has_next: boolean,
    has_previous: boolean
}

export interface UserResponse {
    status: boolean;
    message: string;
    pagination: Pagination;
    data: User[];
}