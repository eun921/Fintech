import React from 'react'
import Header from '../component/Header'
import BalanceCard from '../component/balance/BalanceCard'

const Balance = () => {
    return (
        <div>
            <Header title="잔액조회"> </Header>
            <BalanceCard></BalanceCard>
        </div>
    )
}

export default Balance
