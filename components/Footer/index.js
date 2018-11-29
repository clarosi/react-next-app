import React from 'react';

import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                 <div>
                    <Link href="/index"><a>Home</a></Link>
                </div>           
                <div>
                    <Link href="/privacy"><a>Privacy</a></Link>
                </div>
                <div>
                    <Link href="/terms"><a>Terms and Conditions</a></Link>
                </div>
            </footer>
            <style global jsx>{`
                a:hover {
                    text-decoration: underline;
                }
                .footer {
                    display: flex;
                    padding-bottom: 20px;
                }
                .footer a {
                    color: #6c757d;
                }
                .footer div {
                    margin-right: 20px;
                }
            `}</style>
        </div>
    );
};

export default Footer;