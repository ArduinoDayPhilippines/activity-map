// API Stubs for Authentication
// TODO: Replace with actual API calls when backend is ready

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    data?: {
        userId: string;
        token: string;
    };
}

// Simulated delay to mimic real API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function loginUser(request: LoginRequest): Promise<LoginResponse> {
    // Simulate API call delay
    await delay(1500);

    // Basic validation
    if (!request.email || !request.password) {
        return {
            success: false,
            message: "All fields are required",
        };
    }

    // Password length validation
    if (request.password.length < 6) {
        return {
            success: false,
            message: "Password must be at least 6 characters",
        };
    }

    // Simulate successful login
    return {
        success: true,
        message: "Login successful! Welcome back.",
        data: {
            userId: `user_${Date.now()}`,
            token: `token_${Date.now()}`,
        },
    };
}
