import React from 'react';
import './BettingTable.css'; // Import the new CSS file

const BettingTable = () => {
    const bettingData = [
        { category: 'Best Join Bonus', site: 'Mostbet', link: 'https://mostbet1.in/' },
        { category: 'Cricket Specialists', site: '10CRIC', link: 'https://www.10crics.com/' },
        { category: 'Regular Promotions', site: '22Bet', link: 'https://22betluck.com/bonus/rules/1st-casino?btag=924820_a127bd15b4e049e6937aeaadd7f64a05' },
        { category: 'Great User Experience', site: 'PinUp', link: 'https://form-hindi-promo.pu550ev.com/?form_email=%7Bform_email%7D&form_phone=%7Bform_phone%7D&lang=en&lrrPath=sports&pc=0&s1=transaction_id&s2=9012&s3=&s4=&s5=&source=&st=3w683x8a&startTime=1748668852452767136&trId=d0t93d4tfl0koje09um0' },
        { category: 'Payment Methods', site: 'PariMatch', link: 'https://parimatchglobal.com/en/cricket/live?qtag=a30884_t61301198_c3444_s&x_pm_click=efc43062911f8e005725abda91847f84&redirect_creative_id=3444' },
    ];

    return (
        <div className="betting-container">
            <h2 className="betting-title">Top Betting Sites 2025</h2>
            <div className="table-wrapper">
                <table className="betting-table">
                    <thead>
                        <tr>
                            <th>Best Category</th>
                            <th>Best Betting Site</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bettingData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.category}</td>
                                <td>{item.site}</td>
                                <td>
                                    <a
                                        href={item.link}
                                        className="join-button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Join Offer
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BettingTable;
