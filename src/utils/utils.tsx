export const formatBalance = (rawBalance: number) => {
    const balance = rawBalance.toFixed(2)
    return `${balance} ETH`
}

export const formatChainAsNum = (chainId: bigint) => {
    const chainIdNum = Number(chainId)
    return chainIdNum
}