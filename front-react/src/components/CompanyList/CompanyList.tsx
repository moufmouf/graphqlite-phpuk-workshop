import * as React from 'react';
import { CompaniesQuery } from '../../generated/graphql';
//import './styles.css';

interface Props {
    data: CompaniesQuery;
}

const className = 'CompanyList';

const CompanyList: React.FC<Props> = ({ data }) => (
    <div className={className}>
        <h3>Companies</h3>
        <ol className={`${className}__list`}>
            {!!data.companies &&
            data.companies.items.map(
                (company, i) =>
                    !!company && (
                        <li key={i} className={`${className}__item`}>
                            <strong>{company.name}</strong>
                            <ul>
                            { company.products.map(
                                product =>
                                    <li>{ product.name } ({ product.price }€)</li>
                            ) }
                            </ul>
                        </li>
                    ),
            )}
        </ol>
    </div>
);

export default CompanyList;
