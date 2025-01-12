import { HttpResponse } from "../models/http-response-model"

export const ok = async (data:any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}


export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: { message: 'successful' },
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async (message: string): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: { error: 'Bad Request', message },
    };
};

export const unauthorized = async (message: string = 'Unauthorized'): Promise<HttpResponse> => {
    return {
        statusCode: 401,
        body: { error: 'Unauthorized', message },
    };
};

export const forbidden = async (message: string = 'Forbidden'): Promise<HttpResponse> => {
    return {
        statusCode: 403,
        body: { error: 'Forbidden', message },
    };
};

export const notFound = async (message: string = 'Not Found'): Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: { error: 'Not Found', message },
    };
};

export const internalServerError = async (
    message: string = 'Internal Server Error',
): Promise<HttpResponse> => {
    return {
        statusCode: 500,
        body: { error: 'Internal Server Error', message },
    };
};