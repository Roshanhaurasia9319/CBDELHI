import React from 'react';
import './BettingTable.css'; // Import the new CSS file

const BettingTable = () => {
    const bettingData = [
        { category: 'Best Join Bonus', site: 'Mostbet', link: '#' },
        { category: 'Cricket Specialists', site: '10CRIC', link: '#' },
        { category: 'Regular Promotions', site: '22Bet', link: '#' },
        { category: 'Great User Experience', site: 'PinUp', link: '#' },
        { category: 'Payment Methods', site: 'PariMatch', link: '#' },
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
