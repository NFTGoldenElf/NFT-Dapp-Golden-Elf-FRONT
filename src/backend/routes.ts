const BASE_API: string = '/api/v1'
//The BASE_API constant is the global prefix for all routes in the developed API.

export const USER_ROUTES = {
    getUsers: `${BASE_API}/users`,
    findUser: (address: string) => `${BASE_API}/users/findbyaddress/${address}`,
    createUser: `${BASE_API}/users`
}

