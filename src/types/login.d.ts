interface LoginTokens {
    refresh: string;
    access: string;
}

interface LoginResponse {
    status: boolean;
    message: string;
    data: LoginTokens;
    errors: null | Record<string, string[]>;
}

interface LoginFormData {
    email: string;
    password: string;
}