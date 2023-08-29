export interface User {
    name: string;
    email: string;
    phone: number;
    userId: string
}
export interface AuthPayload {
    email: string;
    password: string;
    returnSecureToken: boolean
}
export interface AuthResponse {
    email: string;
    expiresIn: string;
    idToken: string;
    Kind: string;
    localId: string;
    refreshToken: string
}