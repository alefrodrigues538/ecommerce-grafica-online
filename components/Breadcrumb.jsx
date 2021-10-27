import React from 'react';
import Link from 'next/link'
const Breadcrumb = ({ RoutesArray }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={styles.breadcrumbContainer}>
                {
                    RoutesArray &&
                    RoutesArray.map((item, index) => {
                        return (
                            index !== RoutesArray.length - 1 ?
                                <li className={"breadcrumb-item"} key={index}>
                                    <Link href={item.route}>
                                        <span style={styles.pathCrumb}>{item.pathname}</span>
                                    </Link>
                                </li>
                                :
                                <li className={"breadcrumb-item active"} key={index}
                                    aria-current="page" style={styles.activeCrumb}>
                                    <p>{item.pathname}</p>
                                </li>
                        )

                    })
                }
            </ol>
        </nav>
    );
}

const styles = {
    breadcrumbContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 0,
        margin: '12px 0',
    },
    activeCrumb: {
        width: '250px',
    },
    pathCrumb: {
        textDeconration: 'none',
        color: 'var(--links-hover-color)',
        cursor: 'pointer'
    }
}

export default Breadcrumb;