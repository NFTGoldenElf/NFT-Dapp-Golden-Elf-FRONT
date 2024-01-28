const BASE_API: string = '/api/v1'
//The BASE_API constant is the global prefix for all routes in the developed API.


const BASE_USER: string = BASE_API + '/users'
export const USER_ROUTES = {
    findUser: (address: string): string => `${BASE_USER}/findbyaddress/${address}`,
    createUser: `${BASE_USER}`,
    editUser: (id: string): string => `${BASE_USER}/${id}`,
    getAllUsersExceptMe: (myAddress: string): string => `${BASE_USER}/${myAddress}`
}

const BASE_NFT: string = BASE_API + '/nfts'
export const NFT_ROUTES = {
    createNFT: `${BASE_NFT}/create`
}

